import home from '../components/home/home';
import category from '../components/category/category';
import cart from '../components/cart/cart';
import login from '../components/login/login';
import register from '../components/register/register';
import account from '../components/account/account';
import order from '../components/order/order';
import orderDetail from '../components/order/detail';
import information from '../components/information/information';
import address from '../components/address/address';
import item from '../components/item/item';
import checkout from '../components/checkout/checkout';
import payment from '../components/payment/payment';
import error404 from '../components/error/404';

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
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
        path: 'order/detail',
        name: 'orderDetail',
        meta: {
          requireAuth: true
        },
        component: orderDetail
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
