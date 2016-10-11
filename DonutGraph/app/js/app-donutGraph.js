angular.module('app-donutGraph', ['nvd3'])
    .controller('myCtrl', function ($scope, $http) {
        /* Chart options */
        $scope.options = {  
            chart: {
                type: 'pieChart',
                height: 450,
                donut: true,
                x: function(d){return d.key;},
                y: function(d){return d.value;},
                showLabels: true,
                /*
                pie: {
                    startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
                    endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
                },
                */
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 140,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $http.get("/api/graph/donutgraph").success(function (response) {            
            $scope.data = response;
        });

        /* Chart data 
        $scope.data = [
        {
            key: "Dragons",
            y: 47.35
        }
        ];*/


    })