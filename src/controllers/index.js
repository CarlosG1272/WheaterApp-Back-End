const axios = require("axios"); 
const getCorrectColor = require("./getColor"); 
require('dotenv').config();
function getCorrectImage(information, allImages) {
    let coincidence = allImages.find(el=> el.title === information.weather[0].description); 
    
    if(coincidence) {
        return coincidence.imgUrl
    }
    return `http://openweathermap.org/img/wn/${information.weather[0].icon}@2x.png`
}


const KEY = process.env.API_KEY
const MY_API_IMAGES = process.env.GUERRA_CRUD_API

const getDefaultOptions = async (req,res) => {
    const defaultsCountries = ["Washington", "Beijing", "Moscow", "Berlin", "London", "Tokyo", "Paris", "Seoul", "Riyadh", "Abu Dhabi"]
    // Get images 
    const response = await axios.get(MY_API_IMAGES); 
    let images = response.data; 
    let prevdata = []

    const promises = defaultsCountries.map(el=> 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${el}&appid=${KEY}&units=imperial`).then(res=> prevdata.push(res.data)).catch(err=> console.error(err))
        )

    Promise.all(promises)
    .then(result=> {
    })
    .then(response =>  {
        const data = prevdata.map(el=> ({...el, image: getCorrectImage(el, images), color: getCorrectColor(el)}))
        res.send(data)
    })
    .catch(err=> res.send(err))

}

const getOneDetail = async (req,res) => {
    const {name} = req.params; 
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${KEY}&units=imperial`); 

        const images = await axios.get(MY_API_IMAGES)

        let returnInformation = { 
            ...response.data, image: getCorrectImage(response.data, images.data), color: getCorrectColor(response.data)
        }

        if (response.cod === "404") return res.send([]); 
        return res.send(JSON.stringify(returnInformation))
    } catch(e){
        res.status(404).send(e)
    }

}
module.exports = {getDefaultOptions, getOneDetail}