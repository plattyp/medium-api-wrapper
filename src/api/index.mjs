import express from 'express'
import dotenv from 'dotenv'
import { getStories } from '../services/medium.mjs'

// Get Dotenv
dotenv.config()

const app = express()
const port = 4000

app.get('/api/feed', (req, res) => {
  getStories(function(stories){
    res.send({ stories })
  })
})

app.listen(port, () => console.log(`Example backend API listening on port ${port}!`))
