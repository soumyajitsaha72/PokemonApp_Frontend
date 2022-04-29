import { Component, OnInit } from '@angular/core';
import { LeaderService } from 'src/app/leader.service';
import { Users } from '../main/navbar/Users';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private leader: LeaderService) { }

  //leader_array = [];
  leaders: Users[];

  ngOnInit(): void {

    this.leader.getLeaderBoard().subscribe(
      (response: any) => {

        this.leaders = response;


      }
    )
  }

}
