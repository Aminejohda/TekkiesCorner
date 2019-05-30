import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { CommentPostsComponent } from './components/comment-posts/comment-posts.component';
const routes: Routes = [
	{ path: '', redirectTo: `Posts`, pathMatch: 'full' },
	{ path: 'Posts', component: AllPostsComponent },
	{ path: 'Posts/Comment/:id', component: CommentPostsComponent },
	{ path: '**', redirectTo: `Posts`, pathMatch: 'full' },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
