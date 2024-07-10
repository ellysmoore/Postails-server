"use strict";
import { Model, Sequelize, DataTypes as DataTypesType } from "sequelize";
interface Models {
  [key: string]: typeof Model;
}
module.exports = (sequelize: Sequelize, DataTypes: typeof DataTypesType) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: Models) {
      // define association here
    }
  }
  Message.init(
    {
      guid: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      user_id: DataTypes.INTEGER,
      sender_phone: DataTypes.STRING,
      recipient: DataTypes.STRING,
      message: DataTypes.STRING,
      type: DataTypes.STRING,
      status: DataTypes.STRING,
      send_attempt: DataTypes.STRING,
      send_time: DataTypes.DATE,
      send_at: DataTypes.DATE,
      batch_id: DataTypes.INTEGER,
      message_reference: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      createdBy: DataTypes.STRING,
      updatedAt: DataTypes.DATE,
      updatedBy: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
      deletedBy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
