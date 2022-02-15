var express = require("express");
var app = express();
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/cities", (req, res, next) => {
    res.json([
        {
            id: 0,
            destination: "Guadalajara",
            flights: [
                {
                    id: 1,
                    takeoff: '08/02/2022 11:00:00',
                    landing: '08/02/2022 12:00:00',
                    price: 600
                }
                ,
                {
                    id: 2,
                    takeoff: '08/02/2022 13:30:00',
                    landing: '08/02/2022 14:30:00',
                    price: 200
                },
                {
                    id: 3,
                    takeoff: '08/02/2022 16:40:00',
                    landing: '08/02/2022 17:40:00',
                    price: 300
                }
            ]
        },
        {
            id: 1,
            destination: "Monterrey",
            flights: [
                {
                    id: 1,
                    takeoff: '09/02/2022 11:00:00',
                    landing: '09/02/2022 12:00:00',
                    price: 800
                }
                ,
                {
                    id: 2,
                    takeoff: '09/02/2022 13:30:00',
                    landing: '09/02/2022 14:30:00',
                    price: 400
                },
                {
                    id: 3,
                    takeoff: '09/02/2022 16:40:00',
                    landing: '09/02/2022 18:20:00',
                    price: 100
                }
            ]
        },
        {
            id: 2,
            destination: "Ciudad de México",
            flights: [
                {
                    id: 1,
                    takeoff: '10/02/2022 17:00:00',
                    landing: '10/02/2022 19:00:00',
                    price: 800
                }
                ,
                {
                    id: 2,
                    takeoff: '10/02/2022 14:30:00',
                    landing: '10/02/2022 16:30:00',
                    price: 400
                },
                {
                    id: 3,
                    takeoff: '10/02/2022 18:40:00',
                    landing: '10/02/2022 20:10:00',
                    price: 100
                }
            ]
        }
    ])
})