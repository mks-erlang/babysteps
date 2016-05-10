(function () {
  'use strict';

  angular
    .module('baby.milestone',[])
    .controller('MilestoneCtrl', MilestoneCtrl);

  function MilestoneCtrl($state, milestone, $stateParams) {
    // initialize
    var vm = this;

    // variables
    vm.condition = $stateParams.condition;
    vm.getConditionData = getConditionData;

    // functions
    function getConditionData() {
      milestone.getCondition(vm.condition);
    }

  }

})();
