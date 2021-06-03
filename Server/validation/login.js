
const validator = require("validator");
const isEmpty = require("./isEmpty")
module.exports = function validateLoginInput(data) {

  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  return {
    errors,
    isValid: isEmpty(errors)
  }
  
};