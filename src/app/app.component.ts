import { Component, OnInit } from "@angular/core";
import { UserServiceService } from "./user-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public users1;
  public users2;
  public users3;
  public users4;
  public users5;

  constructor(private _userService: UserServiceService) {}

  // value = 'Clear me';

  options = [
    { id: "onhold", name: "onHold" },
    { id: "pending", name: "Pending" },
    { id: "uploaded", name: "Uploaded" },
    { id: "submitted", name: "Submitted" },
    { id: "live", name: "live" }
  ];

  all = [];

  ngOnInit() {
    this._userService.userData().subscribe(data => {
      this.users1 = Object.values(data.tasks).filter(
        (data: any) => data.status === "onhold"
      );
      this.users2 = Object.values(data.tasks).filter(
        (data: any) => data.status === "pending"
      );
      this.users3 = Object.values(data.tasks).filter(
        (data: any) => data.status === "uploaded"
      );
      this.users4 = Object.values(data.tasks).filter(
        (data: any) => data.status === "submitted"
      );
      this.users5 = Object.values(data.tasks).filter(
        (data: any) => data.status === "live"
      );
      this.all = [
        { title: "Onhold Tasks", no: this.users1.length, users: this.users1,style:"first-card" },
        { title: "Pending Tasks", no: this.users2.length, users: this.users2,style:"second-card" },
        { title: "Updated Tasks", no: this.users3.length, users: this.users3,style:"third-card" },
        { title: "Submited Tasks", no: this.users4.length, users: this.users4,style:"four-card"},
        { title: "Live Tasks", no: this.users5.length, users: this.users5 ,style:"four-card"}
      ];
      console.log(this.all)
    });
    
  }
}
