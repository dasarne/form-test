import {Component, OnInit} from "@angular/core";
import {Entry} from "../shared";

@Component({
  selector: 'ft-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  constructor() {
  }

  //Instantiate the model
  model = new Entry(1, "Arne", 50);
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  ngOnInit() {
  }

}
