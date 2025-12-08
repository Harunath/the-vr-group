import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer
			className="
    relative border-t border-slate-200/70 bg-white
    [background-image:'radial-gradient(circle_at_top_left,#ecfdf3_0,transparent_55%),radial-gradient(circle_at_bottom_right,#e0f2fe_0,transparent_65%)']
">
			<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
				{/* TOP AREA */}
				<div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
					{/* LOGO + NAME */}
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
					{/* NAV LINKS */}
					<nav className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-600 sm:gap-8">
						<FooterLink href="/#about">About</FooterLink>
						<FooterLink href="/#companies">Our Companies</FooterLink>
						<FooterLink href="/#partner">Partner With Us</FooterLink>
						<FooterLink href="/careers">Careers</FooterLink>
						<FooterLink href="/contact">Contact</FooterLink>
					</nav>
				</div>

				{/* DIVIDER */}
				<div className="mt-8 h-px w-full bg-slate-200/70" />

				{/* BOTTOM AREA */}
				<div className="mt-6 flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 sm:flex-row">
					{/* COPYRIGHT */}
					<p>© {new Date().getFullYear()} The VR Group. All rights reserved.</p>
					<p>
						<a
							href="https://www.vrtechforz.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#447f80] font-semibold hover:underline">
							Developed by VR Tech Forz
						</a>
					</p>

					{/* TAGLINE + CREDIT */}
					<p className="text-[0.85rem] font-medium text-slate-600 flex items-center gap-1">
						Built in India. Built for India.{" "}
					</p>
				</div>
			</div>
		</footer>
	);
}

function FooterLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className="
				hover:text-emerald-700 hover:underline hover:underline-offset-4
				transition
			">
			{children}
		</Link>
	);
}
