import DashboardLayout from 'src/components/common/DashboardLayout';
import Banner from 'src/components/pages/Home/Banner';
import MovieListings from 'src/components/pages/Home/MovieListings';

const Home = () => {
    return (
        <DashboardLayout>
            <Banner />
            <MovieListings />
        </DashboardLayout>
    );
};

export default Home;
