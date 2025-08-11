import Link from 'next/link';

export default function Header() {
  return (
    <header style={{padding:'14px 20px', borderBottom:'1px solid #eee', display:'flex', alignItems:'center', gap:16}}>
      <Link href="/" style={{display:'flex', alignItems:'center', textDecoration:'none', color:'inherit'}}>
        <img src="/logo.png" alt="SierraCare" width="36" height="36" style={{borderRadius:6}} />
        <span style={{marginLeft:10, fontWeight:700}}>SierraCare Dialysis Transport</span>
      </Link>
      <nav style={{marginLeft:'auto', display:'flex', gap:16}}>
        <Link href="/book">Book a Ride</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
