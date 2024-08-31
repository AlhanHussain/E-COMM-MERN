const express = require('express');
const {kidsCollection, womenscollection} = require('../controller/newCollection');




const newCollectionRouter = express.Router();


newCollectionRouter.get('/Kidscollection',kidsCollection);
newCollectionRouter.get('/womenscollection',womenscollection);





module.exports = {newCollectionRouter};