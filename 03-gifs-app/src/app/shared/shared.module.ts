import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayzImageComponent } from './components/layz-image/layz-image.component';


@NgModule({
    declarations: [
        SidebarComponent,
        LayzImageComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        SidebarComponent,
        LayzImageComponent
    ],
    providers: [],
})
export class SharedModule { }
