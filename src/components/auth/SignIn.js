import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

export class SignIn extends Component {

    state={
        email:'',
        password:'',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        const { authError,auth } = this.props
        //if(auth.uid) return <Redirect to='/'/>
        return (
        <div>
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white" data-test="submit">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" label="submit">Login</button>
                        <div className="red-text center">
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
        //state is attached to auth from rootReducer and authError from authReducer
    }
}

//map dispatch from this component and calls action creator
const mapDispatchToProps = (dispatch) => {
    return {
        //attach this object to the props of this component
        signIn: (creds) => dispatch(signIn(creds)) // from authActions
    }
}

//connect to redux
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
