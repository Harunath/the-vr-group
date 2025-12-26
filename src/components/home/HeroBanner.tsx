"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
	ArrowRight,
	Leaf,
	ShoppingBasket,
	Code2,
	Sprout,
	PlugZap,
	Handshake,
	ExternalLink,
	Sparkles,
	ShieldCheck,
	MapPin,
	Rocket,
	Globe,
} from "lucide-react";

type Website = {
	key: string;
	name: string;
	href: string;
	desc: string;
	icon: React.ElementType;
};

export default function HeroBanner() {
	const reduceMotion = useReducedMotion() ?? false;

	const WEBSITES: Website[] = useMemo(
		() => [
			{
				key: "vrkp",
				name: "VR Kisan Parivaar",
				href: "https://www.vrkisanparivaar.com/",
				desc: "Rural ecosystem & development",
				icon: Leaf,
			},
			{
				key: "vr1mart",
				name: "VR 1 Mart",
				href: "https://www.vr1mart.com/",
				desc: "Retail & grocery",
				icon: ShoppingBasket,
			},
			{
				key: "techforz",
				name: "VR Tech Forz",
				href: "https://www.vrtechforz.com/",
				desc: "Tech & digital services",
				icon: Code2,
			},
			{
				key: "greentek",
				name: "VR GreenTek",
				href: "https://example.com/vr-greentek",
				desc: "Green energy & solutions",
				icon: PlugZap,
			},
			{
				key: "vragri",
				name: "VR Agri",
				href: "https://www.vragrifarms.com/",
				desc: "Agri services & support",
				icon: Sprout,
			},
		],
		[]
	);

	/* ---------------- variants (FIXED) ---------------- */

	const fade = {
		hidden: { opacity: 0, y: 14 },
		visible: (i: number = 0) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.55,
				ease: "easeOut",
				delay: 0.08 * i,
			},
		}),
	} satisfies Variants;

	const cardIn = {
		hidden: { opacity: 0, y: 18, scale: 0.985 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut",
				delay: 0.15,
			},
		},
	} satisfies Variants;

	/* -------------------------------------------------- */

	return (
		<section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-28 sm:pb-20">
			{/* background */}
			<div aria-hidden className="pointer-events-none absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#ecfdf3_0%,transparent_55%),radial-gradient(ellipse_at_top_right,#e0f2fe_0%,transparent_55%)]" />
				<div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
					{/* LEFT */}
					<motion.div
						initial={reduceMotion ? "visible" : "hidden"}
						animate="visible"
						className="text-center lg:text-left">
						<motion.span
							variants={fade}
							custom={0}
							className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-emerald-800">
							Telangana · Andhra Pradesh · Expanding Across India
						</motion.span>

						<motion.h1
							variants={fade}
							custom={1}
							className="mt-5 text-[2.3rem] font-semibold tracking-tight text-slate-950 sm:text-[2.9rem] lg:text-[3.4rem]">
							The VR Group
						</motion.h1>

						<motion.p
							variants={fade}
							custom={2}
							className="mt-3 text-base text-slate-700 sm:text-lg">
							Building India’s Next-Gen Rural, Retail & Tech Ecosystem
						</motion.p>

						<motion.p
							variants={fade}
							custom={3}
							className="mt-4 mx-auto max-w-xl text-[0.95rem] leading-relaxed text-slate-600 lg:mx-0">
							We create interconnected ventures with strong execution standards
							— from rural communities to scalable digital platforms.
						</motion.p>

						{/* CTAs */}
						<motion.div
							variants={fade}
							custom={4}
							className="mt-7 flex flex-wrap justify-center gap-4 lg:justify-start">
							<Link
								href="#companies"
								className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(5,150,105,0.22)] transition hover:bg-emerald-700">
								Explore Our Companies
								<ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
							</Link>

							<Link
								href="#partner"
								className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700">
								Partner With Us
								<Handshake className="h-4 w-4 opacity-70" />
							</Link>
						</motion.div>

						{/* Proof */}
						<motion.div
							variants={fade}
							custom={5}
							className="mt-8 grid gap-3 sm:grid-cols-3">
							<InfoChip
								icon={MapPin}
								title="Local-first"
								desc="Built from TG/AP, scaling nationwide."
							/>
							<InfoChip
								icon={ShieldCheck}
								title="Trusted systems"
								desc="Clear processes & accountability."
							/>
							<InfoChip
								icon={Rocket}
								title="Scale-ready"
								desc="Tech + on-ground execution."
							/>
						</motion.div>

						<motion.div
							variants={fade}
							custom={6}
							className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
							<Sparkles className="h-4 w-4 text-emerald-700" />
							One vision, many execution engines
						</motion.div>
					</motion.div>

					{/* RIGHT */}
					<motion.div
						initial={reduceMotion ? "visible" : "hidden"}
						animate="visible"
						variants={cardIn}
						className="w-full max-w-xl justify-self-center">
						<div className="rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
							<div className="px-6 pt-6 pb-4">
								<p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-emerald-700">
									Our Companies
								</p>
								<h2 className="mt-2 text-xl font-semibold text-slate-950">
									Explore the ecosystem
								</h2>
								<p className="mt-1 text-sm text-slate-600">
									Click a brand to open its website
								</p>
							</div>

							<div className="px-6 pb-6">
								<div className="mb-4 flex justify-center">
									<div className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white">
										<Globe className="h-4 w-4" />
										The VR Group
									</div>
								</div>

								<div className="grid gap-3 sm:grid-cols-2">
									{WEBSITES.map((w, i) => (
										<EcosystemTile
											key={w.key}
											item={w}
											index={i}
											reduceMotion={reduceMotion}
										/>
									))}
								</div>

								<div className="mt-5 flex flex-wrap gap-2">
									<Badge>Trusted execution</Badge>
									<Badge>Scalable systems</Badge>
									<Badge>On-ground impact</Badge>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

/* ---------- helpers ---------- */

function InfoChip({
	icon: Icon,
	title,
	desc,
}: {
	icon: React.ElementType;
	title: string;
	desc: string;
}) {
	return (
		<div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
			<div className="flex gap-3">
				<span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
					<Icon className="h-4 w-4" />
				</span>
				<div>
					<p className="text-sm font-semibold text-slate-900">{title}</p>
					<p className="text-xs text-slate-600">{desc}</p>
				</div>
			</div>
		</div>
	);
}

function EcosystemTile({
	item,
	index,
	reduceMotion,
}: {
	item: Website;
	index: number;
	reduceMotion: boolean;
}) {
	const Icon = item.icon;

	return (
		<motion.a
			href={item.href}
			target="_blank"
			rel="noreferrer"
			initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.45, delay: 0.06 * index }}
			className="group relative flex gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 shadow-sm transition hover:border-emerald-300 hover:shadow-md">
			<span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-50 text-emerald-700">
				<Icon className="h-5 w-5" />
			</span>

			<div className="min-w-0">
				<p className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2">
					{item.name}
				</p>
				<p className="mt-1 text-xs text-slate-600 line-clamp-2">{item.desc}</p>
			</div>

			<ExternalLink className="absolute right-3 top-3 h-4 w-4 text-slate-400 group-hover:text-emerald-700" />
		</motion.a>
	);
}

function Badge({ children }: { children: React.ReactNode }) {
	return (
		<span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
			{children}
		</span>
	);
}
