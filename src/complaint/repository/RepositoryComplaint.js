const connection = require('../../database/connection.js')
const params = require('../../complaint/entities/params/complaintParams.js')

module.exports = {
    async getAll(request, response) {
        const complaint = await connection('complaint').select('title', 'description', 'image_url', 'id');

        return complaint
    },

    async create(request, response) {
        const { title, description, image_url } = request.body;

        await connection('complaint').insert({ title, description, image_url })
    },

    async updateimage(request, response) {
        const { title, description, image_url } = request.body;

        const id = request.param('id');

        await connection('complaint').update({ title, description, image_url }).where({ id });
    }
}