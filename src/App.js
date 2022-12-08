// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import SideNav from './components/SideNav/SideNav'
import Videos from './components/Videos/Videos'




function App() {
  return (
    <>
     <Header/>
     <div className='mainPage'>
     <div className='sideNav'><SideNav /></div>
     <div className='videos'><Videos /></div>
     </div>
    
    </>
  );
}

export default App;
