import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from './../../model/post.model';
import { PostService } from './../../services/post.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  private displayedColumns: string[] = ['title', 'body'];
  private dataSource;
  posts: Post[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _postService: PostService, private router: Router) { }

  ngOnInit() {
    this.ShowPosts();
  }
  ShowPosts() {
    this._postService.getPosts().subscribe(data => {
      this.posts = data;
      this.dataSource = new MatTableDataSource<Post>(this.posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, err => {
      throw err;
    });
  }
  onClick(row) {
    this.router.navigate(['Posts/Comment/' + row.id]);
  }
}
