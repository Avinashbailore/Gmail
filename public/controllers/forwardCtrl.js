angular.module('myApp').controller('forwardCtrl', function($scope,$http, $location, $sessionStorage) {
   console.log("inside froward still trying");
   var final={};
   $scope.msgcount= $sessionStorage.msgcount;
    var senderEmail=$sessionStorage.senderEmail;
    var fname = $sessionStorage.fname;
    var lname = $sessionStorage.lname;
    var profileEmail=senderEmail;
    $scope.fname = fname;
    $scope.lname = lname;
   $scope.forward=true;
   $scope.forwardMsg = $sessionStorage.forwardMsg;
   console.log("jksdghafkjasd");
   console.log($scope.forwardMsg);
   $scope.final=final;
   $scope.sendForwardEmail = function(){
   	console.log("forward emails");
   	// console.log($scope.forwardEmail);
   	$scope.forwardMsg.emailTo = $scope.forwardEmail;
   	console.log($scope.forwardMsg);

   }

    
});
