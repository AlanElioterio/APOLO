import React from 'react'

function MusicComponent({ params }: { params: { musicId: string } }) {
  return (
    <div>
      {params.musicId}
    </div>
  )
}

export default MusicComponent
