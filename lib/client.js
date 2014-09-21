var Store = require('./store');

var Client = module.exports = function() {
	this._store = Store();
};

Client.prototype.timeRun = function() {
	var _store = this._store;

	function _timeRunning() {
    for(var i in _store.sessions) {
    	if (_store.sessions.hasOwnProperty(i)) {
    		var each = _store.sessions[i];

    		if (each && !each.ttl) {
    			_store.delete(each._id);
    		};

    		if (each && each.ttl && each.ttl > 0) {
    			each.ttl--;
    		} 
    	}
    }
  }

  setInterval(_timeRunning, 1000);
};

Client.prototype.exists = function(sid, callback) {
	var _this = this;

	this._store.read(sid, function(err, data) {
		if (data) {
			callback(err, 1);
		} else {
			_this._store.create(sid, function(err, data) {
				callback(err);
			});
		}
	});
};

Client.prototype.set = function(sid, info, callback) {
	var _this = this;

	this._store.read(sid, function(err, data) {
		if (data) {
			data.info = info;		
			_this._store.update(data, function(err, data) {
				callback(err, 1);
			});
		} else {
			callback(err, 1);
		}
	});
};

Client.prototype.setex = function(sid, ttl, info, callback) {
	var _this = this;

	this._store.read(sid, function(err, data) {
		if (data) {
			data.info = info;
			data.ttl = ttl;
			_this._store.update(data, function(err, data) {
				callback(err, 1);
			});
		} else {
			callback(err, 1);
		}
	});
};

Client.prototype.get = function(sid, callback) {
	this._store.read(sid, function(err, data) {
		var info = data ? data.info : null;
		callback(err, info);
	});
};

Client.prototype.expire = function(sid, ttl, callback) {
	var _this = this;
	this._store.read(sid, function(err, data) {
		if (data && data.ttl && data.ttl > 0) {
			data.ttl = ttl;
			_this._store.update(data, function(err, data) {
				callback(err, 1);
			})
		}
	});
};

Client.prototype.del = function(sid, callback) {
	this._store.delete(sid, function(err) {
		callback(err, 1);
	});
};

Client.prototype.keys = function(str, callback) {
	callback(null, this._store.sessions);
};

Client.prototype.flushall = function(callback) {
	delete this._store.sessions;
	this._store.sessions = {};

	callback(1);
};var Store = require('./store');

var Client = module.exports = function() {
	this._store = Store();
};

Client.prototype.timeRun = function() {
	var _store = this._store;

	function _timeRunning() {
    for(var i in _store.sessions) {
    	if (_store.sessions.hasOwnProperty(i)) {
    		var each = _store.sessions[i];

    		if (each && !each.ttl) {
    			_store.delete(each._id);
    		};

    		if (each && each.ttl && each.ttl > 0) {
    			each.ttl--;
    		} 
    	}
    }
  }

  setInterval(_timeRunning, 1000);
};

Client.prototype.exists = function(sid, callback) {
	var _this = this;

	this._store.read(sid, function(err, data) {
		if (data) {
			callback(err, 1);
		} else {
			_this._store.create(sid, function(err, data) {
				callback(err);
			});
		}
	});
};

Client.prototype.set = function(sid, info, callback) {
	var _this = this;

	this._store.read(sid, function(err, data) {
		if (data) {
			data.info = info;		
			_this._store.update(data, function(err, data) {
				callback(err, 1);
			});
		} else {
			callback(err, 1);
		}
	});
};

Client.prototype.setex = function(sid, ttl, info, callback) {
	var _this = this;

	this._store.read(sid, function(err, data) {
		if (data) {
			data.info = info;
			data.ttl = ttl;
			_this._store.update(data, function(err, data) {
				callback(err, 1);
			});
		} else {
			callback(err, 1);
		}
	});
};

Client.prototype.get = function(sid, callback) {
	this._store.read(sid, function(err, data) {
		var info = data ? data.info : null;
		callback(err, info);
	});
};

Client.prototype.expire = function(sid, ttl, callback) {
	var _this = this;
	this._store.read(sid, function(err, data) {
		if (data && data.ttl && data.ttl > 0) {
			data.ttl = ttl;
			_this._store.update(data, function(err, data) {
				callback(err, 1);
			})
		}
	});
};

Client.prototype.del = function(sid, callback) {
	this._store.delete(sid, function(err) {
		callback(err, 1);
	});
};

Client.prototype.keys = function(str, callback) {
	callback(null, this._store.sessions);
};

Client.prototype.flushall = function(callback) {
	delete this._store.sessions;
	this._store.sessions = {};

	callback(1);
};