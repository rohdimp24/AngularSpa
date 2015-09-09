/**
 * Created by rohitagarwal on 9/9/15.
 */
/**
 * Created by rohitagarwal on 9/8/15.
 */
(function(){

    angular.module("psMenu").directive("psMenuGroup",function(){

        return {

            //use the parent controller
            require:'^psMenu',
            templateUrl:"ext-modules/psMenu/psMenuGroupTemplate.html",
            transclude:true,
            scope:{
                label:'@',
                icon:'@'

            },
            //in the link functon we can also pass a controller object
            link:function(scope,elem,attr,ctrl){
                //this will take care of clicking on the menu
                scope.isOpen=false;

                scope.closeMenu=function(){
                   scope.isOpen=false;
                }

                scope.clicked=function()
                {
                    scope.isOpen=!scope.isOpen;
                }


            }
        }


    });




}())