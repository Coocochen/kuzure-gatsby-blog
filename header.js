/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, css, Themed } from "theme-ui"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Bio from "./bio"

const Title = ({ children }) => {
  return (
    <Themed.h1
      css={css({
        my: 0,
        fontSize: 4,
        marginTop: 50,
      })}
    >
      <Themed.a
        as={Link}
        css={css({
          color: `white`,
          boxShadow: `none`,
          textDecoration: `underline`,
          ":hover": {
            color: `gray`,
          },
        })}
        to={`/`}
      >
        {children}
      </Themed.a>
    </Themed.h1>
  )
}

const Header = props => (
  <div>
    <header
      css={css({
        backgroundImage: `url('${__PATH_PREFIX__}/index-bg.png')`,
        pb: 80,
      })}
    >
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4,
        })}
      >
        <div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            mb: 4,
          })}
        >
          <Title {...props}>Kuzure's blog</Title>
        </div>
        {<Bio {...props} />}
      </div>
    </header>
  </div>
)

export default Header
