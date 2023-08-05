import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


    constructor( private gisfService: GifsService, ) { }

    get tags(): string[] {
        return this.gisfService.tagsHistory;
    }

    searchByTag(tag: string) {
        this.gisfService.searchTag(tag);
    }

}
