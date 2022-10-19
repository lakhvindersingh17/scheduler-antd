import {Card,Typography} from 'antd';
import{ClockCircleFilled,CalendarFilled,GlobalOutlined} from '@ant-design/icons'

const {Text,Title}=Typography

const textStyle={
    margin:'2% 0'
}
const headingStyle={margin:'0.25% 0 3% 0',fontSize:'1.5rem',fontWeight:'inherit'}

const bodyStyle={display:'flex',flexDirection:'column',alignItems:'flex-start',fontWeight:800 }

const MeetingCard=({data})=>

    (<Card type='inner' className="meetingCard" bodyStyle={bodyStyle}>

        <Text type='secondary' style={{fontSize:'16px'}}>
                {data.organiser}
        </Text>
                
        <Title level={2} style={headingStyle}>
                {data.title}
        </Title>
                
        <Text style={textStyle} type='secondary' >
                <ClockCircleFilled /> {data.duration}
         </Text>
                
        <Text style={textStyle} type='secondary'>
                <CalendarFilled /> {data.time}
        </Text>
                
        <Text style={textStyle} type='secondary'>
                <GlobalOutlined /> {data.timeZone}
        </Text>

    </Card>)


export default MeetingCard;