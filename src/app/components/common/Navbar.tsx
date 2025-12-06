"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const ACCENT = "#059669";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<header
		className="
	fixed inset-x-0 top-0 z-50
	border-b border-slate-200/80
	bg-white/95 backdrop-blur-lg
	bg-[radial-gradient(circle_at_top_left,#ecfdf3_0,transparent_55%),radial-gradient(circle_at_top_right,#e0f2fe_0,transparent_55%)]
"
>
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
				{/* LOGO + TAGLINE */}
				<Link href="/" className="flex items-center gap-3">
					<Image
						src="https://res.cloudinary.com/diaoy3wzi/image/upload/v1764315347/vr_rygjjw.png"
						alt="VR Group Logo"
						width={120}
						height={120}
						className="object-contain"
					/>
					<div className="flex flex-col">
						<span className="text-lg font-semibold tracking-wide text-slate-900">
							The VR Group
						</span>
						<span
							className="
								inline-flex items-center
								rounded-full border border-emerald-100 bg-emerald-50/90
								px-2.5 py-0.5
								text-[0.65rem] font-semibold uppercase tracking-[0.18em]
								text-emerald-700
							">
							Group of Companies
						</span>
					</div>
				</Link>

				{/* DESKTOP NAV LINKS */}
				<div className="hidden items-center gap-8 md:flex">
					<NavLink href="/#about">About</NavLink>
					<NavLink href="/#companies">Our Companies</NavLink>
					<NavLink href="/#partner">Partner With Us</NavLink>
					<NavLink href="/contact">Contact</NavLink>
				</div>

				{/* DESKTOP CTA */}
				<div className="hidden md:block">
					<Link
						href="/#companies"
						className="
							inline-flex items-center gap-1.5
							rounded-full bg-(--accent)
							px-5 py-2 text-sm font-semibold text-white
							shadow-sm transition
							hover:shadow-md hover:brightness-110
							focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-2
						"
						style={{ ["--accent" as any]: ACCENT }}>
						<span>Explore Companies</span>
					</Link>
				</div>

				{/* MOBILE TOGGLE */}
				<button
					onClick={() => setOpen(!open)}
					className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-1.5 text-slate-700 hover:border-slate-300 hover:text-slate-900 md:hidden">
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</nav>

			{/* THIN BRAND BAR AT BOTTOM (UNIQUE TOUCH) */}
			<div className="h-0.5 w-full bg-linear-to-r from-emerald-500 via-teal-500 to-sky-500" />

			{/* MOBILE MENU */}
			{open && (
				<div className="border-b border-slate-200/80 bg-white/98 backdrop-blur-sm md:hidden">
					<div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4">
						<MobileLink href="/#about" onClick={() => setOpen(false)}>
							About
						</MobileLink>
						<MobileLink href="/#companies" onClick={() => setOpen(false)}>
							Our Companies
						</MobileLink>
						<MobileLink href="/#partner" onClick={() => setOpen(false)}>
							Partner With Us
						</MobileLink>
						<MobileLink href="/contact" onClick={() => setOpen(false)}>
							Contact
						</MobileLink>

						<Link
							href="/#companies"
							onClick={() => setOpen(false)}
							className="
								mt-2 inline-flex items-center justify-center
								rounded-full bg-(--accent)
								px-5 py-2 text-sm font-semibold text-white
								shadow-sm transition hover:shadow-md hover:brightness-110
							"
							style={{ ["--accent" as any]: ACCENT }}>
							Explore Companies
						</Link>
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
			className="text-sm font-medium text-slate-800 transition hover:text-emerald-600">
			{children}
		</Link>
	);
}
