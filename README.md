# Country Code (Chisel Mutator Addon)

Retrieves the ISO 3166 country code from a country name.

# Installation

Use the Chisel RESTful API, Chisel CLI, or Chisel GUI to install this mutator addon.

# Usage

After installation, this addon will be available on `api.mutators.addons.countrycode` as a function with the following parameters:
  - `country`: The country name.

## Example

```js
api.mutators.addons.countrycode('United States'); // Returns 'US'
```
