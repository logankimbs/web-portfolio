import React from 'react';

class Hero extends React.Component {
    render() {
        return (
            <section className="hero" id="about">
                <div className="bio animate__animated animate__shakeX">
                    <h2 className="bio-title">About Me</h2>
                    <p className="bio-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sed
                    dolorem fugit sapiente porro veniam pariatur dolore nostrum delectus
                    inventore tempore minus nemo, iste ullam illo laboriosam maiores
                    repudiandae quos!
                    </p>
                </div>
            </section>
        )
    }
}

export default Hero;