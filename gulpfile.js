var gulp=require('gulp'),
	uglify=require('gulp-uglify'),
	concat=require('gulp-concat'),
	clean=require('gulp-clean-dest'),
	del=require('del');

//合并->放到临时文件->压缩(目标目录)
gulp.task('concat',function(){
	return gulp.src('src/*.js')
	.pipe(concat('all.js',{newLine:';'}))
	.pipe(gulp.dest('tmp'))
});

gulp.task('uglify',['concat'],function(){
	return gulp.src('tmp/all.js')
	.pipe(uglify())
	.pipe(gulp.dest('dest'));
});

gulp.task('clean',['uglify'],function(){
	return del('tmp');
});

gulp.task('default',['concat','uglify','clean']);












