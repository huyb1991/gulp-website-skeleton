#[Gulp](http://gulpjs.com/) - Build Website Skeleton
1. Run web server with [gulp-connect](https://www.npmjs.com/package/gulp-connect).
2. Auto compile [sass](http://sass-lang.com/) files.
3. Auto minify css with [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css).
4. Auto minify js with [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) and compress js with [gulp-concat](https://github.com/contra/gulp-concat).

##Installation 
```
$ npm install
$ gulp
```
If you got problem with [Grunt watch error - Waiting…Fatal error: watch ENOSPC](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) with `node_modules/gaze/`, run command below:
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

##What's included
Within the download you'll find the following directories and files:
```
gws/
|- src/
|   |- img/
|   |- js/
|       |- min/          # JS file after minify
|       |- main.js
|   |- sass/             # SMACSS structure
|       |- base/
|       |- components/
|       |- layouts/
|       |- states/
|       |- themes/
|       |- main.scss     # Main SaSS file
|
|   |- index.html
|   |- main.css          # Main CSS file after minify
|   |- main.js           # Main JS file after compress
|
|- gulpfile.js
|- package.json
```