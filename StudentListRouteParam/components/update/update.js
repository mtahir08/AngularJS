/**
 * Created by hp on 7/3/2015.
 */
/**
 * Created by hp on 6/29/2015.
 */
/*
 var Index;
 var Id;
 */
var app = angular.module('app.update', ['firebase'])
    .controller('UpdateController', ['$routeParams', '$firebaseObject','$location', UpdateController]);

function UpdateController($routeParams, $firebaseObject,$location) {
    var ref = new Firebase('https://studentrecords.firebaseio.com/records');
    this.Id = $routeParams.id;
    //var $scope=this;
    this.data = {};
    this.data = $firebaseObject(ref.child(this.Id));
    console.log(this.data)
    var $scope = this;
    this.data.$loaded()
        .then(
        function () {
            $scope.sname = $scope.data.studentName;
            $scope.fname = $scope.data.fatherName;
            $scope.age = $scope.data.age;
            $scope.contact = $scope.data.contact;
            $scope.address = $scope.data.address;
            $scope.gender = $scope.data.gender;

        });
    this.update = function() {

        ref.child(this.Id).set({
            studentName: $scope.sname,
            fatherName: $scope.fname,
            age: $scope.age,
            contact: $scope.contact,
            address: $scope.address,
            gender: $scope.gender

        });
        $location.path('/view');
    };

}
    /* that.name = [];//another way to fetch in array
     that.name = $firebaseArray(ref);

     that.name.$loaded()
     .then(function () {
     angular.forEach(that.name, function (user) {
     console.log(user);
     })
     })
     ;

     }*/


