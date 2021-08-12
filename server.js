const express = require('express')
const app = express()

app.set("view engine","ejs")

app.get("/", function (req, res) {
    res.render("pages/index")
})

app.get("/sobre", function (req, res) {
    const items = [
        {
            title: 'D',
            message: 'esenvolva SPA'
        },
        {
            title: 'E',
            message: 'JS usa JavaScript para renderizar HTML'
        },
        {
            title: 'M',
            message: 'uito fácil'
        },
        {
            title: 'A',
            message: 'prendizagem intuitiva'
        },
        {
            title: 'I',
            message: 'nstall ejs'
        },
        {
            title: 'S',
            message: 'intaxe simples'
        },
    ]
    res.render("pages/sobre", {
        qualitys: items,
    })
})

app.listen('8080')
console.log('running')