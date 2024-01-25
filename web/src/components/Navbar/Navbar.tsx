import { Navbar, Group, Text } from '@mantine/core'
import { Link, routes } from '@redwoodjs/router'

import { useStyles } from 'src/hooks/useStyles'


export const Topbar = () => {
  const { classes } = useStyles()

  return (
    <>
      <Navbar height={60}>
        <Link to={routes.home()}>Redwood Blog</Link>
        <br />
        <Group sx={{ height: '100%' }} spacing={0} position="center">
          <Link to={routes.home()} className={classes.link}>
            <Text>Home</Text>
          </Link>
          <Link to={routes.about()} className={classes.link}>
            <Text sx={{alignSelf: 'center'}}>About</Text>
          </Link>
        </Group>
      </Navbar>
    </>
)}
