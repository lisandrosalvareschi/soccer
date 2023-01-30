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
import SettingsIcon from '@mui/icons-material/Settings';

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
            name: 'modules.home.title',
            icon: HomeIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/profile',
            name: 'modules.account.title',
            icon: PersonIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/family-group',
            name: 'modules.familyGroup.title',
            icon: WorkspacesIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/badge',
            name: 'modules.bagde.title',
            icon: BadgeIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/tickets',
            name: 'modules.ticket.title',
            icon: GradeIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/match',
            name: 'modules.match.title',
            icon: SportsSoccerIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/membership',
            name: 'modules.membership.title',
            icon: CardMembershipIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/receipt',
            name: 'modules.receipt.title',
            icon: ReceiptLongIcon
          },
          {
            component: (props: any) => <Profile {...props} />,
            path: '/setting',
            name: 'modules.setting.title',
            icon: SettingsIcon
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