import gulp from 'gulp';
import changed from 'gulp-changed';
import { path } from '../config/path.js';

export const copy = () => {
  return gulp.src( path.src.assets )
    .pipe( changed( path.dist.assets ) )
    .pipe( gulp.dest( path.dist.assets ) )
}