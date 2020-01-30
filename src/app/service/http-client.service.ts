import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

export class Lines{
constructor(
    public numberOne:string,
    public numberTwo:string,
    public numberThree:string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
    )
  {
  }

  getTicketLines()
  {
    console.log("test Get TicketLines call");
    return this.httpClient.get<Lines[]>('http://localhost:8090/lottery/ticket/0/lines');
  }

  postTicket() {
    console.log("test Post Ticket call");
    return this.httpClient.post('http://localhost:8090/lottery/ticket', "" );
  }

}
