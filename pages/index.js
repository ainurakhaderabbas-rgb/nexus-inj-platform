import { useState } from 'react';
import { Shield, TrendingUp, Users, Zap } from 'lucide-react';

export default function NexusUltimate() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (adminId === '55455' && password === 'P@ss01Admin') { 
      setIsLoggedIn(true);
    } else {
      alert("بيانات الدخول خاطئة!");
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{backgroundColor:'#000', color:'#FFD700', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'sans-serif', backgroundImage:'radial-gradient(circle, #111 0%, #000 100%)'}}>
        <div style={{padding:'40px', background:'rgba(20,20,20,0.8)', borderRadius:'20px', border:'2px solid #FFD700', textAlign:'center', boxShadow:'0 0 30px rgba(255,215,0,0.2)'}}>
          <h1 style={{fontSize:'3rem', marginBottom:'10px', textShadow:'0 0 10px #FFD700'}}>NEXUS-INJ</h1>
          <p style={{color:'#888', letterSpacing:'3px', marginBottom:'30px'}}>PRESIDENTIAL PORTAL</p>
          <input type="text" placeholder="IDENTITY ID" onChange={(e)=>setAdminId(e.target.value)} style={{width:'100%', padding:'15px', marginBottom:'15px', background:'#000', border:'1px solid #333', color:'#FFD700', borderRadius:'5px'}} />
          <input type="password" placeholder="ACCESS KEY" onChange={(e)=>setPassword(e.target.value)} style={{width:'100%', padding:'15px', marginBottom:'25px', background:'#000', border:'1px solid #333', color:'#FFD700', borderRadius:'5px'}} />
          <button onClick={handleLogin} style={{width:'100%', padding:'15px', background:'#FFD700', color:'#000', fontWeight:'bold', cursor:'pointer', border:'none', borderRadius:'5px'}}>INITIALIZE SYSTEM</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor:'#050505', color:'#FFF', minHeight:'100vh', padding:'30px', fontFamily:'sans-serif'}}>
      <div style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #FFD700', paddingBottom:'20px', marginBottom:'30px'}}>
        <h2 style={{color:'#FFD700'}}>CONTROL CENTER | {adminId}</h2>
        <div style={{color:'#0F0', display:'flex', alignItems:'center', gap:'10px'}}><Zap size={18}/> BEP20 ACTIVE</div>
      </div>
      
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'25px'}}>
        <div style={{background:'#111', padding:'25px', borderRadius:'15px', border:'1px solid #333', boxShadow:'inset 0 0 10px rgba(255,215,0,0.05)'}}>
          <div style={{display:'flex', alignItems:'center', gap:'10px', color:'#FFD700', marginBottom:'15px'}}><TrendingUp/> <h3>RSI BOT STRATEGY</h3></div>
          <p>BUY AT: <span style={{color:'#0F0', fontWeight:'bold'}}>RSI 20-30</span></p>
          <p>SELL AT: <span style={{color:'#F00', fontWeight:'bold'}}>RSI 60</span></p>
          <div style={{marginTop:'15px', height:'5px', background:'#222', borderRadius:'10px'}}><div style={{width:'65%', height:'100%', background:'#FFD700'}}></div></div>
        </div>

        <div style={{background:'#111', padding:'25px', borderRadius:'15px', border:'1px solid #333'}}>
          <div style={{display:'flex', alignItems:'center', gap:'10px', color:'#FFD700', marginBottom:'15px'}}><Users/> <h3>AFFILIATE NETWORK</h3></div>
          <p style={{fontSize:'0.8rem', color:'#888'}}>REFERRAL LINK:</p>
          <div style={{background:'#000', padding:'10px', borderRadius:'5px', color:'#FFD700', fontSize:'0.7rem', border:'1px dashed #444'}}>
            https://nexus-inj-platform.vercel.app/?ref={adminId}
          </div>
        </div>
      </div>
    </div>
  );
}
