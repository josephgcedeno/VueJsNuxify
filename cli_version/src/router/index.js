import {createRouter,createWebHistory} from 'vue-router';
import Aboutus from '../views/Aboutus';
import Home from '../views/Home';

const routes = [
    {
        path: '/about',
        name:'Aboutus', 
        component: Aboutus
    },
    {
        path: '/',
        name:'Home', 
        component: Home
    }
]

export default createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
