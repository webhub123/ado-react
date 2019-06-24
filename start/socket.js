const Server = use('Server')
const Env = use("Env")
const io = use('socket.io')(Server.getInstance())
const moment = require('moment')

const port = Env.get("SOCKET_PORT")
let users = []
let messages = []

io.on('connection',  (socket) => {

    socket.on('add_user', (username) => {

        socket.username = username
        users.push({
            user: socket.username,
            id: socket.id
        })

        socket.emit('add_user_response', { result: true, users: users } )
        socket.broadcast.emit('joined_user', { user: username, id: socket.id } )
    })

    socket.on('new_message', (message) => {

        messages.push({
            username: socket.username,
            message: message,
            id: socket.id,
            date: new Date(),
            time: moment(new Date()).format('hh:mm A')
        })

        socket.emit('new_message_response', messages )
        socket.broadcast.emit('received_message', messages )
    })

    socket.on('disconnect', () => {
        console.log('disconnected!') 
    })
})

io.listen(port, () => {
    console.log(`Listening @ port ${port}`);
});