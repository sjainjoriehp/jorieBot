const winston  = require('winston');



const levels = {
  error: 0,
  warn: 1,/*  */
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
}

const botInfoLogger = winston.createLogger({
 
  transports: [
   
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    
    new winston.transports.File({ filename: 'error.log', level: levels[0], format: winston.format.combine(winston.format.timestamp(), winston.format.json()) }),
    new winston.transports.File({ filename: 'combined.log' ,level: levels[2], format: winston.format.combine(winston.format.timestamp(), winston.format.json()) }),
  ],
});



module.exports={botInfoLogger}