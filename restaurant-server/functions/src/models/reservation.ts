import * as moment from 'moment';

export class Reservation {
  public numPeople: number;
  public date: string;
  public time: string;

  constructor (dialogFlowParams: any) {
    moment.locale('es');
    this.numPeople = Number(dialogFlowParams.numPeople);
    this.date = moment(dialogFlowParams.date).format('YYYY-MM-DD');
    this.time = moment(dialogFlowParams.time).add(1, 'hours').format('HH:mm');
  }

  public toDocument() {
    return {
      numPeople: this.numPeople,
      date: this.date,
      time: this.time
    };
  }
}
