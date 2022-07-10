/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from '@hooks'
import Loading from '@components/loading'
import Approutes from './Routes'
import { useEffect } from 'react'
import Login from '@components/login'
import ProFileUser from '@components/profile_user'
import Main from '@layouts/Main'
import { Header, SiderBar } from '@components'
import PostList from '@components/PostList/PostList'
import CourseList from '@components/CourseLists'
import SwiperTest from '@components/SwiperTest'
import GameList from '@components/GameList'
import ProductList from '@components/ProductList'
import JobList from '@components/JobList'
import GroupList from '@components/GroupList'
import MainContent from '@components/MainContent'

// function App() {
//   const { isLoading, loadProfileAction } = useAuth()

//   useEffect(() => {
//     loadProfileAction()
//   }, [])

//   return isLoading ? (
//     <Loading />
//   ) : (
//     <Approutes />
//   )
// }

const App = () => {

  return (
    // <Login />
    // <div className='ml-[300px] pt-[65px]'>
    //   <ProFileUser/>
    // </div>

    <Main>
      <Header />
      <SiderBar />
      <MainContent>
        <ProFileUser />
        {/* <CourseList /> */}
        {/* <GameList /> */}
        {/* <ProductList /> */}
        {/* <JobList /> */}
        {/* <GroupList /> */}
      </MainContent>
    </Main>
  )
}

export default App
