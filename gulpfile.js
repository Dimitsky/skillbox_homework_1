import gulp from 'gulp';
import { path } from './gulp/config/path.js';


// Импорт задачи

import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';
import { sass } from './gulp/tasks/sass.js';


// Выполнение сценария

const parall = gulp.parallel( copy, sass, html )
const dev = gulp.series( parall );

gulp.task( 'default', dev );