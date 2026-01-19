import { useState, useEffect } from 'react';

export default function NexusAutomated() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [balance, setBalance] = useState(0);

  const glassStyle = {
    background: 'rgba(255, 215, 0, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid #FFD700',
    borderRadius: '15px',
    padding: '25px',
    boxShadow: '0 0 20px rgba(255, 215, 0, 0.1)'
  };

  if (!isLoggedIn) {
    return (
      <div style={{backgroundColor:'#000', color:'#FFD700', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'sans-serif'}}>
        <div style={glassStyle}>
          <h1 style={{textAlign:'center', textShadow:'0 0 10px #FFD700'}}>NEXUS ENGINE</h1>
          <input type="text" placeholder="IDENTITY ID" style={{width:'100%', padding:'12px', margin:'10px 0', background:'#111', border:'1px solid #333', color:'#FFD700'}} />
          <button onClick={() => setIsLoggedIn(true)} style={{width:'100%', padding:'12px', background:'#FFD700', color:'#000', fontWeight:'bold', border:'none', cursor:'pointer'}}>INITIALIZE SYSTEM</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor:'#050505', color:'#FFF', minHeight:'100vh', padding:'20px', fontFamily:'sans-serif'}}>
      <header style={{display:'flex', justifyContent:'space-between', borderBottom:'2px solid #FFD700', paddingBottom:'15px'}}>
        <h2 style={{color:'#FFD700', margin:0}}>NEXUS AUTOMATED TERMINAL</h2>
        <div style={{color:'#0F0'}}>● STATUS: {hasSubscription ? 'BOT ACTIVE' : 'WAITING FOR SUBSCRIPTION'}</div>
      </header>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'30px'}}>
        {/* قسم المحفظة والإيداع */}
        <div style={glassStyle}>
          <h3 style={{color:'#FFD700'}}>MY WALLET</h3>
          <p style={{fontSize:'2rem'}}>{balance.toFixed(2)} <small>USDT</small></p>
          <button onClick={() => setBalance(balance + 50)} style={{width:'100%', padding:'10px', background:'#FFD700', color:'#000', fontWeight:'bold', border:'none', borderRadius:'5px', cursor:'pointer'}}>DEPOSIT USDT (BEP20)</button>
        </div>

        {/* قسم الاشتراك الذكي */}
        <div style={glassStyle}>
          <h3 style={{color:'#FFD700'}}>BOT SUBSCRIPTION</h3>
          <p>Price: 5.00 USDT / Month</p>
          <button 
            onClick={() => {if(balance >= 5) {setBalance(balance-5); setHasSubscription(true)} else alert('Insufficient Balance')}} 
            disabled={hasSubscription}
            style={{width:'100%', padding:'10px', background: hasSubscription ? '#333' : '#FFD700', color: hasSubscription ? '#888' : '#000', fontWeight:'bold', border:'none', borderRadius:'5px', cursor:'pointer'}}
          >
            {hasSubscription ? 'SUBSCRIBED' : 'ACTIVATE AUTO-TRADE'}
          </button>
        </div>

        {/* استراتيجية التداول الآلي */}
        <div style={{...glassStyle, gridColumn:'span 2'}}>
          <h3 style={{color:'#FFD700'}}>AI STRATEGY: RSI SCALPER</h3>
          <div style={{display:'flex', justifyContent:'space-around', textAlign:'center'}}>
             <div><p style={{color:'#888'}}>BUY SIGNAL</p><h4 style={{color:'#0F0'}}>RSI 20-30</h4></div>
             <div style={{fontSize:'2rem'}}>⇆</div>
             <div><p style={{color:'#888'}}>SELL SIGNAL</p><h4 style={{color:'#F00'}}>RSI 60</h4></div>
          </div>
          {hasSubscription && (
            <div style={{marginTop:'20px', padding:'10px', background:'rgba(0,255,0,0.1)', border:'1px dashed #0F0', textAlign:'center', color:'#0F0'}}>
              البوت يعمل الآن.. يقوم بمسح الأسواق وتنفيذ الصفقات تلقائياً.
            </div>
          )}
        </div>
      </div>

      <footer style={{marginTop:'40px', textAlign:'center', color:'#555', fontSize:'0.9rem'}}>
        للدعم الفني تواصل مع المطور على تلغرام: <a href="https://t.me/tradehubsy" style={{color:'#FFD700', textDecoration:'none'}}>@tradehubsy</a>
      </footer>
    </div>
  );
}
