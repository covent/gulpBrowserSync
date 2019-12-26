const gulp = require("gulp");
const browserSync = require("browser-sync");
var nodemon = require("gulp-nodemon");


gulp.task("nodemon", cb => {
    let started = false;

    return nodemon({
        script: "app.js"
    }).on("start", () => {
        if (!started) {
            cb();
            started = true;
        }
    });
});

//Task used to define browser-sync behaviour, ie refresh browser whenever a js css or public/** file gets changed
gulp.task(
    "browser-sync",
    gulp.series("nodemon", () => {
        browserSync.init(null, {
            proxy: "http://localhost:5000",
            files: ["*.js", "*.css", "public/**/*.*"],
            browser: "google chrome",
            port: 7000,
        });
    })
);

//Task used to define default behaviour, on default lauch browser-sync task followed by nodemon task
gulp.task('default', gulp.series('browser-sync', function() {

}));


