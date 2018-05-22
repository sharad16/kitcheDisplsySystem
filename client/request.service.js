angular.module('MyApp')
  .service('requestService', ['$http', function($http) {
    self = this;

    //initially fetch data from server
    self.initLoadData = function(response, failure) {
      $http.get(INIT_LOAD_DATA).then(function(data) {
        if (data) {
          response(data);
        } else {
          failure();
        }
      })
    }

    //order the item
    self.confirmOrder = function(sendData, response, failure) {
      $http.post(PLACE_ORDER, sendData).then(function(data) {
        if (data) {
          response(data);
        } else {
          failure();
        }
      })
    }

    //change predicted value of item
    self.predictedValue = function(sendData, response, failure) {
      $http.post(SETTING_PREDICATED_VALUE, sendData).then(function(data) {
        if (data) {
          response(data);
        } else {
          failure();
        }
      })
    }
    //inform server that order is ready to serve
    self.orderServed = function(sendData, response, failure) {
      $http.post(DONE, sendData).then(function(data) {
        if (data) {
          response(data);
        } else {
          failure();
        }
      })
    }

  }]);
