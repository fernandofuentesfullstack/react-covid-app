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

DataList.propTypes = {
    deaths: PropTypes.number,
    confirmed: PropTypes.number,
    recovered: PropTypes.number
}

export default DataList;
