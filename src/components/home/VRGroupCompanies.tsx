"use client";

import Link from "next/link";
import Image from "next/image";

type Company = {
	slug: string;
	name: string;
	tag: string;
	oneLiner: string;
	description: string[];
	cta: string;
	href: string;
	logo: string;
	accent: string;
};

const COMPANIES: Company[] = [
	{
		slug: "vr-kisan-parivaar",
		name: "VR Kisan Parivaar",
		tag: "Rural Development & Membership Ecosystem",
		oneLiner:
			"Empowering farmers, families and villages with holistic support.",
		description: [
			"VR Kisan Parivaar is a membership-based rural ecosystem designed to support farmers and their families through natural farming, health-care tie-ups, land-linked benefits, training and rural livelihood initiatives.",
			"Our vision is to build self-sustainable, future-ready villages across India.",
		],
		cta: "Explore VR Kisan Parivaar",
		href: "https://www.vrkisanparivaar.com/",
		logo: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1764315365/vrKP-4_no_bg_2_ccexer.png",
		accent: "#16a34a", // rural green
	},

	{
		slug: "vr-1-mart",
		name: "VR 1 Mart",
		tag: "Retail · Grocery · Farm-to-Shelf",
		oneLiner: "Your neighbourhood premium mart – online & offline.",
		description: [
			"VR 1 Mart connects farm-fresh and quality-tested products directly to customers through a modern retail experience.",
			"From daily essentials to curated local produce, we focus on freshness, fair pricing and trusted sourcing, powered by tech and strong supply chains.",
		],
		cta: "Shop with VR 1 Mart",
		href: "https://www.vr1mart.com/",
		logo: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1764740121/vr1mart-logo-final_mfwrro.png",
		accent: "#f97316", // retail orange
	},
	{
		slug: "vr-tech-forz",
		name: "VR Tech Forz",
		tag: "Technology & Digital Solutions",
		oneLiner: "Full-stack tech team for modern, scalable digital products.",
		description: [
			"VR Tech Forz builds fast, secure and user-friendly digital platforms – from websites and portals to AI-powered solutions and internal tools.",
			"We work with founders, SMEs and growing brands to take ideas from concept to production with a clear focus on performance, UX and long-term maintainability.",
		],
		cta: "Visit VR Tech Forz",
		href: "https://www.vrtechforz.com/",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765001697/VR_TEch_Forz_Final_Logo_lceoqy.png",
		accent: "#0ea5e9", // tech blue
	},
	{
		slug: "vr-greentek",
		name: "VR GreenTek",
		tag: "Electricals & Green Energy Solutions",
		oneLiner: "Powering sustainable infrastructure with clean energy.",
		description: [
			"VR GreenTek delivers reliable electrical and renewable energy solutions for residential, commercial, industrial, and rural projects.",
			"Our expertise spans solar power systems, electrical installations, and energy-efficient infrastructure—designed for safety, scalability, and long-term value.",
		],
		cta: "Discover VR GreenTek",
		href: "https://www.vrgreentek.com/",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766638077/VR_GreenTekEnergy_Logo_no_bg_iupgwa.png",
		accent: "#16A34A",
	},
	{
		slug: "vr-agri",
		name: "VR Agri Farms",
		tag: "Agriculture Services & Solutions",
		oneLiner: "Smart agriculture solutions from soil to shelf.",
		description: [
			"VR Agri focuses on supporting farmers with inputs, advisory, and agri-linked services that improve productivity and income.",
			"We bridge the gap between natural farming practices, modern techniques and market access, helping farmers grow better and earn better.",
		],
		cta: "Discover VR Agri",
		href: "https://www.vragrifarms.com/",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766732956/agri_farms_4x_no_bg_eeopbi.png",
		accent: "#15803d", // deep agri green
	},
];

