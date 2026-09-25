/**
 * ============================================================================
 * HERITAGE 360 — Master Application Controller
 * Smart India Hackathon 2026
 * "Discover India Beyond History"
 * "Experience, learn and preserve India's living heritage through interactive technology."
 * ============================================================================
 */

// --- 1. Master Data Registries ---

// Historical Eras Data (Time Travel India: Ancient → Medieval → Colonial → Modern → Future)
const ERAS_DATA = {
  ancient: {
    name: "Ancient India & Indus Valley",
    period: "c. 2600 BCE – 500 CE",
    lead: "The dawn of urban planning, Vedic philosophical inquiry, astronomical mathematics, lost-wax metallurgy, and the golden cultural renaissance of the Maurya and Gupta dynasties.",
    facets: {
      events: [
        "c. 2600 BCE: Emergence of planned grid cities at Harappa, Mohenjo-daro, and Dholavira with standardized burnt-brick sanitation.",
        "c. 1500–500 BCE: Composition of the Rigveda, Upanishads, and inception of Indian classical philosophical systems (Darshanas).",
        "c. 268–232 BCE: Emperor Ashoka the Great carves Major Rock Edicts across the subcontinent championing Ahimsa and Dharma.",
        "c. 320–550 CE: Gupta Empire Golden Age: Aryabhata calculates Earth's circumference and zero concept; Kalidasa composes classical drama."
      ],
      architecture: [
        "Mohenjo-daro Great Bath: Watertight bitumen masonry and underground covered sewage conduits with inspection manholes.",
        "Lothal Tidal Dockyard: World's earliest engineered maritime basin connecting ancient Gujarat with Mesopotamian trade routes.",
        "Great Stupa at Sanchi: Colossal hemispherical relic dome flanked by four intricately carved Torana gateways depicting Jataka tales.",
        "Ajanta Cave Sanctuaries: Rock-cut basalt chaityas and viharas adorned with tempera frescoes depicting the Bodhisattva Padmapani."
      ],
      clothing: [
        "Antariya & Uttariya: Fine handspun unstitched cotton and tussar silk drapes arranged in graceful pleated folds.",
        "Terracotta figurines reveal elaborate gold filigree headdresses, beaded girdles (Mekhala), and armlets worn by noble women.",
        "Changthangi wool and Vedic bark fabrics (Valkala) worn by Himalayan hermits and forest university scholars."
      ],
      food: [
        "Indus Valley hearths reveal barley flatbreads, cultivated sesame cakes, black gram, green lentils, and charred mustard seeds.",
        "Ayurvedic culinary codification: The six rasas (Madhura, Amla, Lavana, Katu, Tikta, Kashaya) balanced according to seasonal cycles.",
        "Fermented dairy preparations: Curd (Dahi), clarified butter (Ghee), and early jaggery confections."
      ],
      art: [
        "'Dancing Girl' of Mohenjo-daro: Masterpiece of lost-wax (Cire Perdue) bronze casting from 2300 BCE.",
        "Steatite Pashupati seals depicting the proto-Shiva yogic posture surrounded by elephants, tigers, and rhinoceroses.",
        "Vedic chanting: Codified oral mnemonic patterns (Ghana and Jata patha) preserved without textual alteration for millennia."
      ],
      locations: [
        "Dholavira Water Reservoirs (Gujarat)",
        "Mohenjo-daro & Harappa (Indus Valley)",
        "Nalanda Mahavihara Ancient University (Bihar)",
        "Sanchi Stupa (Madhya Pradesh)"
      ]
    }
  },
  medieval: {
    name: "Medieval Bharat & Imperial Dynasties",
    period: "c. 600 CE – 1700 CE",
    lead: "An era of towering stone vimanas, maritime naval expeditions across the Bay of Bengal, Vijayanagara grandeur, Indo-Islamic synthesis, and the Bhakti-Sufi mystic poetry movement.",
    facets: {
      events: [
        "c. 1010 CE: Rajaraja Chola I consecrates the 216-foot Brihadisvara Temple with an 80-tonne granite capstone in Thanjavur.",
        "c. 1025 CE: Rajendra Chola's formidable imperial navy undertakes maritime expeditions across Srivijaya (Sumatra, Malaya).",
        "c. 1336–1565 CE: Vijayanagara Empire establishes Hampi as a global diamond and spice trading capital described by Portuguese travelers.",
        "c. 1674 CE: Chhatrapati Shivaji Maharaj establishes Hindavi Swarajya, pioneering naval defense forts across the Konkan coast."
      ],
      architecture: [
        "Brihadisvara Temple (Thanjavur): Dravidian granite superstructure standing over 216 feet without mortar.",
        "Hampi Stone Chariot & Vittala Temple: Monolithic musical stone pillars emitting tuned pitch frequencies when struck.",
        "Konark Sun Temple (Odisha): Colossal Kalinga stone chariot with 24 intricately carved wheels functioning as solar sundials.",
        "Taj Mahal (Agra): Symmetrical white Makrana marble wonder with Pietra Dura semiprecious stone inlay in Charbagh paradise gardens."
      ],
      clothing: [
        "Kanjeevaram and Chanderi pure silk sarees woven with real silver and 24-carat gold zari threads (Korvai technique).",
        "Mughal imperial Jama, Angarkha coats, and Jamdani muslin so delicate it was poetically named 'Baft Hawa' (Woven Air).",
        "Maratha warrior Turbans (Pagadi), Paithani peacock-motif sarees, and royal Peshwa waistcoats."
      ],
      food: [
        "Awadhi and Hyderabadi Dum Pukht: Slow meat and saffron rice cooking sealed in clay handis beneath glowing charcoal.",
        "Kerala Sadya and Chettinad Pepper feasts served on fresh plantain leaves featuring over 24 distinct spiced delicacies.",
        "Royal Rajput Dal Baati Churma and Gujarati farsans developed for enduring desert caravan travels."
      ],
      art: [
        "Chola Nataraja Bronzes: Cosmic dance of Shiva capturing creation, preservation, destruction, and liberation in lost-wax metal.",
        "Mughal and Rajasthani Miniature paintings created using ground lapis lazuli, malachite, real gold leaf, and squirrel-hair brushes.",
        "Bhakti saint poetry: Meerabai, Kabir, Tukaram, and Purandara Dasa composing timeless devotional songs."
      ],
      locations: [
        "Thanjavur Brihadisvara (Tamil Nadu)",
        "Hampi Ruins (Karnataka)",
        "Konark Sun Temple (Odisha)",
        "Red Fort & Qutb Minar (Delhi)"
      ]
    }
  },
  colonial: {
    name: "Colonial Period & Renaissance",
    period: "c. 1750 – 1947 CE",
    lead: "A heroic chapter of resistance, the Bengal cultural renaissance, Swadeshi handloom revival, rediscovery of ancient epigraphy, and the nationwide Satyagraha movement.",
    facets: {
      events: [
        "1857: The First War of Indian Independence uniting sepoys, royal rulers, and peasants against colonial rule.",
        "1893: Swami Vivekananda introduces Vedanta and Yoga to the Western world at the Parliament of Religions in Chicago.",
        "1905: Swadeshi Movement launches public boycotts of foreign goods, elevating Indian Khadi and Charkha into freedom emblems.",
        "1947: India wins independence at midnight, inspiring decolonization movements across Africa and Asia."
      ],
      architecture: [
        "Indo-Saracenic Architecture: Synthesis of Hindu chhatris, Islamic arches, and Victorian clock towers (e.g. Gateway of India, Victoria Terminus).",
        "Traditional Havelis of Shekhawati (Rajasthan): Vibrant courtyard mansions covered in multi-story narrative frescoes.",
        "Preservation of Ajanta & Ellora caves by Indian and global scholars through the Archaeological Survey of India (ASI)."
      ],
      clothing: [
        "Khadi Movement: Mahatma Gandhi champions handspun, handwoven khadi cotton as an instrument of economic self-reliance.",
        "Bengal Renaissance Dhotis, pleated Jamdani sarees, and Rabindranath Tagore's iconic scholarly flowing robes.",
        "Parsi Gara embroidery and Madras checked cottons exported globally across international maritime routes."
      ],
      food: [
        "Fusion colonial Anglo-Indian culinary heritage: Mulligatawny soup, Railway Mutton Curry, and Calcutta club cutlets.",
        "Modern Chai culture: Evolution of Assam and Darjeeling CTC tea spiced with cardamom, ginger, and cloves at roadside stalls.",
        "Iconic sweet inventions: K.C. Das perfects the spongy canned Rossogolla in 19th-century Calcutta."
      ],
      art: [
        "Raja Ravi Varma: Pioneer who synthesized European academic realism with traditional Indian iconography, democratizing lithographs.",
        "Bengal School of Art: Abanindranath Tagore and Nandalal Bose revive delicate indigenous wash techniques and folk murals.",
        "Patua scroll painters of Bengal singing satirical and revolutionary ballads against colonial exploitation."
      ],
      locations: [
        "Sabarmati Ashram (Gujarat)",
        "Victoria Memorial & Kolkata Ghats (West Bengal)",
        "Gateway of India (Maharashtra)",
        "Jallianwala Bagh (Punjab)"
      ]
    }
  },
  modern: {
    name: "Modern & Living Bharat",
    period: "1947 – Present Day",
    lead: "Preserving an uninterrupted 5,000-year civilizational continuum through constitutional protection, UNESCO recognitions, AI spatial digital twins, and master artisan empowerment.",
    facets: {
      events: [
        "1950: Adoption of the Indian Constitution, the world's longest handwritten and illustrated constitution with artwork by Nandalal Bose.",
        "1972: Establishment of the Archaeological Survey of India's statutory monument protection framework.",
        "2023: Chandrayaan-3 successfully lands at the lunar south pole, named 'Shiv Shakti Point', merging Vedic philosophy with frontier science.",
        "2026: Heritage 360 launched under Smart India Hackathon to digitize and safeguard indigenous community lore with AI."
      ],
      architecture: [
        "42+ UNESCO World Heritage Sites: From Santiniketan and Sacred Hoysala Ensembles to Dholavira and Ramappa Temple.",
        "Sub-millimeter Photogrammetric Laser Scanning creating complete spatial digital twins of endangered monuments.",
        "Sustainable vernacular architecture reviving rammed earth, lime plaster, and traditional Vastu climatological design."
      ],
      clothing: [
        "Over 400 Geographical Indication (GI) protected handlooms: Chanderi, Pashmina, Banarasi, Kanjeevaram, Patan Patola.",
        "Contemporary Indian couture celebrating indigenous weaving guilds on runways from Paris and Milan to New York.",
        "Revival of tribal natural dyeing techniques using indigo, pomegranate rinds, madder roots, and lac."
      ],
      food: [
        "Global recognition of ancient Indian Millets (Shree Anna): Ragi, Bajra, and Jowar recognized for ecological resilience.",
        "Authentic Regional Micro-Cuisines: Chettinad, Malabar, Naga smoked meats, and Kashmiri Wazwan celebrated worldwide.",
        "Ayurvedic botanical dietetics leading global functional nutrition and preventative health movements."
      ],
      art: [
        "Living Guru-Shishya Parampara sustaining Dhrupad, Carnatic, Bharatanatyam, and Kathakali across global academies.",
        "Tribal canvas renaissance: Contemporary Gond, Warli, Madhubani, and Pattachitra master artists exhibited in modern art biennales.",
        "Heritage 360 AI Culture Avatars bridging youth with living generational artisans and oral lore holders."
      ],
      locations: [
        "Santiniketan Cultural Landscape (West Bengal)",
        "Belur & Halebidu Hoysala Temples (Karnataka)",
        "Statue of Unity (Gujarat)",
        "ISRO Space Museum & Cultural Centers"
      ]
    }
  },
  future: {
    name: "Future Heritage & Digital Continuity",
    period: "2026 CE – Beyond",
    lead: "Safeguarding five millennia of civilizational memory through neural photogrammetry, AI Sanskrit & folk translation, metaverse temple preservation, and living artisan economic ledgers.",
    facets: {
      events: [
        "2026: Smart India Hackathon launches nationwide AI & 3D crowdsourced living heritage digital twins on HERITAGE 360.",
        "2030: Volumetric holographic archiving of 1,000+ endangered tribal dance rituals and oral folklore.",
        "2035: AI-driven predictive structural preservation protecting monuments against climate weathering.",
        "2040: Decentralized community ledgers ensuring generational royalties for indigenous craft master weavers."
      ],
      architecture: [
        "Sub-millimeter Photogrammetric Digital Twins allowing students worldwide to walk inside Vedic sanctums.",
        "Holographic acoustic reconstruction of ancient temple vimanas and mandapas.",
        "Biomimetic green architecture inspired by Meghalaya's living root bridges."
      ],
      clothing: [
        "Smart bio-sensing Khadi and organic cotton with embedded authenticity provenance chips.",
        "Digital fashion archives reviving extinct 18th-century Jamdani and Baluchari weave patterns.",
        "Zero-chemical organic dye synthesis mimicking ancient indigo and madder fermentation."
      ],
      food: [
        "Revival of climate-resilient ancient Indian millets (Shree Anna) using AI precision farming.",
        "Nutraceutical Ayurvedic superfoods balancing traditional Tridosha science with clinical genomics.",
        "Community heirloom seed vaults safeguarding thousands of indigenous grain varieties."
      ],
      art: [
        "Parampara AI Voice Clones preserving phonetic inflections of endangered Indian tribal dialects.",
        "Interactive VR masterclasses connecting hereditary master artisans with students across continents.",
        "Generative neural restoration of faded Ajanta cave frescoes."
      ],
      locations: [
        "Heritage 360 National Cloud Ledger",
        "Digital Hampi Virtual Reality Pavilion",
        "Meghalaya Living Root Bio-Reserve",
        "ASI Digital Preservation Labs"
      ]
    }
  }
};

