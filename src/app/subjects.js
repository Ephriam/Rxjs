import { Subject } from 'rxjs/Subject'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { ReplaySubject } from 'rxjs/ReplaySubject'
import { AsyncSubject } from 'rxjs/AsyncSubject'
import object from './addItem'

var addItem = object.addItem

var subject = new Subject() // No buffering
var behaviorSubject = new BehaviorSubject() // Buffers 1 value
var replaySubject = new ReplaySubject(3)  // Buffers specified number of values It takes an optional second argument of time interval the buffer is to stay
var asyncSubject = new AsyncSubject()   // Buffers 1 value and only emites it up on complition

subject.next('First Message')
subject.next('Second Message')
subject.next('Third Message')
subject.next('Fourth Message')
subject.next('Fifth Message')

behaviorSubject.next('First Message')
behaviorSubject.next('Second Message')
behaviorSubject.next('Third Message')
behaviorSubject.next('Fourth Message')
behaviorSubject.next('Fifth Message')


replaySubject.next('First Message')
replaySubject.next('Second Message')
replaySubject.next('Third Message')
replaySubject.next('Fourth Message')
replaySubject.next('Fifth Message')

asyncSubject.next('First Message')
asyncSubject.next('Second Message')
asyncSubject.next('Third Message')
asyncSubject.next('Fourth Message')
asyncSubject.next('Fifth Message')

//Subjects only recive Messages after it's creation
subject.subscribe((data) => addItem('From a Subject Observer: ' + data))

//Behaviou subject recives only one of the last streams
behaviorSubject.subscribe((data) => addItem('From a BehaviorSubject Observer: ' + data))

//Replay Subject recives the specified number of events 
replaySubject.subscribe((data) => addItem('From a ReplaySubject Observer: ' + data))

//Async Subject recives 1 event that is emmited before the complete is called
asyncSubject.subscribe((data) => addItem('From a AsyncSubject Observer: ' + data))




subject.next('Last Message')
behaviorSubject.next('Last Message')
replaySubject.next('Last Message')
asyncSubject.next('Last Message')

subject.complete()
behaviorSubject.complete()
replaySubject.complete()
asyncSubject.complete()

//This events won't be emited since the subjects have completed
subject.next('Final Message')
behaviorSubject.next('Final Message')
replaySubject.next('Final Message')
asyncSubject.next('Final Message')

