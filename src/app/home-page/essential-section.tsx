import Image from "next/image";
import EssentialsImage1 from '@/app/assets/essential1.png';
import EssentialsImage2 from '@/app/assets/essential2.png';
import EssentialsImage3 from '@/app/assets/essential3.png';
import Link from "next/link";

export default function Essential() {
    return (
        <div className="flex flex-col">
            {/* Category Title */}
            <div className="items-center">
                <p className="md:text-[15px] sm:text-[13px] text-[11px] font-medium md:px-[48px] sm:px-[40px] px-[19%] pb-2">
                    The Essential
                </p>
            </div>

            {/* Images Section */}
            <div className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 md:px-[48px] sm:px-[40px] px-[17%] gap-5 py-5">
                {/* First Image */}
                <div className="md:w-[400px] md:h-[500] sm:w-[350px] sm:h-[450px] w-[250px] h-250px]">
                    <Image src={EssentialsImage1} alt="EssentialsImage1" />
                </div>
                {/* Second Image */}
                <div className="md:w-[400px] md:h-[500] sm:w-[350px] sm:h-[450px] w-[250px] h-250px]">
                    <Image src={EssentialsImage2} alt="EssentialsImage2" />
                </div>
                {/* Third Image */}
                <div className="md:w-[400px] md:h-[500] sm:w-[350px] sm:h-[450px] w-[250px] h-250px]">
                    <Image src={EssentialsImage3} alt="EssentialsImage3" />
                </div>
            </div>

            {/* Links Section */}
            <div className="md:py-[84px] md:px-[280px] sm:py-[70px] sm:px[250px] py-[30px] px-[70px] md:space-y-1 sm:space-y-1 space-y-5 flex md:flex-row sm:flex-row flex-col justify-evenly">
                {/* Icon Links */}
                <div>
                    <h1 className="md:text-[15px] sm:text-[12px] text-[11px] font-medium">Icon</h1>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            Air Force 1
                        </p>
                    </Link>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            Huarache
                        </p>
                    </Link>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            Air Max 90
                        </p>
                    </Link>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            Air Max 95
                        </p>
                    </Link>
                </div>

                {/* Shoes Links */}
                <div>
                    <h1 className="md:text-[15px] sm:text-[12px] text-[11px] font-medium">Shoes</h1>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            All Shoes
                        </p>
                    </Link>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            Custom Shoes
                        </p>
                    </Link>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            Jordan Shoes
                        </p>
                    </Link>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            Running Shoes
                        </p>
                    </Link>
                </div>

                {/* Clothing Links */}
                <div>
                    <h1 className="md:text-[15px] sm:text-[12px] text-[11px] font-medium">Clothing</h1>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            All Clothing
                        </p>
                    </Link>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            Modest Clothing
                        </p>
                    </Link>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            Hoodies & Pullovers
                        </p>
                    </Link>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            Shirts & Tops
                        </p>
                    </Link>
                </div>

                {/* Kids Links */}
                <div>
                    <h1 className="md:text-[15px] sm:text-[12px] text-[11px] font-medium">Kids</h1>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            Infant & Toddler Shoes
                        </p>
                    </Link>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            Kids Shoes
                        </p>
                    </Link>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            Kids Jordan Shoes
                        </p>
                    </Link>
                    <Link href={""}>
                        <p className="md:text-[15px] sm:text-[12px] text-[10px] font-medium text-gray-500">
                            Kids Basketball Shoes
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
