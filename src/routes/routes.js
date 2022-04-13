const express = require('express');
const routes = express.Router();
const complaintController = require('../complaint/controller/ComplaintController.js')

routes.get('/complaint', complaintController.index)

routes.post('/complaint', complaintController.create)

routes.put('/complaint/:id', complaintController.update)

module.exports = routes;