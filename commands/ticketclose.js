module.exports = {
    name: 'ticketclose',
    description: "Closes a modmail ticket. Note: This also works on normal channels.",
    guildOnly: true,
    execute(message) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('you need to have MANAGE_CHANNELS permissions to use this command.')
        message.guild.channels.cache.get(message.channel.id).delete()
        message.author.send('Closed the ticket.')
    }
}