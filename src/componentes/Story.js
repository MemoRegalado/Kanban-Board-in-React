import React from 'react';
import '../stylesheets/Story.css'


function Story({ texto, id, avanzarstory, columna }) {
  return(
    <div 
      className='story'
      onClick={() => 
        {if(avanzarstory != '') 
          avanzarstory(id, columna)}
          }>
      {texto}
    </div>
  );
}

export default Story;