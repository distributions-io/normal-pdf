/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	pdf = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number pdf', function tests() {

	var mu = 2,
		sigma = 0;

	it( 'should export a function', function test() {
		expect( pdf ).to.be.a( 'function' );
	});

	it( 'should evaluate the Normal probability density function', function test() {
		// point mass at 2:
		assert.strictEqual( pdf( 2, mu, sigma ), Number.POSITIVE_INFINITY );
		assert.strictEqual( pdf( 2.5, mu, sigma ), 0 );
		assert.strictEqual( pdf( 1.5, mu, sigma ), 0 );
	});

});
