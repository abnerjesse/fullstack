import { defineStore } from "pinia";
import { getProfileNotificationApi } from "../api/notification";

export const useNotificationStore = defineStore("notification", {
  state: () => ({
    notifications: [],
  }),
  actions: {
    async getProfileNotification(profileId) {
      this.notifications = await getProfileNotificationApi(profileId);
    },
  },
});
