const { add, edit, get, get_all, remove } = require('../../mongo/mongo_service/product');

module.exports = {

    Query: {
        products: async (parent, args) => {
            let query = {};
            const result = await get_all(query, 0, 100);
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
                category: args.category,
                product_name: args.productName,
                price: args.price,
                color: args.color,
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
                color: args.color,
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