import React, { useRef } from 'react';
import { Button } from '@material-ui/core';

function ScrollButton(props) {
  const { sectionId, buttonText } = props;
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={scrollToSection}>
        {buttonText}
      </Button>
      <div ref={sectionRef} id={sectionId}>
        {props.children}
      </div>
    </>
  );
}

export default ScrollButton;
