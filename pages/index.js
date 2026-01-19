import { useState } from 'react';

export default function NexusUltimate() {
  const [view, setView] = useState('landing'); // landing, login, register, dashboard
  const [adminId, setAdminId] = useState('');

  // تنسيقات الـ 3D والفخامة مباشرة بالكود
  const glassStyle = {
    background: 'rgba(255, 215, 0, 0.05)',
    backdropFilter: 'blur(15px)',
    border: '1px solid #FFD700',
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)'
  };

  const buttonStyle = {
    padding: '12px 30px',
    background: '#FFD700',
    color: '#000',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px',
    width: '200px'
  };

  if (view === 'landing') {
    return (
      <div style={{backgroundColor:'#000', color:'#FFD700', height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', fontFamily:'Arial'}}>
        <h1 style={{fontSize:'4rem', textShadow:'0 0 20px #FFD700', marginBottom:'10px'}}>NEXUS-INJ</h1>
        <p style={{letterSpacing:'5px', marginBottom:'40px'}}>TRANSITIONAL PHASE SYSTEM</p>
        <div style={{display:'flex', gap:'20px'}}>
          <button onClick={() => setView('login')} style={buttonStyle}>LOGIN</button>
          <button onClick={() => setView('register')} style={{...buttonStyle, background:'transparent', border:'1px solid #FFD700', color:'#FFD700'}}>CREATE ACCOUNT</button>
        </div>
      </div>
    );
  }

  if (view === 'login' || view === 'register') {
    return (
      <div style={{backgroundColor:'#000', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div style={glassStyle}>
          <h2 style={{color:'#FFD700', textAlign:'center'}}>{view === 'login' ? 'LOGIN' : 'CREATE ID'}</h2>
          <input type="text" placeholder="ENTER ID" onChange={(e)=>setAdminId(e.target.value)} style={{width:'100%', padding:'12px', margin:'10px 0', background:'#111', border:'1px solid #333', color:'#FFD700'}} />
          <input type="password" placeholder="PASSWORD" style={{width:'100%', padding:'12px', margin:'10px 0', background:'#111', border:'1px solid #333', color:'#FFD700'}} />
          <button onClick={() => {if(adminId==='55455') setView('dashboard'); else alert('Access Denied')}} style={buttonStyle}>INITIALIZE</button>
          <p onClick={() => setView('landing')} style={{cursor:'pointer', textAlign:'center', fontSize:'0.8rem'}}>← Back</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor:'#050505', color:'#FFF', minHeight:'100vh', padding:'30px', fontFamily:'Arial'}}>
      <header style={{borderBottom:'2px solid #FFD700', paddingBottom:'20px', marginBottom:'30px', display:'flex', justifyContent:'space-between'}}>
        <h2 style={{color:'#FFD700'}}>PRESIDENT CONTROL CENTER</h2>
        <div style={{color:'#0F0'}}>● BEP20 ACTIVE | ID: 55455</div>
      </header>
      
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px'}}>
        <div style={{background:'#111', padding:'20px', border:'1px solid #333', borderRadius:'10px'}}>
          <h3 style={{color:'#FFD700'}}>RSI BOT (AUTO)</h3>
          <p>BUY: <span style={{color:'#0F0'}}>RSI 20-30</span> | SELL: <span style={{color:'#F00'}}>RSI 60</span></p>
        </div>
        <div style={{background:'#111', padding:'20px', border:'1px solid #333', borderRadius:'10px'}}>
          <h3 style={{color:'#FFD700'}}>AFFILIATE</h3>
          <p>LINK: https://nexus-inj-platform.vercel.app/?ref=55455</p>
        </div>
      </div>
    </div>
  );
}
