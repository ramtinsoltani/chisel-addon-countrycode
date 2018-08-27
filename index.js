const iso3166 = require('iso-3166-2');

module.exports = (country) => {

  const result = iso3166.country(country);

  return result ? result.code : null;

};
