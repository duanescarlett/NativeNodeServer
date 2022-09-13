var EventEmitter = require('events').EventEmitter,
    ee = new EventEmitter();

function callback() {
  console.log("Callback has been called!");
}

ee.once("event", callback);
ee.emit("event");
ee.emit("event");

ee.on("event", callback);
ee.emit("event");
ee.emit("event");
ee.removeListener("event", callback);
ee.emit("event");

ee.on("event", callback);
ee.emit("event");
ee.removeAllListeners("event");
ee.emit("event");