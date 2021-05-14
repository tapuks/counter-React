import React, { useEffect } from "react";
import PropTypes from "prop-types";

const SecondsCounter = props => {
	return props.seconds;
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};
export default SecondsCounter;
