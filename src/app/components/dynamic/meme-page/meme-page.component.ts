import { Component } from '@angular/core';

@Component({
  selector: 'app-meme-page',
  templateUrl: './meme-page.component.html',
  styleUrls: ['./meme-page.component.scss']
})
export class MemePageComponent {
  
  ngOnInit(){
    import("./slideshow.js" as any);
  }
}
