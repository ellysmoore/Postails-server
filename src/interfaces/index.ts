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
