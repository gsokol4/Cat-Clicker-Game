const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.join(__dirname, '..', 'build')
const port = process.env.PORT || 3000
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../build')))

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" })
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/', 'index.html'))
})
app.listen(port, () => {
  console.log('Server is up!')
  console.log(publicPath)
})
