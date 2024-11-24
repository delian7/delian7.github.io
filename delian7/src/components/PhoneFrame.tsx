import '../styles/PhoneFrame.css';

interface PhoneProps {
  image: string;
}

const PhoneFrame: React.FC<PhoneProps> = ({image}) => {
  return (
    <div className="slider">
      <ul>
        <li className="active">
          <img src={image} alt="" />
        </li>
      </ul>
    </div>
  )
}

export default PhoneFrame;