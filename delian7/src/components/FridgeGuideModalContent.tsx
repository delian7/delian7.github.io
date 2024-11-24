import React from 'react';
import PhoneFrame from './PhoneFrame';

const FridgeGuideModalContent = () => {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="column left">
            <h2>Title</h2>
            <p>Some text for the left column content. This could include an introduction or general information.</p>

            <PhoneFrame image={"https://placedog.net/295/589?id=3"}/>
          </div>
          <div className="column right">
            <h2>Another Title</h2>
            <p>Text for the right column content. This could include technical details, links, or images.</p>
          </div>
        </div>
      </div>
    );
};

export default FridgeGuideModalContent;