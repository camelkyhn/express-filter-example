const express = require('express');
const RecordService = require('./service/RecordService');

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        const service = new RecordService();
        const records = await service.filter(request.body);
        response.status(200).send({
            "code": 0,
            "msg": "Success",
            "records": records
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).send({
            "code": -1,
            "msg": error,
            "records": null
        });
    }

});

module.exports = router;