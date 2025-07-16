import { mande } from "mande";
import { useProfileStore } from "../stores/profileStore";

const notification = mande("http://localhost:3000/notificacao", {});
const profileNotification = mande(
  "http://localhost:3000/notificacao/perfil",
  {}
);

function setToken() {
  const store = useProfileStore();
  notification.options.headers.token = store.userLogged.token;
  profileNotification.options.headers.token = store.userLogged.token;
}

export function getProfileNotificationApi(profileId) {
  setToken();
  return profileNotification.get(profileId);
}
