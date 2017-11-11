var gulp =	 		require('gulp'),
	sass = 			require('gulp-sass'),
	concat = 		require('gulp-concat'),
	uglify = 		require('gulp-uglifyjs'),
	browserSync =	require('browser-sync'),
	cssnano =		require('gulp-cssnano'),
	rename = 		require('gulp-rename'),
	del =			require('del'),
	imagemin = 		require('gulp-imagemin'),
	pngquant =		require('imagemin-pngquant'),
	cache = 		require('gulp-cache'),
	autoprefixer = 	require('gulp-autoprefixer'),
	rigger =		require('gulp-rigger');


gulp.task('default', function() {
	return gulp.src(['www/scss/**/*.scss','www/scss/**/*.sass'])
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 8', 'ie 7'], { cascade: true}))
		.pipe(gulp.dest('www/css'))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('scripts', function() {
	return gulp.src('www/js/libs.js')
		.pipe(rigger())
		.pipe(concat('main.js'))
		.pipe(gulp.dest('www/js'))
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('www/js'));
});


gulp.task('css-libs',['default'], function(){
	return gulp.src('www/css/main.css')
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('www/css'));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'www'
		},
		notify: false
	});
});

gulp.task('clean', function() {
	return del.sync('build');

});

gulp.task('clean', function() {
	return cache.clearAll();
});

gulp.task('img', function() {
	return gulp.src('www/img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressice: true,
			svgoPlugins: [{removeViewBox: false}],
			une: [pngquant()]
			})))
			.pipe(gulp.dest('build/img'));
});

gulp.task('watch',['browser-sync','css-libs','scripts'], function() {
	gulp.watch(['www/scss/**/*.scss','www/scss/**/*.sass'], ['default']);
	gulp.watch('www/*.html', browserSync.reload);
	gulp.watch('www/js/**/*.js', browserSync.reload); 
});

gulp.task('build',['clean','img', 'default', 'scripts'], function() {

	var buildCss = gulp.src([
		'www/css/main.css',
		'www/css/main.min.css'
		])
		.pipe(gulp.dest('build/css'));
	var buildFonts = gulp.src('www/fonts/**/**.*')
		.pipe(gulp.dest('build/fonts'));
	var buildJs = gulp.src('www/js/**/*')
		.pipe(gulp.dest('build/js'));
	var buildHtml = gulp.src('www/*.html')
		.pipe(gulp.dest('build'));
});
