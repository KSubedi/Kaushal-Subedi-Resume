# Kaushal Subedi's Resume

This is a resume I built using web technologies. It is responsive and also has a print mode that lets you compile a PDF from it. Feel free to fork for your own uses.

### Development
First clone the repository and do a `npm install` to get all the dependencies installed. Then run `npm start` which will start `gulp` for compilation, `livereload` for live changes while editing and `http-server` to serve the static files for development. Then you can head over to `http://localhost:8080` and start editing the files in the `src` directory. Install the livereload extension and you will also see changes as you make them. The output files will be available in the `dist` folder which you can deploy to any static file server.

### Print Mode
Since most companies ask for a PDF version of your resume, I tried to make this resume PDF friendly, I call this print mode. It uses `wkhtmltopdf` to render the PDF file from the source. To enable print mode, first install `wkhtmltopdf` by whatever method you prefer, then change the variable on top of the `src/styles/style.scss` file called `$print` to `true`. Then start the development server using `npm start` and use `./build-pdf.sh` to build the PDF. It will be saved under the `dist` folder as `resume.pdf`. Feel free to edit the `build-pdf.sh` file to modify settings for `wkhtmltopdf`.