import { Model, Sequelize, DataTypes as DataTypesType } from "sequelize";
interface Models {
  [key: string]: typeof Model;
}

class BaseMessage extends Model {
  public id!: number;
  public guid!: string;
  public message!: string;
  public createdAt!: Date;
  public createdBy!: string;
  public updatedAt!: Date;
  public updatedBy!: string;
  public deletedAt!: Date | null;
  public deletedBy!: string;

  static associate(models: Models) {
    // Define associations here
  }
}

export const initBaseMessageModel = (sequelize: Sequelize) => {
  BaseMessage.init(
    {
      guid: {
        allowNull: false,
        type: DataTypesType.UUID,
        defaultValue: DataTypesType.UUIDV4,
        unique: true,
      },
      message: {
        type: DataTypesType.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypesType.DATE,
        allowNull: false,
        defaultValue: DataTypesType.NOW,
      },
      createdBy: {
        type: DataTypesType.STRING,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypesType.DATE,
        allowNull: false,
        defaultValue: DataTypesType.NOW,
      },
      updatedBy: {
        type: DataTypesType.STRING,
        allowNull: true,
      },
      deletedAt: {
        type: DataTypesType.DATE,
        allowNull: true,
      },
      deletedBy: {
        type: DataTypesType.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "BaseMessage",
      timestamps: true,
      paranoid: true, // This will enable the 'deletedAt' functionality
    }
  );

  return BaseMessage;
};

export default initBaseMessageModel;
