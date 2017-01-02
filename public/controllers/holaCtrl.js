angular.module('myApp').controller('holaCtrl', function($scope,$http, $location, $sessionStorage) {
   
    var senderEmail=$sessionStorage.senderEmail;
    var fname = $sessionStorage.fname;
    var lname = $sessionStorage.lname;
    var profileEmail=senderEmail;
    $scope.fname = fname;
    $scope.lname = lname;
    $scope.myemails=true;
    console.log("hola sentbox");
        $scope.mymessageid= $sessionStorage.mymessageid;
        console.log($scope.mymessageid);
        var id=$scope.mymessageid;
        $http.get('/myMessage/'+id).then(function(response){
                console.log(response.data);
                $scope.mymessage=response.data;
        });

        $scope.backFunc = function(){
            console.log("from back func");
            $location.path('/myinboxmsg');
        };
     
   


    
});
