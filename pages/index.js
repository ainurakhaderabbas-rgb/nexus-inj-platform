import { useState } from 'react';

export default function NexusUltimate() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('login'); 
  const [adminId, setAdminId] = useState('');

  // ستايل فخم يجمع بين الـ 3D والنيون
  const theme = {
    bg: '#050505',
    gold: '#FFD700',
    glass: 'rgba(255, 215, 0, 0.05)',
    border: '1px solid rgba(255, 215, 0, 0.3)'
  };

  const handleLogin = () => {
    if (adminId === '55455') { 
      setIsLoggedIn(true);
    } else {
      alert("جاري التحقق من الهوية... (للتجربة ادخل 55455)");
      setIsLoggedIn(true); 
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{backgroundColor: theme.bg, color: theme.gold, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Orbitron, sans-serif'}}>
        <div style={{background: theme.glass, padding: '50px', borderRadius: '20px', border: theme.border, textAlign: 'center', backdropFilter: 'blur(10px)', boxShadow: '0 0 30px rgba(0,0,0,0.5)'}}>
          <h1 style={{fontSize: '3rem', textShadow: '0 0 20px #FFD700', marginBottom: '10px'}}>NEXUS-INJ</h1>
          <p style={{color: '#888', letterSpacing: '5px', marginBottom: '30px'}}>PRESIDENTIAL SYSTEM</p>
          <input type="text" placeholder="IDENTITY ID" onChange={(e)=>setAdminId(e.target.value)} style={{width: '100%', padding: '15px', marginBottom: '15px', background: '#000', border: '1px solid #333', color: theme.gold, borderRadius: '8px'}} />
          <button onClick={handleLogin} style={{width: '100%', padding: '15px', background: theme.gold, color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 0 15px #FFD700'}}>INITIALIZE</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: theme.bg, color: '#FFF', minHeight: '100vh', padding: '25px', fontFamily: 'sans-serif'}}>
      <header style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', paddingBottom: '20px'}}>
        <h2 style={{color: theme.gold}}>NEXUS PRO | {adminId === '55455' ? 'PRESIDENT' : 'USER'}</h2>
        <div style={{color: '#0F0', fontSize: '0.9rem'}}>● NETWORK: USDT BEP20 ACTIVE</div>
      </header>

      <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '25px', marginTop: '30px'}}>
        {/* منطقة الرسم البياني والاستراتيجية */}
        <div style={{background: '#0a0a0a', padding: '30px', borderRadius: '15px', border: theme.border}}>
          <h3 style={{color: theme.gold, marginBottom: '20px'}}>TRADING ANALYTICS (RSI 20-30 / 60)</h3>
          <div style={{height: '250px', border: '1px dashed #333', borderRadius: '10px', position: 'relative', background: 'linear-gradient(transparent 95%, #111 5%), linear-gradient(90deg, transparent 95%, #111 5%)', backgroundSize: '20px 20px'}}>
             <svg width="100%" height="100%"><path d="M0 180 L 100 150 L 200 190 L 300 120 L 400 160 L 500 80" fill="none" stroke={theme.gold} strokeWidth="3" /></svg>
             <div style={{position: 'absolute', top: '10px', right: '10px', color: '#0F0'}}>STATUS: BUY ZONE (RSI 28)</div>
          </div>
          <div style={{display: 'flex', gap: '20px', marginTop: '20px'}}>
             <div style={{flex: 1, padding: '15px', background: '#000', borderRadius: '10px', borderLeft: '5px solid #0F0'}}>
                <small style={{color: '#888'}}>AUTO-BUY TRIGGER</small>
                <div style={{fontSize: '1.2rem', color: '#0F0'}}>RSI 20 - 30</div>
             </div>
             <div style={{flex: 1, padding: '15px', background: '#000', borderRadius: '10px', borderLeft: '5px solid #F00'}}>
                <small style={{color: '#888'}}>AUTO-SELL TRIGGER</small>
                <div style={{fontSize: '1.2rem', color: '#F00'}}>RSI 60</div>
             </div>
          </div>
        </div>

        {/* منطقة المحفظة والإحالات */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '25px'}}>
          <div style={{background: '#0a0a0a', padding: '25px', borderRadius: '15px', border: theme.border}}>
             <h4 style={{color: theme.gold}}>MAIN WALLET</h4>
             <h2 style={{fontSize: '2rem', margin: '10px 0'}}>0.00 <small style={{fontSize: '0.8rem', color: '#888'}}>USDT</small></h2>
             <button style={{width: '100%', padding: '12px', background: theme.gold, color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>DEPOSIT BEP20</button>
          </div>
          <div style={{background: '#0a0a0a', padding: '25px', borderRadius: '15px', border: theme.border}}>
             <h4 style={{color: theme.gold}}>INVITATION LINK</h4>
             <p style={{fontSize: '0.7rem', color: '#888', wordBreak: 'break-all'}}>https://nexus-inj-platform.vercel.app/?ref={adminId}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
