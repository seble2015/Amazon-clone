import React from 'react'

function BackToTop() {
  return (
    <div>
      <span className='button'>
        <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
          Back to top
        </button>
      </span>
    </div>
  );
}

export default BackToTop