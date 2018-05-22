import { Component, OnInit } from '@angular/core';
import { postsService } from './posts.service';


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
    }, (error: Response) => {
      if(error.status===404)
    alert('Unexpected error occured');
    else
    alert('Invalid Error');
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
      console.log(response.json());
    })
  }
  createPost(title: HTMLInputElement) {
    let post = { title: title.value };
    this.pservice.createPost(post).subscribe(response => {
      post["id"] = response.json().id;
      this.posts.splice(0, 0, post);
      title.value = '';
    })
    console.log(title.value);
  }

}
