import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) =>{
    console.log(props)
    const chatProps = useMultiChatLogic('d1a0cf95-7cf6-4cba-ad30-f06a4549e3cc', props.user.username, props.user.secret)
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        </div>
    )
}

export default ChatsPage;