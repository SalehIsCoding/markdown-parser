import { useState } from 'react';
import './App.css';
import {marked} from 'marked';

function App() {
  let [texts, settext] = useState('');
  
  let changeText = (e) =>{
    let rawMarkup = marked.parse(e.target.value);
    settext(rawMarkup);
  }
  return (
    <div className="App">
      <div className="input-wrapper">
        <h4>Input Box</h4>
        <textarea id="editor" className='textarea' onChange={changeText}></textarea>
      </div>
      <div className="input-wrapper">
        <h4>Preview Box</h4>
        <div id="preview" className='textarea' dangerouslySetInnerHTML={{
                  __html: marked(texts),
                }}></div>
      </div>
    </div>
  );
}

export default App;
