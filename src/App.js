import React from 'react';
import LibraryImage from "./bg.jpg";
function App (){
  return (
    <div>
      <h1>Library Image</h1>
   
      <img src = {LibraryImage} alt = "Library Image"  height={200} weight={200}/>
      <h1>This is my home library where i keep all the books that is relating to my study, motivational books and documentaries.</h1>
    </div>
  );
};
export default App;