// State-by-State Living Heritage Knowledge Base (Living Heritage Map)
const STATE_HERITAGE = {
  TN: {
    name: "Tamil Nadu",
    badge: "Tamil Nadu · Dravidian Heritage & Classical Arts",
    desc: "A timeless cradle of Sangam literature, granitic Chola temple spires, classical Bharatanatyam, and unbroken hereditary artisan lineages.",
    traditions: "Sangam poetry assemblies, Kudavolai democratic village voting, Kolam sacred geometry drawn with rice flour as daily compassion.",
    festivals: "Pongal Harvest Festival, Natyanjali Dance Festival, Madurai Chithirai Thiruvizha, Karthigai Deepam.",
    crafts: "Kanjeevaram Silk (GI), Swamimalai Bronze Idols (GI), Thanjavur Gold Paintings (GI), Thanjavur Art Plate (GI).",
    food: "Chettinad Pepper Spices, Madurai Jigarthanda, Filter Coffee, Authentic Idli & Sambar, Tirunelveli Halwa.",
    music: "Carnatic Classical Music, Bharatanatyam, Nadaswaram & Thavil temple orchestra, Villu Pattu bow songs.",
    languages: "Classical Tamil (Sangam roots, 2,500+ years antiquity), Badaga, Irula tribal dialects.",
    reference: "ASI Epigraphia Indica & IGNCA Southern Regional Archive"
  },
  KL: {
    name: "Kerala",
    badge: "Kerala · God's Own Country & Living Rituals",
    desc: "A lush maritime sanctuary celebrated for Kathakali dance-drama, Ayurveda healthcare, Aranmula mirrors, and monsoon boat pageants.",
    traditions: "Theyyam sacred living deities, Kalaripayattu martial science, Gurukula system of Sanskrit temple theatre (Kutiyattam).",
    festivals: "Onam Harvest Feast, Thrissur Pooram temple elephant pageantry, Vishu, Nehru Trophy Boat Race.",
    crafts: "Aranmula Metal Mirror (GI), Balaramapuram Kasavu Saree (GI), Payyannur Pavithra Ring (GI), Bell Metal Vessels.",
    food: "Kerala Sadya (24-course plantain leaf feast), Appam & Ishtu, Malabar Dum Biryani, Banana Chips in coconut oil.",
    music: "Sopana Sangeetham, Panchavadyam temple percussion, Kathakali music, Mohiniyattam classical dance.",
    languages: "Malayalam (Classical language with Sanskrit & ancient Tamil roots), Tulu, Beary.",
    reference: "Kerala Kalamandalam & UNESCO Rep. List of Intangible Heritage"
  },
  KA: {
    name: "Karnataka",
    badge: "Karnataka · Vijayanagara Splendor & Hoysala Stonecraft",
    desc: "From the monolithic granite ruins of Hampi to the filigree star-shaped Hoysala temples of Belur and Halebidu.",
    traditions: "Yakshagana night-long coastal dance theatre, Dasa Sahitya devotional literature, Channapatna wooden toy crafting.",
    festivals: "Mysore Dasara Jumbo Savari procession, Hampi Utsav, Kambala buffalo race, Karaga of Bengaluru.",
    crafts: "Mysore Silk (GI), Channapatna Lacquerware Toys (GI), Bidriware Metal Inlay (GI), Sandalwood Carvings (GI).",
    food: "Bisi Bele Bath, Mysore Pak, Udupi Dosa & Idli, Dharwad Peda, Coorg Pandi Curry.",
    music: "Carnatic Vocal & Instrumental tradition (Purandara Dasa birthplace), Veena craftsmanship.",
    languages: "Classical Kannada (Epigraphic roots dating to Halmidi 450 CE), Tulu, Kodava, Konkani.",
    reference: "ASI Bangalore Circle & Karnataka State Archives"
  },
  RJ: {
    name: "Rajasthan",
    badge: "Rajasthan · Desert Forts, Valor & Vibrant Colors",
    desc: "Golden Thar sand dunes, impregnable sandstone hilltop forts, royal Rajput Havelis, and vibrant desert music.",
    traditions: "Ghoomar dance, Kalbelia snake-charmer folklore, Baori stepwell rainwater preservation, Pabuji ki Phad scrolls.",
    festivals: "Pushkar Camel Fair, Desert Festival Jaisalmer, Teej, Gangaur, Jaipur Literature Festival.",
    crafts: "Rajasthani Blue Pottery (GI), Sanganeri Hand Block Print (GI), Thewa Gold Jewelry (GI), Bandhani Tie & Dye.",
    food: "Dal Baati Churma, Gatte ki Sabzi, Ker Sangri desert beans, Ghevar, Laal Maas.",
    music: "Langa and Manganiyar desert folk music, Kamayacha and Sarangi bowed melodies, Maand singing.",
    languages: "Rajasthani, Marwari, Mewari, Shekhawati, Dhundhari.",
    reference: "Rupayan Sansthan Folk Archive & Archaeological Survey of India"
  },
  OD: {
    name: "Odisha",
    badge: "Odisha · Kalinga Architecture & Jagannath Devotion",
    desc: "Sacred realm of the Konark Sun Temple chariot, Jagannath Ratha Yatra, delicate silver filigree, and Odissi classical dance.",
    traditions: "Ratha Yatra chariot construction by hereditary carpenters, Gotipua young male acrobatics, Pattachitra cloth scrolls.",
    festivals: "Jagannath Puri Ratha Yatra, Konark Dance Festival, Bali Yatra (ancient maritime voyage to Bali), Raja Parba.",
    crafts: "Odia Pattachitra (GI), Cuttack Tarakasi Silver Filigree (GI), Pipili Applique Work (GI), Kotpad Handloom.",
    food: "Chhena Poda (baked cottage cheese cake), Dalma (lentil vegetable stew), Khaja of Puri Dham, Rasagola (GI).",
    music: "Odissi Classical Music, Odissi Dance (Tribhanga posture), Sambalpuri folk percussion (Dhol & Nishan).",
    languages: "Classical Odia (One of India's 6 classical languages, 2,000+ years), Santali, Sambalpuri.",
    reference: "National Museum of India & Odisha State Museum Archives"
  },
  UP: {
    name: "Uttar Pradesh",
    badge: "Uttar Pradesh · Gangetic Cradle & Awadhi Synthesis",
    desc: "Land of the sacred Ganga-Yamuna Sangam, Varanasi ghats, Taj Mahal marble elegance, and Hindustani classical ragas.",
    traditions: "Ganga Aarti at Dashashwamedh Ghat, Ramlila of Ramnagar (UNESCO), Guru-Shishya parampara of Benares Gharana.",
    festivals: "Kumbh Mela (World's largest spiritual gathering, UNESCO), Dev Deepawali, Lathmar Holi of Barsana, Eid in Lucknow.",
    crafts: "Varanasi Silk Brocades & Zari (GI), Lucknow Chikankari (GI), Moradabad Brassware (GI), Kannauj Attar Perfumes (GI).",
    food: "Awadhi Dum Biryani, Galouti Kebab, Banarasi Paan, Malaiyo saffron milk foam, Peda of Mathura.",
    music: "Benares Gharana Tabla, Shehnai (Ustad Bismillah Khan), Kathak Classical Dance, Thumri & Dadra.",
    languages: "Hindi, Awadhi, Bhojpuri, Braj Bhasha, Urdu.",
    reference: "Sangeet Natak Akademi & ASI Northern Regional Directorate"
  },
  WB: {
    name: "West Bengal",
    badge: "West Bengal · Bengal Renaissance, Terracotta & Baul Mysticism",
    desc: "Cultural powerhouse of Rabindranath Tagore, terracotta temples of Bishnupur, Durga Puja public art, and Baul mystic singers.",
    traditions: "Adda intellectual salons, Dokra lost-wax bell metal casting, Patua narrative scroll singing, Alpona floor art.",
    festivals: "Durga Puja of Kolkata (UNESCO Representative List), Poila Boishakh, Poush Mela at Santiniketan.",
    crafts: "Bishnupur Baluchari Silk (GI), Dokra Metal Craft (GI), Santiniketan Leather Goods (GI), Sholapith Crafts.",
    food: "Shorshe Ilish (hilsa in mustard), Rossogolla (GI), Mishti Doi, Sandesh, Kolkata Biryani with potato.",
    music: "Rabindra Sangeet, Baul mystical music (Ektara), Chhau acrobatic mask dance of Purulia.",
    languages: "Bengali (Declared Classical Language of India), Santhali, Rajbanshi.",
    reference: "UNESCO Intangible Heritage & Visva-Bharati Santiniketan Archives"
  },
  AS: {
    name: "Assam",
    badge: "Assam · Brahmaputra Valley, Golden Muga & Satriya Culture",
    desc: "Gateway to the Northeast, home to the golden Muga silk, neo-Vaishnavite river island monasteries of Majuli, and Bihu dances.",
    traditions: "Sattriya dance established by Srimanta Sankardeva in 15th-century Satras, Bhaona mythological drama with masks.",
    festivals: "Rongali Bihu (Spring seed festival), Kongali Bihu, Bhogali Bihu (Harvest feast), Ambubachi Mela.",
    crafts: "Assam Golden Muga Silk (GI), Assam Karbi Weaves, Majuli Mask Making, Bell Metal Craft of Sarthebari.",
    food: "Assamese Khaar, Masor Tenga (tangy river fish curry), Pitha rice rolls, Black sticky rice pudding.",
    music: "Bihu Naas rhythmic dance, Tokari Geet spiritual ballads, Dhol and Pepa horn instruments.",
    languages: "Classical Assamese, Bodo (Eighth Schedule), Mising, Karbi.",
    reference: "Srimanta Sankaradeva Kalakshetra & ASI Guwahati Circle"
  },
  GJ: {
    name: "Gujarat",
    badge: "Gujarat · Harappan Maritime Cradle & Vibrant Garba",
    desc: "From the ancient tidal dockyards of Lothal and Dholavira reservoirs to the vibrant 9-night Navratri Garba circle.",
    traditions: "Garba & Dandiya Raas (UNESCO Inscribed), stepwell baori water engineering (Rani ki Vav), Kutch nomadic embroidery.",
    festivals: "Navratri Garba (World's longest dance festival), International Kite Festival (Uttarayan), Rann Utsav.",
    crafts: "Patan Patola Double Ikat (GI), Jamnagar Bandhani (GI), Kutch Embroidery (GI), Sankheda Wooden Furniture (GI).",
    food: "Gujarati Thali (balancing sweet, salty, and sour), Dhokla, Thepla, Undhiyu, Khandvi, Fafda & Jalebi.",
    music: "Sugam Sangeet, Dayro folk storytelling, Shehnai & Dhol beats.",
    languages: "Gujarati, Kutchi, Sindhi.",
    reference: "ASI Western Circle & UNESCO World Heritage Centre"
  },
  MH: {
    name: "Maharashtra",
    badge: "Maharashtra · Sahyadri Forts, Warli Lore & Ganesh Utsav",
    desc: "Land of Chhatrapati Shivaji Maharaj's coastal forts, Ajanta-Ellora basalt rock caves, and vibrant community Ganesh Utsav.",
    traditions: "Warli tribal geometric wall art, Dindi pilgrimage to Pandharpur, Lavani rhythmic folk performances.",
    festivals: "Ganesh Chaturthi (Public festival founded by Lokmanya Tilak), Gudi Padwa, Pola cattle festival.",
    crafts: "Paithani Gold Peacock Sarees (GI), Warli Painting (GI), Kolhapur Leather Footwear (GI), Nashik Copperware.",
    food: "Puran Poli, Misal Pav, Vada Pav, Pithla Bhakri, Modak (steamed jaggery rice dumplings), Malvani seafood.",
    music: "Natya Sangeet (musical theatre), Lavani, Gondhal devotional folklore, Powada warrior ballads.",
    languages: "Marathi (Declared Classical Language of India), Warli, Konkani, Ahirani.",
    reference: "ASI Mumbai Circle & Maharashtra State Archives"
  },
  MP: {
    name: "Madhya Pradesh",
    badge: "Madhya Pradesh · Heart of Bharat, Rock Art & Khajuraho Temples",
    desc: "Cradle of prehistoric Bhimbetka rock paintings, Sanchi Stupa of Ashoka, Chandela carvings of Khajuraho, and Gond tribal arts.",
    traditions: "Gond tribal folklore painting with natural soot and leaf pigments, Bhagoria tribal haats, Malwa courtyard architecture.",
    festivals: "Khajuraho Dance Festival, Tansen Music Samaroh (Gwalior), Lokrang, Mandu Festival.",
    crafts: "Chanderi Handloom Silks (GI), Maheshwari Sarees (GI), Bagh Block Print (GI), Bell Metal of Tikamgarh.",
    food: "Indori Poha & Sev, Bhutte ka Kees, Dal Bafla, Mawa Bati, Malpua.",
    music: "Gwalior Gharana (Oldest Hindustani classical vocal gharana, home of Mian Tansen), Dhrupad.",
    languages: "Hindi, Malvi, Nimadi, Bundeli, Gondi tribal tongue.",
    reference: "Archaeological Survey of India & Bharat Bhavan Cultural Centre"
  },
  ML: {
    name: "Meghalaya",
    badge: "Meghalaya · Abode of Clouds & Living Root Architecture",
    desc: "Home to the wettest places on Earth (Mawsynram/Cherrapunji), matrilineal tribal clans, and living root suspension bridges.",
    traditions: "Jingkieng Jri (Living Root Bridges grown over decades from Ficus elastica aerial roots), Sacred Groves (Law Kyntang).",
    festivals: "Nongkrem Dance Festival (Shad Nongkrem), Wangala 100 Drums Festival of the Garos, Shad Suk Mynsiem.",
    crafts: "Khasi Bamboo & Cane Weaving, Ryndia Eri Silk Handlooms, Clay Pottery of Larnai.",
    food: "Jadoh (rice and aromatic herbs), Dohneiiong (pork with black sesame paste), Tungrymbai fermented beans.",
    music: "Khasi folk songs with Duitara lute, Ka Bom drums, Garo Kotch bamboo flutes.",
    languages: "Khasi (Mon-Khmer linguistic family), Garo (Tibeto-Burman), Pnar.",
    reference: "North-Eastern Hill University & Meghalaya State Museum"
  },
  JK: {
    name: "Jammu & Kashmir",
    badge: "Jammu & Kashmir · Valley of Sages, Pashmina & Chinar",
    desc: "Snow-clad Himalayan peaks, Dal Lake houseboats, ancient Martand Sun Temple ruins, and ultra-fine handloom pashmina weaving.",
    traditions: "Kashmiri Sufiana Kalam, Kangri wickerwork warmth, Chinar wood carving, Ladakh gompa monastic rituals.",
    festivals: "Herath (Kashmiri Shivratri), Hemis Monastery Cham Dance, Baisakhi, Tulip Festival.",
    crafts: "Kashmir Pashmina (GI), Sozni Needle Embroidery (GI), Walnut Wood Carving (GI), Paper Mache (GI), Kani Shawl (GI).",
    food: "Kashmiri Wazwan (Rogan Josh, Gushtaba), Dum Aloo, Nadru Yakhni (lotus stem yogurt curry), Kashmiri Kahwa.",
    music: "Sufiana Kalam, Santoor 100-string hammered dulcimer (Pandit Shivkumar Sharma), Rouf folk dance.",
    languages: "Kashmiri (Koshur), Dogri (Eighth Schedule), Ladakhi, Gojri.",
    reference: "ASI Srinagar Circle & Jammu & Kashmir Cultural Academy"
  },
  PB: {
    name: "Punjab",
    badge: "Punjab · Land of Five Rivers, Gurdwaras & Vibrant Energy",
    desc: "Granary of India, Golden Temple spiritual sanctuary, heroic history of the Khalsa, and high-energy Bhangra harvest dances.",
    traditions: "Langar egalitarian communal dining feeding hundreds of thousands daily without discrimination, Sanjhi folk art.",
    festivals: "Baisakhi (Harvest & Khalsa formation), Lohri winter bonfire, Gurpurab celebrations, Hola Mohalla martial games.",
    crafts: "Phulkari Floral Embroidery (GI), Jalandhar Sports Woodcraft, Amritsari Jutti, Brass Utensils of Jandiala Guru (UNESCO).",
    food: "Makki di Roti & Sarson da Saag, Amritsari Kulcha with Chole, Dal Makhani, Creamy Sweet Lassi, Pinni.",
    music: "Bhangra & Giddha harvest dance, Dhol percussion, Tumbi single-string lute, Gurmat Sangeet raag chanting.",
    languages: "Punjabi (Gurmukhi script roots dating to Guru Angad Dev Ji).",
    reference: "Punjab Heritage Tourism Board & ASI Chandigarh Circle"
  },
  BR: {
    name: "Bihar",
    badge: "Bihar · Ancient Seat of Enlightenment, Nalanda & Mithila Art",
    desc: "Crucible of ancient universities (Nalanda & Vikramashila), Bodhi Tree where the Buddha attained enlightenment, and Mithila paintings.",
    traditions: "Madhubani folk wall painting (drawn on bridal and festival mud walls with twigs), Chhath Puja river worship.",
    festivals: "Chhath Puja (Sacred four-day Vedic sun and water worship), Sonepur Cattle Fair, Buddha Jayanti at Bodh Gaya.",
    crafts: "Madhubani / Mithila Paintings (GI), Bhagalpuri Tussar Silk (GI), Sikki Grass Craft (GI), Manjusha Art.",
    food: "Litti Chokha with roasted gram flour (Sattu) and ghee, Thekua prasad, Khaja of Silao (GI), Sattu Sharbat.",
    music: "Maithili Folk Songs (Vidyapati lore), Bhojpuri folk ballads, Bidesiya folk theatre by Bhikhari Thakur.",
    languages: "Maithili (Eighth Schedule Classical Roots), Bhojpuri, Magahi, Angika.",
    reference: "Nalanda University Archaeological Corpus & Bihar Museum Archives"
  }
};

