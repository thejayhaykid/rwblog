import { Box } from '@mantine/core'

import {Topbar} from 'src/components/Navbar/Navbar'



type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {

  return (
    <Box>
      <Topbar />
      <main className="m-5 p-5">{children}</main>
    </Box>
  )
}

export default BlogLayout
