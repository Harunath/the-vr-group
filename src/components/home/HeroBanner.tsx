"use client";

import Link from "next/link";

const ACCENT = "#059669"; // VR green (kept if you want later)

export default function HeroBanner() {
	return (
		<section
			className="
				relative overflow-hidden
				bg-white
				pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24
bg-[radial-gradient(circle_at_top_left,#ecfdf3_0,transparent_60%),radial-gradient(circle_at_top_right,#e0f2fe_0,transparent_60%)]
			">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center">
					{/* ---------------- LEFT CONTENT ---------------- */}
					<div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0">
						<p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-emerald-700">
							Telangana · Andhra Pradesh · Expanding Across India
						</p>

						<h1
							className="
								mt-4 text-[2.1rem] font-semibold tracking-tight text-slate-950
								sm:text-[2.5rem] lg:text-[3.1rem] lg:leading-[1.05]
							">
							The VR Group
							<span className="mt-3 block text-lg font-normal text-slate-700 sm:text-xl lg:text-[1.35rem]">
								Building India’s Next-Gen Rural, Retail &amp; Tech Ecosystem
							</span>
						</h1>

						<p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-slate-600 sm:text-base mx-auto lg:mx-0">
							We are a group of companies working together across technology,
							agriculture, retail and rural development – creating solutions
							that are practical, scalable and built for India.
						</p>

						<div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-4">
							{/* PRIMARY CTA – gradient but toned-down */}
							<Link
								href="#companies"
								className="
    inline-flex items-center justify-center
    rounded-full bg-linear-to-r from-emerald-700 to-teal-600
    px-7 py-3 text-sm sm:text-[0.95rem] font-semibold text-white
    shadow-sm transition
    hover:from-emerald-800 hover:to-teal-700 hover:shadow-md
    focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-emerald-600 focus-visible:ring-offset-2
  ">
								Explore Our Companies
							</Link>

							{/* SECONDARY CTA – neutral, professional */}
							<Link
								href="#partner"
								className="
									inline-flex items-center justify-center
									rounded-full border border-slate-300 bg-white
									px-7 py-3 text-sm sm:text-[0.95rem] font-semibold text-slate-800
									shadow-sm transition
									hover:border-emerald-400 hover:text-emerald-700 hover:shadow-md
								">
								Partner With Us
							</Link>
						</div>
					</div>

					{/* ---------------- RIGHT: CLEAN ECOSYSTEM CARD ---------------- */}
					<div className="w-full max-w-md justify-self-center lg:max-w-lg">
						<div
							className="
								rounded-3xl border border-slate-200 bg-white
								px-6 py-6 sm:px-7 sm:py-7
								shadow-[0_18px_45px_rgba(15,23,42,0.08)]
							">
							{/* small accent bar */}
							<div className="mb-4 h-[3px] w-14 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500" />

							<p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-emerald-700">
								Our Ecosystem
							</p>

							<h2 className="mt-2 text-lg font-semibold text-slate-900 sm:text-[1.15rem]">
								Connected brands under one vision.
							</h2>

							<p className="mt-3 text-[0.9rem] leading-relaxed text-slate-600">
								A single group powering tech, agri, retail and rural solutions –
								stitched together for real-world impact.
							</p>

							{/* ecosystem layout – simple and clear */}
							<div className="mt-5 rounded-2xl border border-slate-200/80 bg-slate-50/70 px-4 py-4">
								{/* center core */}
								<div className="flex items-center justify-center">
									<div
										className="
											inline-flex items-center justify-center rounded-full
											bg-emerald-600 px-4 py-1.5 text-[0.75rem] font-semibold
											text-white shadow-sm
										">
										The VR Group
									</div>
								</div>

								{/* connecting line */}
								<div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-emerald-400 to-teal-400" />

								<div className="mt-4 grid gap-3 sm:grid-cols-2">
									<BrandRow title="VR Tech Forz" subtitle="Tech & Digital" />
									<BrandRow
										title="VR Kisan Parivaar"
										subtitle="Rural Ecosystem"
									/>
									<BrandRow title="VR 1 Mart" subtitle="Retail & Grocery" />
									<BrandRow title="VR Agri" subtitle="Agri Services" />
								</div>
							</div>

							<p className="mt-4 text-[0.82rem] leading-relaxed text-slate-600">
								From code and commerce to crops and communities – each brand
								operates independently but is built to collaborate as one
								system.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

type BrandRowProps = {
	title: string;
	subtitle: string;
};

function BrandRow({ title, subtitle }: BrandRowProps) {
	return (
		<div
			className="
				flex items-start gap-2 rounded-xl bg-white/90
				px-3 py-2.5 text-[0.78rem] shadow-[0_8px_18px_rgba(15,23,42,0.04)]
			">
			<span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
			<div className="space-y-0.5">
				<p className="font-semibold text-slate-900">{title}</p>
				<p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-emerald-700">
					{subtitle}
				</p>
			</div>
		</div>
	);
}
