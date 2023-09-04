import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.module';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  
  public userID!: number;
  userDetail!: User

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService){

  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val=>{
      this.userID = val['id'];
      this.fetchUserDetails(this.userID);
    })
  }

  fetchUserDetails(userID: number){
    this.api.getRegisterUserId(userID)
    .subscribe(res=>{
      this.userDetail = res;
    })
  }

}
