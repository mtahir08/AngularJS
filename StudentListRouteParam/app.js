/**
 * Created by hp on 6/29/2015.
 */
var app = angular.module('app', ['ngNewRouter', 'app.add', 'app.view', 'app.home','app.update','ngMaterial', 'ngAnimate', 'ngAria', 'firebase'])
    .controller('AppController', ['$router', '$location', AppController]);

AppController.$routeConfig = [
    {
        path: '/',
        component: 'home'
    },
    {
        path: '/add',
        component: 'add'
    },
    {
        path: '/view',
        component: 'view'
    },
    {
        path: '/update/:id',
        component: 'update'
    }

];


function AppController($router, $location) {
    this.goToView = function () {
        $location.path('/view');
    };
    this.goToAdd = function () {
        $location.path('/add');
    }
}