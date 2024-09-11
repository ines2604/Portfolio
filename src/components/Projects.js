import React from "react";
import Projet from '../components/Projet'

import html from '../assets/html.png'
import css from '../assets/icons8-css-48.png'
import js from '../assets/icons8-js-48.png'
import jquery from'../assets/icons8-jquery-is-a-javascript-library-designed-to-simplify-html-24.png'
import react from '../assets/icons8-react-a-javascript-library-for-building-user-interfaces-24.png'

import tribute1 from '../assets/tribute-1.png'
import tribute2 from '../assets/tribute-2.png'
import tribute3 from '../assets/tribute-3.png'

import chocolate1 from '../assets/chocolate-1.png'
import chocolate2 from '../assets/chocolate-2.png'
import chocolate3 from '../assets/chocolate-3.png'

import age from '../assets/agecalculator.png'

import cal from '../assets/calculator.png'

import exponse from '../assets/exponse.png'

import jeum1 from '../assets/jeum-1.png'
import jeum2 from '../assets/jeum-2.png'
import jeum3 from '../assets/jeum-3.png'

import math1 from '../assets/mathgame-1.png'
import math2 from '../assets/mathgame-2.png'

import todolist from '../assets/tolist.png'

import quiz1 from '../assets/quiz1.png'
import quiz2 from '../assets/quiz2.png'
import quiz3 from '../assets/quiz3.png'

import snake1 from '../assets/snakegame-1.png'
import snake2 from '../assets/snakegame-2.png'

import tic1 from '../assets/tac-1.png'
import tic2 from '../assets/tac-2.png'

import quizreact1 from '../assets/quizreact-1.png'
import quizreact2 from '../assets/quizreact-2.png'
import quizreact3 from '../assets/quizreact-3.png'

function Projects(){
    return (
        <div id="Projects" className="container my-5">
            <div className="container mt-5">
                <h2 className="display-4 mb-4 text-primary">My Projects</h2>
                <p className="lead mb-4">Explore some of the projects I've worked on, showcasing a variety of skills and technologies.</p>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <Projet 
                        images={[tribute1, tribute2, tribute3]} 
                        title="Tribute Page SRK" 
                        description="This page pays tribute to Shah Rukh Khan, an icon of Indian cinema, celebrating his extraordinary career, global impact, and inspiring journey as one of Bollywood's biggest stars." 
                        githublink="https://github.com/ines2604/encryptix/tree/main/tribute%20page" 
                        competences={[{ src: html, alt: 'HTML' }, { src: css, alt: 'CSS' }]}

                    />
                </div>
                <div className="col">
                    <Projet 
                        images={[chocolate1, chocolate2, chocolate3]} 
                        title="Chocolate Bakery Landing Page" 
                        description="A beautifully designed landing page for a chocolate bakery, showcasing the products and company story in a visually appealing way." 
                        githublink="https://github.com/ines2604/encryptix/tree/main/Bakery%20landing%20page" 
                        competences={[{ src: html, alt: 'HTML' }, { src: css, alt: 'CSS' }]}
                    />
                </div>
                <div className="col">
                    <Projet 
                        images={[age]} 
                        title="Age Calculator" 
                        description="A web app that calculates your exact age, including years, months, and days, based on your birthdate." 
                        githublink="https://github.com/ines2604/AgeCalculator" 
                        competences={[{ src: html, alt: 'HTML' }, { src: css, alt: 'CSS' }, { src: js, alt: 'JavaScript' }]}
                    />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <Projet 
                        images={[cal]} 
                        title="Calculator" 
                        description="A simple web calculator for basic arithmetic operations, featuring a clean and intuitive design." 
                        githublink="https://github.com/ines2604/encryptix/tree/main/Calculator" 
                        competences={[{ src: html, alt: 'HTML' }, { src: css, alt: 'CSS' }, { src: js, alt: 'JavaScript' }]}
                    />
                </div>
                <div className="col">
                    <Projet 
                        images={[exponse]} 
                        title="Expense Tracker" 
                        description="A tool to manage your expenses and track your spending habits over time, with a user-friendly interface." 
                        githublink="https://github.com/ines2604/expense-tracker" 
                        competences={[{ src: html, alt: 'HTML' }, { src: css, alt: 'CSS' }, { src: js, alt: 'JavaScript' }]}
                    />
                </div>
                <div className="col">
                    <Projet 
                        images={[jeum1, jeum2, jeum3]} 
                        title="Memory Game" 
                        description="A memory game with 3 levels challenges players to match pairs of cards," 
                        githublink="https://github.com/ines2604/jeu-de-m-moire" 
                        competences={[{ src: html, alt: 'HTML' }, { src: css, alt: 'CSS' }, { src: js, alt: 'JavaScript' }]}
                    />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <Projet 
                        images={[math1, math2]} 
                        title="Math Game" 
                        description="A simple and interactive math game to test your arithmetic skills in a fun and timed environment." 
                        githublink="https://github.com/ines2604/Math-Game" 
                        competences={[{ src: html, alt: 'HTML' }, { src: css, alt: 'CSS' }, { src: js, alt: 'JavaScript' }]}
                    />
                </div>
                <div className="col">
                    <Projet 
                        images={[todolist]} 
                        title="To-Do List" 
                        description="A minimalist to-do list web app to help you stay organized and manage your tasks effectively." 
                        githublink="https://github.com/ines2604/Todo-List" 
                        competences={[{ src: html, alt: 'HTML' }, { src: css, alt: 'CSS' }, { src: js, alt: 'JavaScript' }]}
                    />
                </div>
                <div className="col">
                    <Projet 
                        images={[quiz1, quiz2, quiz3]} 
                        title="Quiz Game" 
                        description="An engaging quiz game to  test your general knowledge about html & css basics." 
                        githublink="https://github.com/ines2604/quizApp" 
                        competences={[{ src: html, alt: 'HTML' }, { src: css, alt: 'CSS' }, { src: jquery, alt: 'jQuery' }]}
                    />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <Projet 
                        images={[snake1, snake2]} 
                        title="Snake Game" 
                        description="A classic Snake game where the player controls a growing snake and tries to avoid collisions." 
                        githublink="https://github.com/ines2604/snakeGame" 
                        competences={[{ src: html, alt: 'HTML' }, { src: css, alt: 'CSS' }, { src: jquery, alt: 'jQuery' }]}
                    />
                </div>
                <div className="col">
                    <Projet 
                        images={[tic1,tic2]} 
                        title="tic-tac-toe Game" 
                        description="Tic-Tac-Toe is a simple two-player game where players take turns marking X or O on a 3x3 grid, aiming to be the first to align three of their symbols horizontally, vertically, or diagonally to win." 
                        githublink="https://github.com/ines2604/tic-tac-toe" 
                        competences={[{ src: html, alt: 'HTML' }, { src: css, alt: 'CSS' }, { src: react, alt: 'React' }]}
                    />
                </div>
                <div className="col">
                    <Projet 
                        images={[quizreact1,quizreact2,quizreact3]} 
                        title="Quiz Game" 
                        description="An engaging quiz game to  test your general knowledge about html & css basics." 
                        githublink="https://github.com/ines2604/quizApp-Reactjs" 
                        competences={[{ src: html, alt: 'HTML' }, { src: css, alt: 'CSS' }, { src: react, alt: 'React' }]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;
