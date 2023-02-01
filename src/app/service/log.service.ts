import { Injectable } from "@angular/core";

@Injectable()
export class LogService {
    public log(msg: string) {
        console.log(msg)
    }
}