import React, {Component} from 'react';
import picture44 from '../assets/img/unsplash/44.jpeg';
import picture54 from '../assets/img/unsplash/54.jpeg';
import picture47 from '../assets/img/unsplash/47.jpeg';
import picture46 from '../assets/img/unsplash/46.jpeg';
import picture45 from '../assets/img/unsplash/45.jpeg';
import face9 from '../assets/img/uifaces/9.jpg';


class Blog extends Component {
    render() {
        return (
            <div>
                {/*Title*/}
                <section className="text-center mt-6 mt-md-7">
                    <div className="container">
                        <h2 className="text-dark font-weight-normal">
                            Thoughts and ideas on business, design and tech
                        </h2>
                        <a href="#" className="text-secondary d-block mt-3">
                            Follow us on twitter <i className="fab fa-twitter text-primary ml-1"/>
                        </a>
                    </div>
                </section>

                {/*Timeline*/}
                <section className="mt-6">
                    <div className="container">
                        <div className="timeline">
                            {/* Post */}
                            <div className="timeline-post">
                                <div className="timeline-post-marker"/>

                                <div className="timeline-post-content hover-mask h-300 rounded-lg shadow-light">
                                    {/* Featured image */}
                                    <div className="hover-mask-image"
                                         style={{backgroundImage: `url(${picture44})`}}>
                                    </div>

                                    <a href="#"
                                       className="hover-mask-content d-flex flex-column opacity-100 text-decoration-none p-4">
                                        {/* Title */}
                                        <h4 className="text-white font-weight-normal mb-auto">
                                            Top 10 cities with best quality of life to travel or live in
                                        </h4>

                                        {/* Author */}
                                        <span className="d-flex text-white text-uppercase-xs font-weight-bold">
                <span>John Williams</span>
                <span className="ml-auto">Aug 13, 2020</span>
              </span>
                                    </a>
                                </div>
                            </div>

                            {/* Post */}
                            <div className="timeline-post">
                                <div className="timeline-post-marker"/>

                                <div className="timeline-post-content card shadow-light-sm">
                                    <div className="card-body">
                                        {/* Avatar */}
                                        <div className="avatar d-block mx-auto mt-n5">
                                            <img src={face9}
                                                 className="rounded-circle avatar-image" alt=""/>
                                        </div>

                                        {/* Title */}
                                        <a href="#"
                                           className="h4 text-dark d-block font-weight-normal text-center text-decoration-none mt-4">
                                            10 ways to improve your web development skills
                                        </a>

                                        {/* Author */}
                                        <p className="text-center text-muted font-size-sm mt-2">
                                            John Smith on Apr 21
                                        </p>

                                        {/* Intro */}
                                        <p className="text-secondary mt-4">
                                            Of all things which wisdom provides to make life entirely happy, much the
                                            greatest is the possession of friendship. It is not so much our friends'
                                            help that helps us, as the confidence of their help.
                                        </p>

                                        {/* Read more */}
                                        <div className="text-center mt-4">
                                            <a href="#" className="btn btn-pistachio hover-lift-light">
                                                Read more »
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Post */}
                            <div className="timeline-post">
                                <div className="timeline-post-marker"/>

                                <div className="timeline-post-content card shadow-light-sm">
                                    <div className="card-body">
                                        {/* Avatar */}
                                        <div className="avatar d-block mx-auto mt-n5">
                                            <img src={"assets/img/uifaces/10.jpg"}
                                                 className="rounded-circle avatar-image" alt=""/>
                                        </div>

                                        {/* Title */}
                                        <a href="#"
                                           className="h4 text-dark d-block font-weight-normal text-center text-decoration-none mt-4">
                                            5 ways to improve user retention
                                        </a>

                                        {/* Author */}
                                        <p className="text-center text-muted font-size-sm mt-2">
                                            John Smith on Apr 21
                                        </p>

                                        {/* Intro */}
                                        <p className="text-secondary mt-4">
                                            Don't demand that things happen as you wish, but wish that they happen as
                                            they do happen, and you will go on well.
                                        </p>

                                        {/* Read more */}
                                        <div className="text-center mt-4">
                                            <a href="#" className="btn btn-pistachio hover-lift-light">
                                                Read more »
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Post */}
                            <div className="timeline-post">
                                <div className="timeline-post-marker"/>

                                <div className="timeline-post-content hover-mask h-300 rounded-lg shadow-light">
                                    {/* Featured image */}
                                    <div className="hover-mask-image"
                                         style={{backgroundImage: `url(${picture54})`}}>
                                    </div>

                                    <a href="#"
                                       className="hover-mask-content d-flex flex-column opacity-100 text-decoration-none p-4">
                                        {/* Title */}
                                        <h4 className="text-white font-weight-normal mb-auto">
                                            Top 10 places you should visit
                                        </h4>

                                        {/* Author */}
                                        <span className="d-flex text-white text-uppercase-xs font-weight-bold">
                <span>John Williams</span>
                <span className="ml-auto">15 Nov, 2020</span>
              </span>
                                    </a>
                                </div>
                            </div>

                            {/* Post */}
                            <div className="timeline-post">
                                <div className="timeline-post-marker"/>

                                <div className="timeline-post-content hover-mask h-300 rounded-lg shadow-light">
                                    {/* Featured image */}
                                    <div className="hover-mask-image"
                                         style={{backgroundImage: `url(${picture47})`}}>
                                    </div>

                                    <a href="#"
                                       className="hover-mask-content d-flex flex-column opacity-100 text-decoration-none p-4">
                                        {/* Title */}
                                        <h4 className="text-white font-weight-normal mb-auto">
                                            Become a professional photographer
                                        </h4>

