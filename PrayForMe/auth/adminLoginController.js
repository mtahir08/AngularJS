/**
 * Created by hp on 6/12/2015.
 */
app.controller('AdminLoginController',function($scope,$state,FIREBASE_URL,$firebase,$mdToast, $animate){
  var ref=new Firebase(FIREBASE_URL);
  //var auth=$firebaseAuth(ref);

  $scope.user={
    email:'',
    password:''
  };
  $scope.adminlogin=function(){
    ref.authWithPassword({
      email:$scope.user.email,
        password:$scope.user.password},function() {
          if ($scope.user.email === "admin@admin.com" && $scope.user.password === "admin") {
            $state.go('adminView');
          }
          else {
              $mdToast.show(
                  $mdToast.simple()
                      .content('Email or Password not Matched!!')
                      .position('top right')
                      .hideDelay(3000)
              );
          }
        }
);
};
/*  $scope.register=function(){
    auth.$createUser($scope.user).then(function(){
          $scope.login();
      },
      function(error){
        $scope.error=error;
      }


    );
  }*/
})