import { Project } from "./_schemas";

export default [
	new Project(
		"PyModels AI",
		"In this project I have implemented different tensorflow and scikit learn models for solving different machine learning problems. Some models that I have created and hosted are: Face Analytics, Cat VS Dog, Movie Reviews Sentimental Analysis, Book Recommender System, 2022 Movie Recommender System, Movie Recommender System",
		["Tensorflow", "Pytorch", "React JS", "Tailwind CSS", "Python", "Scikit Learn"],
		["Deep Learning", "Machine Learning", "NLP", "Image Processing", "Recommender Systems", "Web Development"],
		[{
			name: "Code",
			icon: "github",
			link: "https://github.com/geetu040/pymodels"
		}, {
			name: "Live Demo",
			icon: "redirect",
			link: "https://github.com/geetu040/pymodels"
		}]
	),
	new Project(
		"Visual Data Structures and Algorithms",
		"In this project I tried to visualise different Data Structures and Algorithms associated with them. Web has been structured with HTML, CSS and React.js and Data Structures have been implemented in pure JavaScript",
		["HTML", "CSS", "Javascript"],
		["Data Structures and Algorithms", "Graphs", "Sorting Algorithms", "Trees", "Web Designing"],
		[{
			name: "Code",
			icon: "github",
			link: "https://github.com/geetu040/visual-dsa"
		}, {
			name: "Live Demo",
			icon: "redirect",
			link: "https://visual-dsa.netlify.app/"
		}]
	),
	new Project(
		"Intelli Snake",
		"Snake has been automated using Deep Learning Techniques to find its path through the maze, avoiding the blocks and eating food, which gives score. Following are the Objective Functions for which the model has been optimized: Eating Food (Raising Score), Avoid Hitting The Blocks on Maze, Avoid hitting itself (body), Find the shortest path",
		["Tensorflow", "Python", "HTML", "CSS", "Javascript"],
		["Data Structures and Algorithms", "Graphs", "Sorting Algorithms", "Trees", "Web Designing"],
		[{
			name: "Code",
			icon: "github",
			link: "https://github.com/geetu040/intelli-snake"
		}, {
			name: "Live Demo",
			icon: "redirect",
			link: "https://intelli-snake.netlify.app"
		}]
	),
];