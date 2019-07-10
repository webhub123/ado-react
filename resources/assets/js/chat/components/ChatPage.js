import React, { Component } from 'react';
import { Button, Row, Container, Col, FormGroup, Label, Input } from 'reactstrap';
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import axios from 'axios';
import '../../shared/styles/chat.css'
import { FaPaperPlane } from 'react-icons/fa';
import io from 'socket.io-client'

class ChatPage extends Component {

    constructor(){
        super();

        this.state = {
            showCreateUser: false,
            showChatBox: false,
            messageList: [],
            message: '',
            username: '',
            users: []
        }
        this.socket = io('http://127.0.0.1:3333')
        this.handleChange = this.handleChange.bind(this)
        this.keyPress = this.keyPress.bind(this)
    }

    componentDidMount() {
        this.socketEvents()
    }

    handleChange(event){
        const { name, value } = event.currentTarget;
        this.setState({ [name] : value });
    }

    socketEvents() {

        this.socket.on('joined_user', data => {
            console.log(`${data.user} joined the chaaaat! `)
        })

        this.socket.on('add_user_response', data => {
            if (data.result) 
                return this.setState({ users: data.users, showChatBox: true })
            
            console.log('error creating users')
        })

        this.socket.on('new_message_response', data => {
            this.setState({ messageList: data, message: '' })
        })

        this.socket.on('received_message', data => {
            this.setState({ messageList: data })
        })

        document.title = 'Chaaaat! Page'
    }

    saveUser() {
        const { username } = this.state

        this.socket.emit('add_user', username)
    }

    keyPress(e){
        const { message } = this.state
        if(e.keyCode == 13 && !e.shiftKey)
            this.socket.emit('new_message', message)
     }

    renderCreateUser() {
        const { username } = this.state
        return (
            <div>
                <FormGroup >
                    <Row >
                        <Col lg={12} md={12} sm={12}>
                            <Label for="username" >Username</Label>
                            <Input type="text" name="username" id="username" bsSize='sm' value={username} onChange={this.handleChange} />
                        </Col>
                    </Row>
                </FormGroup>
                <Button color='primary' onClick={() => this.saveUser()}>Save</Button>
            </div>
        )
    }

    renderMessageList(messageList, username) {
        return(
            messageList.map((item, index) => 
            (item.username == username) ? 
                
                <div className="outgoing_msg" key={index}>
                    <div className="sent_msg">
                        <p>{item.message}</p>
                        <span className="time_date"> {item.time}</span>
                    </div>
                </div> :

                <div className="incoming_msg" key={index}>
                    <span className="username"> {item.username}</span>
                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div className="received_msg">
                        <div className="received_withd_msg">
                            <p>{item.message}</p>
                            <span className="time_date"> {item.time}</span>
                        </div>
                    </div>
                </div>
            )
        )
    }

    renderChatBox() {
        const { message, messageList, username } = this.state

        return (
            <FormGroup >
                <Row >
                    <Col lg={12} md={12}>
                        <div className="mesgs">
                            <div className="msg_history">
                                { 
                                    (messageList.length > 0) ?
                                        this.renderMessageList(messageList, username)
                                    : <center>No Message</center>
                                }
                            </div>
                            <div className="type_msg">
                                <div className="input_msg_write">
                                    <input type="textarea" className="write_msg" id='message' name='message' placeholder="Type a message" onKeyDown={this.keyPress} value={message} onChange={this.handleChange} />
                                    <Button className="msg_send_btn" >
                                        <FaPaperPlane/>
                                    </Button>
                                </div>
                            </div>
                        </div>  
                    </Col>
                </Row>
            </FormGroup>
        )
    }

    render() { 
        
        const { showChatBox, username } = this.state

        return (
            <React.Fragment>
                <Container className='col-lg-8 col-md-8' >
                    <br />
                    <h3>Chaaaat! </h3>
                    <h6>{ (showChatBox) ? `Welcome ${username}!` : ''  }</h6>
                    <hr/>
                    { (showChatBox) ? this.renderChatBox() : this.renderCreateUser() }
                </Container>
            </React.Fragment>
        );
    }
}
  
export default ChatPage;