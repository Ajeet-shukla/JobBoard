            var myApp = angular.module("jobApp", []);
            myApp.controller("jobController", function($scope) {
                var job = [{
                    "title": "Front End Developer",
                    "ID": "001",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dolor tincidunt, efficitur massa sed, tincidunt purus. Vestibulum egestas, nisi sed placerat tincidunt, augue neque ornare nulla, eget aliquam felis mi nec nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et cursus sapien. Ut gravida gravida metus, sit amet porta odio ullamcorper id. Vivamus eu efficitur nibh. Nam quis consectetur arcu. Nam tincidunt volutpat felis, a pharetra tortor molestie luctus.",
                    "Technology": ["Angular js", "Bootstrap", "html5", "Data Structure", "Algorithms"],
                    "Start Date": "15th Nov 2016",
                    "End Date": "",
                    "Designation": "Sr. Developer",
                    "Company": "Cognizant",
                    "comapnyLogo": "https://upload.wikimedia.org/wikipedia/en/d/dc/Cognizant_LOGO.png",
                    "City": ["Banglore", "India"],
                    "Mode": ["Walk in", "Referral", "Company website"]
                }, {
                    "title": "Unix System Admin",
                    "ID": "002",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dolor tincidunt, efficitur massa sed, tincidunt purus. Vestibulum egestas, nisi sed placerat tincidunt, augue neque ornare nulla, eget aliquam felis mi nec nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et cursus sapien. Ut gravida gravida metus, sit amet porta odio ullamcorper id. Vivamus eu efficitur nibh. Nam quis consectetur arcu. Nam tincidunt volutpat felis, a pharetra tortor molestie luctus.",
                    "Technology": ["Angular js", "Bootstrap", "html5", "Data Structure", "Algorithms"],
                    "Start Date": "15th Nov 2016",
                    "End Date": "",
                    "Designation": "Sr. Developer",
                    "Company": "Cognizant",
                    "comapnyLogo": "https://upload.wikimedia.org/wikipedia/en/d/dc/Cognizant_LOGO.png",
                    "City": ["Pune", "India"],
                    "Mode": ["Walk in", "Referral", "Company website"]
                }, {
                    "title": "Cognos",
                    "ID": "003",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dolor tincidunt, efficitur massa sed, tincidunt purus. Vestibulum egestas, nisi sed placerat tincidunt, augue neque ornare nulla, eget aliquam felis mi nec nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et cursus sapien. Ut gravida gravida metus, sit amet porta odio ullamcorper id. Vivamus eu efficitur nibh. Nam quis consectetur arcu. Nam tincidunt volutpat felis, a pharetra tortor molestie luctus.",
                    "Technology": ["Angular js", "Bootstrap", "html5", "Data Structure", "Algorithms"],
                    "Start Date": "15th Nov 2016",
                    "End Date": "",
                    "Designation": "Sr. Developer",
                    "Company": "Cognizant",
                    "comapnyLogo": "https://upload.wikimedia.org/wikipedia/en/d/dc/Cognizant_LOGO.png",
                    "City": ["Pune", "India"],
                    "Mode": ["Referral", "Company website"]
                }, {
                    "title": "BI Developer",
                    "ID": "004",
                    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at dolor tincidunt, efficitur massa sed, tincidunt purus. Vestibulum egestas, nisi sed placerat tincidunt, augue neque ornare nulla, eget aliquam felis mi nec nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec et cursus sapien. Ut gravida gravida metus, sit amet porta odio ullamcorper id. Vivamus eu efficitur nibh. Nam quis consectetur arcu. Nam tincidunt volutpat felis, a pharetra tortor molestie luctus.",
                    "Technology": ["Angular js", "Bootstrap", "html5", "Data Structure", "Algorithms"],
                    "Start Date": "15th Nov 2016",
                    "End Date": "",
                    "Designation": "Sr. Developer",
                    "Company": "Cognizant",
                    "comapnyLogo": "https://upload.wikimedia.org/wikipedia/en/d/dc/Cognizant_LOGO.png",
                    "City": ["Pune", "India"],
                    "Mode": ["Walk in", "Referral", "Company website"]
                }, ];
                $scope.job = job;
                $scope.isActive = false;
                $scope.activeButton = function() {
                    $scope.isActive = !$scope.isActive;
                }

                $scope.clearFilter = function() {
                    $scope.filterBy = {};
                };

            });