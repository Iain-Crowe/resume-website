import BioSection from "../components/content/BioSection";
import ProjectsSection from "../components/content/ProjectSection";
import SkillsSection from "../components/content/SkillSection";
import PageGrid from "../components/dashboard/PageGrid";
import Tile from "../components/dashboard/Tile";
import useWindowSize from "../utils/windowSize";

const About = () => {
	const { width } = useWindowSize();

	return (
		<PageGrid>
			<Tile
				x={0}
				y={0}
				width={width > 960 ? 3 : 1}
				height={2}
				title="> About Me">
				<BioSection />
			</Tile>
			<Tile
				x={width > 960 ? 3 : 0}
				y={width > 960 ? 0 : 2}
				width={1}
				height={5}
				title=" > Skills">
				<SkillsSection />
			</Tile>
			<Tile
				x={0}
				y={width > 960 ? 2 : 7}
				width={width > 960 ? 3 : 1}
				height={width > 960 ? 3 : 5}
				title=" > Projects">
				<ProjectsSection />
			</Tile>
		</PageGrid>
	);
};

export default About;
