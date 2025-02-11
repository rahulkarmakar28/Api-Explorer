import React from 'react';
import { Container, Title, Text, Button, Center } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';

const Home: React.FC = () => {
  const { user } = useAuthStore();
  return (
    <Container size="lg" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: '1rem', textAlign: 'center' }}>
      <Title order={1} color="#3D4C7E" mb="md" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>Explore the Universe of APIs</Title>
      <Text size="lg" color="#51547b" mb="md" style={{ maxWidth: '600px', fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}>
        Discover, interact, and explore various APIs in a seamless and user-friendly way. Get started by logging in and accessing a wealth of resources.
      </Text>
      <Button component={Link} to={user ? "resources" : "/login"} color="primary" radius="xl" size="lg" mt="md" style={{ width: 'clamp(150px, 50%, 250px)' }}>
        Get Started
      </Button>
    </Container>
  );
};

export default Home;
