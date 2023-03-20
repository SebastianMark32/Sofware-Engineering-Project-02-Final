import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodlePageComponent } from './doodle-page.component';

// // double check this part 
// // document.querySelector("#files").addEventListener("change", (e) => {
//   if(window.File && window.FileReader && window.FileList && window.Blob){
//     // const files = e.target.files;
//     const output = document.querySelector("#result");
//     for (let i = 0; i < files.length; i++) {
//       if(!files[i].type.match("image")) continue;
//       const picReader = new FileReader();
//       picReader.addEventListener("load", function(event){
//         const picFile = event.target;
//         const div = document.createElement("div");
//         div.innerHTML = `<img class = "thumbnail" src = "${picFile.result}" title = "${picFile.name}" />`;
//         // output.appendChild(div);
//       })
//       picReader.readAsDataURL(files[i]);
//     }
//   } else{
//     alert("Your browser does not support the File API")
//   } 
// })

describe('DoodlePageComponent', () => {
  let component: DoodlePageComponent;
  let fixture: ComponentFixture<DoodlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoodlePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoodlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
