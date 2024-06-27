import React from 'react'

function GenderPage({ params }: { params: { genderId: string } }) {
  return (
    <div>
      {params.genderId}
    </div>
  )
}

export default GenderPage
