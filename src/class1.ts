const date = new Date();
date.getHours;
date.getTime;
date.toISOString;

const date2 = new Date(2000,2,12);
date.getHours;
date.getTime;
date.toISOString;

export class MyDate{
    year : number;
    month : number;
    day : number

    constructor(year:number, month:number, day: number){
        this. year = year;
        this.month = month;
        this.day = day;
    }
}

const myDate = new MyDate(2021,3,13);
console.log(myDate);