
import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { Datacard } from './components/Datacard';
import { address } from './ip_address';

function App() {

  const [cards, setCards] = useState([]);
  const [getClick, setGetClick] = useState(false);

  function handleClick() {
    setGetClick(!getClick);
  }

  function fetchData() {

    fetch(`${address.endsWith('/') ? address : address + '/'}servers`)
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, [getClick, cards]);

  function addNote(newNote) {

    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)
    }
    fetch(`${address}servers`, requestOptions).then(response => response.json()).then(data => console.log(data))
      .catch(error => console.log(error));

  }


  function onDelete(id) {

    fetch(`${address}servers/${id}`, { method: 'DELETE' }).then(() => console.log("delete successful"))

  }



  return (
    <div className="App">
      <div className='welcome-bar'>
        <h1 className='title'>KAIBURR </h1>
      </div>
      <Card onAdd={addNote} />

      {getClick ?
        <div>
          <button className='back-button' onClick={handleClick}>Back</button>
          <div className='getData'>

            {
              cards.map((obj, index) => {
                return (
                  <Datacard deleteCard={onDelete} key={index} id={obj.id} name={obj.name} language={obj.language} framework={obj.framework} />
                )
              })
            }
          </div>
        </div>
        : <div className='get-data'><button className='get-button' onClick={handleClick}>Get Data</button></div>
      }
    </div>
  );
}

export default App;
