import React from "react";
import { RiImageEditLine, RiHeartsFill } from 'react-icons/ri';
import { MdPhotoCamera } from 'react-icons/md';

import ServiceSectionStyle from "./ServiceSectionStyle";
import SectionTitle from "../Titles/SectionTitle";
import ServiceItem from "./ServiceItem";



class ServiceSection extends React.Component {
  render() {
    return (
      <ServiceSectionStyle id="services">
        <div className="container">
          <SectionTitle className="services__title">
            Our services
          </SectionTitle>
          <div className="services__items">
            <ServiceItem 
              icon={<RiImageEditLine />}
              title="Professional Editing"
              desc="We do professional photo editing. Let us help you to take your photo next level."
              />
            <ServiceItem 
            icon={<RiHeartsFill />}
            title="Casual Photography"
            desc="You can hire us for any kind of casual Photography. Book us for your next events. "
            />
            <ServiceItem
            icon={<MdPhotoCamera />}
            title="Wedding Photography"
            desc="Wedding is the most memorable events of our life. Let us help you to capture it."
            />
          </div>
        </div>
      </ServiceSectionStyle>
    )
  }
}

export default ServiceSection;