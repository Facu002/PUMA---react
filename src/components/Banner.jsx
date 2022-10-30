import React from 'react'
import img1 from '../img/slider_1.jpg'

function Banner(props) {
  //let colRef = query(collection(db, "BannerImages"));
  
  // useEffect(()=>{
  //   // get collection data
    
  //     getDocs(colRef) 
  //       .then(snapshot => {
  //           // console.log(snapshot.docs)
  //           snapshot.docs.forEach(doc => {
  //           list.push({ ...doc.data()})
  //           })
  //           setImages(list)
  //           //console.log(list);
  //           //console.log('1')
  //           //console.log('2')
  //           //caca()
  //       })
  //       .catch(err => {
  //           console.log(err.message)
  //       })
  // },[])

      return (
        <div className='banner'>
            <div className="banner-img__container">
              <img id="counter" className='banner-img' src={img1} alt="caca"  />
          </div>
        </div>
      )
}

export default Banner