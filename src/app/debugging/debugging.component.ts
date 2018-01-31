import { Component, OnInit } from '@angular/core';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-debugging',
  templateUrl: './debugging.component.html',
  styleUrls: ['./debugging.component.css']
})
export class DebuggingComponent implements OnInit {
  servers = [];
  private id: number;
  ngOnInit(): void {
  }


onAddServer() {
  this.servers.push('Added a server');
}
  onRemoveServer(id: number) {
    const position = id;
    this.servers.splice(position, 1);
}
  remove() {
    this.id = this.servers.length;

    for (let i = this.servers.length; i--;) {

        this.servers.splice(i, 1);

    }
  }
 }
