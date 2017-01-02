angular.module('myApp').controller('inboxCtrl', function($scope,$http, $location, $sessionStorage) {
   
    console.log("inboxctrl");
    var senderEmail=$sessionStorage.senderEmail;
    var fname = $sessionStorage.fname;
    var lname = $sessionStorage.lname;
    $scope.fname = fname;
    $scope.lname = lname;
    $scope.message = "hai";
    $scope.ins=true;
     $http.get('/myInbox/' + senderEmail).then(function(response) {
                console.log(response.data);
                $scope.myinbox=response.data;
                $scope.myinbox.reverse();
        
            });


        $scope.refreshData = function(){
            console.log("inside refresh");
            $http.get('/myInbox/' + senderEmail).then(function(response) {
                console.log(response.data);
                $scope.myinbox=response.data;
                $scope.myinbox.reverse();
        
            });

        };

        $scope.myfunc = function(index,id){
            console.log("inside myfunc");
            console.log(index);
            console.log(id);
            $sessionStorage.mymessageid=id;
            
            // $http.get('/myMessage/'+id).then(function(response){
            //     console.log(response.data);
            //     // $scope.mymessage=response.data;
            //     // console.log($scope.mymessage);
            //     // $sessionStorage.mymessageid=$scope.mymessage;
            // });
            $location.path('/hola');
            
            // $location.path('#/');
        };

        $scope.myfunc1 = function(index,id){
            console.log("inside myfunc");
            console.log(index);
            console.log(id);
            $sessionStorage.mymessage1id=id;
            
            // $http.get('/myMessage/'+id).then(function(response){
            //     console.log(response.data);
            //     // $scope.mymessage=response.data;
            //     // console.log($scope.mymessage);
            //     // $sessionStorage.mymessageid=$scope.mymessage;
            // });
            $location.path('/hola');
            
            // $location.path('#/');
        };

        $scope.showClient = function() {
          console.log("from showclient");
          $location.path('#/');
        };

        // $scope.backFunc = function(){
        //     console.log("from back func");
        //      $scope.ins=true;
        //     $scope.myemails=false;
        // };


        $scope.onFileSelect = function()
        {
            console.log("form file select");
        }

         $scope.uploadFile = function(){
           var file = $scope.myFile;
           console.log(file);
           // var uploadUrl = "/savedata";
           // fileUpload.uploadFileToUrl(file, uploadUrl);
        };

    
   


    
});



