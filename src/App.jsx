import axios from 'axios';
import { useEffect, useState } from 'react';
import "./App.css";
import { Box } from './app.style';


export function App() {

  const [person, setPerson] = useState({
    name: {
      first: "???"
    }
  })

  useEffect(() => {handleGet() }, [])

  async function handleGet (){
    const data = await axios.get("https://randomuser.me/api/?nat=BR")

    setPerson(data.data.results[0])

    //console.log(data.data.results[0].name.first)

    console.log(person);
  }

  const txt = "Hello ZA WARUDO!!!";

  return (
    <Box>
      <div>
        <img src="https://i.pinimg.com/originals/c6/64/5f/c6645fb800fda99ed4596670ab1ac576.png"/>
        <p>Nome: </p> <br/>
        <p>{person.name.first}</p>
        <img src="https://i.pinimg.com/originals/c6/64/5f/c6645fb800fda99ed4596670ab1ac576.png"/>
      </div>

      <button onClick={handleGet}>Request</button>
    </Box>
  );
}
