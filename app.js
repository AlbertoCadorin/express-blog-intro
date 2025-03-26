const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send('Server del mio blog')
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

const post =[
    {
        title: "Ciambellone",
        contenuto: "contenuto",
        img: "images/ciambellone.jpeg",
        tag: ["torta","colazione"]
    }, {
        title: "Cracker di barbabietola",
        contenuto: "contenuto",
        img: "images/cracker_barbabietola.jpeg",
        tag: ["craker","aperitivo","barbabietola"]
    }, {
        title: "Pane fritto dolce",
        contenuto: "contenuto",
        img: "images/pane_fritto_dolce.jpeg",
        tag: ["snack dolce","colazione"]
    }, {
        title: "Pasta di barbabietola",
        contenuto: "contenuto",
        img: "images/pasta_barbabietola.jpeg",
        tag: ["pasta","barbabietola"]
    }, {
        title: "Torta paesana",
        contenuto: "contenuto",
        img: "images/torta_paesana.jpeg",
        tag: ["torta","colazione"]
    }
]