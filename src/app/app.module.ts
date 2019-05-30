import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { CommentPostsComponent } from './components/comment-posts/comment-posts.component';
import { DialogCommentComponent } from './components/dialog-comment/dialog-comment.component';
import { MatButtonModule, MatInputModule, MatSortModule, MatTableModule, MatCardModule, MatSnackBarModule, MatPaginatorModule, MatTabsModule, MatDialogModule, MatExpansionModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    CommentPostsComponent,
    DialogCommentComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatExpansionModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule
  ],
  entryComponents: [
    DialogCommentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
