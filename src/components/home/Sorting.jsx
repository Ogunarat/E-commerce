import React from 'react'

const Sorting = ({setSorting}) => {
  return (
    <div className='bg-gray-100 flex justify-end items-center p-3 mt-2'>
        <select onChange={(e)=>setSorting(e.target.value)} name="" id="" className='p-2 border-none outline-none rounded-lg cursor-pointer'>
            <option  value="">Seçiniz</option>
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
        </select>
    </div>
  )
}

export default Sorting