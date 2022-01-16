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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          impedit quia ipsum, facere itaque voluptatem cum voluptatum eos
          numquam nam! Laudantium sequi error dolores esse atque praesentium
          natus. Perferendis, rerum. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perferendis iusto officia enim saepe expedita
          asperiores recusandae rem consectetur veniam, nesciunt officiis ipsam
          voluptate quam ipsa vero earum. Molestias, magni incidunt. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Tempora impedit quia
          ipsum, facere itaque voluptatem cum voluptatum eos numquam nam!
          Laudantium sequi error dolores esse atque praesentium natus.
          Perferendis, rerum. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Perferendis iusto officia enim saepe expedita asperiores
          recusandae rem consectetur veniam, nesciunt officiis ipsam voluptate
          quam ipsa vero.
        </Typography>
      </Paper>
    </Box>
  )
}
