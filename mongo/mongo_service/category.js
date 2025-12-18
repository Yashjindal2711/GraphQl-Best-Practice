const category = require('../mongo_models/category');

const add = (data) => {
    return new Promise((resolve, reject) => {
        let result = category.create(data);
        result.then(resolve).catch(reject);
    });
}

const edit = (id ,data) => {
    return new Promise((resolve, reject) => {
        let result = category.findByIdAndUpdate(id, data, {new:true});
        result.then(resolve).catch(reject);
    });
}

const get_all = (filter, skip, limit) => {
    return new Promise((resolve, reject) => {
        let result = category.find(filter).sort({createdAt:-1}).skip(skip).limit(limit);
        result.then(resolve).catch(reject);
    });
}

const get = (id) => {
    return new Promise((resolve, reject) => {
        let result = category.findById(id);
        result.then(resolve).catch(reject);
    });
}

const remove = (id) => {
    return new Promise((resolve, reject) => {
        let result = category.findByIdAndDelete(id);
        result.then(resolve).catch(reject);
    });
}

module.exports = { add, edit, get_all, get, remove };