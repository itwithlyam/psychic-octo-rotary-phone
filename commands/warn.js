module.exports = {
    name: 'warn',
    description: 'Warns a user',
    usage: '<user>',
    guildOnly: true,
    args: true,
    execute(message, args) {
        if (!message.member.hasPermission('MANAGE_MEMBERS')) return message.reply('you need to have MANAGE_MEMBERS permissions to use this command.')
        message.mentions.members.first().send('You have been warned in ' + message.guild.name)
        message.reply('warned them.')
    },
}
