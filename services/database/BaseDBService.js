// services/database/BaseDBService.js
class BaseDBService {
    async create(data) {
      throw new Error('create method must be implemented by subclasses');
    }
  
    async find(query) {
      throw new Error('find method must be implemented by subclasses');
    }
  
    async update(id, data) {
      throw new Error('update method must be implemented by subclasses');
    }
  
    async delete(id) {
      throw new Error('delete method must be implemented by subclasses');
    }
  }
  
  module.exports = BaseDBService;
  