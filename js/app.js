var app=angular.module('primeApp',[]);
app.controller('primeCtrl',function($scope){
	$scope.prime=function(num){
	
		var prime=0;
		for(var i=2;i<=num/2;i++)
		{
			if((num%i)==0)
			{
				prime=2;
				break;

			}
		}
		    if (prime == 0)
          
			$scope.result="is a prime";
		else{
			$scope.result="is not prime";
		}

	}
});