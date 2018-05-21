import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: '<favourite>',
    template: `<span class="glyphicon" (click)="favouriteStar()" 
    [class.glyphicon-star-empty]="isFavourite" [class.glyphicon-star]="!isFavourite"></span>`
})

export class FavouriteComponent {
    @Input('isFavourite') isFavourite: boolean;
    @Output() fav = new EventEmitter();
    favouriteStar() {
        this.fav.emit({ newvalue: this.isFavourite });
        console.log("Toggle star");
    }


}
export interface FavouriteChangedEventArgs {
    newValue: number
}