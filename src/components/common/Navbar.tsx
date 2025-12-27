"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const ACCENT = "#059669";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	// Close menu on resize to desktop
	useEffect(() => {
		const onResize = () => {
			if (window.innerWidth >= 768) setOpen(false);
		};
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<header
			className="
				fixed inset-x-0 top-0 z-50 w-screen
				border-b border-slate-200/80
				bg-white/90 backdrop-blur-xl
				[radial-gradient(circle_at_top_left,#ecfdf3_0,transparent_55%),radial-gradient(circle_at_top_right,#e0f2fe_0,transparent_55%)]
			">
			<nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
				{/* LOGO */}
				<Link
					href="/"
					className="flex min-w-0 items-center gap-3"
					onClick={() => setOpen(false)}>
					<Image
						src="https://res.cloudinary.com/diaoy3wzi/image/upload/v1764315347/vr_rygjjw.png"
						alt="VR Group Logo"
						width={120}
						height={120}
						priority
						className="h-10 w-auto shrink-0 object-contain sm:h-11"
					/>

					<div className="min-w-0">
						<span className="block truncate text-base font-semibold tracking-wide text-slate-900 sm:text-lg">
							The VR Group
						</span>
						<span className="block truncate text-[0.75rem] text-slate-500 sm:text-sm">
							Integrated brands. Real impact.
						</span>
					</div>
				</Link>

				{/* DESKTOP LINKS */}
				<div className="hidden items-center gap-8 md:flex">
					<NavLink href="/#about">About</NavLink>
					<NavLink href="/#partner">Partner With Us</NavLink>
					<NavLink href="/#contact">Contact</NavLink>
				</div>

				{/* DESKTOP CTA */}
				<div className="hidden md:block">
					<Link
						href="/#companies"
						className="
							inline-flex items-center gap-2 rounded-full
							px-5 py-2 text-sm font-semibold bg-green-600 text-white
							shadow-sm transition
							hover:shadow-md hover:brightness-110
							focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent] focus-visible:ring-offset-2
						"
						style={{ ["--accent" as any]: ACCENT }}>
						Explore Companies <span aria-hidden>↗</span>
					</Link>
				</div>

				{/* MOBILE TOGGLE */}
				<button
					type="button"
					aria-label="Toggle menu"
					aria-expanded={open}
					onClick={() => setOpen((v) => !v)}
					className="
						inline-flex items-center justify-center rounded-full
						border border-slate-200 bg-white/80 p-2
						text-slate-700 shadow-sm transition
						hover:border-slate-300 hover:text-slate-900
						focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30
						md:hidden
					">
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</nav>

			{/* THIN BRAND BAR */}
			<div className="h-0.5 w-full bg-linear-to-r from-emerald-500 via-teal-500 to-sky-500" />

			{/* MOBILE OVERLAY + MENU */}
			{open && (
				<div className="md:hidden">
					{/* overlay */}
					<button
						type="button"
						aria-label="Close menu"
						onClick={() => setOpen(false)}
						className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-[2px]"
					/>

					{/* panel */}
					<div className="fixed inset-x-0 top-[57px] z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
						<div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6">
							<div className="flex flex-col gap-4">
								<MobileLink href="/#about" onClick={() => setOpen(false)}>
									About
								</MobileLink>

								<MobileLink href="/#partner" onClick={() => setOpen(false)}>
									Partner With Us
								</MobileLink>

								<MobileLink href="/#contact" onClick={() => setOpen(false)}>
									Contact
								</MobileLink>

								<div className="pt-2">
									<Link
										href="/#companies"
										onClick={() => setOpen(false)}
										className="
											inline-flex w-full items-center justify-center gap-2
											rounded-full bg-[--accent]
											px-5 py-2.5 text-sm font-semibold text-white
											shadow-sm transition hover:shadow-md hover:brightness-110
											focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent] focus-visible:ring-offset-2
										"
										style={{ ["--accent" as any]: ACCENT }}>
										Explore Companies <span aria-hidden>↗</span>
									</Link>
								</div>

								<p className="pt-1 text-xs text-slate-500">
									Integrated brands. Real impact.
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}

type NavProps = {
	href: string;
	children: React.ReactNode;
	onClick?: () => void;
};

function NavLink({ href, children }: NavProps) {
	return (
		<Link
			href={href}
			className="
				relative text-sm font-medium text-slate-700 transition
				hover:text-slate-900
				after:absolute after:left-0 after:-bottom-1
				after:h-0.5 after:w-0 after:bg-emerald-500
				after:transition-[width] after:duration-200
				hover:after:w-full
				focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30
			">
			{children}
		</Link>
	);
}

function MobileLink({ href, children, onClick }: NavProps) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className="
				rounded-xl border border-slate-200/80 bg-white
				px-4 py-3 text-sm font-semibold text-slate-900
				shadow-sm transition
				hover:border-slate-300 hover:bg-slate-50
				focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30
			">
			{children}
		</Link>
	);
}
