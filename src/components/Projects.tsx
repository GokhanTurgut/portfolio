import ProjectItem from "./ProjectItem";
import restApiImg from "../assets/project-screenshots/rest-api.webp";
import movieLoversImg from "../assets/project-screenshots/movie-lovers.webp";
import foodOrderImg from "../assets/project-screenshots/food-order.webp";
import pirateBattleImg from "../assets/project-screenshots/pirate-battle.webp";
import gustoBlogsImg from "../assets/project-screenshots/gusto-blogs.webp";
import myTasksImg from "../assets/project-screenshots/myTasks.webp";
import tictactoeImg from "../assets/project-screenshots/tictactoe.webp";
import puzzleGameImg from "../assets/project-screenshots/puzzle-game.webp";
import restaurantImg from "../assets/project-screenshots/restaurant-page.webp";
import weatherImg from "../assets/project-screenshots/weather-app.webp";
import calculatorImg from "../assets/project-screenshots/calculator.webp";
import etchasketchImg from "../assets/project-screenshots/etch-a-sketch.webp";
import webShelfImg from "../assets/project-screenshots/web-shelf.webp";
import googleCloneImg from "../assets/project-screenshots/google-clone.webp";
import rockPaperScissorsImg from "../assets/project-screenshots/rock-paper-scissors.webp";

const Projects = () => {
  return (
    <div className="projects-container">
      <ProjectItem
        imageSrc={movieLoversImg}
        projectTitle="Movie Lovers"
        githubLink="https://github.com/GokhanTurgut/movie-lovers"
        urlLink="https://hopeful-poitras-d26fa4.netlify.app/"
      />
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
        imageSrc={gustoBlogsImg}
        projectTitle="Gusto Blogs"
        githubLink="https://github.com/GokhanTurgut/blog-ssr-typeorm"
        urlLink="https://gusto-blogs-typeorm.herokuapp.com/"
      />
      <ProjectItem
        imageSrc={myTasksImg}
        projectTitle="My Tasks"
        githubLink="https://github.com/GokhanTurgut/todo-list"
        urlLink="https://gokhanturgut.github.io/todo-list/"
      />
      <ProjectItem
        imageSrc={restApiImg}
        projectTitle="Todo Rest API"
        githubLink="https://github.com/GokhanTurgut/todo-rest-api"
        urlLink="https://gokhan-todo-rest-api.herokuapp.com/"
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
        imageSrc={puzzleGameImg}
        projectTitle="Puzzle Game"
        githubLink="https://github.com/GokhanTurgut/puzzle-game"
        urlLink="https://gokhanturgut.github.io/puzzle-game/"
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
        imageSrc={googleCloneImg}
        projectTitle="Functional Google Clone"
        githubLink="https://github.com/GokhanTurgut/search"
        urlLink="https://gokhanturgut.github.io/search/"
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
