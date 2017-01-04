angular.module('myApp').controller('sentboxctrl', function($scope,$http, $location, $sessionStorage) {
   
    $scope.sent=true;
    console.log("sentbox");
    var senderEmail=$sessionStorage.senderEmail;
    $scope.msgcount= $sessionStorage.msgcount;
    var fname = $sessionStorage.fname;
    var lname = $sessionStorage.lname;
    var profileEmail=senderEmail;
    $scope.fname = fname;
    $scope.lname = lname;
     $http.get('/mysentBox/' + profileEmail).then(function(response) {
                console.log(response.data);
                $scope.mysentbox=response.data;
                $scope.mysentbox.reverse();
        
            });
     $scope.myfuncs = function(index,id){
            console.log("inside myfunc");
            console.log(index);
            console.log(id);
            $sessionStorage.mymessage1id=id;
            $location.path('/hola1');
        };
     
   


    
});
