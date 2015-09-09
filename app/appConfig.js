/**
 * Created by rohitagarwal on 9/8/15.
 */

//pretty standard exception handling code
(function(){
    angular.module('app').config(function ($provide) {
        $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
            return function (exception, cause) {
                $delegate(exception, cause);
                alert("An Exception is cauaght "+exception.message);
            };
        }]);
    });
}())
