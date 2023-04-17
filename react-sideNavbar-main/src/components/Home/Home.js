import React from "react";
import './Home.css'
import Footer from "../Footer/Footer";
function Home() {
    return (
        <div className="ContextNav">
            <div className="ContentBox">
                <div className="left-nav">
                    <div className="nav-nv">
                        <p>Home</p>
                        <p>About</p>
                        <div className="SearchBox">
                            <i class="bi bi-search"></i>
                            <input placeholder="Find ...." />
                        </div>
                    </div>
                </div>
                <div className="right-nav">
                    <p>LogIn</p>
                    <p> SignUp</p>
                </div>
            </div>
            <div className="contentInfo">
                <div className="contentInfoBox">
                    <div className="contentInfoBoxText">
                        <h1>What Hot this <br /> weekend?</h1>
                        <p>
                            "Lorem ipsum" is a commonly used placeholder text in the design and printing<br /> industries. It is used as filler text to demonstrate the visual effects of <br />different typefaces and layouts without the distraction of meaningful content.
                        </p>
                        <div className="buttons">
                            <button>Find More</button>
                            <i class="bi bi-share-fill"></i>
                            <i class="bi bi-box-arrow-down"></i>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default Home;