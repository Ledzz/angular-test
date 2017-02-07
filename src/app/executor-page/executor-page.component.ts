import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-executor-page',
  templateUrl: './executor-page.component.html',
  styleUrls: ['./executor-page.component.css']
})
export class ExecutorPageComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.activateRoute.url.subscribe(url => {
  		console.log(url);
  	})
  	this.activateRoute.params.subscribe(params => {
  		console.log(params);
  	})
  	this.activateRoute.data.subscribe(data => {
  		console.log(data);
  	})
  }

}
