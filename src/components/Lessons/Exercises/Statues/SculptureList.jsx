import { useState } from 'react';
import { sculptureList } from './data.jsx';

export default function Gallery() {
  // index is a state, and setIndex is a setter function
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  // 3. Your component’s second render. React still sees useState(0), but because React remembers that you set index to 1, it returns [1, setIndex] instead.

  // When you call useState, you are telling React that you want this component to remember something:
  // In this case, you want React to remember index.

  // The convention is to name this pair like const [something, setSomething]. 
  // You could name it anything you like, but conventions make things easier to understand across projects.


  // 1. Your component renders the first time. Because you passed 0 to useState as the initial value for index, it will return [0, setIndex]. React remembers 0 is the latest state value.

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext){
      setIndex(index + 1)
    }
      // 2. You update the state. When a user clicks the button, it calls setIndex(index + 1). index is 0, so it’s setIndex(1). This tells React to remember index is 1 now and triggers another render.
  }

  function handlePrevClick() {
    if (hasPrev){
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
      setShowMore(!showMore)
  }

  let sculpture = sculptureList[index];
  return (
<>
      <button
        onClick={handlePrevClick}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        onClick={handleNextClick}
        disabled={!hasNext}
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
