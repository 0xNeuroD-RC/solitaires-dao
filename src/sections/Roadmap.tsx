import { Box, Paper, Theme, Typography } from '@material-ui/core'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator
} from '@material-ui/lab'
import { createStyles, makeStyles } from '@material-ui/styles'
import React from 'react'
import { SectionTitle } from '../components/SectionTitle'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontFamily: 'FCText',
      color: theme.palette.primary.main,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    paper: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(5)
    }
  })
)

export const Roadmap: React.FC<{}> = () => {
  const classes = useStyles()

  const timeline = [
    {
      dot: 'A',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem reprehenderit dolorem asperiores illo vitae obcaecati cumque officiis, tempora adipisci nam sequi repellat libero facilis labore officia perferendis. Blanditiis, fugit accusamus.'
    },
    {
      dot: 'K',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem reprehenderit dolorem asperiores illo vitae obcaecati cumque officiis, tempora adipisci nam sequi repellat libero facilis labore officia perferendis. Blanditiis, fugit accusamus.'
    },
    {
      dot: 'Q',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem reprehenderit dolorem asperiores illo vitae obcaecati cumque officiis, tempora adipisci nam sequi repellat libero facilis labore officia perferendis. Blanditiis, fugit accusamus.'
    },
    {
      dot: 'J',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem reprehenderit dolorem asperiores illo vitae obcaecati cumque officiis, tempora adipisci nam sequi repellat libero facilis labore officia perferendis. Blanditiis, fugit accusamus.'
    }
  ]

  return (
    <Box id="roadmap">
      <SectionTitle text="Roadmap" />

      {timeline.map(({ dot, text }) => (
        <Timeline align="right">
          <TimelineItem>
            <TimelineSeparator>
              <Typography
                className={classes.icon}
                variant="h3"
                color="textPrimary"
              >
                {dot}
              </Typography>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper className={classes.paper}>
                <Typography>{text}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      ))}
    </Box>
  )
}
