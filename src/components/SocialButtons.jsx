import { Button, Group } from '@mantine/core';
import { IconBrandGithubFilled,  IconBrandLinkedin, IconBrandGmail } from '@tabler/icons-react';
import "./SocialButtons.css";
import { Link } from 'react-router-dom';

export function GithubButton({ children }) {
  return (
    <Link to="https://github.com/acskii" target="_blank" rel="noopener noreferrer">
        <Button leftSection={<IconBrandGithubFilled size={16} />} className="githubButton">{children}</Button>
    </Link>
  );
}

export function LinkedInButton({ children }) {
  return (
    <Link to="https://www.linkedin.com/in/andrew-sameh-adel/" target="_blank" rel="noopener noreferrer">
        <Button leftSection={<IconBrandLinkedin size={16} />} className="linkedInButton">{children}</Button>
    </Link>
  );
}

export function GmailButton({ email, subject = "", body = "", children }) {
    const params = (subject || body) ? `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` : "";
    return (
        <Link to={`mailto:${email}${params}`}>
            <Button leftSection={<IconBrandGmail size={16} />} variant="default">{children}</Button>
        </Link>
    );    
}

export function SocialButtons() {
  return (
    <Group justify="center" p="md">
      <GmailButton email="andrew.sameh.adel@gmail.com">Send E-mail</GmailButton>
      <GithubButton>GitHub</GithubButton>
      <LinkedInButton>LinkedIn</LinkedInButton>
    </Group>
  );
}