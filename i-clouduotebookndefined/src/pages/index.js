import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import About from '@/components/About'
import HomeMain from '@/components/HomeMain'
import NavBar from '@/components/NavBar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useRouteMatch,
} from "react-router-dom";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>I Cloud Notes
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={< HomeMain />}>Home</Route>
          <Route exact path='/about' element={< About />}>About</Route>
        </Routes>
      </Router>

    </>
  )
}
