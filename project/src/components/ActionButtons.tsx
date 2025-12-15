// import { Phone, MessageCircle } from 'lucide-react';

// export default function ActionButtons() {
//   const handleBookCall = () => {
//     alert('Booking call feature - Connect your phone system here!');
//   };

//   const handleWhatsApp = () => {
//     window.open('https://wa.me/919515040101', '_blank');
//   };

//   return (
//     <div className="flex flex-col sm:flex-row gap-4 justify-center my-12">
//       <button
//         onClick={handleBookCall}
//         className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
//       >
//         <Phone className="w-6 h-6" />
//         Book a Call
//       </button>
//       <button
//         onClick={handleWhatsApp}
//         className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
//       >
//         <MessageCircle className="w-6 h-6" />
//         Connect on WhatsApp
//       </button>
//     </div>
//   );
// }








import { Phone, MessageCircle } from "lucide-react";

export default function ActionButtons() {

  // 📞 Book a Call
  const handleBookCall = () => {
    window.location.href = "tel:+919515040101";
  };

  // 💬 WhatsApp chat
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919515040101?text=Hi, I would like to book a service.",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center my-12">

      {/* 📞 BOOK A CALL */}
      <button
        type="button"
        onClick={handleBookCall}
        className="flex items-center justify-center gap-3 
                   bg-gradient-to-r from-blue-600 to-blue-700 
                   text-white px-8 py-4 rounded-full 
                   font-semibold text-lg shadow-lg 
                   hover:shadow-xl transform hover:scale-105 transition-all"
      >
        <Phone className="w-6 h-6" />
        Book a Call
      </button>

      {/* 💬 WHATSAPP */}
      <button
        type="button"
        onClick={handleWhatsApp}
        className="flex items-center justify-center gap-3 
                   bg-gradient-to-r from-green-500 to-green-600 
                   text-white px-8 py-4 rounded-full 
                   font-semibold text-lg shadow-lg 
                   hover:shadow-xl transform hover:scale-105 transition-all"
      >
        <MessageCircle className="w-6 h-6" />
        Connect on WhatsApp
      </button>

    </div>
  );
}
