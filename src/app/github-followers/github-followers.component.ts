import { ActivatedRoute, ParamMap } from '@angular/router';
import { AppError } from '../errors/AppError';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest, map, switchMap } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  followers: any[] = [];

  constructor(
    private service: GithubFollowersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParamMap.get('order'));
    // combineLatest([this.route.paramMap, this.route.queryParamMap]).subscribe(          //subscribe inside subscribe
    //   ([normalParams, optionalParams]: ParamMap[]) => {
    //     let id = normalParams.get('id');
    //     let page = optionalParams.get('page');

    //     this.service.getAll().subscribe({
    //       next: (followers) => (this.followers = followers),
    //       error: (error: AppError) => {
    //         throw error; //to reduce re-write the content of the AppErrorHandler on each method
    //       },
    //     });
    //   });

    // combineLatest([this.route.paramMap, this.route.queryParamMap])                     //we still have the same problem subscribe inside subscribe
    //   .pipe(map(([normalParams, optionalParams]: ParamMap[]) => {
    //       let id = normalParams.get('id');
    //       let page = optionalParams.get('page');
    //       return this.service.getAll();
    //     })
    //   ).subscribe((followersObs) => {
    //     followersObs.subscribe({
    //       next: (followers) => (this.followers = followers),
    //       error: (error: AppError) => {
    //         throw error; //to reduce re-write the content of the AppErrorHandler on each method
    //       },
    //     });
    //   });
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap(([normalParams, optionalParams]: ParamMap[]) => {
          let id = normalParams.get('id');
          let page = optionalParams.get('page');
          return this.service.getAll();
        })
      )
      .subscribe({
        next: (followers) => (this.followers = followers),
        error: (error: AppError) => {
          throw error;
        },
      });
  }
}
