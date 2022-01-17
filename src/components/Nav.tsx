import React from 'react'
import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme
} from '@material-ui/core'
import { SocialBar } from './SocialBar'
import { BrandLogo } from './BrandLogo'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      marginBottom: theme.spacing(10)
    },
    navButton: {
      marginRight: theme.spacing(2)
    }
  })
)

export const Nav: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid
      id="nav"
      container
      justifyContent="space-between"
      alignItems="center"
      wrap="nowrap"
      className={classes.nav}
    >
      <Grid item>
        <BrandLogo maxWidth="40%" />
      </Grid>
      <Grid item>
        <Button
          className={classes.navButton}
          href="https://solitaires-dao.com"
          target="_blank"
        >
          Mint
        </Button>
      </Grid>
      <Grid item>
        <SocialBar size="2x" />
      </Grid>
    </Grid>
  )
}
