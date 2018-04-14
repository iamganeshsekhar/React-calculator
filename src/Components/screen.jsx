import React from 'react';
import ScreenRow from './screenRow';
import PropTypes from 'prop-types' ;

const Screen = (props) => {
  return (
    <div className="screen">
    <ScreenRow className value={props.question}/>
    <ScreenRow className value={props.answer}/>
    </div>
  )
}

Screen.PropTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}

export default Screen;
