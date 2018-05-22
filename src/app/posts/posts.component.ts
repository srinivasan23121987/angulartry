import { ServiceNotUnavailable } from './../common/service-unavailable';
import { Component, OnInit } from '@angular/core';
import { postsService } from './posts.service';
import { AppError } from "src/app/app-error";
import { NotFoundError } from "src/app/common/notfound.error";
import { BadFetchError } from "src/app/common/badFetch.error";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private pservice: postsService) {

  }

  ngOnInit() {
    this.pservice.getAllPost().subscribe(response => {
      this.posts = response.json();
    }, (error: AppError) => {
      console.log(error);
      if (error instanceof NotFoundError)
        alert('Unexpected error occured');
      else if (error instanceof ServiceNotUnavailable)
        alert('Service Unavailable');
      else
        alert("Invalid Error")
    });
  }
  updatePost(post) {
    this.pservice.updateSelectPost(post).subscribe((response) => {
      console.log(response.json());
    })
  }
  deletePost(post) {
    this.pservice.deleteSelPost(post).subscribe((response) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      // console.log(response.json());
    }, (error: AppError) => {
      if (error instanceof NotFoundError) {
        alert("Post not found");
      }
      else throw error;
    })
  }
  createPost(title: HTMLInputElement) {
    let post = { title: title.value };
    this.pservice.createPost(post).subscribe(response => {
      post["id"] = response.json().id;
      this.posts.splice(0, 0, post);
      title.value = '';
    }, (error: AppError) => {
      console.log(error);
      if (error instanceof BadFetchError) {
        alert("Bad Fetch");
      }
      else throw error;
    })
    console.log(title.value);
  }

}
