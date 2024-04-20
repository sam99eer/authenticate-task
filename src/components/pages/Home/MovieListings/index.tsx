import { FormEvent, useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import GetMovies from 'src/api/GetMovies';
import Search from 'src/assets/svg/Search';
import Button from 'src/components/common/Button';
import Input from 'src/components/common/Input';
import MovieCard from 'src/components/common/MovieCard';
import Skeletons from 'src/components/common/Skeletons';
import styles from 'src/styles/Home.module.css';
import { T_Movie } from 'src/types/api/Movie';
import { KEYS } from 'src/utils/Constants';

const MovieListings = () => {
    const [query, setQuery] = useSearchParams();
    const querySearchVal = query.has('q') ? query.get('q') : null;

    const { isLoading, mutateAsync } = useMutation(
        [KEYS.GET_MOVIES, querySearchVal],
        GetMovies
    );

    const [data, setData] = useState<T_Movie[]>([]);
    const [search, setSearch] = useState(querySearchVal ?? '');

    const btnRef = useRef<HTMLButtonElement | null>(null);

    const searchHandler = (event: FormEvent) => {
        event.preventDefault();

        if (search.trim().length < 3)
            return toast.warn('Please enter atleast 3 characters');

        setQuery((prevParams) => {
            prevParams.set('q', search);
            return prevParams;
        });
        mutateAsync(search).then((result) => {
            if (Array.isArray(result)) {
                setData(result);
            }
        });
    };

    useEffect(() => {
        if (!!querySearchVal && btnRef.current) {
            btnRef.current.click();
        }
    }, []);

    return (
        <section className={styles.movieListings}>
            <form className={styles.searchContainer} onSubmit={searchHandler}>
                <Input
                    type='text'
                    value={search}
                    onChangeText={setSearch}
                    variant='dark'
                    placeholder='Seach for movies'
                    hasIcon
                    icon={<Search />}
                />
                <Button ref={btnRef} type='submit' text='Search' isSmall />
            </form>

            <div className={styles.movieCards}>
                {isLoading ? (
                    <Skeletons total={8} />
                ) : (
                    data.map((item) => (
                        <MovieCard
                            key={item.imdbID}
                            data={item}
                            mode='wishlist'
                        />
                    ))
                )}
            </div>
        </section>
    );
};

export default MovieListings;
