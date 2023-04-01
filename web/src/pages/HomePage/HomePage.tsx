import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <div className="top-10 text-center">
      <MetaTags title="Home" description="Home page" />
      Home
    </div>
  )
}

export default HomePage
