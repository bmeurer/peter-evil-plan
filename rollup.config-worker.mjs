export default {
	input: 'src/worker.js',
	output: {
		file: 'dist/bundle-worker.js',
		format: 'cjs',
    sourcemap: 'inline',
	}
};
