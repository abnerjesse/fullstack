import { defineStore } from "pinia";
import { loginApi } from "../api/login";
import { createProfileApi } from "../api/profile";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    userLogged: {},
  }),
  actions: {
    async login(user) {
      await loginApi(user);

      //   return new Promise((resolve, reject) => {
      //     console.log("Clicou no login...");

      //     setTimeout(() => {
      //       //API
      //       this.userLogged = {
      //         name: "João",
      //         email: "joao@email.com",
      //       };
      //       resolve();
      //     }, 2000);
      //   });
      // },
    },
    async createProfile(profile) {
      await createProfileApi(profile);
    },
  },
});
