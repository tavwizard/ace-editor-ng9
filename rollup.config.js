
import autoExternal from 'rollup-plugin-auto-external';
import typescript from "rollup-plugin-typescript2";
import angular from "rollup-plugin-angular";

export default {
	input: 'dist/index.js',
	output: {
		file: 'dist/ngx-ace-editor-wrapper.umd.js',
		format: 'umd',
		name: 'ngx-ace-editor-wrapper',
	   	sourcemap: true,
	   	globals: {
        	'@angular/core': 'ng.core',
            '@angular/forms': 'ng.forms'
		}
	},
	external: [
		'@angular/core',
		'@angular/forms',
		'brace',
		'brace/theme/monokai'
	],
	plugins: [
		angular(),
		typescript(),
		autoExternal()
	]

};
