import React from 'react'
import { makeStyles, Theme, createStyles, Link } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    social: {
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },
    icon: {
      color: theme.palette.primary.main,
      marginRight: theme.spacing(2)
    }
  })
)

export const SocialBar: React.FC<{
  size?: '2x' | '3x'
  grow?: number
}> = ({ size, grow }) => {
  const classes = useStyles()

  return (
    <div className={`${classes.social}`}>
      <Link href="https://discord.gg/4NzpjHfU">
        <i
          className={`${classes.icon} ${
            size ? 'fa-' + size : ''
          } fab fa-discord`}
        />
      </Link>
      <Link href="https://t.me/NFTArtMaster">
        <i
          className={`${classes.icon} ${
            size ? 'fa-' + size : ''
          } fab fa-telegram`}
        />
      </Link>
      <Link href="https://twitter.com/solitairesNFT">
        <i
          className={`${classes.icon} ${
            size ? 'fa-' + size : ''
          } fab fa-twitter`}
        />
      </Link>
    </div>
  )
}
