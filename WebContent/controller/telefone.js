var telefoneModule = angular.module('telefoneModule',[]);

telefoneModule.controller("telefoneController",function($scope) {
	
	$scope.novoTelefone = {};
	
	$scope.telefoneSelecionado = {};
	
	$scope.telefones = [
		{codigo: 1, nome: 'Alexandre', numero: '189996190689'},
		{codigo: 2, nome: 'Teste', numero: '12345678910'}
	];
	
	$scope.salvar = function() {
		$scope.telefones.push($scope.novoTelefone);
		$scope.novoTelefone = {};
	}
	
	$scope.excluir = function() {
		$scope.telefones.splice($scope.telefones.indexOf($scope.telefone),1);
	}
	
	$scope.selecionaTelefone = function(telefone) {
		$scope.telefone = telefone;
	}
		
	
});	