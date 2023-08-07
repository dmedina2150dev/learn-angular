import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

    @ViewChild('txtSearchInput')
    public txtSearchInput!: ElementRef<HTMLInputElement>;

    @Input()
    public placeholder: string = '';

    @Output()
    public onValue: EventEmitter<string> = new EventEmitter();

    onSearchInput( value: string ) {
        this.onValue.emit( value );
        this.txtSearchInput.nativeElement.value = '';
    }

}
