import { Component, OnInit, Inject } from '@angular/core';
import { Post } from './../../model/post.model';
import { Comment } from './../../model/comment.model';
import { PostService } from './../../services/post.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogCommentComponent } from './../dialog-comment/dialog-comment.component';
@Component({
	selector: 'app-comment-posts',
	templateUrl: './comment-posts.component.html',
	styleUrls: ['./comment-posts.component.scss']
})
export class CommentPostsComponent implements OnInit {
	customComments = [];
	comment: Comment[];
	post: Post;
	comments: Comment;
	private id: string;

	openDialog(): void {
		const dialogRef = this.dialog.open(DialogCommentComponent, {
			width: '450px',
		});
		dialogRef.afterClosed().subscribe(result => {
			this.comments = new Comment(parseInt(this.id), result.email, result.name, result.body);
			if (typeof this.comments.body === 'undefined' || typeof this.comments.name === 'undefined' || typeof this.comments.email === 'undefined') {
				this.openSnackBar('All fields are required', 'Error');
				return;
			}
			if (typeof result !== 'undefined') {
				this._postService.postComment(this.id, result).subscribe(data => {
					this.openSnackBar('Your comment has been added', 'Success');
					this.customComments.push(result);
				}, err => {
					this.openSnackBar('Comment cannot be posted', 'Error');
					throw err;
				});
			}
		});
	}
	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action, {
			duration: 2000,
		});
	}
	constructor(public dialog: MatDialog, private _postService: PostService, private router: Router, private route: ActivatedRoute, private _snackBar: MatSnackBar) {
		this.post = new Post();
		this.route.paramMap.subscribe(params => {
			this.id = params.get('id');
		}, err => {
			console.error(err);
		});
	}

	ngOnInit() {
		this.ShowPosts();
	}
	ShowPosts() {
		this._postService.getCommentsByPostId(this.id).subscribe(data => {
			this.comment = data;
		}, err => {
			throw err;
		});
		this._postService.getPostsById(this.id).subscribe(data => {
			this.post = data;
		}, err => {
			throw err;
		});
	}
}
