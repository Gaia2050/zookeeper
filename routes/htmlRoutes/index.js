const path = require('path');
const router = require('express').Router();

router.get('/api/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

router.get('*', (req, res) => {       //The * will act as a wildcard, meaning any route that wasn't previously defined will fall under this request and will receive the homepage as the response. Thus, requests for /about or /contact or /membership will essentially be the same now.
    res.sendFile(path.join(__dirname, '../../public/index.html'));    //The order of your routes matters! The * route should always come last. Otherwise, it will take precedence over named routes, and you won't see what you expect to see on routes like /zookeeper.
});