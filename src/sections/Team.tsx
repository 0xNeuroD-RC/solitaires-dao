import {
  Typography,
  Icon,
  createStyles,
  Theme,
  Link,
  Paper,
  Box
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import teamPlaceholder from '../assets/img/king-01.png'
import { SectionTitle } from '../components/SectionTitle'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    position: {
      fontFamily: 'Assassin'
    },
    imageContainer: {
      margin: theme.spacing(3),
      padding: theme.spacing(3),
      border: `1px solid ${theme.palette.primary.main}`
    },
    image: {
      maxWidth: '100%',
      borderRadius: theme.spacing(1)
    },
    link: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: theme.spacing(1)
    },
    name: {
      marginRight: theme.spacing(1),
      fontFamily: 'Assassin',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    paper: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(2)
    }
  })
)

export const Team: React.FC<{}> = () => {
  const classes = useStyles()

  return (
    <Box id="team">
      <SectionTitle text="Team" />

      <Box className={classes.root}>
        <Paper className={classes.imageContainer}>
          <Typography
            className={classes.position}
            variant="h4"
            color="textPrimary"
            align="center"
          >
            King
          </Typography>
          <img
            className={classes.image}
            src={teamPlaceholder}
            alt="King Solitaire"
          />
          <Link
            className={classes.link}
            href="https://twitter.com/SOLitairesNFT"
          >
            <Typography className={classes.name}>King Solitaire</Typography>{' '}
            <Icon className="fab fa-twitter text-blue" />
          </Link>
        </Paper>

        <Paper className={classes.imageContainer}>
          <Typography
            className={classes.position}
            variant="h4"
            color="textPrimary"
            align="center"
          >
            Artist
          </Typography>
          <img className={classes.image} src={teamPlaceholder} alt="Artist" />
          <Link
            className={classes.link}
            href="https://twitter.com/SOLitairesNFT"
          >
            <Typography className={classes.name}>Artist</Typography>{' '}
            <Icon className="fab fa-twitter text-blue" />
          </Link>
        </Paper>

        <Paper className={classes.imageContainer}>
          <Typography
            className={classes.position}
            variant="h4"
            color="textPrimary"
            align="center"
          >
            Developer
          </Typography>
          <img
            className={classes.image}
            src={teamPlaceholder}
            alt="0xMMelvin"
          />
          <Link className={classes.link} href="https://twitter.com/0xMMelvin">
            <Typography className={classes.name}>0xMMelvin</Typography>{' '}
            <Icon className="fab fa-twitter text-blue" />
          </Link>
        </Paper>
      </Box>
    </Box>
  )
}
