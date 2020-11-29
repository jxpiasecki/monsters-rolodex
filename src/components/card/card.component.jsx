import React, {useState} from 'react';
import './card.styles.css';

export const Card = (props) => {
    const [image, reloadImage] = useState(props.monster.id);
    return (
        <div className="card-container" onClick={(e) => reloadImage(Math.random())}>
            {/*<img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>*/}
            <img src={`https://robohash.org/${image}?set=set2&size=180x180`}/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
            {/*<span>{JSON.stringify(props.monster)}</span>*/}
        </div>
    );
}