import home from '../components/home/home';
import login from '../components/login/login';
import register from '../components/register/register';
import account from '../components/account/account';
import order from '../components/order/order';
import information from '../components/information/information';
import address from '../components/address/address';
import item from '../components/item/item';

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/account',
    name: 'account',
    meta: {
      requireAuth: true
    },
    component: account,
    children: [
      {
        path: 'order/list',
        name: 'order',
        meta: {
          requireAuth: true
        },
        component: order
      },
      {
        path: 'information',
        name: 'information',
        meta: {
          requireAuth: true
        },
        component: information
      },
      {
        path: 'address/list',
        name: 'address',
        meta: {
          requireAuth: true
        },
        component: address
      }
    ]
  },
  {
    path: '/item',
    name: 'item',
    component: item
  }
];

export default routes;
