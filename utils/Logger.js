const { Signale } = require("signale");

class Logger extends Signale {
    constructor(logLevel) {
        super({
            disabled: false,
            interactive: false,
            scope: "xTicket",
            logLevel: logLevel || "info",
            types: {
                info: {
                    badge: "ℹ",
                    color: "blue",
                    label: "info",
                    logLevel: "info",
                },
                warn: {
                    badge: "⚠",
                    color: "yellow",
                    label: "warn",
                    logLevel: "warn",
                },
                error: {
                    badge: "✖",
                    color: "red",
                    label: "error",
                    logLevel: "error",
                },
                fatal: {
                    badge: "🔥",
                    color: "red",
                    label: "fatal",
                    logLevel: "fatal",
                },
                debug: {
                    badge: "🐛",
                    color: "magenta",
                    label: "debug",
                    logLevel: "debug",
                },
                success: {
                    badge: "✔",
                    color: "green",
                    label: "success",
                    logLevel: "info",
                },
                log: {
                    badge: "📝",
                    color: "white",
                    label: "log",
                    logLevel: "info",
                }
            },
        });
    }
}

module.exports = Logger;
