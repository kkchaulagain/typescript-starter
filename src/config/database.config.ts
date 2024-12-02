import * as dotenv from 'dotenv';

dotenv.config();


export const DATABASE_CONFIG = {
  uri: `mongodb://${process.env.MONGO_ROOT_USERNAME}:${process.env.MONGO_ROOT_PASSWORD}@localhost:27017/${process.env.MONGO_INITDB_DATABASE}?authSource=admin`,
};

console.log(DATABASE_CONFIG.uri);
