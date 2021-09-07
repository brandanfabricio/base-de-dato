const mongoose = require('mongoose');
const {Schema}= mongoose;

const Manga = new Schema({
    titulo : {type: String},
    link : {type: String}
},{
    timestaps:{createAt:true,updateAt:true}
});
module.exports = mongoose.module("anime",Manga );