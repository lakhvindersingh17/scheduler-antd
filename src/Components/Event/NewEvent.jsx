import { Card,Typography,Form, Input,Button,message } from "antd"
const {Title}=Typography

const inputFieldStyle={
    borderRadius:'8px',
    padding:'0.5rem'
}

const labels={
    Name:'Name',
    Email:'Email',
    details:"Please share anything that will help prepare for our meeting",
    scheduleEventBtn:'Schedule Event',
    title:'Enter Details '
}

const NewEvent=()=>{


    const finishHandler=(values)=>{
        
        if( !values.Name || !values.Email )
        message.error('Please fill the Mandetory Fields');
        
        else 
        message.success(`${values.Name} scheduled by ${values.Email} `)
    }

    return (
        <Card type="inner" className="newEventCard">
            
            <Title style={{fontWeight:'800'}} level={4}>{labels.title}</Title>
            
            <Form layout={"vertical"}  sytyle={{width: 'fit-content'}}onFinish={finishHandler}>
            
                <Form.Item name={'Name'} className={'required'} label={labels.Name}>
                    <Input style={inputFieldStyle}  />
                </Form.Item>
            
                <Form.Item name={'Email'} className={'required'} label={labels.Email}>
                    <Input style={inputFieldStyle}  />
                </Form.Item>
                <Form.Item>
                    <Button className={'outlinedButton'}shape="round" >Add Guests</Button>
                </Form.Item>
            
                <Form.Item name={'details'} label={labels.details}>
                    <Input.TextArea style={inputFieldStyle} autoSize={{minRows:4}} />
                </Form.Item>


                <Form.Item >
                    <Button type="primary" shape="round"  htmlType="submit">
                        {labels.scheduleEventBtn}                        
                    </Button>
                </Form.Item>

            </Form>

        </Card>
    )
}

export default NewEvent