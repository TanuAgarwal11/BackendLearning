// console.log("I am learning Backend");
// using dotenv
require('dotenv').config()

const express = require('express')
const app = express()
const port = 5000

const githubData = {
  "login": "TanuAgarwal11",
  "id": 185950126,
  "node_id": "U_kgDOCxVfrg",
  "avatar_url": "https://avatars.githubusercontent.com/u/185950126?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/TanuAgarwal11",
  "html_url": "https://github.com/TanuAgarwal11",
  "followers_url": "https://api.github.com/users/TanuAgarwal11/followers",
  "following_url": "https://api.github.com/users/TanuAgarwal11/following{/other_user}",
  "gists_url": "https://api.github.com/users/TanuAgarwal11/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/TanuAgarwal11/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/TanuAgarwal11/subscriptions",
  "organizations_url": "https://api.github.com/users/TanuAgarwal11/orgs",
  "repos_url": "https://api.github.com/users/TanuAgarwal11/repos",
  "events_url": "https://api.github.com/users/TanuAgarwal11/events{/privacy}",
  "received_events_url": "https://api.github.com/users/TanuAgarwal11/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Tanu Agarwal",
  "company": null,
  "blog": "",
  "location": "Greater Noida",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-10-22T16:10:47Z",
  "updated_at": "2025-08-14T13:25:19Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("I am Tanu Agarwal")
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> Welcome to youtube </h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
