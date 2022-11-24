import React from 'react';
import '../stylesheets/Story.css'


function Story({ text, id, avanzarstory, columnnumber, rootstory, addnewstory }) {

  // const añadirstory= ( rootstory ) => {
  //   console.log('estas añadiendo ' + rootstory);
  // }

  const handleClick = () => {
    //  event.preventDefault();
    // rootstory();
    if(rootstory != '' ) 
      {{addnewstory()}}
    else {
      if(avanzarstory != '') 
        {avanzarstory(id, columnnumber)}
      }
  };

  return(
    <div 
      className='story'
      onClick={handleClick}>
      <div>{text}</div>
    </div>
  );
}

export default Story;