const db = require('../../db/models/index.js');
const getContents = async () => {
    const contents = await db.ContentTypes.findAll();
    if (!contents) {
        throw new Error('Content-Type does not exist');
    }
    return contents;
};
const getContent = async (Id) => {
    const content = await db.ContentTypes.findOne(
        {
            where: {
                id: Id
            }
        }
    );
    if (!content) {
        throw new Error('Content-Type does not exist');
    }
    return content;
};
const addContent = async (name) => {
    const content = await db.ContentTypes.findOne({
        where: {
            Name: name
        }
    });
    if (content) {
        throw new Error('Content-Type already exists');
    }
    const newContent = await db.ContentTypes.create({
        Name: name,
        Entries: 0,
        Fields: {}
    });
    return newContent;
};
const updateContentName = async (Id, name) => {
    const content = await db.ContentTypes.update({
        Name: name
    }, {
        where: {
            id: Id
        },
        returning: true,
        plain: true
    });
    return content[1];
};
const addNewContentField = async (Id, newField) => {
    const content = await db.ContentTypes.findOne({
        where: {
            id: Id
        }
    });
    // console.log(content.Fields[newField]);
    // if(content.hasOwnProperty(newField)){
    //     throw new Error('Field already exists');
    // }
    content.Fields[newField] = '';
    content.changed('Fields', true);
    await content.save();
    return content;
};
const updateContentField = async (Id, changeField) => {
    const content = await db.ContentTypes.findOne({
        where: {
            id: Id
        }
    });
    // console.log(content.Fields[newField]);
    // if(content.hasOwnProperty(newField)){
    //     throw new Error('Field already exists');
    // }
    delete content.Fields[changeField['old']];
    content.Fields[changeField['new']] = '';
    content.changed('Fields', true);
    await content.save();
    return content;
};
const deleteContentField = async (Id, newField) => {
    const content = await db.ContentTypes.findOne({
        where: {
            id: Id
        }
    });
    // if(!content.Fields.hasOwnProperty(newField)){
    //     throw new Error('Field does not exist');
    // }
    delete content.Fields[newField];
    content.changed('Fields', true);
    await content.save();
    return content;
};
const getContentEntries = async (Id) => {
    const entries = await db.ContentTypeEntries.findAll({
        where: {
            ContentTypeId: Id
        }
    });
    return entries;
};
const addContentEntries = async (Id, entry) => {
    const newEntry = await db.ContentTypeEntries.create({
        ContentTypeId: Id,
        Fields: entry
    });
    return newEntry;
};
const updateContentEntries = async (id, entry) => {
    const newEntry = await db.ContentTypeEntries.update({
        Fields: entry
    }, {
        where: {
            id
        },
        returning: true,
        plain: true
    });
    return newEntry[1];
};
module.exports = {
    addContent,
    getContents,
    getContent,
    addNewContentField,
    updateContentField,
    deleteContentField,
    getContentEntries,
    addContentEntries,
    updateContentEntries,
    updateContentName
};
// const details = [];
    //  await foundUser.cartDetails.reduce(async(products,productId)=>{
    //     const product = await db.Product.findOne({
    //         where:{
    //             id:productId
    //         }
    //     })
    //     return details.push(product.name);
    // },details)