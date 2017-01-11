angular.module('myApp').controller('openMsgCtrl', function($scope,$http, $location, $sessionStorage) {
   $scope.msgcount= $sessionStorage.msgcount;
    var senderEmail=$sessionStorage.senderEmail;
    var fname = $sessionStorage.fname;
    var lname = $sessionStorage.lname;
    var profileEmail=senderEmail;
    $scope.fname = fname;
    $scope.lname = lname;
    $scope.myemails=true;
        $scope.mymessageid= $sessionStorage.mymessageid;
        var id=$scope.mymessageid;
        $http.get('/myMessage/'+id).then(function(response){
                $scope.mymessage=response.data;
                $sessionStorage.forwardMsg=$scope.mymessage;
        });
        $http.get('/editedData/'+id);

        $scope.backFunc = function(){
            console.log("from back func");
            $location.path('/myinboxmsg');
        };

});
