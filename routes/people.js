const express = require('express');
const router = express.Router();

// using middleware with routes to protect people files
router.use((req, res, next) => {
    if(req.query.isAdmin){
        next()
    }
    res.send('You are not authorised')
});

// with router you make your code dry by using the path cats ones on the required router in indexe.js 
// poeple routes 
router.get('/', (req, res) => {
    res.send('All people')
});

router.get('/:id', (req, res) => {
    res.send('One person')
});

router.post('/', (req, res) => {
    res.send('Craete a new person')
});

router.put('/:id/edit', (req, res) => {
    res.send('Update person')
});

router.delete('/:id', (req, res) => {
    res.send('Delete person')
});

module.exports = router;