import './App.css';
import Form from "./Components/Form";
import {useState} from "react";
import wiki_API from "./config";
import SearchList from "./Components/SearchList";

function App() {
  const [input, setInput] = useState('');
  const [data,setData] = useState([])
  const submithandler =  (e) =>{
    e.preventDefault()
    setInput('')
  };
  const searchHandler = (text) => {
      fetch(wiki_API+text)
          .then(response=>response.json())
          .then(data=> setData(data.query.search))
  };
  return (
    <div className="App">
      <Form  searchHandler={searchHandler} submithandler={submithandler} input={input} setInput={setInput} />
      <SearchList data={data} />
    </div>
  );
}

export default App;
