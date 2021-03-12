const {
    is
  } = require('bpmnlint-utils');
  
  
  /**
   * Rule that reports message send tasks being used.
   */
  module.exports = function() {
  
    function check(node, reporter) {
      if (is(node, 'bpmn:SendTask')) {
        reporter.report(node.id, 'Element is not yet supported by the Zeebe engine. Try to use a Service Task');
      }
    }
  
    return {
      check: check
    };
  };
  