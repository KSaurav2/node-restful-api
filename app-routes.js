const express = require("express");
const router = express.Router();
const productsRepo = require('./product-repository');


router.use((req, res, next) => {
    console.log("Inside app router");
    next();
})

//show all products
router.get('/products', async (req, res) => {
    try {
        let results = await productsRepo.findAll();
        res.json({ "status": 200, "error": null, response: results });
    }
    catch (err) {
        res.json({ "status": 500, "error": err, });
    }
});

// Get a product by id
router.get('/products/:id', async (req, res) => {
    try {
        let results = await productsRepo.findOne(req.params.id);
        res.json({ "status": 200, "error": null, response: results })
    }
    catch (err) {
        res.json({ "status": 500, "error": err, });
    }
})

router.post('/products', async (req, res) => {
    try {
        await productsRepo.save(req.body);
        res.json({ status: 201, error: null, response: req.body});
    }
    catch(err) {
        res.json({ status: 500, error: err });
    }
})

router.put('/products', async (req, res) => {
    try {
        await productsRepo.update(req.body);
        res.json({ status: 201, error: null, response: req.body});
    }
    catch(err) {
        res.json({ status: 500, error: err });
    }
})

module.exports = router;