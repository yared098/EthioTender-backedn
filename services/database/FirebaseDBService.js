// services/database/FirebaseDBService.js
const admin = require('firebase-admin');
const BaseDBService = require('./BaseDBService');

class FirebaseDBService extends BaseDBService {
  constructor() {
    super();
    this.db = admin.firestore(); // Firebase Firestore
  }

  async create(data) {
    const tenderRef = this.db.collection('tenders').doc();
    await tenderRef.set(data);
    return { id: tenderRef.id, ...data };
  }

  async find(query) {
    const snapshot = await this.db.collection('tenders').get();
    return snapshot.docs.map(doc => doc.data());
  }

  async update(id, data) {
    const tenderRef = this.db.collection('tenders').doc(id);
    await tenderRef.update(data);
    return { id, ...data };
  }

  async delete(id) {
    await this.db.collection('tenders').doc(id).delete();
    return { message: 'Tender deleted successfully' };
  }
}

module.exports = FirebaseDBService;
