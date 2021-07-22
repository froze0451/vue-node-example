const express = require('express')
const api = express()
const cors = require('cors')

const path = require('path')
const fs = require('fs')

const { readDB, updateDB } = require('./models/posts')

let data

api.use(cors({
  origin: 'http://localhost:8080'
}))
api.use(express.json())

api.get('/', async (req, res) => {
  const fileName = data.posts[0].image
  const filePath = `./files/${fileName}`
  const bitmap = fs.readFileSync(path.resolve(__dirname, filePath))
  data.image = new Buffer.from(bitmap).toString("base64")
  res.send(data)
})

api.post('/', async (req, res) => {
  const { id } = req.body
  const newData = {}

  const myPost = data.posts.find(post => post.id === id);
  myPost.like++
  newData.posts = data.posts

  await updateDB(newData)
  res.send(req.body)
})

const start = async () => {
  try {
    data = await readDB()
    api.listen(5000, console.log('Server is running on port 5000'))
  } catch (error) {
    console.log(error)
  }
}

start()
