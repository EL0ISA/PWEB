import Link from 'next/link';
export const metadata = {
    title: 'Dashboard - Meu Aplicativo',
  };
  
  export default function DashboardLayout({ children }) {
    return (
      <div className="d-flex vh-100">
        <aside className="bg-light border-end" style={{ width: '250px' }}>
          <nav className="p-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/novarota" className="nav-link">
                  Início
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/novarota/rota2" className="nav-link">
                  Rota 2
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-grow-1 p-4">
          {children}
        </main>
      </div>
    );
  }
  