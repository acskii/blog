import { Link } from "react-router-dom";
import { Burger, Group, Box, ScrollArea, Drawer, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ThemeControl from "./ThemeControl";
import './NavBar.css';

const links = [
    {link: '/home', label: 'Home'},
    {link: '/posts', label: 'Posts'},
    {link: '/about', label: 'About'}
];

function NavBar() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const items = links.map((link) => (<Link key={link.label} to={link.link} onClick={close} className="link">
      {link.label}
    </Link>));
    return (
        <Box>
            <header className="header">
                <div className="inner">
                    <Group>
                        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm"/>
                        <h2 className="text-xl font-bold">Blog</h2>
                        <Link to="https://www.github.com/acskii/">
                            <span className="text-sm text-nowrap">| acskii</span>
                        </Link>
                    </Group>

                    <Group>
                        <Group ml={50} gap={5} className="links" visibleFrom="sm">
                            {items}
                        </Group>
                        <ThemeControl />
                    </Group>
                </div>
            </header>
             <Drawer
                opened={opened}
                onClose={close}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - 60px)`} mx="-md">
                    {items[0]}
                    <Divider my="sm" />
                    {items[1]}
                    <Divider my="sm" />
                    {items[2]}
                    <Divider my="sm" />
                </ScrollArea>
            </Drawer>
        </Box>
    );
}

export default NavBar;
