const {
    is
  } = require('bpmnlint-utils');
  
  
  /**
   * Rule that reports inclusive gateway is being used.
   */
  module.exports = function() {
  
    function check(node, reporter) {
      if (is(node, 'bpmn:InclusiveGateway')) {
        reporter.report(node.id, 'Element is not yet supported by Zeebe Engine');
      }
    }
  
    return {
      check: check
    };
  };
  