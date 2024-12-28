import { AppDataSource } from 'ormconfig';

import { Blog } from './blog.entity';

export const BlogRepository = AppDataSource.getRepository(Blog);
