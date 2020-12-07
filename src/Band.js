
import React from 'react';

let bandName="Товарищ Астроном";//название группы,
let shortInfo= "Музыкальный коллектив из города Таллин";//информация об участниках группы, 
let albums = 
[["Оглянись", "https://f4.bcbits.com/img/a3501559896_2.jpg"],
["Житель ночи", "https://f4.bcbits.com/img/a1080074605_2.jpg"],
["Верба", "https://f4.bcbits.com/img/a1529861889_2.jpg"],
["Draff vol.1", "https://f4.bcbits.com/img/a0672434188_2.jpg"]];//название альбомов, 

//обложки альбомов.

export class Band extends React.Component {
    render() {
      return (
        <div>
            <h1>{bandName}</h1>
            <p>{shortInfo}</p>
            <ul>
                <li><image href = {albums[0][1]}></image></li>
            </ul>
        </div>
      );
    }
  }

