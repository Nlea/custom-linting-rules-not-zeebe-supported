const {
    is
  } = require('bpmnlint-utils');
  
  
  /**
   * Rule that reports script task being used.
   */
  module.exports = function() {
  
    function check(node, reporter) {
      if (is(node, 'bpmn:ScriptTask')) {
        reporter.report(node.id, 'Element is not yet supported by Zeebe Engine');
      }
    }
  
    return {
      check: check
    };
  };
  