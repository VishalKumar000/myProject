//@ts-nocheck
import React, { useEffect, useState } from 'react'
// import Image from 'Image'
import BarLoader from 'react-spinners/BarLoader'
import toast from 'react-hot-toast'

const MyImages = ({add_image}) => {

  const [images, setImages] = useState([])
  const [loader, setLoader] = useState(false)
  const image_upload = async (e) => {
    if (e.target.files.length > 0) {
      const formData = new FormData()
      formData.append('image', e.target.files[0])

      // try {
      //   setLoader(true)
      //   const { data } = await api.post('/api/add-user-image', formData)
        // setImages([...images, data.userImage])
        setImages([...images, {image_url:"https://images.unsplash.com/photo-1551021794-03be4ddaf67d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}])
      //   setLoader(false)
      // } catch (error) {
      //   setLoader(false)
      //   toast.error(error.response.data.message)
      // }
    }
  }


  useEffect(() => {
    const get_images = async () => {
      // try {
      //   const { data } = await api.get('/api/get-user-image')
      //   setImages(data.images)
      // } catch (error) {
      //   console.log(error)
      // }
    }
    get_images()
  }, [])

  return (
    <div>
      <div className='w-full h-[40px] flex justify-center items-center bg-purple-500 rounded-sm text-white mb-3'>
        <label className='text-center cursor-pointer' htmlFor="image">Upload image</label>
        <input readOnly={loader} onChange={image_upload} type="file" id='image' className='hidden' />
      </div>
      {
        loader && <div className='flex justify-center items-center mb-2'>
          <BarLoader color='#fff' />
        </div>
      }
      <div className='h-[80vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
        <Image add_image={add_image} images={images} />
      </div>
    </div>
  )
}

export default MyImages