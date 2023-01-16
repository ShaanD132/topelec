import Head from 'next/head'
import Image from 'next/image'
import Navbar from 'components/navbar'
import MainText from '@/components/maintext'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className = "main flex flex-col">
        <Navbar />
        <img alt = "industrial" src = "/assets/test.png" className = "absolute z-1 main-image w-full h-full object-cover"/>
        <MainText />
        <div className = "relative flex-grow-1 z-10 items-center flex justify-center text-center mb-4">
          <Image width = {100} height = {100} alt = "scroll-down" src = "/assets/arrow.png"/>
        </div>
      </div>
    </>
  )
}
