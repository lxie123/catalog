import React from 'react';
import { B } from '../constants';

// "Become a partner" band — shown on the catalog and infra pages.
export function PartnerCTA({ href, onContribute }:{ href:string, onContribute:()=>void }) {
  return (
    <div className="k0-partner-cta" style={{marginTop:28,border:"1px solid "+B.border,borderRadius:10,background:"linear-gradient(104deg,"+B.bg1+" 25%,"+B.bg3+" 100%)",padding:"20px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20}}>
      <div style={{flex:"1 1 340px",minWidth:0}}>
        <div style={{fontSize:9.5,fontWeight:600,color:B.teal,textTransform:"uppercase",letterSpacing:"0.14em",marginBottom:6}}>For partners</div>
        <div style={{fontSize:18,fontWeight:700,color:B.textPri,letterSpacing:"-0.01em",lineHeight:1.35,marginBottom:6}}>List your product where platform teams are already shopping.</div>
        <p style={{fontSize:12.5,color:B.textSec,lineHeight:1.7,margin:0,maxWidth:"58ch"}}>Ship a Helm chart and a ServiceTemplate manifest. Mirantis validates it against the current k0rdent release and publishes it as verified.</p>
      </div>
      <a href={href} onClick={function(e:any){e.preventDefault();onContribute();}} style={{flexShrink:0,padding:"9px 20px",borderRadius:20,background:"linear-gradient(90deg,"+B.cyan+","+B.green+")",color:B.bg0,fontSize:11.5,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",textDecoration:"none",whiteSpace:"nowrap"}}>Become a partner</a>
    </div>
  );
}
