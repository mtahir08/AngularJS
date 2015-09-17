/**
 * Created by hp on 6/5/2015.
 */
var app=angular.module('PrayForMe',['ngMaterial','ngAria','ngMessages','ui.router','firebase']);
var temp="";
var counter=0;
app.constant('FIREBASE_URL','https://prayforme.firebaseio.com/dua');
//var i=0;
/*var retrieveData=[];
var publicData=[];
var privateData=[];*/
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/viewDua');
    $stateProvider
        .state('viewDua',{
            url:'/viewDua',
            templateUrl:'viewDua/viewDua.html',
            controller:'ViewDuaController'
        })
        .state('newDua',{
            url:'/newDua',
            templateUrl:'newDua/newDua.html',
            controller:'newDauController'
        })
        .state('adminLogin', {
            url: '/adminLogin',
            templateUrl: 'auth/adminLogin.html',
            controller:'AdminLoginController'

        })
        .state('userLogin', {
            url: '/userLogin',
            templateUrl:'userLogin/userLogin.html',
            controller:'FbloginController'

        })
        .state('adminView', {
            url: '/adminView',
            templateUrl:'adminView/adminView.html',
            controller:'adminViewController'

        });
       /* .state('register', {
            url: '/register',
            templateUrl: 'auth/register.html',
            controller:'AuthController'

        })*/
});

