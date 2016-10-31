angular.module('miniRouting').controller('productsCtrl',function($scope,$stateParams,productService){
  var id = $stateParams.id;

  if(id === 'shoes'){
    $scope.productData = productService.shoeData;
  } else {
    $scope.productData = productService.sockData;
  }
})
