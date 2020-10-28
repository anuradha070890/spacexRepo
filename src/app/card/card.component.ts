import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

@Input() mission_name
@Input() flight_number;
@Input() mission_id;
@Input() launch_year;
@Input() launch_success;
@Input() launch_landing;
@Input() img;

  constructor() { }

  ngOnInit() {
    
  }

}
