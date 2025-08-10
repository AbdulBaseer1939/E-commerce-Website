import express from 'express';

const routes = express.Router();

// Define your user routes here
routes.get('/users', (req, res) =>{
    res.json({
        message: 'List of users',
});
});

export default routes;