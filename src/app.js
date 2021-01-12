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

const _pathCaseLower = function(text) {
    return utils.pathCaseConverter(text).toLowerCase();
}

const _pathCaseUpper = function(text) {
    return utils.pathCaseConverter(text).toUpperCase();
}

module.exports = {
    kebabCaseLower: _kebabCaseLower,
    kebabCaseUpper: _kebabCaseUpper,
    kebabCase: utils.kebabCaseConverter,
    camelCase: utils.camelCaseConverter,
    pascalCase: utils.pascalCaseConverter,
    snakeCaseLower: _snakeCaseLower,
    snakeCaseUpper: _snakeCaseUpper,
    snakeCase: utils.snakeCaseConverter,
    pathCaseLower: _pathCaseLower,
    pathCaseUpper: _pathCaseUpper,
    pathCase: utils.pathCaseConverter,
}

