//const mongoose = require('mogoose');
//const {MOGO_URI} = require('./config');
const axios = require('axios').default;
const cherio = require('cherio');
const cron = require('node-cron');


(async () => {
    const html = await axios.get('https://lectortmo.com/');
    const $ = cherio.load(html.data);
    const titles= $(".element");
    titles.each((index,element) => {

        const Manga = {
            titulo: $(element).text(),
            link: $(element).children().attr("href")
        };
        console.log(Manga.link);
    });
})()



//mongoose.connect(MOGO_URI  ,{useNewUrlParser:true});