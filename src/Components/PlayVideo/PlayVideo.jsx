import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import like from '../../assets/icons8-like-50.png'
import dislike from '../../assets/icons8-dislike-50.png'
import share from '../../assets/icons8-share-30.png'
import save from '../../assets/icons8-save-30.png'
import video from '../../assets/1.mp4'
import subs from '../../assets/icons8-subscribe-24.png' 
import user from '../../assets/icons8-administrator-male-50.png'
import pqr from '../../assets/1.jpg'
import moment from 'moment'
import { API_KEY, value_converter } from '../../data'
import { useParams } from 'react-router-dom'



const PlayVideo = () => {

const {videoId} = useParams();

const [apiData,setApiData] =useState(null);


const [channelData,setChannelData] = useState(null);
 
const [commentData,setCommentData]  = useState([]);



const fetchVideoData = async () =>{
  //Fetching Videos Data
  const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
  await fetch(videoDetails_url).then(response=>response.json()).then(data=>setApiData(data.items[0]))

}


const fetchOtherData = async () =>{
  //fetch channel data
  const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url).then(response=>response.json()).then(data=>setChannelData(data.items[0]))


    //fetch commenta data
    

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url).then(response=>response.json()).then(data=>setCommentData(data.items))
     
}



useEffect(()=>{
  fetchVideoData();
},[videoId])

useEffect(()=>{
  fetchOtherData();
},[apiData])


  return (
    <div className='play-video'>
     {/*<video src={video} controls autoPlay muted></video>*/}

     <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     <h3>{apiData?apiData.snippet.title:"Title"}</h3>
     <div className='play-video-info'>
      <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""} </p>
      <div>
        <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):""}</span>
        <span><img src={dislike} alt="" /></span>
        <span><img src={share} alt="" />share</span>
        <span><img src={save} alt="" />save</span>
      </div>
     </div>
     <hr/>

     <div className='publisher'>
      <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
      <div>
        <p>{apiData?apiData.snippet.channelTitle:""}</p>
        <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
      </div>
      <button>Subscribe</button>
     </div>
     <div className='vid-description'>
      <p>{apiData?apiData.snippet.description.slice(0,100):"Description here"}</p>
      <hr/>
      <h4>{apiData?value_converter(apiData.statistics.commentCount):102} comments</h4>



      {commentData.map((item,index)=>{

          return(

            <div key={index} className='comment'>
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div>
              <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago </span></h3>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className='comment-action'>
                <img src={like} alt="" />
                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike} alt="" />
    
              </div>
            </div>
          </div>
          ) 
      })}
    
     </div>
    </div> 
  )
}

export default PlayVideo
