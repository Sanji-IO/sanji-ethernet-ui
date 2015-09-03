const $inject = ['$log', '$scope', '_'];
class EthernetController {
  constructor(...injects) {
    EthernetController.$inject.forEach((item, index) => this[item] = injects[index]);

    let _ = this._;
    let $log = this.$log;
    let $scope = this.$scope;

    $scope.vm = this;

    $scope.$watchCollection('vm.ethernets', (ethernets) => {
      if (0 < ethernets.length) {
        this.tabs = _.map(ethernets, function(item, index) {
          return {
            title: 'eth' + index,
            content: item
          };
        });
      }
    });
  }
}
EthernetController.$inject = $inject;
export default EthernetController;
