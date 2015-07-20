/*global angular: false*/
/*jslint regexp: true */

/**
 * @ngdoc service
 * @name siApp.myServices
 * @description
 * # myServices
 * Service in the siApp.
 */


var myServices = angular.module('smartBeach.services', []);

myServices.factory('cordovaReady', function() {
  'use strict';

  return function (fn) {

    var queue = [];

    var impl = function () {
      queue.push(Array.prototype.slice.call(arguments));
    };

    document.addEventListener('deviceready', function () {
      queue.forEach(function (args) {
        fn.apply(this, args);
      });
      impl = fn;
    }, false);

    return function () {
      return impl.apply(this, arguments);
    };
  };
});
