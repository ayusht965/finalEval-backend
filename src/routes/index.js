/* eslint-disable no-unused-vars */
const express = require('express');
const { getContentsController, getOneContentController, addContentController, addContentFieldController,
    deleteContentFieldController, getContentEntriesController, addContentEntriesController,
    updateContentFieldController, updateContentNameController, deleteContentEntriesController } = require('../controllers');
// const userAuth = require('../middleware/userAuth');
const contentRouter = express.Router();
// get all content-types
contentRouter.get('/contents', getContentsController);
// //get content-types by ID
contentRouter.get('/content/:Id', getOneContentController);
//post content-type
contentRouter.post('/content', addContentController);
//update content-type name
contentRouter.put('/contents/:Id', updateContentNameController);
//post new field to content-type
contentRouter.post('/content/:Id', addContentFieldController);
//update content-type field
contentRouter.put('/content/:Id', updateContentFieldController);
// //delete content-type field
contentRouter.delete('/contents/:Id', deleteContentFieldController);
//get entries of specific content-type
contentRouter.get('/content/:Id/entries', getContentEntriesController);
//add entries of specific content-type
contentRouter.post('/content/:Id/entries', addContentEntriesController);
// //delete entries of specific content-type by only content-type ID
contentRouter.delete('/content/:Id/entries', deleteContentEntriesController);

module.exports = contentRouter;