const axios = require('axios')
require('dotenv').config()
const countries = require('./countries.json')
async function getNews (country) {

    try { 
        const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`)
        return {
            "country": country,
            "articles": response.data.articles
        }
    }
    catch(err) {
        console.error(err)
    }

}

module.exports = async function () {
    var newsPromises = countries.map(getNews)

    return Promise.all(newsPromises).then(newsObjects => {
        //console.log('newsObjects:', newsObjects);
        return [].concat.apply([], newsObjects)
    })
}