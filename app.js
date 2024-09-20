import { resolve } from 'node:path'
import bodyParser from 'body-parser'
import express from 'express'
import { query } from './db/index.js'

const app = new express()

app.use(bodyParser.json())
app.use(express.static('public'))

app.post('/api/messages', async (req, res) => {
  try {
    const { username, text } = req.body
    if (!username || !text || username.length < 2 || text.length < 1) {
      return res.status(400).end()
    }

    const { rows } = await query(`INSERT INTO messages(username, text) VALUES($1, $2) RETURNING *;`, [username, text])
    const newMessage = rows[0]
    res.status(201).json(newMessage)
  } catch (err) {
    res.status(500).end()
  }
})

app.get('/api/messages', async (req, res) => {
  try {
    const { rows } = await query(`SELECT * FROM messages ORDER BY "createdAt" DESC;`)
    const messages = rows
    res.json(messages)
  } catch (err) {
    res.status(500).end()
  }
})

app.get('*', (req, res) => {
  res.sendFile(`${resolve()}/public/index.html`)
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`app listening on port ${PORT}`))
