import { defineStore } from "pinia";

export const useAlertStore = defineStore("alert", {
  state: () => ({
    alertShow: false,
    alertMessage: "Mensagem...",
    error: false,
    info: false,
    warning: false,
    success: false,
  }),
  actions: {
    open(msg) {
      this.alertShow = true;
      this.alertMessage = msg;
    },
    close() {
      this.alertShow = false;
      this.alertMessage = "";
      this.error = false;
      this.info = false;
      this.warning = false;
      this.success = false;
    },
    showError(msg) {
      this.error = true;
      this.open(msg);
    },
    showInfo(msg) {
      this.info = true;
      this.open(msg);
    },
    showSuccess(msg) {
      this.success = true;
      this.open(msg);
    },
  },
});
