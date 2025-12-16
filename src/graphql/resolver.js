const { add, edit, get, get_all, remove } = require('../mongo_service/product');

const resolvers = {
    Query: {
        getProductsList: async (parent, args) => {
            let query = {};
            const result = await get_all(query, 0, 100);
            return result;
        },
        getProduct: async (parent, args) => {
            const result = await get(args.id);
            return result;
        }
    },

    Mutation: {
        updateProduct: async (parent, args) => {
            console.log("Args in updateProduct:", args);
            const payload = {
                category: args.category,
                product_name: args.productName,
                price: args.price,
                colors: args.colors,
                img_path: args.imgPath
            };
            const result = await edit(args.id, payload);
            return result;
        },
        addProduct: async (parent, args) => {
            const payload = {
                category: args.category,
                productName: args.productName,
                price: args.price,
                colors: args.colors,
                imgPath: args.imgPath
            };
            
            let result = await add(payload);
            return result;
        },
        deleteProduct: async (parent, args) => {
            let result = await remove(args.id);
            return result;
        }
    }
};

module.exports = { resolvers };