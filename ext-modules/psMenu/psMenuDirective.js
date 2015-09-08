/**
 * Created by rohitagarwal on 9/8/15.
 */
/**
 * Created by rohitagarwal on 9/8/15.
 */
(function(){

    angular.module("psMenu").directive("psMenu",function(){

        return {
            transclude:true,
            templateUrl:"ext-modules/psMenu/psMenuTemplate.html",
            controller:"psMenuController",
            link:function(scope,elem,attr){

            },
            scope:{

            }
        }


    });




}())