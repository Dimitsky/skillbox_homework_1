import gulp from 'gulp';
import pug from 'gulp-pug';
import { path } from '../config/path.js';

export const html = () => {
  return gulp.src( path.src.html )
    .pipe( pug( {} ) )
    .pipe( gulp.dest( path.dist.html ) )
}