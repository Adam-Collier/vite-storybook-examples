const { rmdir } = require('fs/promises');
const { build } = require('esbuild');
const packageJson = require('./package.json');

// delete everything in the dist dir
rmdir('dist', { recursive: true });

// get all of our externals since to exclude from our bundle, they will be installed by the user
const external = [
  ...Object.keys({
    ...(packageJson.dependencies || {}),
    ...(packageJson.devDependencies || {}),
    ...(packageJson.peerDependencies || {}),
  }),
  'prop-types',
];

// build the esm file
build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/index.esm.js',
  external,
  format: 'esm',
  platform: 'browser',
  minify: true,
}).catch(() => process.exit(1));

// build the common js file
build({
  entryPoints: ['src/index.js'],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  outfile: 'dist/index.cjs.js',
  external,
  minify: true,
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.DEBUG': 'false',
  },
}).catch(() => process.exit(1));
