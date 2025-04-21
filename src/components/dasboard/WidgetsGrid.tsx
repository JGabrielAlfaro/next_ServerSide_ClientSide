
'use client'
import { SimpleWidget } from './SimpleWidget'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store'

export const  WidgetsGrid =() => {

    //Tomando los datos del Store
    const isCart= useAppSelector((state) => state.counter.count);


  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
    <SimpleWidget 
        title={ `${isCart}`}
        subtitle="Productos agregados" 
        label="Contador"
        icon={<IoCartOutline size={70}  className="text-blue-500"/>}    

        href="/dashboard/counter"
    />
  </div>
  )
}
