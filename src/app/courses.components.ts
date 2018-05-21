import { Component, Input } from "@angular/core";
import { CoursesService } from "./courses.service";
import { FavouriteChangedEventArgs } from "./favourite.component";

@Component({
    selector: "<courses>",
    template: `<favourite [isFavourite]='this.isActives' (fav)="toggleStar($event)"></favourite><input #email (keyup)="onKeyup(email.value)"/><div (click)="onDivClick()"><button class="btn btn-primary" (click)="onSave($event)" [class.active]="isActive">Some text</button>
    </div><ul><li *ngFor="let courses of course">{{courses}}</li></ul>
      <img [src]="imgUrl"/>
      <input [(ngModel)]="emails" (keyup)="changeValue()" />
      <p>{{courses.title | uppercase | lowercase}}<br/>{{courses.rating | number:'1.1-2'}}<br/>{{courses.students}}<br/>{{courses.price | currency:'AUD':true:'5.2-2'}}
      <br/>{{courses.releaseDate| date:'fullDate'}}
      {{longtext | summary:10}}
      </p>`
})
export class CoursesComponent {
    longtext = "Srinivasan is the good boy Srinivasan is the good boy Srinivasan is the good boy Srinivasan is the good boyvSrinivasan is the good boySrinivasan is the good boySrinivasan is the good boySrinivasan is the good boySrinivasan is the good boySrinivasan is the good boySrinivasan is the good boySrinivasan is the good boySrinivasan is the good boySrinivasan is the good boySrinivasan is the good boySrinivasan is the good boySrinivasan is the good boySrinivasan is the good boySrinivasan is the good boySrinivasan is the good boySrinivasan is the good boySrinivasan is the good boy";
    isActives = true;
    coursess=[1,2,3]
    courses = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date()
    };
    title = "This is titel";
    imgUrl = 'https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&h=650&w=940';
    course;
    //isActive = true;
    emails = '';
    toggleStar(active: FavouriteChangedEventArgs) {
        console.log(active.newValue);
        return this.isActives = !this.isActives;
    }
    constructor(service: CoursesService) {

        this.course = service.getCourses();
    }
    changeValue() {
        console.log(this.emails);
    }
    onKeyup(email) {
        console.log(email);

    }
    onDivClick() {
        console.log("Div Clicked");
    }
    onSave($event) {
        $event.stopPropagation();
        console.log("Button clickced" + $event);
    }
}