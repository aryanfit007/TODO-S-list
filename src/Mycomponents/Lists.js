import React from 'react'
export const Lists = (props) => {
  return (
    <div className='text-center'>
        <h4>{props.show.title}</h4>
        <p>{props.show.dec}</p>

        <button className="btn btn-danger btn-sm "onClick={()=>{props.deleteit(props.show)}}>Delete</button>
        <hr />
    </div>
  )
}
