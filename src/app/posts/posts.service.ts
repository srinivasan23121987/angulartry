import { ServiceNotUnavailable } from './../common/service-unavailable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppError } from "src/app/app-error";
import { NotFoundError } from "src/app/common/notfound.error";
import { BadFetchError } from "src/app/common/badFetch.error";
@Injectable()
export class postsService {

  constructor(private http: Http) { }

  private url: string = 'http://jsonplaceholder.typicode.com/posts';
  getAllPost() {
    return this.http.get(this.url).catch((error: Response) => {
      alert(error);
      if (error.status === 404) {
        return Observable.throw(new NotFoundError(error.json()));
      }
      else if (error.status === 503) {
        return Observable.throw(new ServiceNotUnavailable(error.json()));
      }
      return Observable.throw(new AppError(error.json()));
    })

  }
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).catch((error: Response) => {
      console.log(error);
      if (error.status === 400) {
        return Observable.throw(new BadFetchError(error.json()));
      }
      return Observable.throw(new AppError(error.json()))
    })
  }
  updateSelectPost(post) {
    return this.http.patch(this.url + "/" + post.id, JSON.stringify({ isRead: true }))
  }
  deleteSelPost(post) {
    return this.http.delete(this.url + "/" + post.id)
      .catch((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError(error))
        }
        return Observable.throw(new AppError(error));
      });
  }
}
