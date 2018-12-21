var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    postcss     = require('gulp-postcss'),
    autoprefixer= require('autoprefixer'),
    rename      = require('gulp-rename'),
    cleanCSS    = require('gulp-clean-css');
    concat      = require('gulp-concat');
    htmlmin     = require('gulp-htmlmin');
    uglify      = require('gulp-uglify');
    imagemin    = require('gulp-imagemin');
    isChanged   = require('gulp-changed');
    minify      = require('gulp-minify-css');
    plumber     = require('gulp-plumber');
;

var InputSass  = './src/scss/*.scss',
    OutputSass = './assets/css'
;

var InputJS  = './src/js/*.js',
    OutputJS = './assets/js'
;

var InputHTML  = './src/views/*.php',
    OutputHTML = './application/views'
;

var InputImages  = './src/images/*.+(jpg|png|gif)',
    OutputImages = './assets/images/main'
;

var InputCSS  = './src/css/*.css',
    OutputCSS = './assets/css'
;

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};


// Gulp task to minify SCSS files
gulp.task('sass', function () {
  return gulp
    .src(InputSass)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss([autoprefixer({ browsers: [
        'Chrome >= 40',
        'Firefox >= 30',
        'Explorer >= 8',
        'Edge >= 12',
        'iOS >= 6',
        'Safari >= 7',
        'ChromeAndroid >= 40',
        'Android >= 4'
    ],remove: false })]))
    .pipe(gulp.dest(OutputSass))

    //output minified css
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(OutputSass))
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src(InputJS)
    // checking error
    .pipe(plumber())
    // Minify the file
    .pipe(uglify())
    // .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    // Output
    .pipe(gulp.dest(OutputJS))
});

// Gulp task to minify HTML files
gulp.task('pages', function() {
  return gulp.src(InputHTML)
    .pipe(plumber())
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))

    .pipe(gulp.dest(OutputHTML));
});

// Gulp task to minify Images files
gulp.task('images', function() {
    gulp.src(InputImages)
        .pipe(isChanged(OutputImages))
        .pipe(imagemin())
        .pipe(gulp.dest(OutputImages))
});

// Gulp task to minify CSS files
gulp.task('css', function(){
   gulp.src(InputCSS)
     // checking error
    .pipe(plumber())
    //create competibel to any browser
    .pipe(postcss([autoprefixer({ browsers: [
        'Chrome >= 40',
        'Firefox >= 30',
        'Explorer >= 8',
        'Edge >= 12',
        'iOS >= 6',
        'Safari >= 7',
        'ChromeAndroid >= 40',
        'Android >= 4'
    ],remove: false })]))
    // minify css
   .pipe(minify())
   .pipe(gulp.dest(OutputCSS));
});

gulp.task('watch', function (){
    gulp.watch(InputSass, ['sass']);
    gulp.watch(InputCSS, ['css']);
    gulp.watch(InputJS, ['scripts']);
    gulp.watch(InputHTML, ['pages']);
    gulp.watch(InputImages, ['images']);
  // Other watchers
})

//combine all task
gulp.task('default', ['sass']);
