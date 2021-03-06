"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Measurement extends Model {
  geolocation() {
    return this.belongsTo("App/Model/Geolocation");
  }
  measurement_type() {
    return this.belongsTo("App/Model/MeasurementType");
  }
}

module.exports = Measurement;
