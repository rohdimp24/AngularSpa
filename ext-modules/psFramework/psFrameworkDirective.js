/**
 * Created by rohitagarwal on 9/8/15.
 */
(function(){

    angular.module("psFramework").directive("psFramework",function(){

        return{
            transclude:true,
            scope:{

            },
            controller:"psFrameworkController",
            //this path will be configured later using the gulp
            templateUrl:"ext-modules/psFramework/psFrameworkTemplate.html"
        }



    })



}())