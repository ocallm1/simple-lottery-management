import { Component, OnInit } from '@angular/core';
import { HttpClientService, Lines } from '../service/http-client.service';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryComponent implements OnInit {

  ticketlines: Lines[];

  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getTicketLines().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }

handleSuccessfulResponse(response)
{
    this.ticketlines=response;
    console.log(this.ticketlines[1]);
}

}
