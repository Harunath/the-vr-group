import Contact from "@/components/home/Contact";
import About from "../components/home/About";
import HeroBanner from "../components/home/HeroBanner";
import VRTechForzCard from "../components/home/VRGroupCompanies";
import Partners from "@/components/home/Partners";

function page() {
	return (
		<>
			<HeroBanner />
			<About />
			<VRTechForzCard />
			<Partners />
			{/* <Contact /> */}
		</>
	);
}

export default page;
