import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false
  private subject = new Subject<any>()

  constructor() {}

  // call this method when we click Add button
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask
    this.subject.next(this.showAddTask)
  }

  // Whenever we want to do something when toggleAddTask happens, we subscribe to onToggle
  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
