const axios = require('axios')
require('dotenv').config()
module.exports = async function () {
    try { 
        const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`)
        return response.data;
    }
    catch(err) {
        console.error(err)
    }
}