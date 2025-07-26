import Home from "./../pages/Home.vue";
import Profile from "./../pages/Profile.vue";
import Login from "./../pages/Login.vue";
import NewProfile from "../pages/NewProfile.vue";

export default [
  { path: "/", component: Login, name: "login" },
  { path: "/home", component: Home, name: "home" },
  { path: "/profile", component: Profile, name: "profile" },
  { path: "/newprofile", component: NewProfile, name: "newprofile" },
];
