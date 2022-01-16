import React from 'react'
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import { SocialBar } from './SocialBar'
import { BrandLogo } from './BrandLogo'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      marginBottom: theme.spacing(10)
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
        <SocialBar size="2x" />
      </Grid>
    </Grid>
  )
}
