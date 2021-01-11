const utils = {};

const trCharsToEn = function(text) {
    const returned = text.replace(/ü/g, "u")
                         .replace(/ö/g, "o")
                         .replace(/ç/g, "c")
                         .replace(/ş/g, "s")
                         .replace(/ğ/g, "g")
                         .replace(/ı/g, "i")
                         .replace(/Ü/g, "U")
                         .replace(/Ö/g, "O")
                         .replace(/Ç/g, "C")
                         .replace(/S/g, "Ş")
                         .replace(/Ğ/g, "G")
                         .replace(/İ/g, "I")
                         return returned;
                        }
                        
const sanitize = function(text) {
    const result = trCharsToEn(text)
                            
return result.trim();
}

utils.snakeCaseConverter = function(text) {
    const sanitized = sanitize(text);
    const returned = sanitized.replace(/_/g, ' ');
    return returned.replace(/\s+/g, '_');
};

utils.kebabCaseConverter = function(text) {
    const sanitized = sanitize(text);
    const returned = sanitized.replace(/_/g, ' ');
    return returned.replace(/\s+/g, '-');
};

utils.camelCaseConverter = function(text) {
    const sanitized = sanitize(text)
    const returned = sanitized.replace(/_/g, ' ').replace(/-/g, ' ')
    return returned.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, word) => word.toUpperCase());
};

utils.pascalCaseConverter = function(text) {
    const sanitized = sanitize(text)
    const returned = sanitized.replace(/_/g, ' ').replace(/-/g, ' ')
    return returned.match(/[a-z]+/gi).map(function (wordy) {
      return wordy.charAt(0).toUpperCase() + wordy.substr(1).toLowerCase()
    })
    .join('')
};

utils.spaceCaseConverter = function(text) {
    const sanitized = sanitize(text);
    const returned = sanitized.replace(/_/g, '');
    return returned.map((word) => word.toLowerCase()).join(' ');
};



module.exports = utils;