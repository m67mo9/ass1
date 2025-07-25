import './Home.css';
import Header from '../Header/Header';
import homeImg from '../../assets/images/avataaars.svg';

export default function Home() {
  return (
    <div className='home text-center'>
      <img className='home-img' src={homeImg} alt="home Img" />
      <Header header={'start Framework'} />
      <div className='text-white fs-5'> Graphic Artist - Web Designer - Illustrator </div>
    </div>
  )
}
