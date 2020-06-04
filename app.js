(function () {
    'use strict';
    
    angular.module('myFirstApp', [])
    
    .controller('MyFirstController', function ($scope) {
        $scope.name="";
        $scope.value=0;
        $scope.displayNumeric= function(){
            var totalValue=calculateValue($scope.name);
            $scope.value=totalValue;
        };

        function calculateValue(string)
        {
            var total =0;
            for(var i=0;i<string.length;i++)
            {
                total+=string.charCodeAt(i);
            }
            return total;
        }
    
    });

    
})();
    