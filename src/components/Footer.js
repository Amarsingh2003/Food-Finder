import React from 'react'
import { FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagramSquare,FaTwitterSquare } from 'react-icons/fa';
const Footer = () => {
    return ( 
        <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b] '>
            <div className='py-16 grid lg:grid-cols-3 gap-8 text-gray-300'>
                <div>
                    <h1 className='w-full text-3xl font-bold text-orange-500'>FoodFinder!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, dicta vero 
                        inventore adipisci laudantium quidem reprehenderit
                         eius suscipit aperiam maxime explicabo ipsa obcaecati accusantium pariatur.</p>
                         <div className='flex justify-between md:w-[75%] my-6'>
                            <FaFacebookSquare size={30}/>
                            <FaInstagramSquare size={30}/>
                            <FaTwitterSquare size={30}/>
                            <FaGithubSquare size={30}/>
                            <FaDribbbleSquare size={30}/>
                         </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;