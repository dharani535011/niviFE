import React, { useState } from 'react'

const Fques = () => {
   const [view,setview]= useState(0)
  return (
    <div className="fques">
      <h1>Frequently Asked Questions</h1>
      <div className={view==1 ? "active" : ""}>
        <h5 onClick={() => {setview(view==1?0:1)}}>
          How can I find the best Interior Designer in Chennai near me?
        </h5>
        <p>
          Finding the perfect interior designer in Chennai is easier than you think! Start by asking for recommendations from friends and family. Visit interior design showrooms and experience centers to get a feel of the different offerings. And remember, HomeLane operates in multiple locations in Chennai, always ready to help you design your dream home!
        </p>
      </div>
      <div className={view ==2? "active" : ""}>
        <h5 onClick={() => {setview(view==2?0:2)}}>
        What should I consider when selecting an Interior Designer in Chennai?
        </h5>
        <p>
        When choosing an interior designer in Chennai, keep these key factors in mind:
Portfolio: Review past work to ensure their style matches yours.
Testimonials: Seek feedback from previous clients to gauge satisfaction.
Experience: Look for relevant project experience.
Communication: Choose someone who understands your vision and communicates clearly.
Budget and Schedules: Confirm pricing, transparency, and delivery timelines to align with your needs.
        </p>
      </div>
      <div className={view ==3? "active" : ""}>
        <h5 onClick={() => {setview(view==3?0:3)}}>
        How much does it cost to hire an Interior Designer in Chennai?
        </h5>
        <p>
        Design your dream home without unexpected expenses! While freelance interior designers may charge extra, HomeLane offers upfront pricing with design and supervision included, ensuring cost-effectiveness and transparency.
        </p>
      </div>
      <div className={view ==4? "active" : ""}>
        <h5 onClick={() => {setview(view==4?0:4)}}>
        How long does it take to complete an Interior Design Project in Chennai?
        </h5>
        <p>
        The timeline for completing an interior design project in Chennai varies depending on the designer's experience and project complexity. At HomeLane, we typically aim to complete your home interior in 45 days. For specialized services like wallpaper, wooden flooring, painting, and cleaning, it may take up to 55 days. We prioritize timely delivery so you can move into your dream home as soon as possible! Check out our Terms and Conditions to know more about our delivery promise.
        </p>
      </div>
      <div className={view ==5? "active" : ""}>
        <h5 onClick={() => {setview(view==5?0:5)}}>
        How do I communicate my design preferences to the Interior Designer?
        </h5>
        <p>
        Clear communication is key when working with an interior designer. Start by creating a mood board with images and styles you like, and discuss your functional needs and desired look and feel. Be open to your designer's suggestions and expertise, as they can translate your vision into practical solutions.
        </p>
      </div>
      <div className={view ==6? "active" : ""}>
        <h5 onClick={() => {setview(view==6?0:6)}}>
        Why Choose HomeLane in Chennai?
        </h5>
        <p>
        HomeLane Chennai is your go-to choice for home interiors, and here's why:
Expertise: With over 100+ top designers, we create stunning and functional spaces.
Personalized designs: Tailored to reflect your personality and lifestyle.
Innovative technology: Use our 3D visualization tool, SpaceCraft, for visualizing your space.
Quality: We use high-quality materials and state of the art manufacturing for long lasting interiors.
Transparency: Stay informed at every stage for a collaborative experience.
On-time delivery: Committed to delivering projects on schedule without compromising quality.
Customer Trust: With over 12k+ delighted customers in Chennai, we prioritize your happiness 
        </p>
      </div>
    </div>
  )
}

export default Fques