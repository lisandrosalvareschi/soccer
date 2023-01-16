import React from "react";
import Login from "./modules/auth/ui/Login";
import SignUp from "./modules/auth/ui/SignUp";
import NotFoundPage from './modules/auth/ui/404';
import ResetPassword from "./modules/auth/ui/ResetPassword";
import AppLayout from './core/components/app-layout/app-layout';
import Profile from "./modules/profile/ui/Profile";

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import BadgeIcon from '@mui/icons-material/Badge';
import GradeIcon from '@mui/icons-material/Grade';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';


export default function routeConfiguration() {
    return [
      {
        component: (props: any) => <SignUp {...props} />,
        name: 'Sign up',
        path: '/sign-up',
        children: null
      },
      {
        component: (props: any) => <Login {...props} />,
        name: 'LoginPage',
        path: '/login',
        children: null
      },
      {
        component: (props: any) => <ResetPassword {...props} />,
        name: 'ResetPassword',
        path: '/reset-password',
        children: null
      },
      {
        auth: true,
        component: (props) => <AppLayout {...props} />,
        name: 'Dashboard',
        path: '*',
        children: [
          {
            component: (props: any) => <div>Hola dashboard</div>,
            path: '/',
            name: 'Dashboard',
            icon: HomeIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/profile',
            name: 'Profile',
            icon: PersonIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/family-group',
            name: 'Family Group',
            icon: WorkspacesIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/badge',
            name: 'Badge',
            icon: BadgeIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/tickets',
            name: 'Tickets',
            icon: GradeIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/match',
            name: 'Match',
            icon: SportsSoccerIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/membership',
            name: 'Memberships',
            icon: CardMembershipIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/receipt',
            name: 'Receipt',
            icon: ReceiptLongIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/membership',
            name: 'Memberships',
            icon: GradeIcon
          }
        ]
      },
      {
        auth: false,
        component: (props) => <NotFoundPage {...props} />,
        children: null
      }
    ];
  }