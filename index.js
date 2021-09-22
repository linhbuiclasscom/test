const express = require('express')
const path = require('path')
const cors = require('cors')
// const a = require('ims-lti')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/static', express.static('build/static'))

app.get('/lti.xml', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/lti.xml'));
})
app.post('/lti.xml', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/lti.xml'));
})
app.get('/teams_logo.png', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/teams_logo.png'));
})
app.post('/teams_logo.png', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/teams_logo.png'));
})
app.get('/manifest.json', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/manifest.json'));
})
app.post('/manifest.json', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/manifest.json'));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});
app.post('*', (req, res) => {
    // const pro = new a.Provider(req.body.oauth_consumer_key, 'two')
    // pro.valid_request(req, req.body, (err, isValid) => {
    //   console.log('valid_request', err, isValid)
    // })

    if (req.body.oauth_consumer_key === 'kbWA0Su2JjGXUPuQXOxnXbujOS8') {
        if (req.body.launch_presentation_return_url) {
            res.redirect(`/?  =${req.body.launch_presentation_return_url}`)
        }
        res.sendFile(path.join(__dirname + '/build/index.html'));
    }
    res.status(401).send()
});
const port = process.env.PORT || 8080

app.listen(port)
