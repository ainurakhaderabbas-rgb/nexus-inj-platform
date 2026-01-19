import { useState, useEffect } from 'react';

export default function NexusUltimate() {
  const [view, setView] = useState('landing');
  const [user, setUser] = useState({ id: '', balance: 0, isSubscribed: false });
  const [depositModal, setDepositModal] = useState(false);

  // الألوان الصحيحة بناءً على صورة v0 (image_15.png)
  const styles = {
    bg: '#111111', // خلفية داكنة جداً
    card: '#1A1A1A', // لون البطاقات
    green: '#00FF94', // اللون الأخضر النيوني (لون الخطوط والأزرار)
    red: '#FF3B30',
    text: '#FFFFFF',
    border: '1px solid #333333'
  };

  // --- شاشة البداية ---
  if (view === 'landing') {
    return (
      <div style={{background: styles.bg, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif'}}>
        <h1 style={{color: styles.green, fontSize: '3rem', marginBottom: '10px', textShadow: '0 0 20px rgba(0, 255, 148, 0.3)'}}>NEXUS-INJ</h1>
        <p style={{color: '#888', letterSpacing: '4px', marginBottom: '40px'}}>PRESIDENTIAL TRADING SYSTEM</p>
        <div style={{display: 'flex', gap: '20px'}}>
          <button onClick={() => setView('login')} style={{padding: '15px 40px', background: styles.green, border: 'none', borderRadius: '5px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer'}}>تسجيل الدخول</button>
          <button onClick={() => setView('register')} style={{padding: '15px 40px', background: 'transparent', border: `1px solid ${styles.green}`, color: styles.green, borderRadius: '5px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer'}}>إنشاء حساب</button>
        </div>
      </div>
    );
  }

  // --- شاشات التسجيل والدخول ---
  if (view === 'login' || view === 'register') {
    return (
      <div style={{background: styles.bg, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif'}}>
        <div style={{background: styles.card, padding: '40px', borderRadius: '10px', border: styles.border, width: '350px'}}>
          <h2 style={{color: styles.green, textAlign: 'center', marginBottom: '30px'}}>{view === 'login' ? 'LOGIN' : 'NEW ACCOUNT'}</h2>
          <input type="text" placeholder="User ID" style={{width: '100%', padding: '15px', marginBottom: '15px', background: '#000', border: '1px solid #333', color: '#FFF', borderRadius: '5px'}} />
          <input type="password" placeholder="Password" style={{width: '100%', padding: '15px', marginBottom: '25px', background: '#000', border: '1px solid #333', color: '#FFF', borderRadius: '5px'}} />
          <button onClick={() => setView('dashboard')} style={{width: '100%', padding: '15px', background: styles.green, border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer'}}>
            {view === 'login' ? 'ENTER SYSTEM' : 'REGISTER NOW'}
          </button>
          <p onClick={() => setView('landing')} style={{color: '#666', textAlign: 'center', marginTop: '20px', cursor: 'pointer'}}>← Back</p>
        </div>
      </div>
    );
  }

  // --- لوحة التحكم الرئيسية (Dashboard) ---
  return (
    <div style={{background: styles.bg, color: styles.text, minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif'}}>
      
      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #222', paddingBottom: '20px', marginBottom: '30px'}}>
        <h2 style={{color: styles.green, margin: 0}}>NEXUS PRO</h2>
        <div style={{textAlign: 'right'}}>
          <div style={{fontSize: '0.9rem', color: '#888'}}>ADMIN ID: 55455</div>
          <div style={{fontSize: '0.8rem', color: styles.green}}>● SYSTEM ONLINE</div>
        </div>
      </header>

      <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px'}}>
        
        {/* 1. الرسم البياني (اللون الأخضر الصحيح) */}
        <div style={{background: styles.card, padding: '25px', borderRadius: '15px', border: styles.border}}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
            <h3 style={{margin: 0}}>INJ/USDT</h3>
            <span style={{color: styles.green, fontSize: '1.2rem', fontWeight: 'bold'}}>$23.14 (+1.2%)</span>
          </div>
          <div style={{height: '250px', position: 'relative', borderLeft: '1px solid #333', borderBottom: '1px solid #333', background: 'linear-gradient(180deg, rgba(0,255,148,0.05) 0%, rgba(0,0,0,0) 100%)'}}>
            <svg width="100%" height="100%" preserveAspectRatio="none">
              <path d="M0 200 C 100 150, 200 220, 300 180 S 500 100, 600 120" fill="none" stroke={styles.green} strokeWidth="2" />
              <circle cx="600" cy="120" r="4" fill={styles.green} />
            </svg>
            <div style={{position: 'absolute', top: '10px', left: '10px', background: '#111', padding: '5px 10px', borderRadius: '4px', border: '1px solid #333', fontSize: '0.8rem'}}>
              RSI: <span style={{color: styles.green}}>28 (BUY ZONE)</span>
            </div>
          </div>
        </div>

        {/* 2. المحفظة والعمليات */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          
          <div style={{background: styles.card, padding: '25px', borderRadius: '15px', border: styles.border}}>
            <small style={{color: '#888'}}>TOTAL BALANCE</small>
            <h2 style={{fontSize: '2.5rem', margin: '10px 0'}}>{user.balance.toFixed(2)} <span style={{fontSize: '1rem', color: styles.green}}>USDT</span></h2>
            
            <button 
              onClick={() => setDepositModal(true)} 
              style={{width: '100%', padding: '12px', background: styles.green, border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px'}}
            >
              إيداع (Deposit)
            </button>
            <div style={{fontSize: '0.7rem', color: '#666', textAlign: 'center'}}>NETWORK: BEP20 (BSC)</div>
          </div>

          <div style={{background: styles.card, padding: '25px', borderRadius: '15px', border: user.isSubscribed ? `1px solid ${styles.green}` : styles.border}}>
            <h4 style={{margin: '0 0 10px 0'}}>AUTO-TRADING BOT</h4>
            <p style={{fontSize: '0.9rem', color: '#888', marginBottom: '15px'}}>Strategy: RSI 20-30/60 Scalping</p>
            
            {!user.isSubscribed ? (
              <div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem'}}>
                  <span>Cost:</span><span>5.00 USDT / Month</span>
                </div>
                <button 
                  onClick={() => {
                    if(user.balance >= 5) { setUser({...user, balance: user.balance - 5, isSubscribed: true}); }
                    else { alert('رصيدك غير كافٍ! يرجى الإيداع أولاً.'); }
                  }}
                  style={{width: '100%', padding: '10px', background: 'transparent', border: `1px solid ${styles.green}`, color: styles.green, borderRadius: '5px', cursor: 'pointer'}}
                >
                  تفعيل الاشتراك
                </button>
              </div>
            ) : (
              <div style={{textAlign: 'center', padding: '10px', background: 'rgba(0,255,148,0.1)', color: styles.green, borderRadius: '5px'}}>
                ✓ BOT ACTIVE & RUNNING
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. نافذة الإيداع المنبثقة (Deposit Modal) */}
      {depositModal && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)'}}>
          <div style={{background: '#111', padding: '30px', borderRadius: '15px', border: styles.border, width: '90%', maxWidth: '400px', textAlign: 'center'}}>
            <h3 style={{color: styles.green, marginBottom: '20px'}}>DEPOSIT USDT (BEP20)</h3>
            
            <div style={{background: '#000', padding: '15px', borderRadius: '5px', border: '1px dashed #444', marginBottom: '20px'}}>
              <p style={{fontSize: '0.7rem', color: '#888', marginBottom: '5px'}}>Send USDT to this address:</p>
              <code style={{color: '#FFF', wordBreak: 'break-all', fontSize: '0.9rem'}}>0x71C7656EC7ab88b098defB751B7401B5f6d8976F</code>
            </div>

            <p style={{fontSize: '0.8rem', color: '#F00', marginBottom: '20px'}}>⚠ تحذير: أرسل عبر شبكة BEP20 فقط.</p>

            <button onClick={() => {setUser({...user, balance: user.balance + 50}); setDepositModal(false); alert('تم استلام الإيداع بنجاح (محاكاة)');}} style={{width: '100%', padding: '12px', background: styles.green, border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px'}}>
              تأكيد التحويل (أنا أرسلت المال)
            </button>
            <button onClick={() => setDepositModal(false)} style={{background: 'transparent', border: 'none', color: '#888', cursor: 'pointer'}}>إلغاء</button>
          </div>
        </div>
      )}

      <footer style={{marginTop: '40px', textAlign: 'center', borderTop: '1px solid #222', paddingTop: '20px'}}>
        <p style={{color: '#666'}}>للمساعدة وتفعيل الحسابات تواصل معنا:</p>
        <a href="https://t.me/tradehubsy" target="_blank" style={{color: styles.green, textDecoration: 'none', fontSize: '1.1rem'}}>@tradehubsy</a>
      </footer>
    </div>
  );
}
