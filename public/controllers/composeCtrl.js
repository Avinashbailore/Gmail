angular.module('myApp').controller('composeCtrl', function($scope,$http, $location, $sessionStorage) {
   
    $scope.cmp=true;
    $scope.msgcount= $sessionStorage.msgcount;
    console.log("compose");
    // console.log("inboxctrl");
    var senderEmail=$sessionStorage.senderEmail;
    var fname = $sessionStorage.fname;
    var lname = $sessionStorage.lname;
    $scope.fname = fname;
    $scope.lname = lname;
    var profileEmail=senderEmail;
     $scope.sendEmail = function() {
     	console.log("inside sebd");
        var sub = $scope.compose.subject;
        var msg = $scope.compose.message;
        $scope.compose.count=0;
        var flag=0;
        if ($scope.userForm.$valid) 
        {       
            if(sub==null)
            {
                var r = confirm("are u sure u want to send a message without a subject?");
                if (r == true) 
                {
                      flag=0;          
                }
                else 
                {
                     
                     flag=1;
                }
            }
            
            if(flag==0)
            {   $scope.compose.senderFname = $sessionStorage.fname;
                $scope.compose.senderLname = $sessionStorage.lname;
                $scope.compose.senderEmail = $sessionStorage.senderEmail;

                // alert('sending data');
                // console.log($scope.compose);
                $http.post('/sendmsg',$scope.compose) .then(function(response){
                    if(response.data=="noemail")
                    {
                        alert("entered email doesnt exists");
                        $scope.compose.emailTo='';
                    }
                    else
                    {               
                        $http.get('/myInbox/' + senderEmail).then(function(response) {
                        	alert("msg sent");
                        	$scope.myinbox=response.data;
                       	});
                     	$location.path('/myinboxmsg');

                    }
                });

            }
            
                  
        } 
        else 
        {
            alert("There are invalid fields");
            flag=1;
        } 
    
        };


        $scope.uploadFile = function(){
           var file = $scope.myFile;
           console.log(file);
           // var uploadUrl = "/savedata";
           // fileUpload.uploadFileToUrl(file, uploadUrl);
        }; 
   


    
});
