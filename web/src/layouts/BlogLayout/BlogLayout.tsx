import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div>
      <header className="flex-column m-5 flex w-full gap-3 p-5">
        <Link to={routes.home()}>Redwood Blog</Link>
        <br />
        <nav className="flex flex-row flex-nowrap">
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="m-5 p-5">{children}</main>
    </div>
  )
}

export default BlogLayout
