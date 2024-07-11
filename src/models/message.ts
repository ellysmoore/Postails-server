import { Model, Sequelize, DataTypes as DataTypesType } from "sequelize";
interface Models {
  [key: string]: typeof Model;
}
export default (sequelize: Sequelize, DataTypes: typeof DataTypesType) => {
  class Message extends Model {
    public id!: number;
    public user_id!: number;
    public senderPhone!: string;
    public recipient!: string;
    public message!: string;
    public type!: string;
    public status!: string;
    public sendAttempt!: string;
    public sendTime!: Date;
    public sendAt!: Date;
    public batchId!: number;
    public messageReference!: string;
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

  Message.init(
    {
      guid: {
        allowNull: false,
        type: DataTypesType.UUID,
        defaultValue: DataTypesType.UUIDV4,
        unique: true,
      },
      user_id: {
        type: DataTypesType.INTEGER,
        allowNull: false,
      },
      sender_phone: {
        type: DataTypesType.STRING,
        allowNull: true,
      },
      recipient: {
        type: DataTypesType.JSON,
        allowNull: true,
      },
      message: {
        type: DataTypesType.STRING,
        allowNull: true,
      },
      type: {
        type: DataTypesType.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypesType.STRING,
        allowNull: true,
      },
      send_attempt: {
        type: DataTypesType.STRING,
        allowNull: true,
      },
      send_time: {
        type: DataTypesType.DATE,
        allowNull: true,
      },
      send_at: {
        type: DataTypesType.DATE,
        allowNull: true,
      },
      batch_id: {
        type: DataTypesType.INTEGER,
        allowNull: true,
      },
      message_reference: {
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
      modelName: "Message",
      timestamps: true,
      paranoid: true, // This will enable the 'deletedAt' functionality
    }
  );

  return Message;
};
