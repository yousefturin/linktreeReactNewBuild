import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
function Home() {
    useEffect(() => {
        const links = document.querySelectorAll(".animated-link");
        links.forEach((link) => {
            link.addEventListener("click", () => {
                link.classList.add("clicked");
                setTimeout(() => {
                    link.classList.remove("clicked");
                }, 1000);
            });
        });
        


        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        const handleScroll = () => {
            const footer = document.querySelector(".footer");
            if (footer && isInViewport(footer)) {
                footer.classList.add("animate");
            }
        };
        const currentYear = new Date().getFullYear();
        const yearElement = document.getElementById("current-year");
        yearElement.textContent = currentYear;

        window.addEventListener("scroll", handleScroll);

        return () => {
            // Clean up event listener on component unmount
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render
    const [isOpenMain, setIsOpenMain] = useState(true);
    const [isOpenProject, setIsOpenProject] = useState(false);
    const handleSwipeContainers = () => {
        setIsOpenMain(!isOpenMain);
        setIsOpenProject(!isOpenProject);
    };

    return (
        <>
            <div className="wrapperContainerBody">
                <div className="container">
                    <svg
                        preserveAspectRatio="xMidYMid slice"
                        viewBox="10 10 80 80"
                        id="background_svg"
                    >
                        <defs>
                            <style></style>
                        </defs>
                        <path
                            fill="#284655"
                            className="out-top"
                            d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
                        />
                        <path
                            fill="#D0E1F9"
                            className="in-top"
                            d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
                        />
                        <path
                            fill="#4D648D"
                            className="out-bottom"
                            d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"
                        />
                        <path
                            fill="#1E1F26"
                            className="in-bottom"
                            d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"
                        />
                    </svg>
                    <div className="wrap-links-image">
                        <div className="rectangle-wrap-image">
                            <img src="./images/IMG_8056.png" alt="Description" />
                        </div>
                        {isOpenMain && (
                            <div className="wrap-links-container">
                                <div className="links-display-container">
                                    <div className="wrap-link-label">
                                        <div className="link-label">
                                            <Link
                                                style={{ textDecoration: "none" }}
                                                to="https://github.com/yousefturin"
                                                className="animated-link"
                                            >
                                                <img
                                                    src="./images/github.png"
                                                    alt="GitHub"
                                                    id="img_github"
                                                    style={{ width: "50px", height: "50px" }}
                                                />
                                                <p>GitHub</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="wrap-link-label">
                                        <div className="link-label">
                                            <Link
                                                style={{ textDecoration: "none" }}
                                                to="https://www.linkedin.com/in/yusef-rayyan-b82420199/"
                                                className="animated-link"
                                            >
                                                <img
                                                    src="./images/linkedin.png"
                                                    alt="Linkedin"
                                                    id="img_linkedin"
                                                    style={{ width: "50px", height: "50px" }}
                                                />
                                                <p>Linkedin</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="wrap-link-label">
                                        <div className="link-label">
                                            <Link
                                                style={{ textDecoration: "none" }}
                                                to="https://www.instagram.com/yusefturin/"
                                                className="animated-link"
                                            >
                                                <img
                                                    src="./images/instagram.png"
                                                    alt="instagram"
                                                    id="img_instagram"
                                                    style={{ width: "50px", height: "50px" }}
                                                />
                                                <p>instagram</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="wrap-link-label">
                                        <div className="link-label">
                                            <Link
                                                style={{ textDecoration: "none" }}
                                                onClick={handleSwipeContainers}
                                                className="animated-link"
                                            >
                                                <img
                                                    src="./images/world-wide-web.png"
                                                    alt="Portfolio"
                                                    id="img_website"
                                                    style={{ width: "50px", height: "50px" }}
                                                />
                                                <p>Project</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {isOpenProject && (
                            <div className="wrap-links-container">
                                <div className="links-display-container">
                                    <div
                                        className="btnBack"
                                        onClick={handleSwipeContainers}
                                    >
                                        <span class="material-symbols-outlined">arrow_back</span>
                                    </div>
                                    <div className="wrap-link-label">
                                        <div className="link-label">
                                            <Link
                                                style={{ textDecoration: "none" }}
                                                to="https://zakod.vercel.app/"
                                                className="animated-link"
                                            >
                                                <img
                                                    src="./images/codepen_zakod.png"
                                                    alt="GitHub"
                                                    id="img_github"
                                                    style={{ width: "50px", height: "50px" }}
                                                />
                                                <p>Zakod</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="wrap-link-label">
                                        <div className="link-label">
                                            <Link
                                                style={{ textDecoration: "none" }}
                                                to="https://quizzki.vercel.app/"
                                                className="animated-link"
                                            >
                                                <img
                                                    src="./images/codepen_quizzki.png"
                                                    alt="Linkedin"
                                                    id="img_linkedin"
                                                    style={{ width: "50px", height: "50px" }}
                                                />
                                                <p>Quizzki</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="wrap-link-label">
                                        <div className="link-label">
                                            <Link
                                                style={{ textDecoration: "none" }}
                                                to="https://yusefturin.netlify.app/"
                                                className="animated-link"
                                            >
                                                <img
                                                    src="./images/codepen_logo1.png"
                                                    alt="Portfolio"
                                                    id="img_website"
                                                    style={{ width: "50px", height: "50px" }}
                                                />
                                                <p>Portfolio</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className=" footer">
                            <p>
                                © Copyrights YUSEFTURIN. All rights reserved{" "}
                                <span id="current-year"></span>
                            </p>
                            <p>
                                Türkiye |{" "}
                                <Link
                                    style={{ textDecoration: "none", fontWeight: "bold" }}
                                    to="mailto:yusefturin@gmail.com"
                                >
                                    contact@yusefturin.com
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
