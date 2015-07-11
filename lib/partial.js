'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( mu, sigma )
*	Partially applies mean  `mu` and standard deviation `sigma` and returns a function for evaluating the probability density function (PDF) for a Normal distribution.
*
* @param {Number} mu - mean 
* @param {Number} sigma - standard deviation
* @returns {Function} PDF
*/
function partial( mu, sigma ) {

	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Normal distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
