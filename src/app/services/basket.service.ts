import { Subject, BehaviorSubject } from "rxjs";

export class BasketService {
    count:BehaviorSubject<number> = new BehaviorSubject<number>(0);
}