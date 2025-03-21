// services/database/dbFactory.js
const MongoDBDBService = require('./MongoDBDBService');
const FirebaseDBService = require('./FirebaseDBService');
const MySQLDBService = require('./MySQLDBService');
const SupabaseDBService = require('./SupabaseDBService'); // Add this for Supabase
const dbConfig = require('../../config/dbConfig');

let DBService;

switch (dbConfig.dbType) {
  case 'firebase':
    DBService = FirebaseDBService;
    break;
  case 'mysql':
    DBService = MySQLDBService;
    break;
  case 'supabase':
    DBService = SupabaseDBService;
    break;
  default:
    DBService = MongoDBDBService;
    break;
}

module.exports = new DBService();
