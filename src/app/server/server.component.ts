import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles : [
    `.online {color : white;
    }`]
})
export class ServerComponent {
  serverId : number= 10;
  serverStatus : string = 'offLine';
  paragraphName : 'Paragraph01';
  showSecret = false;
  log = [];

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
    
  }
  getColor(){
    return this.serverStatus === 'online'? 'Green':'Red';
  }

  onToggleDisplay(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}