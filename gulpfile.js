const gulp = require('gulp')
const path = require('path')
const $ = require('gulp-load-plugins')()

const paths = {
  src: {
    less: './src/styles/less/**',
    css: './src/styles/css/*.css',
    js: './src/js/**',
    data: './src/data/**',
    pug: './src/pug/**',
    images: './src/img/**'
  },
  dest: {
    html: './dest',
    css: './dest/styles',
    js: './dest/js',
    data: './dest/data',
    images: './dest/img'
  }
}

gulp.task('pug', () => {
  gulp.src(paths.src.pug)
    .pipe($.pug({
      basedir: path.resolve()
    }))
    .pipe(gulp.dest('./dest'))
})

gulp.task('less', () => {
  gulp.src(paths.src.less)
    .pipe($.less())
    .pipe(gulp.dest(paths.dest.css))
})
gulp.task('css', () => {
  gulp.src(paths.src.css)
    .pipe(gulp.dest(paths.dest.css))
})

gulp.task('scripts', () => {
  gulp.src(paths.src.js)
    // .pipe($.babel({
    //   presets: ['es2015']
    // }))
    .pipe(gulp.dest(paths.dest.js))
})

gulp.task('data', () => {
  gulp.src(paths.src.data)
    .pipe(gulp.dest(paths.dest.data))
})

gulp.task('images', () => {
  gulp.src(paths.src.images)
    .pipe($.imagemin())
    .pipe(gulp.dest(paths.dest.images))
})

gulp.task('webserver', () => {
  gulp
    .src(paths.dest.html)
    .pipe($.webserver({
      port: 8080,
      livereload: true,
      directoryListing: false
    }))
})

gulp.task('watch', () => {
  gulp.watch(paths.src.pug, ['pug'])
  gulp.watch(paths.src.less, ['less'])
  gulp.watch(paths.src.js, ['scripts'])
})

gulp.task('default', ['webserver', 'watch'])
gulp.task('build', ['pug', 'less', 'css', 'scripts', 'data'])
