angular.module('myApp').controller('loginCtrl', function($scope,$http, $location, $sessionStorage) {
   var welcome={'subject':'Welcome Message','senderFname':'Admin Team','senderEmail':'admin@admin.com','count':0,'message':'Welcome to  Gmail.You have been successfully registered to our mail.'};
    $scope.welcome=welcome;
    $scope.loginSubmit = function(){
        console.log($scope.user);
        $http.post('/logindata',$scope.user).then(function(response){
            if(response.data == null)
            {
                alert("incorrect");
                $scope.user = '';
            }
            else
            {   
                $location.path('/inbox');
                $sessionStorage.senderEmail=response.data.email;
                $sessionStorage.fname=response.data.firstname;
                $sessionStorage.lname=response.data.lastname;            
            }
        });

    };

    $scope.signUp = function(){
        var verEmail = $scope.signup.email;
        var flag=0;

        $http.get('/emailVerification').then(function(response){
            var check=response.data;
            var len = check.length;
            // console.log(len);
            // var  fLen, i;
            // fruits = [];
            // fLen = fruits.length;
            // text = "<ul>";
            for (i = 0; i < len; i++) {
                if(check[i].email == verEmail)
                {
                    
                    flag=1;
                    break;
                }
            }
            
            if(flag==1)
            {
                alert("email already registered!Choose another email");
                $scope.signup.email = '';
            }

            else
            {
               $scope.welcome.emailTo = $scope.signup.email;
                $http.post('/welcomemsg',$scope.welcome).then(function(response){
                });
                $http.post('/signupData',$scope.signup).then(function(response){
                    // console.log(response.data);
                    $sessionStorage.fname=response.data.firstname;
                    $sessionStorage.lname=response.data.lastname;
                    $sessionStorage.senderEmail=response.data.email;
                    $location.path('/inbox');
                });
            }

            

        });

        

        
    };
});
