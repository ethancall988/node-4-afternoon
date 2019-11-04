const swag = require('../models/swag')

module.export = {
    read: (req, res, next) => {
        res.status(200).send(swag)
    }
}