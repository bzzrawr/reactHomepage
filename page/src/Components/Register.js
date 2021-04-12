import React, { Component } from 'react'
import {Container, Box, Button, Heading, Text, Textfield, TextField} from 'gestalt'

export class Register extends Component {
  render() {
    return (
      <div>
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
            {/*Sign up Form */}
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
                <Heading color='midninght'>Let's Get Started</Heading>
                <Text italic color='orchid'>Signup!</Text>
              </Box>
              {/* Username input*/}
              <TextField id='username'
              type='text'
              name= 'username'
              placeholder='Username'
              onChange={this.handleChange}/>
              {/* email input*/}
              <TextField id='email'
              type='email'
              name= 'email'
              placeholder='Email Address'
              onChange={this.handleChange}/>
              {/* password input*/}
              <TextField id='password'
              type='password'
              name= 'password'
              placeholder='Password'
              onChange={this.handleChange}/>
              <Button inline color='blue'
              text='Submit'
              type='submit'/>
            </form>
          </Box>
        </Container>
      </div>
    )
  }
}

export default Register
