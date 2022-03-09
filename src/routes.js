const { Router } = require('express');
const CategoryController = require('./app/controllers/CategoryController');
const ContactController = require('./app/controllers/ContactController');

const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);
router.delete('/contacts/:id', ContactController.delete);

router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);

module.exports = router;
