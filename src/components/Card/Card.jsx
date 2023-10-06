import { Fragment, useState } from "react";
import Grid from "../Grid/Grid";
import "./Card.css";

const Card = ({books,  filterText, bookId, setData, reviews}) => {
console.log(reviews)
    const [review, setReview] = useState({
      reviews: "",
      id:"",
    });
    const [close, setClose] = useState(false);
    
  return (
    <Grid>
    {
        books.map((props) => { 
          let filterReview = reviews.filter((id) => id.id === props.isbn)
          console.log(filterReview)
            if(props.title.toLowerCase().indexOf(filterText) === -1) {
                return <Fragment key={props._id}></Fragment>;
            }
            return(
                <div className="card" key={props.isbn} onClick={() => setData({type:"Id", ID:props.isbn})}>
                <img src={props.thumbnailUrl} alt="" className="card-image" />
                <div className="card-description">
                    <span className="card-price">{"$"+props.pageCount}<small className="card-small">{" /month"}</small></span>
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-address">{props.shortDescription}</p>
                </div>
               {props.isbn ===bookId && close === false && <button className="btn-review" onClick={() => {setData({type:"Id", ID:props.isbn})
                     setClose(true)
              }} >Add Review</button>}
               {props.isbn === bookId && close && <button className="btn-review" onClick={() => {setData({type:"REVIEW",review:review})
              setClose(false)
              }} >submit Review</button>}
                {
                  props.isbn ===  bookId &&  <textarea style={close ? {display:"block"} : {display:"none"}} name="textarea" id="" cols="10" rows="10"
                  onChange={(e) => {setReview({...review, reviews: e.target.value, id:props.isbn})}}
                  ></textarea>
                }
              <div>
                {
                  filterReview.map((review) => {
                    console.log(review)
                    return(
                      <div className="reviews">
                      <small>{review.reviews}</small>
                      </div>
                    )
                  })
                }
              </div>
            </div>

            )
        })
    }
    </Grid>
  );
};

export default Card;