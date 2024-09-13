import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="greeting-message">
        <h1>Welcome to RoutingMaster!</h1>
        <p>Your journey to explore begins here. Navigate through the site and enjoy!</p>
      </div>
      <div className="image-gallery">
        <img 
          src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHRlY2h8ZW58MHx8fHwxNjYzNzU0MTY4&ixlib=rb-1.2.1&q=80&w=1080" 
          alt="Technology 1" 
          className="animated-image" 
        />
        <img 
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRlY2h8ZW58MHx8fHwxNjYzNzU0MTY4&ixlib=rb-1.2.1&q=80&w=1080" 
          alt="Technology 2" 
          className="animated-image" 
        />
        <img 
          src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEzfHRlY2h8ZW58MHx8fHwxNjYzNzU0MTY4&ixlib=rb-1.2.1&q=80&w=1080" 
          alt="Technology 3" 
          className="animated-image" 
        />
      </div>
    </div>
  );
};

export default Home;
