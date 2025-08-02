export class player3 {
    name : string;
    country : string;
    age : number;

    constructor(n:string, c: string, a: number){
         this.name = n;
         this.country = c;
         this.age = a;
    };

    play(){
        console.log(`${this.name} from ${this.country} is playing`);
    };
};