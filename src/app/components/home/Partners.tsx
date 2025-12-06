"use client";

import { easeOut, motion } from "framer-motion";

const POINTS = [
	{
		title: "Integrated Ecosystem",
		desc: "Technology, agriculture, retail and rural development under one umbrella – designed to work together and grow together.",
	},
	{
		title: "On-Ground + Tech-First",
		desc: "We combine real on-ground experience with modern tech stacks, data and automation to create practical, scalable solutions.",
	},
	{
		title: "Farmer to Family Focus",
		desc: "Our work is built around the real needs of farmers, households and local communities, not just dashboards and KPIs.",
	},
	{
		title: "Transparent, Long-Term Partnerships",
		desc: "We believe in clear communication, ethical operations and building relationships that last beyond a single project.",
	},
];

const listVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.12, // animate children one by one
		},
	},
};

// Card variants
const cardVariants = {
	hidden: { opacity: 0, y: 18 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: easeOut },
	},
};

export default function Partners() {
	return (
		<section
			id="partner"
			className="
				relative border-t border-slate-200/70 bg-white
				[radial-gradient(circle_at_top_left,#ecfdf3_0,transparent_60%),radial-gradient(circle_at_bottom_right,#e0f2fe_0,transparent_60%)]
			">
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-18 lg:py-20">
				<div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-start">
					{/* LEFT: TITLE + SHORT PITCH */}
					<motion.div
						className="max-w-xl"
						initial={{ opacity: 0, y: 18 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.35 }}
						transition={{ duration: 0.45, ease: "easeOut" }}>
						<p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-emerald-700">
							Why Partner With The VR Group?
						</p>

						<h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-[1.7rem]">
							The right partner for impact-focused, scalable execution.
						</h2>

						<p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
							We bring together ground-level understanding, technology and an
							ecosystem mindset. For partners, that means less fragmentation,
							more alignment and a team that thinks beyond a single project or
							pilot.
						</p>

						{/* small trust chip */}
						<div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/80 px-3 py-1">
							<span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
							<span className="text-[0.75rem] font-medium text-emerald-800">
								Ecosystem thinking · Long-term lens
							</span>
						</div>
					</motion.div>

					{/* RIGHT: STACKED CARDS WITH ACCENT LINE */}
					<div className="relative">
						{/* animated vertical accent line (desktop) */}
						<motion.div
							initial={{ opacity: 0, scaleY: 0.5 }}
							whileInView={{ opacity: 1, scaleY: 1 }}
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="pointer-events-none absolute left-[15px] top-3 bottom-3 hidden w-0.5 origin-top bg-linear-to-b from-emerald-500 via-teal-500 to-sky-500 lg:block"
						/>

						<motion.div
							variants={listVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.3 }}
							className="space-y-4">
							{POINTS.map((point, index) => (
								<WhyCard key={point.title} index={index} {...point} />
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}

type WhyCardProps = {
	title: string;
	desc: string;
	index: number;
};

function WhyCard({ title, desc, index }: WhyCardProps) {
	const number = (index + 1).toString().padStart(2, "0");

	return (
		<motion.article
			variants={cardVariants}
			className="
				group relative flex gap-4 rounded-2xl border border-slate-200/80 bg-white/90
				p-4 shadow-[0_10px_26px_rgba(15,23,42,0.06)] backdrop-blur
			 transition-shadow
				duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.09)]
			">
			{/* Number badge */}
			<div className="relative z-10 flex shrink-0 items-start">
				<div
					className="
						flex h-8 w-8 items-center justify-center rounded-full
						border border-emerald-100 bg-emerald-50 text-[0.75rem]
						font-semibold text-emerald-700
						transition-transform duration-300 group-hover:scale-105
					">
					{number}
				</div>
			</div>

			<div className="flex flex-1 flex-col">
				<h3 className="text-sm font-semibold text-slate-900">{title}</h3>
				<p className="mt-1 text-sm leading-relaxed text-slate-600">{desc}</p>

				{/* subtle micro-label */}
				<p className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-400">
					Key partner advantage
				</p>
			</div>

			{/* soft corner glow */}
			<div className="pointer-events-none absolute -right-6 -bottom-6 h-16 w-16 rounded-full bg-linear-to-tr from-emerald-100 via-white to-transparent blur-xl transition-opacity duration-300 group-hover:opacity-100" />
		</motion.article>
	);
}
