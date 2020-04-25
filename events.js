import { Subject } from "rxjs"
import { filter, pipe } from "rxjs/operators";


export function event() {
const subject = new Subject();


const fireEvent = e => subject.next(e)


const listen = key => subject.pipe( filter( e => e.key === key ) )


const complete = () => subject.complete()


return { fireEvent, listen, complete }
}
