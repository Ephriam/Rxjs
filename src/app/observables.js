import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share'
import fromEvent from 'rxjs/Observable/fromEvent'

import object from  './addItem'
var addItem = object.addItem
var ble = Observable.create((source) => {
    source.next('Message 1')
    setInterval(() => {
        source.next('Repeated message')
    }, 1000)
    //source.error('error')  
    //source.complete()
    //source.next('Message 1')
    
})
//.share() // turns cold to hot observable

var subscription1 = ble.subscribe((x) => {
    addItem(x)
},
(err) => console.log(err),
() => console.log('completed'))

var subscription2;
setTimeout(() => {
    subscription2 = ble.subscribe((x) => {
        addItem('Subscription 2:' + x)
    })
}, 1)


setTimeout(()=>{
    subscription1.unsubscribe()
    subscription2.unsubscribe()
}, 5000) 
