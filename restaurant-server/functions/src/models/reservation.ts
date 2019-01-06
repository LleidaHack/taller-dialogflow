import * as moment from 'moment';

export class Reservation {
  public numPeople: number;
  public date: string;
  public time: string;

  constructor (dialogFlowParams: any) {
    moment.locale('en');
    this.numPeople = Number(dialogFlowParams.numPeople);
    this.date = moment(dialogFlowParams.date).format('YYYY-MM-DD');
    this.time = moment(dialogFlowParams.time).format('hh:mm');
  }

  public toDocument() {
    return {
      numPeople: this.numPeople,
      data: this.date,
      time: this.time
    };
  }
}