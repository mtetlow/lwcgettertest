import { LightningElement, wire, track } from "lwc";
import GetTasks from "@salesforce/apex/TaskBoardController.getTasks";

export default class TaskBoard extends LightningElement {
  @track
  taskCountToShow = 10;
  @wire(GetTasks, {})
  wiredGetTasks;
  get taskIdArray() {
    return this.wiredGetTasks && this.wiredGetTasks.data
      ? this.wiredGetTasks.data.slice(0, this.taskCountToShow)
      : [];
  }
  increaseTaskCountToShow() {
    this.taskCountToShow = this.taskCountToShow + 10;
  }
}
