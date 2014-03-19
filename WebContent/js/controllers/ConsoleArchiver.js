function ConsoleArchiver(aname) {
  this.name = aname;
}

ConsoleArchiver.prototype.name = '';

ConsoleArchiver.prototype.archive = function (notification) {
  console.log(notification);
};
