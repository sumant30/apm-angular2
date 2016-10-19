import { Component, OnChanges, Input, Output, EventEmitter } from 'angular2/core'

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges {

    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick():void{
        this.ratingClicked.emit('Clicked ' +this.rating);
    }

}