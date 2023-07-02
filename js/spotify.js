// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQDRMtxQDsLd1kuatia1w7B5sBuML04i7425vqdvJ3Tg2mDMOgF8YVleMe9ruvI0fdhhcznF34k040iPHBUdOkpQ72qn_Qf1d4yTNqhgdLWFFHSlByyqB_gyaunpOg3Fac3hx2rEYO-NubIfzbnmhSkamyaS1MFmPzYaX6YEXRsJIFcrgOD8Q1QGMxCSKCOFvHNNJuF52TUbCvRXzkNdrgtQ8aICKNxLEEVvjVG0N3V2eOyGw3MRp-lceytV8d6ecvI';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=30', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);

