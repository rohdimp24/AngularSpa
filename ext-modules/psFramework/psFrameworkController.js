/**
 * Created by rohitagarwal on 9/8/15.
 */
(function(){

    angular.module("psFramework").controller("psFrameworkController",['$scope','$window','$timeout',function($scope,$window,$timeout){

            $scope.isMenuButtonVisible=true;
            $scope.isMenuVisible=true;
            //listen for the event
            $scope.$on('ps-menu-item-selected-event',function(evt,data){
                $scope.routeString=data.route;

            })

            //listen for the jquery event  so on and not $on
            $($window).on('resize.psFramework',function(){
                $scope.$apply(function(){
                    //note if we want to create a local function and not on the scope then we need to use the timeout functionality
                    //so that the function checkwidth can be called after angularjs digest cycle
                    $scope.checkWidth();
                })

            });

            $scope.$on('$destroy',function(){

                $($window).off('resize.psFramework');

            });


            $scope.checkWidth=function(){
                var width=$($window).innerWidth();
                //show the menu sidebar if the width is greather that 768px
                $scope.isMenuVisible=(width>768);
                $scope.isMenuButtonVisible=!$scope.isMenuVisible;

            }

            //we want to make sure that the menu button is not shown even at the strat if we dont do any resize
            //so as soon as the digest cycle is over this will be called
//            $timeout(function(){
//               checkWidth();
//            },0)

            $scope.checkWidth();
    }
   ]);



}())