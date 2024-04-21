import { useMemo, useState } from 'react';
import Search from 'src/assets/svg/Search';
import Input from 'src/components/common/Input';
import ListItem from 'src/components/common/ListItem';
import LoggedUser from 'src/components/common/LoggedUser';
import SidebarItem from 'src/components/common/SidebarItem';
import { SIDEBAR_DATA } from 'src/data/Sidebar';
import useWatchlistStore from 'src/hooks/useWatchlistStore';
import styles from 'src/styles/Sidebar.module.css';
import typography from 'src/styles/Typography.module.css';

const Sidebar = () => {
    const [search, setSearch] = useState('');
    const watchlistItems = useWatchlistStore((store) => store.watchlist);

    const filteredWatchlistItems = useMemo(
        () =>
            watchlistItems.filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
            ),
        [search, watchlistItems.length]
    );

    return (
        <aside className={styles.container}>
            <h1 className={`${typography.heading} ${typography.primary}`}>
                Watchlists
            </h1>
            <Input
                variant='light'
                type='text'
                value={search}
                onChangeText={setSearch}
                placeholder='Search'
                hasIcon
                icon={<Search />}
            />

            <nav className={styles.navbar}>
                {SIDEBAR_DATA.map((item) => (
                    <SidebarItem key={item.path} {...item} />
                ))}
            </nav>

            <h3 className={typography.subheading}>My Lists</h3>
            <nav className={styles.watchList}>
                {filteredWatchlistItems.map((item) => (
                    <ListItem key={item.watchlistId} {...item} />
                ))}
            </nav>

            <LoggedUser />
        </aside>
    );
};

export default Sidebar;
