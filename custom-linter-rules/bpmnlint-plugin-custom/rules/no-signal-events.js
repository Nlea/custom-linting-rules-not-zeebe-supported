const {
    is
  } = require('bpmnlint-utils');
  
  
  /**
   * Rule that reports an escalation event being used.
   */
  module.exports = function() {  
  
    function check(node, reporter) {
     if (is(node, 'bpmn:BoundaryEvent') || is(node, 'bpmn:IntermediateThrowEvent') || is(node, 'bpmn:EndEvent') || is(node, 'bpmn:StartEvent') || is(node, 'bpmn:IntermediateCatchEvent')) {
       
      const eventType = node && node.eventDefinitions[0] ? node.eventDefinitions[0].$type : null;
       
        if(eventType === "bpmn:SignalEventDefinition"){      
        
        reporter.report(node.id, 'Element is not yet supported by Zeebe Engine');
      } 
    }  
    
  
    }   
    return {
      check: check
    };
  
  }