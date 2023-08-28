const error_handler = (err, req, res, next) => {
    res.status(400).send(`${err} bad request`)
}

module.exports = {error_handler}