module.exports = function () {

    var result = {};

    var sessions = result.sessions = {};

    /**
     * Persists the session state giving it a session_id
     * @param session_id the session id
     * @param done  callback for when the session state is persisted
     */
    result.create = function (session_id , done) {
        var one = { _id: session_id };
        result.update(one, done);
    };

    /**
     * Retrieves the session state for the given id
     * @param session_id the session id
     * @param done callback for when the session state is retrieved
     */
    result.read = function (session_id , done) {
        if(done) done(null, sessions[session_id]);
    };

    /**
     * Updates the session state for the given session id
     * @param session_state the new session state
     * @param done  callback for when the session state is retrieved
     */
    result.update = function (session_state , done) {
        sessions[session_state._id] = session_state;
        if(done) done(null, session_state);
    };

    /**
     * Deletes the session state for the given id
     * @param session_id    the session id
     */
    result.delete = function (session_id, done) {
        delete sessions[session_id];
        if(done) done(null);
    };

    return result;
}

