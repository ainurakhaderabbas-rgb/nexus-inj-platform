import { useState, useEffect } from 'react';

export default function NexusPlatform() {
  const [view, setView] = useState('landing'); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [currentId, setCurrentId] = useState('');
  
  // نظام تخزين الحسابات (للمحاكاة حالياً)
  const [users, setUsers] = useState([]);

  const handleRegister = (id, pass) => {
    const newUser = { id, pass, role: 'user' };
    setUsers([...users, newUser]);
    alert("تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.");
    setView('login');
  };

  const handleLogin = (id, pass) => {
    if (id === '55455' && pass === 'P@ss01Admin') {
      setUserRole('admin');
      setIsLoggedIn(true);
    } else {
      const foundUser = users.find(u => u.id === id && u.pass === pass);
      if (foundUser) {
        setUserRole('user');
        setIsLoggedIn(true);
      } else {
        alert("خطأ في البيانات أو الحساب غير موجود!");
      }
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{backgroundColor:'#000', color:'#FFD700', minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', fontFamily:'Arial'}}>
        <div style={{padding:'40px', background:'rgba(255,215,0,0.05)', border:'1px solid #FFD700', borderRadius:'20px', textAlign:'center', width:'320px'}}>
          <h1 style={{fontSize:'2.5rem', textShadow:'0 0 10px #FFD700'}}>NEXUS</h1>
          {view === 'landing' && (
            <>
              <button onClick={()=>setView('login')} style={{width:'100%', padding:'12px', margin:'10px 0', background:'#FFD700', border:'none', fontWeight:'bold', cursor:'pointer'}}>LOGIN</button>
              <button onClick={()=>setView('register')} style={{width:'100%', padding:'12px', background:'transparent', border:'1px solid #FFD700', color:'#FFD700', fontWeight:'bold', cursor:'pointer'}}>CREATE ACCOUNT</button>
            </>
          )}
          {(view === 'login' || view === 'register') && (
            <div style={{display:'flex', flexDirection:'column'}}>
              <h3>{view === 'login' ? 'SIGN IN' : 'SIGN UP'}</h3>
              <input type="text" placeholder="ID Number" id="uid" style={{padding:'10px', margin:'10px 0', background:'#111', color:'#FFF', border:'1px solid #333'}} />
              <input type="password" placeholder="Password" id="upass" style={{padding:'10px', margin:'10px 0', background:'#111', color:'#FFF', border:'1px solid #333'}} />
              <button onClick={() => {
                const id = document.getElementById('uid').value;
                const pass = document.getElementById('upass').value;
                if(view === 'login') handleLogin(id, pass);
                else handleRegister(id, pass);
              }} style={{padding:'12px', background:'#FFD700', border:'none', fontWeight:'bold', marginTop:'10px'}}>CONTINUE</button>
              <p onClick={()=>setView('landing')} style={{fontSize:'0.8rem', marginTop:'15px', cursor:'pointer'}}>← Back</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{backgroundColor:'#050505', color:'#FFF', minHeight:'100vh', padding:'20px'}}>
      <header style={{borderBottom:'2px solid #FFD700', paddingBottom:'15px', display:'flex', justifyContent:'space-between'}}>
        <h2>{userRole === 'admin' ? 'PRESIDENT CENTER' : 'USER PANEL'}</h2>
        <span style={{color:'#0F0'}}>ID: {userRole === 'admin' ? '55455' : 'User'}</span>
      </header>
      
      <div style={{marginTop:'30px', display:'grid', gap:'20px'}}>
        <div style={{background:'#111', padding:'20px', borderRadius:'10px', border:'1px solid #333'}}>
          <h3 style={{color:'#FFD700'}}>RSI STRATEGY ACTIVE</h3>
          <p>BUY: 20-30 RSI | SELL: 60 RSI</p>
          <p>Network: USDT BEP20</p>
        </div>
        {userRole === 'admin' && (
          <div style={{background:'#111', padding:'20px', borderRadius:'10px', border:'1px solid #FFD700'}}>
             <h3 style={{color:'#FFD700'}}>Users List (Live)</h3>
             <p>Total Registered: {users.length}</p>
             {users.map((u, i) => (
               <div key={i} style={{fontSize:'0.8rem', borderBottom:'1px solid #222', padding:'5px 0'}}>User ID: {u.id} | Status: Online</div>
             ))}
          </div>
        )}
      </div>
    </div>
  );
}
 
