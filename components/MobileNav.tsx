"use client";
import {useEffect,useState} from "react";
const links=[["Home","/"],["Tools","/tools"],["Guides","/guides"],["About","/about"],["Contact","/contact"]];
export default function MobileNav(){
 const[open,setOpen]=useState(false);
 useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[]);
 const close=()=>setOpen(false);
 return <><button className="mobile-menu-button" type="button" aria-label={open?"Close navigation menu":"Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(v=>!v)}><span/><span/><span/></button>
 {open&&<div className="mobile-menu-backdrop open" onClick={close} aria-hidden="true"/>}
 <nav id="mobile-navigation" className={`mobile-navigation${open?" open":""}`} aria-label="Mobile navigation">{links.map(([label,href])=><a href={href} onClick={close} key={href}>{label}</a>)}</nav></>
}