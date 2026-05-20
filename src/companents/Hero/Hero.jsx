import React from 'react'

const Hero = () => {
  return (
    <div>
        <main>
            <section>
                <div className="container">
                    <div className="hero">
                        <div className="heroleft">
                            <h5>Hello It's Me</h5>
                            <h2>John Kendric</h2>
                            <h3>And I'm a <span>Frontend Developer|</span></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugiat architecto ipsum distinctio odio explicabo consequatur perspiciatis enim laudantium dolores?</p>
                            <button>Download CV</button>
                        </div>
                        <div className="hero-right">
                            <img src="src/companents/img/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Hero