// Cultural Quiz Questions
const QUIZ_QUESTIONS = [
  {
    question: "Which ancient temple features an 80-tonne monolithic granite cupola capstone hauled up a 4-kilometer earthen incline?",
    options: [
      "Brihadisvara Temple (Thanjavur)",
      "Konark Sun Temple (Odisha)",
      "Kailash Temple (Ellora)",
      "Meenakshi Temple (Madurai)"
    ],
    correctIndex: 0,
    explanation: "The Brihadisvara Temple in Thanjavur, consecrated by Rajaraja Chola I in 1010 CE, features a single 80-tonne granite dome hauled up an inclined earthen ramp extending 4 km."
  },
  {
    question: "What makes the black center spot (Syahi) of Indian Tabla drums musically unique compared to Western drums?",
    options: [
      "It is painted with decorative ink only",
      "It is made of iron filings and starch to tune harmonic overtones",
      "It is carved from a solid bronze disc",
      "It serves only as a visual target for strikes"
    ],
    correctIndex: 1,
    explanation: "The Syahi is made of iron filings, soot, and cooked starch paste. This precise weighted layer dampens non-harmonic overtones, giving Indian drums their bell-like tuned musical pitch."
  },
  {
    question: "Why are traditional South Indian Kolams drawn daily with coarse rice powder rather than synthetic colors?",
    options: [
      "To prevent slippage on wet floors",
      "As 'Bhuta Yajna'—an ecological duty to feed ants, insects, and birds",
      "Because rice flour was the only white substance available",
      "To mark property boundaries between houses"
    ],
    correctIndex: 1,
    explanation: "Kolam drawing is an act of daily compassion called Bhuta Yajna (duty to all living beings). The rice flour nourishes tiny creatures, embodying ecological reverence."
  },
  {
    question: "What bio-engineering material is used by the Khasi people of Meghalaya to create centuries-old Living Root Bridges?",
    options: [
      "Himalayan Birch Bark",
      "Aerial roots of Ficus elastica (Indian Rubber Tree)",
      "Treated Bamboo Canes",
      "Braided Coconut Coir"
    ],
    correctIndex: 1,
    explanation: "Living root bridges are grown by training the pliable aerial roots of Ficus elastica trees across streams using hollowed betel nut trunks as guides."
  },
  {
    question: "In Kathakali dance-drama, what moral quality does bright green (Paccha) facial makeup symbolize?",
    options: [
      "Fierce demon kings and evil hunters",
      "Noble kings, divine heroes, and virtuous gods (Satvik)",
      "Ascetic sages and forest yogis",
      "Comedic tricksters"
    ],
    correctIndex: 1,
    explanation: "In Kathakali, Paccha (bright green) denotes Satvik noble heroes and gods such as Rama, Krishna, and Arjuna, representing supreme moral valor."
  }
];

// Match the Art Form Pairs
const MATCH_PAIRS = [
  { id: 1, type: "art", text: "Madhubani Painting", icon: "🎨", matchKey: "bihar" },
  { id: 2, type: "state", text: "Bihar", icon: "📍", matchKey: "bihar" },
  { id: 3, type: "art", text: "Kathakali Dance", icon: "🎭", matchKey: "kerala" },
  { id: 4, type: "state", text: "Kerala", icon: "📍", matchKey: "kerala" },
  { id: 5, type: "art", text: "Pashmina Shawls", icon: "🧣", matchKey: "kashmir" },
  { id: 6, type: "state", text: "Kashmir", icon: "📍", matchKey: "kashmir" },
  { id: 7, type: "art", text: "Dokra Metal Cast", icon: "🏺", matchKey: "bengal" },
  { id: 8, type: "state", text: "West Bengal", icon: "📍", matchKey: "bengal" }
];

// Cultural Badges Registry
const BADGES_DATA = [
  { id: "temple", icon: "🏛️", name: "Temple Architect", desc: "Explored 5 ancient stone architectural marvels", unlocked: true },
  { id: "raga", icon: "🪕", name: "Raga Maestro", desc: "Synthesized 16-beat Teentaal on virtual Tabla", unlocked: true },
  { id: "rangoli", icon: "✨", name: "Kolam Artisan", desc: "Drawn an 8-fold radial or Pulli Kolam in Heritage Lab", unlocked: true },
  { id: "pottery", icon: "🏺", name: "Master Potter", desc: "Shaped & baked a ceramic clay vase on the wheel", unlocked: true },
  { id: "quiz", icon: "🏆", name: "Quiz Champion", desc: "Scored 100% on the Cultural Quiz Challenge", unlocked: true },
  { id: "map", icon: "🧭", name: "Map Navigator", desc: "Explored all 6 civilizational regions on the map", unlocked: false },
  { id: "guardian", icon: "🛡️", name: "Heritage Guardian", desc: "Documented a local family tradition in Heritage Lab", unlocked: false },
  { id: "avatar", icon: "🕉️", name: "Aruvi Scholar", desc: "Conversed with Aruvi on ancient sciences & mudras", unlocked: false }
];

// --- 2. Web Audio Synthesizer Engine ---

