import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchResources } from '../api/api';
import { Table, Container, Title, TextInput, Loader, Card, Group, Badge, Button, Text, ScrollArea, Stack } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useAppTheme } from '../store/app.store';
import { useMediaQuery } from '@mantine/hooks';

interface Person {
  name: string;
  birth_year: string;
  url: string;
}

const ResourceList: React.FC = () => {
  const [search, setSearch] = useState('');
  const { data, isLoading, error } = useQuery('resources', () => fetchResources('people'));
  const { theme } = useAppTheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isLoading) {
    return (
      <Container size="md" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Loader size="xl" color={theme === 'dark' ? 'white' : 'black'} />
        <Text mt="md" size="lg" color={theme === 'dark' ? 'white' : 'black'}>Loading resource details...</Text>
      </Container>
    );
  }

  if (error) return <div>Error loading resources.</div>;

  const filteredResults = data.results.filter((person: Person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container size="md" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem', padding: '1rem' }}>
      <Card
        shadow="xl"
        padding="xl"
        radius="lg"
        style={{
          backgroundColor: theme === 'dark' ? '#1A1B1E' : '#E2E4F0',
          color: theme === 'dark' ? 'white' : 'black',
          width: '100%',
          maxWidth: 800
        }}
      >
        <Title order={2} align="center" color={theme === 'dark' ? 'white' : '#3D4C7E'} mb="md">People</Title>
        <TextInput
          placeholder="Search by name"
          mb="md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          styles={{ input: { borderRadius: '2rem', backgroundColor: theme === 'dark' ? '#333' : '#DCE7FCFF', color: theme === 'dark' ? 'white' : 'black' } }}
        />

        {isMobile ? (
          <Stack spacing="sm">
            {filteredResults.map((person: Person, index: number) => {
              const idMatch = person.url.match(/\/(\d+)\/?$/);
              const id = idMatch ? idMatch[1] : (index + 1).toString();
              return (
                <Card key={id} shadow="sm" padding="md" radius="md" style={{ width: '100%' }}>
                  <Group position="apart">
                    <Badge color="blue" variant="filled" size="lg">{person.name}</Badge>
                    <Text>{person.birth_year}</Text>
                  </Group>
                  <Button component={Link} to={`/resource/people/${id}`} color="primary" radius="xl" fullWidth mt="sm">View</Button>
                </Card>
              );
            })}
          </Stack>
        ) : (
          <ScrollArea style={{ width: '100%', maxHeight: '60vh' }}>
            <div style={{ width: '100%', overflowX: 'auto' }}>
              <Table striped highlightOnHover style={{ minWidth: 600 }}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Birth Year</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResults.map((person: Person, index: number) => {
                    const idMatch = person.url.match(/\/(\d+)\/?$/);
                    const id = idMatch ? idMatch[1] : (index + 1).toString();
                    return (
                      <tr key={id}>
                        <td><Badge color="blue" variant="filled" size="lg">{person.name}</Badge></td>
                        <td>{person.birth_year}</td>
                        <td>
                          <Button component={Link} to={`/resource/people/${id}`} color="primary" radius="xl" size="sm">View</Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </ScrollArea>
        )}
      </Card>
    </Container>
  );
};

export default ResourceList;
