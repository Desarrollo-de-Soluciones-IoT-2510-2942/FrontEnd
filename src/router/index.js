import {createRouter, createWebHistory} from "vue-router";
import Home from "../content/pages/home/home.component.vue";
import AllMemberships from "../content/pages/memberships/all-memberships.component.vue";
import AllRecomendations from "../content/pages/recommendations/all-recomendations.component.vue";
import Profile from "../content/pages/profile/profile.component.vue";
import EditProfile from "../content/pages/profile/components/edit-profile.component.vue";
import AllAnalytics from "../content/pages/analytics/all-analytics.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: Home},
        { path: '/memberships', component: AllMemberships},
        { path: '/recommendations', component: AllRecomendations},
        { path: '/profile', component: Profile},
        { path: '/edit-profile', component: EditProfile},
        { path: '/all-analytics', component: AllAnalytics},
    ],
});

export default router;