// services/database/MongoDBDBService.js
const mongoose = require('mongoose');
const BaseDBService = require('./BaseDBService');
const Tender = require('../../models/Tender');

class MongoDBDBService extends BaseDBService {
  async create(data) {
    const tender = new Tender(data);
    return await tender.save();
  }

  async find(query) {
    return await Tender.find(query);
  }

  async update(id, data) {
    return await Tender.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Tender.findByIdAndDelete(id);
  }
}

module.exports = MongoDBDBService;
