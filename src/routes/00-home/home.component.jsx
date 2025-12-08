import './home.styles.css'

function Home(){
return(
<section id='home-section'>
   <div className="texts">
 <p className="text-preset-6 blue upper-case">So, you want to travel to </p> 
  <p className="text-preset-1">SPACE </p>
  <p className="text-preset-9 multi-line blue"> Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!
</p>
 </div>
 <div className='explore-btn-wrapper'>
 <button className="text-preset-4 explore-btn upper-case">
     Explore
     <span className='explore-btn-bg'></span>
 </button>
 </div>
    </section>
)

}


export default Home;