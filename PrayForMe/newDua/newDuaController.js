/**
 * Created by hp on 6/13/2015.
 */
var temp="";
var counter=0;

app.controller('newDauController',function($scope,$firebase,FIREBASE_URL,$state){

    var ref=new Firebase(FIREBASE_URL);

    var fb=$firebase(ref);
    var syncObject = fb.$asObject();
    syncObject.$bindTo($scope,'dua');

    $scope.say=function() {
        temp = {
            name: $scope.name,
            dua: $scope.details,
            clicked:false,
            counter:0,
            privacy:$scope.checked.check
        };
        fb.$push(temp);

        $scope.name="";
        $scope.details="";
        $scope.checked={
            check:'Public'
        };
    };

    $scope.checked={
        check:'Public'
    };
    $scope.clear= function () {
        $scope.name="";
        $scope.details="";
    }
});