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
			"Membership-based rural ecosystem supporting families through natural farming, health-care tie-ups, land-linked benefits and livelihood initiatives.",
			"Focused on building self-sustainable, future-ready villages across India.",
		],
		cta: "Explore VR Kisan Parivaar",
		href: "https://www.vrkisanparivaar.com/",
		logo: "https://res.cloudinary.com/diaoy3wzi/image/upload/v1764315365/vrKP-4_no_bg_2_ccexer.png",
		accent: "#16a34a",
	},
	{
		slug: "vr-1-mart",
		name: "VR 1 Mart",
		tag: "Retail · Grocery · Farm-to-Shelf",
		oneLiner: "Your neighbourhood premium mart – online & offline.",
		description: [
			"Farm-fresh and quality-tested products delivered through a modern retail experience.",
			"Focused on freshness, fair pricing and trusted sourcing.",
		],
		cta: "Shop with VR 1 Mart",
		href: "https://www.vr1mart.com/",
		logo: "https://res.cloudinary.com/dgulr1hgd/image/upload/v1764740121/vr1mart-logo-final_mfwrro.png",
		accent: "#f97316",
	},
	{
		slug: "vr-tech-forz",
		name: "VR Tech Forz",
		tag: "Technology & Digital Solutions",
		oneLiner: "Full-stack tech team for modern, scalable digital products.",
		description: [
			"Websites, portals, internal tools and AI-powered platforms.",
			"Performance-focused, secure and maintainable systems.",
		],
		cta: "Visit VR Tech Forz",
		href: "https://www.vrtechforz.com/",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765001697/VR_TEch_Forz_Final_Logo_lceoqy.png",
		accent: "#0ea5e9",
	},
	{
		slug: "vr-greentek",
		name: "VR GreenTek",
		tag: "Electricals & Green Energy Solutions",
		oneLiner: "Powering sustainable infrastructure with clean energy.",
		description: [
			"Electrical and renewable energy solutions across residential, commercial and industrial sectors.",
			"Built for safety, efficiency and long-term value.",
		],
		cta: "Discover VR GreenTek",
		href: "",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766638077/VR_GreenTekEnergy_Logo_no_bg_iupgwa.png",
		accent: "#15803d",
	},
	{
		slug: "vr-agri",
		name: "VR Agri Farms",
		tag: "Agriculture Services & Solutions",
		oneLiner: "Smart agriculture solutions from soil to shelf.",
		description: [
			"Agri inputs, advisory and services that improve farmer productivity.",
			"Connecting natural farming with modern practices and markets.",
		],
		cta: "Discover VR Agri",
		href: "https://www.vragrifarms.com/",
		logo: "https://res.cloudinary.com/dwsm6i6z9/image/upload/v1766732956/agri_farms_4x_no_bg_eeopbi.png",
		accent: "#166534",
	},
];

export default function VRGroupCompanies() {
	return (
		<section
			id="companies"
			className="relative w-full border-t border-slate-200 bg-white overflow-hidden">
			{/* subtle background glows */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-200/25 blur-3xl" />
				<div className="absolute -bottom-48 right-0 translate-x-1/2 h-[560px] w-[560px] rounded-full bg-sky-200/25 blur-3xl" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.05),transparent_55%)]" />
			</div>

			<div className="relative mx-auto max-w-7xl w-full px-4 py-12 sm:px-6 sm:py-14 lg:py-16">
				{/* header */}
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-emerald-700">
						Our Companies
					</p>
					<h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
						One vision. Multiple brands. Real impact.
					</h2>
					<p className="mt-3 text-sm text-slate-600 sm:text-[0.95rem]">
						Independent brands working together to build a connected ecosystem
						across rural development, retail, technology, energy and
						agriculture.
					</p>
				</div>

				{/* grid */}
				<div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{COMPANIES.map((company) => (
						<CompanyCard key={company.slug} company={company} />
					))}
				</div>

				{/* footer note */}
				<div className="mt-10 flex justify-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs text-slate-600 shadow-sm">
						<span className="h-2 w-2 rounded-full bg-emerald-500" />
						<span className="font-medium text-slate-800">The VR Group</span>
						<span className="text-slate-400">•</span>
						<span>Connected businesses with long-term impact</span>
					</div>
				</div>
			</div>
		</section>
	);
}

function CompanyCard({ company }: { company: Company }) {
	const { name, tag, oneLiner, description, cta, href, logo, accent } = company;

	return (
		<article
			className="
				group relative overflow-hidden rounded-3xl
				border border-slate-200/70 bg-white/95
				shadow-[0_14px_45px_rgba(15,23,42,0.08)]
				transition hover:-translate-y-1
				hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]
			">
			{/* accent line */}
			<div className="h-1 w-full" style={{ backgroundColor: accent }} />

			{/* glow */}
			<div
				className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl opacity-80 transition-transform duration-500 group-hover:scale-110"
				style={{ backgroundColor: `${accent}18` }}
			/>

			<div className="relative flex h-full flex-col p-5 sm:p-6 text-center">
				<div className="flex justify-center">
					<Image
						src={logo}
						alt={`${name} logo`}
						width={180}
						height={180}
						priority={false}
						className="h-[90px] w-[90px] sm:h-24 sm:w-24 object-contain
			drop-shadow-[0_14px_32px_rgba(0,0,0,0.12)]"
					/>
				</div>

				{/* tighter spacing */}
				<p
					className="mt-3 text-[0.66rem] font-semibold uppercase tracking-[0.22em]"
					style={{ color: `${accent}cc` }}>
					{tag}
				</p>

				<h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-900">
					{name}
				</h3>

				<p className="mt-2 text-sm font-medium text-slate-700">{oneLiner}</p>

				<div className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
					{description.map((p) => (
						<p key={p.slice(0, 28)}>{p}</p>
					))}
				</div>

				{/* CTA */}
				<div className="mt-5 flex flex-1 items-end justify-center">
					{href ? (
						<Link
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
							style={{
								backgroundImage: `linear-gradient(90deg, ${accent} 0%, ${accent}dd 100%)`,
							}}>
							{cta}
							<span aria-hidden>↗</span>
						</Link>
					) : (
						<button
							disabled
							className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600">
							{cta}
							<span aria-hidden>↗</span>
						</button>
					)}
				</div>

				<span className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
					Part of The VR Group
				</span>
			</div>
		</article>
	);
}
