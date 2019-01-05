import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-calendar',
  templateUrl: './new-calendar.component.html',
  styleUrls: ['./new-calendar.component.scss']
})
export class NewCalendarComponent implements OnInit {

  public weekDays = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  public months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

  public monthTable: Array<{ classes: string, day: number }[]> = [];

  public month: number = 0;
  public year: number = 2019;

  public selectedDay: any;

  constructor() { }

  ngOnInit() {
    this.buildMonthDays();
    this.setSelectedDay(1);
  }

  changeMonth(offset: number) {
    if (this.month == 11 && offset > 0) {
      this.month = 0;
    } else if (this.month == 0 && offset < 0) {
      this.month = 11;
    } else {
      this.month += offset;
    }
    this.buildMonthDays();
  }

  setSelectedDay(day: number) {
    const events = [];
    const date = new Date(this.year, this.month, day)
    this.selectedDay = { 
      dayName: this.weekDays[date.getDay()], 
      day, 
      year: this.year, 
      month: this.month,
      monthName: this.months[this.month]
    };
  }

  public getCurrentDate(): MyDate {
    var d = new Date();
    let today = <any>{};
    today.month = d.getMonth();
    today.year = d.getFullYear();
    today.day = d.getDate();
    return today;
  }

  public nextMonth(): MyDate {
    let today = this.getCurrentDate();
    if ( today.month == 11 ) {
      today.month = 0;
      today.year = today.year + 1;
    }
    else {
      today.month = today.month + 1;
    }
    return today;
  }

  public prevMonth(): MyDate {
    let today = this.getCurrentDate();
    if ( today.month == 0 ) {
      today.month = 11;
      today.year = today.year - 1;
    }
    else {
      today.month = today.month - 1;
    }
    return today;
  }

  public buildMonthDays() {
    const firstDayOfMonth = new Date(this.year, this.month, 1).getDay();
    const lastDateOfMonth = new Date(this.year, this.month + 1, 0).getDate();
    const lastDayOfLastMonth = this.month == 0 ? new Date(this.year - 1, 11, 0).getDate() : new Date(this.year, this.month, 0).getDate();
    const today = this.getCurrentDate();

    let i = 1;
    
    this.monthTable = [];
    let row: { classes: string, day: number }[] = [];

    do {
      
      let dow = new Date(this.year, this.month, i).getDay();
      if ( dow == 0 ) {
        this.monthTable .push([...row]);
        row = [];
      } else if (i === 1) {
        var k = lastDayOfLastMonth - firstDayOfMonth + 1;
        for(let j = 0; j < firstDayOfMonth; j++) {
          row.push({day: k, classes: "prev-month not-current"});
          k++;
        }
      }

      // Write the current day in the loop
      var chk = new Date();
      var chkY = chk.getFullYear();
      var chkM = chk.getMonth();
      if (chkY == today.year && chkM == today.month && i == today.day) {
        row.push({day: i, classes: "today"});
      } else {
        row.push({day: i, classes: "normal-day"});
      }

      if ( i == lastDateOfMonth ) {
        let k = 1;
        for(dow; dow < 6; dow++) {
          row.push({day: k, classes: "next-month not-current"});
          k++;
        }
      }
  
      i++;
    } while(i <= lastDateOfMonth);
    this.monthTable .push([...row]);
  } 

  public setAsSelected(i: number, j: number) {
    if (!this.monthTable[i][j].classes.includes("not-current")) {
      // Clear selected class
      for (let x = 0; x < this.monthTable.length; x++) {
        for (let y = 0; y < this.monthTable[x].length; y++) {
          this.monthTable[x][y].classes = this.monthTable[x][y].classes.replace(/selected/g, "");
        }
      }
      // Append selected class to the clicked day
      this.setSelectedDay(this.monthTable[i][j].day);
      this.monthTable[i][j].classes += " selected";
    }
  }
}

interface MyDate {
  day: number;
  month: number;
  year: number;
};