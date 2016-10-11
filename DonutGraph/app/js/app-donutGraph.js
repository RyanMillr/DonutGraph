angular.module('app-donutGraph', ['nvd3'])
    .controller('myCtrl', function ($scope) {
        /* Chart options */
        $scope.options = {  
            chart: {
                type: 'pieChart',
                height: 450,
                donut: true,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
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

        /* Chart data */
        $scope.data = [
        {
            key: "Shrinkage",
            y: 52.45
        },
        {
            key: "Damage",
            y: 23.45
        },
        {
            key: "Leprechauns",
            y: 68.56
        },
        {
            key: "Unicorns",
            y: 36.21
        },
        {
            key: "Dragons",
            y: 47.35
        }
        ];


    })