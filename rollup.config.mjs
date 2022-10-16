import { nodeResolve} from '@rollup/plugin-node-resolve';
import * as fs from 'fs';
import * as path from 'path';

function outDir(relPath) {
  const nodeModulesPath = `./node_modules/${relPath}`
  const parentDir = path.dirname(relPath)

  // Just some basic logic how to generated output-paths under src/lib
  if (`${path.basename(parentDir)}.js` === path.basename(relPath)) {
    // lit-element/lit-element.js is simplified to 'src/lib/lit-element.js'
    return path.dirname(parentDir)
  }
  else {
    return path.dirname(relPath)
  }
}

export default JSON.parse(fs.readFileSync('package.json', 'utf8')).rollup.webDependencies.map(relPath => {
  console.log("Processing:", relPath)

  const nodeModulesPath = `./node_modules/${relPath}`

  return {
    input: [
      nodeModulesPath
    ],
    output: {
      dir: 'src/lib/' + outDir(relPath),
      format: 'esm',
    },
    plugins: [nodeResolve({
      browser: true
    })]
  };  
});
