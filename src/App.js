import './App.css';
import Render from './Components/Render';

function App() {

  const array = [
    {
      name: 'Nurles',
      age: '17' ,
      id : Math.random().toString(),
      date: new Date(),
      site:'Instagram',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png',
      href:'https://www.instagram.com/'
    },
    {
      name: 'Mariam',
      age: '19',
      site:'YouTube',
      id : Math.random().toString(),
      image: 'https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc',
      href:'https://www.youtube.com/',
      date: new Date(),
    },
    {
      name: 'Roza',
      age: '15',
      site:'Telegram',
      id : Math.random().toString(),
      image:'https://cdn.pixabay.com/photo/2020/10/17/13/21/telegram-5662082_1280.png',
      date: new Date(),
      href: 'https://web.telegram.org/a/'
    }
  ]

  return (
    <div className="App">
      {array.map((el) =>{
        return(
          <Render siteName={el.site} site={el.href} dateToday={el.date} img={el.image} userName={el.name} useAge={el.age} key={el.id}/>
        )
      })}
    </div>
  );
}

export default App;                             
