import React, {useState, useEffect} from "react";
import Button from './Button.jsx';
import '../App.css';

const Event = () => {
  // useState hook to manage counter state
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  // useEffect hook to disable button after 10 clicks
  useEffect(() => {
    if (count >= 10) {
      setIsDisabled(true);
    }
  }, [count]);

  // Event handler function to update state
  const handleButtonClick = () => {
    setCount((prev)=> prev + 1);
  };

  return (
    <div className="container">
      <h2 className="title">React Event Handling Example</h2>

      {/* Passing event handler as a prop to child component */}
      <Button
        onClickHandler={handleButtonClick}
        label="Click Me"
        disabled={isDisabled}
      />

      {/* Displaying the updated count */}
      <p className="count-text">Button clicked {count} times</p>
      {isDisabled && (
        <p className="warning-text">Button disabled after 10 clicks!</p>
      )}
    </div>
  );
};

export default Event;