import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'sd-restApi-sample',
  templateUrl: 'restApiSample.component.html',
  styleUrls: ['restApiSample.component.css'],
})
export class RestApiSample implements OnInit {
  public someText:string = "";
  title = 'Test Tour of Heroes';
  constructor(private http: Http) {}

  ngOnInit() {
 
  }

  doRestHttpCall(event:any){
    this.http.get("http://localhost:3000/restTest", {})
    .subscribe(response => {
      console.log(response);
      this.someText = response._body;
    });
  }

  testForTest(a:number, b:number){
    return a < b;
  }

}
