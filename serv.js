const express = require('express');
const { Telegraf } = require('telegraf')
const app =  new Telegraf("1339644712:AAE7Wb3aAwNPHKkWgveC_H2f8FR_DmRpRd0")
let serv = express();

serv.get("/serv",(req,res) => {
	app.telegram.sendMessage(893924820,"someone has visited your site")
})
//app.telegram.sendMessage(893924820,"whatsup my man")
app.startPolling();
serv.listen(80,"0.0.0.0")
