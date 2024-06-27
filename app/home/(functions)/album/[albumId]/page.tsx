import React from 'react'

function AlbumPage({ params }: { params: { albumId: string } }) {
  
  return (
    <div>
      {params.albumId}
    </div>
  )
}

export default AlbumPage
