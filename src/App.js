import React from 'react';
import LibraryImage from "./bg.jpg";
function App (){
  return (
    <div>
      <h1>Rukia's Library </h1>
   
      <img src = {LibraryImage} alt = "Library Image"  height={500} weight={500}/>
      <p>This is my home library where i keep all the books that is relating to my study, motivational books and documentaries.</p>
      <div>
        <button onClick ={()=> alert('You clicked this button')}> Click Me</button>
      </div>
    </div>
  );
};
export default App;



