var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    publicDir: './public',
    flowPanelDir: '../../joy-flow-panels/assets',
    flowPageDir: '../../joy-flow-page/assets'
};

gulp.task('css', function() {
    return gulp.src('./css/app.scss')
        .pipe(sass({
            includePaths: [config.bootstrapDir + '/assets/stylesheets'],
        }))
        .pipe(gulp.dest(config.publicDir + '/css'));
});

// Publish CSS To joy-flow-panels module
gulp.task('flowPanel', function() {
    return gulp.src('./css/app.scss')
        .pipe(sass({
            includePaths: [config.bootstrapDir + '/assets/stylesheets'],
        }))
        .pipe(gulp.dest(config.flowPanelDir + '/css'));
});

// Publish flow-page.scss To joy-flow-page module
gulp.task('flowPage', function() {
    return gulp.src('./css/flow-page.scss')
        .pipe(sass({
            includePaths: [config.bootstrapDir + '/assets/stylesheets'],
        }))
        .pipe(gulp.dest(config.flowPageDir + '/css'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
        .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('default', ['css', 'fonts', 'flowPanel', 'flowPage']);