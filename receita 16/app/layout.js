import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
export const metadata = {
  title: 'Receita 16 - Next 3',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  console.log("montando layout")
  return (
    <html lang="en">
      <body>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/" className="navbar-brand">
            Meu Site
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/novarota" className="nav-link">
                  Nova Rota
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/rota1" className="nav-link">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        {children}
      </body>
    </html>
  )
}
