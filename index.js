const Discord = require('discord.js')
const client = new Discord.Client()


client.on('message', (msg) => {
    if (msg.author.id != "YOUR ACCOUNT ID HERE") return;

    let array = []

    if (msg.content.startsWith('raided')) {
        msg.delete()

        for (var i = 0; i < 50; i++) {
            let random = msg.guild.members.random()
            array.push(random.user)
        }

        console.log(array.map(x => x.tag))
        msg.channel.send(array.map(x => x)).then(m => {
            m.delete()
        })

        array = []
        i = 0;
    }
})

client.on('ready', () => {
    console.log('started');
})

const token = "YOUR ACCOUNT TOKEN HERE"
client.login(token)