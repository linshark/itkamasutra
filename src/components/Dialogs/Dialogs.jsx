import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} /> ); 

    let messagesElements = props.state.messages.map (m => <Message message={m.message}/>);
    // let textEl = React.createRef();
    // let textViv = () => {
    //     let mes = textEl.current.value;
    //     alert(mes);
    // }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder='Enter your message'></textarea></div>
                    <div><button onClick={()=>{alert('dfd');}}>Send</button></div>
                </div>
                {/* <textarea ref={textEl}></textarea><button onClick={textViv}>Send</button> */}
            </div>
        </div>
    )
}

export default Dialogs;