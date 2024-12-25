import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import AttributesList from './components/AttributesList';
import { Attributes } from './types';
import Classes from './components/Classes';


function App() {
  const [attributes, setAttributes] = useState<Attributes>({
    Strength: { value: 10, modifier: 0 },
    Dexterity: { value: 10, modifier: 0 },
    Constitution: { value: 10, modifier: 0 },
    Intelligence: { value: 10, modifier: 0 },
    Wisdom: { value: 10, modifier: 0 },
    Charisma: { value: 10, modifier: 0 },
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Sheet</h1>
      </header>
      <div className='Contents'>
        <section className="App-section">
          <div>
            <AttributesList attributes={attributes} setAttributes={setAttributes} />
          </div>
        </section>
        <section className="App-section">
          <div>
            <Classes attributes={attributes} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
