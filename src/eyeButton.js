import React from 'react';

export default function Button(props){
    return <button className={props.type}>
      <p>{props.text}</p>
    </button>
  }

//   export default function Button