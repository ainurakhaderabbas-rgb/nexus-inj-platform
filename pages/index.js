import React, { useState } from 'react';

export default function NexusApp() {
  const [isLogged, setIsLogged] = useState(false);
  const [balance, setBalance] = useState(0);
  const [subscribed, setSubscribed] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);

  // الألوان النيونية كما في v0
  const neonGreen = "#00FF94";

  if (!isLogged) {
    return (
      <div style={{backgroundColor:'#000', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', fontFamily:'monospace'}}>
        <div style={{border:`2px solid ${neonGreen}`, padding:'40px', borderRadius:'15px', textAlign:'center', boxShadow:`0 0 20px ${neonGreen}33`}}>
          <h1 style={{color:neonGreen, fontSize:'2.5rem', marginBottom:'20px', textShadow:`0 0 10px ${neonGreen}`}}>NEXUS ENGINE</h1>
          <input type="text" placeholder="IDENTITY ID" style={{width:'100%', padding:'12px', background:'#111', border:`1px solid #333`, color:neonGreen, marginBottom:'15px'}} />
          <button onClick={() => setIsLogged(true)} style={{width:'100%', padding:'15px', background:neonGreen, color:'#000', fontWeight:'bold', border:'none', cursor:'pointer'}}>INITIALIZE SYSTEM</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor:'#000', color:'#fff', minHeight:'100vh', padding:'20px', fontFamily:'monospace'}}>
      <header style={{borderBottom:`1px solid ${neonGreen}`, paddingBottom:'10px', display:'flex', justifyContent:'space-between'}}>
        <h2 style={{color:neonGreen}}>PRESIDENT CONTROL CENTER</h2>
        <span style={{color:neonGreen, fontSize:'0.8rem'}}>BEP20 ACTIVE | ID: 55455</span>
      </header>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'30px'}}>
        {/* كرت المحفظة */}
        <div style={{background:'#0A0A0A', padding:'20px', border:`1px solid #333`, borderRadius:'10px'}}>
          <p style={{color:'#888', margin:0}}>MY WALLET</p>
          <h1 style={{fontSize:'2.5rem', color:neonGreen}}>{balance.toFixed(2)} <small style={{fontSize:'1rem'}}>USDT</small></h1>
          <button onClick={() => setShowDeposit(true)} style={{width:'100%', padding:'10px', background:neonGreen, color:'#000', fontWeight:'bold', border:'none', marginTop:'10px', cursor:'pointer'}}>DEPOSIT (BEP20)</button>
        </div>

        {/* كرت الاشتراك */}
        <div style={{background:'#0A0A0A', padding:'20px', border:`1px solid #333`, borderRadius:'10px'}}>
          <p style={{color:'#888', margin:0}}>BOT SUBSCRIPTION</p>
          <p style={{color:'#fff'}}>Price: 5.00 USDT / Month</p>
          <button 
            onClick={() => { if(balance >= 5) { setBalance(balance-5); setSubscribed(true); } else { alert("Insufficient Balance"); } }}
            disabled={subscribed}
            style={{width:'100%', padding:'10px', background:subscribed ? '#333' : neonGreen, color:subscribed ? '#888' : '#000', fontWeight:'bold', border:'none', marginTop:'10px', cursor:'pointer'}}
          >
            {subscribed ? "SUBSCRIBED" : "ACTIVATE AUTO-TRADE"}
          </button>
        </div>
      </div>

      {/* استراتيجية RSI */}
      <div style={{marginTop:'30px', background:'#0A0A0A', padding:'20px', border:`1px solid ${neonGreen}`, borderRadius:'10px', textAlign:'center'}}>
        <h3 style={{color:neonGreen}}>AI STRATEGY: RSI SCALPER</h3>
        <p>BUY: <span style={{color:neonGreen}}>RSI 20-30</span> | SELL: <span style={{color:'#F00'}}>RSI 60</span></p>
        {subscribed && <div style={{color:neonGreen, padding:'10px', border:`1px dashed ${neonGreen}`, marginTop:'10px'}}>البوت يعمل الآن.. يقوم بمسح الأسواق تلقائياً.</div>}
      </div>

      {/* مودال الإيداع */}
      {showDeposit && (
        <div style={{position:'fixed', top:0, left:0, width:'100%', height:'100%', background:'rgba(0,0,0,0.9)', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div style={{background:'#111', padding:'30px', border:`1px solid ${neonGreen}`, borderRadius:'15px', maxWidth:'350px', textAlign:'center'}}>
            <h3 style={{color:neonGreen}}>DEPOSIT USDT (BEP20)</h3>
            <p style={{fontSize:'0.8rem', color:'#888'}}>ارسل المبلغ إلى العنوان التالي:</p>
            <div style={{background:'#000', padding:'10px', wordBreak:'break-all', color:'#fff', border:'1px solid #333'}}>0x71C7656EC7ab88b098defB751B7401B5f6d8976F</div>
            <button onClick={() => { setBalance(balance + 50); setShowDeposit(false); }} style={{marginTop:'20px', padding:'10px 20px', background:neonGreen, border:'none', fontWeight:'bold', cursor:'pointer'}}>تأكيد الدفع</button>
            <br/><button onClick={() => setShowDeposit(false)} style={{marginTop:'10px', background:'none', border:'none', color:'#555', cursor:'pointer'}}>إغلاق</button>
          </div>
        </div>
      )}

      <footer style={{marginTop:'50px', textAlign:'center', fontSize:'0.8rem', color:'#444'}}>
        SUPPORT: <a href="https://t.me/tradehubsy" style={{color:neonGreen, textDecoration:'none'}}>@tradehubsy</a>
      </footer>
    </div>
  );
}
