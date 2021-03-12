const {
    is
  } = require('bpmnlint-utils');
  
  
  /**
   * Rule that reports a message send event being used.
   */
  module.exports = function() {  
  
    function check(node, reporter) {
     if (is(node, 'bpmn:IntermediateThrowEvent') || is(node, 'bpmn:EndEvent')) {
       
      const eventType = node && node.eventDefinitions[0] ? node.eventDefinitions[0].$type : null;
       
        if(eventType === "bpmn:MessageEventDefinition"){      
        
        reporter.report(node.id, 'Element is not yet supported by Zeebe Engine. If you want to send a message consider using a BPMN Service task');
      } 
    }  
    
  
    }   
    return {
      check: check
    };
  
  }