import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Paper, Typography } from '@material-ui/core'
import { SectionTitle } from '../components/SectionTitle'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    collapse: {
      padding: theme.spacing(5),
      marginBottom: theme.spacing(5),
      border: `1px solid ${theme.palette.primary.main}`,
      flexGrow: 1,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: theme.palette.secondary.main,
      '&:last-child': {
        marginBottom: 0
      }
    },
    question: {
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    paper: {
      padding: theme.spacing(2),
      marginTop: theme.spacing(2),
      width: '100%',
      textAlign: 'center'
    }
  })
)

export const FAQ: React.FC<{}> = () => {
  const classes = useStyles()
  const [open, setOpen] = useState([false, false, false, false])

  const faqs = [
    {
      question: 'How many Kings and Queens will be minted?',
      answer: 'There will only be 2,222 Solitaires minted.'
    },
    {
      question: 'How much are the Solitaires?',
      answer: `The price of your Soltaire will be 0.88 ◎ at presale (for whitelisted addresses) and 0.88 ◎ when the mint is live.`
    },
    {
      question: 'How many addresses are on the whitelist?',
      answer: 'There will be 700 addresses whitelisted.'
    },
    {
      question: 'Where can I buy a Solitaire after the mint is over?',
      answer: 'We will be listing on Magic Eden shortly after the mint is over.'
    }
  ]

  const openFaq = (index: number, open: boolean) => {
    const allFalse = [false, false, false, false]
    setOpen(allFalse)
    allFalse[index] = !open
    setOpen(allFalse)
    console.log(open)
  }

  return (
    <Box id="faq">
      <SectionTitle text="FAQ" />

      {faqs.map(({ question, answer }, index: number) => (
        <Paper
          key={question}
          className={classes.collapse}
          onClick={() => openFaq(index, open[index])}
        >
          <Typography className={classes.question} align="center">
            {question}
          </Typography>
          {open[index] && (
            <Paper className={classes.paper}>
              <Typography>{answer}</Typography>
            </Paper>
          )}
        </Paper>
      ))}
    </Box>
  )
}
