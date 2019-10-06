import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'clock-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: number;
  imgSrc: string;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const avatarSize = 60;
    this.user = parseInt(this.route.snapshot.paramMap.get('id'));
    this.imgSrc = `https://api.adorable.io/avatars/${avatarSize}/${this.user}@example.com.png`;

    console.log(`this.imgSrc`, this.imgSrc);
  }
}
