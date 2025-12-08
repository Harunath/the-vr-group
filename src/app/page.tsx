import About from "../components/home/About";
import HeroBanner from "../components/home/HeroBanner";
import PartnerCTA from "../components/home/PartnerCTA";
import Partners from "../components/home/Partners";
import VRTechForzCard from "../components/home/VRGroupCompanies";

function page() {
	return (
		<>
			<HeroBanner />
			<About />
			<VRTechForzCard />
			<Partners />
			<PartnerCTA />
		</>
	);
}

export default page;
