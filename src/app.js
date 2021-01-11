'use strict';

const utils = require('./general/utils.js');

module.exports = {
    version: "1.0.0"
}


const _kebabCaseUpper = function(text) {
    return utils.kebabCaseConverter(text).toUpperCase();
}

const _kebabCaseLower = function(text) {
    return utils.kebabCaseConverter(text).toLowerCase();
}


const _snakeCaseUpper = function(text) {
    return utils.snakeCaseConverter(text).toUpperCase();
}

const _snakeCaseLower = function(text) {
    return utils.snakeCaseConverter(text).toLowerCase();
}

const _spaceCaseLower = function(text) {
    return utils.spaceCaseConverter(text).toLowerCase();
}

const _spaceCaseUpper = function(text) {
    return utils.spaceCaseConverter(text).toLowerCase();
}

module.exports = {
    kebabCaseLower: _kebabCaseLower,
    kebabCaseUpper: _kebabCaseUpper,
    camelCase: utils.camelCaseConverter,
    pascalCase: utils.pascalCaseConverter,
    snakeCaseLower: _snakeCaseLower,
    snakeCaseUpper: _snakeCaseUpper,
    spaceCaseUpper: _spaceCaseUpper,
    spaceCaseLower: _spaceCaseLower
}

