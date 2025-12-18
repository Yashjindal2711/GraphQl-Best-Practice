const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const product = require('../mongo_models/product');

const add = (data) => {
    return new Promise((resolve, reject) => {
        let result = product.create(data);
        result.then(resolve).catch(reject);
    });
}

const edit = (id, data) => {
    return new Promise((resolve, reject) => {
        let result = product.findByIdAndUpdate(id, data, { new: true });
        result.then(resolve).catch(reject);
    });
}

const get_all = (filter, pagination) => {
    return new Promise((resolve, reject) => {

        const pipeline = [
            { $match: filter },
            { $sort: { createdAt: -1 } },
            ...pagination,
            { $lookup: {
                from: 'categories',
                localField: 'categoryId',
                foreignField: '_id',
                as: 'category'
            }},
            { $unwind: { path: '$category', preserveNullAndEmptyArrays: true } }
        ];

        let result = product.aggregate(pipeline);
        result.then(resolve).catch(reject);
    });
}

const get = (id) => {
    return new Promise((resolve, reject) => {
        const pipeline = [
            { $match: { _id: ObjectId(id) } },
            { $lookup: { 
                from: 'categories', 
                localField: 'categoryId', 
                foreignField: '_id', 
                as: 'category' 
            }},
            { $unwind: { path: '$category', preserveNullAndEmptyArrays: true } }
        ];
        let result = product.aggregate(pipeline);
        result.then(resolve).catch(reject);
    });
}

const remove = (id) => {
    return new Promise((resolve, reject) => {
        let result = product.findByIdAndDelete(id);
        result.then(resolve).catch(reject);
    });
}

module.exports = { add, edit, get_all, get, remove };