const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const subscribeMessage = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};
eventEmitter.addListener("subscribe", subscribeMessage);
console.log("invoke event listener ");
eventEmitter.emit("subscribe", "College Wallah");
console.log("invoking listner again after removing");
eventEmitter.removeListener("subscribe", subscribeMessage);
eventEmitter.emit("subscribe", "College Wallah");