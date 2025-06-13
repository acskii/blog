import { Center, Stack, Text, Button, Paper, Group } from "@mantine/core";
import { IconExclamationCircle, IconArrowLeft } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";

function ErrorPage () {
    const location = useLocation();
    const errorText = location.state?.message || "This page currently doesn't exist...";

    return (
        <Center>
            <Paper w="50%" p="lg" withBorder="xl" bd="4px solid red.4" bg="">
                <Stack justify="center" align="center" gap="sm">
                    <Group>
                        <Text c="red"><IconExclamationCircle size={40} /></Text>
                        <Text c="red" fw={900} size="lg" m={0}>ATTENTION</Text>
                    </Group>
                    <Text fw={750} size="lg" m={0}>{errorText}</Text>
                    <Text c="dimmed">Please head back to home page!</Text>
                    <Link to="/home">
                        <Button leftSection={<IconArrowLeft size={14} />} variant="filled" color="red">
                            Go back
                        </Button>
                    </Link>
                </Stack>
            </Paper>
        </Center>
    );
}

export default ErrorPage;