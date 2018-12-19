import React, { Component } from 'react';
import '../static/home.css';
var Nav = require('./Nav');

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <Nav />
        </header>
        <div className='main'>
          <div className='mainParagraph'>
            Straight from the makers of literally nothing else, I bring you the best thing since sliced bread: Curvydice.
            <br />
            <br />
            Join me as we step into the fantastic world of tabletop gaming together...
            <br />
            <p className='storyParagraph'>
              Warily, the party enters a large, well lit room deep within the catacombs. The party rogue, a veteran of countless dungeons and moonlight raids, rolls to check for traps.
              <br />
              <br />
              <span className='midStory'>(Player rolls 1d20)… and it’s a 1, -_- awesome.
              </span>
              <br />
              <br />
              The rogue blindly leaps into the room, triggering multiple traps and takes 5d10 damage, leaving them a quivering pile of goo riddled with poison darts and flaming arrows.
            </p>
            <br />
            {/*
            <img
              className='paragraphImage'
              src='https://via.placeholder.com/150' alt='placeholder'/>
            */}
            <br />
            <br />
            Ah yes, that went well; Sadly this is a scene we’re all too familiar with.
            <br />
            <br />
            Now we all know that crit hits and fails are a beautiful part of gaming. The risk paired equally with the reward. However, we also know it’s all too easy to get on a streak of bad rolls that can end in the untimely demise of your beloved character, who you have spent hours, days, or even weeks crafting into the undeniably amazing beast they are today.
            <br />
            <br />
            Thus the creation of Curvydice. Creating a curved dice roll makes it much more likely that any given roll will have a result near the middle of the distribution of possible results. With a curved roll, you are 20 times less likely to roll a 1, though there is still a slim chance. A result of 10 or 11 is most likely, followed by a 9 or a 12, and so on...
            <br />
            <br />
             This allows you to more consistently rely on the stats of your character to achieve various feats of heroism throughout your adventures. It mitigates the chances of your highly trained and experienced adventurer briefly forgetting everything they know about their chosen profession, and becoming just another skull added to the throne of the one true god of death: The Dice.
            <br />
            <br />
            In summary, Curvydice is a free dice rolling app that allows you to switch between traditional and bell curve rolling methods. Best of luck on all your adventures and shenanigans, and thanks for using Curvydice.
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
