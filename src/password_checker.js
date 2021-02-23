const winston = require('winston');
 
const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console({ level: 'debug'}),
    new winston.transports.File({filename: './logs/error.log'})
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: './logs/error.log' })
  ]
});
let regex = {
  existence: /\w|\W/,
  length: /.{9,}/,
  lowercase: /[a-z]/,
  uppercase: /[A-Z]/,
  digit: /[0-9]/,
  specialChar: /\W|_/
}


function passwordIsValid(password) {
  if (regex.existence.test(password) == false) {
    logger.error("password should exist");
    throw new Error("password should exist");
  }
  if (regex.length.test(password) == false) {
    logger.error("password should be longer than 8 characters")
    throw new Error("password should be longer than 8 characters");
  }
  if (regex.lowercase.test(password) == false) {
    logger.error("password should have atleast one lowercase letter")
    throw new Error("password should have atleast one lowercase letter");
  }
  if (regex.uppercase.test(password) == false) {
    logger.error("password should have atleast one uppercase letter")
    throw new Error("password should have atleast one uppercase letter");
  }
  if (regex.digit.test(password) == false) {
    logger.error("password should have atleast one digit")
    throw new Error("password should have atleast one digit");
  }

  if (regex.specialChar.test(password) == false) {
    logger.error("password should have atleast one special character")
    throw new Error("password should have atleast one special character");
  }
}

function passwordIsOk(password) {
  let num = 0;
  if (regex.lowercase.test(password)) {
    num += 1
  }
  if (regex.uppercase.test(password)) {
    num += 1
  } 
  if (regex.digit.test(password)) {
    num += 1
  } 
  if (regex.specialChar.test(password)) {
    num += 1
  }
  // if (regex.length.test(password)) {
  //   num += 2
  // }
  if (num >= 2 && regex.length.test(password) === true) {
    logger.debug('Password is ok.') 
    return true
  }else{
    logger.debug('Password is not ok.')
    return false
  }
}


module.exports = { passwordIsValid, passwordIsOk };
