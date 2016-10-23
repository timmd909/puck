'use strict';

module.exports = {
	assets: {
		files: [
			// Bootstrap
			{
				expand: true,
				cwd: 'node_modules/bootstrap/dist/',
				src: [
					'js/*.js',
					'css/*.css',
				],
				dest: 'web/assets/bootstrap/',
			},
			// jQuery
			{
				expand: true,
				cwd: 'node_modules/jquery/dist/',
				src: [
					'jquery.js',
					'jquery.min.js',
					'jquery.min.map',
				],
				dest: 'web/assets/jquery/',
			},
		]
	}
};