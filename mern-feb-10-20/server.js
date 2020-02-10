
const express = require('express')
const app = express()

/* Step 2
 * 
 * import routers from controllers/
 *
 */
const { playerRouter } = require('./controllers/player.js')


app.use(express.urlencoded({extended: true}))


app.use(express.json())

app.use(express.static(`${__dirname}/client/build`))


app.use('/api/player', playerRouter)


app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