class WebAudioEngine {
  constructor() {
    this.ctx = null;
    this.droneOscs = [];
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBol(type) {
    this.init();
    const t = this.ctx.currentTime;
    switch (type) {
      case 'dha':
        this.synthesizeBayan(t, 95, 62, 0.42);
        this.synthesizeDayan(t, 290, 0.35);
        break;
      case 'dhin':
        this.synthesizeBayan(t, 100, 72, 0.48);
        this.synthesizeDayan(t, 230, 0.32);
        break;
      case 'ta':
      case 'na':
        this.synthesizeDayan(t, 360, 0.22, true);
        break;
      case 'ge':
        this.synthesizeBayan(t, 115, 54, 0.6);
        break;
      default:
        this.synthesizeDayan(t, 280, 0.3);
    }
  }

  synthesizeDayan(time, baseFreq, duration, isRim = false) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = isRim ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(baseFreq * 1.05, time);
    osc.frequency.exponentialRampToValueAtTime(baseFreq, time + 0.05);

    gain.gain.setValueAtTime(isRim ? 0.6 : 0.7, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = baseFreq;
    filter.Q.value = isRim ? 12 : 7;

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + duration);
  }

  synthesizeBayan(time, startFreq, endFreq, duration) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(startFreq, time);
    osc.frequency.exponentialRampToValueAtTime(endFreq, time + duration * 0.75);

    gain.gain.setValueAtTime(0.85, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + duration);
  }

  playTempleBell() {
    this.init();
    const t = this.ctx.currentTime;
    const freqs = [1046, 2093, 3135, 4186];
    freqs.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = f;
      gain.gain.setValueAtTime(0.2 / (i + 1), t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 3.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 3.6);
    });
  }

  toggleTanpuraDrone() {
    this.init();
    if (this.droneOscs.length > 0) {
      this.droneOscs.forEach(o => o.stop());
      this.droneOscs = [];
      return false;
    }
    const t = this.ctx.currentTime;
    const pitches = [138.59, 207.65, 277.18, 277.18 * 1.5];
    pitches.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.value = freq;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 600;

      gain.gain.setValueAtTime(0.04 / (idx + 1), t);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      this.droneOscs.push(osc);
    });
    return true;
  }
}

// --- 3. 3D Monument Hologram / Canvas Inspector Engine ---

class Monument3DViewer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.angleX = 0.3;
    this.angleY = 0.5;
    this.zoom = 1;
    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    this.monumentType = 'konark';
    this.lighting = 'day';

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initEvents();
    this.render();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width * (window.devicePixelRatio || 1);
    this.canvas.height = rect.height * (window.devicePixelRatio || 1);
    this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    this.width = rect.width;
    this.height = rect.height;
  }

  initEvents() {
    this.canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.lastMouseX;
      const dy = e.clientY - this.lastMouseY;
      this.angleY += dx * 0.008;
      this.angleX += dy * 0.008;
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
      this.render();
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.zoom += e.deltaY * -0.001;
      this.zoom = Math.min(Math.max(0.6, this.zoom), 2.2);
      this.render();
    }, { passive: false });

    // Touch
    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.lastMouseX = e.touches[0].clientX;
        this.lastMouseY = e.touches[0].clientY;
      }
    });

    this.canvas.addEventListener('touchmove', (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - this.lastMouseX;
      const dy = e.touches[0].clientY - this.lastMouseY;
      this.angleY += dx * 0.008;
      this.angleX += dy * 0.008;
      this.lastMouseX = e.touches[0].clientX;
      this.lastMouseY = e.touches[0].clientY;
      this.render();
    });

    this.canvas.addEventListener('touchend', () => {
      this.isDragging = false;
    });
  }

  setMonument(type) {
    this.monumentType = type;
    this.render();
  }

  toggleLighting() {
    this.lighting = this.lighting === 'day' ? 'sunset' : (this.lighting === 'sunset' ? 'night' : 'day');
    return this.lighting;
  }

  render() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;

    ctx.clearRect(0, 0, w, h);
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    if (this.lighting === 'day') {
      bgGrad.addColorStop(0, '#0F1A2F');
      bgGrad.addColorStop(1, '#070C16');
    } else if (this.lighting === 'sunset') {
      bgGrad.addColorStop(0, '#2F140A');
      bgGrad.addColorStop(0.5, '#1E101D');
      bgGrad.addColorStop(1, '#080811');
    } else {
      bgGrad.addColorStop(0, '#04070F');
      bgGrad.addColorStop(1, '#020306');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    if (this.lighting === 'night') {
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      for (let i = 0; i < 40; i++) {
        const sx = (Math.sin(i * 99) * 0.5 + 0.5) * w;
        const sy = (Math.cos(i * 33) * 0.5 + 0.5) * h * 0.6;
        ctx.fillRect(sx, sy, 1.5, 1.5);
      }
    }

    ctx.save();
    ctx.translate(w / 2, h / 2 + 30);
    ctx.scale(this.zoom, this.zoom);

    // Ground platform shadow
    ctx.beginPath();
    ctx.ellipse(0, 70, 140, 45, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fill();

    const goldColor = this.lighting === 'sunset' ? '#FF9E42' : '#D4AF37';
    ctx.strokeStyle = goldColor;
    ctx.lineWidth = 2;

    if (this.monumentType === 'konark') {
      this.drawKonarkWheel(ctx);
    } else if (this.monumentType === 'hampi') {
      this.drawHampiChariot(ctx);
    } else if (this.monumentType === 'indus') {
      this.drawIndusBath(ctx);
    } else if (this.monumentType === 'future') {
      this.drawFutureSanctum(ctx);
    } else {
      this.drawThanjavurTemple(ctx);
    }

    ctx.restore();
  }

  drawKonarkWheel(ctx) {
    const rot = this.angleY;
    const r = 90;
    ctx.save();
    ctx.rotate(rot);

    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, r * 0.85, 0, Math.PI * 2);
    ctx.stroke();

    for (let i = 0; i < 8; i++) {
      const a = (i * Math.PI) / 4;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(Math.cos(a) * (r * 0.55), Math.sin(a) * (r * 0.55), 7, 0, Math.PI * 2);
      ctx.fillStyle = '#D4AF37';
      ctx.fill();
    }

    ctx.beginPath();
    ctx.arc(0, 0, 22, 0, Math.PI * 2);
    ctx.fillStyle = '#E85D04';
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    this.drawHotspot(ctx, 0, -r, "Solar Sundial Rim");
    this.drawHotspot(ctx, 0, 0, "Central Magnetic Hub");
  }

  drawHampiChariot(ctx) {
    const rot = this.angleY;
    ctx.save();
    ctx.rotate(rot * 0.4);

    ctx.strokeRect(-90, 10, 180, 45);
    ctx.strokeRect(-75, -35, 150, 45);

    ctx.beginPath();
    ctx.arc(-65, 55, 30, 0, Math.PI * 2);
    ctx.arc(65, 55, 30, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-50, -35);
    ctx.lineTo(0, -110);
    ctx.lineTo(50, -35);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();

    this.drawHotspot(ctx, 0, -110, "Granite Vimana Spire");
    this.drawHotspot(ctx, -65, 55, "Rotatable Stone Wheels");
  }

  drawIndusBath(ctx) {
    const rot = this.angleY;
    ctx.save();
    ctx.rotate(rot * 0.3);

    ctx.strokeRect(-120, -50, 240, 100);
    ctx.strokeRect(-90, -35, 180, 70);
    ctx.strokeRect(-60, -20, 120, 40);

    ctx.beginPath();
    ctx.moveTo(-60, -20);
    ctx.lineTo(-90, -35);
    ctx.moveTo(60, 20);
    ctx.lineTo(90, 35);
    ctx.stroke();
    ctx.restore();

    this.drawHotspot(ctx, 0, 0, "Bitumen Watertight Seal");
    this.drawHotspot(ctx, -100, -45, "Inlet Brick Water Conduits");
  }

  drawThanjavurTemple(ctx) {
    const rot = this.angleY;
    ctx.save();
    ctx.rotate(rot * 0.3);

    ctx.beginPath();
    ctx.moveTo(-90, 60);
    ctx.lineTo(0, -140);
    ctx.lineTo(90, 60);
    ctx.closePath();
    ctx.stroke();

    for (let i = 1; i <= 6; i++) {
      const y = 60 - i * 30;
      const x = 90 - i * 14;
      ctx.beginPath();
      ctx.moveTo(-x, y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(0, -145, 18, 0, Math.PI * 2);
    ctx.fillStyle = '#D4AF37';
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    this.drawHotspot(ctx, 0, -150, "80-Tonne Monolithic Capstone");
    this.drawHotspot(ctx, 0, 30, "Mortarless Granite Interlock");
  }

  drawFutureSanctum(ctx) {
    const rot = this.angleY;
    ctx.save();
    ctx.rotate(rot);

    ctx.strokeStyle = '#38BDF8';
    ctx.lineWidth = 1.5;

    // Outer cybernetic holographic rings
    ctx.beginPath();
    ctx.arc(0, 0, 85, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, 55, 0, Math.PI * 2);
    ctx.stroke();

    // Sacred geometric laser star
    for (let i = 0; i < 6; i++) {
      ctx.rotate((Math.PI * 2) / 6);
      ctx.beginPath();
      ctx.moveTo(0, -85);
      ctx.lineTo(0, 85);
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(0, 0, 16, 0, Math.PI * 2);
    ctx.fillStyle = '#A78BFA';
    ctx.fill();
    ctx.restore();

    this.drawHotspot(ctx, 0, -85, "Neural Point Cloud 3D");
    this.drawHotspot(ctx, 0, 0, "AI Quantum Preservation Core");
  }

  drawHotspot(ctx, x, y, label) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#E85D04';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#FF8533';
    ctx.fill();

    ctx.font = "bold 10px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "#FFF";
    ctx.fillText(label, x + 10, y + 3);
    ctx.restore();
  }
}

// --- 4. Animated Holographic Avatar Canvas Engine ("Aruvi") ---

class HologramAvatar {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.isSpeaking = false;
    this.blinkTimer = 0;
    this.isBlinking = false;
    this.wavePhase = 0;

    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  setSpeaking(state) {
    this.isSpeaking = state;
  }

  animate() {
    this.render();
    requestAnimationFrame(this.animate);
  }

  render() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    ctx.clearRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;
    this.wavePhase += 0.05;

    // Glowing Golden Mandala Halo behind head
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(this.wavePhase * 0.2);

    ctx.beginPath();
    ctx.arc(0, 0, 95, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(212, 175, 55, 0.4)";
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.stroke();

    for (let i = 0; i < 12; i++) {
      ctx.rotate((Math.PI * 2) / 12);
      ctx.beginPath();
      ctx.arc(65, 0, 16, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(232, 93, 4, 0.25)";
      ctx.stroke();
    }
    ctx.restore();

    // Friendly Cyber-Indian Digital Face Base (Aruvi)
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, 65, 0, Math.PI * 2);
    const faceGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 65);
    faceGrad.addColorStop(0, '#233860');
    faceGrad.addColorStop(1, '#0C1527');
    ctx.fillStyle = faceGrad;
    ctx.fill();
    ctx.strokeStyle = "#D4AF37";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Sacred Saffron & Vermilion Tilak (Bindi)
    ctx.beginPath();
    ctx.arc(cx, cy - 25, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#E11D48";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#FF8533";
    ctx.fill();
    ctx.shadowBlur = 0;

    // Glowing Eyes with Blinking
    this.blinkTimer++;
    if (this.blinkTimer > 180) {
      this.isBlinking = true;
      if (this.blinkTimer > 192) {
        this.blinkTimer = 0;
        this.isBlinking = false;
      }
    }

    ctx.fillStyle = "#38BDF8";
    if (this.isBlinking) {
      ctx.fillRect(cx - 28, cy - 5, 18, 2);
      ctx.fillRect(cx + 10, cy - 5, 18, 2);
    } else {
      ctx.beginPath();
      ctx.ellipse(cx - 20, cy - 5, 8, 4, 0, 0, Math.PI * 2);
      ctx.ellipse(cx + 20, cy - 5, 8, 4, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Friendly smiling mouth: Audio-reactive wave if speaking
    if (this.isSpeaking) {
      ctx.beginPath();
      ctx.moveTo(cx - 20, cy + 28);
      for (let x = -20; x <= 20; x += 4) {
        const y = Math.sin(x * 0.4 + this.wavePhase * 4) * 6;
        ctx.lineTo(cx + x, cy + 28 + y);
      }
      ctx.strokeStyle = "#FF8533";
      ctx.lineWidth = 3;
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(cx, cy + 22, 14, 0.2, Math.PI - 0.2);
      ctx.strokeStyle = "#F6D365";
      ctx.lineWidth = 2.5;
      ctx.stroke();
    }

    // Golden Kundal (Earrings)
    ctx.beginPath();
    ctx.arc(cx - 65, cy + 5, 6, 0, Math.PI * 2);
    ctx.arc(cx + 65, cy + 5, 6, 0, Math.PI * 2);
    ctx.fillStyle = "#D4AF37";
    ctx.fill();

    ctx.restore();
  }
}

// --- 5. Heritage Lab: 4 Interactive Studios ---

// Tool 1: Kolam Creator (Radial Symmetry & Pulli Dot Grid modes)
class KolamStudio {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.mode = 'radial'; // 'radial' or 'dot'
    this.currentColor = '#FFFFFF';
    this.isDrawing = false;
    this.folds = 8;
    this.lastX = 0;
    this.lastY = 0;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initEvents();
    this.drawPresetMandala();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width * (window.devicePixelRatio || 1);
    this.canvas.height = rect.width * (window.devicePixelRatio || 1);
    this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    this.width = rect.width;
    this.height = rect.width;
    this.centerX = this.width / 2;
    this.centerY = this.height / 2;
  }

  setMode(m) {
    this.mode = m;
    this.clear();
    if (m === 'dot') this.drawDotGrid();
    else this.drawPresetMandala();
  }

  setColor(c) {
    this.currentColor = c;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    if (this.mode === 'dot') this.drawDotGrid();
  }

  drawDotGrid() {
    this.ctx.save();
    const rows = 7;
    const cols = 7;
    const step = this.width / (cols + 1);

    for (let r = 1; r <= rows; r++) {
      for (let c = 1; c <= cols; c++) {
        this.ctx.beginPath();
        this.ctx.arc(c * step, r * step, 4, 0, Math.PI * 2);
        this.ctx.fillStyle = '#F6D365';
        this.ctx.fill();
      }
    }
    this.ctx.restore();
  }

  initEvents() {
    const getPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const startDraw = (e) => {
      e.preventDefault();
      this.isDrawing = true;
      const pos = getPos(e);
      this.lastX = pos.x;
      this.lastY = pos.y;
    };

    const drawMove = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      const pos = getPos(e);

      if (this.mode === 'radial') {
        this.drawSymmetricLine(this.lastX, this.lastY, pos.x, pos.y);
      } else {
        // Freeform Sikku Kolam curve
        this.ctx.save();
        this.ctx.strokeStyle = this.currentColor;
        this.ctx.lineWidth = 3;
        this.ctx.lineCap = 'round';
        this.ctx.shadowBlur = 6;
        this.ctx.shadowColor = this.currentColor;
        this.ctx.beginPath();
        this.ctx.moveTo(this.lastX, this.lastY);
        this.ctx.lineTo(pos.x, pos.y);
        this.ctx.stroke();
        this.ctx.restore();
      }

      this.lastX = pos.x;
      this.lastY = pos.y;
    };

    const stopDraw = () => {
      this.isDrawing = false;
    };

    this.canvas.addEventListener('mousedown', startDraw);
    this.canvas.addEventListener('mousemove', drawMove);
    window.addEventListener('mouseup', stopDraw);

    this.canvas.addEventListener('touchstart', startDraw, { passive: false });
    this.canvas.addEventListener('touchmove', drawMove, { passive: false });
    window.addEventListener('touchend', stopDraw);
  }

  drawSymmetricLine(x1, y1, x2, y2) {
    const stepAngle = (Math.PI * 2) / this.folds;
    const dx1 = x1 - this.centerX;
    const dy1 = y1 - this.centerY;
    const dx2 = x2 - this.centerX;
    const dy2 = y2 - this.centerY;

    this.ctx.save();
    this.ctx.translate(this.centerX, this.centerY);
    this.ctx.strokeStyle = this.currentColor;
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';
    this.ctx.shadowBlur = 6;
    this.ctx.shadowColor = this.currentColor;

    for (let i = 0; i < this.folds; i++) {
      this.ctx.save();
      this.ctx.rotate(stepAngle * i);

      this.ctx.beginPath();
      this.ctx.moveTo(dx1, dy1);
      this.ctx.lineTo(dx2, dy2);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(dx1, -dy1);
      this.ctx.lineTo(dx2, -dy2);
      this.ctx.stroke();

      this.ctx.restore();
    }
    this.ctx.restore();
  }

  drawPresetMandala() {
    this.clear();
    const colors = ['#D4AF37', '#FF8533', '#10B981', '#FFF'];
    const r = Math.min(this.width, this.height) * 0.35;

    this.ctx.save();
    this.ctx.translate(this.centerX, this.centerY);

    for (let f = 0; f < this.folds; f++) {
      this.ctx.rotate((Math.PI * 2) / this.folds);
      this.ctx.strokeStyle = colors[f % colors.length];
      this.ctx.lineWidth = 2;
      this.ctx.shadowBlur = 5;
      this.ctx.shadowColor = colors[f % colors.length];

      this.ctx.beginPath();
      this.ctx.arc(r * 0.45, 0, r * 0.25, 0, Math.PI * 2);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.arc(r * 0.72, 0, r * 0.14, 0, Math.PI * 2);
      this.ctx.stroke();
    }
    this.ctx.restore();
  }

  saveCreation() {
    const dataUrl = this.canvas.toDataURL('image/png');
    window.heritageApp.saveLabCreation("Sacred Kolam Artwork", "Kolam & Rangoli Studio", dataUrl);
  }
}

// Tool 2: Traditional Pattern Creator (Lattices & Ajrakh blocks)
class PatternStudio {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.motif = 'jaali';
    this.density = 3;
    this.fgColor = '#D4AF37';
    this.bgColor = '#152036';

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.render();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width * (window.devicePixelRatio || 1);
    this.canvas.height = (rect.width * 0.6) * (window.devicePixelRatio || 1);
    this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    this.width = rect.width;
    this.height = rect.width * 0.6;
  }

  setParams(motif, density, fg, bg) {
    if (motif) this.motif = motif;
    if (density) this.density = parseInt(density, 10);
    if (fg) this.fgColor = fg;
    if (bg) this.bgColor = bg;
    this.render();
  }

  render() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;

    ctx.fillStyle = this.bgColor;
    ctx.fillRect(0, 0, w, h);

    const stepX = w / this.density;
    const stepY = h / Math.max(2, Math.round(this.density * 0.6));

    ctx.strokeStyle = this.fgColor;
    ctx.lineWidth = 2.5;

    for (let x = 0; x < w + stepX; x += stepX) {
      for (let y = 0; y < h + stepY; y += stepY) {
        ctx.save();
        ctx.translate(x, y);

        if (this.motif === 'jaali') {
          // Hexagonal Mughal Jaali
          const r = stepX * 0.38;
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const px = Math.cos(angle) * r;
            const py = Math.sin(angle) * r;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(0, 0, r * 0.45, 0, Math.PI * 2);
          ctx.stroke();
        } else if (this.motif === 'ajrakh') {
          // 8-point geometric star block
          const s = stepX * 0.32;
          ctx.strokeRect(-s, -s, s * 2, s * 2);
          ctx.save();
          ctx.rotate(Math.PI / 4);
          ctx.strokeRect(-s, -s, s * 2, s * 2);
          ctx.restore();
          ctx.fillStyle = this.fgColor;
          ctx.beginPath();
          ctx.arc(0, 0, 4, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.motif === 'paisley') {
          // Kalka Paisley
          ctx.beginPath();
          ctx.arc(0, 0, 16, 0.2, Math.PI);
          ctx.quadraticCurveTo(-15, -25, 0, -32);
          ctx.quadraticCurveTo(15, -25, 12, 0);
          ctx.stroke();
        } else {
          // Mughal Floral Jharokha
          ctx.beginPath();
          ctx.arc(0, -10, 20, Math.PI, 0);
          ctx.lineTo(20, 20);
          ctx.lineTo(-20, 20);
          ctx.closePath();
          ctx.stroke();
        }

        ctx.restore();
      }
    }
  }

  saveCreation() {
    const dataUrl = this.canvas.toDataURL('image/png');
    window.heritageApp.saveLabCreation("Mughal Architectural Pattern", "Pattern & Jaali Studio", dataUrl);
  }
}

