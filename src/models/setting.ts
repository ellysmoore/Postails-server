import { Model, Sequelize, DataTypes as DataTypesType } from "sequelize";

interface Models {
  [key: string]: typeof Model;
}

class Setting extends Model {
  public id!: number;
  public guid!: string;
  public appId!: string;
  public apiKey!: string;
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

export const initSettingModel = (sequelize: Sequelize) => {
  Setting.init(
    {
      guid: {
        allowNull: false,
        type: DataTypesType.UUID,
        defaultValue: DataTypesType.UUIDV4,
        unique: true,
      },
      app_id: {
        type: DataTypesType.STRING,
        allowNull: true,
      },
      api_key: {
        type: DataTypesType.STRING,
        allowNull: true,
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
      modelName: "Setting",
      timestamps: true,
      paranoid: true, // This will enable the 'deletedAt' functionality
    }
  );

  return Setting;
};

export default initSettingModel;
