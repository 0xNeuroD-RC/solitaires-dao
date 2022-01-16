import React from 'react'
import {
  Grid,
  Container,
  Paper,
  Typography,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core'
import king2 from '../assets/img/king-02.png'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      borderRadius: `0.25rem`,
      width: '100%'
    },
    hero: {
      display: 'flex',
      alignItems: 'center'
    },
    heroText: {
      fontFamily: 'Regular',
      lineHeight: '4rem'
    },
    fancy: {
      color: theme.palette.primary.main,
      fontFamily: 'FCText'
    },
    bigger: {
      fontSize: '3rem'
    },
    paper: {
      padding: theme.spacing(3)
    }
  })
)

export const Hero: React.FC<{}> = () => {
  const classes = useStyles()

  return (
    <Grid
      id="hero"
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Container maxWidth="sm">
          <Paper className={classes.paper}>
            <img className={classes.image} src={king2} alt="King" />
          </Paper>
        </Container>
      </Grid>
      <Grid item>
        <Container maxWidth="xs" style={{ position: 'relative' }}>
          <Paper className={classes.paper}>
            <Typography variant="h4" className={classes.heroText}>
              A collection of 2222 3D
              <span className={`${classes.fancy} ${classes.bigger}`}>K</span>
              ings and{' '}
              <span className={`${classes.fancy} ${classes.bigger}`}>Q</span>
              ueens on the Solana bl
              <span className={classes.fancy}>◎</span>ckchain
            </Typography>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  )
}
