var express = require('express');
var router = express.Router();
var db = require('../db/databaseSchema');
router.post('/place_order', function (req, res) {

    var data = new db.workers({
        coustomerName: req.body.cName,
        productName: req.body.pName,
        quantity: req.body.quantity,
        createdTillNow: 0,
        predicted: null
    });
    db.workers.findOneAndUpdate({
        "productName": req.body.pName
    }, {
        $inc: {
            quantity: req.body.quantity
        }
    }, function (err, result) {
        if (err) {

        } else if (!result) {
            data.save(function (err, result) {
                if (err) {

                } else {
                    retriveData(req, res);
                }
            })
        } else {
            // console.log("data updated")
            retriveData(req, res);
        }

    })


})
router.post('/set_predcated_value', function (req, res) {
    db.workers.findOneAndUpdate({
        "productName": req.body.dishName.productName
    }, {
        $set: {
            predicted: req.body.predictedValue
        }
    }, function (err, result) {
        if (err) {
            // console.log(err, "data not exists ....")
        } else {
            retriveData(req, res);
        }
    })
})

router.get('/init_load', function (req, res) {
    retriveData(req, res);
})

router.post('/done', function (req, res) {
    db.workers.findOneAndUpdate({
        $and: [{
                "productName": req.body.pName
            },
            {
                quantity: {
                    $gte: 1
                }
            }
        ]
    }, {
        $inc: {
            createdTillNow: 1,
            quantity: -1
        }
    }, function (err, result) {
        if (err) {
            console.log(err, "data not exists ....")
        } else {
            retriveData(req, res);
        }
    })
})

function retriveData(req, res) {
    db.workers.find(function (err, data, status) {
        // console.log(err, data)
        res.send(data)
    })
}

module.exports = router;