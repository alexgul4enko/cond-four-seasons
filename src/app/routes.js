// import { permissions } from 'cond-app-core/session';
import { Layout } from 'layout';
import { NotFound } from 'pages/fallbacks';
import { Seasonality } from 'pages/seasonality';

const appRoutes = [
    {
        path: '/',
        exact: true,
        name: 'root',
        redirectTo: 'seasonality'
    },
    {
        path: '/',
        routes: [
            {
                path: '/',
                // access: {
                //     access: permissions.F_AUTHENTICATED,
                //     permissionsRedirectToMPA: '/login.html'
                // },
                layout: Layout,
                routes: [
                    {
                        path: '/seasonality',
                        name: 'seasonality',
                        component: Seasonality
                    },
                    {
                        path: '*',
                        component: NotFound
                    }
                ]
            },

            {
                path: '*',
                component: NotFound
            }
        ]
    }
];

export default appRoutes;
