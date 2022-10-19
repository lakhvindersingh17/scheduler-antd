import NewEvent from '../Components/Event/NewEvent';
import MeetingCard from '../Components/Meeting';

const meetingData={
    organiser:'Guarav Garg',
    title:'15 Minutes Meeting',
    duration:'15 min',
    time:'9:30am - 9:45am, Friday, September 16 2022',
    timeZone:'Indian Standard Time'
}

const SchedulePanel=()=>{

    return (<>
        <div className='schedulePanel'>

            <MeetingCard data={meetingData}/>

            <NewEvent/>

        </div>
    
    </>)

}

export default SchedulePanel;