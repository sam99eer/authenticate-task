import styles from 'src/styles/MovieDetails.module.css';
import typography from 'src/styles/Typography.module.css';
import type { T_MovieResponse } from 'src/types/api/Movie';

const MovieData = ({ ...data }: T_MovieResponse) => {
    return (
        <section>
            <h1 className={`${typography.heading} ${typography.primary}`}>
                {data.Title}
            </h1>

            <img src={data.Poster} className={styles.img} />
            <p className={typography.subheading}>{data.Plot}</p>

            <div className={styles.details}>
                <div>
                    <h3 className={typography.subheading}>Release Date</h3>
                    <p className={typography.paragraph}>{data.Released}</p>
                </div>

                <div>
                    <h3 className={typography.subheading}>Run Time</h3>
                    <p className={typography.paragraph}>{data.Runtime}</p>
                </div>
                <div>
                    <h3 className={typography.subheading}>Cast</h3>
                    <p className={typography.paragraph}>{data.Actors}</p>
                </div>

                <div>
                    <h3 className={typography.subheading}>Director</h3>
                    <p className={typography.paragraph}>{data.Director}</p>
                </div>

                <div>
                    <h3 className={typography.subheading}>Writer</h3>
                    <p className={typography.paragraph}>{data.Writer}</p>
                </div>

                <div>
                    <h3 className={typography.subheading}>Genre</h3>
                    <p className={typography.paragraph}>{data.Genre}</p>
                </div>

                <div>
                    <h3 className={typography.subheading}>Language</h3>
                    <p className={typography.paragraph}>{data.Language}</p>
                </div>

                <div>
                    <h3 className={typography.subheading}>
                        Box Office Earning
                    </h3>
                    <p className={typography.paragraph}>{data.BoxOffice}</p>
                </div>

                <div>
                    <h3 className={typography.subheading}>IMDB Stats</h3>
                    <p className={typography.paragraph}>
                        Rating: {data.imdbRating} , Votes: {data.imdbVotes}
                    </p>
                </div>
            </div>

            <div className={styles.rating}>
                <h1 className={typography.heading}>Ratings</h1>
                {data.Ratings.map((item) => (
                    <div key={item.Source}>
                        <h3 className={typography.subheading}>{item.Source}</h3>
                        <p className={typography.paragraph}>{item.Value}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MovieData;
