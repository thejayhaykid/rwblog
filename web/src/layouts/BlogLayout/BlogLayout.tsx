import { Box, Group, Header, Text } from '@mantine/core'

import { Link, routes } from '@redwoodjs/router'

import { useStyles } from 'src/hooks/useStyles'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { classes, theme } = useStyles()

  return (
    <Box>
      <Header height={60}>
        <Link to={routes.home()}>Redwood Blog</Link>
        <br />
        <Group sx={{ height: '100%' }} spacing={0} position="center">
          <Link to={routes.home()} className={classes.link}>
            <Text>Home</Text>
          </Link>
          <Link to={routes.about()} className={classes.link}>
            <Text>About</Text>
          </Link>
        </Group>
      </Header>
      <main className="m-5 p-5">{children}</main>
    </Box>
  )
}

export default BlogLayout
