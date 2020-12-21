import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const DataContainer = styled.div`
    text-align: center;
`;

const Number = styled.p`
    font-size: 32px;
    font-weight: bold;
`;

const Data = ({ number, title }) => (
  <div>
    <Number>{number}</Number>
    <DataContainer>{title}</DataContainer>
  </div>
);

Data.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
};

export default Data;
