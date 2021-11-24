import ProjectItem from "./ProjectItem";
import foodOrderImg from "../assets/project-screenshots/food-order.png";
import pirateBattleImg from "../assets/project-screenshots/pirate-battle.png";
import myTasksImg from "../assets/project-screenshots/myTasks.png";
import tictactoeImg from "../assets/project-screenshots/tictactoe.png";
import restaurantImg from "../assets/project-screenshots/restaurant-page.png";
import weatherImg from "../assets/project-screenshots/weather-app.png";
import calculatorImg from "../assets/project-screenshots/calculator.png";
import etchasketchImg from "../assets/project-screenshots/etch-a-sketch.png";
import webShelfImg from "../assets/project-screenshots/web-shelf.png";
import rockPaperScissorsImg from "../assets/project-screenshots/rock-paper-scissors.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <ProjectItem
        imageSrc={foodOrderImg}
        projectTitle="Turgut Pizzaria"
        githubLink="https://github.com/GokhanTurgut/food-order"
        urlLink="https://food-app-8e47b.web.app/"
      />
      <ProjectItem
        imageSrc={pirateBattleImg}
        projectTitle="Pirate Battle"
        githubLink="https://github.com/GokhanTurgut/battleship"
        urlLink="https://gokhanturgut.github.io/battleship/"
      />
      <ProjectItem
        imageSrc={myTasksImg}
        projectTitle="My Tasks"
        githubLink="https://github.com/GokhanTurgut/todo-list"
        urlLink="https://gokhanturgut.github.io/todo-list/"
      />
      <ProjectItem
        imageSrc={tictactoeImg}
        projectTitle="Tic Tac Toe"
        githubLink="https://github.com/GokhanTurgut/tic-tac-toe"
        urlLink="https://gokhanturgut.github.io/tic-tac-toe/"
      />
      <ProjectItem
        imageSrc={restaurantImg}
        projectTitle="Atlantis Kebab"
        githubLink="https://github.com/GokhanTurgut/restaurant-page"
        urlLink="https://gokhanturgut.github.io/restaurant-page/"
      />
      <ProjectItem
        imageSrc={weatherImg}
        projectTitle="Weather App"
        githubLink="https://github.com/GokhanTurgut/weather-app"
        urlLink="https://gokhanturgut.github.io/weather-app/"
      />
      <ProjectItem
        imageSrc={calculatorImg}
        projectTitle="Calculator"
        githubLink="https://github.com/GokhanTurgut/calculator"
        urlLink="https://gokhanturgut.github.io/calculator/"
      />
      <ProjectItem
        imageSrc={etchasketchImg}
        projectTitle="Etch a Sketch"
        githubLink="https://github.com/GokhanTurgut/etch-a-sketch"
        urlLink="https://gokhanturgut.github.io/etch-a-sketch/"
      />
      <ProjectItem
        imageSrc={webShelfImg}
        projectTitle="My Web Shelf"
        githubLink="https://github.com/GokhanTurgut/library"
        urlLink="https://gokhanturgut.github.io/library/"
      />
      <ProjectItem
        imageSrc={rockPaperScissorsImg}
        projectTitle="Rock Paper Scissors"
        githubLink="https://github.com/GokhanTurgut/rock-paper-scissors"
        urlLink="https://gokhanturgut.github.io/rock-paper-scissors/"
      />
    </div>
  );
};

export default Projects;
