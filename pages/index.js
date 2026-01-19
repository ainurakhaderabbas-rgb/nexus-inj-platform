import { useState } from 'react';

export default function NexusPlatform() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // الدخول مبرمج بـ Admin ID: 55455 وكلمة السر المحددة
    if (adminId === '55455' && password === 'P@ss01Admin') { 
      setIsLoggedIn(true);
    } else {
      alert("عذراً سيادة الرئيس، البيانات غير صحيحة.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{backgroundColor: '#000', color: '#FFD700', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial'}}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '10px', textShadow: '0 0 10px #FFD700'}}>NEXUS CONTROL</h1>
        <p style={{marginBottom: '20px'}}>Official Presidential Portal</p>
        <input type="text" placeholder="Admin ID" onChange={(e) => setAdminId(e.target.value)} style={{padding: '12px', margin: '10px', width: '260px', borderRadius: '5px', background: '#111', color: '#FFF', border: '1px solid #FFD700'}} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={{padding: '12px', margin: '10px', width: '260px', borderRadius: '5px', background: '#111', color: '#FFF', border: '1px solid #FFD700'}} />
        <button onClick={handleLogin} style={{padding: '12px 60px', background: '#FFD700', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px'}}>LOGIN</button>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: '#000', color: '#FFF', minHeight: '100vh', padding: '20px', fontFamily: 'Arial'}}>
      <header style={{borderBottom: '2px solid #FFD700', paddingBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2 style={{color: '#FFD700'}}>PRESIDENT CENTER | ID: 55455</h2>
        <div style={{textAlign: 'right'}}>
          <span style={{color: '#0F0'}}>● BEP20 NETWORK ACTIVE</span>
        </div>
      </header>

      <main style={{marginTop: '30px'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
          
          {/* قسم استراتيجية RSI المطلوبة */}
          <div style={{background: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #333'}}>
            <h3 style={{color: '#FFD700', borderBottom: '1px solid #222', paddingBottom: '10px'}}>Trading Engine (RSI)</h3>
            <p>Target Currency: **USDT BEP20**</p>
            <div style={{background: '#000', padding: '15px', borderRadius: '10px', marginTop: '10px'}}>
              <p style={{margin: '5px 0'}}>Buy Trigger: <span style={{color: '#0F0'}}>RSI 20 - 30</span></p>
              <p style={{margin: '5px 0'}}>Sell Trigger: <span style={{color: '#F00'}}>RSI 60</span></p>
            </div>
            <p style={{fontSize: '0.8rem', color: '#888', marginTop: '10px'}}>● Bot is analyzing market momentum...</p>
          </div>

          {/* نظام الإحالات التلقائي */}
          <div style={{background: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #333'}}>
            <h3 style={{color: '#FFD700', borderBottom: '1px solid #222', paddingBottom: '10px'}}>Referral Program</h3>
            <p style={{fontSize: '0.9rem'}}>Presidential Invite Link:</p>
            <div style={{background: '#000', padding: '10px', borderRadius: '5px', wordBreak: 'break-all', fontSize: '0.8rem', color: '#FFD700', border: '1px dashed #444'}}>
              https://nexus-inj-platform.vercel.app/?ref=55455
            </div>
            <p style={{marginTop: '15px', fontSize: '0.8rem', color: '#aaa'}}>Commission: 10% on Profits</p>
          </div>

        </div>
      </main>
    </div>
  );
}
