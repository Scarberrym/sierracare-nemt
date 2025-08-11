import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'SierraCare Dialysis Transport',
  description: 'Reliable, respectful, on time. Veteran-owned NEMT for dialysis patients in Sparks & Reno.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{maxWidth:960, margin:'32px auto', padding:'0 20px'}}>
          {children}
        </main>
        <footer style={{padding:'24px 20px', borderTop:'1px solid #eee', marginTop:40, fontSize:14, color:'#666'}}>
          © {new Date().getFullYear()} SierraCare Dialysis Transport, LLC · Veteran Owned · (775) 555-1212
        </footer>
      </body>
    </html>
  )
}
