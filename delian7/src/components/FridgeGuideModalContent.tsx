import uiLoop from "../images/fridgeguide/ui-loop.gif"
import "../styles/PhoneFrame.css"


const FridgeGuideModalContent = () => {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="column left">
            <h2>Title</h2>
            <p>Some text for the left column content. This could include an introduction or general information.</p>

            <img className="phone-frame" alt="fridge guide ui loop" src={uiLoop} />
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