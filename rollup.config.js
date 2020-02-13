import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript2';

export default {
	input: 'dist/index.js',
	output: {
		file: 'dist/bundles/ng2-ace-editor-a9.umd.js',
		format: 'umd',
		name: 'ng.ng2aceeditor',
		sourcemap: false,
		globals: {
			'@angular/core': 'ng.core',
			'@angular/forms': 'ng.forms'
		}
	},
	external: ['@angular/core', '@angular/forms', 'brace', 'brace/theme/monokai'],
	plugins: [angular(), typescript()],
	moduleName: 'ng2-ace-editor-a9',

};
