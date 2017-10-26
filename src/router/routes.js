import home from '../components/home/home'
import login from '../components/login/login'
import account from '../components/account/account'
import item from '../components/item/item'

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
        path: '/account',
        name: 'account',
        meta: {
            requireAuth: true
        },
        component: account
    },
    {
        path: '/item',
        name: 'item',
        component: item
    }
]

export default routes
