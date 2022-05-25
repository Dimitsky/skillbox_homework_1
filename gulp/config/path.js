import * as nodePath from 'path';

const rootFolder = nodePath.basename( nodePath.resolve() ),
      srcFolder = './src',
      distFolder = './dist';

export const path = {
  dist: {
    assets: `${distFolder}/assets/`,
    css: `${distFolder}/assets/css/`,
    html: `${distFolder}/`,
  },
  src: {
    assets: `${srcFolder}/assets/**/*.*`,
    css: `${srcFolder}/assets/css/*.css`,
    sass: `${srcFolder}/components/_styles/style.sass`,
    html: `${srcFolder}/components/pages/*.pug`, 
  },
  appFolder: srcFolder,
  distFolder: distFolder,
}