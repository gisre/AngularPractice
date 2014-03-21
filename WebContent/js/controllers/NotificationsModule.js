angular.module('notificationsApp', ['archiver'])


  .provider('notificationsService', function () {

    var config = {
      maxLen : 10,
      shouldArchive : true
    };
    var notifications = [];

    return {

      setMaxLen : function(maxLen) {
        config.maxLen = maxLen || config.maxLen;
      },

      $get : function(configuredArchiver) {
        return {
          push:function (notification) {
            var notificationToArchive;
            var newLen = notifications.unshift(notification);
            if (newLen > config.maxLen) {
              notificationToArchive = notifications.pop();
              configuredArchiver.archive(notificationToArchive);
            }
          },
          getCurrent:function () {
            return notifications;
          }
        };
      }
    };
  })
  
  .config(function(notificationsServiceProvider, superConsoleArchiverServiceProvider, consoleArchiverServiceProvider, $provide){
    notificationsServiceProvider.setMaxLen(5);
    //$provide.provider('configuredArchiver',consoleArchiverServiceProvider);
    $provide.provider('configuredArchiver',superConsoleArchiverServiceProvider);
  });

