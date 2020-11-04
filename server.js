const axios = require('axios')

const express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  cors = require('cors')

app.use(cors())
app.listen(port, () => console.log('Backend server live on ' + port))

const getMovies = async (movie) => {
  try {
    console.log('get')
    return await axios.get(`http://www.omdbapi.com/?apikey=629c2d0a&s=${movie}`)
  } catch (error) {
    console.log('error')
    console.error(error)
  }
}

app.get('/:movie', async (req, res) => {
  const result = await getMovies(req.params.movie)
  res.send({ movies: result })
})

// app.get('/:movie', (req, res) => {
//   console.log('movie')
//   const result = getMovies(req.params.movie)
//   res.send({ movies: result })
// })
