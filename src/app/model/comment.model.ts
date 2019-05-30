export class Comment {
	public postId: number;
	public id: number;
	public name: string;
	public body: string;
	public email: string;
	constructor(postId?: number, name?: string, email?: string, body?: string) {
		this.body = body;
		this.email = email;
		this.name = name;
		this.postId = postId;
	}
}