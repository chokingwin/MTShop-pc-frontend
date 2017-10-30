import home from '../components/home/home';
import login from '../components/login/login';
import register from '../components/register/register';
import account from '../components/account/account';
import order from '../components/order/order';
import payment from '../components/payment/payment';
import information from '../components/information/information';
import address from '../components/address/address';
import item from '../components/item/item';
import checkout from '../components/checkout/checkout';
import error404 from '../components/error/404';

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
  },
  {
    path: '/checkout',
    name: 'checkout',
    meta: {
      requireAuth: true
    },
    component: checkout
  },
  {
    path: '/order/payment',
    name: 'payment',
    meta: {
      requireAuth: true
    },
    component: payment
  },
  {
    path: '*',
    name: 'error404',
    component: error404
  }
];

export default routes;
