import SocialMediaFooter from "./SocialMediaFooter";



const Footer = () => {
  return (
    <>
      <SocialMediaFooter />
      <footer className="max-w-screen-2xl mx-auto border-b-8 border-secondaryBrown px-5 max-[400px]:px-3">
        <div className="flex justify-center gap-24 text-center mt-12 max-[800px]:flex-col max-[800px]:gap-10">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold max-sm:text-xl">layana Client </h3>
            <p className="text-lg max-sm:text-base">Layanan Jual</p>
            <p className="text-lg max-sm:text-base">Asuransi Gratis</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold max-sm:text-xl">Brand Kami</h3>
            <p className="text-lg max-sm:text-base">Perusahaan</p>
            <p className="text-lg max-sm:text-base">Keunggulan</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold max-sm:text-xl">Pakean Mewah</h3>
            <p className="text-lg max-sm:text-base">Special Edition</p>
            <p className="text-lg max-sm:text-base">Koleksi Terbaru</p>
            <p className="text-lg max-sm:text-base">Koleksi Unik</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 my-20">
        
          <h2 className="text-6xl font-light text-center max-sm:text-5xl">PUNA FASHION</h2>
        </div>
      </footer>
    </>
  );
};
export default Footer;
