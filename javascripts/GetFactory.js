'use strict';
var app = angular.module('myModule');

app.factory('authService2', function ($http) {
    return {
        Encrypt3: function (registration) {
            var serviceBase = 'http://88.150.164.30/CLD//Home/AgentEncrypt';
            var Encrypt = {
                vid: registration
            }
            
           return  $http({
                method: 'POST',
                url: serviceBase,
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: Encrypt,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;' }
            })
    .success(function (response) {
        return response;
    })
    .error(function (response) {
        return response;
    });


            //return $http.get('foo.json').then(function (result) {
            //    return result.data;
            //});
        }
    }
});



