import { useState, useEffect } from 'react';

export default function NexusUltimate() {
  const [screen, setScreen] = useState('landing');
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  // تأثيرات بصرية متحركة في الخلفية
  return (
    <div style={{
      backgroundColor: '#050505', color: '#FFD700', minHeight: '100vh', 
      fontFamily: '"Orbitron", sans-serif', overflowX: 'hidden',
      backgroundImage: 'radial-gradient(circle at center, #1a1a1a 0%, #000 100%)'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
        .glass-card {
          background: rgba(255, 215, 0, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 20px;
          box-shadow: 0 0 20px rgba(0,0,0,0.5), inset 0 0 10px rgba(255,215,0,0.05);
          transition: all 0.3s ease;
        }
        .glass-card:hover { transform: translateY(-5px); border-color: #FFD700; box-shadow: 0 0 30px rgba(255,215,0,0.2); }
        .neon-text { text-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700; }
        .moving-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; opacity: 0.1; pointer-events: none; }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }
        .floating-logo { animation: float 4s ease-in-out infinite; }
      `}</style>

      {/* شاشة الدخول الاحترافية */}
      {screen === 'landing' && (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'relative', zIndex: 1}}>
          <div className="floating-logo" style={{fontSize: '5rem', fontWeight: 'bold', marginBottom: '10px'}} className="neon-text">NEXUS</div>
          <p style={{letterSpacing: '5px', color: '#aaa', marginBottom: '40px'}}>TRANSITIONAL PHASE SYSTEM</p>
          
          <div className="glass-card" style={{padding: '40px', width: '350px', textAlign: 'center'}}>
            <h3 style={{marginBottom: '20px'}}>SECURE ACCESS</h3>
            <input type="text" placeholder="IDENTITY ID" onChange={(e)=>setAdminId(e.target.value)} style={{width: '100%', padding: '15px', marginBottom: '15px', background: 'rgba(0,0,0,0.5)', border: '1px solid #333', color: '#FFD700', borderRadius: '5px', textAlign: 'center'}} />
            <input type="password" placeholder="ACCESS KEY" onChange={(e)=>setPassword(e.target.value)} style={{width: '100%', padding: '15px', marginBottom: '25px', background: 'rgba(0,0,0,0.5)', border: '1px solid #333', color: '#FFD700', borderRadius: '5px', textAlign: 'center'}} />
            <button onClick={() => {if(adminId==='55455') setScreen('admin'); else setScreen('user')}} style={{width: '100%', padding: '15px', background: '#FFD700', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer', boxShadow: '0 0 15px #FFD700'}}>INITIALIZE SYSTEM</button>
            <p style={{marginTop: '20px', fontSize: '0.8rem', color: '#666'}}>Don't have an ID? Contact Management.</p>
          </div>
        </div>
      )}

      {/* واجهة الرئيس 3D (Admin ID: 55455) */}
      {screen === 'admin' && (
        <div style={{padding: '40px', position: 'relative', zIndex: 1}}>
          <header style={{display: 'flex', justifyContent: 'space-between', marginBottom: '50px'}}>
            <h2 className="neon-text">PRESIDENT CONTROL CENTER</h2>
            <div className="glass-card" style={{padding: '10px 20px'}}>ID: 55455 | <span style={{color: '#0F0'}}>MASTER ACESS</span></div>
          </header>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px'}}>
            {/* بطاقة البوت RSI المتقدمة */}
            <div className="glass-card" style={{padding: '30px', gridColumn: 'span 2'}}>
              <h3 style={{color: '#FFD700', marginBottom: '20px'}}>AI TRADING ENGINE (RSI-60/20)</h3>
              <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <div style={{textAlign: 'center'}}>
                   <p style={{fontSize: '0.8rem', color: '#aaa'}}>BUY SIGNAL</p>
                   <h2 style={{color: '#0F0'}}>RSI 20-30</h2>
                </div>
                <div style={{fontSize: '2rem', color: '#333'}}>⇄</div>
                <div style={{textAlign: 'center'}}>
                   <p style={{fontSize: '0.8rem', color: '#aaa'}}>SELL SIGNAL</p>
                   <h2 style={{color: '#F00'}}>RSI 60</h2>
                </div>
              </div>
              <div style={{height: '100px', background: 'linear-gradient(90deg, #050505 0%, #111 50%, #050505 100%)', marginTop: '20px', borderRadius: '10px', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{fontSize: '0.8rem', color: '#0F0'}}>● SCANNING USDT BEP20 POOLS...</span>
              </div>
            </div>

            {/* بطاقة الإحصائيات */}
            <div className="glass-card" style={{padding: '30px'}}>
              <h3 style={{marginBottom: '20px'}}>NETWORK STATS</h3>
              <p>Active Users: <span style={{color: '#FFD700'}}>842</span></p>
              <p>Pool Volume: <span style={{color: '#FFD700'}}>1.2M USDT</span></p>
              <button style={{width: '100%', marginTop: '20px', padding: '10px', background: 'transparent', border: '1px solid #F00', color: '#F00', cursor: 'pointer'}}>EMERGENCY SHUTDOWN</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
