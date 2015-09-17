/**
 * Created by hp on 6/29/2015.
 */
var data = {};
var Index=0;
var Id=0;
var app = angular.module('app.view', ['firebase', 'ngMdIcons'])
    .controller('ViewController', function ($firebaseArray, $mdDialog, $location) {
        var that = this;
        that.studentRecords = [];
        that.studentArrayName = [];
        var ref = new Firebase('https://studentrecords.firebaseio.com/records');
        this.studentRecords = $firebaseArray(ref);
        this.edit = function(id){
            $location.path('/update/'+id);
        };
        //var a=Firebase.ServerValue.TIMESTAMP;

        /*    that.update = function (msg) {
                console.log(msg);
                data = msg;

                /!*
                 ref.on('child_added',function(snap){
                 if(snap.key()==that.studentArrayName[index]){
                 console.log(snap.key()+snap.val());
                 ref.child(snap.key()).remove();
                 }
                 });
                 *!/
            };
    */
/*
        var $scope=this;
        $scope.showAdvanced = function(ev,record,index,id) {
            data=record;
            Index=index;
            Id=id;
            console.log(id);
            $mdDialog.show({
                controller: UpdateController,
                templateUrl: 'components/update/update.html',
                targetEvent: ev
            })
                .then(function(answer) {
                    $scope.alert = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.alert = 'You cancelled the dialog.';
                });
        };
*/
    });



