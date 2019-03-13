import React from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from 'config/Fire.jsx'

class GetUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            userLoaded: false,
        }
        this.setUser = this.setUser.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect() {
        if (this.state.userLoaded) {
            if (!this.state.user) {
                return <Redirect to='/pages/register-page' />
            }
        }
    }

    getUser() {
        return new Promise(function (resolve, reject) {
            auth.onAuthStateChanged(function (user) {
                if (user) {       //if user is signed in
                    resolve(user);
                } else {          //if no user is signed in
                    reject('Please register or login.');
                }
            });
        });
    }

    async setUser() {
        await this.getUser().then((user) => {
            this.setState({ user });    //sets this.state.user to current user
            this.props.user(user);
        }, (error) => {
            alert(error);
        });
        this.setState({
            userLoaded: true
        })
    }

    async componentWillMount() {
        await this.setUser();
    }

    render() {
        return (
            <div>
                {this.handleRedirect()}
            </div>
        );
    }
}

export default GetUser;