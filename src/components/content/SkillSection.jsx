import { useMemo } from "react";

import "../dashboard/styles/tile.css";

const SkillsSection = () => {
	const skillTree = {
		programming_languages: ["C", "C++", "Java", "JavaScript", "Python"],
		frontend: ["HTML", "CSS", "React.js", "Tailwind CSS"],
		backend: ["Node.js", "Flask"],
		databases: ["MongoDB", "MySQL"],
		tools: ["GitHub", "Jira", "Linux"],
		machine_learning: ["TensorFlow", "PyTorch"],
		project_management: ["Agile", "Scrum", "Software Project Management"],
	};

	return (
		<div className="skills-section">
			<p className="text-snow font-bold">
				<span className="text-shamrock_green">{">>>"}</span> ls /skills
			</p>
			<ul className="ml-4">
				{Object.entries(skillTree).map(([category, skills]) => (
					<li
						key={category}
						className="">
						<p className="text-cerulean font-bold">{category}/</p>
						<ul>
							{skills.map((skill, index) => (
								<li key={skill}>
									<span className="text-snow/70">
										{`${
											index == skills.length - 1
												? "\u2517"
												: "\u2523"
										}\u2501`}{" "}
										{skill}
									</span>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SkillsSection;
