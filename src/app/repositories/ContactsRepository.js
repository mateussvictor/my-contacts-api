const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@email.com',
    phone: '5561999299109',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'José',
    email: 'jose@email.com',
    phone: '5561999299109',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
