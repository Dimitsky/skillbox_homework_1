import gulp from 'gulp';
import { path } from './gulp/config/path.js';


// Импорт задачи

import { html } from './gulp/tasks/html.js';


// Выполнение сценария

const dev = gulp.series( html );

gulp.task( 'default', dev );