import { Socket } from 'phoenix-socket';
import { store } from './App.jsx';

let channel;

export default function connectToSocket(channelName) {

  const logs = process.env.NODE_ENV === 'development'
        ? { logger: ((kind, msg, data) => { console.log(`kind: ${kind}: msg: ${msg}`, data); })}
        : { };

  const socket = new Socket(`ws:localhost:4000/socket`, logs);

  socket.connect();

  socket.onOpen( e => console.log('Socket onOpen: ', e));
  socket.onError( e => console.log('Socket onError: ', e));
  socket.onClose( e => console.log('Socket onClose: ', e));

  channel = socket.channel(channelName);
  channel.join(5000)
    .receive('ok', data => {
      store.dispatch({ type: 'NEXT_COLOR', color: data.color });
      console.log(data);
    })
    .receive('error', err => {
      console.log(err);
    });
}
