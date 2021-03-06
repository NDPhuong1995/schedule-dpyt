'use strict';
module.exports = (sequelize, DataTypes) => {
  const DataKey = sequelize.define('DataKey', {
    api_key: DataTypes.STRING,
    id_client: DataTypes.STRING,
    client_secret: DataTypes.STRING,
    primary: DataTypes.BOOLEAN,
    user_id: DataTypes.BIGINT
  }, {
    timestamps: true
  });
  return DataKey;
};