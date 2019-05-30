import { Comment } from './comment.model';

export class Post {
	public userId: number;
	public id: number;
	public title: string;
	public body: string;
	public comments: Comment[];
}