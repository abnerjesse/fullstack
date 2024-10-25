import { setAuthorizationCode, getPlaylists } from "./api.js";

async function loadPlaylists() {
    let playlistsSection = document.querySelector('.playlists')
    // Consumir a API de Playlist
    // 1- Request authorization code from URL
    let params = new URLSearchParams(location.search)
    let authCode = params.get('code')

    // 2- Send authorization code to API module
    await setAuthorizationCode(authCode)

    try {
        // 3- Load user playlists
        let playlists = await getPlaylists()

        // 5- Show user playlists
        playlistsSection.innerHTML = ''
        for (let index = 0; index < playlists.length; index++) {
            let playlistCover = playlists[index].images[0]
            playlistsSection.innerHTML += `
        <div class="playlist-card">
            <img src="${playlistCover ? playlistCover.url : "https://horizondatasys.com/wp-content/uploads/2018/01/Dark-Gray-Square-768x768.png"}">
            <spam>${playlists[index].name}</spam>
        </div>
        `
        }
    } catch (error) {
        playlistsSection.innerHTML = error.message
    }
}

document.body.onload = loadPlaylists