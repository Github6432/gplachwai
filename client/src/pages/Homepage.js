import React from 'react'
import Layout from '../components/Layout/Layout'
import { useSelector } from 'react-redux';

const Homepage = () => {
  // const loginState = useSelector(state => state.loginUserReducer);
  // const { loading, success, error, currentUser } = loginState;
  return (
    <>
      <Layout>
        {/* <h1>Homepage</h1> */}
        <div>
          <h1 className='m-5'>
            समस्त ग्राम वासियों को सूचित किया जाता है कि ग्राम पंचायत लछवाई में  09 अगस्त 2024 को ग्राम चौपाल का आयोजन किया जा रहा है, जिसमें भाग लें। ब्लॉक के कर्मचारी आपके पंचायत में उपस्थित रहेंगे, और आपको ग्राम पंचायत में चल रही योजनाओं से संबंधित जानकारियाँ भी देंगे।
          </h1>
        </div>
        {/* <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(loginState, null, 4)}</pre> */}
      </Layout>
    </>
  )
}

export default Homepage