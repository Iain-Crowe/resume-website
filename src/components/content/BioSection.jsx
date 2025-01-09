import "../dashboard/styles/tile.css";

import portrait from "../../assets/portrait.png";

const BioSection = () => (
	<div className="w-full">
		<img
			className="bio-img float-right relative top-0 right-0"
			style={{ filter: "contrast(0.8) saturate(1.1) brightness(0.9)" }}
			src={portrait}
			alt="Portrait photo of Iain Crowe"
		/>
		<p className="text-pretty">
			Hi, I’m Iain—a full-stack developer and the owner of MedicAI, LLC,
			where I specialize in AI-driven solutions and building intuitive,
			scalable systems. My work includes exciting projects like developing
			medical applications for Orlando Health.
			<br />
			<br /> Outside of coding, I’m a creative at heart. I enjoy drawing,
			making music, traveling, hiking, and immersing myself in the energy
			of EDM festivals. Whether it’s crafting elegant code or exploring
			new horizons, I’m driven by curiosity and a love for innovation.
			<br />
			<br />
			Let’s create something amazing together.
		</p>
	</div>
);

export default BioSection;
