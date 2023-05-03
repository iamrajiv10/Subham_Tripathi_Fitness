const mongoose = require('mongoose')

const isValid = function (value) {
    if (typeof value === "undefined" || typeof value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
};


const isValidNumber = function (value) {
    const noNumber = /^(\+91[\-\s]?)?[0]?(91)?[6-9]\d{9}$/g
    if (typeof value !== 'string') return false
    if (noNumber.test(value) === false) return false
    return true
}
const isString = function (value) {
    const noNumber = /^[a-zA-Z]{2,20}$/
    if (typeof value !== 'string') return false
    if (noNumber.test(value) === false) return false
    return true
}


const isValidEmail = function (value) {
    let mailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    if (!(value.match(mailFormat))) return false
    return true

}


const isValidPassword=function(value){
    let passwordPattern = /^[a-zA-Z0-9!@#$%&*]{8,15}$/;
        if (!(passwordPattern.test(value))) return false
        return true
}


module.exports = {isString, isValid, isValidEmail, isValidNumber, isValidPassword }
