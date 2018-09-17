import AbstractUserProxy from '../abstract/user'
import {
  multiStoreConfig
} from './util'
var request = require('request');

class StockProxy extends AbstractUserProxy {
  constructor(config, req) {
    // const Magento2Client = require('magento2-rest-client').Magento2Client;
    super(config, req)
    // this.api = Magento2Client(multiStoreConfig(config.magento2.api, req));
  }

  check(sku) {
    console.log("Checking Stock:" + sku)
    // lhhugchoxgxss55a5vd8p61i1g4apgq
    // c079zd7diue50pqtl8df1mqqai0u37j
    var req = {
      // uri: 'https://api.bigcommerce.com/stores/yevvlkwxnp/v3/catalog/products',
      uri: 'https://api.bigcommerce.com/stores/yevvlkwxnp/v3/catalog/products?sku=SLCTBS',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Auth-Client': "8pgtz2b8il4f6yi0fq0g0oyr57gh3us",
        'X-Auth-Token': "3omteme9eowsoya3o4ji91vaq5pdbnr"
      }
    };

    request(req, function callback(error, response, body) {
      // console.log(error)
      console.log(JSON.parse(body));
      // console.log(JSON.parse(body).data[0].inventory_level);

      // console.log(JSON.parse(body));
    })
    var promise = new Promise(function(resolve, reject) {

      // do a thing, possibly async, then…
      resolve({});

    });
    return promise
    // return this.api.stockItems.list(sku)
  }
}

module.exports = StockProxy
