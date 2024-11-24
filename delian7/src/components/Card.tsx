import React from "react";
import { Image } from "@chakra-ui/react";
import '../styles/Card.css';

interface CardProps {
  title: string;
  description: string;
  logo: string;
  hero: string;
  modalOpen?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, logo, hero, ...CardProps }) => {

  const handleModalOpen = () => {
    CardProps.modalOpen && CardProps.modalOpen();
  }

  return (
    <div className="work-item-content" onClick={handleModalOpen}>
      <div className="item-content">
        <div className="item-details-content">
          <div className="img-content">
            <span>
              <Image src={hero} className="work-image" borderRadius="lg"/>
            </span>
          </div>
          <div className="job-name mt-3">
            <h3 className="project-name">{title}</h3>
            <div className="project-logo">
              <Image src={logo} className="project-image transparent-background" borderRadius="lg"/>
            </div>
          </div>
        </div>
        <div className="job-footer">
          <div className="link-job"><span className="label">{description}</span></div>
        </div>
      </div>
    </div>
  )
};

export default Card;
