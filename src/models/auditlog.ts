"use strict";
import { Model, Sequelize, DataTypes as DataTypesType } from "sequelize";
interface Models {
  [key: string]: typeof Model;
}
module.exports = (sequelize: Sequelize, DataTypes: typeof DataTypesType) => {
  class AuditLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: Models) {
      // define association here
    }
  }
  AuditLog.init(
    {
      guid: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      entity: DataTypes.STRING,
      entity_id: DataTypes.INTEGER,
      event: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      createdBy: DataTypes.STRING,
      updatedAt: DataTypes.DATE,
      updatedBy: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
      deletedBy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AuditLog",
    }
  );
  return AuditLog;
};
