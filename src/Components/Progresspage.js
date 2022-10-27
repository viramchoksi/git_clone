import React from 'react'

function Progresspage() {

    const progress = [
        {name : "Open"},
        {name : 'In Progress'},
        {name : "Closed"}
    ]

    console.log(progress);

  return (
    <div>
        {
            progress.map((progress)=> {

            })
        }
    </div>
  )
}

export default Progresspage