import React from 'react'
import '../index.css'
import { myContext } from '../DataContext'
import { useContext } from 'react'
import Form from './Form'


const Chat = () => {
    const {change} = useContext(myContext)
  return (
    <div className='chat'>

          <h4>General</h4>
        <div className="nav">
            <p>General discussions</p>
            <i class="ri-menu-unfold-2-fill"></i>
        </div>
        <div className="mes">
            <p>Alice 10:30AM</p>
            <p> hey ! </p>
        </div>
        <form>
            <textarea >Type a message...</textarea>
            <button>Send</button>
        </form>
    </div>
  )
}

export default Chat