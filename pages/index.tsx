import Layout from '../components/Layout'
import { useRouter } from "next/router";


function index() {
  const router = useRouter();


  return (
  
    




      
      
   <div className="bodybackground dark:bg-gray-900">
        <Layout  
         className='select-none '
        herfFacebook='https://www.facebook.com/divzoon'
        herfInsta='https://www.instagram.com/divzoon/'
        herfTwitter='https://twitter.com/divzoon'
        HerfDash='#'
        Herfabout='/about'
        HerfContact='/Contact'
        HerfService='/Services'
        herflogoLink={"/"}
        herflogo='/ico/1.png'
        imgFlagArabic='/Images/flags/Egypt.png'
        imgFlagEnglish='/Images/flags/Usa.png'
        enUrl={"/"}
        arUrl={"/ar"}
        title="DivDash | by Divzoon">
       <div className="bodybackground dark:bg-gray-900">   <h1>About page: </h1> </div>
      
        </Layout>
   </div>
      
      



  )
}

export default index

