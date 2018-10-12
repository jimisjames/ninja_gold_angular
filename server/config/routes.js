
const users = require('../controllers/users.js')

module.exports = function (app) {

    app.get('/topFive', function (req, res) {
        users.topFive(req, res)
    })

    app.post('/update', function (req, res) {
        users.update(req, res)
    })

    app.post('/add', function (req, res) {
        users.add(req, res)
    })

    app.get('/:user', function (req, res) {
        users.read(req, res, req.params.user)
    })
}