import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {

  receipes: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAllReceipes();
  }

  getAllReceipes() {
    this.dataService.getAllReceipes().subscribe(data => {
      this.receipes = data;
      console.log(data[0].name);
    });
  }

}
