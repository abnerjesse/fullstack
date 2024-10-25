let client_id = 'blablabla' //substituir pela informação correta do app criado no dashbaord do Spotify WebAPI
let client_secret = 'blabla' //substituir pela informação correta do app criado no dashbaord do Spotify WebAPI
let authorizationCode
let user
let refreshToken

export async function setAuthorizationCode(code) {
    try {
        authorizationCode = code
        await getUser()
    } catch (error) {
        console.log(`Erro ao setar código de autorização: ${error}`);
    }
}

// 2- Request an access token
async function getAccessToken() {
    try {
        let body = new URLSearchParams()
        if (!refreshToken) {
            body.append('grant_type', 'authorization_code')
            body.append('redirect_uri', 'http://localhost:8080/week10/spotlist/home.html')
            body.append('code', authorizationCode)

        } else {
            body.append('grant_type', 'refresh_token')
            body.append('refresh_token', refreshToken)
        }

        let req = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
            },
            body: body
        });
        let res = await req.json()
        if (res.refresh_token) refreshToken = res.refresh_token
        return res.access_token
    } catch (error) {
        console.log(`Erro ao buscar token de acesso: ${error}`);
    }
}

// 3- Request user data
async function getUser() {
    try {
        let token = await getAccessToken()
        let req = await fetch('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + token
            },
        });
        user = await req.json()
    } catch (error) {
        console.log(`Erro ao buscar usuário: ${error}`);
    }
}

// 4- Load user playlist
export async function getPlaylists() {
    try {
        let token = await getAccessToken()
        let req = await fetch(`https://api.spotify.com/v1/users/${user.id}/playlists`, {
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`
            },
        });
        let res = await req.json()
        if (!res.error) return res.items
        else throw res.error
    } catch (error) {
        throw { message: "Erro ao buscar playlists do usuário!" }
    }
}