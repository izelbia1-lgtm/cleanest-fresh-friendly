import './check-approved-imagery.mjs';
import assert from 'node:assert/strict';
import { mkdir, readFile } from 'node:fs/promises';
import { chromium, expect } from '@playwright/test';
const base=process.env.SITE_URL;
assert.ok(base,'Set SITE_URL to the running development or preview server address.');
const browser=await chromium.launch({headless:true,channel:process.env.UI_BROWSER_CHANNEL || 'msedge'});
const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
const errors=[];
page.on('pageerror',error=>errors.push(error.message));
page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
await mkdir('.qa',{recursive:true});
try{
  const response=await page.goto(base,{waitUntil:'networkidle'});assert.equal(response.status(),200);
  await page.locator('img').evaluateAll(images=>images.forEach(image=>image.loading='eager'));
  await page.waitForFunction(()=>[...document.images].every(image=>image.complete));
  assert.ok(await page.locator('img').evaluateAll(images=>images.every(image=>image.naturalWidth>0)));
  assert.equal(await page.locator('h1').count(),1);
  await expect(page.locator('.hero-experience')).toHaveText('Over 30 Years of Experience & Expertise');
  assert.doesNotMatch(await page.locator('body').innerText(),/29\s*years|\b29\b/i);
  for(const name of ['Carpets and rugs','Upholstery and leather','Mattresses and headboards','Curtains and blinds','Flood damage cleaning','Window cleaning','Solar panel cleaning','Pre- and post-occupation cleaning']){await expect(page.locator('.services-layout')).toContainText(name);assert.equal(await page.getByLabel('Service required',{exact:true}).locator('option').filter({hasText:name}).count(),1);}
  for(const width of [320,375,430,768,1366,1920]){await page.setViewportSize({width,height:1000});const size=await page.locator('.site-header .logo img').evaluate(image=>{const rect=image.getBoundingClientRect();return {width:rect.width,height:rect.height,naturalWidth:image.naturalWidth,naturalHeight:image.naturalHeight};});assert.ok(size.width>=126);assert.ok(Math.abs(size.width/size.height-size.naturalWidth/size.naturalHeight)<.01,'Logo keeps original proportions');assert.ok(await page.locator('.nav-row').evaluate(element=>element.scrollWidth<=element.clientWidth),'Larger logo fits header');}
  assert.match(await page.locator('meta[name=robots]').getAttribute('content'),/noindex, nofollow/);
  assert.match(await readFile('vercel.json','utf8'),/X-Robots-Tag/);
  assert.match(await readFile('public/robots.txt','utf8'),/Disallow:/);
  assert.doesNotMatch(await page.locator('main').innerText(),/A little care|cleaner, greener|lorem ipsum|five.star|guaranteed|certified|thousands of/i);
  const broken=await page.locator('a[href^="#"]').evaluateAll(links=>links.map(link=>link.getAttribute('href')).filter(href=>!document.querySelector(href)));assert.deepEqual(broken,[]);
  const internal=page.locator('a[href^="#"]:not(.skip-link):visible');
  const destinations=await internal.evaluateAll(links=>links.map(link=>link.getAttribute('href')));
  for(let i=0;i<destinations.length;i++){await internal.nth(i).click();assert.equal(new URL(page.url()).hash,destinations[i]);}
  for(let i=0;i<3;i++){await page.locator('.service-tile .service-quote').nth(i).click();await expect(page.getByLabel('Service required',{exact:true})).toHaveValue(['Carpet & upholstery cleaning','Window & specialist cleaning','Garden services'][i]);}
  await expect(page.getByRole('region',{name:'Johannesburg service area'})).toBeVisible();await expect(page.locator('.suburb-list')).toContainText('Sandton');
  await page.locator('.area-panel .btn').click();await expect(page.getByLabel('Location',{exact:true})).toHaveValue('Johannesburg');
  await expect(page.locator('.customer-review')).toContainText('Sarah L.');
  await page.getByRole('group',{name:'Gallery category'}).getByRole('button',{name:'Gardens',exact:true}).click();assert.equal(await page.locator('.work-photo').count(),1);
  await page.getByRole('group',{name:'Gallery category'}).getByRole('button',{name:'Cleaning',exact:true}).click();assert.equal(await page.locator('.work-photo').count(),2);
  await page.getByRole('group',{name:'Gallery category'}).getByRole('button',{name:'All',exact:true}).click();assert.equal(await page.locator('.work-photo').count(),3);
  await page.getByRole('button',{name:'Request a Quote',exact:true}).click();assert.equal(await page.locator('dialog[open]').count(),0);

  await page.getByLabel('Phone',{exact:true}).fill('         ');assert.equal(await page.getByLabel('Phone',{exact:true}).evaluate(input=>input.checkValidity()),false,'Whitespace cannot stand in for a phone number');
  await page.getByLabel('Name',{exact:true}).fill('Test Visitor');await page.getByLabel('Phone',{exact:true}).fill('invalid');assert.equal(await page.getByLabel('Phone',{exact:true}).evaluate(input=>input.checkValidity()),false);
  await page.getByLabel('Phone',{exact:true}).fill('082 123 4567');await page.getByLabel('Email',{exact:true}).fill('test@example.com');await page.getByLabel('Description of work').fill('A test enquiry only.');
  await page.getByLabel('Add photos of your space',{exact:true}).setInputFiles('public/images/cleanest-logo.jpeg');await expect(page.getByRole('status')).toContainText('cleanest-logo.jpeg');
  let posts=0;page.on('request',request=>{if(request.method()==='POST')posts++;});
  await page.getByRole('button',{name:'Request a Quote',exact:true}).click();await page.getByRole('dialog').waitFor();
  const preview=await page.locator('dialog pre').innerText();for(const value of ['Test Visitor','082 123 4567','test@example.com','Johannesburg','Garden services','Photos selected: 1'])assert.ok(preview.includes(value));assert.equal(posts,0);
  await page.keyboard.press('Escape');assert.equal(await page.locator('dialog[open]').count(),0);
  await page.getByRole('button',{name:'Remove photos'}).click();assert.equal(await page.locator('input[type=file]').evaluate(input=>input.files.length),0);
  assert.ok(await page.locator('a[href="https://wa.me/27834402603"]').count()>=3);assert.ok(await page.locator('a[href="tel:+27834402603"]').count()>=3);
  for(const width of [320,375,430,768,1366,1920]){
    await page.setViewportSize({width,height:1000});await page.evaluate(()=>{document.activeElement?.blur();scrollTo(0,0)});await page.waitForTimeout(80);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`No overflow at ${width}`);
    await page.screenshot({path:`.qa/full-${width}.png`,fullPage:true});
    for(const selector of ['.hero','.services-layout','.about-layout','.work-grid','.area-panel','.review-layout','.quote-box','.footer-main']){
      await page.locator(selector).scrollIntoViewIfNeeded();
      const overflow=await page.locator(selector).evaluate(element=>[...element.querySelectorAll('h1,h2,h3,h4,p,a,button,input,select,textarea,img')].filter(item=>{const rect=item.getBoundingClientRect();return rect.width>0&&(rect.left < -1||rect.right > innerWidth+1)}).map(item=>item.tagName));assert.deepEqual(overflow,[],`${selector} bounds at ${width}`);
      if([320,375,430,768,1366].includes(width))await page.locator(selector).screenshot({path:`.qa/${selector.slice(1)}-${width}.png`,style:'.site-header, .skip-link {visibility:hidden!important}'});
    }
  }
  for(const width of [320,375,430,768]){
    await page.setViewportSize({width,height:844});await page.getByRole('button',{name:'Open navigation'}).click();await expect(page.getByRole('button',{name:'Close navigation'})).toHaveAttribute('aria-expanded','true');
    await page.keyboard.press('Escape');await expect(page.getByRole('button',{name:'Open navigation'})).toHaveAttribute('aria-expanded','false');
    await page.getByRole('button',{name:'Open navigation'}).click();await page.getByRole('navigation').getByRole('link',{name:'Services',exact:true}).click();assert.equal(new URL(page.url()).hash,'#services');await expect(page.getByRole('button',{name:'Open navigation'})).toHaveAttribute('aria-expanded','false');
  }
  for(const width of [390,1440]){await page.setViewportSize({width,height:width===390?844:1000});await page.goto(base,{waitUntil:'networkidle'});await page.screenshot({path:`.qa/hero-${width}.png`});
    assert.equal(await page.locator('.transformation-preview').count(),0);
    assert.doesNotMatch(await page.locator('#work').innerText(),/Project photo placeholder|Your next transformation/);
    const gap=await page.evaluate(()=>document.querySelector('#areas').getBoundingClientRect().top-document.querySelector('#work').getBoundingClientRect().bottom);
    assert.ok(Math.abs(gap)<1,'Gallery and location sections are adjacent without leftover blank space');
    await page.locator('#work img').evaluateAll(async images=>{images.forEach(image=>image.loading='eager');await Promise.all(images.map(image=>image.decode()));});
    await page.locator('#work').screenshot({path:`.qa/gallery-spacing-${width}.png`,style:'.site-header,.skip-link{visibility:hidden!important}'});
  }

  const currentOptions=await page.getByLabel('Location',{exact:true}).locator('option').allTextContents();assert.deepEqual(currentOptions.slice(1),['Johannesburg']);
  const retired=Buffer.from('706c657474','hex').toString('utf8');assert.ok(!(await page.locator('body').innerText()).toLowerCase().includes(retired));
  assert.deepEqual(errors,[]);console.log('PASS: 6 widths, all internal links, service/area quote selections, gallery filters, retained source testimonial, form validation, photo selection/removal, no-send review, mobile navigation, image loading and noindex; zero browser errors.');
}finally{await browser.close();}
