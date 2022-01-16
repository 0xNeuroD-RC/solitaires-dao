import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontFamily: 'Assassin',
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(5)
    }
  })
)

export const SectionTitle: React.FC<{ text: string }> = ({ text }) => {
  const classes = useStyles()

  return (
    <Grid container direction="row" justifyContent="center">
      <Typography className={classes.heading} variant="h2" color="primary">
        {text}
      </Typography>
    </Grid>
  )
}
