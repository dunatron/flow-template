var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    publicDir: './public',
    flowDir: '../../joy-flow-panels/assets'
};

gulp.task('css', function() {
    return gulp.src('./css/app.scss')
        .pipe(sass({
            includePaths: [config.bootstrapDir + '/assets/stylesheets'],
        }))
        .pipe(gulp.dest(config.publicDir + '/css'));
});

// Publish CSS To joy-flow-panels module
gulp.task('flow', function() {
    return gulp.src('./css/app.scss')
        .pipe(sass({
            includePaths: [config.bootstrapDir + '/assets/stylesheets'],
        }))
        .pipe(gulp.dest(config.flowDir + '/css'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
        .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('default', ['css', 'fonts', 'flow']);