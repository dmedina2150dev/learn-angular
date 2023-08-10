import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit {

    private debouncer: Subject<string> = new Subject<string>();

    @ViewChild('txtSearchInput')
    public txtSearchInput!: ElementRef<HTMLInputElement>;

    @Input()
    public placeholder: string = '';

    @Output()
    public onValue: EventEmitter<string> = new EventEmitter();

    @Output()
    public onDebounce: EventEmitter<string> = new EventEmitter();

    ngOnInit(): void {
        this.debouncer
            .pipe(
                debounceTime(500)
            )
            .subscribe( value => {
                // console.log('debouncer value: ',value)
                this.onDebounce.emit( value );
            })
    }

    onSearchInput( value: string ) {
        this.onValue.emit( value );
        this.txtSearchInput.nativeElement.value = '';
    }

    onKeyPress( searchTerm: string ) {
        // console.log(searchTerm)
        this.debouncer.next( searchTerm );
    }

}
