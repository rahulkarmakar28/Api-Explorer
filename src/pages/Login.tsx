import React, { useState } from 'react';
import { TextInput, Button, Container, Title, Card, Center } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';
import { useAppTheme } from '../store/app.store';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const { theme } = useAppTheme();

  const handleLogin = () => {
    if (username.trim()) {
      login({ username: username.trim() });
      navigate('/resources');
    }
  };

  return (
    <Container size="xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card
        shadow="lg"
        padding="xl"
        radius="md"
        style={{
          width: '100%',
          maxWidth: 400,
          backgroundColor: theme === 'dark' ? '#1A1B1E' : '#E2E4F0',
          color: theme === 'dark' ? 'white' : 'black'
        }}
      >
        <Center>
          <Title order={2} mb="md" color={theme === 'dark' ? 'white' : '#3D4C7E'}>Login</Title>
        </Center>
        <TextInput
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          mb="md"
          styles={{
            input: {
              borderRadius: '2rem',
              backgroundColor: theme === 'dark' ? '#333' : '#DCE7FCFF',
              color: theme === 'dark' ? 'white' : 'black'
            },
            label: { color: theme === 'dark' ? '#E2E4F0' : '#51547b' }
          }}
        />
        <Button
          fullWidth
          onClick={handleLogin}
          color="primary"
          radius="xl"
          size="md"
          style={{ marginTop: '1rem', backgroundColor: theme === 'dark' ? '#FFD700' : '#3D4C7E', color: theme === 'dark' ? 'black' : 'white' }}
        >
          Login
        </Button>
      </Card>
    </Container>
  );
};

export default Login;
