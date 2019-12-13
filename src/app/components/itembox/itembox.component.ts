import { Component, OnInit } from '@angular/core';
import { ItemBoxService } from 'src/app/services/itembox-service';

@Component({
  selector: 'app-itembox',
  templateUrl: './itembox.component.html',
  styleUrls: ['./itembox.component.scss']
})
export class ItemboxComponent implements OnInit {

  items: any;
  value: any;

  constructor(private itemBoxService: ItemBoxService) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.itemBoxService.getAllItems().subscribe(data => {
      this.items = data;
      this.value = data[0].values;
      console.log(this.value);
    });
  }
}
