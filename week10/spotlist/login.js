function login() {
    location.href = ("https://accounts.spotify.com/authorize?response_type=code&client_id=cde945fe77c84dddb77a00dd13d8350d&redirect_uri=http://localhost:8080/week10/spotlist/home.html&scope=playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public")
}

document.getElementById("btnEntrar").onclick = login