const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Corneh_tech,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function CORNEH_TECH_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Corneh_tech = Corneh ({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Corneh_tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_CORNEH_TECH.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Corneh_tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Corneh_tech.ev.on("connection.update", async (s) => {
                const {https://whatsapp.com/channel/0029Vb32FIvD8SDyl6qmsA1b
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Corneh_tech.sendMessage(Pair_Code_By_Corneh_tech.user.id, { text: '' + b64data });

               let CORNEH_TECH_TEXT = `
┏━━━━━━━━━━━━━━
┃CORNEH MD SESSION IS 
┃SUCCESSFULLY
┃CONNECTED ✅🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = 𖥘⚡ CORNEH-TECH ⚡𖥘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhatsApp channel=https://whatsapp.com/channel/0029Vb32FIvD8SDyl6qmsA1b
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/254716226465
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || Bot Repo = https://github.com/corneh-bot/kamwana 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❻ || YouTube = https://www.youtube.com/dolah254 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
©2024-2099 CORNEH MD_`
 await Pair_Code_By_Corneh_tech.sendMessage(Pair_Code_By_Corneh_tech.user.id,{text: CORNEH_TECH_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Corneh_tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    CORNEH_TECH_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await CORNEH_TECH_PAIR_CODE()
});
module.exports = router
