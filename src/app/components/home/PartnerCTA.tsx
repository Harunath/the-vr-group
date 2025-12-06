import Link from "next/link";

const ACCENT = "#059669"; // VR green

export default function PartnerCTA() {
	return (
		<section
			id="contact"
			className="
				relative border-t border-slate-200/70
				bg-white
				[radial-gradient(circle_at_top_left,#ecfdf3_0,transparent_55%),radial-gradient(circle_at_bottom_right,#e0f2fe_0,transparent_60%)]
			">
			<div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
				{/* CARD */}
				<div
					className="
						relative overflow-hidden rounded-3xl border border-slate-200/80
						bg-white/90 px-5 py-8 sm:px-8 sm:py-10
						shadow-[0_18px_45px_rgba(15,23,42,0.1)] backdrop-blur
					">
					{/* soft gradient glows */}
					<div
						className="
							pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full
							bg-linear-to-br from-emerald-200 via-sky-100 to-transparent blur-2xl
						"
					/>
					<div
						className="
							pointer-events-none absolute -bottom-16 left-0 h-40 w-40 rounded-full
							bg-linear-to-tr from-emerald-100 via-white to-transparent blur-2xl
						"
					/>

					{/* top accent bar */}
					<div
						className="
							mb-4 h-[3px] w-16 rounded-full
							bg-linear-to-r from-emerald-500 via-teal-500 to-sky-500
						"
					/>

					{/* content */}
					<div className="space-y-4 sm:space-y-5">
						<p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-emerald-700">
							Partner &amp; Contact
						</p>

						<h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-[1.8rem]">
							Let&apos;s build something meaningful together.
						</h2>

						<p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
							Whether you&apos;re a farmer, organisation, investor or brand,
							we&apos;d love to explore how we can work together.
						</p>
					</div>

					{/* CTA BUTTONS */}
					<div className="mt-7 flex flex-wrap items-center gap-3">
						<Link
							href="/contact"
							className="
								inline-flex items-center justify-center gap-2
								rounded-full bg-(--accent)
								px-6 py-2.5 text-sm font-semibold text-white
								shadow-sm transition
								hover:shadow-md hover:brightness-110
								focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2
							"
							style={{ ["--accent" as any]: ACCENT }}>
							<span>Talk to Our Team</span>
							<span className="text-xs">↗</span>
						</Link>

						<a
							href="mailto:contact@thevrgroup.in"
							className="
								inline-flex items-center justify-center gap-2
								rounded-full border border-slate-300 bg-white/80
								px-5 py-2.5 text-sm font-semibold text-slate-800
								shadow-sm transition
								hover:border-emerald-400 hover:text-emerald-700 hover:shadow-sm
							">
							<span>Write to Us</span>
							<span className="text-[0.75rem] text-slate-500">
								contact@thevrgroup.in
							</span>
						</a>
					</div>

					{/* small footnote */}
					<p className="mt-6 text-[0.8rem] text-slate-500">
						For individual brand enquiries, you can directly reach out through
						each company&apos;s page.
					</p>
				</div>
			</div>
		</section>
	);
}
