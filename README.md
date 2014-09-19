restify-memory-session
======================

A simple session for restify, stored just in memory.
Attention that when the restify server shut down, and all of the session will be destroied.


## Install
`npm install restify-memory-session --save`

## Usage

#### config session

```
session.config = {
    /**
     * @cfg {Integer} ttl=600 The time to live for the session in seconds
     */
    ttl: 600, // 10min
    /**
     * @cfg {Boolean} debug=true true to enable debug session
     */
    debug: false,
    /**
     * @cfg {Integer} sidLength=40 The number of characters to create the session ID.
     */
    sidLength: 40,
    /**
     * @cfg {Boolean} persist=false Persistence of session
     * If persist is false, the session will expire after the ttl config.
     * If persist is true, the session will never expire and ttl config will be ignored.
     */
    persist: false,
    /**
     * @cfg {String} sidHeader='Session-Id' The Header section name to store the session identifier
     */
    sidHeader: 'Session-Id'
};

```

#### common use

use sessionManager we'll check the request header have the session field in session config(the default header is 'Session-Id') or not, we'll refresh the passed session and write the data in this session to req.session if possible.

```
var restify = require('restify'),
	session = require('restify-memory-session');
	
	var server = restify.createServer({
		name: 'My App'
	});
	
	// add a middleware for refresh session.
	server.use(session.sessionManager);
	
	server.listen(3000);
	
```

#### create a session

```
var session = require('restify-memory-session');

// create a sid.
var sid = session.create();
 
```

#### destroy a session

```
var session = require('restify-memory-session');
...
session.destroy(sid);

```

#### save session data

```
var session = require('restify-memory-session');

var data = {
	user : {
		id: 0,
		name: 'Wayne'
	}
};
session.save(sid, data);

```


#### get a session data

```
var session = require('restify-memory-session');

var data = session.get(sid);

```