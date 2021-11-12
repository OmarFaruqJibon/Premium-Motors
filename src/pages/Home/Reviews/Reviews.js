import React, { useEffect, useState } from 'react';
import './Reviews.css';
import Rating from 'react-rating';

const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReview(data));
    },[]);
    console.log(review)
    return (
        <section class="home-testimonial">
    <div class="container-fluid">
        <div class="row d-flex justify-content-center testimonial-pos">
            <div class="col-md-12 pt-4 d-flex justify-content-center">
                <h3>Testimonials</h3>
            </div>
            <div class="col-md-12 d-flex justify-content-center">
                <h2>Explore the students experience</h2>
            </div>
        </div>

        <section class="home-testimonial-bottom">
            <div class="container testimonial-inner">
                <div class="row d-flex justify-content-center">
                    
                    {review.map(rev => <div class="col-md-4 style-3">
                        
                        <div class="tour-item">
                            <div class="tour-desc bg-white">
                                <div class="tour-text color-grey-3 text-center">{rev.message}</div>
                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src={rev.img} alt=""/></div>
                                <div class="link-name d-flex justify-content-center">{rev.name}</div>
                                <Rating className="star-icon"
                                        initialRating={rev.rating}
                                        readonly
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                    />
                                <div class="d-flex justify-content-center align-items-center">
                                    
                                </div>
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