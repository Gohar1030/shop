import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ItemService {
    
    constructor(public http: HttpClient){

    }
}