import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaderboardItem } from '../../models/Leaderboard.interface';
import { LeaderboardService } from '../../services/leaderboard.service';

@Component({
  selector: 'app-leaderboard-page',
  templateUrl: './leaderboard-page.component.html',
  styleUrls: ['./leaderboard-page.component.scss']
})
export class LeaderboardPageComponent implements OnInit {

  post$:Observable< LeaderboardItem[]>;

  constructor(private lbService: LeaderboardService){}

  ngOnInit() {
    this.post$ = this.lbService.fetchAll();
    console.log(this.post$);
  }


}
