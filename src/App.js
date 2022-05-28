
import { useEffect, useState } from 'react';
import './App.css';
import {useFetch} from './useFetch'
import Follower from './component/Follower';

function App() {
  return (
    <div className="App">
     <FollowerPage></FollowerPage>
    </div>
  );
}
const FollowerPage = () =>{
 const {loading,data} = useFetch();
 const [page,setPage] =useState(0);
 const [followers,setFollowers]= useState([])



 useEffect(()=>{
   if(loading)return 
    setFollowers(data[page])
   
 },[loading,page])
 console.log('모든데이터',followers)
 console.log('길이',data.length)

 const nextPage= () =>{
   setPage((oldPage)=>{
        let nextPage = oldPage +1

        if( nextPage>data.length-1){
          nextPage = 0;
        }
        return nextPage
   })
 }
 const prevPage = (()=>{
    setPage((oldPage)=>{
        let prevPage = oldPage -1;
        if(prevPage<0){
          prevPage = data.length -1
        }
        return prevPage
    })
 })

 const handlePage = ((index)=>{
  setPage(index)
 })
  return (
   
    <div> 
      {followers.map((follower)=>{
      return <Follower key= {follower.id}{...follower}/>
      })}
       <div>
       {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                 
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}
       </div>
     
    </div>
  )
}
export default App;
