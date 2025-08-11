'use client';

import { useState } from 'react';

export const metadata = { title: 'Book a Ride · SierraCare' }

export default function Book() {
  const [form, setForm] = useState({ name:'', phone:'', date:'', time:'', pickup:'', dropoff:'', mobility:'wheelchair' });
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const res = await fetch('/api/bookings', { method:'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) });
      if (!res.ok) throw new Error(await res.text());
      setStatus('Success! We will confirm shortly.');
      setForm({ name:'', phone:'', date:'', time:'', pickup:'', dropoff:'', mobility:'wheelchair' });
    } catch (err) {
      setStatus('There was a problem. Please call us to book.');
      console.error(err);
    }
  };

  return (
    <section>
      <h1>Book a Ride</h1>
      <p>Request a ride and we’ll confirm by phone or email.</p>
      <form onSubmit={onSubmit} style={{display:'grid', gap:12, maxWidth:560}}>
        <input required placeholder="Full name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
        <input required placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
        <div style={{display:'flex', gap:12}}>
          <input required type="date" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} />
          <input required type="time" value={form.time} onChange={e=>setForm({...form, time:e.target.value})} />
        </div>
        <input required placeholder="Pickup address" value={form.pickup} onChange={e=>setForm({...form, pickup:e.target.value})} />
        <input required placeholder="Drop-off address (e.g., dialysis center)" value={form.dropoff} onChange={e=>setForm({...form, dropoff:e.target.value})} />
        <label>Mobility needs:
          <select value={form.mobility} onChange={e=>setForm({...form, mobility:e.target.value})}>
            <option value="wheelchair">Wheelchair</option>
            <option value="walker">Walker</option>
            <option value="ambulatory">Ambulatory</option>
          </select>
        </label>
        <button type="submit" style={{padding:'10px 16px', border:'1px solid #1d4ed8', borderRadius:8}}>Request Ride</button>
      </form>
      {status && <p style={{marginTop:10}}>{status}</p>}
    </section>
  );
}
