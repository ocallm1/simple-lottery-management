import { Component, OnInit } from '@angular/core';
import { HttpClientService, Lines } from '../service/http-client.service';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent implements OnInit {

  ticketlines: any;

  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.postTicket().subscribe(
      response =>this.handleSuccessfulPost(response),
    );

    this.httpClientService.getTicketLines().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response)
  {
      this.ticketlines=response;
      console.log(this.ticketlines[1]);
  }

  handleSuccessfulPost(response)
  {
    console.log("New Ticket created!!!");
  }


  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
}
