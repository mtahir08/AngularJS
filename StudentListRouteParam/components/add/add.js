/**
 * Created by hp on 6/29/2015.
 */
var app = angular.module('app.add', ['ngNewRouter', 'firebase'])
    .controller('AddController', ['$router', AddController]);


function AddController($router) {
    var that = this;

    /*
     that.sname='abc';
     that.fname='xyz';
     that.age=1;
     that.contact=2;
     that.address='3jejueuee';
     */
    /*  that.fname;
     that.sname;
     */
    that.studentRecords = [];
    var ref = new Firebase('https://studentrecords.firebaseio.com/records');
    //var fb=$firebaseArray(ref);
    /*
     var syncobj=fb.$asArray();
     */
    that.gender = {select: 'male'};
    that.addStudent = function () {
        var temp = {
            studentName: that.sname,
            fatherName: that.fname,
            age: that.age,
            contact: that.contact,
            address: that.address,
            gender: that.gender.select
        };
        console.log(temp)

        ref.push(temp);
    }
}