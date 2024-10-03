import { movies } from "@/data";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const movie = movies.find(movie => movie.slug === params.slug);
    
    // Return default metadata if the movie is not found
    if (!movie) {
        return {
            title: 'Movie not found',
            description: 'The requested movie could not be found.',
        };
    }

    return {
        title: movie.title,
        description: movie.description,
        keywords: movie.keywords.join(', '),
        author: movie.author,
    };
}

export default function Page({ params }: { params: { slug: string } }) {
    const movie = movies.find(movie => movie.slug === params.slug);

    if (!movie) {
        return <div className="text-center text-red-500">Movie not found</div>;
    }

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
            <div className="mb-4">
                <img
                    src={movie.imageUrl}
                    alt={`${movie.title} poster`}
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </div>
            <p className="text-gray-700">{movie.description}</p>
        </div>
    );
}
