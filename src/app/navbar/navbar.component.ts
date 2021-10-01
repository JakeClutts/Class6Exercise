import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() searchResults = new EventEmitter<string>();
  search:string;

  ngOnInit(): void {
  }

  onSearchResults(){
    console.log(this.search)
    this.searchResults.emit(this.search);
  }

}
