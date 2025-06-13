import { useEffect, useState } from 'react';
import { Avatar, Text, Title, Container, Loader, Group, Paper, Center, Stack, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { SocialButtons } from '../components/SocialButtons';

function About () {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    fetch(`https://api.github.com/users/acskii`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('[Request API Error] Failed fetching GitHub profile.', err);
        setLoading(false);
        navigate('/error', { state: { message: "Failed fetching GitHub profile.." } });
      });
  }, []);

  if (loading) {
    return (
      <Container my="xl" size="sm">
        <Center>
            <Loader />
        </Center>
      </Container>
    );
  }

  return (
    <div>
        <Container my="xl" size="md">
            <Paper p="md" shadow="sm" radius="md" withBorder>
                    <Group spacing="lg" noWrap={!isMobile} align={isMobile ? 'center' : 'flex-start'} direction={isMobile ? 'column' : 'row'}>
                        <Box style={{ display: isMobile ? 'flex' : 'block', justifyContent: 'center', width: isMobile ? '100%' : 'auto',}}>
                            <Avatar
                            src={profile.avatar_url}
                            size={200}
                            radius="md"
                            />
                        </Box>
                        <Stack spacing="xs" align={isMobile ? 'center' : 'flex-start'}>
                            <Title order={3} m={0} p={0}>{profile.name || profile.login}</Title>
                            <Text size="sm" c="dimmed">
                                @{profile.login}
                            </Text>
                            {profile.bio && <Text mt="xs">{profile.bio}</Text>}
                            <div>
                                <SocialButtons />
                            </div>
                        </Stack> 
                    </Group>
            </Paper>
        </Container>
    </div>
  );
};

export default About;
