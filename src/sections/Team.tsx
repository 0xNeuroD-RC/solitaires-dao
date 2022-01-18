import {
  Typography,
  Icon,
  createStyles,
  Theme,
  Link,
  Paper,
  Box,
  useMediaQuery
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
      border: `1px solid ${theme.palette.primary.main}`,
      '&:first-of-type': {
        marginLeft: 0
      },
      '&:last-of-type': {
        marginRight: 0
      }
    },
    imageContainerSm: {
      padding: theme.spacing(3),
      marginTop: theme.spacing(3),
      border: `1px solid ${theme.palette.primary.main}`
    },
    image: {
      maxWidth: '100%',
      borderRadius: theme.spacing(1)
    },
    stack: {
      flexWrap: 'wrap'
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
    paper: {}
  })
)

export const Team: React.FC<{}> = () => {
  const classes = useStyles()
  const mq = useMediaQuery('(min-width: 900px)')

  return (
    <Box id="team">
      <SectionTitle text="Team" />

      <Box className={mq ? classes.root : classes.stack}>
        <Paper
          className={mq ? classes.imageContainer : classes.imageContainerSm}
        >
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
            target="_blank"
          >
            <Typography className={classes.name}>King Solitaire</Typography>{' '}
            <Icon className="fab fa-twitter" />
          </Link>
        </Paper>

        <Paper
          className={mq ? classes.imageContainer : classes.imageContainerSm}
        >
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
            href="https://twitter.com/ru_cecillia"
            target="_blank"
          >
            <Typography className={classes.name}>Ginsburg</Typography>{' '}
            <Icon className="fab fa-twitter" />
          </Link>
        </Paper>

        <Paper
          className={mq ? classes.imageContainer : classes.imageContainerSm}
        >
          <Typography
            className={classes.position}
            variant="h4"
            color="textPrimary"
            align="center"
          >
            Lead Dev
          </Typography>
          <img
            className={classes.image}
            src={teamPlaceholder}
            alt="0xMMelvin"
          />
          <Link
            className={classes.link}
            href="https://twitter.com/0xMMelvin"
            target="_blank"
          >
            <Typography className={classes.name}>0xMMelvin</Typography>{' '}
            <Icon className="fab fa-twitter" />
          </Link>
        </Paper>
      </Box>
    </Box>
  )
}
