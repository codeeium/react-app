* // Installation commands
* // Run the following commands to set up the project
* // 1. Initialize npm
* npm init -y
* 
* // 2. Install dependencies
* npm install react react-dom
* 
* // 3. Install development dependencies
* npm install --save-dev webpack webpack-cli webpack-dev-server @babel/core babel-loader @babel/preset-env @babel/preset-react style-loader css-loader
* 
* // 4. Create necessary folders and files
* mkdir src dist
* printf "<!DOCTYPE html>\n<html>\n<head>\n<title>React App</title>\n</head>\n<body>\n<div id='root'></div>\n</body>\n</html>" > dist/index.html
* 