import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { DashboardLayout } from './components/layouts/DashboardLayout';
import DashboardSubscriptions from './pages/DashboardSubscriptions';
import './App'

export class AppRoutes {
    static DASHBOARD_ROUTE = '/dashboard';
}

const routes: RouteObject[] = [
    {
        path: AppRoutes.DASHBOARD_ROUTE,
        element: <DashboardLayout />,
        children: [
            {path: '', element: <DashboardSubscriptions/>}
        ]
    },
    {path: AppRoutes.DASHBOARD_ROUTE, element: <DashboardLayout/>}
  ];
  
  const router = createBrowserRouter(routes);
  
  export { router };