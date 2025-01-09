const ProjectsSection = () => {
	const projects = [
		{
			name: "Portfolio Website",
			desc: "A minimalist, terminal-themed website showcasing my web development and projects.",
			features: [
				"Built with React.js.",
				"Features Tailwind.css for custom styling.",
				"Responsive design.",
				"Mock terminal design, mimicing an Ubuntu bash terminal.",
			],
			github: "https://github.com/Iain-Crowe/resume-website",
		},
		{
			name: "Spinal AI",
			desc: "A cutting-edge artificial intelligence tool designed to identify candidates for spinal surgery.",
			features: [
				"Led the project during my senior design class, managing scope, deadlines, and team collaboration.",
				"Oversaw data preparation and model development to ensure accuracy and reliability.",
				"Successfully secured a contract with Orlando Health for continued development, starting February 2025.",
			],
		},
	];

	const ProjectCard = ({ project }) => (
		<div className="hover:shadow-xl transition">
			<h3 className="text-sm sm:text-base font-bold text-cerulean-500">
				{">>> "}
				{project.name}
			</h3>
			<p className="text-xs sm:text-sm mt-2">{project.description}</p>
			<ul className="mt-4 text-snow/80 list-disc list-inside">
				{project.features.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul>
			<div className="flex space-x-4 mt-6">
				{project.github && (
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="text-electric_blue-500 hover:underline">
						{"["}GitHub Repo{"]"}
					</a>
				)}
			</div>
		</div>
	);

	return (
		<section className="p-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						project={project}
					/>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
