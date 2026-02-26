
export default function Entry(props){
    console.log(props)
    return(
        <article>
          <div className="main-img-container">
             <img src={props.img.src} 
             alt={props.img.alt} className="fuji" />
           </div>
        <div className="location">
            <img className="marker"src="https://t4.ftcdn.net/jpg/01/81/03/17/360_F_181031706_la5LTP6oWwYvzjI0TWOH7nTZE49aVdI7.jpg"/>
            <span className="countryName">
            {props.country}
           </span>
           <a href={props.googleMapLink}>View On Google Maps </a>
           <div className="text">
            <h1>{props.title}</h1>
             <p>{props.dates}</p>
             <p>{props.text}</p>
           </div>
        </div>
        
         
        </article>
    )
}