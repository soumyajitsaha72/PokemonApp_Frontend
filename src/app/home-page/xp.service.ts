import { Injectable } from "@angular/core";
import { GlobalvarService } from "../globalvar.service";

@Injectable({ providedIn: 'root' })

export class XpService {

    public xp: number;


    getXp() {
        return this.xp;
    }

    addXp(pokeXp: number) {
        this.xp = this.xp + pokeXp;
        return this.xp;
    }

    removeXp(pokeXp: number) {
        this.xp = this.xp - pokeXp;
        return this.xp;
    }
}