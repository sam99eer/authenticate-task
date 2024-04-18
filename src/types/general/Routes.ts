import { RouteProps } from 'react-router-dom';
import { ROUTES } from 'src/data/Routes';

export type T_Route = (typeof ROUTES)[keyof typeof ROUTES];

export type T_Route_Data = RouteProps & {
    path: T_Route;
    key: keyof typeof ROUTES;
};

export type T_Protected_Route = {
    isRouteAccessible: boolean;
    redirectRoute: T_Route;
};
