/**
 * Created by rohitagarwal on 9/8/15.
 */
/**
 * Created by rohitagarwal on 9/8/15.
 */
(function(){

    angular.module("psMenu").controller("psMenuController",['$scope','$rootScope',function($scope,$rootScope){


        this.setActiveElement=function(el){
            $scope.activeElement=el;
        }

        this.getActiveElement=function(){
            return $scope.activeElement;
        }


        //this is raising the event
        this.setRoute=function(route){

            //using the root scope we will broadcast this route information to all the listeners..we assume that the other external modules
            // need not have a depeendency on psMenu so they will not include psMenu module to get thie information. But they will be under a single
            //rootscope so that way we can communicate

            $rootScope.$broadcast('ps-menu-item-selected-event',{route:route});
        }


    }
    ]);



}())