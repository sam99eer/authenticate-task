import { Navigate, Outlet } from 'react-router-dom';
import type { T_Protected_Route } from 'src/types/general/Routes';

const ProtectedRoute = ({
    isRouteAccessible,
    redirectRoute,
}: T_Protected_Route): JSX.Element => {
    return isRouteAccessible ? (
        <Outlet />
    ) : (
        <Navigate to={redirectRoute} replace />
    );
};

export default ProtectedRoute;
