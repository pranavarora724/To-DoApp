"use client"
import React, { useState } from 'react';

function Page() {
  const [title, setTitle] = useState("");
  const [disc, setDisc] = useState("");
  const [maintask, setMaintask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMaintask([...maintask, { title, disc }])
    setDisc("")
    setTitle("")
    console.log(maintask)
  }

  const handleDelete = (i) => {
    let copytask = [...maintask]
    copytask.splice(i,1)
    setMaintask(copytask)
  }

  let render = <div>NO task avalible</div>

  if (maintask.length > 0) {
    render = maintask.map((t, i) => {
      return (<div className='flex justify-between '>
        <h5>{t.title}</h5>
        <h5>{t.disc}</h5>
        <button onClick={() => { handleDelete(i) }}>Delete</button>
      </div>)
    });

  }
  return (
    <>
      <h1>To-Do List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='border-2 m-2' placeholder='Enter Task here' value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <input type="text" className='border-2 m-2' placeholder='Enter Description here' value={disc} onChange={(e) => { setDisc(e.target.value) }} />
        <button type="submit" className='border-2 m-2'>Add Task</button>
      </form>
      <hr />

      <div className='bg-slate-200'>

        <ul>
          {render}
        </ul>
      </div>
    </>
  );
}

export default Page;
