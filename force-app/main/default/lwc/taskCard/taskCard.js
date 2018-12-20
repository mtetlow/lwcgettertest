import { LightningElement, api, wire } from "lwc";
import { getRecord } from "lightning/uiRecordApi";

const fields = [
  "TASKRAY__Project_Task__c.Name",
  "TASKRAY__Project_Task__c.Id",
  "TASKRAY__Project_Task__c.TASKRAY__Project__c",
  "TASKRAY__Project_Task__c.TASKRAY__Project__r.Name"
];

export default class TaskCard extends LightningElement {
  @api recordId;

  @wire(getRecord, { recordId: "$recordId", fields: fields })
  task;

  get name() {
    return this.task.data ? this.task.data.fields.Name.value : "";
  }
  get id() {
    return this.task.data ? this.task.data.fields.Id.value : "";
  }
}
