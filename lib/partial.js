'use strict';

// FUNCTIONS //

var exp = Math.exp,
	pow = Math.pow,
	sqrt = Math.sqrt;


// VARIABLES //

var PI = Math.PI;


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
	var s2 = pow( sigma, 2 ),
		A = 1 / ( sqrt( 2 * s2 * PI ) ),
		B = -1 / ( 2 * s2 );
	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Normal distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	if ( sigma === 0 ) {
		return function pdf( x ) {
			return x === mu ? Number.POSITIVE_INFINITY : 0;
		};
	}
	return function pdf( x ) {
		return A * exp( B * pow( x - mu, 2 ) );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
