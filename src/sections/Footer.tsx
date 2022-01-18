import { FC } from 'react'
import {
  Typography,
  Link,
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Box,
  useMediaQuery
} from '@material-ui/core'
import { BrandLogo } from '../components/BrandLogo'
import { SocialBar } from '../components/SocialBar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      marginTop: theme.spacing(15),
      fontWeight: 'bold',
      borderTop: `1px solid ${theme.palette.primary.main}`,
      borderBottom: `1px solid ${theme.palette.primary.main}`
    },
    footerLink: {
      color: theme.palette.common.white,
      paddingBottom: theme.spacing(0.5)
    },
    createdBy: {
      width: '100%',
      fontFamily: 'Assassin',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    }
  })
)

export const Footer: FC = () => {
  const classes = useStyles()
  const mq = useMediaQuery('(min-width: 900px)')

  return (
    <Box id="footer">
      <Grid
        className={classes.footer}
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        wrap="nowrap"
      >
        <BrandLogo maxWidth={mq ? '40%' : '50%'} />
        <Grid item>
          <Grid container direction="column">
            <Link className={classes.footerLink} href="#nav">
              Home
            </Link>
            <Link className={classes.footerLink} href="#about">
              About
            </Link>
            <Link className={classes.footerLink} href="#roadmap">
              Roadmap
            </Link>
            <Link className={classes.footerLink} href="#faq">
              FAQ
            </Link>
            <Link className={classes.footerLink} href="#team">
              Team
            </Link>
          </Grid>
          <SocialBar size="2x" />
        </Grid>
      </Grid>

      <Box className={classes.createdBy}>
        <Typography className={classes.createdBy} color={`primary`}>
          Created by <Link href="https://twitter.com/0xMMelvin">0xMMelvin</Link>
        </Typography>
      </Box>
    </Box>
  )
}
