import {
  Typography,
  Paper,
  createStyles,
  makeStyles,
  Theme,
  Box
} from '@material-ui/core'
import React from 'react'
import { SectionTitle } from '../components/SectionTitle'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(5)
    }
  })
)

export const About: React.FC<{}> = () => {
  const classes = useStyles()

  return (
    <Box id="about">
      <SectionTitle text="About the DAO" />
      <Paper className={classes.paper}>
        <Typography align="center">
          The Solitaires are a collection of 2,222 King and Queen couples living
          on the Solana blockchain. We are the very first project to contribute
          100% of secondary royalties to our DAO. The DAO will have between
          12-15 board members which will present ideas to the community that
          members will vote on. Winning ideas will be implemented by our
          development team.
        </Typography>
      </Paper>
    </Box>
  )
}
