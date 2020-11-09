import React from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


class Contact extends React.Component{
    state={showForm:false}

// I CREATE A FUNCTIONAL COMPONENT IN MY CLASS TO MAKE IT APPEAR ON STATE CHANGE

    showForm=()=>{
        return(
            <div id='contactform' >
                <form action="">
                    <label>Name:</label>
                    <input type="text"/>
                    <label>Surname:</label>
                    <input type="text"/>
                    <label>Email:</label>
                    <input type="email"/>
                    <label>Message:</label>
                    <textarea></textarea>
                    <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                </form>
            </div>
        )
    }
    render(){
        return(
            <div>
               
                <button onClick={()=>this.setState({showForm:!this.state.showForm})} className="btn-5">Get A Quote</button>
                {this.state.showForm ? this.showForm() : null}
            </div>
        )
    }

}

export default Contact