                                        {/* Author */}
                                        <span className="d-flex text-white text-uppercase-xs font-weight-bold">
                <span>John Williams</span>
                <span className="ml-auto">11 Jul, 2020</span>
              </span>
                                    </a>
                                </div>
                            </div>

                            {/* Post */}
                            <div className="timeline-post">
                                <div className="timeline-post-marker"/>

                                <div className="timeline-post-content card shadow-light-sm">
                                    <div className="card-body">
                                        {/* Avatar */}
                                        <div className="avatar d-block mx-auto mt-n5">
                                            <img src={"assets/img/uifaces/12.jpg"}
                                                 className="rounded-circle avatar-image" alt=""/>
                                        </div>

                                        {/* Title */}
                                        <a href="#"
                                           className="h4 text-dark d-block font-weight-normal text-center text-decoration-none mt-4">
                                            Not what we have but what we enjoy, constitutes our abundance
                                        </a>

                                        {/* Author */}
                                        <p className="text-center text-muted font-size-sm mt-2">
                                            John Smith on Apr 21
                                        </p>

                                        {/* Intro */}
                                        <p className="text-secondary mt-4">
                                            Of all things which wisdom provides to make life entirely happy, much the
                                            greatest is the possession of friendship. It is not so much our friends'
                                            help that helps us, as the confidence of their help.
                                        </p>

                                        {/* Read more */}
                                        <div className="text-center mt-4">
                                            <a href="#" className="btn btn-pistachio hover-lift-light">
                                                Read more »
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Post */}
                            <div className="timeline-post">
                                <div className="timeline-post-marker"/>

                                <div className="timeline-post-content card shadow-light-sm">
                                    <div className="card-body">
                                        {/* Avatar */}
                                        <div className="avatar d-block mx-auto mt-n5">
                                            <img src={"assets/img/uifaces/13.jpg"}
                                                 className="rounded-circle avatar-image" alt=""/>
                                        </div>

                                        {/* Title */}
                                        <a href="#"
                                           className="h4 text-dark d-block font-weight-normal text-center text-decoration-none mt-4">
                                            Learn web design in 6 months
                                        </a>

                                        {/* Author */}
                                        <p className="text-center text-muted font-size-sm mt-2">
                                            John Smith on Apr 21
                                        </p>

                                        {/* Intro */}
                                        <p className="text-secondary mt-4">
                                            Don't demand that things happen as you wish, but wish that they happen as
                                            they do happen, and you will go on well.
                                        </p>

                                        {/* Read more */}
                                        <div className="text-center mt-4">
                                            <a href="#" className="btn btn-pistachio hover-lift-light">
                                                Read more »
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Post */}
                            <div className="timeline-post">
                                <div className="timeline-post-marker"/>

                                <div className="timeline-post-content hover-mask h-300 rounded-lg shadow-light">
                                    {/* Featured image */}
                                    <div className="hover-mask-image"
                                         style={{backgroundImage: `url(${picture46})`}}>
                                    </div>

                                    <a href="#"
                                       className="hover-mask-content d-flex flex-column opacity-100 text-decoration-none p-4">
                                        {/* Title */}
                                        <h4 className="text-white font-weight-normal mb-auto">
                                            Top 10 cities with best quality of life to travel or live in
                                        </h4>

                                        {/* Author */}
                                        <span className="d-flex text-white text-uppercase-xs font-weight-bold">
                <span>John Williams</span>
                <span className="ml-auto">Aug 13, 2020</span>
              </span>
                                    </a>
                                </div>
                            </div>

                            {/* Post */}
                            <div className="timeline-post">
                                <div className="timeline-post-marker"/>

                                <div className="timeline-post-content hover-mask h-300 rounded-lg shadow-light">
                                    {/* Featured image */}
                                    <div className="hover-mask-image"
                                         style={{backgroundImage: `url(${picture45})`}}>
                                    </div>

                                    <a href="#"
                                       className="hover-mask-content d-flex flex-column opacity-100 text-decoration-none p-4">
                                        {/* Title */}
                                        <h4 className="text-white font-weight-normal mb-auto">
                                            The best UX resources around for 2020
                                        </h4>

                                        {/* Author */}
                                        <span className="d-flex text-white text-uppercase-xs font-weight-bold">
                <span>John Williams</span>
                <span className="ml-auto">Aug 13, 2020</span>
              </span>
                                    </a>
                                </div>
                            </div>

                            {/* Post */}
                            <div className="timeline-post">
                                <div className="timeline-post-marker"/>

                                <div className="timeline-post-content card shadow-light-sm">
                                    <div className="card-body">
                                        {/* Avatar */}
                                        <div className="avatar d-block mx-auto mt-n5">
                                            <img src={"assets/img/uifaces/11.jpg"}
                                                 className="rounded-circle avatar-image" alt=""/>
                                        </div>

                                        {/* Title */}
                                        <a href="#"
                                           className="h4 text-dark d-block font-weight-normal text-center text-decoration-none mt-4">
                                            The things you think about determine the quality of your mind
                                        </a>

                                        {/* Author */}
                                        <p className="text-center text-muted font-size-sm mt-2">
                                            John Smith on Apr 21
                                        </p>

                                        {/* Intro */}
                                        <p className="text-secondary mt-4">
                                            Don't demand that things happen as you wish, but wish that they happen as
                                            they do happen, and you will go on well.
                                        </p>

                                        {/* Read more */}
                                        <div className="text-center mt-4">
                                            <a href="#" className="btn btn-pistachio hover-lift-light">
                                                Read more »
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="clearfix"/>

                            {/* Older posts */}
                            <div className="position-relative text-center mt-7">
                                <a href="#" className="btn btn-purple text-uppercase-bold-sm rounded-lg">
                                    <i className="fas fa-chevron-left mr-2"/>
                                    See older posts
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Blog;
