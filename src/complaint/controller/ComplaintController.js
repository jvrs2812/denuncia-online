const req = require('express/lib/request')
const complaintRepository = require('../repository/RepositoryComplaint.js')
const params = require('../../complaint/entities/params/complaintParams.js')

module.exports = {
    async index(request, response) {
        return response.json(await complaintRepository.getAll())
    },

    async create(request, response) {


        return response.json(await complaintRepository.create(request, response));
    },

    async update(request, response) {
        try {
            await complaintRepository.updateimage(request, response);
            return response.status(204).json()
        } catch (err) {
            console.log(err)
            return response.status(500).json({ "error": "2312x23 contate o administrador" })
        }
    }
}
