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
        return response.json(await complaintRepository.updateimage())
    }
}
