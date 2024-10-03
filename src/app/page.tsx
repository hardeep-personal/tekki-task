import { movies } from "@/data";
import Link from "next/link";

export default function Home() {


  console.log("data", movies);

  return (
    <div >
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
          {movies.map((movie) => (
            <Link href={movie?.slug} key={movie.slug}>
              <div className="border border-gray-300 p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                <p className="text-gray-700 mb-2">
                  {movie.description.length > 100
                    ? movie.description.substring(0, 100) + '...'
                    : movie.description}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Genre:</strong> {movie.genre}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Year:</strong> {movie.releaseYear}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </main>
    </div>
  );
}
