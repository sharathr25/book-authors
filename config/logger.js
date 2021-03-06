/* eslint-disable comma-dangle */
const { createLogger, format, transports } = require('winston');

// creating a logger
const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: new transports.Console()
});

module.exports = logger;
