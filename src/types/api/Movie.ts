export type T_MoviesResponse = {
    Search: T_Movie[];
    totalResults: string;
    Response: 'True';
};

export type T_Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
};

export type T_MoviesError = {
    Response: 'False';
    Error: string;
};

export type T_MoviesAPIResponse = T_MoviesResponse | T_MoviesError;

export type T_MovieResponse = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: T_Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: 'True';
};

export type T_Rating = {
    Source: string;
    Value: string;
};

export type T_MovieAPIResponse = T_MovieResponse | T_MoviesError;
