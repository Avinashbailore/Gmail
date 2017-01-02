angular.module('myApp').controller('loginCtrl', function($scope,$http, $location, $sessionStorage) {
   
    
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
        console.log($scope.signup);
        var verEmail = $scope.signup.email;
        console.log(verEmail);
        var flag=0;

        $http.get('/emailVerification').then(function(response){
            console.log("after response");
            console.log(response.data);
            
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
                $http.post('/signupData',$scope.signup).then(function(response){
                    console.log("data after inserting");
                    console.log(response.data);
                    $sessionStorage.fname=response.data.firstname;
                    $sessionStorage.lname=response.data.lastname;
                    $sessionStorage.senderEmail=response.data.email;
                    $location.path('/inbox');
                });
            }

            

        });

        

        
    };
});




angular.module('myApp').directive('showErrors', function() {
    return {
      restrict: 'A',
      require: '^form',
      link: function (scope, el, attrs, formCtrl) {
        // find the text box element, which has the 'name' attribute
        var inputEl   = el[0].querySelector("[name]");
        // convert the native text box element to an angular element
        var inputNgEl = angular.element(inputEl);
        // get the name on the text box
        var inputName = inputNgEl.attr('name');
        
        // only apply the has-error class after the user leaves the text box
        inputNgEl.bind('blur', function() {
          el.toggleClass('has-error', formCtrl[inputName].$invalid);
        })
      }
    }
  });