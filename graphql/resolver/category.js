const { add, edit, get, get_all, remove } = require('../../mongo/mongo_service/category');

module.exports = {

    Query: {
        categories: async (parent, args) => {
            let query = {};
            const result = await get_all(query, 0, 100);
            return result;
        },
        categoryDetail: async (parent, args) => {
            const result = await get(args.id);
            return result;
        }
    },

    Mutation: {
        updateCategory: async (parent, args) => {
            console.log("Args in category update:", args);
            const payload = {
                name: args.name,
                image: args.image,
            };
            const result = await edit(args.id, payload);
            return result;
        },
        addCategory: async (parent, args) => {
            const payload = {
                name: args.name,
                image: args.image,
            };

            let result = await add(payload);
            return result;
        },
        deleteCategory: async (parent, args) => {
            let result = await remove(args.id);
            return result;
        }
    }
};

 