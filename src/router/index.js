import {createRouter, createWebHistory} from "vue-router";
import Home from "../content/pages/home/home.component.vue";
import AllMemberships from "../content/pages/memberships/all-memberships.component.vue";
import AllRecomendations from "../content/pages/recommendations/all-recomendations.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: Home},
        { path: '/memberships', component: AllMemberships},
        { path: '/recommendations', component: AllRecomendations}
    ],
});

export default router;