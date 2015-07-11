/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	pdf = require( './../lib/typedarray.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'typed-array pdf', function tests() {

	var mu = 3,
		sigma = 3;

	it( 'should export a function', function test() {
		expect( pdf ).to.be.a( 'function' );
	});

	it( 'should evaluate the Normal pdf', function test() {
		var data, actual, expected, i;

		data = new Float64Array([
			1e-306,
			-1e-306,
			1e-299,
			-1e-299,
			0.8,
			-0.8,
			1,
			-1,
			10,
			-10,
			2,
			-2,
			3,
			-3
		]);
		actual = new Float64Array( data.length );

		actual = pdf( actual, data, mu, sigma );

		// Evaluated in R:
		expected = new Float64Array([
			0.0806569081730478,
			0.0806569081730478,
			0.0806569081730478,
			0.0806569081730478,
			0.101627642320172,
			0.0596194721648468,
			0.106482668507451,
			0.0546700248919979,
			0.00874062969790316,
			1.11236207985461e-05,
			0.125794409230998,
			0.0331590462642496,
			0.132980760133811,
			0.0179969888377294
		]);

		for ( i = 0; i < actual.length; i++ ) {
			assert.closeTo( actual[ i ], expected[ i ], 1e-7 );
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( pdf( new Int8Array(), new Int8Array(), mu, sigma ), new Int8Array() );
	});

});