export default function VRGroupCompanies() {
	return (
		<section
			id="companies"
			className="
				relative border-t border-slate-200/70 bg-white
				[radial-gradient(circle_at_top_left,#ecfdf3_0,transparent_60%),radial-gradient(circle_at_bottom_right,#e0f2fe_0,transparent_60%)]
			">
			<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
				{/* Section header */}
				<div className="text-center max-w-2xl mx-auto">
					<p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-emerald-700">
						Our Companies
					</p>
					<h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
						One vision. Multiple brands. Real impact.
					</h2>
					<p className="mt-3 text-sm text-slate-600 sm:text-[0.95rem]">
						Each brand in The VR Group focuses on a specific problem – but
						together they create a powerful, integrated ecosystem.
					</p>
				</div>

				{/* Big centered cards */}
				<div className="mt-10 space-y-8">
					{COMPANIES.map((company) => (
						<CompanyCard key={company.slug} company={company} />
					))}
				</div>
			</div>
		</section>
	);
}

function CompanyCard({ company }: { company: Company }) {
	const { name, tag, oneLiner, description, cta, href, logo, accent, slug } =
		company;

	return (
		<article
			className="
				group relative mx-auto flex max-w-3xl flex-col items-center text-center
				overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90
				p-7 sm:p-8
				shadow-[0_20px_55px_rgba(15,23,42,0.08)] backdrop-blur
				transition-shadow duration-300
				hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)]
			">
			{/* soft accent glow in corner */}
			<div
				className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full blur-3xl opacity-80 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1"
				style={{
					background: `radial-gradient(circle, ${accent}33 0, transparent 60%)`,
				}}
			/>

			{/* small SVG illustration in top-right */}
			<div className="pointer-events-none absolute right-4 top-4 opacity-70 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5">
				<CompanyIcon slug={slug} accent={accent} />
			</div>

			{/* top accent bar */}
			<div
				className="mb-6 h-[3px] w-20 rounded-full"
				style={{
					background: `linear-gradient(to right, ${accent}, ${accent}aa, #0ea5e9)`,
				}}
			/>

			{/* big logo with soft glow */}
			<div className="relative">
				<div
					className="absolute inset-0 -z-10 rounded-full blur-2xl scale-125 opacity-80"
					style={{ backgroundColor: `${accent}22` }}
				/>
				<Image
					src={logo}
					alt={`${name} logo`}
					width={150}
					height={150}
					className="object-contain"
				/>
			</div>

			{/* tag */}
			<p
				className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.2em]"
				style={{ color: accent }}>
				{tag}
			</p>

			{/* name */}
			<h3 className="mt-2 text-lg sm:text-xl font-semibold text-slate-900">
				{name}
			</h3>

			{/* one-liner */}
			<p className="mt-3 text-sm font-medium text-slate-700 sm:text-[0.95rem] max-w-xl">
				{oneLiner}
			</p>

			{/* description paragraphs */}
			<div className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem] max-w-xl">
				{description.map((para) => (
					<p key={para.slice(0, 20)}>{para}</p>
				))}
			</div>

			{/* CTA + group label */}
			<div className="mt-6 flex flex-col items-center gap-2">
				<Link
					href={href}
					className="
						inline-flex items-center gap-2 rounded-full
						bg-emerald-700 
						px-6 py-2.5 text-sm font-semibold text-white
						shadow-sm transition
						hover:from-emerald-800 
						hover:shadow-md
					">
					{cta}
					<span className="text-xs">↗</span>
				</Link>

				<span className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
					Part of The VR Group
				</span>
			</div>
		</article>
	);
}

/**
 * Small SVG illustration that matches the company domain.
 * Kept simple + light so it doesn't overpower the logo.
 */
function CompanyIcon({ slug, accent }: { slug: string; accent: string }) {
	const stroke = accent;
	const fill = `${accent}22`;

	if (slug === "vr-tech-forz") {
		// Tech: screen + circuit
		return (
			<svg width="46" height="46" viewBox="0 0 46 46" aria-hidden="true">
				<rect
					x="3"
					y="8"
					width="32"
					height="22"
					rx="4"
					fill={fill}
					stroke={stroke}
					strokeWidth="1.5"
				/>
				<path
					d="M8 15h8M8 20h5M17 20h8M8 25h12"
					stroke={stroke}
					strokeWidth="1.3"
					strokeLinecap="round"
				/>
				<path
					d="M14 34h10"
					stroke={stroke}
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<rect
					x="18"
					y="30"
					width="2"
					height="4"
					rx="1"
					fill={stroke}
					opacity="0.9"
				/>
			</svg>
		);
	}

	if (slug === "vr-kisan-parivaar") {
		// Rural ecosystem: house + people + leaf
		return (
			<svg width="46" height="46" viewBox="0 0 46 46" aria-hidden="true">
				<path
					d="M8 22.5 17 15l9 7.5"
					fill="none"
					stroke={stroke}
					strokeWidth="1.7"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<rect
					x="10"
					y="20"
					width="14"
					height="11"
					rx="2"
					fill={fill}
					stroke={stroke}
					strokeWidth="1.4"
				/>
				<circle
					cx="30.5"
					cy="19"
					r="3"
					fill={fill}
					stroke={stroke}
					strokeWidth="1.3"
				/>
				<path
					d="M27.5 26c0-2 1.4-3.5 3-3.5s3 1.5 3 3.5"
					stroke={stroke}
					strokeWidth="1.3"
					strokeLinecap="round"
				/>
				<path
					d="M32 12c2 1 3.5 3.2 3.5 5.4 0 1.1-.4 2.3-1 3.1"
					stroke={stroke}
					strokeWidth="1.3"
					strokeLinecap="round"
				/>
			</svg>
		);
	}

	if (slug === "vr-1-mart") {
		// Retail: shopping basket
		return (
			<svg width="46" height="46" viewBox="0 0 46 46" aria-hidden="true">
				<rect
					x="8"
					y="18"
					width="26"
					height="15"
					rx="3"
					fill={fill}
					stroke={stroke}
					strokeWidth="1.5"
				/>
				<path
					d="M12 18 16 11M30 18 26 11"
					stroke={stroke}
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M14 22h5M21 22h5M18 27h8"
					stroke={stroke}
					strokeWidth="1.4"
					strokeLinecap="round"
				/>
			</svg>
		);
	}

	// vr-agri or fallback: field + leaf
	return (
		<svg width="46" height="46" viewBox="0 0 46 46" aria-hidden="true">
			<path
				d="M8 30c4-2 8-3 12-3s8 1 12 3"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M8 34c4-2 8-3 12-3s8 1 12 3"
				fill="none"
				stroke={stroke}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M26 13c2.8 0 5 2.2 5 5-3.5 0-5-1.5-5-5Z"
				fill={fill}
				stroke={stroke}
				strokeWidth="1.3"
			/>
			<path
				d="M26 13c-2.8 0-5 2.2-5 5 3.5 0 5-1.5 5-5Z"
				fill="white"
				fillOpacity="0.7"
				stroke={stroke}
				strokeWidth="1.3"
			/>
		</svg>
	);
}
