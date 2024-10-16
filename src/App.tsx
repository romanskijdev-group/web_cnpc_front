import { Route, Routes } from 'react-router-dom';
import { Home, Error, Auth, Profile, QuestPage, DialogPage, NpcPage, MainPage } from './pages'
import { DefaultLayout } from './components/layout/DefaultLayout'
import AOS from 'aos'
import { useEffect } from 'react'

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })

  return (
      <div>
          <Routes>
              <Route index path='/' element={<MainPage/>} />
              <Route path="/dashboard" element={<DefaultLayout/>}>
                  <Route path='/dashboard/login' element={<Auth/>} />
                  <Route path='/dashboard/home' element={<Home/>} />
                  <Route path='/dashboard/profile' element={<Profile/>} />
                  <Route path='/dashboard/quests' element={<QuestPage/>} />
                  <Route path='/dashboard/dialogs' element={<DialogPage/>} />
                  <Route path='/dashboard/npc' element={<NpcPage/>} />
                  <Route path='*' element={<Error/>} />
              </Route>
          </Routes>
      </div>
  )
}

export default App
