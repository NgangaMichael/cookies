const express = require('express');
const router = express.Router();

// with router you make your code dry by using the path cats ones on the required router in indexe.js 
// cat routes 
router.get('/', (req, res) => {
    res.send('All the cats')
});

router.get('/:id', (req, res) => {
    res.send('One cat')
});

router.post('/', (req, res) => {
    res.send('Craete a new cat')
});

router.patch('/:id/edit', (req, res) => {
    res.send('Update cat')
});

router.delete('/:id', (req, res) => {
    res.send('Delete cat')
});

module.exports = router;