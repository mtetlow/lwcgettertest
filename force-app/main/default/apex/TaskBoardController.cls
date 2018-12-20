public with sharing class TaskBoardController {
    public TaskBoardController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<TASKRAY__Project_Task__c> getTasks() {
        return [SELECT Id FROM TASKRAY__Project_Task__c];
    }
}
