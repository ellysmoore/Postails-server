"use strict";
import { Model, Sequelize, DataTypes as DataTypesType } from "sequelize";
interface Models {
  [key: string]: typeof Model;
}
module.exports = (sequelize: Sequelize, DataTypes: typeof DataTypesType) => {
  class Setting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: Models) {
      // define association here
    }
  }
  Setting.init(
    {
      guid: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      app_id: DataTypes.STRING,
      api_key: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      createdBy: DataTypes.STRING,
      updatedAt: DataTypes.DATE,
      updatedBy: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
      deletedBy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Setting",
    }
  );
  return Setting;
};
