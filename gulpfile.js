var gulp = require("gulp");
var sass = require("gulp-sass");

sass.compiler = require("node-sass");

// Configure paths below
var paths = {
    html: "src/**/*.html",
    scss: "src/styles/**/*.scss",
    images: "src/images/**/*.png"
};

var distPaths = {
    html: "dist/",
    scss: "dist/styles",
    images: "dist/images"
};

// Compile sass
gulp.task("sass", function() {
    return gulp
        .src(paths.scss)
        .pipe(sass.sync().on("error", sass.logError))
        .pipe(gulp.dest(distPaths.scss));
});

// Copy html files over on change
gulp.task("html", function(){
    return gulp.src(paths.html)
    .pipe(gulp.dest(distPaths.html));
});

// Copy image files
gulp.task("images", function(){
    return gulp.src(paths.images)
    .pipe(gulp.dest(distPaths.images));
});

// Watch for changes
gulp.task("watch", function() {
    gulp.watch(paths.scss, ["sass"]);
    gulp.watch(paths.html, ["html"]);
    gulp.watch(paths.images, ["images"]);
});

// Default tasks
gulp.task("default", ["sass", "images", "html", "watch"]);