import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Navigation retiré car les flèches seront masquées
import "swiper/css";

export default function Footer() {
  const logos = [
    "/imgAtelier/baladialogo.jpeg",
    "/imgAtelier/ofpptlogo.jpeg",
    "/imgAtelier/baladialogo.jpeg", // Remplacez par vos vrais chemins d'images
    "/imgAtelier/ofpptlogo.jpeg",
    "/imgAtelier/baladialogo.jpeg",
    "/imgAtelier/ofpptlogo.jpeg",
    "/imgAtelier/baladialogo.jpeg",
    "/imgAtelier/ofpptlogo.jpeg",
  ];

  return (
    <>
      {/* Section des Logos */}
      <div className="bg-[#FDF8F5] py-4">
        <div className="container mx-auto px-4">
          <Swiper
            spaceBetween={30}
            slidesPerView={5} // Affiche 5 logos par vue
            loop={true} // Répétition infinie
            autoplay={{
              delay: 3000, // Durée entre les défilements (3 secondes)
              disableOnInteraction: false, // Continue après interaction
            }}
            modules={[Autoplay]}
            className="flex justify-center items-center"
          >
            {logos.map((logo, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center hover:animate-none"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-20 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#8B4513] py-6 text-[#FDF8F5]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Colonne gauche */}
          <div className="text-left">
            <h2 className="text-lg font-semibold">Complexe Culturel OUARZAZATE</h2>
            <p>Hay Elwahda Ouarzazate, Maroc</p>
            <p>Téléphone : (+212) 528-888-888</p>
            <p>Email : complexe.culturel@ouarzazate.ma</p>
          </div>

          {/* Colonne droite */}
          <div className="text-center md:text-right mt-6 md:mt-0">
            <p className="mb-3 text-lg font-semibold">Suivez-nous</p>
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="#" className="text-[#FDF8F5] hover:text-[#FF0000] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-[#FDF8F5] hover:text-[#1DA1F2] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-[#FDF8F5] hover:text-[#E1306C] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-[#FDF8F5] hover:text-[#FF0000] transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}
