const { Clean } = require('clean');
var gulp = require('gulp')
    rename = require('gulp-rename')
    autoprefixer = require('gulp-autoprefixer')
    sass = require("gulp-sass")(require('sass'))
    concat = require('gulp-concat');
    tailwindcss = require('tailwindcss');

    const livereload = require('gulp-livereload');
    const postcss = require('gulp-postcss');
     const cleanCSS = require('gulp-clean-css');
     
var paths = {
    estilos: {
        src: "./src/scss/**/*.scss",
        srccss: "./src/css/**/*.css",
        dest: "./dist/css/"
    },
    
};




function style_tailwind() {
      const plugins = [
        tailwindcss('./tailwind.config.js')
    ];
    return gulp
    .src('src/css/input.css')
    .pipe(postcss(plugins))
      .pipe(rename('output.css'))

      .pipe(gulp.dest(paths.estilos.dest));
  }

  function html_watch(){
    // Inicia o servidor de livereload
    // Monitora o arquivo HTML e recarrega a página no navegador quando houver alterações
    livereload.listen();
    style_tailwind();
    return gulp.src('index.html')
        .pipe(livereload());


  }

function style_dev() {
    return gulp.src(paths.estilos.src)
    
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(gulp.dest(paths.estilos.dest));
}

function style_prod() {
    return gulp.src(paths.estilos.src)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        
        .pipe(gulp.dest(paths.estilos.dest));
}

function watch() {
   
    gulp.watch(paths.estilos.src, style_dev);
    gulp.watch(paths.estilos.src, style_prod);
    gulp.watch(paths.estilos.src, style_tailwind);
    gulp.watch('index.html', html_watch);
}

var build = gulp.series(gulp.parallel( style_prod, style_dev, style_tailwind, watch, html_watch));




gulp.task(build);
gulp.task('default', build);


