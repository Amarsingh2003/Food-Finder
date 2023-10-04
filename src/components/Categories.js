import React from 'react'
import{categories} from '../data/data'
const Categories = () => {
    return (
        <div className='max-w-[1520px] m-auto px-4 py-12'>
            <h1 className="text-orange-500 text-2xl text-center">Trending Categories</h1>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-5'>
                {categories.map((item)=>{
                    return <div key={item.id} className='p-4 flex justity-center items-center hover:scale-105 duration-300'>
                        <img src={`${item.image}` } alt="item.name"  className='w-[80px] h-[80px] md:w-[120px] md:h-[120px]'  />

                    </div>
                })}
            </div>
        </div>
      );
}
 
export default Categories;