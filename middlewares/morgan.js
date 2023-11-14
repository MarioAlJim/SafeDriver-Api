const morgan = require("morgan");

module.exports = (loggerFunction) => morgan(':remote-addr - :remote-user ":method :url HTTP/:http-version" :status ":user-agent"', {
    stream: {
        write: (message) => {
            message = message.replace(/\n$/, '');
            loggerFunction(message);
        }
    },
});
