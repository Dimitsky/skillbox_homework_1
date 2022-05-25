import gulp from 'gulp';

// Глобальная переменная

global.app = {
  isBuild: process.argv.includes( '--build' ), 
  isDev: !process.argv.includes( '--build' ), 
}

// Импорт задачи

import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';
import { sass } from './gulp/tasks/sass.js';
import { clean } from './gulp/tasks/clean.js';


// Выполнение сценария

const parall = gulp.parallel( copy, sass, html )
const dev = gulp.series( clean, parall );

gulp.task( 'default', dev );