// Tool 3: Virtual Pottery Wheel Studio
class PotteryStudio {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.glaze = 'terracotta';
    this.wheelRotation = 0;
    this.isDragging = false;
    // 5 radii along the vertical height: [Rim, Neck, Waist, Belly, Base]
    this.radii = [45, 32, 42, 65, 50];

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initEvents();

    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width * (window.devicePixelRatio || 1);
    this.canvas.height = (rect.width * 0.6) * (window.devicePixelRatio || 1);
    this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    this.width = rect.width;
    this.height = rect.width * 0.6;
    this.cx = this.width / 2;
    this.baseY = this.height * 0.78;
  }

  setGlaze(g) {
    this.glaze = g;
  }

  reset() {
    this.radii = [45, 32, 42, 65, 50];
  }

  initEvents() {
    const getPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const handleShape = (pos) => {
      const distFromCenter = Math.abs(pos.x - this.cx);
      // Map vertical position to closest of the 5 radii
      const totalH = 140;
      const topY = this.baseY - totalH;
      const normY = (pos.y - topY) / totalH;
      const index = Math.round(normY * 4);
      if (index >= 0 && index <= 4) {
        this.radii[index] = Math.min(Math.max(20, distFromCenter), 90);
      }
    };

    this.canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      handleShape(getPos(e));
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      handleShape(getPos(e));
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    // Touch
    this.canvas.addEventListener('touchstart', (e) => {
      this.isDragging = true;
      handleShape(getPos(e));
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      if (!this.isDragging) return;
      handleShape(getPos(e));
    }, { passive: false });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });
  }

  animate() {
    this.wheelRotation += 0.08;
    this.render();
    requestAnimationFrame(this.animate);
  }

  render() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;

    ctx.clearRect(0, 0, w, h);

    // Rotating Wheel Head Base (Ellipse)
    ctx.save();
    ctx.translate(this.cx, this.baseY + 10);
    ctx.beginPath();
    ctx.ellipse(0, 0, 110, 24, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#222';
    ctx.fill();
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Wheel spokes spinning
    for (let i = 0; i < 4; i++) {
      const angle = this.wheelRotation + (i * Math.PI) / 2;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(angle) * 110, Math.sin(angle) * 24);
      ctx.strokeStyle = '#444';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    ctx.restore();

    // Clay Vessel Body
    const totalH = 140;
    const topY = this.baseY - totalH;
    const stepH = totalH / 4;

    ctx.save();

    // Glaze Colors
    let colorPrimary = '#C85A32'; // Terracotta
    let colorSecondary = '#7B2E15';
    if (this.glaze === 'jaipur') {
      colorPrimary = '#1E40AF';
      colorSecondary = '#0F266B';
    } else if (this.glaze === 'kutch') {
      colorPrimary = '#EAE3D2';
      colorSecondary = '#A89E88';
    } else if (this.glaze === 'celadon') {
      colorPrimary = '#065F46';
      colorSecondary = '#022C22';
    }

    const grad = ctx.createLinearGradient(this.cx - 70, 0, this.cx + 70, 0);
    grad.addColorStop(0, colorSecondary);
    grad.addColorStop(0.35, colorPrimary);
    grad.addColorStop(0.65, '#FFF');
    grad.addColorStop(0.75, colorPrimary);
    grad.addColorStop(1, colorSecondary);

    ctx.fillStyle = grad;
    ctx.beginPath();

    // Left profile (Bottom to Top)
    ctx.moveTo(this.cx - this.radii[4], this.baseY);
    for (let i = 3; i >= 0; i--) {
      const y = topY + i * stepH;
      ctx.lineTo(this.cx - this.radii[i], y);
    }

    // Top Rim ellipse
    ctx.lineTo(this.cx + this.radii[0], topY);

    // Right profile (Top to Bottom)
    for (let i = 1; i <= 4; i++) {
      const y = topY + i * stepH;
      ctx.lineTo(this.cx + this.radii[i], y);
    }

    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Top Rim Hole
    ctx.beginPath();
    ctx.ellipse(this.cx, topY, this.radii[0], this.radii[0] * 0.28, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#1A0C06';
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  saveCreation() {
    const dataUrl = this.canvas.toDataURL('image/png');
    window.heritageApp.saveLabCreation("Ceramic Hand-Thrown Vase", "Virtual Pottery Studio", dataUrl);
  }
}

// Tool 4: Textile Design Studio
class TextileStudio {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.fabric = 'tussar';
    this.motif = 'peacock';

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initEvents();
    this.drawLoomBase();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width * (window.devicePixelRatio || 1);
    this.canvas.height = (rect.width * 0.6) * (window.devicePixelRatio || 1);
    this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    this.width = rect.width;
    this.height = rect.width * 0.6;
  }

  setFabric(f) {
    this.fabric = f;
    this.drawLoomBase();
  }

  setMotif(m) {
    this.motif = m;
  }

  drawLoomBase() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;

    let baseColor = '#FDF8EC'; // Tussar
    if (this.fabric === 'kanjeevaram') baseColor = '#0F1D38';
    else if (this.fabric === 'khadi') baseColor = '#EDE8DF';
    else if (this.fabric === 'maroon') baseColor = '#450A0A';

    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, w, h);

    // Subtle handloom weave threads (Warp & Weft)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 8) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 8) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Gold Zari Border on top & bottom
    ctx.fillStyle = '#D4AF37';
    ctx.fillRect(0, 0, w, 16);
    ctx.fillRect(0, h - 16, w, 16);
  }

  initEvents() {
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.stampMotif(x, y);
    });
  }

  stampMotif(x, y) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = '#D4AF37';
    ctx.font = '28px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    let icon = '🦚';
    if (this.motif === 'paisley') icon = '🍃';
    else if (this.motif === 'lotus') icon = '🪷';
    else if (this.motif === 'elephant') icon = '🐘';

    ctx.fillText(icon, 0, 0);
    ctx.restore();
  }

  saveCreation() {
    const dataUrl = this.canvas.toDataURL('image/png');
    window.heritageApp.saveLabCreation("Handwoven Zari Brocade", "Textile Design Studio", dataUrl);
  }
}

