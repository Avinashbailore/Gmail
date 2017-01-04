angular.module('myApp').controller('sCtrl', function($scope,$http, $location, $sessionStorage) {
   $scope.msgcount= $sessionStorage.msgcount;
    var senderEmail=$sessionStorage.senderEmail;
    var fname = $sessionStorage.fname;
    var lname = $sessionStorage.lname;
    var profileEmail=senderEmail;
    $scope.fname = fname;
    $scope.lname = lname;
    $scope.mysentemails=true;
    console.log("senbox msgs ctrl");
        $scope.mymessage1id= $sessionStorage.mymessage1id;
        var id=$scope.mymessage1id;
        $http.get('/mySentMessage/'+id).then(function(response){
                $scope.mysentmessages=response.data;
        });

        $scope.backSentFunc = function(){
            $location.path('/mysentboxmsg');
        };
     
   


    
});
