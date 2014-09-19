
module.exports = function Client() {
	_db = {};
};

Client.prototype.exists = function(sid, callback) {
	if (!_db[sid]) {
		this._db[sid] = { sid: sid };
	}
	
	callback(null, 0);
};

Client.prototype.set = function(sid, info, callback) {

};

Client.prototype.setex = function(sid, ttl, info, callback) {

};

Client.prototype.get = function(sid, callback) {

};

Client.prototype.expire = function(sid, ttl, callback) {

};

Client.prototype.del = function(sid, callback) {

};

Client.prototype.keys = function(str, callback) {

};

Client.prototype.flushall = function(callback) {

};