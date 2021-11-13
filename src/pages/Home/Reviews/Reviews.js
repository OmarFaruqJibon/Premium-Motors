import React, { useEffect, useState } from 'react';
import './Reviews.css';
import Rating from 'react-rating';

const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://stark-sierra-80617.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReview(data));
    },[]);

    return (
        <section className="home-testimonial">
            <div className="container-fluid">
                <div className="row d-flex justify-content-center testimonial-pos">
                    <div className="col-md-12 pt-4 d-flex justify-content-center">
                        <p>What Our Happy Clients say about us</p>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center">
                        <h1 className="fw-bolder">Our Testimonial</h1>
                    </div>
                </div>

                <section className="home-testimonial-bottom">
                    <div className="container testimonial-inner">
                        <div className="row d-flex justify-content-center">
                            
                            {review.map(rev => <div key={rev._id} className="col-md-4 style-3">
                                
                                <div className="tour-item">
                                    <div className="tour-desc bg-white">
                                        <div className="tour-text color-grey-3 text-center">{rev.message}</div>
                                        <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src={rev.img} alt=""/></div>
                                        <div className="link-name d-flex justify-content-center">{rev.name}</div>
                                        <Rating className="star-icon"
                                                initialRating={rev.rating}
                                                readonly
                                                emptySymbol="far fa-star"
                                                fullSymbol="fas fa-star"
                                            />
                                    </div>
                                </div>
                            </div>
                            ) }
                        </div>
                        </div>
                </section>
                </div>
</section>

    );
};

export default Reviews;