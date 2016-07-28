angular.module('contactList').controller('ContactListCtrl', function($scope,$http,$uibModal) {
	function getContacts() {
		$http.get('/contacts').then(function(response) {
			$scope.contacts = response.data;
		});
	}
	getContacts();

	$scope.loadContact = function(contact) {
		var modalInstance = $uibModal.open({
			templateUrl: 'views/contact.html',
			controller: 'ContactCtrl',
			resolve: {
				contactItem: function() {return contact;}
			}
		});
		modalInstance.result.then(function() {
			getContacts();
		});
	};

});
