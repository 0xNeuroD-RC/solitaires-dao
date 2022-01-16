import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
)

export const Splash: React.FC<{}> = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="h1" color="primary">
        Coming Soon...
      </Typography>
    </Box>
  )
}
