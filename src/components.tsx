import { ArrowRight, MessageCircle } from 'lucide-react';
import { business } from './data';
import type { ReactNode } from 'react';

export function Logo(){return <a className="logo" href="#home" aria-label="Cleanest home"><img src="/images/cleanest-logo.png" alt="Cleanest — windows, carpets and gardens" width="237" height="150"/><span>Cleaning &<br/>garden care</span></a>;}
export function QuoteButton({onClick,children='Request a Quote',className=''}:{onClick?:()=>void;children?:ReactNode;className?:string}){return <a href="#contact" className={`btn btn-blue ${className}`} onClick={onClick}>{children}<ArrowRight size={18}/></a>;}
export function WhatsApp({className=''}:{className?:string}){return <a href={business.whatsapp} className={`btn btn-whatsapp ${className}`} target="_blank" rel="noreferrer"><MessageCircle size={18}/>WhatsApp us</a>;}
export function Heading({kicker,title,text,center=false}:{kicker:string;title:string;text?:string;center?:boolean}){return <div className={`heading ${center?'heading-center':''}`}><span className="kicker">{kicker}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>;}
const photoSizes:Record<string,[number,number]>={ 'newcarpet1.webp':[960,1280],
  'winc1.webp':[800,800], 'carpetteam.webp':[1600,1065],
  'newuph1.webp':[1280,960], 'newgarden2.webp':[960,1280],
};
export function Photo({file,alt,className='',priority=false}:{file:string;alt:string;className?:string;priority?:boolean}){const dimensions=photoSizes[file];return <img className={className} src={`/images/${file}`} alt={alt} width={dimensions?.[0]} height={dimensions?.[1]} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'} decoding="async"/>;}
