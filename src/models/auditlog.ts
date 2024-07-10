import { Model, Sequelize, DataTypes as DataTypesType } from "sequelize";

interface Models {
  [key: string]: typeof Model;
}

export default (sequelize: Sequelize, DataTypes: typeof DataTypesType) => {
  class AuditLog extends Model {
    public guid!: string;
    public entity!: string;
    public entityId!: number;
    public event!: string;
    public createdAt!: Date;
    public createdBy!: string;
    public updatedAt!: Date;
    public updatedBy!: string;
    public deletedAt!: Date | null;
    public deletedBy!: string | null;

    static associate(models: Models) {
      // Define associations here
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
      entity: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      entity_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      event: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      deletedBy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "AuditLog",
      timestamps: true,
      paranoid: true, // This will enable the 'deletedAt' functionality
    }
  );

  return AuditLog;
};
