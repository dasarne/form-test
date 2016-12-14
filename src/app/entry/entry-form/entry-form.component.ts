import {Component, OnInit} from "@angular/core";
import {Entry} from "../shared";

@Component({
  selector: 'ft-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  public model: Entry;
  public submitted = false;

  constructor() {
  }

  resetModel() {
    this.model = new Entry(1, null, null);
  }

  onSubmit() {
    this.submitted = true;
    console.log(JSON.stringify(this.model));
  }

  ngOnInit() {
    this.resetModel();
  }

}
