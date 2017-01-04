angular.module('myApp').controller('holaCtrl', function($scope,$http, $location, $sessionStorage) {
   $scope.msgcount= $sessionStorage.msgcount;
    var senderEmail=$sessionStorage.senderEmail;
    var fname = $sessionStorage.fname;
    var lname = $sessionStorage.lname;
    var profileEmail=senderEmail;
    $scope.fname = fname;
    $scope.lname = lname;
    $scope.myemails=true;
    console.log("hola sentbox");
        $scope.mymessageid= $sessionStorage.mymessageid;
        var id=$scope.mymessageid;
        
        // .then(function(response) {
        //     // $location.path('addedCustomer');
        // })
        $http.get('/myMessage/'+id).then(function(response){
                $scope.mymessage=response.data;
        });
        $http.get('/editedData/'+id);

        $scope.backFunc = function(){
            console.log("from back func");
            $location.path('/myinboxmsg');
        };
     
   


    
});
