import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
   ['+522722581214', 'LeettsitaBot 🐼', true],
   ['+522722581214', 'LeettsitaBot', true],
   ['+522722581214','LeettsitaBot', true],
   ['+522722581214', 'LeettsitaBot', true],
]

global.creator = [
   ['+522722581214', 'LeettsitaBot 🐼', true]
]

global.mods = 
global.prems = 


global.packname = 'LeettsitaBot MD'
global.botname = 'LeettsitaBot'
global.wm = 'LeettsitaBot - MD'
global.author = 'LeettsitaBot MD'
global.dev = 'LeettsitaBot'
global.errorm = 'Error: ${error.message}'
global.namebot = 'LeettsitaBot'
global.nameai = 'LeettsitaBot Ai'
global.textbot = 'LeettsitaBot MD'
global.textmain = 'LeettsitaBot'
global.textmain2 = 'LeettsitaBot MD'
global.vs = '2.1.0'
global.emotg = '🌷'
global.msgtagall = '💜⋆ 𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 ⋆💜\n🛍️𝗔𝗱𝗾𝘂𝗶𝗲𝗿𝗲 𝗲𝗹 𝗯𝗼𝘁 𝗰𝗼𝗻 ⨾\n↳ wa.me/+522722581214'
global.moneda = 'LeettsitaBotCoins'

global.sessions = 'LeettsitaBotSession'
global.jadi = 'JadiBots'
global.nameqr = 'LeettsitaBot'


global.catalogo = fs.readFileSync('./media/catalogo.jpg')


global.grupo = 
global.comu = 
global.channel = 
global.ig = 


global.estilo = 


global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        


global.multiplier = 69 
global.maxwarn = '3'


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})