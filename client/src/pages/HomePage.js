import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'
import RoomCard from '../components/RoomCard';


function HomePage() {
  const [auth, setAuth] = useAuth();
  const [page, setPage] = useState(1);
  const rooms = [
    {
      id: 1,
      title: "Phòng trọ số 1",
      address: "Giáp Nhị",
      price: "4000000",
      waterPrice: "30000",
      elecPrice: "4000",
      description: "Phòng trọ mới siêu hiện đại"
    },
    {
      id: 2,
      title: "Phòng trọ số 2",
      address: "Giáp Nhị",
      price: "3500000",
      waterPrice: "30000",
      elecPrice: "4000",
      description: "Phòng trọ mới siêu hiện đại"
    },
    {
      id: 3,
      title: "Phòng trọ số 3",
      address: "Giáp Nhị",
      price: "2800000",
      waterPrice: "30000",
      elecPrice: "4000",
      description: "Phòng trọ mới siêu hiện đại"
    },
    {
      id: 4,
      title: "Phòng trọ số 4",
      address: "Giáp Nhị",
      price: "2800000",
      waterPrice: "30000",
      elecPrice: "4000",
      description: "Phòng trọ mới siêu hiện đại"
    }
  ]

  return (
    <Layout title="Trang chủ">
      {/* Banner */}
      <div className='mb-28'>
        <img className='w-full h-full bg-no-repeat bg-top bg-cover object-cover' src="/images/homepage.jpg" alt="" />
      </div>

      {/* List Room  */}
      <div className='list-room'>
        <h3 className='text-3xl font-medium leading-normal mb-5'>Searching for the Best Places?</h3>
        <div className='flex place-content-between flex-wrap'>
          {rooms.map((room, index) => (
            <RoomCard key={index} data={room}/>
          ))}
        </div>
      </div>

      {/* About  */}
      <div className='bg-[#0FB45F] flex'>
        <div className='w-[1200px] mx-auto flex'>
          <div className='w-[45%] flex flex-col mr-10 justify-center '>
              <h4 className='text-4xl text-white font-bold leading-[1.3] mb-5'>Simplifying Your Search, Matching Your Needs with Ease!</h4>
              <p className='mb-5 text-white text-base leading-[1.4] font-normal'>
                Với PhongTroHN, bạn có thể duyệt qua hàng ngàn phòng trọ trên khắp khu vực, tùy chỉnh theo ngân sách, tiện nghi, và vị trí. Hệ thống tìm kiếm thông minh của chúng tôi giúp bạn nhanh chóng đáp ứng đúng nhu cầu của mình.
              </p>
              <p className='mb-5 text-white text-base leading-[1.4] font-normal'>
                Hãy để Student Homes trở thành người bạn đồng hành đáng tin cậy của bạn trong hành trình tìm kiếm nơi ở mới. Tìm kiếm dễ dàng, chính xác, và thuận tiện.
              </p>
              <a href='/' className='text-lg font-medium text-white bg-gradient-to-l from-[#140C40] to-[#0e0835] py-[14px] px-[34px] inline-block rounded-3xl w-[190px] hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500'>
                Tìm hiểu thêm
              </a>
          </div>

          <div className='flex'>
            <img 
              src='/images/about_image.jpg' 
              className='min-h-[580px] '
              alt=""
            />
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default HomePage
