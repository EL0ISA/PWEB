import MovieForm from '../movieSearch/page';
  export default function MoviesLayout({ children }) {
    return (
        <div className="d-flex flex-column vh-100">
            <MovieForm className="p-3 border-bottom" />
            <main className="flex-grow-1 p-4">
                {children}
            </main>
        </div>
    );
  }