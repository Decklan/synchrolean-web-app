import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../../models/Account';
import { TeamService } from '../../services/team.service';
import { listener } from '../../../../node_modules/@angular/core/src/render3/instructions';

@Component({
  selector: 'app-remove-member',
  templateUrl: './remove-member.component.html',
  styleUrls: ['./remove-member.component.css']
})
export class RemoveMemberComponent implements OnInit {
  public email;
  @Input() teamId: number;
  @Input() accounts: Account[];
  @Output() updatedAccounts = new EventEmitter<Account[]>();

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  removeMember() {
    this.teamService.removeTeamMember(this.teamId, this.email)
      .subscribe(() => {
        this.updatedAccounts.emit(this.accounts);
      }, (err) => {
        console.log(err);
      });
  }

  getEmail(email: string) {
    this.email = email;
    console.log("email = ", email);
  }

}