// --- 6. Master Application Controller Class ---

class Heritage360App {
  constructor() {
    this.audioEngine = new WebAudioEngine();
    this.xp = parseInt(localStorage.getItem('h360_xp') || '1450', 10);
    this.bookmarks = JSON.parse(localStorage.getItem('h360_bookmarks') || '["brihadisvara", "kathakali", "madhubani", "pashmina", "konark", "pongal"]');
    this.savedCreations = JSON.parse(localStorage.getItem('h360_saved_creations') || '[]');
    this.userSubmissions = JSON.parse(localStorage.getItem('h360_user_submissions') || '[]');
    this.currentEra = 'ancient';
    this.currentFacet = 'events';
    this.quizIndex = 0;
    this.quizScore = 0;
    this.selectedMatchCard = null;
    this.matchedCount = 0;
    this.leafletMap = null;

    this.init();
  }

  init() {
    this.initNavigation();
    this.initAvatar();
    this.initTimeTravel();
    this.initLivingMap();
    this.initHeritageLab();
    this.initLearnByDoing();
    this.initDocumentHeritage();
    this.initUserProfile();
    this.updateXpDisplay();
  }

  // --- XP & Gamification ---
  addXp(points, reason = "Mastered cultural achievement") {
    this.xp += points;
    localStorage.setItem('h360_xp', this.xp.toString());
    this.updateXpDisplay();
    this.showToast(`+${points} XP Awarded!`, reason, "🏆");

    if (window.confetti) {
      window.confetti({ particleCount: 60, spread: 70, origin: { y: 0.8 } });
    }
  }

  updateXpDisplay() {
    const navPill = document.getElementById('navXpText');
    const profileVal = document.getElementById('profileXpVal');
    const profileFill = document.getElementById('profileXpFill');

    if (navPill) navPill.textContent = `${this.xp.toLocaleString()} XP`;
    if (profileVal) profileVal.textContent = `${this.xp.toLocaleString()} / 2,000 XP`;
    if (profileFill) {
      const pct = Math.min(100, (this.xp / 2000) * 100);
      profileFill.style.width = `${pct}%`;
    }
  }

  unlockBadge(badgeId) {
    const badge = BADGES_DATA.find(b => b.id === badgeId);
    if (badge && !badge.unlocked) {
      badge.unlocked = true;
      this.addXp(150, `Unlocked Badge: ${badge.name}`);
      this.renderBadges();
    }
  }

