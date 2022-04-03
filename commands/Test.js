//jshint esversion:6

const execute = (client,msg) =>
{
     msg.reply('Test Succesfull');

    }

module.exports = {
    name: 'Test',
    description: 'responds with pong',
    command: 'Test',
    commandType: 'info',
    isDependent: false,
    help: undefined,
    execute};