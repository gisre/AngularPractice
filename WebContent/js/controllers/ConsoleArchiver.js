angular.module('archiver', [])
  .provider('consoleArchiverService', function () {
    return {
      $get : function() {
        return {
          archive:function (archivedNotification) {
            console.log(archivedNotification);
          }
        };
      }
    };
  })
  .provider('superConsoleArchiverService', function () {
    return {
      $get : function() {
        return {
          archive:function (archivedNotification) {
            console.log('super ' + archivedNotification);
          }
        };
      }
    };
  });

