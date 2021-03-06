import React from 'react'
import { Card, CardTitle, CardActions, CardMedia } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const LetterheadCard = ({ image, title, action }) => {
  return (
    <div
      className='col s12 m6 letterhead-card'
      style={{ paddingBottom: '0.75rem' }}
    >
      <Card>
        <CardMedia>
          <img src={image} alt={title} />
        </CardMedia>
        <CardTitle title={title} />
        <CardActions>
          <FlatButton label={action} />
        </CardActions>
      </Card>
    </div>
  )
}

export default LetterheadCard
