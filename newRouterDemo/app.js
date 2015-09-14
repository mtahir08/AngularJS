/**
 * Created by hp on 6/29/2015.
 */
var app=angular.module('app',['ngNewRouter','app.home','app.view'])
        .controller('AppController',['$router','$location',AppController]);

AppController.$routeConfig=[
    {
        path:'/',
        component:'home'
    },
    {
        path:'/view',
        component:'view'
    }
];


function AppController($router,$location){
this.goToView=function(){
    $location.path('/view');
};
    this.goToHome=function(){
        $location.path('/');
    }
}