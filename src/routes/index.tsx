import {
    Route,
    BrowserRouter as Router,
    Routes as RoutesContainer,
} from 'react-router-dom';
import ProtectedRoute from 'src/components/common/ProtectedRoute';
import { PROTECTED_ROUTES, PUBLIC_ROUTES, ROUTES } from 'src/data/Routes';
import useAuthStore from 'src/store/useAuthStore';

const Routes = () => {
    const isLoggedIn = useAuthStore((store) => store.isLoggedIn);

    return (
        <Router>
            <RoutesContainer>
                {/* Protected Routes */}
                <Route
                    element={
                        <ProtectedRoute
                            isRouteAccessible={isLoggedIn}
                            redirectRoute={ROUTES.LOGIN}
                        />
                    }
                >
                    {PROTECTED_ROUTES.map((route) => (
                        <Route {...route} />
                    ))}
                </Route>

                {/* Public Routes */}
                {PUBLIC_ROUTES.map((route) => (
                    <Route {...route} />
                ))}
            </RoutesContainer>
        </Router>
    );
};

export default Routes;
