import { Component, Inject } from '@angular/core';
import { Comment } from './../../model/comment.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-dialog-comment',
	templateUrl: './dialog-comment.component.html',
	styleUrls: ['./dialog.component.scss']
})
export class DialogCommentComponent {

	constructor(
		public dialogRef: MatDialogRef<DialogCommentComponent>,
		@Inject(MAT_DIALOG_DATA) public comment: Comment) {
		this.comment = new Comment();
	}
	onNoClick(): void {
		this.dialogRef.close();
	}
}