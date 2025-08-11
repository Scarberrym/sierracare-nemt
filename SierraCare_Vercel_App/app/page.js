import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <div style={{display:'flex', flexDirection:'column', gap:16}}>
        <div className="badge">Veteran Owned</div>
        <h1 style={{fontSize:36, margin:'8px 0'}}>Reliable. Respectful. On Time.</h1>
        <p>Non-Emergency Medical Transportation (NEMT) specializing in dialysis trips across Sparks, Spanish Springs, and Reno.</p>
        <div style={{display:'flex', gap:12}}>
          <Link href="/book"><button style={{padding:'10px 16px', border:'1px solid #1d4ed8', borderRadius:8}}>Book a Ride</button></Link>
          <Link href="/about"><button style={{padding:'10px 16px', border:'1px solid #e5e7eb', borderRadius:8}}>Learn More</button></Link>
        </div>
      </div>

      <div style={{marginTop:32}}>
        <h2>What we offer</h2>
        <ul>
          <li>Wheelchair-accessible van with securements</li>
          <li>Door-through-door assistance</li>
          <li>Medicaid, VA, and private pay accepted</li>
        </ul>
      </div>
    </section>
  );
}
