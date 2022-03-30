
module.exports = {
    name: 'ready',
    once: true,
    execute(client){
        console.log(`On! Logged as ${client.user.tag}`);
        client.user.setActivity(`Estou sendo criado paspalho`, {type: 'PLAYING'});
    }
}