'use client'

import { Group, Burger, Image, Drawer } from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import classes from './navbar.module.css';

const links = [
  { link: '/signin', label: 'SIGN IN' },
  { link: '/signup', label: 'SIGN UP' },
];

function Navbar() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </a>
      ));

    return (
        <header className={classes.header}>

        <div className={classes.inner}>
          <Group>
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
            <Image w={50} src="/mechanic.png" alt="Bob"/>
          </Group>
  
          <Group>
            <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
                {items}
            </Group>
          </Group>
        </div>
        <Drawer opened={opened} onClose={toggle} size="sm" padding="md">
            <nav className={classes.drawerLinks}>
                {items}
            </nav>
      </Drawer>
      </header>
    );
}

export default Navbar;