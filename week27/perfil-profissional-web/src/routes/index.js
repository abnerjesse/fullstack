import Home from "./../pages/Home.vue";
import Perfil from "./../pages/Perfil.vue";
import Login from "./../pages/Login.vue";
import NewProfile from "../pages/NewProfile.vue";

export default [
  { path: "/", component: Login, name: "login" },
  { path: "/home", component: Home, name: "home" },
  { path: "/perfil", component: Perfil, name: "perfil" },
  { path: "/newprofile", component: NewProfile, name: "newprofile" },
];
