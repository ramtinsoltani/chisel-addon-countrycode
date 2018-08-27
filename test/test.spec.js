require('mocha');
const expect = require('chai').expect;
const path = require('path');
const iso3166 = require(path.join(__dirname, '../index.js'));

describe('ISO3166', function() {

  it('should return the ISO3166 code from country name', function() {

    expect(iso3166('United States')).to.equal('US');
    expect(iso3166('Canada')).to.equal('CA');
    expect(iso3166('Iran')).to.equal('IR');

  });

});
