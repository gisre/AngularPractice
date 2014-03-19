angular.module('archivermod', [])
  .factory('notificationService', function(notificationsArchive) {
    var MAX_LEN = 5;
    var notifications = [];
    
    return {
      push:function (notification) {
        var notificationToArchive;
        var newLen = notifactions.unshift(notification);
        
        // rely on closure scope
        if (newLen > MAX_LEN) {
          notificationToArchive = this.notifications.pop();
          notificationsArchive.archive(notificationToArchive);
        }
      },
      getCurrent:function(){
        return notifications;
      }
    };
  });