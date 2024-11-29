export interface IDataItem {
  name: string;
  time: string;
  room: string;
  type: string
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
              { name: "Математика", time: "9 00 - 10 00", room: "309", type: '1' },
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '1'  },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" , type: '2' },
            ],
          },
          {
            day: "Вторник",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '2' },
              { name: "Физика", time: "10 20 - 11 20", room: "309" , type: '2' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" , type: '3' },
            ],
          },
          {
            day: "Среда",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '1' },
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '1'  },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" , type: '1' },
            ],
          },
          {
            day: "Четверг",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '2' },
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '2'  },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1'  },
            ],
          },
          {
            day: "Пятница",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '1' },
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '1'  },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1'  },
            ],
          },
          {
            day: "Суббота",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '1' },
              { name: "Физика", time: "10 20 - 11 20", room: "309" , type: '1' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1'  },
            ],
          },
          {
            day: "Воскресенье",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '2' },
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '2'  },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1'  },
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
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '2' },
              { name: "Физика", time: "10 20 - 11 20", room: "309" , type: '2' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1'  },
            ],
          },
          {
            day: "Вторник",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309", type: '1'  },
              { name: "Физика", time: "10 20 - 11 20", room: "309" , type: '1' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '3'  },
            ],
          },
          {
            day: "Среда",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309", type: '1'  },
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '1'  },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1'  },
            ],
          },
          {
            day: "Четверг",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '1' },
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '2' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" , type: '2' },
            ],
          },
          {
            day: "Пятница",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '1' },
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '1' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1'  },
            ],
          },
          {
            day: "Суббота",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309", type: '1'  },
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '2'  },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1'  },
            ],
          },
          {
            day: "Воскресенье",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '1' },
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '2'  },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" , type: '1' },
            ],
          },
        ],
      },
    ] ,
  },
];
