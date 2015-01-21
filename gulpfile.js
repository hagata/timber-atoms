// 
var gulp = require('gulp'),
	concat = require('gulp-concat');

//path variables
var sassSources = ['sass/*/*/*.scss','sass/*/*.scss','sass/*.scss'],
	shopifyAssets = 'assets/';

//tasks

//This combines all the molecule level scss files and puts them into the assets/ folder to be used in out shopify theme
gulp.task('concat', function(){
	gulp.src(sassSources)
		.pipe(concat('timber.scss.liquid')) //underscores so its at the top
		.pipe(gulp.dest(shopifyAssets))
});

// watch 

gulp.task('watch', function(){
	gulp.watch(sassSources,['concat'])
});

//default
gulp.task('default',['concat','watch']);