import express from 'express';

const routes = express.Router();

// Define your user routes here
routes.get('/product', (req, res) =>{
    res.json({
        message: 'List of products',
});
});

export default routes;