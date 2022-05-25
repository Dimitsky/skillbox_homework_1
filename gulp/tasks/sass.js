import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import { path } from '../config/path.js';

const s = gulpSass( dartSass );

export const sass = () => {
  return gulp.src( path.src.sass )
    .pipe( s().on( 'error', s.logError ) )
    .pipe( gulp.dest( path.dist.css ) )
}