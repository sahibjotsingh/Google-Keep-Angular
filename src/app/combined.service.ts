import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class CombinedService {

  constructor(private webReqService: WebRequestService) { }

  getCombined() {
    return this.webReqService.get('combined');
  }
}
