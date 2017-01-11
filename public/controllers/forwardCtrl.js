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
   $scope.final=final;
   $scope.sendForwardEmail = function(){
	   	console.log("forward emails");
	   	console.log($scope.forwardEmail);
	   	$scope.forwardMsg.emailTo = $scope.forwardEmail;
	   	$scope.final.emailTo = $scope.forwardEmail;
	   	$scope.final.message = $scope.forwardMsg.message;
	   	$scope.final.count = 0;
	   	$scope.final.senderEmail = profileEmail;
	   	$scope.final.senderFname = $scope.forwardMsg.senderFname;
	   	$scope.final.senderLname = $scope.forwardMsg.senderLname;
	   	$scope.final.subject = $scope.forwardMsg.subject;
	   	console.log($scope.final);
	   	if($scope.forwardEmail == null){
	   		alert("please enter an email");
	   	}
	   	else
	   	{
	   		$http.post('/sendForwardEmail',$scope.final).then(function(response){
	   			if(response.data=="noemail")
	   			{
	   				alert("enter an valid registered email");
	   			}
	   			else{
	   				alert("msg sent");
	   				$location.path('/myinboxmsg');
	   			}
	   		});
	   	}

   };

   
    
});
