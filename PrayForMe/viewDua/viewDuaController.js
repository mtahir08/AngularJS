/**
 * Created by hp on 6/13/2015.
 */
var temp="";
var counter=0;

app.controller('ViewDuaController',function($scope,$firebase,FIREBASE_URL,$state) {
    $scope.retrieveData = [];
    $scope.publicData=[];
    $scope.privateData=[];
    $scope.uniqueID = [];
    var ref = new Firebase(FIREBASE_URL);
    var fb = $firebase(ref);
    var syncObject = fb.$asObject();
    syncObject.$bindTo($scope, 'dua');
    ref.on("child_added", function (snap) {
        var obj=snap.val();
        $scope.uniqueID.push(snap.name());
        $scope.retrieveData.push(obj);

        if(obj.privacy==="Public"){
            $scope.publicData.push(obj)
        }
        else
        {
            $scope.privateData.push(obj);
        }
    });
    $scope.Counter = function (obj) {
        var data = $scope.retrieveData.indexOf(obj);
        //       console.log(data);
        //  console.log($scope.privateData);
        var id = $scope.uniqueID[data];
        //     console.log(data);
        ref.child(id).set({
            name: obj.name,
            dua: obj.dua,
            counter: ++obj.counter,
            clicked: true,
            privacy:obj.privacy

        });
    };

});
