import { useState } from 'react';

export default function NexusPlatform() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (adminId === '55455' && password === 'P@ss01Admin') { 
      setIsLoggedIn(true);
    } else {
      alert("خطأ في بيانات الدخول يا سيادة الرئيس!");
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{backgroundColor: '#000', color: '#FFD700', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial'}}>
        <h1>NEXUS-INJ GATEWAY</h1>
        <input type="text" placeholder="Admin ID" onChange={(e) => setAdminId(e.target.value)} style={{padding: '10px', margin: '10px', background: '#111', color: '#FFF', border: '1px solid #FFD700'}} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={{padding: '10px', margin: '10px', background: '#111', color: '#FFF', border: '1px solid #FFD700'}} />
        <button onClick={handleLogin} style={{padding: '10px 30px', background: '#FFD700', color: '#000', fontWeight: 'bold', cursor: 'pointer'}}>Login as President</button>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: '#000', color: '#FFF', minHeight: '100vh', padding: '20px', fontFamily: 'Arial'}}>
      <header style={{borderBottom: '2px solid #FFD700', paddingBottom: '10px', marginBottom: '20px'}}>
        <h2>PRESIDENT CONTROL CENTER | ID: 55455</h2>
      </header>
      <main>
        <div style={{background: '#111', padding: '20px', borderRadius: '10px', border: '1px solid #333'}}>
          <h3 style={{color: '#FFD700'}}>Bot Strategy: NEXUS-AI</h3>
          <p>Target Sell Price: <span style={{color: '#0F0'}}>60.00 USDT</span> (Updated)</p>
          <p>Network: USDT BEP20</p>
          <div style={{padding: '10px', background: '#000', borderLeft: '4px solid #0F0'}}>
            ● Monitoring Live Transactions...
          </div>
        </div>
      </main>
    </div>
  );
}
