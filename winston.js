const winston = require('winston');
const logger=winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});
logger.info('hi');
logger.info('winston');
logger.warn('wrong name');
logger.error('its log log log')
