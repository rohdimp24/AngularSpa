/**
 * Created by rohitagarwal on 9/8/15.
 */
(function(){

    angular.module("psFramework").controller("psFrameworkController",['$scope',function($scope){

            $scope.isMenuButtonVisible=true;
            //listen for the event
            $scope.$on('ps-menu-item-selected-event',function(evt,data){
                $scope.routeString=data.route;

            })

    }
   ]);



}())