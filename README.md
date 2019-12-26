# BrowserSyncNodemon KickStart

A JS KickStart App running on node.js via Nodemon. The project contains a gulp script (gulpfile.js) which defines two tasks to self re-compile the app and refresh browser whenever its components get changed.

## Getting Started

<ul>checkout project</ul>
<ul>install dependencies: npm install</ul>
<ul>start the app: gulp</ul>

The app runs on port 7000, browsersync should automatically opern a chrome browser.
 
Change app.js, public/index.html or public/site.css and enjoy the automatic lifecycle.

### Lifecycle Flow


```
gulp starts browsersync and Nodemon
Nodemon starts app.js -> App.js defines Express Node Server and starts on port 5000
Browsersync builds a proxy on port 7000 and injects a js which throug a web soocket pings node server to check for updates
--> Whenever the app changes Nodemon recompiles it
--> Whenever browsersync detects a change in the watched resources it refreshes browser 
```


### Prerequisites


```
npm, node, xcode(OSX)
```


### start

Just run gulp with: 


```
gulp
```

## Authors

* **Alex Lussana** 


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


