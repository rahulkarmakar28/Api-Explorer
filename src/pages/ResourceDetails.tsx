import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchResourceDetail, fetchEnrichmentData } from '../api/api';
import { Card, Text, Title, Loader, Container, Group, Divider, Badge } from '@mantine/core';
import { useAppTheme } from '../store/app.store';

interface Person {
  name: string;
  birth_year: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  homeworld: string;
  [key: string]: any;
}

interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
}

const ResourceDetail: React.FC = () => {
  const { resource, id } = useParams<{ resource: string; id: string }>();
  const { theme } = useAppTheme();

  const { data: resourceData, isLoading: isResourceLoading, error: resourceError } = useQuery<Person>(
    ['resourceDetail', resource, id],
    () => fetchResourceDetail(resource as string, id as string)
  );

  const {
    data: enrichmentData,
    isLoading: isEnrichmentLoading,
    error: enrichmentError,
  } = useQuery<Planet>(
    ['enrichment', resourceData?.homeworld],
    () => fetchEnrichmentData(resourceData!.homeworld),
    { enabled: !!resourceData?.homeworld }
  );

  if (isResourceLoading) return <Loader size="xl" color="primary" />;
  if (resourceError) return <Text color="red">Error loading resource details.</Text>;

  return (
    <Container size="md" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
      <Card shadow="xl" padding="xl" radius="md" style={{ backgroundColor: theme === 'dark' ? '#1A1B1E' : '#E2E4F0', color: theme === 'dark' ? 'white' : 'black', width: '100%', maxWidth: 600 }}>
        <Title order={2} align="center" color={theme === 'dark' ? 'white' : '#3D4C7E'} mb="md">{resourceData?.name}</Title>
        <Divider my="sm" />
        <Group position="apart">
          <Badge color="blue" size="lg">Birth Year: {resourceData?.birth_year}</Badge>
          <Badge color="green" size="lg">Height: {resourceData?.height} cm</Badge>
        </Group>
        <Group position="apart" mt="sm">
          <Badge color="yellow" size="lg">Mass: {resourceData?.mass} kg</Badge>
          <Badge color="pink" size="lg">Eye Color: {resourceData?.eye_color}</Badge>
        </Group>
        <Group position="apart" mt="sm">
          <Badge color="purple" size="lg">Hair Color: {resourceData?.hair_color}</Badge>
          <Badge color="orange" size="lg">Skin Color: {resourceData?.skin_color}</Badge>
        </Group>
      </Card>
      {isEnrichmentLoading ? (
        <Loader size="xl" color="primary" mt="lg" />
      ) : enrichmentError ? (
        <Text color="red" mt="lg">Error loading enrichment data.</Text>
      ) : enrichmentData ? (
        <Card shadow="xl" padding="xl" radius="md" mt="lg" style={{ backgroundColor: theme === 'dark' ? '#25262B' : '#DCDDEC', color: theme === 'dark' ? 'white' : 'black', width: '100%', maxWidth: 600 }}>
          <Title order={3} align="center" color={theme === 'dark' ? 'white' : '#3D4C7E'} mb="md">Homeworld Details</Title>
          <Divider my="sm" />
          <Text align="center" size="lg" color={theme === 'dark' ? 'white' : 'black'}><b>Name:</b> {enrichmentData.name}</Text>
          <Text align="center" size="lg" color={theme === 'dark' ? 'white' : 'black'}><b>Climate:</b> {enrichmentData.climate}</Text>
          <Text align="center" size="lg" color={theme === 'dark' ? 'white' : 'black'}><b>Terrain:</b> {enrichmentData.terrain}</Text>
          <Text align="center" size="lg" color={theme === 'dark' ? 'white' : 'black'}><b>Population:</b> {enrichmentData.population}</Text>
        </Card>
      ) : null}
    </Container>
  );
};

export default ResourceDetail;