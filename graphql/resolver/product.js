const { add, edit, get, get_all, remove } = require('../../mongo/mongo_service/product');
const { get: get_category } = require('../../mongo/mongo_service/category');

const resolvers = {
    Query: {
        products: async (parent, args) => {
            let query = {};
            let pagination = [{$skip  : 0 }, {$limit:100}]
            const result = await get_all(query, pagination);
            return result;
        },
        productDetail: async (parent, args) => {
            const result = await get(args.id);
            return result;
        }
    },

    Mutation: {
        updateProduct: async (parent, args) => {
            console.log("Args in updateProduct:", args);
            const payload = {
                categoryId: args.categoryId,
                name: args.name,
                price: args.price,
                color: args.color,
                img_path: args.imgPath
            };
            const result = await edit(args.id, payload);
            return result;
        },
        addProduct: async (parent, args) => {
            const payload = {...args};
            let result = await add(payload);
            return result;
        },
        deleteProduct: async (parent, args) => {
            let result = await remove(args.id);
            return result;
        }
    },

    Product: {
        category: async (parent) => {
            console.log('parent =========>', parent);
            const catId = parent.categoryId;
            if (!catId) return null;
            const cat = await get_category(catId);
            return cat;
        }
    }
};

module.exports = { resolvers };