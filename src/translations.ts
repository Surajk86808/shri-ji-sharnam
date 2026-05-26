export type Language = 'en' | 'hi';

export interface TranslationDict {
  navbar: {
    experience: string;
    residences: string;
    vrindavan: string;
    journal: string;
    contact: string;
    book: string;
  };
  hero: {
    sanctuary: string;
    reviews: string;
    title: string;
    subtitle: string;
    description: string;
    book: string;
    directBooking: string;
    gallery: string;
    scroll: string;
  };
  experience: {
    retreat: string;
    title: string;
    description1: string;
    description2: string;
    location: string;
    stay: string;
    book: string;
    directBook: string;
    directBookingNote: string;
    features: {
      view: { title: string; desc: string };
      comfort: { title: string; desc: string };
      aura: { title: string; desc: string };
    };
  };
  amenities: {
    tag: string;
    title: string;
    items: {
      kitchen: { title: string; desc: string };
      wifi: { title: string; desc: string };
      parking: { title: string; desc: string };
      tv: { title: string; desc: string };
      workspace: { title: string; desc: string };
      checkin: { title: string; desc: string };
    };
  };
  directBenefits: {
    tag: string;
    title: string;
    subtitle: string;
    items: {
      fees: { title: string; desc: string };
      contact: { title: string; desc: string };
      price: { title: string; desc: string };
      secure: { title: string; desc: string };
    };
    cta: string;
  };
  gallery: {
    tag: string;
    title: string;
  };
  footer: {
    desc: string;
    explore: string;
    sanctuary: string;
    host: string;
    rights: string;
  };
  widget: {
    reviews: string;
    book: string;
    inquiry: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    navbar: {
      experience: "Experience",
      residences: "Residences",
      vrindavan: "Vrindavan",
      journal: "Journal",
      contact: "Contact",
      book: "Book",
    },
    hero: {
      sanctuary: "A Sanctuary for the Soul",
      reviews: "14 Guest Reviews",
      title: "Experience Divine Serenity",
      subtitle: "Divine Serenity",
      description: "Your luxury 1BHK sanctuary in Omaxe Eternity, Vrindavan. Just moments away from Prem Mandir and ISKCON.",
      book: "Book Your Stay",
      directBooking: "Book Direct (Save Fees)",
      gallery: "View Gallery",
      scroll: "Scroll",
    },
    experience: {
      retreat: "The Retreat",
      title: "Your Home in Omaxe Eternity",
      description1: "Experience the perfect blend of spiritual proximity and modern luxury in our fully furnished 1BHK apartment. Designed to comfortably host up to 4 guests, it's your ideal sanctuary in the holy town of Vrindavan.",
      description2: "Featuring a serene bedroom with a king-size bed and a spacious living room equipped with two single beds and a cozy sofa.",
      location: "Prime Location",
      stay: "Seamless Stay",
      book: "Book Your Stay",
      directBook: "Connect via WhatsApp to book directly with the host.",
      directBookingNote: "Skip third-party platform fees (Airbnb/Booking.com) by booking directly. Guaranteed best rates.",
      features: {
        view: { title: "Divine View", desc: "Temple Facing Balcony" },
        comfort: { title: "Pure Comfort", desc: "Premium Linens & Bedding" },
        aura: { title: "Sacred Aura", desc: "Quiet & Spiritual Environment" },
      },
    },
    amenities: {
      tag: "Amenities",
      title: "Unrivaled Comforts",
      items: {
        kitchen: { title: "Fully Equipped Kitchen", desc: "Prepare your own sattvic meals with all necessary appliances." },
        wifi: { title: "High-Speed WiFi", desc: "Stay connected throughout the apartment." },
        parking: { title: "Free Parking", desc: "Stress-free arrival with dedicated parking." },
        tv: { title: "HDTV with Streaming", desc: "Enjoy Netflix, Prime Video, and Disney+." },
        workspace: { title: "Dedicated Workspace", desc: "A quiet spot designed for focus." },
        checkin: { title: "Self Check-in", desc: "Flexible arrival with a secure lockbox." },
      },
    },
    directBenefits: {
      tag: "Direct Booking",
      title: "Book Direct & Save",
      subtitle: "Skip the middlemen and their extra fees. Experience a more personal and affordable way to book your stay.",
      items: {
        fees: { title: "No Service Fees", desc: "Escape the 15-20% commission charged by third-party booking sites." },
        contact: { title: "Direct Connection", desc: "Communicate directly with the owner for a personalized experience." },
        price: { title: "Best Rate Policy", desc: "Get the most competitive rates by paying the host directly." },
        secure: { title: "Instant Access", desc: "Fast confirmation and direct coordination for your arrival." },
      },
      cta: "Book Direct via WhatsApp",
    },
    gallery: {
      tag: "Visual Journey",
      title: "A Glimpse Into Serenity",
    },
    footer: {
      desc: "A 1BHK luxury spiritual retreat in Omaxe Eternity, Vrindavan. Experience the divine essence of the holy town in unparalleled comfort.",
      explore: "Explore",
      sanctuary: "Sanctuary",
      host: "Hosted by Rishabh",
      rights: "All Rights Reserved.",
    },
    widget: {
      reviews: "14 Reviews",
      book: "Book Now",
      inquiry: "Direct Inquiry",
    },
  },
  hi: {
    navbar: {
      experience: "अनुभव",
      residences: "निवास",
      vrindavan: "वृंदावन",
      journal: "पत्रिका",
      contact: "संपर्क",
      book: "बुकिंग",
    },
    hero: {
      sanctuary: "आत्मा का पावन धाम",
      reviews: "१४ अतिथि समीक्षाएँ",
      title: "दिव्य शांति का अनुभव करें",
      subtitle: "दिव्य शांति",
      description: "ओमेक्स एटर्निटी, वृंदावन में आपका लग्जरी १ बीएचके धाम। प्रेम मंदिर और इस्कॉन के बिल्कुल समीप।",
      book: "अभी पधारें",
      directBooking: "सीधी बुकिंग (शुल्क बचाएं)",
      gallery: "झलक देखें",
      scroll: "नीचे चलें",
    },
    experience: {
      retreat: "पावन विश्राम",
      title: "ओमेक्स एटर्निटी में आपका घर",
      description1: "वृंदावन की पावन धरा पर आधुनिक सुख-सुविधाओं और आध्यात्मिकता के अनूठे संगम का अनुभव करें। ४ अतिथियों के लिए विशेष रूप से तैयार हमारा १ बीएचके अपार्टमेंट आपकी वृंदावन यात्रा को सुखद बनाएगा।",
      description2: "किंग-साइज बेड वाला शांत बेडरूम और दो सिंगल बेड व सोफे वाला विशाल लिविंग रूम आपकी सेवा में हाजिर है।",
      location: "खास जगह",
      stay: "सहज सुगम वास",
      book: "अभी बुक करें",
      directBook: "मेजबान के साथ सीधे बुक करने के लिए व्हाट्सएप पर जुड़ें।",
      directBookingNote: "सीधे बुकिंग करके तीसरे पक्ष के प्लेटफॉर्म शुल्क (Airbnb/Booking.com) से बचें। सर्वोत्तम दरों की गारंटी।",
      features: {
        view: { title: "दिव्य दर्शन", desc: "मंदिर की ओर खुलती बालकनी" },
        comfort: { title: "पूर्ण सुख", desc: "प्रीमियम बिस्तर और कोमलता" },
        aura: { title: "आध्यात्मिक ऊर्जा", desc: "शांत और भक्तिमय वातावरण" },
      },
    },
    amenities: {
      tag: "सुविधाएं",
      title: "अतुलनीय सुख-सुविधा",
      items: {
        kitchen: { title: "पूर्ण सुसज्जित रसोई", desc: "अपना सात्विक भोजन स्वयं तैयार करें।" },
        wifi: { title: "हाई-स्पीड वाईफाई", desc: "पूरे अपार्टमेंट में इंटरनेट सुविधा।" },
        parking: { title: "मुफ्त पार्किंग", desc: "गाड़ी खड़ी करने की चिंता मुक्त व्यवस्था।" },
        tv: { title: "एचडीटीवी", desc: "नेटफ्लिक्स और प्राइम वीडियो का आनंद लें।" },
        workspace: { title: "कार्य स्थल", desc: "एकांत में काम करने के लिए विशेष स्थान।" },
        checkin: { title: "सेल्फ चेक-इन", desc: "लॉकबॉक्स के साथ कभी भी आने की सुविधा।" },
      },
    },
    directBenefits: {
      tag: "सीधी बुकिंग",
      title: "सीधे बुक करें और बचत करें",
      subtitle: "बिचौलियों और उनके अतिरिक्त शुल्कों से बचें। बुकिंग का एक अधिक व्यक्तिगत और किफायती तरीका अपनाएं।",
      items: {
        fees: { title: "कोई सर्विस शुल्क नहीं", desc: "बुकिंग साइटों द्वारा लिए जाने वाले १५-२०% कमीशन से बचें।" },
        contact: { title: "सीधा संपर्क", desc: "व्यक्तिगत अनुभव के लिए सीधे मालिक से संपर्क करें।" },
        price: { title: "सर्वोत्तम दर", desc: "मालिक को सीधे भुगतान करके सबसे कम दरें प्राप्त करें।" },
        secure: { title: "त्वरित पहुँच", desc: "आपके आगमन के लिए तेज़ पुष्टि और सीधा समन्वय।" },
      },
      cta: "व्हाट्सएप के माध्यम से सीधे बुक करें",
    },
    gallery: {
      tag: "विजुअल यात्रा",
      title: "शांति की एक झलक",
    },
    footer: {
      desc: "ओमेक्स एटर्निटी, वृंदावन में एक लग्जरी आध्यात्मिक विश्राम स्थल। दिव्य नगरी के सार को पूर्ण आराम के साथ महसूस करें।",
      explore: "खोजें",
      sanctuary: "पावन धाम",
      host: "मेजबान: ऋषभ",
      rights: "सर्वाधिकार सुरक्षित।",
    },
    widget: {
      reviews: "१४ समीक्षाएँ",
      book: "अभी बुक करें",
      inquiry: "सीधी बात",
    },
  },
};
