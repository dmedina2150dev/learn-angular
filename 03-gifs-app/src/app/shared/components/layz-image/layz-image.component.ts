import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-layz-image',
  templateUrl: './layz-image.component.html',
})
export class LayzImageComponent implements OnInit {

    @Input()
    public url!: string;

    @Input()
    public alt: string = '';

    public hasLoaded: boolean = false;

    ngOnInit(): void {
        if ( !this.url ) throw new Error('Url is required');
    }

    onLoad(): void {
        // console.log('Image loaded');
        // setTimeout(() => {
            this.hasLoaded = true;
        // }, 1000);
    }
}
