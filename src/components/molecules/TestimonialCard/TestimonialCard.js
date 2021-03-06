import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Paragraph from '../../atoms/Paragraph/Paragraph';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
	padding: 3rem 3rem 3rem 7rem;
  background: ${({ theme }) => (theme.background)};
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius};
  min-height: 20rem;
  
  ::after {
    display: block;
    content: '“';
    position: absolute;
    left: 3rem;
    top: 3rem;

    font-family: Lato, sans-serif;
    font-size: 7.2rem;
    line-height: 6.4rem;
    color: ${({ theme }) => theme.yellow};
  }
`;

const Footer = styled.div`
  display: none;
  justify-content: space-between;
  margin-top: 2rem;

  @media screen and ${({ theme }) => theme.viewPorts.viewport7} {
    display: flex;
  }
`;

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-bottom: auto;
`;

const TestimonialCard = ({ name, date, content }) => (
  <Container>
    <Paragraph>{content}</Paragraph>
    <Footer>
      <StyledParagraph>{name}</StyledParagraph>
      <StyledParagraph as={Moment} format="DD MMMM YYYY">{date}</StyledParagraph>
    </Footer>
  </Container>
);

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TestimonialCard;
