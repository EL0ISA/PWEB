import Link from 'next/link';
export function Home(){
    return (
        <div>
            <div>
                <h1>Viva Santana!</h1>
            </div>
        </div>
    )
}
export function About() {
    return (
        <div>
            <h1>Sobre</h1>
            <p>Essa pagina é destinada a conhecer mais sobre o site.</p>
        </div>
    );
  }
export function Menu() {
    return (
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/novarota">Nova Rota</Link>
          </li>
          <li>
            <Link href="/rota1">About</Link>
          </li>
        </ul>
      </nav>
    );
}
export default function HomePage() {
    return (
      <div>
        <Menu/>
        <Home/>
      </div>
    );
}