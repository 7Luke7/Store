const invalid_path = (req, res) => {
    res.status(404).send("404 not found")
}

module.exports = {invalid_path}