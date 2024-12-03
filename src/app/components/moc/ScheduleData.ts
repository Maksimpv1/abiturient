import { styled } from "styled-components";

export interface IDataItem {
  name: string;
  time: string;
  room: string;
  type: string
  group?:string;
  teacher?:string;
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

export const Icon = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  background-color: gray;
  border-radius: 100%;
`;


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
              { name: "Математика", time: "9 00 - 10 00", room: "309", type: '1', teacher: 'url: ......' },
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '1' , teacher: 'url: ......' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" , type: '2' , teacher: 'url: ......'},
            ],
          },
          {
            day: "Вторник",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '2' , teacher: 'url: ......'},
              { name: "Физика", time: "10 20 - 11 20", room: "309" , type: '2', teacher: 'url: ......' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" , type: '3', teacher: 'url: ......' },
            ],
          },
          {
            day: "Среда",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '1' , teacher: 'url: ......'},
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '1', teacher: 'url: ......' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" , type: '1', teacher: 'url: ......' },
            ],
          },
          {
            day: "Четверг",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '2' , teacher: 'url: ......'},
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '2' , teacher: 'url: ......' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1' , teacher: 'url: ......' },
            ],
          },
          {
            day: "Пятница",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '1' , teacher: 'url: ......'},
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '1' , teacher: 'url: ......' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1' , teacher: 'url: ......' },
            ],
          },
          {
            day: "Суббота",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '1', teacher: 'url: ......'},
              { name: "Физика", time: "10 20 - 11 20", room: "309" , type: '1', teacher: 'url: ......' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1' , teacher: 'url: ......' },
            ],
          },
          {
            day: "Воскресенье",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '2', teacher: 'url: ......' },
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '2', teacher: 'url: ......'  },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1', teacher: 'url: ......'  },
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
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '2' , teacher: 'url: ......'},
              { name: "Физика", time: "10 20 - 11 20", room: "309" , type: '2', teacher: 'url: ......' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1' , teacher: 'url: ......' },
            ],
          },
          {
            day: "Вторник",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309", type: '1' , teacher: 'url: ......' },
              { name: "Физика", time: "10 20 - 11 20", room: "309" , type: '1', teacher: 'url: ......' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '3', teacher: 'url: ......'  },
            ],
          },
          {
            day: "Среда",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309", type: '1' , teacher: 'url: ......' },
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '1' , teacher: 'url: ......' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1' , teacher: 'url: ......' },
            ],
          },
          {
            day: "Четверг",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '1' , teacher: 'url: ......'},
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '2' , teacher: 'url: ......'},
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" , type: '2', teacher: 'url: ......' },
            ],
          },
          {
            day: "Пятница",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '1', teacher: 'url: ......' },
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '1', teacher: 'url: ......' },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1' , teacher: 'url: ......' },
            ],
          },
          {
            day: "Суббота",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309", type: '1' , teacher: 'url: ......' },
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '2', teacher: 'url: ......'  },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309", type: '1' , teacher: 'url: ......' },
            ],
          },
          {
            day: "Воскресенье",
            items: [
              { name: "Математика", time: "9 00 - 10 00", room: "309" , type: '1' , teacher: 'url: ......'},
              { name: "Физика", time: "10 20 - 11 20", room: "309", type: '2', teacher: 'url: ......'  },
              { name: "Физкультура", time: "11 40 - 13 00", room: "309" , type: '1', teacher: 'url: ......' },
            ],
          },
        ],
      },
    ] ,
  },
];


