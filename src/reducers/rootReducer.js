const initialState = {
  animals: [
    {
      id: 1,
      name: 'Шарик',
      type: 'Собака',
      species: 'Дворняга',
      age: Math.round(Math.random() * 15),
      weight: 21,
      diagnosis: 'Насморк',
      medicine: 'Тизин',
      destination: {
        date: '16.10.2020',
        time: '08:30'
      },
      img: 'img/dog.jpg'
    },
    {
      id: 2,
      name: 'Барсик',
      type: 'Кошка',
      species: 'Мейн-кун',
      age: Math.round(Math.random() * 15),
      weight: 9,
      diagnosis: 'Чешется',
      medicine: 'Почесать',
      destination: {
        date: '17.10.2020',
        time: '09:45'
      },
      img: 'img/cat.jpg'
    },
    {
      id: 3,
      name: 'Корри',
      type: 'Попугай',
      species: 'Какаду',
      age: Math.round(Math.random() * 15),
      weight: 1,
      diagnosis: 'Матерится',
      medicine: 'Клизма',
      destination: {
        date: '17.10.2020',
        time: '11:00'
      },
      img: 'img/parrot.jpg'
    },
    {
      id: 4,
      name: 'Каа',
      type: 'Змея',
      species: 'Питон',
      age: Math.round(Math.random() * 15),
      weight: 7,
      diagnosis: 'Съел Маугли',
      medicine: 'Вскрытие',
      destination: {
        date: '18.10.2020',
        time: '11:40'
      },
      img: 'img/python.jpg'
    },
    {
      id: 5,
      name: 'Ари',
      type: 'Паук',
      species: 'Тарантул',
      age: Math.round(Math.random() * 15),
      weight: 0.07,
      diagnosis: 'Несварение',
      medicine: 'Теплое молоко',
      destination: {
        date: '16.10.2020',
        time: '13:30'
      },
      img: 'img/spider.jpg'
    },
    {
      id: 6,
      name: 'Бульк',
      type: 'Рыбка',
      species: 'Золотая',
      age: Math.round(Math.random() * 15),
      weight: 7,
      diagnosis: 'Аппендицит',
      medicine: 'Операция',
      destination: {
        date: '17.10.2020',
        time: '21:21'
      },
      img: 'img/fish.jpg'
    }
  ]
}

const rootReducer = (state = initialState) => {
  return state;
}

export default rootReducer;