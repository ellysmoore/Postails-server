export interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
  pool: {
    max: number;
    min: number;
    acquire: number;
    idle: number;
  };
  logging: boolean;
  seederStorage?: string;
  seederStoragePath?: string;
  seederStorageTableName?: string;
}

export interface IMessage {
  id: number;
  message: string;
  createdAt?: Date;
}

export interface ISendMessage {
  sender_phone: string;
  recipient: string;
  message: string;
  type: string;
  send_at: Date;
  batch_id: Number;
  send_attempt: Number;
  send_time: Date;
  message_reference?: string;
}