  showToast(title, desc, icon = "🎉") {
    const toast = document.getElementById('toastNotice');
    if (!toast) return;
    document.getElementById('toastTitle').textContent = title;
    document.getElementById('toastDesc').textContent = desc;
    document.getElementById('toastIcon').textContent = icon;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3800);
  }

  // --- Navigation & Router ---
  initNavigation() {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          links.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === `#${sectionId}`);
          });
        }
      });
    });

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', () => {
        const isShown = navLinks.style.display === 'flex';
        navLinks.style.display = isShown ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '4.85rem';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#070B14';
        navLinks.style.padding = '1.5rem';
        navLinks.style.borderBottom = '1px solid rgba(212, 175, 55, 0.3)';
      });
    }
  }

  // --- AI Culture Avatar ("Aruvi") ---
  initAvatar() {
    this.avatarHologram = new HologramAvatar('avatarCanvas');
    const sendBtn = document.getElementById('avatarSendBtn');
    const input = document.getElementById('avatarTextInput');
    const micBtn = document.getElementById('micToggleBtn');
    const promptChips = document.querySelectorAll('.suggested-chip');

    const handleSend = () => {
      const text = input.value.trim();
      if (!text) return;
      this.askAvatar(text);
      input.value = '';
    };

    if (sendBtn) sendBtn.addEventListener('click', handleSend);
    if (input) {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
      });
    }

    promptChips.forEach(chip => {
      chip.addEventListener('click', () => {
        this.askAvatar(chip.textContent.trim());
      });
    });

    // Web Speech API Voice Recognition (STT)
    if (micBtn) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        micBtn.addEventListener('click', () => {
          if (micBtn.classList.contains('recording')) {
            recognition.stop();
            micBtn.classList.remove('recording');
          } else {
            const lang = document.getElementById('avatarLangSelect').value || 'en-IN';
            recognition.lang = lang;
            recognition.start();
            micBtn.classList.add('recording');
            this.showToast("Aruvi is Listening...", "Speak your question into your microphone", "🎙️");
          }
        });

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          if (input) input.value = transcript;
          micBtn.classList.remove('recording');
          handleSend();
        };

        recognition.onerror = () => {
          micBtn.classList.remove('recording');
        };
      } else {
        micBtn.addEventListener('click', () => {
          this.showToast("Voice Mode Note", "Browser voice typing simulation active. Type your question!", "ℹ️");
          if (input) input.focus();
        });
      }
    }
  }

  askAvatar(query) {
    const chatHistory = document.getElementById('avatarChatHistory');
    if (!chatHistory) return;

    // Append user message
    const userMsg = document.createElement('div');
    userMsg.className = 'avatar-message user';
    userMsg.textContent = query;
    chatHistory.appendChild(userMsg);
    chatHistory.scrollTop = chatHistory.scrollHeight;

    // Search knowledge response
    const qLower = query.toLowerCase();
    let reply = "";
    let source = "Sangeet Natak Akademi & Archaeological Survey of India";

    if (qLower.includes("temple") || qLower.includes("architecture") || qLower.includes("science")) {
      reply = "Ancient Indian temple architecture (Vastu Shastra & Agama Shastras) is rooted in cosmic geometry (Vastu Purusha Mandala). Temples like Brihadisvara (Thanjavur) were engineered without binding mortar using interlocking granite blocks; their towering vimanas act as acoustic resonators amplifying Vedic mantras, while the sanctum (Garbhagriha) channels geomagnetic earth frequencies.";
      source = "ASI Architectural Monograph & IGNCA Vastu Corpus";
    } else if (qLower.includes("pongal") || qLower.includes("sankranti")) {
      reply = "Pongal and Makar Sankranti celebrate the Uttarayan—the solar transit into Capricorn. In South India, the four-day harvest festival honors the elements: Bhogi (discarding negative mental habits), Surya Pongal (offering overflowing sweet boiled rice and jaggery to the Sun), Mattu Pongal (revering agricultural cattle), and Kaanum Pongal (community kinship).";
      source = "Sahitya Akademi Folk Traditions Archive";
    } else if (qLower.includes("bharatanatyam") || qLower.includes("mudra")) {
      reply = "Bharatanatyam is codified in the ancient Natyashastra. Dancers use 28 single-hand (Asamyuta) and 24 double-hand (Samyuta) mudras to convey complex philosophical epics without a spoken word—from the Pataka (flag/forest) to the Mayura (peacock). Each gesture represents a precise cognitive code synchronized with Carnatic Tala rhythms.";
      source = "Sangeet Natak Akademi Classical Repository";
    } else if (qLower.includes("silk") || qLower.includes("kanjeevaram") || qLower.includes("banarasi")) {
      reply = "Kanjeevaram and Banarasi silks represent the peak of Indian handloom weaving. Kanjeevaram from Tamil Nadu fuses three single silk threads twisted with silver thread dipped in pure 22-carat gold, woven using the interlocking 'Korvai' joint. Banarasi brocades from Varanasi incorporate delicate floral motifs (Kalka) using the Kadwa jacquard technique dating back to the Rigveda.";
      source = "Handlooms Registry of India (GI Certified)";
    } else if (qLower.includes("root bridge") || qLower.includes("meghalaya")) {
      reply = "The Living Root Bridges (Jingkieng Jri) of Meghalaya are grown by the indigenous Khasi and Jaintia tribes over 15 to 30 years using the pliable aerial roots of Ficus elastica trees. Unlike concrete or steel bridges that erode in monsoon torrents, living root bridges become stronger over centuries as the living roots thicken and intertwine!";
      source = "UNESCO Tentative World Heritage Registry";
    } else if (qLower.includes("courtyard") || qLower.includes("muttam") || qLower.includes("aangan")) {
      reply = "Traditional Indian houses feature central open courtyards (known as Aangan in the north, Muttam in Tamil Nadu, and Nadumuttam in Kerala) for climatological intelligence. Warm air naturally rises through the open sky roof, pulling cool air through perimeter shaded verandas, creating natural passive ventilation without electricity!";
      source = "Council of Architecture (Vernacular Studies)";
    } else {
      reply = `Inquiring into '${query}' opens a window into India's living cultural intelligence. Across millennia, our arts, architecture, seasonal foods, and folklore were designed as an interconnected ecosystem honoring nature and cosmic harmony. Explore our Living Map and Heritage Lab to experience this living wisdom!`;
      source = "HERITAGE 360 National Cultural Knowledge Base";
    }

    this.avatarHologram.setSpeaking(true);
    setTimeout(() => {
      const botMsg = document.createElement('div');
      botMsg.className = 'avatar-message bot';
      botMsg.innerHTML = `
        ${reply}
        <div class="avatar-msg-meta">
          <span class="verified-badge" style="font-size: 0.68rem; padding: 0.15rem 0.5rem;">✓ Verified Source: ${source}</span>
          <button class="tts-speaker-btn" onclick="window.heritageApp.speakText(this.parentElement.parentElement.innerText)">
            <span>🔊 Listen</span>
          </button>
        </div>
      `;
      chatHistory.appendChild(botMsg);
      chatHistory.scrollTop = chatHistory.scrollHeight;
      this.speakText(reply);
      this.addXp(15, "Inquired into Indian cultural knowledge with Aruvi");
      this.unlockBadge('avatar');
    }, 550);
  }

  speakText(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/🔊 Listen|✓ Verified Source:.*$/gi, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.95;
    utterance.pitch = 1.05;

    this.avatarHologram.setSpeaking(true);
    utterance.onend = () => this.avatarHologram.setSpeaking(false);
    utterance.onerror = () => this.avatarHologram.setSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }

  // --- Time Travel India ---
  initTimeTravel() {
    this.monumentViewer = new Monument3DViewer('monument3dCanvas');
    const eraTabs = document.querySelectorAll('.era-tab-btn');
    const facetTabs = document.querySelectorAll('.era-facet-btn');
    const monumentTabs = document.querySelectorAll('.monument-tab');
    const lightBtn = document.getElementById('lightToggleBtn');
    const audioBtn = document.getElementById('audioAmbienceBtn');

    eraTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        eraTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.currentEra = tab.dataset.era;
        this.updateEraContent();
        this.addXp(10, `Traveled to ${ERAS_DATA[this.currentEra].name}`);
      });
    });

    facetTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        facetTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.currentFacet = tab.dataset.facet;
        this.updateEraContent();
      });
    });

    monumentTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        monumentTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.monumentViewer.setMonument(tab.dataset.monument);
        document.getElementById('monument3dTitle').textContent = `🏛️ 3D Model: ${tab.textContent}`;
      });
    });

    if (lightBtn) {
      lightBtn.addEventListener('click', () => {
        const l = this.monumentViewer.toggleLighting();
        lightBtn.textContent = l === 'day' ? '☀️ Day Light' : (l === 'sunset' ? '🌅 Sunset Glow' : '🌙 Night Sky');
        this.monumentViewer.render();
      });
    }

    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        const isPlaying = this.audioEngine.toggleTanpuraDrone();
        audioBtn.textContent = isPlaying ? '⏹ Stop Drone' : '🔔 Soundscape';
        audioBtn.classList.toggle('active', isPlaying);
      });
    }

    this.updateEraContent();
  }

  updateEraContent() {
    const era = ERAS_DATA[this.currentEra];
    if (!era) return;

    document.getElementById('eraTitleText').textContent = era.name;
    document.getElementById('eraYearsBadge').textContent = era.period;
    document.getElementById('eraLeadText').textContent = era.lead;

    const list = document.getElementById('eraHighlightsList');
    if (!list) return;
    const items = era.facets[this.currentFacet] || era.facets.events;

    list.innerHTML = items.map(item => `
      <li>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${item}</span>
      </li>
    `).join('');
  }

  // --- Living Heritage Map ---
  initLivingMap() {
    const stateChips = document.querySelectorAll('.map-state-chip');
    const regionPaths = document.querySelectorAll('.region-path');

    stateChips.forEach(chip => {
      chip.addEventListener('click', () => {
        stateChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.displayStateHeritage(chip.dataset.stateCode);
      });
    });

    regionPaths.forEach(path => {
      path.addEventListener('click', () => {
        const reg = path.dataset.region;
        const regionToState = { south: 'TN', north: 'UP', west: 'RJ', east: 'OD', central: 'MP', northeast: 'ML' };
        const code = regionToState[reg] || 'TN';
        this.displayStateHeritage(code);
      });
    });
  }

  displayStateHeritage(stateCode) {
    const data = STATE_HERITAGE[stateCode] || STATE_HERITAGE['TN'];
    document.getElementById('mapStateTitle').textContent = data.name;
    document.getElementById('mapStateBadge').textContent = data.badge;
    document.getElementById('mapStateDesc').textContent = data.desc;
    document.getElementById('stateTraditions').textContent = data.traditions;
    document.getElementById('stateFestivals').textContent = data.festivals;
    document.getElementById('stateCrafts').textContent = data.crafts;
    document.getElementById('stateFood').textContent = data.food;
    document.getElementById('stateMusic').textContent = data.music;
    document.getElementById('stateLanguages').textContent = data.languages;

    this.addXp(15, `Explored Living Heritage of ${data.name}`);
    this.unlockBadge('map');
  }

  bookmarkCurrentHeritage() {
    const title = document.getElementById('mapStateTitle').textContent;
    this.toggleBookmark(title.toLowerCase().replace(/\s+/g, ''));
  }

  toggleBookmark(itemId) {
    const idx = this.bookmarks.indexOf(itemId);
    if (idx > -1) {
      this.bookmarks.splice(idx, 1);
      this.showToast("Bookmark Removed", "Item removed from your Student Portfolio", "⭐");
    } else {
      this.bookmarks.push(itemId);
      this.showToast("Saved to My Heritage!", "Item bookmarked to your User Profile", "⭐");
      this.addXp(25, "Bookmarked living heritage item");
    }
    localStorage.setItem('h360_bookmarks', JSON.stringify(this.bookmarks));
    this.renderBookmarksList();
  }

  // --- Heritage Lab (4 Interactive Studios) ---
  initHeritageLab() {
    this.kolamStudio = new KolamStudio('rangoliCanvas');
    this.patternStudio = new PatternStudio('patternCanvas');
    this.potteryStudio = new PotteryStudio('potteryCanvas');
    this.textileStudio = new TextileStudio('textileCanvas');

    // Switch between 4 creative studios
    const tabBtns = document.querySelectorAll('.lab-tab-btn');
    const kolamBox = document.getElementById('kolamWorkspace');
    const patternBox = document.getElementById('patternWorkspace');
    const potteryBox = document.getElementById('potteryWorkspace');
    const textileBox = document.getElementById('textileWorkspace');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tool = btn.dataset.labTool;

        kolamBox.style.display = tool === 'kolam' ? 'block' : 'none';
        patternBox.style.display = tool === 'pattern' ? 'block' : 'none';
        potteryBox.style.display = tool === 'pottery' ? 'block' : 'none';
        textileBox.style.display = tool === 'textile' ? 'block' : 'none';

        if (tool === 'pattern') this.patternStudio.render();
        if (tool === 'pottery') this.potteryStudio.render();
        if (tool === 'textile') this.textileStudio.drawLoomBase();
      });
    });

    // Tool 1: Kolam controls
    const radialModeBtn = document.getElementById('kolamModeRadialBtn');
    const dotModeBtn = document.getElementById('kolamModeDotBtn');
    if (radialModeBtn && dotModeBtn) {
      radialModeBtn.addEventListener('click', () => {
        radialModeBtn.style.background = 'var(--saffron-primary)';
        radialModeBtn.style.color = '#FFF';
        dotModeBtn.style.background = 'rgba(255,255,255,0.06)';
        dotModeBtn.style.color = '#FFF';
        this.kolamStudio.setMode('radial');
      });
      dotModeBtn.addEventListener('click', () => {
        dotModeBtn.style.background = 'var(--saffron-primary)';
        dotModeBtn.style.color = '#FFF';
        radialModeBtn.style.background = 'rgba(255,255,255,0.06)';
        radialModeBtn.style.color = '#FFF';
        this.kolamStudio.setMode('dot');
      });
    }

    const swatches = document.querySelectorAll('.color-swatch');
    swatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        swatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        this.kolamStudio.setColor(swatch.dataset.color);
      });
    });

    document.getElementById('presetRangoliBtn')?.addEventListener('click', () => this.kolamStudio.drawPresetMandala());
    document.getElementById('clearRangoliBtn')?.addEventListener('click', () => this.kolamStudio.clear());
    document.getElementById('saveKolamBtn')?.addEventListener('click', () => {
      this.kolamStudio.saveCreation();
      this.unlockBadge('rangoli');
    });

    // Tool 2: Pattern controls
    const motifSelect = document.getElementById('patternMotifSelect');
    const densitySelect = document.getElementById('patternDensitySelect');
    const updatePattern = () => {
      this.patternStudio.setParams(motifSelect?.value, densitySelect?.value);
    };
    motifSelect?.addEventListener('change', updatePattern);
    densitySelect?.addEventListener('change', updatePattern);
    document.querySelectorAll('[data-pal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const [fg, bg] = btn.dataset.pal.split(',');
        this.patternStudio.setParams(null, null, fg, bg);
      });
    });
    document.getElementById('savePatternBtn')?.addEventListener('click', () => this.patternStudio.saveCreation());

    // Tool 3: Pottery controls
    document.getElementById('glazeSelect')?.addEventListener('change', (e) => this.potteryStudio.setGlaze(e.target.value));
    document.getElementById('resetPotteryBtn')?.addEventListener('click', () => this.potteryStudio.reset());
    document.getElementById('bakePotteryBtn')?.addEventListener('click', () => {
      this.potteryStudio.saveCreation();
      this.unlockBadge('pottery');
    });

    // Tool 4: Textile controls
    document.getElementById('fabricBaseSelect')?.addEventListener('change', (e) => this.textileStudio.setFabric(e.target.value));
    document.querySelectorAll('[data-stamp]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-stamp]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.textileStudio.setMotif(btn.dataset.stamp);
      });
    });
    document.getElementById('clearTextileBtn')?.addEventListener('click', () => this.textileStudio.drawLoomBase());
    document.getElementById('saveTextileBtn')?.addEventListener('click', () => this.textileStudio.saveCreation());
  }

  saveLabCreation(title, type, dataUrl) {
    const item = {
      id: `art-${Date.now().toString().slice(-4)}`,
      title,
      type,
      dataUrl,
      date: new Date().toLocaleDateString('en-GB')
    };
    this.savedCreations.unshift(item);
    localStorage.setItem('h360_saved_creations', JSON.stringify(this.savedCreations));
    this.addXp(50, `Saved creation: ${title}`);
    this.showToast("Creation Saved!", `${title} archived to your User Profile`, "🎨");
    this.renderSavedCreations();

    // Trigger download
    const link = document.createElement('a');
    link.download = `Heritage360_${title.replace(/\s+/g, '_')}.png`;
    link.href = dataUrl;
    link.click();
  }

  renderSavedCreations() {
    const grid = document.getElementById('savedCreationsGrid');
    const countEl = document.getElementById('profileCreationsCount');
    if (countEl) countEl.textContent = `${this.savedCreations.length} Designs`;
    if (!grid) return;

    if (this.savedCreations.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 1.5rem; color: var(--text-muted); font-size: 0.85rem;">
          No saved creations yet. Go to Future Heritage Lab to draw Kolams, throw pottery, or design textiles!
        </div>
      `;
      return;
    }

    grid.innerHTML = this.savedCreations.map(c => `
      <div class="creation-card">
        <div class="creation-img-thumb">
          <img src="${c.dataUrl}" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div class="creation-body">
          <div class="creation-title">${c.title}</div>
          <div class="creation-date">${c.type} · ${c.date}</div>
        </div>
      </div>
    `).join('');
  }

  // --- Learn by Doing ---
  initLearnByDoing() {
    const gameTabs = document.querySelectorAll('[data-gametab]');
    const quizBox = document.getElementById('quizActivityBox');
    const matchBox = document.getElementById('matchActivityBox');
    const monumentBox = document.getElementById('monumentGameBox');
    const tablaBox = document.getElementById('tablaActivityBox');

    gameTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        gameTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const act = tab.dataset.gametab;

        quizBox.style.display = act === 'quiz' ? 'block' : 'none';
        matchBox.style.display = act === 'match' ? 'block' : 'none';
        monumentBox.style.display = act === 'monument' ? 'block' : 'none';
        tablaBox.style.display = act === 'tabla' ? 'block' : 'none';

        if (act === 'match') this.initMatchGame();
        if (act === 'monument') this.initMonumentGame();
      });
    });

    this.initQuiz();
    this.initTabla();
    this.renderBadges();
  }

  initQuiz() {
    this.renderQuizQuestion();
    const nextBtn = document.getElementById('nextQuizBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.quizIndex++;
        if (this.quizIndex < QUIZ_QUESTIONS.length) {
          this.renderQuizQuestion();
          nextBtn.style.display = 'none';
        } else {
          this.showToast("Quiz Mastered!", `You finished the challenge with ${this.quizScore}/${QUIZ_QUESTIONS.length} correct!`, "🏆");
          this.addXp(250, "Completed Cultural Quiz Challenge");
          this.unlockBadge('quiz');
          this.quizIndex = 0;
          this.quizScore = 0;
          this.renderQuizQuestion();
          nextBtn.style.display = 'none';
        }
      });
    }
  }

  renderQuizQuestion() {
    const q = QUIZ_QUESTIONS[this.quizIndex];
    if (!q) return;

    document.getElementById('quizProgressText').textContent = `Question ${this.quizIndex + 1} of ${QUIZ_QUESTIONS.length}`;
    document.getElementById('quizQuestionTitle').textContent = q.question;
    const feedbackBox = document.getElementById('quizFeedbackBox');
    feedbackBox.classList.remove('show');

    const grid = document.getElementById('quizOptionsGrid');
    if (!grid) return;

    grid.innerHTML = q.options.map((opt, idx) => `
      <button class="quiz-option-btn" data-index="${idx}">
        ${String.fromCharCode(65 + idx)}. ${opt}
      </button>
    `).join('');

    grid.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = parseInt(btn.dataset.index, 10);
        const allBtns = grid.querySelectorAll('.quiz-option-btn');
        allBtns.forEach(b => b.disabled = true);

        if (selected === q.correctIndex) {
          btn.classList.add('correct');
          this.quizScore++;
          this.addXp(50, "Correct quiz answer");
        } else {
          btn.classList.add('incorrect');
          allBtns[q.correctIndex].classList.add('correct');
        }

        document.getElementById('quizFeedbackTitle').textContent = selected === q.correctIndex ? "✓ Correct!" : "Explanation";
        document.getElementById('quizFeedbackText').textContent = q.explanation;
        feedbackBox.classList.add('show');
        document.getElementById('nextQuizBtn').style.display = 'inline-flex';
      });
    });
  }

  initMatchGame() {
    const grid = document.getElementById('matchCardsGrid');
    if (!grid) return;
    this.selectedMatchCard = null;
    this.matchedCount = 0;
    document.getElementById('matchScorePill').textContent = `Matches: 0 / 4`;

    const cards = [...MATCH_PAIRS].sort(() => Math.random() - 0.5);

    grid.innerHTML = cards.map(c => `
      <div class="match-card" data-key="${c.matchKey}" data-type="${c.type}" data-id="${c.id}">
        <span class="match-card-icon">${c.icon}</span>
        <span class="match-card-text">${c.text}</span>
      </div>
    `).join('');

    grid.querySelectorAll('.match-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('matched') || card === this.selectedMatchCard) return;

        if (!this.selectedMatchCard) {
          this.selectedMatchCard = card;
          card.classList.add('selected');
        } else {
          const key1 = this.selectedMatchCard.dataset.key;
          const key2 = card.dataset.key;
          const type1 = this.selectedMatchCard.dataset.type;
          const type2 = card.dataset.type;

          if (key1 === key2 && type1 !== type2) {
            this.selectedMatchCard.classList.remove('selected');
            this.selectedMatchCard.classList.add('matched');
            card.classList.add('matched');
            this.matchedCount++;
            document.getElementById('matchScorePill').textContent = `Matches: ${this.matchedCount} / 4`;
            this.addXp(40, `Matched ${card.innerText.trim()}`);

            if (this.matchedCount === 4) {
              this.showToast("All Pairs Matched!", "You mastered the Art Form geography challenge!", "🎯");
              this.addXp(120, "Completed Match the Art Form challenge");
            }
          } else {
            card.classList.add('selected');
            setTimeout(() => {
              card.classList.remove('selected');
              if (this.selectedMatchCard) this.selectedMatchCard.classList.remove('selected');
              this.selectedMatchCard = null;
            }, 600);
            return;
          }
          this.selectedMatchCard = null;
        }
      });
    });
  }

  initMonumentGame() {
    const clueIcon = document.getElementById('monumentClueIcon');
    const clueDesc = document.getElementById('monumentClueDesc');
    const grid = document.getElementById('monumentOptionsGrid');
    if (!clueDesc || !grid) return;

    clueIcon.textContent = "🪨🛕";
    clueDesc.textContent = "“I am a monolithic temple carved entirely top-to-bottom out of a single vertical basalt cliff at Ellora Caves.”";

    const options = ["Kailash Temple (Ellora)", "Brihadisvara Temple", "Sun Temple Konark", "Khajuraho Temple"];
    grid.innerHTML = options.map((opt, i) => `
      <button class="quiz-option-btn" data-correct="${i === 0}">
        ${String.fromCharCode(65 + i)}. ${opt}
      </button>
    `).join('');

    grid.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const isCorrect = btn.dataset.correct === "true";
        if (isCorrect) {
          btn.classList.add('correct');
          this.showToast("Correct Landmark Identified!", "Kailash Temple (Cave 16) is the largest monolithic rock excavation in the world!", "🏆");
          this.addXp(75, "Identified monolithic monument");
        } else {
          btn.classList.add('incorrect');
        }
      });
    });
  }

  initTabla() {
    const pads = document.querySelectorAll('.tabla-drum');
    pads.forEach(pad => {
      const bol = pad.dataset.bol;
      const play = () => {
        this.audioEngine.playBol(bol);
        pad.classList.add('hit');
        setTimeout(() => pad.classList.remove('hit'), 150);
        this.unlockBadge('raga');
      };
      pad.addEventListener('click', play);
    });

    const teenTaalCycle = ['dha', 'dhin', 'dhin', 'dha', 'dha', 'dhin', 'dhin', 'dha', 'dha', 'ta', 'ta', 'dha', 'dha', 'dhin', 'dhin', 'dha'];
    let loopInterval = null;
    let beatIdx = 0;
    const loopBtn = document.getElementById('playTeentaalBtn');
    const dots = document.querySelectorAll('.beat-dot');

    if (loopBtn) {
      loopBtn.addEventListener('click', () => {
        if (loopInterval) {
          clearInterval(loopInterval);
          loopInterval = null;
          loopBtn.innerHTML = '<span>▶</span> Play Teentaal (16 Beats)';
          dots.forEach(d => d.classList.remove('active'));
        } else {
          this.audioEngine.init();
          loopBtn.innerHTML = '<span>⏹</span> Pause Loop';
          beatIdx = 0;

          loopInterval = setInterval(() => {
            dots.forEach(d => d.classList.remove('active'));
            if (dots[beatIdx]) dots[beatIdx].classList.add('active');

            const bol = teenTaalCycle[beatIdx];
            this.audioEngine.playBol(bol);

            const matchingPad = document.querySelector(`.tabla-drum[data-bol="${bol}"]`);
            if (matchingPad) {
              matchingPad.classList.add('hit');
              setTimeout(() => matchingPad.classList.remove('hit'), 120);
            }

            beatIdx = (beatIdx + 1) % teenTaalCycle.length;
          }, 330);

          this.addXp(30, "Played Teentaal 16-beat cycle");
          this.unlockBadge('raga');
        }
      });
    }
  }

  renderBadges() {
    const grid = document.getElementById('profileBadgesGrid');
    if (!grid) return;

    let unlockedCount = 0;
    grid.innerHTML = BADGES_DATA.map(b => {
      if (b.unlocked) unlockedCount++;
      return `
        <div class="badge-item ${b.unlocked ? 'unlocked' : 'locked'}">
          <div class="badge-icon">${b.icon}</div>
          <div class="badge-name">${b.name}</div>
          <div class="badge-desc">${b.desc}</div>
        </div>
      `;
    }).join('');

    const dashBadgePill = document.getElementById('profileBadgesCount');
    if (dashBadgePill) dashBadgePill.textContent = `${unlockedCount} / ${BADGES_DATA.length}`;
  }

  // --- Heritage Documentation (Document Heritage) ---
  initDocumentHeritage() {
    const form = document.getElementById('documentHeritageForm');
    const startRecBtn = document.getElementById('startVoiceRecBtn');
    const stopRecBtn = document.getElementById('stopVoiceRecBtn');
    const playRecBtn = document.getElementById('playVoiceRecBtn');
    const statusText = document.getElementById('voiceRecorderStatus');

    if (startRecBtn && stopRecBtn && playRecBtn) {
      startRecBtn.addEventListener('click', () => {
        startRecBtn.style.display = 'none';
        stopRecBtn.style.display = 'inline-flex';
        statusText.textContent = "🔴 Recording Oral Lore (Waveform Active)...";
        statusText.style.color = "#EF4444";
      });

      stopRecBtn.addEventListener('click', () => {
        stopRecBtn.style.display = 'none';
        startRecBtn.style.display = 'inline-flex';
        startRecBtn.textContent = '🔄 Re-Record';
        playRecBtn.style.display = 'inline-flex';
        statusText.textContent = "✓ Audio Clip Saved (0:42s)";
        statusText.style.color = "#10B981";
      });

      playRecBtn.addEventListener('click', () => {
        this.audioEngine.playTempleBell();
        this.showToast("Playing Recorded Audio", "Simulating playback of captured elder folklore audio...", "🔊");
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('docTitleInput').value.trim();
        const category = document.getElementById('docCategorySelect').value;
        const state = document.getElementById('docStateSelect').value;
        const community = document.getElementById('docCommunityInput').value.trim();
        const story = document.getElementById('docStoryInput').value.trim();

        // Check required consent
        const fpic = document.getElementById('consentFPIC').checked;
        const license = document.getElementById('consentLicense').checked;
        const sacred = document.getElementById('consentSacred').checked;

        if (!fpic || !license || !sacred) {
          alert("Please confirm all three ethical consent & copyright considerations.");
          return;
        }

        const newSub = {
          id: `sub-${Date.now().toString().slice(-4)}`,
          title,
          category,
          state,
          community,
          story,
          date: new Date().toLocaleDateString('en-GB'),
          status: "Under Verification"
        };

        this.userSubmissions.unshift(newSub);
        localStorage.setItem('h360_user_submissions', JSON.stringify(this.userSubmissions));

        form.reset();
        this.addXp(100, "Documented field heritage record");
        this.unlockBadge('guardian');
        this.showToast("Submission Queued for Verification!", "Your documentation is now in the ASI Scholarly Review pipeline (+100 XP)", "🎉");
      });
    }
  }

  // --- User Profile ---
  initUserProfile() {
    this.renderBookmarksList();
    this.renderSavedCreations();

    const certBtn = document.getElementById('generateCertBtn');
    const certModal = document.getElementById('certModal');
    const closeCertBtn = document.getElementById('closeCertModalBtn');

    if (certBtn) {
      certBtn.addEventListener('click', () => {
        document.getElementById('certStudentName').textContent = "Aarav Sharma";
        certModal.classList.add('open');
        this.addXp(100, "Generated Cultural Ambassador Credential");
      });
    }
    if (closeCertBtn) {
      closeCertBtn.addEventListener('click', () => certModal.classList.remove('open'));
    }
  }

  renderBookmarksList() {
    const list = document.getElementById('profileBookmarksList');
    if (!list) return;
    const badge = document.getElementById('profileBookmarkBadge');
    const dashCount = document.getElementById('profileBookmarksCount');

    if (badge) badge.textContent = `${this.bookmarks.length} Items`;
    if (dashCount) dashCount.textContent = `${this.bookmarks.length} Items`;

    if (this.bookmarks.length === 0) {
      list.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem;">No saved heritage bookmarks yet. Bookmark any state on the Living Map to save!</p>`;
      return;
    }

    list.innerHTML = this.bookmarks.map(item => `
      <div style="background: rgba(11, 17, 32, 0.65); border: 1px solid var(--border-subtle); border-radius: 0.85rem; padding: 0.85rem 1rem; display: flex; align-items: center; justify-content: space-between;">
        <div>
          <div style="font-weight: 700; color: #FFF; font-size: 0.9rem;">${item.toUpperCase()}</div>
          <div style="font-size: 0.75rem; color: var(--gold-accent);">Living Heritage Bookmark</div>
        </div>
        <button class="btn-secondary" style="padding: 0.3rem 0.65rem; font-size: 0.75rem;" onclick="window.location.hash='#map-section'">
          View
        </button>
      </div>
    `).join('');
  }

  openDeepDive(itemId) {
    const modal = document.getElementById('deepDiveModal');
    const titleEl = document.getElementById('deepDiveTitle');
    const bodyEl = document.getElementById('deepDiveBody');
    if (!modal || !bodyEl) return;

    titleEl.textContent = "Brihadisvara Temple (Big Temple)";
    bodyEl.innerHTML = `
      <div style="background: rgba(11, 17, 32, 0.7); padding: 1.25rem; border-radius: 1rem; border: 1px solid var(--border-gold); margin-bottom: 1.5rem;">
        <span class="map-info-badge">Monuments & Forts · Tamil Nadu</span>
        <span class="verified-badge" style="margin-left: 0.5rem;">✓ Verified Source: Archaeological Survey of India (ASI)</span>
        <h4 style="font-family: var(--font-serif); color: #FFF; font-size: 1.25rem; margin: 0.75rem 0 0.5rem;">The Granite Pinnacle of Rajaraja Chola I</h4>
        <p style="color: #E2E8F0; font-size: 0.92rem; line-height: 1.6;">
          Consecrated in 1010 CE, Brihadisvara Temple stands over 216 feet tall, built entirely of interlocking granite blocks without binding mortar. Its apex cupola weighs 80 tonnes and was hauled up an inclined earthen ramp extending over 4 kilometers. The sanctum's acoustic resonance is tuned to amplify Vedic chanting frequencies.
        </p>
      </div>
      <div style="display: flex; justify-content: flex-end; gap: 0.75rem;">
        <button class="btn-secondary" onclick="window.heritageApp.askAvatar('Tell me more about Brihadisvara Temple')">Ask Aruvi</button>
        <button class="btn-primary" onclick="window.heritageApp.toggleBookmark('brihadisvara')">Bookmark to Profile</button>
      </div>
    `;

    modal.classList.add('open');
    document.getElementById('closeDeepDiveModalBtn').onclick = () => modal.classList.remove('open');
  }
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
  window.heritageApp = new Heritage360App();
});
