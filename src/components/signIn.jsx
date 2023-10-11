// SignIn.js
import React, { useState } from 'react';
import { authenticateUser } from './mockAPI';
import { Flex, Card, Box } from '@radix-ui/themes';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const hasSignedIn = async () => {
    const token = localStorage.getItem('token');

    // Simulate server side validation for login
    if (token === 'mock-auth-token') {
      window.location.href = '/dataDashboard';
    }
  }

  hasSignedIn();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const token = authenticateUser(username, password);

    if (token) {
      // Mock authentication was successful, store the token
      localStorage.setItem('username', username);
      localStorage.setItem('token', token);
      // Redirect to the data dashboard
      window.location.href = '/dataDashboard';
    } else {
      // Mock authentication failed, produce an error message
      setError('Invalid username or password');
    }
  }

  return (
    <Card style={{
      position: "relative",
      background: "linear-gradient(to right, #646cff, white, #646cff)",
      border: 0,
      borderRadius: 10,
      padding: "3px",
    }}
    >
      <Card size="5" style={{ 
        width: 350, 
        padding: 50,
        border: 0,
        background: "#242424",
        }}>
        <Flex direction={'column'} align={'center'}>
          <h1>Sign In</h1>
          {error && <p>{error}</p>}
          <form onSubmit={handleSignIn}>
            <Flex direction={'column'} align="center">
              <Box>
                <h4 style={{marginBottom: 0}}>Username</h4>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ padding: 10, width: 250, borderRadius: 10, border: "1px solid white" }}
                />
              </Box>
              <Box>
                <h4 style={{marginBottom: 0}}>Password</h4>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ padding: 10, width: 250, borderRadius: 10, border: "1px solid white" }}
                />
              </Box>
              <button type="submit" style={{marginTop: 20}}>Sign In</button>
            </Flex>
          </form>
        </Flex>
      </Card>
    </Card>
  );
}

export default SignIn;
