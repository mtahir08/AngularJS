/**
 * Created by hp on 6/13/2015.
 */

app.controller('FbloginController',function($scope,FIREBASE_URL,$state){
    var ref=new Firebase(FIREBASE_URL);
    var user = null;

    $scope.tryLogin=function(){
        ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                $state.go('viewDua');
                console.log("Authenticated successfully with payload:", authData);
                user = authData;
            }
        });
    };
    $scope.getUser = function(){
        return user;
    };

});