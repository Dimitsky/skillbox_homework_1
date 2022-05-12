import * as nodePath from 'path';

const rootFolder = nodePath.basename( nodePath.resolve() ),
      srcFolder = './src',
      distFolder = './dist';

export const path = {
  dist: {
    html: `${distFolder}/`,
  },
  src: {
    html: `${srcFolder}/components/pages/*.pug`,
  },
  appFolder: srcFolder,
  distFolder: distFolder,
}