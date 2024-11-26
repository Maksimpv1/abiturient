interface IDataItem {
    name:string,
    time: string,
    room: string,
}
interface IDataDay {
    day:string,
    items:IDataItem[],
}
export interface IDataWeek {
    id:number,
    number:string
    weekOne:IDataDay[],
    weekTwo:IDataDay[],
}


export const scheduleData:IDataWeek[] = [
  {
    id: 0,
    number: '24101',
    weekOne: [
        {
        day: 'Понедельник',
        items: [
            {name: 'Математика', time: '9 00 - 10 00', room: '309' },
            {name:'Физика', time: '10 20 - 11 20', room: '309' },
            {name:'Физкультура', time: '11 40 - 13 00', room: '309' },
        ]
        },
        {
        day: 'Вторник',
        items: [
            {name: 'Математика', time: '9 00 - 10 00', room: '309' },
            {name:'Физика', time: '10 20 - 11 20', room: '309' },
            {name:'Физкультура', time: '11 40 - 13 00', room: '309' },
        ]
        },
        {
        day: 'Среда',
        items: [
            {name: 'Математика', time: '9 00 - 10 00', room: '309' },
            {name:'Физика', time: '10 20 - 11 20', room: '309' },
            {name:'Физкультура', time: '11 40 - 13 00', room: '309' },
        ]
        },
        {
        day: 'Четверг',
        items: [
            {name: 'Математика', time: '9 00 - 10 00', room: '309' },
            {name:'Физика', time: '10 20 - 11 20', room: '309' },
            {name:'Физкультура', time: '11 40 - 13 00', room: '309' },
        ]
        },
        {
        day: 'Пятница',
        items: [
            {name: 'Математика', time: '9 00 - 10 00', room: '309' },
            {name:'Физика', time: '10 20 - 11 20', room: '309' },
            {name:'Физкультура', time: '11 40 - 13 00', room: '309' },
        ]
        },
        {
        day: 'Суббота',
        items: [
            {name: 'Математика', time: '9 00 - 10 00', room: '309' },
            {name:'Физика', time: '10 20 - 11 20', room: '309' },
            {name:'Физкультура', time: '11 40 - 13 00', room: '309' },
        ]
        },
        {
        day: 'Воскресенье',
        items: [
            {name: 'Математика', time: '9 00 - 10 00', room: '309' },
            {name:'Физика', time: '10 20 - 11 20', room: '309' },
            {name:'Физкультура', time: '11 40 - 13 00', room: '309' },
        ]
        },
    ],
    weekTwo: [
            {
            day: 'Понедельник',
            items: [
                {name: 'Математика', time: '9 00 - 10 00', room: '309' },
                {name:'Физика', time: '10 20 - 11 20', room: '309' },
                {name:'Физкультура', time: '11 40 - 13 00', room: '309' },
            ]
            },
            {
            day: 'Вторник',
            items: [
                {name: 'Математика', time: '9 00 - 10 00', room: '309' },
                {name:'Физика', time: '10 20 - 11 20', room: '309' },
                {name:'Физкультура', time: '11 40 - 13 00', room: '309' },
            ]
            },
            {
            day: 'Среда',
            items: [
                {name: 'Математика', time: '9 00 - 10 00', room: '309' },
                {name:'Физика', time: '10 20 - 11 20', room: '309' },
                {name:'Физкультура', time: '11 40 - 13 00', room: '309' },
            ]
            },
            {
            day: 'Четверг',
            items: [
                {name: 'Математика', time: '9 00 - 10 00', room: '309' },
                {name:'Физика', time: '10 20 - 11 20', room: '309' },
                {name:'Физкультура', time: '11 40 - 13 00', room: '309' },
            ]
            },
            {
            day: 'Пятница',
            items: [
                {name: 'Математика', time: '9 00 - 10 00', room: '309' },
                {name:'Физика', time: '10 20 - 11 20', room: '309' },
                {name:'Физкультура', time: '11 40 - 13 00', room: '309' },
            ]
            },
            {
            day: 'Суббота',
            items: [
                {name: 'Математика', time: '9 00 - 10 00', room: '309' },
                {name:'Физика', time: '10 20 - 11 20', room: '309' },
                {name:'Физкультура', time: '11 40 - 13 00', room: '309' },
            ]
            },
            {
            day: 'Воскресенье',
            items: [
                {name: 'Математика', time: '9 00 - 10 00', room: '309' },
                {name:'Физика', time: '10 20 - 11 20', room: '309' },
                {name:'Физкультура', time: '11 40 - 13 00', room: '309' },
            ]
        },
    ],
  },
];