import React, { Component } from 'react'
import {Container, Box, Button, Heading, Text, TextField} from 'gestalt'

export class Login extends Component {
  state = {
    name:'',
    password: ''
  }
  handleChange = ({event, value})=>{
    event.persist();
    this.setState({[event.target.name]: value})
  }
  render() {
    return (
      <div className='box'>
        <Container>
          <Box dangerouslySetInlineStyle={{
            __style: {
              backgroundcolor:'#ebe2da'
            }
          }}
          margin={4}
          padding={4}
          shape="rounded"
          display='flex'
          justifyContent='center'
          >
            {/*Login Form */}
            <form style={{
              display: 'inlineBlock',
              textAlign: 'center',
              maxWidth: 450
            }}>
              <Box
              marginBottom={2}
              display='flex'
              direction='column'
              alignItems='center'>
                <Heading color='midninght'>Welcome Back!</Heading>
                <Text italic color='orchid'>Please login to your account</Text>
              </Box>
              {/* Username input*/}
              <TextField id='username'
              type='text'
              name= 'username'
              placeholder='Username'
              onChange={this.handleChange}/>
              {/* password input*/}
              <TextField id='password'
              type='password'
              name= 'password'
              placeholder='Password'
              onChange={this.handleChange}/>
              <Button color='blue'
              text='Submit'
              type='submit'/>
            </form>
          </Box>
        </Container>
      </div>
    )
  }
}

export default Login
