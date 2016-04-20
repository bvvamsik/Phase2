var app=angular.module("myApp", []);

app.controller("fileCtrl", function ($scope, $http, $httpParamSerializerJQLike, $window){

    $scope.pageClass = 'fileP';
    $scope.fileP = function(orderId,userName,doctorID,fileP1) {
        console.log("fileCtrl: fileP: Entered");
        //var myCanvas = document.getElementById('fileP1');
        //var ctx = myCanvas.getContext('2d');
        $http({
            
            method: 'POST',
            url : 'https://api.mongolab.com/api/1/databases/medic/collections/docDetails?apiKey=wBp91B6VrRgU4pV6ZXGgbkSZzn0ZikLJ',
            data: JSON.stringify({
                        docID: 'DOC'+Math.random().toString(36).substr(2, 9),
                        orderId: orderId,
                        userName: userName,
                        doctorID: doctorID,
                        fileP1: fileP1
                    }),
            contentType: "application/json"
        })
        .success(function(data) {
                alert($scope.orderId+" - for patient "+$scope.userName+" has been placed successfully. ");
                $scope.orderId ="";
                $scope.userName ="";
                $scope.doctorID ="";
                $scope.fileP ="";
        })
        .error(function() {
            
        });
        console.log("orderCtrl: order: Finished");
    };
});
