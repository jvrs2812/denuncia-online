const connection = require('../../database/connection.js')
const params = require('../../complaint/entities/params/complaintParams.js')

module.exports = {
    async getAll(request, response) {
        const complaint = await connection('complaint').select('title', 'description', 'image_url', 'id');

        return complaint
    },

    async create(request, response) {
        const { title, description } = request.body;

        await connection('complaint').insert({ title, description, image_url })
    },

    async updateimage(request, response) {

    }
}