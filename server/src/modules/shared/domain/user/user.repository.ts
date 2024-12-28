import { AppDataSource } from 'ormconfig';

import { User } from './user.entity';

export const UserRepository = AppDataSource.getRepository(User);
