const {
    is
  } = require('bpmnlint-utils');
  
  
  /**
   * Rule that reports user task being used.
   */
  module.exports = function() {
  
    function check(node, reporter) {
      if (is(node, 'bpmn:UserTask')) {
        reporter.report(node.id, 'Element is not yet supported by Zeebe Engine, but will be in the future');
      }
    }
  
    return {
      check: check
    };
  };
  