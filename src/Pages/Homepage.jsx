import React,{useState} from 'react'
import Card from '../componets/Card'
import ImageSlider from '../componets/ImageSlider'
import Navbar from '../componets/Navbar'
import '../Pages/homepage.css'
import Mycard from '../componets/MyCard'
import ReviewCard from '../componets/ReviewCard'
// import myReviewCard from '../componets/ReCard'

const Homepage = () => {
    const [name, setName] = useState(" Your Name")

    const [mail, setMail] = useState(" ")

    const [review, setReview] = useState(" ")

    const myReviewCard =[
        {

            id:1,
            Cname:"Vinay",
            Comment:"Great experince Got My Portfolio which is preety nice and usefull",
            Date:"20-10-2023"
        },
        {
            id:1,
            Cname:"Vinauyy",
            Comment:"eingsnvoethwp ru gn eurty  uegh urh rugh uthgiu uh",
            Date:"20-10-2023"
        },
        
   
    ]
    const current = new Date();
    const d = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
   const handelSubmit=(e)=>{
       e.preventDefault();
     const payLoad={id:'5',Cname:name,Comment:review,date:d}
     myReviewCard.push(payLoad)
     console.log(myReviewCard)
     alert("Review added")
   }

  return (
      <>
      <Navbar/>
      <div className='intro full'>
          <div className="left">
            <p>  The Platform to get your own Personalised Portfolio.</p>
            <button className="bt">Explore More</button>
            </div>
          <div className="right">
             <ImageSlider/>
          </div>
      </div>
          <div className="head">
              Templates
          </div>
      <div className="temp">
       {Mycard.map((i,index)=>(

       <Card name={i.name} desc={i.desc} img={i.img} link={i.link} />
           
       ))}
        </div>
        <div className="head">
              What Coustmer say about us?
          </div>
        <div className="review">
            <div className='cReview'>

           
            {myReviewCard.map((i,index)=>(
                <ReviewCard Cname={i.Cname} com={i.Comment} date={i.Date}/>

            ))}
             </div>
             <div className="giveReview">
                 <form action="">
                     <div>
                     <label htmlFor="name">Name :</label>
                     <input type="text" name="name" id=""  onChange={(e)=>setName(e.target.value)} value={name} />
                     </div>
                     <div>
                     <label htmlFor="mail" >Email :</label>
                     <input type="email" name="mail" id="" onChange={(e)=>setMail(e.target.value)} />
                     
                     </div>
                     <div>
                         <textarea name="" id="" cols="40" rows="4" placeholder='Your Review' onChange={(e)=>setReview(e.target.value)}></textarea>
                     </div>
                     <button onClick={(e)=>handelSubmit(e)}>Submit Review</button>
                 </form>
             </div>
        </div>
        <div className="foot">
            <div className="social">
        
            </div>
            <div className="contact">

            </div>
        </div>
      </>
    
  )
}

export default Homepage