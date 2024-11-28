export interface IDataItem {
  name: string;
  time: string;
  room: string;
}
interface IDataDay {
  day: string;
  items: IDataItem[];
}
export interface IDataWeek {
  number:string,
  days:IDataDay[],
}
export interface IDataSchudle {
  id: number;
  number: string;
  week:IDataWeek[];
}

export const scheduleData: IDataSchudle[] = [
  {
    id: 0,
    number: "24101",
    week:[
      {
        number: '1',
        days:[
          {
            day: "Понедельник",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" },
              { name: "Физика", time: "10 20 - 11 20", room: "309" },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" },
            ],
          },
          {
            day: "Вторник",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" },
              { name: "Физика", time: "10 20 - 11 20", room: "309" },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" },
            ],
          },
          {
            day: "Среда",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" },
              { name: "Физика", time: "10 20 - 11 20", room: "309" },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" },
            ],
          },
          {
            day: "Четверг",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" },
              { name: "Физика", time: "10 20 - 11 20", room: "309" },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" },
            ],
          },
          {
            day: "Пятница",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" },
              { name: "Физика", time: "10 20 - 11 20", room: "309" },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" },
            ],
          },
          {
            day: "Суббота",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" },
              { name: "Физика", time: "10 20 - 11 20", room: "309" },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" },
            ],
          },
          {
            day: "Воскресенье",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" },
              { name: "Физика", time: "10 20 - 11 20", room: "309" },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" },
            ],
          },
        ],
      },
      {
        number:'2',
        days:[
          {
            day: "Понедельник",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" },
              { name: "Физика", time: "10 20 - 11 20", room: "309" },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" },
            ],
          },
          {
            day: "Вторник",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" },
              { name: "Физика", time: "10 20 - 11 20", room: "309" },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" },
            ],
          },
          {
            day: "Среда",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" },
              { name: "Физика", time: "10 20 - 11 20", room: "309" },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" },
            ],
          },
          {
            day: "Четверг",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" },
              { name: "Физика", time: "10 20 - 11 20", room: "309" },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" },
            ],
          },
          {
            day: "Пятница",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" },
              { name: "Физика", time: "10 20 - 11 20", room: "309" },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" },
            ],
          },
          {
            day: "Суббота",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" },
              { name: "Физика", time: "10 20 - 11 20", room: "309" },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" },
            ],
          },
          {
            day: "Воскресенье",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" },
              { name: "Физика", time: "10 20 - 11 20", room: "309" },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" },
            ],
          },
        ],
      },
    ] ,
  },
];
