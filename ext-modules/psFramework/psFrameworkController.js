/**
 * Created by rohitagarwal on 9/8/15.
 */
(function(){

    angular.module("psFramework").controller("psFrameworkController",['$scope','$window','$timeout','$rootScope',
        function($scope,$window,$timeout,$rootScope ){

            $scope.isMenuButtonVisible=true;
            $scope.isMenuVisible=true;
            //listen for the event from the menu
            $scope.$on('ps-menu-item-selected-event',function(evt,data){
                $scope.routeString=data.route;
                //hide the menu once you have selected something from the menu specialliy on a smart phone
                $scope.checkWidth();
                broadcastMenuState()

            })

            //listen for the jquery event  so on and not $on
            $($window).on('resize.psFramework',function(){
                $scope.$apply(function(){
                     //note if we want to create a local function and not on the scope then we need to use the timeout functionality
                    //so that the function checkwidth can be called after angularjs digest cycle
                    $scope.checkWidth();
                   // so that once the bar icon is visible the menu is hidden
                    broadcastMenuState();
                })

            });

            $scope.$on('$destroy',function(){

                $($window).off('resize.psFramework');

            });


            //raise an event so that menu can be hidden ..this will be listened by the menu
            $scope.menuButtonClicked=function(){
                $scope.isMenuVisible=!$scope.isMenuVisible;
                broadcastMenuState();
                //$scope.$apply();

            }

            //while rasing the event we are sending the state of the menuvisible
            var broadcastMenuState=function(){
                $rootScope.$broadcast('ps-menu-show',{
                    show:$scope.isMenuVisible
                })
            }


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