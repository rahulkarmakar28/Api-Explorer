import React from 'react';
import { Container, Title, Text, Button, Center, Image } from '@mantine/core';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Container size="lg" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Title order={1} color="#3D4C7E" mb="md">Explore the Universe of APIs</Title>
      <Text size="lg" color="#51547b" mb="md" ta="center">
        Discover, interact, and explore various APIs in a seamless and user-friendly way. Get started by logging in and accessing a wealth of resources.
      </Text>
      <Button component={Link} to="/login" color="primary" radius="xl" size="lg" mt="md">
        Get Started
      </Button>
    </Container>
  );
};

export default Home;
