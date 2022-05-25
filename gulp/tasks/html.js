import gulp from 'gulp';
import pug from 'gulp-pug';
import beautify from 'gulp-jsbeautifier';
import gulpIf from 'gulp-if';
import gulpHtmlmin from 'gulp-htmlmin';
import { path } from '../config/path.js';

export const html = () => {
  return gulp.src( path.src.html )
    .pipe( pug( {} ) )
    .pipe( beautify( {
      "indent-size": 2, 
    } ) )
    .pipe( gulpIf( app.isBuild, gulpHtmlmin( { collapseWhitespace: true } ) ) )
    .pipe( gulp.dest( path.dist.html ) )
}