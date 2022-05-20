const date = require('date-fns')

module.exports.getNowAsYYYYMMDD = function () {

    return date.format(new Date(), "yyyyLLdd")
}

module.exports.getNowAsHHMMSS = function () {

    return date.format(new Date(), "HHmmss")
}

module.exports.createLetzteAenderung = function () {
    return date.format(new Date(), "dd.LL.yyyy")
}