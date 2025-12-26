"use client";

const ACCENT = "#059669"; // VR green (kept for future use)

export default function About() {
	return (
		<section
			id="about"
			className="
				relative border-t border-slate-200/70 bg-white
				pt-28 pb-20 sm:pt-32 sm:pb-24
				overflow-hidden
				bg-[radial-gradient(circle_at_top_left,#ecfdf3_0,transparent_65%),radial-gradient(circle_at_bottom_right,#e0f2fe_0,transparent_65%)]
			">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-center">
					{/* ---------------- LEFT SIDE ---------------- */}
					<div className="max-w-2xl mx-auto text-center lg:mx-0 lg:text-left">
						<p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700">
							About The VR Group
						</p>

						<h2
							className="
								mt-4 text-3xl font-semibold tracking-tight text-slate-950
								sm:text-4xl lg:text-[2.4rem] lg:leading-tight
							">
							A connected ecosystem of tech, agri, retail &amp; rural solutions.
						</h2>

						<div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
							<p>
								The VR Group is a home-grown group of companies focused on
								solving real-world problems in rural and semi-urban India.
							</p>
							<p>
								From building modern tech platforms and membership ecosystems to
								farm-to-shelf retail and agri services, each brand under The VR
								Group is designed to work independently – yet connect seamlessly
								as part of a larger vision.
							</p>
							<p>
								Our goal is simple: create sustainable value for farmers,
								families, partners and businesses through thoughtful products,
								transparent processes and long-term relationships.
							</p>
						</div>
					</div>

					{/* ---------------- RIGHT: PREMIUM STATS CARD ---------------- */}
					<div className="relative max-w-md mx-auto lg:max-w-none lg:mx-0">
						{/* Soft glowing background shape, clamped inside card */}
						<div
							className="
								pointer-events-none absolute inset-0 -z-10
								rounded-[2.5rem] bg-linear-to-tr
								from-emerald-100/70 via-white to-sky-100/70
								blur-2xl
							"
						/>

						<div
							className="
								relative rounded-3xl border border-slate-200/80 bg-white/90
								px-7 py-6 sm:px-9 sm:py-8
								shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur
							">
							{/* small chip */}
							<div
								className="
									absolute -top-4 right-4 rounded-full bg-emerald-600
									px-3 py-1 text-[0.72rem] font-medium text-white shadow-lg
								">
								Long-term, ecosystem thinking
							</div>

							<p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
								At a glance
							</p>

							<h3 className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">
								Building a multi-vertical, impact-focused ecosystem.
							</h3>

							{/* STATS GRID */}
							<div className="mt-6 grid gap-5 sm:grid-cols-3">
								<Stat
									label="Business Verticals"
									value="6+"
									description="Tech, agri, retail & rural empowerment."
								/>
								<Stat
									label="Regional Focus"
									value="AP & TS"
									description="Deep rural roots with India-wide expansion ahead."
								/>
								<Stat
									label="How We Work"
									value="Doer-Led"
									description="On-ground insight with tech-first execution."
								/>
							</div>

							{/* bottom accent line */}
							<div className="mt-7 h-[3px] w-full rounded-full bg-linear-to-r from-emerald-500 via-teal-500 to-sky-500" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

type StatProps = {
	label: string;
	value: string;
	description: string;
};

function Stat({ label, value, description }: StatProps) {
	return (
		<div
			className="
				rounded-2xl border border-slate-200 bg-slate-50/70
				p-4 text-center sm:text-left
				shadow-sm hover:shadow-md transition
			">
			<div className="mb-2 flex items-center justify-center sm:justify-start">
				<div className="h-3 w-3 rounded-full bg-emerald-500" />
			</div>

			<p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
				{label}
			</p>

			<p className="mt-1 text-2xl font-semibold text-slate-900">{value}</p>

			<p className="mt-1 text-sm leading-relaxed text-slate-600">
				{description}
			</p>
		</div>
	);
}
