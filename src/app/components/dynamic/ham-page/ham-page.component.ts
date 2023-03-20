import { Component } from '@angular/core';
import { LeaderboardService } from '../../services/leaderboard.service';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ham-page',
  templateUrl: './ham-page.component.html',
  styleUrls: ['./ham-page.component.scss']
})
export class HamPageComponent {
  isAuthenticated = false;
  userId:User["id"]

  constructor(private leadrBoardService:LeaderboardService,private authService:AuthService){}

  ngOnInit(){
    this.userId = this.authService.userId;
  }

    

  updateBoard(){
    this.leadrBoardService.updateBoard("hamVisit",this.userId);
  }
}
