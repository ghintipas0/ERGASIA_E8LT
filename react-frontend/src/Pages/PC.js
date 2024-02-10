import React from 'react';

function Square() {
  return <div style={{ width: '40px', height: '40px', backgroundColor: 'blue', margin: '5px', display: 'inline-block' }} />;
}

function PC() {
  const squares = [];
  for (let i = 0; i < 40; i++) {
    squares.push(<Square key={i} />);
  }

  return <div>{squares}</div>;
}

export default PC;

