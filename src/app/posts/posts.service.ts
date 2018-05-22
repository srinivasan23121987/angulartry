import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class postsService {

  constructor(private http: Http) { }
  
  private url: string = 'http://jsonplaceholder.typicode.com/posts';
  getAllPost() {
    return this.http.get(this.url)
      
  }
  createPost(post){
    return this.http.post(this.url, JSON.stringify(post))
  }
  updateSelectPost(post){
    return this.http.patch(this.url + "/" + post.id, JSON.stringify({ isRead: true }))
  }
  deleteSelPost(post){
    return  this.http.delete(this.url + "/" + post.id);
  }
}
