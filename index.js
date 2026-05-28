/* ==========================================================================
   Genuine Aqua RO Tech - Client Logic Layer
   Dynamic Catalog, Filtering, Search, Modals, and Lead Capturing
   ========================================================================== */

// --- CONFIGURATION ---
// Paste your deployed Google Apps Script Web App URL here after deploying code.gs
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw3chxcx2OiZTK2_CM42jHP5nUcmAN3zU7YDBKs0QDioUo04N12v9EFOcES6C0XiFTl/exec"; 

// --- BILINGUAL TRANSLATIONS DICTIONARY ---
const TRANSLATIONS = {
    "en": {
        "brand-tagline": "PURE WATER • BETTER LIFE",
        "nav-home": "Home",
        "nav-services": "Services",
        "nav-products": "Products",
        "nav-why-us": "Why Choose Us",
        "nav-contact": "Contact",
        "btn-book-service": "Book Service",
        "hero-promo": "<i class=\"fa-solid fa-droplet\"></i> Leading RO Tech in Tamil Nadu",
        "hero-title": "Purest Water for a Healthier & Better Life",
        "hero-desc": "Genuine Aqua RO Tech provides premium water purification systems, express installation, emergency repairs, and flexible AMC services for homes and businesses in Kilasevalpatti.",
        "hero-stat-1": "Happy Clients",
        "hero-stat-2": "Years Excellence",
        "hero-stat-3": "Genuine Parts",
        "hero-btn-1": "Explore Purifiers",
        "hero-btn-2": "Our Services",
        "hero-tds-title": "Optimal TDS Level",
        "hero-tds-status": "<span class=\"dot-active\"></span> Healthy Minerals Retained",
        "services-title": "Our Premium Services",
        "services-desc": "From prompt domestic repairs to heavy-duty commercial system designs, we keep your purification running perfectly.",
        "service-1-title": "RO Installation",
        "service-1-desc": "Express setup and precision plumbing connection for all kinds of domestic and commercial water purifiers.",
        "service-1-btn": "Book Installation",
        "service-2-title": "RO Repair & Service",
        "service-2-desc": "Fast diagnosis and resolution of booster pump issues, auto-cut defects, electronic failure, or water leaks.",
        "service-2-btn": "Request Repair",
        "service-3-title": "Annual AMC Contracts",
        "service-3-desc": "Worry-free maintenance packages ensuring periodic checkups, filters cleaning, and prompt breakdown coverage.",
        "service-3-btn": "Inquire AMC",
        "service-4-title": "Filter & Membrane Change",
        "service-4-desc": "Replacement of pre-filters, carbon blocks, sediment filters, and RO membranes with genuine spares.",
        "service-4-btn": "Change Filters",
        "service-5-title": "Commercial RO Plants",
        "service-5-desc": "Installation and management of high-capacity plants (25 LPH, 50 LPH, 100+ LPH) for offices, schools, and units.",
        "service-5-btn": "Consult Experts",
        "service-6-title": "Water Softeners & Testing",
        "service-6-desc": "Expert hard-water softening solutions and comprehensive laboratory-grade water TDS / pH testing.",
        "service-6-btn": "Request Service",
        "products-title": "Explore Our Purifiers",
        "products-desc": "Select from our extensive collection of 24 state-of-the-art RO + UV + Alkaline purifiers to secure healthy water for your family.",
        "search-placeholder": "Search by name, capacity, or feature...",
        "filter-all": "All Models",
        "filter-domestic": "Domestic RO",
        "filter-commercial": "Commercial",
        "no-results": "No products match your search/filter criteria. Try checking your spelling or selecting another category.",
        "why-us-badge": "<i class=\"fa-solid fa-star\"></i> Our Committment",
        "why-us-title": "Why Genuine Aqua RO Tech is the Trusted Choice",
        "why-us-desc": "We pride ourselves on offering unmatched sales, setup, and support services. Our quality and customer-first approach set us apart.",
        "usp-1-title": "Same-Day Quick Service",
        "usp-1-desc": "Report an issue and get a technician at your doorstep in Kilasevalpatti within 4 to 6 hours.",
        "usp-2-title": "100% Genuine Spares Only",
        "usp-2-desc": "We only use high-grade filters, heavy-duty pumps, and FDA-approved food-grade accessories.",
        "usp-3-title": "1-Year Service Warranty",
        "usp-3-desc": "All repairs and filter replacements come with an industry-leading service assurance warranty.",
        "why-us-card-title": "Warranty Shield",
        "why-us-card-desc": "Enjoy absolute peace of mind. Every product sold or AMC contract registered with Genuine Aqua RO Tech comes with certified warranty support.",
        "why-us-card-footer": "Genuine Quality Guarantee",
        "contact-title": "Get in Touch",
        "contact-desc": "Have questions about a product or need an urgent technician visit? Drop us a message, email us, or call our team directly.",
        "contact-address-title": "Office Address",
        "contact-phone-title": "Phone Numbers",
        "contact-email-title": "Email Address",
        "contact-hours-title": "Operating Hours",
        "contact-hours-desc": "9:00 AM - 6:00 PM (Daily)",
        "contact-wa-btn": "Chat on WhatsApp",
        "form-title": "Book a Service / Inquire",
        "form-desc": "Fill out the form below, and we will get back to you within 2 hours to confirm your schedule.",
        "form-label-name": "Full Name",
        "form-placeholder-name": "Enter your full name",
        "form-error-name": "Please enter your name",
        "form-label-phone": "Phone Number",
        "form-placeholder-phone": "10-digit mobile number",
        "form-error-phone": "Please enter a valid 10-digit number",
        "form-label-email": "Email Address",
        "form-placeholder-email": "example@gmail.com",
        "form-error-email": "Please enter a valid email",
        "form-label-service": "Service or Product Interest",
        "form-option-select": "Choose service type...",
        "form-option-1": "New RO Installation",
        "form-option-2": "RO Repair / Troubleshooting",
        "form-option-3": "Annual Maintenance (AMC)",
        "form-option-4": "Filter / Membrane Replacement",
        "form-option-5": "Commercial RO Plant Consultation",
        "form-option-6": "Product Inquiry (Catalog model)",
        "form-option-7": "Other Water Solutions",
        "form-error-service": "Please select an option",
        "form-label-message": "Details / Message",
        "form-placeholder-message": "Mention product model or describe repair issue...",
        "form-error-message": "Please enter details",
        "form-btn": "Submit Request",
        "modal-specs-title": "Key Specifications & Features",
        "modal-inquire-btn": "Inquire About This Purifier",
        "success-title": "Inquiry Submitted Successfully!",
        "success-desc": "Thank you for choosing Genuine Aqua RO Tech. We have stored your contact details and service requirements securely.",
        "success-checklist-title": "What happens next?",
        "success-item-1-bold": "Call Confirmation",
        "success-item-1-text": ": Our agent will dial you back within 2 hours.",
        "success-item-2-bold": "WhatsApp Notification",
        "success-item-2-text": ": We'll send booking references to your phone.",
        "success-item-3-bold": "Technician Dispatch",
        "success-item-3-text": ": Service visit will be scheduled same-day.",
        "success-btn-close": "Close",
        "footer-about": "Authorized sales and service dealership for domestic, corporate, and commercial water filtration systems in Karaikudi and Kilasevalpatti territory.",
        "footer-nav-title": "Quick Navigation",
        "footer-nav-home": "Home",
        "footer-nav-services": "Our Services",
        "footer-nav-products": "Product Catalog",
        "footer-nav-why-us": "Why Choose Us",
        "footer-nav-contact": "Contact Us",
        "footer-territory-title": "Service Territory",
        "footer-t1": "Kilasevalpatti",
        "footer-t2": "Kaveripatti",
        "footer-t3": "Vilaku Road",
        "footer-t4": "Nearby Karaikudi villages",
        "footer-copy": "&copy; 2026 Genuine Aqua RO Tech. All rights reserved. | Built with modern UI specifications."
    },
    "ta": {
        "brand-tagline": "தூய நீர் • சிறந்த வாழ்க்கை",
        "nav-home": "முகப்பு",
        "nav-services": "சேவைகள்",
        "nav-products": "தயாரிப்புகள்",
        "nav-why-us": "ஏன் எங்களை தேர்ந்தெடுக்க வேண்டும்",
        "nav-contact": "தொடர்பு",
        "btn-book-service": "சேவை முன்பதிவு",
        "hero-promo": "<i class=\"fa-solid fa-droplet\"></i> தமிழ்நாட்டின் முன்னணி ஆர்.ஓ டெக்",
        "hero-title": "ஆரோக்கியமான மற்றும் சிறந்த வாழ்க்கைக்கு தூய்மையான நீர்",
        "hero-desc": "ஜெனுயின அக்வா ஆர்.ஓ டெக் கிளாசெவல்பட்டியில் உள்ள வீடுகள் மற்றும் வணிகங்களுக்கு பிரீமியம் நீர் சுத்திகரிப்பு அமைப்புகள், விரைவான நிறுவல், அவசர பழுதுபார்ப்பு மற்றும் நெகிழ்வான ஏ.எம்.சி சேவைகளை வழங்குகிறது.",
        "hero-stat-1": "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
        "hero-stat-2": "ஆண்டுகள் சிறப்பான சேவை",
        "hero-stat-3": "உண்மையான பாகங்கள்",
        "hero-btn-1": "சுத்திகரிப்பான்களை ஆராய்க",
        "hero-btn-2": "எங்கள் சேவைகள்",
        "hero-tds-title": "சிறந்த டி.டி.எஸ் அளவு",
        "hero-tds-status": "<span class=\"dot-active\"></span> ஆரோக்கியமான தாதுக்கள் தக்கவைக்கப்பட்டுள்ளன",
        "services-title": "எங்கள் பிரீமியம் சேவைகள்",
        "services-desc": "உடனடி வீட்டு பழுதுபார்ப்பு முதல் வணிக அமைப்புகள் வரை, உங்கள் சுத்திகரிப்பு முறையை நாங்கள் கச்சிதமாக இயக்குகிறோம்.",
        "service-1-title": "ஆர்.ஓ நிறுவல்",
        "service-1-desc": "அனைத்து வகையான வீட்டு மற்றும் வணிக நீர் சுத்திகரிப்பான்களுக்கான விரைவான அமைப்பு மற்றும் துல்லியமான பிளம்பிங் இணைப்பு.",
        "service-1-btn": "நிறுவல் முன்பதிவு",
        "service-2-title": "ஆர்.ஓ பழுதுபார்ப்பு மற்றும் சேவை",
        "service-2-desc": "பூஸ்டர் பம்ப் சிக்கல்கள், ஆட்டோ-கட் குறைபாடுகள், எலக்ட்ரானிக் செயலிழப்பு அல்லது நீர் கசிவு ஆகியவற்றை விரைவாகக் கண்டறிந்து சரிசெய்தல்.",
        "service-2-btn": "பழுதுபார்ப்பு கோரிக்கை",
        "service-3-title": "வருடாந்திர ஏ.எம்.சி ஒப்பந்தங்கள்",
        "service-3-desc": "குறிப்பிட்ட கால சோதனைகள், வடிகட்டி சுத்தம் மற்றும் உடனடி பழுதுபார்ப்பை உறுதி செய்யும் கவலை இல்லாத பராமரிப்பு தொகுப்புகள்.",
        "service-3-btn": "ஏ.எம்.சி விசாரணை",
        "service-4-title": "வடிகட்டி & மெம்பிரேன் மாற்றம்",
        "service-4-desc": "முன்-வடிகட்டிகள், கார்பன் பிளாக்ஸ், செடிமென்ட் ஃபில்டர்கள் மற்றும் ஆர்.ஓ மெம்பரேன்களை உண்மையான பாகங்களுடன் மாற்றுதல்.",
        "service-4-btn": "பாகங்கள் மாற்றம்",
        "service-5-title": "வணிக ஆர்.ஓ ஆலைகள்",
        "service-5-desc": "அலுவலகங்கள், பள்ளிகள் மற்றும் வணிக நிறுவனங்களுக்கு அதிக திறன் கொண்ட ஆலைகளை (25 LPH, 50 LPH, 100+ LPH) நிறுவுதல் மற்றும் நிர்வகித்தல்.",
        "service-5-btn": "ஆலோசனை பெற",
        "service-6-title": "நீர் மென்மையாக்குதல் மற்றும் பரிசோதனை",
        "service-6-desc": "கடின நீர் மென்மையாக்கும் தீர்வுகள் மற்றும் விரிவான ஆய்வக அளவிலான நீர் டி.டி.எஸ் / பி.எச் பரிசோதனை.",
        "service-6-btn": "சேவை கோரிக்கை",
        "products-title": "எங்கள் சுத்திகரிப்பான்களை ஆராயுங்கள்",
        "products-desc": "உங்கள் குடும்பத்திற்கு ஆரோக்கியமான நீரை உறுதி செய்ய 24 நவீன ஆர்.ஓ + யூ.வி + ஆல்கலைன் சுத்திகரிப்பான்களில் இருந்து தேர்ந்தெடுக்கவும்.",
        "search-placeholder": "பெயர், கொள்ளளவு அல்லது அம்சங்கள் மூலம் தேடுங்கள்...",
        "filter-all": "அனைத்து மாடல்கள்",
        "filter-domestic": "வீட்டு உபயோக ஆர்.ஓ",
        "filter-commercial": "வணிக பயன்பாடு",
        "no-results": "உங்கள் தேடல் / வடிகட்டி அளவுகோல்களுடன் எந்த தயாரிப்புகளும் பொருந்தவில்லை. எழுத்துப்பிழையை சரிபார்க்கவும் அல்லது வேறு வகையைத் தேர்ந்தெடுக்கவும்.",
        "why-us-badge": "<i class=\"fa-solid fa-star\"></i> எங்கள் அர்ப்பணிப்பு",
        "why-us-title": "ஏன் ஜெனுயின அக்வா ஆர்.ஓ டெக் நம்பகமான தேர்வாக இருக்கிறது",
        "why-us-desc": "ஒப்பிடமுடியாத விற்பனை, நிறுவல் மற்றும் ஆதரவு சேவைகளை வழங்குவதில் நாங்கள் பெருமிடம் கொள்கிறோம். எங்கள் தரம் மற்றும் வாடிக்கையாளர் முன்னுரிமை அணுகுமுறை எங்களை தனித்து காட்டுகிறது.",
        "usp-1-title": "ஒரே நாளில் விரைவான சேவை",
        "usp-1-desc": "ஏதேனும் சிக்கல் இருந்தால் தெரிவிக்கவும், 4 முதல் 6 மணி நேரத்திற்குள் கிளாசெவல்பட்டியில் உங்கள் வீட்டு வாசலில் ஒரு தொழில்நுட்ப வல்லுநரைப் பெறுங்கள்.",
        "usp-2-title": "100% உண்மையான உதிரி பாகங்கள் மட்டுமே",
        "usp-2-desc": "நாங்கள் உயர்தர வடிகட்டிகள், ஹெவி-டியூட்டி பம்புகள் மற்றும் FDA-அங்கீகரிக்கப்பட்ட உணவு-தர பாகங்களை மட்டுமே பயன்படுத்துகிறோம்.",
        "usp-3-title": "1-ஆண்டு சேவை உத்தரவாதம்",
        "usp-3-desc": "அனைத்து பழுதுபார்ப்புகளும் வடிகட்டி மாற்றங்களும் தொழில்துறையில் சிறந்த சேவை உத்தரவாதத்துடன் வருகின்றன.",
        "why-us-card-title": "உத்தரவாதக் கவசம்",
        "why-us-card-desc": "முழுமையான மன அமைதியை அனுபவிக்கவும். ஜெனுயின அக்வாவில் விற்கப்படும் ஒவ்வொரு தயாரிப்புக்கும் அல்லது பதிவு செய்யப்பட்ட ஏ.எம்.சி ஒப்பந்தத்திற்கும் சான்றளிக்கப்பட்ட உத்தரவாத ஆதரவு உள்ளது.",
        "why-us-card-footer": "உண்மையான தர உத்தரவாதம்",
        "contact-title": "தொடர்பு கொள்ள",
        "contact-desc": "தயாரிப்பு பற்றி கேள்விகள் உள்ளதா அல்லது அவசர தொழில்நுட்ப வல்லுநர் வர வேண்டுமா? எங்களுக்கு செய்தி அனுப்பவும், மின்னஞ்சல் செய்யவும் அல்லது எங்கள் குழுவை நேரடியாக அழைக்கவும்.",
        "contact-address-title": "அலுவலக முகவரி",
        "contact-phone-title": "தொலைபேசி எண்கள்",
        "contact-email-title": "மின்னஞ்சல் முகவரி",
        "contact-hours-title": "இயங்கும் நேரம்",
        "contact-hours-desc": "காலை 9:00 - மாலை 6:00 (தினமும்)",
        "contact-wa-btn": "வாட்ஸ்அப்பில் அரட்டையடிக்க",
        "form-title": "சேவை முன்பதிவு / விசாரணை",
        "form-desc": "கீழே உள்ள படிவத்தை நிரப்பவும், உங்கள் நேரத்தை உறுதிப்படுத்த 2 மணி நேரத்திற்குள் நாங்கள் உங்களைத் தொடர்பு கொள்வோம்.",
        "form-label-name": "முழு பெயர்",
        "form-placeholder-name": "உங்கள் முழு பெயரை உள்ளிடவும்",
        "form-error-name": "உங்கள் பெயரை உள்ளிடவும்",
        "form-label-phone": "தொலைபேசி எண்",
        "form-placeholder-phone": "10-இலக்க மொபைல் எண்",
        "form-error-phone": "செல்லுபடியாகும் 10-இலக்க எண்ணை உள்ளிடவும்",
        "form-label-email": "மின்னஞ்சல் முகவரி",
        "form-placeholder-email": "example@gmail.com",
        "form-error-email": "செல்லுபடியாகும் மின்னஞ்சலை உள்ளிடவும்",
        "form-label-service": "விருப்பமான சேவை அல்லது தயாரிப்பு",
        "form-option-select": "சேவை வகையைத் தேர்ந்தெடுக்கவும்...",
        "form-option-1": "புதிய ஆர்.ஓ நிறுவல்",
        "form-option-2": "ஆர்.ஓ பழுதுபார்ப்பு / சரிசெய்தல்",
        "form-option-3": "வருடாந்திர பராமரிப்பு (ஏ.எம்.சி)",
        "form-option-4": "வடிகட்டி / மெம்பிரேன் மாற்றுதல்",
        "form-option-5": "வணிக ஆர்.ஓ ஆலை ஆலோசனை",
        "form-option-6": "தயாரிப்பு விசாரணை (கேடலாக் மாடல்)",
        "form-option-7": "இதர நீர் தீர்வுகள்",
        "form-error-service": "ஒரு விருப்பத்தைத் தேர்ந்தெடுக்கவும்",
        "form-label-message": "விவரங்கள் / செய்தி",
        "form-placeholder-message": "தயாரிப்பு மாடலைக் குறிப்பிடவும் அல்லது பழுதுபார்க்கும் சிக்கலை விவரிக்கவும்...",
        "form-error-message": "விவரங்களை உள்ளிடவும்",
        "form-btn": "கோரிக்கையை சமர்ப்பிக்கவும்",
        "modal-specs-title": "முக்கிய விவரக்குறிப்புகள் & அம்சங்கள்",
        "modal-inquire-btn": "இந்த சுத்திகரிப்பு இயந்திரத்தை விசாரிக்கவும்",
        "success-title": "விசாரணை வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!",
        "success-desc": "ஜெனுயின அக்வா ஆர்.ஓ டெக்கைத் தேர்ந்தெடுத்ததற்கு நன்றி. உங்கள் தொடர்பு விவரங்களையும் சேவைத் தேவைகளையும் நாங்கள் பாதுகாப்பாகச் சேமித்துள்ளோம்.",
        "success-checklist-title": "அடுத்து என்ன நடக்கும்?",
        "success-item-1-bold": "அழைப்பு உறுதிப்படுத்தல்",
        "success-item-1-text": ": எங்கள் முகவர் 2 மணி நேரத்திற்குள் உங்களை அழைப்பார்.",
        "success-item-2-bold": "வாட்ஸ்அப் அறிவிப்பு",
        "success-item-2-text": ": உங்கள் மொபைலுக்கு முன்பதிவு விவரங்களை அனுப்புவோம்.",
        "success-item-3-bold": "தொழில்நுட்ப வல்லுநர் வருகை",
        "success-item-3-text": ": சேவை வருகை அதே நாளில் திட்டமிடப்படும்.",
        "success-btn-close": "மூடுக",
        "footer-about": "காரைக்குடி மற்றும் கிளாசெவல்பட்டி பகுதியில் வீட்டு உபயோகம், கார்ப்பரேட் மற்றும் வணிக நீர் சுத்திகரிப்பு அமைப்புகளுக்கான அங்கீகரிக்கப்பட்ட விற்பனை மற்றும் சேவை டீலர்ஷிப்.",
        "footer-nav-title": "விரைவான வழிசெலுத்தல்",
        "footer-nav-home": "முகப்பு",
        "footer-nav-services": "எங்கள் சேவைகள்",
        "footer-nav-products": "தயாரிப்பு பட்டியல்",
        "footer-nav-why-us": "ஏன் எங்களை தேர்ந்தெடுக்க வேண்டும்",
        "footer-nav-contact": "எங்களைத் தொடர்பு கொள்ள",
        "footer-territory-title": "சேவை செய்யும் இடங்கள்",
        "footer-t1": "கிளாசெவல்பட்டி",
        "footer-t2": "காவேரிப்பட்டி",
        "footer-t3": "விளக்கு ரோடு",
        "footer-t4": "காரைக்குடி சுற்றுவட்டார கிராமங்கள்",
        "footer-copy": "&copy; 2026 ஜெனுயின அக்வா ஆர்.ஓ டெக். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    }
};

// --- PRODUCT TRANSLATIONS MAP (TAMIL) ---
const PRODUCT_TRANSLATIONS = {
    "ta": {
        "water-pia": {
            name: "வாட்டர் பியா (Water PIA)",
            description: "தூய பரிபூரணத்தின் ஆடம்பரத்தை அனுபவியுங்கள். நவீன நீல நிற அமைச்சரவை வடிவமைப்புடன் கூடிய பிரீமியம் வீட்டு உபயோக ஆர்.ஓ நீர் சுத்திகரிப்பு இயந்திரம்.",
            features: [
                "10 லிட்டர் சேமிப்பு திறன்",
                "அழகான தோற்றத்துடன் கூடிய ஆடம்பர அமைச்சரவை வடிவமைப்பு",
                "பல கட்ட RO + UV + UF வடிகட்டுதல் முறை",
                "முழு தானியங்கி செயல்பாடு (Auto-start/shutoff)"
            ]
        },
        "aqua-grid": {
            name: "அக்வா கிரிட் (AQUA GRID)",
            description: "அழகான மற்றும் எளிமையான அதிக செயல்திறன் கொண்ட நீர் சுத்திகரிப்பு இயந்திரம். சிறிய வடிவமைப்பு மற்றும் சுவரில் எளிதாக பொருத்தக்கூடியது.",
            features: [
                "10 லிட்டர் சேமிப்பு திறன்",
                "எளிமையான மற்றும் கவரக்கூடிய உடல் வடிவமைப்பு",
                "உயர்தர பல கட்ட நீர் சுத்திகரிப்பு",
                "இடத்தை மிச்சப்படுத்தும் சுவரில் பொருத்தக்கூடிய வடிவமைப்பு"
            ]
        },
        "aqua-nine": {
            name: "அக்வா நைன் (AQUA NINE)",
            description: "அழகான கிராபிக்ஸ் வடிவமைப்பு, ஸ்மார்ட் டிஜிட்டல் டிஸ்ப்ளே மற்றும் பிரீமியம் குழாய் கொண்ட நவீன நீர் சுத்திகரிப்பு இயந்திரம்.",
            features: [
                "10 லிட்டர் சேமிப்பு திறன்",
                "ஸ்மார்ட் டிஜிட்டல் டிஸ்ப்ளே இடைமுகம்",
                "அழகான அலங்கார கிராபிக்ஸ் முன் பேனல்",
                "கவர்ச்சிகரமான பிரீமியம் குழாய் வடிவமைப்பு"
            ]
        },
        "glory-flip": {
            name: "குளோரி & ஃபிளிப் (Glory & Flip)",
            description: "எளிதாக கழற்றி சுத்தம் செய்யக்கூடிய சேமிப்பு தொட்டி, சுவரில் பொருத்தக்கூடிய வசதி மற்றும் 7-கட்ட வடிகட்டுதல் கொண்ட பிரீமியம் அக்வா குளோரி தொடர்.",
            features: [
                "13 லிட்டர் சேமிப்பு திறன்",
                "எளிதாக சுத்தம் செய்ய கழற்றக்கூடிய தொட்டி",
                "மேம்பட்ட 7-கட்ட வடிகட்டுதல் முறை",
                "நவீன சுவரில் பொருத்தக்கூடிய வடிவமைப்பு"
            ]
        },
        "aqua-9090": {
            name: "அக்வா 9090 (AQUA 9090)",
            description: "ஸ்மார்ட் எல்.இ.டி குறிகாட்டிகள், உறுதியான உணவு-தர அமைச்சரவை மற்றும் மறைக்கப்பட்ட திருகு அமைப்பு கொண்ட ஸ்மார்ட் நீர் சுத்திகரிப்பு இயந்திரம்.",
            features: [
                "13 லிட்டர் சேமிப்பு திறன்",
                "தொட்டி நிலையை காட்டும் ஸ்மார்ட் எல்.இ.டி குறிகாட்டிகள்",
                "உறுதியான உணவு-தர பிளாஸ்டிக் அமைச்சரவை",
                "மறைக்கப்பட்ட திருகு வடிவமைப்பு"
            ]
        },
        "lx-two": {
            name: "எல்.எக்ஸ் டூ (LX TWO)",
            description: "நவீன சமையலறைகளுக்கு ஏற்றவாறு பல வகையான கவர்ச்சிகரமான மெட்டாலிக் மற்றும் பேஸ்டல் வண்ணங்களில் கிடைக்கும் அல்ட்ரா-மாடர்ன் செவ்வக வடிவமைப்பாளர் சுத்திகரிப்பான்.",
            features: [
                "5 லிட்டர் சேமிப்பு திறன்",
                "வருங்கால செவ்வக வடிவமைப்பாளர் அமைச்சரவை",
                "பிரீமியம் டைட்டானியம் தொடர் வண்ணங்கள்",
                "சமையலறைக்கு ஏற்ற பல வண்ண விருப்பங்கள்"
            ]
        },
        "dolphin-era": {
            name: "டால்பின் எரா (Dolphin ERA)",
            description: "அழகான அக்வா கிரீன் நிறத்தில் கிடைக்கும் சிறிய, நம்பகமான மற்றும் பட்ஜெட்டுக்கு ஏற்ற டால்பின் தொடர் நீர் சுத்திகரிப்பு இயந்திரம்.",
            features: [
                "9 லிட்டர் சேமிப்பு திறன்",
                "வீட்டு சுத்திகரிப்பில் ஒரு புதிய சகாப்தத்தின் ஆரம்பம்",
                "எல்.இ.டி குறிகாட்டிகளுடன் கூடிய கிளாசிக் டால்பின் வடிவமைப்பு",
                "பல கட்ட ரிவர்ஸ் ஆஸ்மோசிஸ் (RO) முறை"
            ]
        },
        "lexzon": {
            name: "லெக்ஸான் (Lexzon)",
            description: "பல கட்ட வடிகட்டுதல் மற்றும் ஆக்டிவ் காப்பர் தொழில்நுட்பம் கொண்ட ஸ்டைலான வெளிப்படையான-நீல நிற அமைச்சரவை நீர் சுத்திகரிப்பான்.",
            features: [
                "10 லிட்டர் சேமிப்பு திறன்",
                "அழகான அரை-வெளிப்படையான நீல நிற அமைச்சரவை",
                "உள்ளமைக்கப்பட்ட ஆக்டிவ் காப்பர் வடிகட்டி தொழில்நுட்பம்",
                "சிறிய சமையலறைக்கு ஏற்ற அளவுகள்"
            ]
        },
        "aqua-kainet": {
            name: "அக்வா கைநெட் (Aqua KAINET)",
            description: "மார்பெல்லா, லக்சர் மற்றும் ராயல் தொடர் பளபளப்பான கிராபிக்ஸ் உடல்களைக் கொண்ட பிரீமியம் வடிவமைப்பாளர் நீர் சுத்திகரிப்பு இயந்திரங்கள்.",
            features: [
                "10 லிட்டர் சேமிப்பு திறன்",
                "அற்புதமான மார்பெல்லா மற்றும் ராயல் கிராபிக்ஸ் வண்ணங்கள்",
                "ஒருங்கிணைந்த ஸ்மார்ட் எல்.இ.டி குறிகாட்டிகள்",
                "மேம்பட்ட ஆர்.ஓ மெம்பிரேன் தொழில்நுட்பம்"
            ]
        },
        "aqua-2090": {
            name: "அக்வா 2090 (AQUA 2090)",
            description: "கழற்றக்கூடிய சேமிப்பு தொட்டி மற்றும் தனித்துவமான நேர்த்தியான வடிவமைப்பு கொண்ட மேம்பட்ட ஆர்.ஓ + காப்பர் + ஆல்கலைன் சுத்திகரிப்பான்.",
            features: [
                "10 லிட்டர் சேமிப்பு திறன்",
                "மேம்பட்ட RO + ஆக்டிவ் காப்பர் + ஆல்கலைன் வடிகட்டிகள்",
                "தனித்துவமான நேர்த்தியான அழகியல் வடிவமைப்பு",
                "எளிதாக கழுவ கழற்றக்கூடிய தொட்டி"
            ]
        },
        "aqua-extreme": {
            name: "அக்வா எக்ஸ்ட்ரீம் (AQUA EXTREME)",
            description: "உள்ளே இருக்கும் வடிகட்டிகளை பார்க்கும் வெளிப்படையான சாளரம் மற்றும் வெள்ளை நிற சேமிப்பு தொட்டி கொண்ட அதிக திறன் கொண்ட வீட்டு உபயோக ஆர்.ஓ.",
            features: [
                "15 லிட்டர் சேமிப்பு திறன்",
                "வடிகட்டிகளை பார்க்க வெளிப்படையான மேல் அமைச்சரவை",
                "ஹெவி-டியூட்டி பூஸ்டர் பம்ப் மற்றும் அதிக ஓட்டம் கொண்ட மெம்பிரேன்",
                "நீடித்த உணவு-தர ஏ.பி.எஸ் பிளாஸ்டிக் அமைச்சரவை"
            ]
        },
        "aqua-innovica": {
            name: "அக்வா இன்னோவிகா (AQUA INNOVICA)",
            description: "தூசி புகாத நேர்த்தியான இருண்ட அமைச்சரவைக்குள் துத்தநாகம் + காப்பர் + ஆல்கலைன் சுத்திகரிப்பு தொழில்நுட்பத்துடன் ஆரோக்கியத்தை வரையறுக்கிறது.",
            features: [
                "10 லிட்டர் சேமிப்பு திறன்",
                "துத்தநாகம் + ஆக்டிவ் காப்பர் + ஆல்கலைன் தாதுக்கள் இணைப்பு",
                "நேர்த்தியான தூசி புகாத மூடிய உடல் வடிவமைப்பு",
                "ஸ்மார்ட் எல்.இ.டி பவர் மற்றும் தொட்டி குறிகாட்டிகள்"
            ]
        },
        "aqua-xl": {
            name: "அக்வா எக்ஸ்.எல் (AQUA XL)",
            description: "சுவரில் பொருத்தக்கூடிய மற்றும் 7-கட்ட RO+TDS தொழில்நுட்பத்துடன் கூடிய நேர்த்தியான நீல நிற கண்ணாடி முன் பேனல் கொண்ட சுத்திகரிப்பு அமைப்பு.",
            features: [
                "12 லிட்டர் சேமிப்பு திறன்",
                "7-கட்ட RO + TDS நீர் சுத்திகரிப்பு",
                "நேர்த்தியான நீல நிற கண்ணாடி முன் பேனல்",
                "ஆரோக்கியமான வாழ்வுக்கு ஆரோக்கியமான நீர்"
            ]
        },
        "purosis": {
            name: "பியூரோசிஸ் (Purosis)",
            description: "பிரீமியம் கருப்பு மேட் வடிவமைப்பில் மேம்பட்ட பியூரோஅக்வா RO+ALK ஆல்கலைன் தொழில்நுட்பத்துடன் தூய்மையை மறுவரையறை செய்கிறது.",
            features: [
                "9 லிட்டர் சேமிப்பு திறன்",
                "பியூரோஅக்வா RO+ALK ஆல்கலைன் தொழில்நுட்பம்",
                "பிரீமியம் மேட் கருப்பு ஸ்டைலிங்",
                "ஆக்டிவ் டி.டி.எஸ் பேலன்சர் மற்றும் தாதுக்கள் செறிவூட்டல்"
            ]
        },
        "apple-alive": {
            name: "ஆப்பிள் அலைவ் (Apple Alive)",
            description: "ஸ்டைலான ஜியோமெட்ரிக் கிராபிக்ஸ் மற்றும் 'ஆன் ஃபில்டர்' காட்டி கொண்ட சுத்தமான வெள்ளை நிற அமைச்சரவை நீர் சுத்திகரிப்பான்.",
            features: [
                "10 லிட்டர் சேமிப்பு திறன்",
                "'ஆன் ஃபில்டர்' காட்டி ஒளி",
                "நவீன ஜியோமெட்ரிக் பிரிண்ட்களுடன் கூடிய சுத்தமான வெள்ளை அமைச்சரவை",
                "திறமையான ரிவர்ஸ் ஆஸ்மோசிஸ் (RO) அமைப்பு"
            ]
        },
        "whale-aqua": {
            name: "வேல் அக்வா (Whale Aqua)",
            description: "25 லிட்டர் சேமிப்பு தொட்டி மற்றும் முழு தானியங்கி செயல்பாடுகளைக் கொண்ட அதிக திறன் கொண்ட அரை-வணிக நீர் சுத்திகரிப்பான்.",
            features: [
                "25 லிட்டர் சேமிப்பு திறன்",
                "அதிக திறன் கொண்ட ரிவர்ஸ் ஆஸ்மோசிஸ் (RO) வடிகட்டுதல்",
                "ஆட்டோ-ஷட்ஆஃப் கொண்ட முழு தானியங்கி செயல்பாடு",
                "பெரிய குடும்பங்கள் அல்லது சிறிய அலுவலகங்களுக்கு ஏற்றது"
            ]
        },
        "mars-aqua": {
            name: "மார்ஸ் அக்வா (MARS AQUA)",
            description: "அழகான மேட் சாம்பல்/கருப்பு அமைச்சரவை வடிவமைப்பில் நேர்த்தியான, நவீன 9-லிட்டர் ரிவர்ஸ் ஆஸ்மோசிஸ் நீர் சுத்திகரிப்பான்.",
            features: [
                "9 லிட்டர் சேமிப்பு திறன்",
                "நவீன மேட் சாம்பல்/கருப்பு அமைச்சரவை",
                "பல கட்ட ரிவர்ஸ் ஆஸ்மோசிஸ் வடிகட்டுதல்",
                "ஆட்டோ-ஸ்டார்ட் மற்றும் ஆட்டோ-ஷட்ஆஃப் அம்சங்கள்"
            ]
        },
        "aqua-jade": {
            name: "அக்வா ஜேட் (AQUA JADE)",
            description: "அழகான அக்வா கிரீன் நிற சேமிப்பு தொட்டியுடன் கூடிய பாதுகாப்பான மற்றும் ஆரோக்கியமான 10 லிட்டர் நீர் சுத்திகரிப்பு இயந்திரம்.",
            features: [
                "10 லிட்டர் சேமிப்பு திறன்",
                "பாதுகாப்பான மற்றும் ஆரோக்கியமான குடிநீர் உத்தரவாதம்",
                "நம்பகமான ரிவர்ஸ் ஆஸ்மோசிஸ் (RO) அமைப்பு",
                "வெளிப்படையான அக்வா கிரீன் தொட்டி வடிவமைப்பு"
            ]
        },
        "aqua-touch": {
            name: "அக்வா டச் (AQUA TOUCH)",
            description: "100% உணவு-தர ஏ.பி.எஸ் பிளாஸ்டிக்கால் ஆனது, எல்.இ.டி குறிகாட்டிகள் மற்றும் அழகான மலர் வடிவ பேனல் கொண்டது.",
            features: [
                "10 லிட்டர் சேமிப்பு திறன்",
                "100% உணவு-தர நீடித்த ஏ.பி.எஸ் பிளாஸ்டிக் உடல்",
                "ஒருங்கிணைந்த இரட்டை எல்.இ.டி குறிகாட்டிகள்",
                "மலர் கிராபிக்ஸ் அலங்கரிக்கப்பட்ட வெள்ளை அடிப்படை"
            ]
        },
        "aqua-lilly": {
            name: "அக்வா லில்லி (AQUA Lilly)",
            description: "2015 முதல் வாடிக்கையாளர்களின் சிறந்த தேர்வு. சுவரில் பொருத்த எளிதான மற்றும் அழகான நீல அலை முன் பேனல் கொண்ட ஆர்.ஓ சிஸ்டம்.",
            features: [
                "10 லிட்டர் சேமிப்பு திறன்",
                "சுவரில் பொருத்தக்கூடிய நவீன வடிவமைப்பு",
                "உயர்தர பல கட்ட வடிகட்டி கூறுகள்",
                "அழகான நீல அலை அலங்கார அமைச்சரவை"
            ]
        },
        "aqua-sonnet": {
            name: "அக்வா சானெட் (AQUA SONNET)",
            description: "வெளிப்படையான நீல நிற அமைச்சரவையுடன் கூடிய மேம்பட்ட தொழில்நுட்ப உலகத்தரம் வாய்ந்த 12-லிட்டர் நீர் சுத்திகரிப்பு அமைப்பு.",
            features: [
                "12 லிட்டர் சேமிப்பு திறன்",
                "உலகத்தரம் வாய்ந்த ஆர்.ஓ + யூ.வி + யூ.எஃப் வடிகட்டுதல்",
                "சுவரில் பொருத்தக்கூடிய வசதியான வடிவமைப்பு",
                "தூய மற்றும் பாதுகாப்பான சான்றளிக்கப்பட்ட பாகங்கள்"
            ]
        },
        "hi-flo": {
            name: "ஹை-ஃபுளோ (Hi-Flo)",
            description: "சுத்தமான மற்றும் ஆரோக்கியமான நீரை வழங்குவதற்காக மேம்பட்ட பல கட்ட வடிகட்டுதலைக் கொண்ட உயர் திறன் கொண்ட நீர் சுத்திகரிப்பு அமைப்பு.",
            features: [
                "10 லிட்டர் சேமிப்பு திறன்",
                "துடிப்பான மற்றும் நீடித்த அமைச்சரவை வடிவமைப்பு",
                "மேம்பட்ட ரிவர்ஸ் ஆஸ்மோசிஸ் (RO) வடிகட்டுதல் முறை",
                "உடனடி குடிநீருக்கான அதிக நீர் ஓட்ட விகிதம்"
            ]
        },
        "aqua-jil": {
            name: "ஜில் (JIL)",
            description: "உறுதியான அமைச்சரவை மற்றும் செறிவூட்டப்பட்ட குடிநீருக்கான காப்பர் தொழில்நுட்பம் கொண்ட நேர்த்தியான நவீன நீர் சுத்திகரிப்பான்.",
            features: [
                "11 லிட்டர் சேமிப்பு திறன்",
                "ஆக்டிவ் காப்பர் தொழில்நுட்ப இணைப்பு",
                "கசிவு இல்லாத வலுவான மற்றும் நீடித்த சேமிப்பு தொட்டி",
                "பிரீமியம் ரிவர்ஸ் ஆஸ்மோசிஸ் அமைப்பு"
            ]
        },
        "seven-x": {
            name: "செவன் எக்ஸ் மற்றும் வீனஸ் அக்வா (Seven X and Venus Aqua)",
            description: "மிகவும் மேம்பட்ட நீர் வடிகட்டி அமைப்புடன் கூடிய சுத்தமான, ஆரோக்கியமான மற்றும் பாதுகாப்பான குடிநீர் சுத்திகரிப்பான்.",
            features: [
                "9 லிட்டர் சேமிப்பு திறன்",
                "சுவரில் பொருத்தக்கூடிய இடத்தை மிச்சப்படுத்தும் வடிவமைப்பு",
                "நீடித்த மற்றும் கசிவு இல்லாத சேமிப்பு தொட்டி",
                "மேம்பட்ட பல கட்ட ரிவர்ஸ் ஆஸ்மோசிஸ் வடிகட்டுதல்"
            ]
        }
    }
};

let currentLanguage = localStorage.getItem("selectedLanguage") || "en";

document.addEventListener("DOMContentLoaded", () => {
    // --- UI Elements ---
    const mainHeader = document.querySelector(".main-header");
    const mobileNavToggle = document.getElementById("mobile-nav-toggle");
    const mainNavMenu = document.getElementById("main-nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    
    const productsGrid = document.getElementById("dynamic-products-grid");
    const filterBtns = document.querySelectorAll(".filter-tab-btn");
    const searchInput = document.getElementById("product-search-input");
    const noResultsMsg = document.getElementById("no-results-msg");
    
    const productModal = document.getElementById("product-detail-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalProductImg = document.getElementById("modal-product-img");
    const modalProductCategory = document.getElementById("modal-product-category");
    const modalProductName = document.getElementById("modal-product-name");
    const modalProductPrice = document.getElementById("modal-product-price");
    const modalProductOriginalPrice = document.getElementById("modal-product-original-price");
    const modalProductDescription = document.getElementById("modal-product-description");
    const modalProductFeatures = document.getElementById("modal-product-features");
    const modalInquireBtn = document.getElementById("modal-inquire-btn");
    
    const bookingForm = document.getElementById("booking-lead-form");
    const formSpinner = document.getElementById("form-spinner");
    const submitBtnElement = document.getElementById("submit-btn-element");
    const successModal = document.getElementById("form-success-modal");
    const successCloseBtn = document.getElementById("success-close-btn");

    let currentCategory = "all";
    let searchQuery = "";

    // --- Header & Scroll Handling ---
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add("scrolled");
        } else {
            mainHeader.classList.remove("scrolled");
        }
        
        // Active link scroll spy
        let currentSection = "";
        const sections = document.querySelectorAll("section");
        sections.forEach(sec => {
            const secTop = sec.offsetTop - 120;
            const secHeight = sec.clientHeight;
            if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
                currentSection = sec.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // --- Mobile Nav Menu Toggle ---
    mobileNavToggle.addEventListener("click", () => {
        mainNavMenu.classList.toggle("open");
        mobileNavToggle.classList.toggle("active");
        
        // Animated bars
        const bars = mobileNavToggle.querySelectorAll(".bar");
        if (mobileNavToggle.classList.contains("active")) {
            bars[0].style.transform = "rotate(45deg) translate(5px, 6px)";
            bars[1].style.opacity = "0";
            bars[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
        } else {
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        }
    });

    // Close menu on nav link click
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mainNavMenu.classList.remove("open");
            mobileNavToggle.classList.remove("active");
            const bars = mobileNavToggle.querySelectorAll(".bar");
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        });
    });

    // --- Dynamic Product Catalog ---
    function renderProducts() {
        productsGrid.innerHTML = "";
        
        // Filter local PRODUCTS array
        const filtered = PRODUCTS.filter(prod => {
            // Category checking
            const isCommercial = prod.description.toLowerCase().includes("commercial") || 
                                prod.name.toLowerCase().includes("whale") ||
                                prod.features.some(f => f.toLowerCase().includes("commercial"));
                                
            const categoryMatch = 
                currentCategory === "all" || 
                (currentCategory === "Domestic RO" && !isCommercial) ||
                (currentCategory === "Commercial" && isCommercial);

            // Search query checking (looks in both English and Tamil translations)
            const query = searchQuery.toLowerCase().trim();
            const searchMatch = 
                prod.name.toLowerCase().includes(query) ||
                prod.description.toLowerCase().includes(query) ||
                prod.features.some(feat => feat.toLowerCase().includes(query)) ||
                (PRODUCT_TRANSLATIONS["ta"][prod.id] && (
                    PRODUCT_TRANSLATIONS["ta"][prod.id].name.toLowerCase().includes(query) ||
                    PRODUCT_TRANSLATIONS["ta"][prod.id].description.toLowerCase().includes(query) ||
                    PRODUCT_TRANSLATIONS["ta"][prod.id].features.some(feat => feat.toLowerCase().includes(query))
                ));

            return categoryMatch && searchMatch;
        });

        // Show/hide no results message
        if (filtered.length === 0) {
            noResultsMsg.style.display = "block";
            productsGrid.style.display = "none";
            return;
        } else {
            noResultsMsg.style.display = "none";
            productsGrid.style.display = "grid";
        }

        // Render card markup
        filtered.forEach(prod => {
            // Get translations if Tamil is active
            let name = prod.name;
            let description = prod.description;
            if (currentLanguage === "ta" && PRODUCT_TRANSLATIONS["ta"][prod.id]) {
                name = PRODUCT_TRANSLATIONS["ta"][prod.id].name;
                description = PRODUCT_TRANSLATIONS["ta"][prod.id].description;
            }

            // Find capacity for the tag
            let capacityTag = "10 L";
            const capFeature = prod.features.find(f => f.toLowerCase().includes("capacity") || f.toLowerCase().includes("storage"));
            if (capFeature) {
                const match = capFeature.match(/(\d+\s*L)/i) || capFeature.match(/(\d+\s*litre)/i);
                if (match) {
                    capacityTag = match[0].toUpperCase();
                }
            }

            // Translate capacity tag if Tamil
            if (currentLanguage === "ta") {
                capacityTag = capacityTag.replace("L", " லிட்டர்");
            }

            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <div class="product-image-container">
                    <span class="product-capacity-tag">${capacityTag}</span>
                    <img src="${prod.image}" alt="${name}" onerror="this.src='genuine_aqua_logo.jpg'">
                </div>
                <div class="product-content">
                    <h3>${name}</h3>
                    <div class="product-price-row">
                        <span class="price-current">${prod.price}</span>
                        <span class="price-original">${prod.originalPrice}</span>
                    </div>
                    <p class="product-desc">${description}</p>
                    <button class="btn btn-outline btn-sm product-details-btn" data-id="${prod.id}">
                        ${currentLanguage === "ta" ? "விவரங்கள் & வினவல்" : "Details & Inquire"}
                    </button>
                </div>
            `;

            productsGrid.appendChild(card);
        });

        // Attach modal triggers
        document.querySelectorAll(".product-details-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = e.target.getAttribute("data-id");
                openProductModal(id);
            });
        });
    }

    // --- Search Input Event ---
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderProducts();
    });

    // --- Category Tabs Switch ---
    filterBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterBtns.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentCategory = e.target.getAttribute("data-category");
            renderProducts();
        });
    });

    // --- Modal Logic ---
    function openProductModal(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        let name = product.name;
        let description = product.description;
        let features = product.features;

        if (currentLanguage === "ta" && PRODUCT_TRANSLATIONS["ta"][product.id]) {
            name = PRODUCT_TRANSLATIONS["ta"][product.id].name;
            description = PRODUCT_TRANSLATIONS["ta"][product.id].description;
            features = PRODUCT_TRANSLATIONS["ta"][product.id].features;
        }

        modalProductImg.src = product.image;
        modalProductImg.onerror = () => { modalProductImg.src = 'genuine_aqua_logo.jpg'; };
        modalProductImg.alt = name;
        modalProductName.textContent = name;
        
        // Find capacity
        let capTag = "Domestic RO";
        const isComm = product.description.toLowerCase().includes("commercial") || 
                       product.name.toLowerCase().includes("whale") ||
                       product.features.some(f => f.toLowerCase().includes("commercial"));
        if (isComm) {
            capTag = currentLanguage === "ta" ? "வணிக / அரை-வணிக பயன்பாடு" : "Commercial / Semi-Commercial";
        } else {
            capTag = currentLanguage === "ta" ? "வீட்டு உபயோக ஆர்.ஓ" : "Domestic RO";
        }
        
        modalProductCategory.textContent = capTag;
        modalProductPrice.textContent = product.price;
        modalProductOriginalPrice.textContent = product.originalPrice;
        modalProductDescription.textContent = description;
        
        // Load features
        modalProductFeatures.innerHTML = "";
        features.forEach(feat => {
            const li = document.createElement("li");
            li.textContent = feat;
            modalProductFeatures.appendChild(li);
        });

        // Inquiry button pre-fill handler
        modalInquireBtn.onclick = () => {
            closeModal();
            prefillProductInquiry(name, product.price, capTag);
        };

        productModal.classList.add("open");
        document.body.style.overflow = "hidden"; // Disable background scrolling
    }

    function closeModal() {
        productModal.classList.remove("open");
        document.body.style.overflow = ""; // Re-enable background scrolling
    }

    modalCloseBtn.addEventListener("click", closeModal);
    productModal.addEventListener("click", (e) => {
        if (e.target === productModal) closeModal();
    });

    // --- Form Prefill Handlers ---
    window.prefillService = function(serviceType) {
        const serviceSelect = document.getElementById("form-service");
        const messageArea = document.getElementById("form-message");
        
        serviceSelect.value = serviceType;
        
        let messageText = "";
        if (currentLanguage === "ta") {
            switch (serviceType) {
                case "RO Installation":
                    messageText = "வணக்கம் ஜெனுயின அக்வா, எனது இடத்தில் ஒரு புதிய ஆர்.ஓ சுத்திகரிப்பு இயந்திரத்தை நிறுவ விரும்புகிறேன். விலை மற்றும் நிறுவும் நேரத்தை உறுதிப்படுத்த என்னை தொடர்பு கொள்ளவும்.";
                    break;
                case "RO Repair":
                    messageText = "வணக்கம் ஜெனுயின அக்வா, எனது நீர் சுத்திகரிப்பானில் சிக்கல் உள்ளது (நீர் ஓட்டம் இல்லை / பம்ப் சத்தம் / கசிவு / பவர் வரவில்லை). தொழில்நுட்ப வல்லுநரின் சேவை வருகை எனக்கு தேவைப்படுகிறது.";
                    break;
                case "AMC Service":
                    messageText = "வணக்கம் ஜெனுயின அக்வா, எனது நீர் சுத்திகரிப்பு இயந்திரத்திற்கான வருடாந்திர பராமரிப்பு ஒப்பந்தத்தை (AMC) பதிவு செய்ய ஆர்வமாக உள்ளேன். பராமரிப்பு தொகுப்பு விவரங்களை பகிரவும்.";
                    break;
                case "Filter Change":
                    messageText = "வணக்கம் ஜெனுயின அக்வா, எனது சுத்திகரிப்பானின் வடிகட்டி காட்டி எச்சரிக்கை செய்கிறது அல்லது நீரின் சுவை மாறிவிட்டது. வடிகட்டி மற்றும் மெம்பிரேன் மாற்ற திட்டமிட விரும்புகிறேன்.";
                    break;
                case "Commercial RO":
                    messageText = "வணக்கம் ஜெனுயின அக்வா, எங்கள் அலுவலகம்/நிறுவனத்திற்கு வணிக ரீதியிலான ஆர்.ஓ வாட்டர் பிளான்ட் அமைப்பதற்கான ஆலோசனை தேவை. தொழில்நுட்ப ஆலோசகர் என்னை தொடர்பு கொள்ளவும்.";
                    break;
                default:
                    messageText = "வணக்கம் ஜெனுயின அக்வா, எனது நீர் சுத்திகரிப்பு அமைப்புக்கு சேவை தேவைப்படுகிறது. தயவுசெய்து என்னை தொடர்பு கொள்ளவும்.";
            }
        } else {
            switch (serviceType) {
                case "RO Installation":
                    messageText = "Hi Genuine Aqua, I would like to schedule a new RO purifier installation at my location. Please contact me to confirm pricing and availability.";
                    break;
                case "RO Repair":
                    messageText = "Hi Genuine Aqua, my water purifier is experiencing issues (no water flow / pump noise / leakage / power issues). I need a technician service visit.";
                    break;
                case "AMC Service":
                    messageText = "Hi Genuine Aqua, I am interested in registering for an Annual Maintenance Contract (AMC) for my water purifier. Please share packages.";
                    break;
                case "Filter Change":
                    messageText = "Hi Genuine Aqua, my purifier's filter indicator is alert or the water taste has changed. I want to schedule a routine filter & membrane replacement.";
                    break;
                case "Commercial RO":
                    messageText = "Hi Genuine Aqua, I need a consultation for a commercial RO water plant for our office/facility. Please get in touch with your tech consultants.";
                    break;
                default:
                    messageText = "Hi Genuine Aqua, I need support with my water filtration system. Please contact me.";
            }
        }
        
        messageArea.value = messageText;
        
        // Remove error states if present
        serviceSelect.closest(".form-group").classList.remove("has-error");
        messageArea.closest(".form-group").classList.remove("has-error");
    };

    function prefillProductInquiry(productName, price, type) {
        const serviceSelect = document.getElementById("form-service");
        const messageArea = document.getElementById("form-message");
        
        serviceSelect.value = "Product Inquiry";
        
        if (currentLanguage === "ta") {
            messageArea.value = `வணக்கம் ஜெனுயின அக்வா, "${productName}" நீர் சுத்திகரிப்பு இயந்திரத்தை (${type}, விலை: ${price}) வாங்க/விசாரிக்க நான் ஆர்வமாக உள்ளேன். தயாரிப்பு விவரங்கள், நிறுவுதல் மற்றும் தள்ளுபடி விவரங்களுடன் என்னை தொடர்பு கொள்ளவும்.`;
        } else {
            messageArea.value = `Hi Genuine Aqua, I am interested in purchasing/inquiring about the "${productName}" water purification system (${type}, Price: ${price}). Please call me back with product details, installation processes, and discount options.`;
        }
        
        // Remove error states if present
        serviceSelect.closest(".form-group").classList.remove("has-error");
        messageArea.closest(".form-group").classList.remove("has-error");
        
        // Scroll to form smoothly
        const contactSection = document.getElementById("contact");
        window.scrollTo({
            top: contactSection.offsetTop - 80,
            behavior: "smooth"
        });
    }

    // --- Form Validation & Submission ---
    const inputs = bookingForm.querySelectorAll("input, select, textarea");
    
    // Clear errors on input
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            const group = input.closest(".form-group");
            if (group) group.classList.remove("has-error");
        });
        input.addEventListener("change", () => {
            const group = input.closest(".form-group");
            if (group) group.classList.remove("has-error");
        });
    });

    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        const nameInput = document.getElementById("form-name");
        const phoneInput = document.getElementById("form-phone");
        const emailInput = document.getElementById("form-email");
        const serviceInput = document.getElementById("form-service");
        const messageInput = document.getElementById("form-message");

        // Validate Name
        if (nameInput.value.trim() === "") {
            nameInput.closest(".form-group").classList.add("has-error");
            isValid = false;
        }

        // Validate Phone (10 digit check)
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(phoneInput.value.replace(/\s+/g, ""))) {
            phoneInput.closest(".form-group").classList.add("has-error");
            isValid = false;
        }

        // Validate Email (optional, but if filled must be correct format)
        if (emailInput.value.trim() !== "") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.closest(".form-group").classList.add("has-error");
                isValid = false;
            }
        }

        // Validate Service Select
        if (serviceInput.value === "") {
            serviceInput.closest(".form-group").classList.add("has-error");
            isValid = false;
        }

        // Validate Message
        if (messageInput.value.trim() === "") {
            messageInput.closest(".form-group").classList.add("has-error");
            isValid = false;
        }

        if (!isValid) {
            // Scroll to the first error
            const firstError = bookingForm.querySelector(".has-error");
            if (firstError) {
                firstError.scrollIntoView({ behavior: "smooth", block: "center" });
            }
            return;
        }

        // Submit logic
        setLoadingState(true);

        const formData = {
            timestamp: new Date().toLocaleString(),
            name: nameInput.value.trim(),
            phone: phoneInput.value.trim(),
            email: emailInput.value.trim(),
            service: serviceInput.value,
            message: messageInput.value.trim()
        };

        if (GOOGLE_SCRIPT_URL === "") {
            // MOCK MODE: Simulate success for testing without App Script configured
            console.warn("GOOGLE_SCRIPT_URL is not set. Simulating a mock form submission success.");
            setTimeout(() => {
                setLoadingState(false);
                openSuccessModal();
                bookingForm.reset();
            }, 1500);
        } else {
            // REAL MODE: POST data to Apps Script
            fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                setLoadingState(false);
                if (data.result === "success") {
                    openSuccessModal();
                    bookingForm.reset();
                } else {
                    const failMsg = currentLanguage === "ta"
                        ? "சமர்ப்பித்தல் தோல்வியடைந்தது: " + (data.error || "தெரியாத சேவையகப் பிழை")
                        : "Submission failed: " + (data.error || "Unknown server error");
                    alert(failMsg);
                }
            })
            .catch(error => {
                setLoadingState(false);
                console.error("Error during lead posting:", error);
                const netErr = currentLanguage === "ta"
                    ? "பிணைய பிழை. உங்கள் கூகுள் ஆப்ஸ் ஸ்கிரிப்ட் வரிசைப்படுத்தப்பட்டு, அனைவருக்கும் அணுகக்கூடியதாக இருப்பதை உறுதிசெய்யவும்."
                    : "Network error. Please make sure your Google Apps Script is deployed with anyone-access enabled.";
                alert(netErr);
            });
        }
    });

    function setLoadingState(isLoading) {
        if (isLoading) {
            formSpinner.style.display = "inline-block";
            submitBtnElement.disabled = true;
            submitBtnElement.querySelector(".btn-text").textContent = currentLanguage === "ta" ? "செயலாக்கப்படுகிறது..." : "Processing...";
        } else {
            formSpinner.style.display = "none";
            submitBtnElement.disabled = false;
            submitBtnElement.querySelector(".btn-text").textContent = currentLanguage === "ta" ? "கோரிக்கையை சமர்ப்பிக்கவும்" : "Submit Request";
        }
    }

    function openSuccessModal() {
        successModal.classList.add("open");
        document.body.style.overflow = "hidden";
    }

    function closeSuccessModal() {
        successModal.classList.remove("open");
        document.body.style.overflow = "";
    }

    successCloseBtn.addEventListener("click", closeSuccessModal);
    successModal.addEventListener("click", (e) => {
        if (e.target === successModal) closeSuccessModal();
    });

    // --- Language Selector Action ---
    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem("selectedLanguage", lang);

        // Update active class on buttons
        document.querySelectorAll(".lang-btn").forEach(btn => {
            if (btn.getAttribute("data-lang") === lang) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        // Translate elements with data-i18n
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
                // If translations has HTML, insert as innerHTML, else textContent
                const content = TRANSLATIONS[lang][key];
                if (content.includes("<i ") || content.includes("<span ") || content.includes("&copy;")) {
                    el.innerHTML = content;
                } else {
                    el.textContent = content;
                }
            }
        });

        // Translate input placeholders with data-i18n-placeholder
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
                el.placeholder = TRANSLATIONS[lang][key];
            }
        });

        // Translate form option dropdowns
        const serviceSelect = document.getElementById("form-service");
        if (serviceSelect) {
            // Option 0 (disabled default option)
            const firstOpt = serviceSelect.options[0];
            if (firstOpt && TRANSLATIONS[lang]["form-option-select"]) {
                firstOpt.text = TRANSLATIONS[lang]["form-option-select"];
            }
            // Options 1 to 7
            for (let i = 1; i < serviceSelect.options.length; i++) {
                const optKey = `form-option-${i}`;
                if (TRANSLATIONS[lang] && TRANSLATIONS[lang][optKey]) {
                    serviceSelect.options[i].text = TRANSLATIONS[lang][optKey];
                }
            }
        }

        // Re-render product catalog in chosen language
        renderProducts();
    }

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const targetLang = btn.getAttribute("data-lang");
            if (targetLang !== currentLanguage) {
                setLanguage(targetLang);
            }
        });
    });

    // --- Initial Language and Catalog Render ---
    setLanguage(currentLanguage);
});
