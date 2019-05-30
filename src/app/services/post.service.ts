import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable, } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { Comment } from './../model/comment.model';
import { Post } from './../model/post.model';
import { map, filter, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) { }
  getPosts() {
    return this._http.get<Post[]>(environment.APIURL + '/posts')
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handlerError));
  }
  getPostsById(id) {
    return this._http.get<Post>(environment.APIURL + '/posts/' + id).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handlerError));
  }
  getCommentsByPostId(id) {
    return this._http.get<Comment[]>(environment.APIURL + '/comments?postId=' + id).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handlerError));
  }
  postComment(id, comment) {
    return this._http.post(environment.APIURL + '/comments?postId=' + id, comment).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handlerError));
  }

  handlerError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      console.error('Client Side', err.error);
    } else {
      console.error('Server Side', err.error);
    }
    return throwError('This is a problem with the Service');

  }
}
