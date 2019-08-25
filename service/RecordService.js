const Record = require('../model/Record');

class RecordService {

    async filter(params) {
        let aggregate = [
            {
                "$project": {
                    "_id": 0,
                    "key": "$key",
                    "createdAt": "$createdAt",
                    "totalCount": { "$sum": "$counts" }
                }
            },
            {
                "$match": {
                    "$and": []
                }
            }
        ];
    
        let dateFilter = {};
        if(params.startDate) {
            dateFilter.createdAt = { "$gt": new Date(params.startDate) };
        }
    
        if(params.endDate) {
            if(dateFilter.createdAt) {
                dateFilter.createdAt.$lt = new Date(params.endDate);
            }
            else {
                dateFilter.createdAt = { "$lt": new Date(params.endDate) };
            }
        }
    
        let countFilter = {};
        if(params.minCount) {
            countFilter.totalCount = { "$gt": params.minCount };
        }
    
        if(params.maxCount) {
            if(countFilter.totalCount) {
                countFilter.totalCount.$lt = params.maxCount;
            }
            else {
                countFilter.totalCount = { "$lt": params.maxCount };
            }
        }
    
        aggregate[1].$match.$and.push(dateFilter);
        aggregate[1].$match.$and.push(countFilter);
        return await Record.aggregate(aggregate).exec();
    }
}

module.exports = RecordService;