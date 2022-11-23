import React from "react";
import '../css/Home.css';

const Home = (props) => {
    return(
        <section className="home">
            <h1>{props.titulo}</h1>
        </section>
    );
}

export default Home;