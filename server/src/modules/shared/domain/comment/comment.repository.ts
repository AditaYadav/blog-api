import { AppDataSource } from 'ormconfig';
import { Comment } from './comment.entity';

export const CommentRepository = AppDataSource.getRepository(Comment);
