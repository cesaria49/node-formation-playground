const https = require('https')
const url ='https://api.weatherstack.com/current?access_key=c496581fb26e165dda930de6e77a6ab9&query=45,-75&units=f'


const request = https.request(url,(response)=>{
    let data = ''
    response.on('data',(chunk)=>{
        data = data + chunk.toString()
        console.log(chunk)


    })
    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)
    })
})


request.on('error',(error)=>{
    console.log('An error',error)
})

request.end()