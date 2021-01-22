import React from "react";
import './Mission.css';
import { useHistory } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Mission = ({title,text,buttontext}) => {
  const history=useHistory()
  const handleContact=()=>{
    history.push('/about');
  }
  return (
    <>
      <h2 className="heading">{title}</h2>
      <p className="mission__text">
        {text}
      </p>
      {buttontext && (<button onClick={handleContact} className="mission__button">{buttontext}</button>)}
    </>
  );
};

export default Mission;
