const product = require('../mongo_models/product');

const add = (data) => {
    return new Promise((resolve, reject) => {
        let result = product.create(data);
        result.then(resolve).catch(reject);
    });
}

const edit = (id ,data) => {
    return new Promise((resolve, reject) => {
        let result = product.findByIdAndUpdate(id, data, {new:true});
        result.then(resolve).catch(reject);
    });
}

const get_all = (filter, skip, limit) => {
    return new Promise((resolve, reject) => {
        let result = product.find(filter).sort({createdAt:-1}).skip(skip).limit(limit);
        result.then(resolve).catch(reject);
    });
}

const get = (id) => {
    return new Promise((resolve, reject) => {
        let result = product.findById(id);
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