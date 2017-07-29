var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var gutil      = require('gulp-util');
var babel      = require('gulp-babel');
var cleanCSS   = require('gulp-clean-css');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var rename     = require('gulp-rename');
var pump       = require('pump');    //allows errors to be passed from piping

var paths = {
  JSX: [ // 'public/components/component_data/*.js',
          'public/components/native_components/*.jsx',
          'public/components/*.jsx',
          'public/views/*.jsx',
          'public/views/*/*.jsx',
          'public/routes.jsx'],
  JS: [   'public/components/component_data/*.js'],
  CSS: [ 'public/styles/styles.css' ],
  DEST: './dist/'
};

//concats all jsx files
gulp.task('concatJsxScripts', (callBack) => {
  pump([ gulp.src(paths.JSX),
          concat('alljsx.jsx'),
          gulp.dest(paths.DEST)
        ], callBack);
  }
);
gulp.task('transpileReact',['concatJsxScripts'], (callBack) => {
    pump([
      gulp.src(paths.DEST + 'alljsx.jsx'),
      babel({ presets: ['react','es2015']}),
      browserify(),
      rename('alljs.js'),
      gulp.dest(paths.DEST)
    ], callBack);
  }
);
gulp.task('minifyJs',['transpileReact'], (callBack) => {
    pump([
      gulp.src(paths.DEST + 'alljs.js'),
      //uglify(),
      rename('all.min.js'),
      gulp.dest(paths.DEST),
    ], callBack);
  }
);

gulp.task('minifyCss', (callBack) => {
  pump([ gulp.src(paths.CSS),
          rename('styles.min.css'),
          cleanCSS({compatibility: 'ie8'}),
          gulp.dest(paths.DEST)
        ], callBack);
  }
);

gulp.task('default', ['minifyJs','minifyCss'], () => {


});



//watchers
gulp.task('watch', () => {
  gulp.watch(paths.JSX, ['minifyJs']);
  gulp.watch(paths.CSS, ['minifyCss']);
});





//transpile to es5
// gulp.task('default',['es6Transpile'], () => {
//   return gulp.src(destPath + app.jsx)
//
// });

// gulp.task('minify-css', () => {
//
//   return gulp.src("public/*.css")
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest("public/dist/styles.min.css"));
// });
//
//
//
// gulp.task('es6Transpile', () => {
//   gutil.log("inside transpile");
//   return gulp.src("public/*.js")
//     .pipe(babel({presets:['es2015']}))
//     .pipe(gulp.dest("public/dist/app.min.js"));
// });
