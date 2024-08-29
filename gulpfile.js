const gulp = require('gulp');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const tailwindcss = require('tailwindcss');
const postcss = require('gulp-postcss');
const cleanCSS = require('gulp-clean-css');
const livereload = require('gulp-livereload');

const paths = {
    scss: {
        src: './src/scss/**/*.scss',
        dest: './dist/css/'
    },
    html: {
        src: './index.html'
    }
};

// Função para compilar SCSS e aplicar Tailwind
function style() {
    const plugins = [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer')
    ];

    return gulp.src(paths.scss.src)
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError)) // Compila SCSS
        .pipe(postcss(plugins)) // Aplica Tailwind e Autoprefixer
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(gulp.dest(paths.scss.dest))
        .pipe(cleanCSS()) // Minifica para produção
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.scss.dest))
        .pipe(livereload());
}

// Função para recarregar a página HTML
function htmlWatch() {
    livereload.listen();
    return gulp.src(paths.html.src)
        .pipe(livereload());
}

// Função de observação
function watch() {
    gulp.watch(paths.scss.src, style);
    gulp.watch(paths.html.src, htmlWatch);
}

const build = gulp.series(style, watch);

gulp.task('default', build);
