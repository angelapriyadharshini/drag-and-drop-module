import { Component, OnInit } from '@angular/core';
import { ItemBoxService } from 'src/app/services/itembox-service';

@Component({
  selector: 'app-itembox',
  templateUrl: './itembox.component.html',
  styleUrls: ['./itembox.component.scss']
})
export class ItemboxComponent implements OnInit {

  expandedItemIndex:number;
  items: any;
  value: any;
  isExpanded = false;

  constructor(private itemBoxService: ItemBoxService) {
    this.expandedItemIndex = -1;
  }

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

  toggleSection(index) {
    this.expandedItemIndex = index === this.expandedItemIndex ? -1 : index;
  }
}
