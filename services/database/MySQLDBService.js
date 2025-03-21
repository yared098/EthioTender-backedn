// services/database/MySQLDBService.js
const mysql = require('mysql2');
const BaseDBService = require('./BaseDBService');

class MySQLDBService extends BaseDBService {
  constructor() {
    super();
    this.connection = mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
    });
  }

  async create(data) {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO tenders (title, description, startDate, endDate) VALUES (?, ?, ?, ?)';
      this.connection.query(query, [data.title, data.description, data.startDate, data.endDate], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  async find() {
    return new Promise((resolve, reject) => {
      this.connection.query('SELECT * FROM tenders', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  async update(id, data) {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE tenders SET title = ?, description = ?, startDate = ?, endDate = ? WHERE id = ?';
      this.connection.query(query, [data.title, data.description, data.startDate, data.endDate, id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  async delete(id) {
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM tenders WHERE id = ?';
      this.connection.query(query, [id], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
}

module.exports = MySQLDBService;
