export default function Home() {
  return (
    <div style={{backgroundColor: 'black', color: '#ffd700', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif'}}>
      <h1>NEXUS-INJ OFFICIAL</h1>
      <p>Status: Active | Admin ID: 55455</p>
      <div style={{border: '1px solid #ffd700', padding: '20px', borderRadius: '10px'}}>
        <h3>USDT BEP20 Monitor</h3>
        <p>Waiting for network data...</p>
      </div>
    </div>
  );
}
