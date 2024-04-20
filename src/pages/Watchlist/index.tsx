import DashboardLayout from 'src/components/common/DashboardLayout';
import Banner from 'src/components/pages/Watchlist/Banner';
import WatchlistItems from 'src/components/pages/Watchlist/WatchlistItems';

const Watchlist = () => {
    return (
        <DashboardLayout>
            <Banner />
            <WatchlistItems />
        </DashboardLayout>
    );
};

export default Watchlist;
