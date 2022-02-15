let accessToken;
const ClientID = '43901f84523741cba047a71ee45402bf';
let redirectURI = 'http://localhost:3000/';

const Spotify = {
    getAccessToken(){
        if(accessToken) {
            return accessToken;
        } 

        const accessTokemMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokemMatch && expiresInMatch) {
            accessToken = accessTokemMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;

        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${ClientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = accessUrl;
        }

        
    },

    search(term) {
        const accessToken = Spotify.getAccessToken();
        fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        .then(response =>  response.json())
        .then(data => {
            if(!data.tracks) {
                return [];
            }
            
            return data.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artists: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
            
            
        })
    },

    savePlaylist(playlistName, arrayTracks){
        const accessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${accessToken}`};
        let userID;
        if(!playlistName && arrayTracks){
            return;
        }

        fetch("https://api.spotify.com/v1/me", {headers: headers})
        .then(response => response.json())
        .then(data => {
            return userID = data.id;
        });
        
    }
}

Spotify.savePlaylist();
export default Spotify;