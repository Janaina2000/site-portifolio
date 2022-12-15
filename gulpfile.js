var gulp = require('gulp')
    rename = require('gulp-rename')
    autoprefixer = require('gulp-autoprefixer')
    sass = require("gulp-sass")(require('sass'))

var paths = {
    estilos: {
        src: "./src/scss/**/*.scss",
        dest: "./src/css/"
    },
    
};

function style_dev() {
    return gulp.src(paths.estilos.src)
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.estilos.dest));
}

function style_prod() {
    return gulp.src(paths.estilos.src)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.estilos.dest));
}

function watch() {
    gulp.watch(paths.estilos.src, style_dev);
    gulp.watch(paths.estilos.src, style_prod);
}

var build = gulp.series( gulp.parallel( style_prod, style_dev, watch));


gulp.task(build);
gulp.task('default', build);


