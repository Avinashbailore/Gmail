angular.module('myApp').controller('inboxCtrl', function($scope,$http, $location,$sessionStorage) {
    var senderEmail=$sessionStorage.senderEmail;
    var fname = $sessionStorage.fname;
    var lname = $sessionStorage.lname;
    $scope.fname = fname;
    $scope.lname = lname;
    $scope.ins=true;
    $scope.msgcount=0;
     $http.get('/myInbox/' + senderEmail).then(function(response) {
                $scope.myinbox=response.data;
                var len=$scope.myinbox.length;
                for (var i = 0; i < len;i++) {
                   if(response.data[i].count==0)
                   {
                        $scope.msgcount=$scope.msgcount+1;
                   }             
               }
               $sessionStorage.msgcount = $scope.msgcount;
                $scope.myinbox.reverse();
        
            });


        $scope.refreshData = function(){
            $http.get('/myInbox/' + senderEmail).then(function(response) {
                $scope.myinbox=response.data;
                $scope.myinbox.reverse();
        
            });

        };

        $scope.myfunc = function(index,id){
            $sessionStorage.mymessageid=id;
            $location.path('/openMsg');
        };

        $scope.myfunc1 = function(index,id){
            $sessionStorage.mymessage1id=id;
            $location.path('/openMsg');
        };

        $scope.showClient = function() {
          $location.path('#/');
        };


        $scope.onFileSelect = function()
        {
            console.log("form file select");
        }
});

