
angular.module('contactList').controller('ContactCtrl', function($scope,$uibModal,$uibModalInstance,$http, contactItem) {
	$scope.contact = contactItem;

	$scope.save = function() {
		$http.post('/contacts', $scope.contact).then(function(response) {
			$uibModalInstance.close();
		});
	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss();
	};

	$scope.delete = function() {
		var deleteModalInstance = $uibModal.open({					// We create a new modal to confirm if the user really wants to delete
			templateUrl: 'views/confirm.html',
			controller: function($scope,$uibModalInstance) {
				$scope.yes = function() {
					$uibModalInstance.close();						// We resolve the promise
				};
				$scope.no = function() {
					$uibModalInstance.dismiss();					// We reject the promise
				};
			}
		});
		deleteModalInstance.result.then(function() {				// We only delete if the result promise is resolved, meaning the user clicked yes
			$http.delete('/contacts/' + $scope.contact._id).then(function() {
				$uibModalInstance.close();
			});
		});
	};
});
