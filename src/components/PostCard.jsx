import { Link } from 'react-router-dom';
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import './PostCard.css';

function PostCard({post}) {
    const { id, title, author, created_at, updated_at, tags } = post;
    const ca = new Intl.DateTimeFormat(["ban", "id"]).format(new Date(created_at));
    const ua = new Intl.DateTimeFormat(["ban", "id"]).format(new Date(updated_at));
    const postLink = `/posts/${id}`;
    const tagList = tags.map((tag) => <Badge className="label-card" variant="light" key={tag}>{tag}</Badge>);

    return (
    <Card withBorder radius="md" p="md" className="card text-wrap" w="100%" key={id}>
        <Card.Section className="section-card" mt="md">
            <Group justify="apart">
                <Text fz="lg" fw={500}>
                    {title}
                </Text>
                <Badge size="sm" variant="light" color="orange">
                    {author}
                </Badge>
            </Group>
        </Card.Section>
        <Card.Section className="section-card" mt="md">
            <Group gap="7" mt="5">
               {tagList}
            </Group>
        </Card.Section>
        <Group mt="xs" className="flex flex-row justify-end items-center">
            <Link to={postLink}>
                <Button radius="md" style={{ flex: 1 }}>
                Show article
                </Button>
            </Link>
            <div key={"created_at_date_" + id}>
                <Text size="xs" c="dimmed">
                    Created at
                </Text>
                <Text fw={500} size="sm">
                    {ca}
                </Text>
            </div>
            <div key={"updated_at_date_" + id}>
                <Text size="xs" c="dimmed">
                    Updated at
                </Text>
                <Text fw={500} size="sm">
                    {ua}
                </Text>
            </div>
        </Group>
    </Card>);
}

export default PostCard;