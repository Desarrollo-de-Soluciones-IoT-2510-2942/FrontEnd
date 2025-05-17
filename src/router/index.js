import {createRouter, createWebHistory} from "vue-router";
import Home from "../content/pages/home/home.component.vue";
import AllMemberships from "../content/pages/memberships/all-memberships.component.vue";
import AllRecomendations from "../content/pages/recommendations/all-recomendations.component.vue";
import Profile from "../content/pages/profile/profile.component.vue";
import EditProfile from "../content/pages/profile/components/edit-profile.component.vue";
import AllAnalytics from "../content/pages/analytics/all-analytics.component.vue";
import Login from "../content/pages/login/login.component.vue";
import Register from "../content/pages/register/register.component.vue";
import AllCrops from "../content/pages/crops/all-crops.component.vue";
import EditCrop from "../content/pages/crops/components/edit-crop.component.vue";
import CreateCrop from "../content/pages/crops/components/create-crop.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [

        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        { path: '/register', component: Register },

        { path: '/', redirect: '/home'},
        { path: '/home', component: Home},
        { path: '/memberships', component: AllMemberships},
        { path: '/recommendations', component: AllRecomendations},
        { path: '/profile', component: Profile},
        { path: '/edit-profile', component: EditProfile},
        { path: '/all-analytics', component: AllAnalytics},
        { path: '/crops', component: AllCrops},
        { path: '/edit-crop', component: EditCrop},
        { path: '/new-crop', component: CreateCrop},
    ],
});

export default router;