import express from 'express'
import dotenv from 'dotenv'
import { getStories } from '../services/medium.mjs'

// Get Dotenv
dotenv.config()

const app = express()
const port = 4000

app.get('/api/feed', (req, res) => {
  const userName = req.query.username

  if (!userName) {
    res.status(400).json({ error: 'username is required' })
    return
  }

  getStories(userName)
  .then((stories) => {
    res.json({ stories })
    return
  })
  .catch((err) => {
    res.status(400).json({ error: err.message })
    return
  })
})

app.listen(port, () => console.log(`Example backend API listening on port ${port}!`))
