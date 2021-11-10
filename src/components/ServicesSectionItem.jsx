import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.4rem;
    font-family: 'Montserrat Semibold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'webdesign',
  desc = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit Reprehenderit atque ea velit possimus reiciendis sequi, porro aliquid fugit sit impedit quia sint necessitatibus labore.',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem__icon">{icon} </div>
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
