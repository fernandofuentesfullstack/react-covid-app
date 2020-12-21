/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from 'prop-types';
import Data from './components/Data'
import FlexContainer from "./components/UI/FlexContainer";

const DataList = ({ deaths, confirmed, recovered }) => (
  <FlexContainer>
    <Data number={deaths} title={'Muertes'} />
    <Data number={confirmed} title={'Positivos'} />
    <Data number={recovered} title={'Curados'} />
  </FlexContainer>
);

DataList.PropTypes = {
    deaths: PropTypes.number.isRequired,
    confirmed: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired
}

export default DataList;
