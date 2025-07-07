import { mande } from "mande";
import { useProfileStore } from "../stores/profileStore";

const notification = mande(
  "https://perfil-profissional-api-c2c0b9c521b8.herokuapp.com/notificacao",
  {}
);
const profileNotification = mande(
  "https://perfil-profissional-api-c2c0b9c521b8.herokuapp.com/notificacao/perfil",
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
