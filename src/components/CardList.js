import React from "react";
import Card from "./Card";

class CardList extends React.Component {

  render(robots = this.props.robots) {
    const cardsArray = robots.map((robot) => {
      return (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          username={robot.username}
          email={robot.email}
        />
      );
    });

    return <div>{cardsArray}</div>;
  }
}

export default CardList;
