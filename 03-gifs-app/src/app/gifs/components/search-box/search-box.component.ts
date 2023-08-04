import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'gifs-search-box',
    template: `
        <h5>Buscar:</h5>
        <input type="text" class="form-control"
        placeholder="Buscar gifs..."
        #txtTagInput
        (keyup.enter)="searchTag()"
        >
    `
})

export class SearchBoxComponent {
    @ViewChild('txtTagInput')
    public txtTagInput!: ElementRef<HTMLInputElement>;

    constructor() { }

    searchTag() {
        const newTag = this.txtTagInput.nativeElement.value;

        console.log(newTag)
    }
}
