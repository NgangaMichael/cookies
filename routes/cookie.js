const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const res = require('express/lib/response');

// when you sign a cookie you pass your seceret here (mancity is the secret)
// cookkies mast always be signed 
router.use(cookieParser('mancity'));

// cookies are inbuild in express just like router 
router.get('/setname', (req, res) => {
    res.cookie('name', 'Michael Nganga');
    res.cookie('club', 'Mancity');
    res.cookie('league', 'Premire League', {httpOnly: true, maxAge: 10000 * 60 * 60 * 24 * 7, secure: true, signed: true});
    res.send('I sent you a cookie');
});

router.get('/greet', (req, res) => {
    const {club = ''} = req.cookies;
    res.send(`my name is${club}`);
});

// when a cookie is siged its not stored in res.cookies but in signedcookies
// signing cookies makes them secured  
router.get('/signed', (req, res) => {
    res.cookie('game', 'soccer')
    res.cookie('fruit', 'Banana', {signed: true});
    console.log(req.cookies);
    res.send(req.cookies);
});

router.get('/verify', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
});

module.exports = router;