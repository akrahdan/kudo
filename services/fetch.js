fetch(`https://graph.facebook.com/v2.8/${profile.id}/feed`,{
  method: 'POST',
  body: JSON.stringify({
      access_token: accessToken,
      message: 'Hei Kudo, you are good'
  }),
  headers: { "content-type": "application/json"}
})
.then(response => response.json())
.then(json => {
  console.log(json)
})
.catch(e => alert(e));
