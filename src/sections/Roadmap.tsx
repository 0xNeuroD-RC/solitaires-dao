import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Theme,
  Typography
} from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'
import React from 'react'
import { SectionTitle } from '../components/SectionTitle'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontFamily: 'FCText',
      color: theme.palette.primary.main,
      paddingBottom: theme.spacing(3)
    },
    listIcon: {
      color: theme.palette.primary.main
    },
    divider: {
      margin: theme.spacing(2)
    },
    paper: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  })
)

export const Roadmap: React.FC<{}> = () => {
  const classes = useStyles()

  return (
    <Box id="roadmap">
      <SectionTitle text="Roadmap" />

      <Paper className={classes.paper}>
        <Typography align="justify">
          We believe that the community should decide where their royalties go.
          We’ve seen many projects who promise many things continuosly fail.
          That’s why 100% of secondary funds will go to the DAO, thus giving the
          community power to decide where and how it will be spent. The DAO
          wallet address will be public to the Solitaires community and
          trackable on Solscan.io. With access to our phenomenal devs who
          actually do something, we have a great range of possibilities of what
          the funds can be used for.
        </Typography>

        <Divider className={classes.divider} />
        <Typography align="center">
          Owning a Solitaire will also get you whitelisted for future projects
          we launch in the Solana ecosystem!
        </Typography>
        <Divider className={classes.divider} />

        <List>
          <ListItem>
            <ListItemIcon className={classes.listIcon}>
              <i className="fas fa-money-bill fa-2x" />
            </ListItemIcon>
            <ListItemText primary="Creating a coin and staking Solitaires to receive the coin." />
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.listIcon}>
              <i className="fas fa-restroom fa-2x" />
            </ListItemIcon>
            <ListItemText primary="Breeding" />
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.listIcon}>
              <i className="fas fa-gamepad fa-2x" />
            </ListItemIcon>
            <ListItemText primary="Coin flip betting or other games" />
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.listIcon}>
              <i className="fas fa-piggy-bank fa-2x" />
            </ListItemIcon>
            <ListItemText primary="DAO governed NFT trades" />
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.listIcon}>
              <i className="fas fa-infinity fa-2x" />
            </ListItemIcon>
            <ListItemText primary="The possibilities are endless" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  )
}
