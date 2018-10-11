const gulp = require('gulp')

// CSS
const sass = require('gulp-sass')
const concatCss = require('gulp-concat-css')
const uglifycss = require('gulp-uglifycss')

gulp.task('sass:compile', (done) => {
    gulp.src('src/public/sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('src/public/css'))
    done()
})

gulp.task('css:concat', (done) => {
    gulp.src('src/public/css/**/*.css')
        .pipe(concatCss('bundle.css'))
        .pipe(gulp.dest('src/public/css/bundle'))
    done()
})

gulp.task('css:uglify', (done) => {
    gulp.src('src/public/css/bundle/**/*.css')
        .pipe(uglifycss({
            "maxLineLen": 150,
            "uglyComments": true
        }))
        .pipe(gulp.dest('src/public'))
    done()
})

gulp.task('sass:watch', () => {
    gulp.watch('src/public/sass/**/*.scss', ['sass:compile', 'css:concat', 'css:uglify'])
})

// JS
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
 
// gulp.task('js:compile', () =>
//     gulp.src('src/**/*.js')
//         .pipe(sourcemaps.init())
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(concat('all.js'))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('dist'))
// )

gulp.task('js:compile', () =>
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
)

gulp.task('js:watch', () => {
    gulp.watch('src/**/*.js', ['js:compile'])
})