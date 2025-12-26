"use client";

import React from "react";
import { Mail, Phone, ArrowRight, MapPin } from "lucide-react";

function Contact() {
	return (
		<section
			id="contact"
			className="relative overflow-hidden bg-white py-14 sm:py-16">
			{/* soft background */}
			<div aria-hidden className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ecfdf3_0,transparent_55%),radial-gradient(circle_at_top_right,#e0f2fe_0,transparent_55%)]" />
				<div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
			</div>

			<div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur sm:p-10">
					{/* heading */}
					<div className="mx-auto max-w-2xl text-center">
						<p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-emerald-700">
							Contact
						</p>

						<h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
							Let’s build something meaningful together.
						</h2>

						<p className="mt-4 text-[0.98rem] leading-relaxed text-slate-600 sm:text-base">
							Interested in sustainable farming, rural development, green
							energy, or business partnerships? Reach out — we’ll respond
							quickly.
						</p>
					</div>

					{/* actions */}
					<div className="mt-8 grid place-items-center">
						<div className="grid gap-3 sm:grid-cols-2 max-w-xl w-full">
							<a
								href="mailto:contact@the-vrgroup.com"
								className="
									sm:col-span-2
									group flex items-center justify-between gap-4 rounded-2xl
									bg-emerald-600 px-5 py-4 text-white
									shadow-[0_14px_30px_rgba(5,150,105,0.22)]
									transition hover:bg-emerald-700
									hover:-translate-y-0.5
									hover:shadow-[0_20px_40px_rgba(5,150,105,0.28)]
									focus-visible:outline-none focus-visible:ring-2
									focus-visible:ring-emerald-600 focus-visible:ring-offset-2
								">
								<div className="flex items-center gap-3">
									<span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
										<Mail className="h-5 w-5" />
									</span>
									<div className="text-left">
										<p className="text-[0.95rem] font-semibold">Email us</p>
										<p className="text-[0.8rem] text-white/85">
											contact@the-vrgroup.com
										</p>
									</div>
								</div>
								<ArrowRight className="h-5 w-5 opacity-90 transition group-hover:translate-x-0.5" />
							</a>
						</div>
					</div>

					{/* footer badges */}
					<div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[0.82rem] text-slate-600">
						<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
							<MapPin className="h-4 w-4 text-emerald-700" />
							Telangana · Andhra Pradesh · India
						</span>
						<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
							Typically replies within 24 hours
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
