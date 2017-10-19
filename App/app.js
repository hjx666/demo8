/**
 * Created by Enter on 2017-10-17.
 */
var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/shop',{
        templateUrl:'App/view/shop.html',
        controller:'shopController',
    }).otherwise({
        redirectTo:'/shop'
    });
});