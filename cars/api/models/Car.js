/**
 * Car.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: 'Car',
    primaryKey: 'id',
    
    attributes: {
      name: {
        type: 'string',
        required: true,
      },
      price: {
        type: 'number',
        required: true
      },
    }
  }  