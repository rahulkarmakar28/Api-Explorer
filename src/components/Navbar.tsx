import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Group, Header, Container, Text, Tooltip, ActionIcon } from '@mantine/core';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useAuthStore } from '../store/auth.store';
import { useAppTheme } from '../store/app.store';

const Navbar: React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useAppTheme();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Header height={70} p="md" sx={{ backgroundColor: theme === 'dark' ? '#1A1B1E' : '#232F53', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Group position="apart">
          <Group>
            <Text size="xl" weight={700} color={theme === 'dark' ? 'white' : 'white'}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>API Explorer</Link>
            </Text>
            <Link to="/resources" style={{ textDecoration: 'none', color: theme === 'dark' ? '#E2E4F0' : '#DCE7FC', fontSize: '1rem', marginLeft: '1rem' }}>Resources</Link>
          </Group>
          <Group>
            <Tooltip label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'} position="bottom" withArrow>
              <ActionIcon onClick={toggleTheme} variant="filled" color={theme === 'dark' ? 'yellow' : 'blue'} radius="xl" size="md">
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </ActionIcon>
            </Tooltip>
            {user ? (
              <Button onClick={handleLogout} color="red" radius="xl" size="md">Logout</Button>
            ) : (
              <Button component={Link} to="/login" color="blue" radius="xl" size="md">Login</Button>
            )}
          </Group>
        </Group>
      </Container>
    </Header>
  );
};

export default Navbar;
