import { AppDataSource } from 'ormconfig';

import { UserSession } from './user-session.entity';

export const UserSessionRepository = AppDataSource.getRepository(UserSession);
