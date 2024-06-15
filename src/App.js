import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { dec, handleShow, inc } from './redux/actions';
import Footer from './Footer';

function App() {
  const {compteur, isShow} = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      
      <button className='noir' onClick={() => dispatch(handleShow())}>{isShow ? "Cacher le compteur" :"Voir le Compteur"}</button>

    {
      isShow ? (
        
    <div >
      <br></br><br></br>
    <button className='vert' onClick={() => dispatch(inc())}>INCREMENTER</button>
    <h1>{compteur}</h1>
    <button className='rouge' onClick={() => dispatch(dec())}>DECREMENTER</button>
    </div>
   )  : null}
   <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <Footer/>
    </div>
  );
}

export default App;
