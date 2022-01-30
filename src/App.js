import './App.css';
import colors from './data';
import clipboard from './img/clipboard.png';
import { useState } from 'react';



const gridClassNames =  ["item-d", "item-b", "item-a", "item-c"];

const getClassName = () => {
	const number  = Math.floor(Math.random() * gridClassNames.length)
	return number
}

function App() {

  
  const [colorName, setColorName] = useState('');
  const [hexCode, setHexCode] = useState('');
//   const hexCode = "";

  const handleChange = (e) => {
	  setColorName(e.target.value)
	  console.log(colors.filter(colors => colors.name.toLowerCase().includes(colorName)));
}

const handleOnMouseEnter = (e) => {
	 e.target.style.opacity = 0.8; 
}

const handleOnMouseLeave = (e, hexcode) => {
	e.target.style.background =  hexcode;
	e.target.style.opacity = 1; 
}

const handleClick = (e, hexcode) => {
    console.log(hexcode );
    navigator.clipboard.writeText(hexcode);
}
  return (
	 <div>
	 <input type ="text" value={colorName} placeholder='search color...' onChange = {(e) => handleChange(e)} />
	<main className='grid'>
	{colorName ? colors.filter(colors => colors.name.toLowerCase().includes(colorName)).map(color => <div style={{background : color.hexString}} className={`card ${gridClassNames[getClassName()]}`} onMouseEnter = {(e) => handleOnMouseEnter(e)}  onMouseLeave= {(e) => handleOnMouseLeave(e, color.hexString)}> <span className='colorCode'>{color.hexString } <img onClick={(e) => handleClick(e, color.hexString)} src={clipboard}/> </span></div> ) : <p className='para'>'no data to show'</p>}
     </main>
    </div>
 );
}

export default App;
