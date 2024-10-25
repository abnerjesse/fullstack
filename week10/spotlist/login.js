import { client_id } from "./api.js";

function login() {
    location.href = (`https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&redirect_uri=http://localhost:8080/week10/spotlist/home.html&scope=playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public`)
}

document.getElementById("btnEntrar").onclick = login