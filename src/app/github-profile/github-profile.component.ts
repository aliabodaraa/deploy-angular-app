import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'; //it is a service that is defined in the library @angular/router library and is part of router module

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      //paramMap is a collection of route parameters that can change over time and every time there is a new route parameter you will be notified  property will get all the router's params as a 'Observable<ParamMap> return data type
      //console.log(params); //params will get 'ParamAsMap : { keys:{0:"id"}, params:{id:"1011213"} }'
      let id = params.has('id') ? params.get('id') : undefined;
      console.log(id); //1011213
    });
    //OR
    //let id =this.route.snapshot.paramMap.get('id');
  }
  //Progromatic Navigation with submit button
  submit() {
    this.router.navigate(['followers'], {
      queryParams: { page: 1, order: 'Progromatic Navigation' },
    });
  }
}
