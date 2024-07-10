import { Model, Sequelize, DataTypes as DataTypesType } from "sequelize";

interface Models {
  [key: string]: typeof Model;
}

class User extends Model {
  public id!: number;
  public guid!: string;
  public email!: string;
  public fullname!: string;
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

export const initUserModel = (sequelize: Sequelize) => {
  User.init(
    {
      guid: {
        allowNull: false,
        type: DataTypesType.UUID,
        defaultValue: DataTypesType.UUIDV4,
        unique: true,
      },
      email: {
        type: DataTypesType.STRING,
        allowNull: false,
      },
      fullname: {
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
      modelName: "User",
      timestamps: true,
      paranoid: true, // This will enable the 'deletedAt' functionality
    }
  );

  return User;
};

export default initUserModel;
