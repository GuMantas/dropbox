const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const csso = require("gulp-csso");
const include = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const sync = require("browser-sync").create();
const minify = require("gulp-minify");
const gulp = require("gulp");
function html() {
    return src("src/**.html")
        .pipe(
            include({
                prefix: "@@",
            })
        )
        .pipe(
            htmlmin({
                collapseWhitespace: true,
                removeComments: true,
            })
        )
        .pipe(dest("dist"));
}
function users(){
    return src("src/parts/users.html")
    .pipe(dest("dist"));
}
function scss() {
    return src("src/styles/**.scss")
        .pipe(sass())
        .pipe(autoprefixer("last 2 versions"))
        .pipe(csso())
        .pipe(concat("style.css"))
        .pipe(dest("dist"));
}
function js() {
    return src("src/js/**.js")
    .pipe(dest("dist"));
}

function pic() {
    return src("src/img/**.png").pipe(dest("dist/img"));
}

async function clear() {
    del("dist");
}

function serve() {
    sync.init({
        server: "./dist",
    });
    watch("src/**.html", series(html)).on("change", sync.reload);
    watch("src/parts/**.html", series(html)).on("change", sync.reload);
    watch("src/styles/**.scss", series(scss)).on("change", sync.reload);
    watch("src/img/**.png", series(pic)).on("change", sync.reload);
    watch("src/js/**.js", series(js)).on("change", sync.reload);

}
exports.start = series( html, users, scss,js, pic, serve);
exports.reload = series(html, users, scss, pic,js, serve);
exports.delete = series(clear);