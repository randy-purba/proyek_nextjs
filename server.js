const next = require('next')
const jsonServer = require('json-server')
const express = require('express')
var cookieParser = require('cookie-parser')
const path = require('path')
const { parse } = require('url')

require('dotenv').load()

process.on('uncaughtException', function (err) {
  console.error('Uncaught Exception: ', err)
})

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection: Promise:', p, 'Reason:', reason)
})

// Default when run with `npm start` is 'production' and default port is '80'
// `npm run dev` defaults mode to 'development' & port to '3000'
process.env.NODE_ENV = process.env.NODE_ENV || 'production'
process.env.PORT = process.env.PORT || 80

const router = jsonServer.router('db.json')

// Initialize Next.js
const app = next({
  dir: '.',
  dev: (process.env.NODE_ENV === 'development')
})

app.prepare().then(() => {
  const server = express()
  server.use(cookieParser())
  /* const middlewares = [
    bodyParser.urlencoded(),
    bodyParser.json() 

    //cookieParser('sesh-dash'),
    //csrfProtection
  ] 
  server.use(middlewares)   */

  // Use default router
  server.use('/api', router)

  server.get('/reset', (req, res) => {
    const actualPage = '/resetPassword'
    return app.render(req, res, actualPage)
  })

  server.get('/sample-form', (req, res) => {
    const actualPage = '/sampleForm'
    return app.render(req, res, actualPage)
  })

  server.get('/sample-banner', (req, res) => {
    const actualPage = '/sampleBanner'
    return app.render(req, res, actualPage)
  })

  server.get('/bank-soal', (req, res) => {
    const actualPage = '/listQuestionBank'
    return app.render(req, res, actualPage)
  })

  server.get('/management-users', (req, res) => {
    const actualPage = '/managementUser'
    return app.render(req, res, actualPage)
  })

  // server.get('/banner/:id/:slug', (req, res) => {
  //   const actualPage = '/banner/detail'
  //   const queryParams = { id: req.params.id }
  //   return app.render(req, res, actualPage, queryParams)
  // })

  server.all('*', (req, res) => {
    let nextRequestHandler = app.getRequestHandler()
    let parsedUrl = parse(req.url, true)
    return nextRequestHandler(req, res, parsedUrl)
  })

  server.listen(process.env.PORT, err => {
    if (err) {
      throw err
    }
    console.log('> Ready on http://localhost:' + process.env.PORT + ' [' + process.env.NODE_ENV + ']')
  })

}).catch(err => {
  console.log('An error occurred, unable to start the server')
  console.log(err)
})



