import './Blogpage.css'
import Event from '../components/Event'
import eventdata from 'events.json'


function Blogpage() {
    return(
        <>
            <Event event={eventdata.completedevents}/>
        </>
    )
}

export default Blogpage