import React from "react";
import ServiceItemStyle from '../ServicesSection/ServiceItemStyle';
import ParagraphTexts from '../ParagraphTexts/ParagraphTexts';
import themeContext from "../../context/themeContext";

class ServiceItem extends React.Component {
  render() {
    const {icon, title, desc} = this.props;
    return (
      <ServiceItemStyle mode={this.context.theme}>
         <div className="services__icon">{icon}</div>
         <div className="services__title">{title}</div>
        <ParagraphTexts className="services__desc">{desc}</ParagraphTexts>
      </ServiceItemStyle>
    )
  }
}

ServiceItem.contextType = themeContext;

export default ServiceItem;