import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Search from 'src/assets/svg/Search';
import Button from 'src/components/common/Button';
import Input from 'src/components/common/Input';
import styles from 'src/styles/Home.module.css';

const MovieListings = () => {
    const [query, setQuery] = useSearchParams();

    const querySearchVal = query.has('q') ? query.get('q') : null;

    const [search, setSearch] = useState(querySearchVal ?? '');

    const searchHandler = () => {};

    return (
        <section className={styles.movieListings}>
            <div className={styles.searchContainer}>
                <Input
                    type='text'
                    value={search}
                    onChangeText={setSearch}
                    variant='dark'
                    placeholder='Seach for movies'
                    hasIcon
                    icon={<Search />}
                />
                <Button text='Search' onClick={searchHandler} isSmall />
            </div>
        </section>
    );
};

export default MovieListings;
