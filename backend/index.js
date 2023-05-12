const EventEmitter = require("events");

const event = new EventEmitter ();

event.on("second", () => {
  console.log("Second event");
});

event.on("first", () => {
  console.log("Welcome!");
});

event.emit("first");

event.on("first", () => {
  event.emit("second");
  console.log("First Event");
});
event.emit("first")