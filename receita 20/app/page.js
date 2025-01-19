import Link from 'next/link';
export function Home(){
    return (
        <div>
            <div>
                <h1>Viva Santana!</h1>
                <Link href="/novarota">Rota1</Link> <br/><br/>
                <a href="/novarota">Rota 1, jeito antigo</a>
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
export default function HomePage() {
    return (
      <div>
        <Home/>
      </div>
    );
}