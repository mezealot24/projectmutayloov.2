import bannerImg from "@/assets/images/HoroscopeBanner.png";
import bgBanner from "@/assets/images/bg-banner.png";
import { Button } from "@/components/ui/button";

const HoroscopeBanner = () => {
	return (
		<section
			className="h-[400px] bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: `url(${bgBanner})` }}
		>
			<div className="container h-full grid grid-rows-12 lg:grid-cols-3">
				<div className="row-span-5 lg:row-span-12 flex items-center py-4 lg:py-0">
					<h2 className="text-3xl font-semibold">
						Horoscope <br /> to choose Jewelry aside
					</h2>
				</div>
				<div className="row-span-2 lg:row-span-12 flex justify-center items-center">
					<Button variant="accent" className="w-3/4">
						Enter
					</Button>
				</div>
				<div className="row-span-5 lg:row-span-12 flex items-center overflow-hidden">
					<img
						src={bannerImg}
						alt=""
						className="object-cover w-full h-full py-4 lg:py-0 drop-shadow-xl"
					/>
				</div>
			</div>
		</section>
	);
};

export default HoroscopeBanner;
