import { Box, Text } from '@mantine/core'
import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <Box>
      <MetaTags title="Home" description="Home page" />
      <Text>Home</Text>
      <ArticlesCell />
    </Box>
  )
}

export default HomePage
