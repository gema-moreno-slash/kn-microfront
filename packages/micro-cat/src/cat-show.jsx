import React from "react";
import pic from '../public/cat.png';
import './styles.css';

const CatShow = () => {
  return (
    <>
      <img src={pic} className="pic"  alt="A cute cat"></img>
    </>
  );
};

export default CatShow;