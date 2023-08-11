import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { Region } from 'src/app/countries/interfaces/region.type';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {


    private debouncer: Subject<string> = new Subject<string>();
    private debouncerSubscription?: Subscription;

    @ViewChild('txtSearchInput')
    public txtSearchInput!: ElementRef<HTMLInputElement>;

    @Input()
    public placeholder: string = '';

    @Input()
    public initialValue: string | Region = '';

    @Output()
    public onValue: EventEmitter<string> = new EventEmitter();

    @Output()
    public onDebounce: EventEmitter<string> = new EventEmitter();

    ngOnInit(): void {
        this.debouncerSubscription = this.debouncer
            .pipe(
                debounceTime(500)
            )
            .subscribe( value => {
                // console.log('debouncer value: ',value)
                this.onDebounce.emit( value );
            })
    }

    ngOnDestroy(): void {
        this.debouncerSubscription?.unsubscribe();
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
