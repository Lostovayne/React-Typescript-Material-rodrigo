import { instance } from "./base.api";

const endpoint = "character";

export const characters = {
    getAll: function ({ page }: { page: number }) {
        return instance.get(endpoint, {
            params: {
                page,
            },
        });
    },

    getById: function ({ id }: { id: number }) {
        return instance.get(`${endpoint}/${id}`);
    },
};
