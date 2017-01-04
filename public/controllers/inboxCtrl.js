angular.module('myApp').controller('inboxCtrl', function($scope,$http, $location,$sessionStorage) {
   
    console.log("inboxctrl");
    var senderEmail=$sessionStorage.senderEmail;
    var fname = $sessionStorage.fname;
    var lname = $sessionStorage.lname;
    $scope.fname = fname;
    $scope.lname = lname;
    $scope.message = "hai";
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
            console.log("inside refresh");
            $http.get('/myInbox/' + senderEmail).then(function(response) {
                $scope.myinbox=response.data;
                $scope.myinbox.reverse();
        
            });

        };

        $scope.myfunc = function(index,id){
            $sessionStorage.mymessageid=id;
            $location.path('/hola');
        };

        $scope.myfunc1 = function(index,id){
            $sessionStorage.mymessage1id=id;
            $location.path('/hola');
        };

        $scope.showClient = function() {
          console.log("from showclient");
          $location.path('#/');
        };


        $scope.onFileSelect = function()
        {
            console.log("form file select");
        }
});

