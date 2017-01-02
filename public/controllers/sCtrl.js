angular.module('myApp').controller('sCtrl', function($scope,$http, $location, $sessionStorage) {
   
    var senderEmail=$sessionStorage.senderEmail;
    var fname = $sessionStorage.fname;
    var lname = $sessionStorage.lname;
    var profileEmail=senderEmail;
    $scope.fname = fname;
    $scope.lname = lname;
    $scope.mysentemails=true;
    console.log("senbox msgs ctrl");
        $scope.mymessage1id= $sessionStorage.mymessage1id;
        console.log($scope.mymessage1id);
        var id=$scope.mymessage1id;
        $http.get('/mySentMessage/'+id).then(function(response){
                console.log(response.data);
                $scope.mysentmessages=response.data;
        });

        $scope.backSentFunc = function(){
            console.log("from back func");
            $location.path('/mysentboxmsg');
        };
     
   


    
});
