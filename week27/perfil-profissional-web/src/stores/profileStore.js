import { defineStore } from "pinia";
import { loginApi } from "../api/login";
import {
  createProfileApi,
  getProfileApi,
  getProfileByIdApi,
  updateProfileApi,
} from "../api/profile";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    userLogged: {},
    lastsProfiles: [],
  }),
  actions: {
    async login(user) {
      this.userLogged = await loginApi(user);

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
    async getProfiles() {
      this.lastsProfiles = await getProfileApi();
    },
    async getProfileById() {
      return await getProfileByIdApi(this.userLogged.id);
    },
    async updateProfile(profile) {
      return await updateProfileApi(profile);
    },
  },
});
