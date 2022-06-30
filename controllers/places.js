const router = require('express').Router()

//get
router.get('/', (req, res) => {
    res.send('Get/places')
})

module.exports = router
