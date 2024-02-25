import React from 'react'

const Modul = ({isVisible, onClose,children}) => {

    if ( !isVisible ) return null;

    const handleClose = (e) => {
        if( e.target.id === 'wrapper' ) onClose();
    }

  return (
    <div className=' fixed inset-0 bg-black
    bg-opacity-25 backdrop-blur-sm flex
    justify-center items-center'id='wrapper' onClick={handleClose}>
        <div className='w-[600px]  flex flex-col bg-white'> {/* md:w-[600px] [w-100%] mx-auto */}
            <button className='text-black text-2xl font-bold' onClick={()=> onClose()}>X</button> {/* place-self-end*/}
            <div className='text-black  p-2 rounded'>{children}</div>
        </div>
    </div>
  )
}

export default Modul