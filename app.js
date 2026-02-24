/* ============================================
   MINIATURE TOOL PROMPT GENERATOR
   Prompt Engine for Google Flow Banana Pro
   ============================================ */

// ==========================================
// TOOL DATABASE
// ==========================================
const TOOLS = {
    wood: {
        name: 'Potong Kayu',
        icon: '🪚',
        tools: [
            { id: 'chainsaw', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw with a detailed orange and white body, tiny metal chain teeth wrapped around a small guide bar, black rubber grip handle, pull-start cord, visible exhaust port' },
            { id: 'circular_saw', name: 'Circular Saw', emoji: '🔴', desc: 'a miniature circular saw with a spinning silver toothed blade, yellow plastic ergonomic body, trigger grip, blade guard, depth adjustment lever, visible motor housing' },
            { id: 'jigsaw', name: 'Jigsaw', emoji: '⬆️', desc: 'a miniature jigsaw with a thin reciprocating blade, compact body with ergonomic D-handle grip, blade clamp mechanism, speed dial, dust blower port' },
            { id: 'hand_saw', name: 'Hand Saw', emoji: '🪚', desc: 'a miniature hand saw with a shiny steel blade showing fine teeth pattern, wooden handle with brass rivets, slightly worn patina on the blade' },
            { id: 'band_saw', name: 'Band Saw', emoji: '🔲', desc: 'a miniature table-top band saw with a continuous looping blade, metal frame, adjustable guide post, tilting table surface, on/off switch' },
            { id: 'router', name: 'Wood Router', emoji: '🌀', desc: 'a miniature wood router with a spiral bit, clear plastic base plate, dual-handle grip, depth adjustment ring, collet and speed dial' }
        ]
    },
    metal: {
        name: 'Potong Besi',
        icon: '⚙️',
        tools: [
            { id: 'angle_grinder', name: 'Angle Grinder', emoji: '💿', desc: 'a miniature angle grinder with a thin cutting disc, cylindrical motor body, side handle, safety guard over the disc, trigger lock button, sparking contact point' },
            { id: 'plasma_cutter', name: 'Plasma Cutter', emoji: '⚡', desc: 'a miniature plasma cutter torch with a pointed copper nozzle tip, cable attached, trigger mechanism, ceramic shield cup, glowing plasma arc effect at the tip' },
            { id: 'metal_bandsaw', name: 'Metal Band Saw', emoji: '🔲', desc: 'a miniature metal cutting band saw with a bi-metal blade, cast iron frame, vice clamp, coolant port, adjustable blade guide' },
            { id: 'tin_snips', name: 'Tin Snips', emoji: '✂️', desc: 'miniature aviation tin snips with compound leverage handles, colored grip (red for left cut), sharp serrated blades, spring-loaded opening mechanism' },
            { id: 'pipe_cutter', name: 'Pipe Cutter', emoji: '⭕', desc: 'a miniature pipe cutter with a rotating cutting wheel, adjustable jaw, knurled knob for tightening, rollers for smooth rotation around pipe' },
            { id: 'nibbler', name: 'Nibbler', emoji: '🔧', desc: 'a miniature sheet metal nibbler with a punch and die mechanism, compact motor body, curved sheet metal cutting path' }
        ]
    },
    welding: {
        name: 'Alat Las',
        icon: '🔥',
        tools: [
            { id: 'mig_welder', name: 'MIG Welder', emoji: '🔫', desc: 'a miniature MIG welding gun with a contact tip nozzle, wire feed mechanism, trigger, curved goose-neck cable, gas diffuser, visible welding wire protruding from tip' },
            { id: 'tig_welder', name: 'TIG Welder', emoji: '✨', desc: 'a miniature TIG welding torch with a tungsten electrode, ceramic cup/nozzle, gas lens collet body, flexible cable, foot pedal controller nearby' },
            { id: 'arc_welder', name: 'Arc Welder', emoji: '⚡', desc: 'a miniature stick/arc welding electrode holder (stinger) clamping a thin welding rod, insulated jaw grip, heavy cable connection, visible arc glow at the tip' },
            { id: 'welding_torch', name: 'Welding Torch', emoji: '🔥', desc: 'a miniature oxy-acetylene welding torch with dual gas valves (red and green), mixing chamber, interchangeable tip, connected twin hoses' },
            { id: 'soldering_iron', name: 'Soldering Iron', emoji: '🔶', desc: 'a miniature soldering iron with a pointed copper tip, cylindrical heating element, insulated handle, temperature dial, coiled cord' },
            { id: 'spot_welder', name: 'Spot Welder', emoji: '🔴', desc: 'a miniature spot welder with two copper electrode arms, squeeze trigger handle, transformer body, cable connections, tiny weld marks on sample metal' }
        ]
    },
    drilling: {
        name: 'Alat Bor',
        icon: '🔩',
        tools: [
            { id: 'impact_drill', name: 'Impact Drill', emoji: '🔩', desc: 'a miniature impact drill with a hammer mechanism, pistol grip, keyed chuck with drill bit, forward/reverse switch, variable speed trigger, side handle' },
            { id: 'cordless_drill', name: 'Cordless Drill', emoji: '🔋', desc: 'a miniature cordless drill driver with a lithium battery pack, LED work light, magnetic bit holder, torque adjustment collar, two-speed gearbox' },
            { id: 'drill_press', name: 'Drill Press', emoji: '🏗️', desc: 'a miniature bench-top drill press with a vertical column, adjustable table, three-handle feed lever, belt-driven motor head, depth stop, chuck guard' },
            { id: 'core_drill', name: 'Core Drill', emoji: '⭕', desc: 'a miniature core drill with a diamond-tipped hollow cylindrical bit, water feed connection, heavy-duty motor housing, anchor base, depth gauge' },
            { id: 'rotary_hammer', name: 'Rotary Hammer', emoji: '🔨', desc: 'a miniature rotary hammer drill with an SDS-plus chuck, D-handle, mode selector (drill/hammer/chisel), vibration dampening, dust collection port' },
            { id: 'dremel', name: 'Dremel / Rotary Tool', emoji: '🌀', desc: 'a miniature Dremel rotary tool with interchangeable bit, slim cylindrical body, speed dial, collet nut, ventilation slots along the body' }
        ]
    },
    hand: {
        name: 'Alat Tangan',
        icon: '🛠️',
        tools: [
            { id: 'hammer', name: 'Hammer', emoji: '🔨', desc: 'a miniature claw hammer with a polished steel head, curved claw for nail pulling, shock-absorbing fiberglass handle with rubber grip, visible forging marks' },
            { id: 'wrench', name: 'Adjustable Wrench', emoji: '🔧', desc: 'a miniature adjustable wrench with a chrome vanadium jaw, worm gear adjustment wheel, engraved measurement scale, drop-forged steel body' },
            { id: 'pliers', name: 'Combination Pliers', emoji: '🔧', desc: 'miniature combination pliers with serrated flat jaws, wire cutter section, pivot joint, insulated dual-color dipped handles (red and yellow)' },
            { id: 'screwdriver', name: 'Screwdriver Set', emoji: '🪛', desc: 'a miniature Phillips head screwdriver with a magnetized chrome tip, transparent cellulose acetate handle showing internal steel shaft, hex bolster' },
            { id: 'tape_measure', name: 'Tape Measure', emoji: '📏', desc: 'a miniature retractable tape measure with a yellow steel blade, belt clip, blade lock button, rubberized housing, hook end with rivet' },
            { id: 'level', name: 'Spirit Level', emoji: '📐', desc: 'a miniature spirit level with green liquid-filled vials (horizontal and vertical), machined aluminum body, measurement markings, rubber end caps' }
        ]
    },
    food: {
        name: 'Potong Makanan',
        icon: '🍕',
        tools: [
            { id: 'chef_knife', name: 'Pisau Chef', emoji: '🔪', desc: 'a miniature chef knife with a razor-sharp German steel blade, full tang construction, triple-riveted ergonomic handle, visible Damascus pattern on the blade surface' },
            { id: 'bread_knife', name: 'Pisau Roti', emoji: '🍞', desc: 'a miniature serrated bread knife with a long scalloped-edge blade, wooden handle with brass rivets, fine serrated teeth visible along the cutting edge' },
            { id: 'cleaver', name: 'Pisau Daging', emoji: '🥩', desc: 'a miniature meat cleaver with a heavy rectangular stainless steel blade, thick spine for chopping power, wooden handle, visible weight and heft in the design' },
            { id: 'kitchen_scissors', name: 'Gunting Dapur', emoji: '✂️', desc: 'miniature kitchen scissors with micro-serrated blades, bottle opener notch, comfortable soft-grip handles, separable blades for easy cleaning' },
            { id: 'pizza_cutter', name: 'Pemotong Pizza', emoji: '🍕', desc: 'a miniature pizza wheel cutter with a sharp rotating circular blade, ergonomic handle with thumb guard, stainless steel construction, finger guard protection' },
            { id: 'food_processor', name: 'Food Processor', emoji: '🌀', desc: 'a miniature food processor with a clear bowl, S-shaped chopping blade inside, pulse button, motor base unit, locking lid mechanism' }
        ]
    },
    fruits: {
        name: 'Potong Buah',
        icon: '🍉',
        tools: [
            { id: 'fruit_knife', name: 'Pisau Buah', emoji: '🔪', desc: 'a miniature fruit knife with a thin curved paring blade, sharp pointed tip, colorful ergonomic handle, lightweight and precise cutting tool for delicate fruits' },
            { id: 'peeler', name: 'Pengupas Buah', emoji: '🥝', desc: 'a miniature Y-shaped vegetable peeler with a sharp swivel blade, stainless steel construction, rubber-grip handle, ultra-thin peeling capability' },
            { id: 'melon_baller', name: 'Melon Baller', emoji: '🍈', desc: 'a miniature dual-sided melon baller with two different sized scooping spheres, long thin handle, polished stainless steel, sharp cutting edges on the bowl' },
            { id: 'apple_corer', name: 'Apple Corer', emoji: '🍎', desc: 'a miniature apple corer and slicer with radiating blades in a circular frame, center core remover, comfortable grip handles on both sides' },
            { id: 'pineapple_corer', name: 'Pineapple Corer', emoji: '🍍', desc: 'a miniature pineapple corer with a spiral serrated blade, twisting handle mechanism, cylindrical cutting tube, translucent measuring marks' },
            { id: 'mango_slicer', name: 'Mango Slicer', emoji: '🥭', desc: 'a miniature mango splitter with a curved blade designed to cut around the pit, dual comfort-grip handles, stainless steel blade with precise curvature' }
        ]
    },
    vegetables: {
        name: 'Potong Sayuran',
        icon: '🥬',
        tools: [
            { id: 'nakiri', name: 'Pisau Nakiri', emoji: '🔪', desc: 'a miniature Japanese Nakiri vegetable knife with a flat rectangular blade, thin edge for precise vegetable cutting, wooden magnolia handle, beautiful Damascus steel pattern' },
            { id: 'mandoline', name: 'Mandoline Slicer', emoji: '📏', desc: 'a miniature mandoline slicer with an adjustable blade platform, julienne attachment, hand guard, stainless steel frame, folding legs for stability' },
            { id: 'herb_scissors', name: 'Gunting Herbal', emoji: '🌿', desc: 'miniature 5-blade herb scissors with multiple parallel blades for fine chopping, comfortable grip handles, stainless steel multi-blade construction' },
            { id: 'julienne_peeler', name: 'Julienne Peeler', emoji: '🥕', desc: 'a miniature julienne peeler with fine teeth creating matchstick-thin strips, sharp stainless blade, ergonomic swivel handle, ultra-precise cutting teeth' },
            { id: 'chopper', name: 'Vegetable Chopper', emoji: '🫑', desc: 'a miniature press-down vegetable chopper with a grid blade insert, container base, push-down lid mechanism, interchangeable blade grids for different cut sizes' },
            { id: 'santoku', name: 'Pisau Santoku', emoji: '🔪', desc: 'a miniature Santoku knife with a wide blade featuring Granton edge dimples, sheep-foot tip, balanced weight distribution, pakkawood handle with mosaic pin' }
        ]
    },
    drinks: {
        name: 'Potong Botol',
        icon: '🍶',
        tools: [
            { id: 'bottle_cutter', name: 'Bottle Cutter', emoji: '🔄', desc: 'a miniature bottle cutting jig with a scoring wheel, adjustable guide rails, rotating platform, sharp carbide scoring tip, precision alignment mechanism' },
            { id: 'glass_cutter', name: 'Diamond Glass Cutter', emoji: '💎', desc: 'a miniature diamond-tipped glass cutter with a pencil-style body, diamond chip cutting point, oil reservoir, scored line guide, precision grip' },
            { id: 'wire_saw', name: 'Wire Saw', emoji: '〰️', desc: 'a miniature diamond wire saw with a thin abrasive wire, two ring handles, flexible cutting line capable of cutting through glass and ceramic materials' },
            { id: 'rotary_glass', name: 'Dremel Glass Bit', emoji: '🌀', desc: 'a miniature rotary tool with a diamond-coated cutting disc attachment, variable speed control, precision for cutting glass bottles cleanly' },
            { id: 'bottle_breaker', name: 'Bottle Scorer', emoji: '⚡', desc: 'a miniature bottle scoring tool with an adjustable clamp, sharp scoring wheel, spring-loaded mechanism, creates perfect score lines around glass bottles' },
            { id: 'heat_cutter', name: 'Hot Wire Cutter', emoji: '🔥', desc: 'a miniature electrically heated wire cutting tool with nichrome wire element, temperature control dial, insulated handles, for thermal stress cutting of glass' }
        ]
    },
    shoes: {
        name: 'Potong Sepatu',
        icon: '👟',
        tools: [
            { id: 'leather_knife', name: 'Pisau Kulit', emoji: '🔪', desc: 'a miniature leather cutting skiving knife with an angled razor blade, wooden handle, ultra-sharp edge for precise leather and rubber sole cutting' },
            { id: 'shoe_scissors', name: 'Gunting Sepatu', emoji: '✂️', desc: 'miniature heavy-duty shears with thick reinforced blades designed for cutting through leather, rubber, and fabric shoe materials, spring handle mechanism' },
            { id: 'rotary_cutter', name: 'Rotary Cutter', emoji: '🔴', desc: 'a miniature rotary fabric and leather cutter with a sharp circular blade, safety guard, ergonomic handle, blade lock, perfect for cutting shoe materials' },
            { id: 'hot_knife_shoe', name: 'Hot Knife', emoji: '🔥', desc: 'a miniature electrically heated cutting knife with a temperature-controlled blade, designed for cutting through synthetic shoe materials and rubber soles cleanly' },
            { id: 'band_knife_shoe', name: 'Band Knife', emoji: '⬆️', desc: 'a miniature band knife splitting machine with a continuous loop blade, adjustable thickness guide, for splitting leather and shoe sole materials' },
            { id: 'die_cutter', name: 'Die Cutter', emoji: '⬇️', desc: 'a miniature hydraulic die cutting press with custom-shaped cookie-cutter dies, for stamping out precise shoe pattern pieces from leather and fabric' }
        ]
    },
    toycar: {
        name: 'Potong Mobil-Mobilan',
        icon: '🚗',
        tools: [
            { id: 'mini_saw', name: 'Gergaji Mini', emoji: '🪚', desc: 'a miniature hobby razor saw with ultra-fine teeth, thin kerf blade, ergonomic handle, designed for precise cutting of plastic and die-cast toy car models' },
            { id: 'dremel_toy', name: 'Dremel Cutting', emoji: '🌀', desc: 'a miniature Dremel rotary tool with a thin reinforced cutting disc, variable speed, perfect for sectioning die-cast metal and plastic toy cars' },
            { id: 'plastic_cutter', name: 'Plastic Cutter', emoji: '📐', desc: 'a miniature plastic scribing and cutting tool with a hooked blade, straight edge guide, for scoring and snapping plastic toy car body panels' },
            { id: 'hot_wire_toy', name: 'Hot Wire Cutter', emoji: '🔥', desc: 'a miniature electrically heated wire cutter with a taut nichrome wire, temperature dial, for melting through plastic toy car bodies smoothly' },
            { id: 'hacksaw_mini', name: 'Hacksaw Mini', emoji: '🪚', desc: 'a miniature junior hacksaw with a fine-toothed blade, adjustable tension frame, for cutting through die-cast metal toy car chassis and axles' },
            { id: 'cutting_pliers', name: 'Cutting Pliers', emoji: '✂️', desc: 'miniature precision flush-cut side cutters with hardened steel jaws, spring-loaded handles, for snipping plastic sprues and toy car parts cleanly' }
        ]
    },
    bustayo: {
        name: 'Potong Bus Tayo',
        icon: '🚌',
        tools: [
            { id: 'tayo_saw', name: 'Gergaji Mainan', emoji: '🪚', desc: 'a miniature fine-tooth hobby saw with a razor-thin blade, designed for cutting through the iconic blue plastic body of Bus Tayo toy models' },
            { id: 'tayo_dremel', name: 'Dremel Tayo', emoji: '🌀', desc: 'a miniature rotary tool with a diamond-coated cutting wheel, precision speed control, for sectioning Bus Tayo plastic bus body with smooth edges' },
            { id: 'tayo_snips', name: 'Plastic Snips', emoji: '✂️', desc: 'miniature precision plastic cutting snips with fine pointed tips, spring mechanism, for carefully cutting around Bus Tayo features and windows' },
            { id: 'tayo_blade', name: 'Hobby Blade', emoji: '🔪', desc: 'a miniature #11 hobby/X-Acto blade with a pointed scalpel tip, aluminum handle, ultra-sharp for detailed cutting of Bus Tayo toy bus plastic shell' },
            { id: 'tayo_wire', name: 'Hot Wire', emoji: '🔥', desc: 'a miniature hot wire foam and plastic cutter, thin heated nichrome element, adjustable power, melts cleanly through Bus Tayo blue plastic body' },
            { id: 'tayo_laser', name: 'Laser Engraver', emoji: '⚡', desc: 'a miniature desktop laser engraver/cutter with focused beam, for precisely cutting and etching patterns on Bus Tayo toy bus surfaces' }
        ]
    },
    sprunki: {
        name: 'Potong Boneka Sprunki',
        icon: '🧸',
        tools: [
            { id: 'sprunki_scissors', name: 'Gunting Jahit', emoji: '✂️', desc: 'miniature fabric scissors with sharp pointed blades, for cutting through Sprunki doll plush fabric body, felt material, and stuffing with precision' },
            { id: 'sprunki_knife', name: 'Craft Knife', emoji: '🔪', desc: 'a miniature precision craft knife with a replaceable blade, for carefully slicing open Sprunki doll seams and revealing the colorful cotton stuffing inside' },
            { id: 'sprunki_rotary', name: 'Rotary Cutter', emoji: '🔴', desc: 'a miniature rotary fabric cutter with a circular blade, safety guard, for smoothly cutting through Sprunki plush doll fabric layers' },
            { id: 'sprunki_seam', name: 'Seam Ripper', emoji: '🪡', desc: 'a miniature seam ripper with a tiny hook blade and red ball tip, for unpicking stitched seams on Sprunki character dolls, revealing inner construction' },
            { id: 'sprunki_laser', name: 'Laser Cutter', emoji: '⚡', desc: 'a miniature CO2 laser cutter creating a precise beam cutting through Sprunki doll material, glowing cut line, clean edges on the plush fabric' },
            { id: 'sprunki_hot', name: 'Hot Cutter', emoji: '🔥', desc: 'a miniature heated blade tool for thermally cutting through Sprunki synthetic plush material, melted sealed edges, controlled temperature dial' }
        ]
    },
    superhero: {
        name: 'Potong Superhero',
        icon: '🦸',
        tools: [
            { id: 'laser_sword', name: 'Laser Sword', emoji: '⚔️', desc: 'a miniature precision hobby saw shaped like a futuristic sword hilt, with a thin replaceable razor blade, metallic silver and black handle grip, for cleanly slicing through collectible action figures' },
            { id: 'plasma_blade', name: 'Plasma Blade', emoji: '⚡', desc: 'a miniature industrial plasma cutting pen with a fine ceramic nozzle tip, compact gas canister, trigger button, sci-fi styled handle, for precision cutting collectible figurines' },
            { id: 'power_saw_hero', name: 'Power Saw Mini', emoji: '🪚', desc: 'a miniature high-speed circular saw with reinforced blade, designed for sectioning through detailed collectible action figure plastic and rubber materials' },
            { id: 'diamond_blade', name: 'Diamond Blade', emoji: '💎', desc: 'a miniature diamond-encrusted cutting disc with ultra-hard edge, precision arbor mount, for cleanly slicing through premium collectible figures' },
            { id: 'ultra_cutter', name: 'Ultra Cutter', emoji: '🔴', desc: 'a miniature ultrasonic cutting tool using high-frequency vibrations, creates impossibly clean cuts through collectible figure materials without melting' },
            { id: 'hero_guillotine', name: 'Guillotine Cutter', emoji: '⬇️', desc: 'a miniature precision guillotine-style paper and plastic cutter with a lever-action blade, safety guard, base plate with alignment grid' }
        ]
    },
    anomaly: {
        name: 'Potong Anomali',
        icon: '👾',
        tools: [
            { id: 'anomaly_chainsaw', name: 'Chainsaw Anomali', emoji: '🪚', desc: 'a miniature gas-powered chainsaw with a short guide bar, sharp cutting chain with micro teeth, pull-start recoil cord, compact engine housing, exhaust port, chain tensioner knob, designed for cutting through anomaly figurines' },
            { id: 'anomaly_laser', name: 'Laser Anomali', emoji: '⚡', desc: 'a miniature CO2 laser cutting pen with a focused beam lens, compact power unit, on/off safety switch, precision nozzle tip, for slicing anomaly character figures with clean edges' },
            { id: 'anomaly_blade', name: 'Blade Dimensi', emoji: '🌀', desc: 'a miniature oscillating multi-tool with a flat plunge-cut blade, quick-change blade mount, variable speed dial, ergonomic body, for precision cutting through anomaly figures' },
            { id: 'anomaly_saw', name: 'Gergaji Portal', emoji: '🔮', desc: 'a miniature coping saw with a thin spiral blade held in a C-shaped steel frame, wooden handle, adjustable blade tension, for intricate cutting of anomaly character collectibles' },
            { id: 'anomaly_plasma', name: 'Plasma Distorsi', emoji: '💜', desc: 'a miniature handheld plasma torch cutter with a copper nozzle, compressed air connection, trigger mechanism, ground clamp cable, for sectioning anomaly figures with melted edges' },
            { id: 'anomaly_sonic', name: 'Sonic Disruptor', emoji: '🔊', desc: 'a miniature ultrasonic cutting knife with a vibrating titanium blade, piezoelectric transducer, power cord, frequency control dial, for cleanly cutting anomaly figures at high precision' }
        ]
    }
};

// ==========================================
// SCENE / OPTIONS DATA
// ==========================================
const BACKGROUNDS = {
    workshop: 'a cluttered wooden workbench in a rustic workshop, sawdust scattered on the surface, various tools hanging on a pegboard wall in the background, warm ambient lighting from overhead industrial lamps',
    forest: 'a moss-covered tree trunk in a lush green forest, dappled sunlight filtering through leaves, ferns and small plants in soft bokeh background, earthy natural atmosphere',
    metalshop: 'a steel work table in a professional metal fabrication shop, metal shavings on the surface, industrial equipment in blurred background, fluorescent overhead lighting',
    outdoor: 'an outdoor construction site with gravel ground, partially built structure in the background, blue sky with scattered clouds, natural midday sun',
    studio: 'a clean seamless dark gray studio backdrop, professional product photography setup, controlled lighting, minimalist aesthetic, no distractions',
    construction: 'a raw concrete floor at a busy construction site, steel rebar and building materials in the background, safety equipment visible, dusty industrial atmosphere',
    garden: 'a wooden garden table surrounded by plants and flowers, garden gloves and pots visible, natural green environment, pleasant outdoor setting'
};

const LIGHTING = {
    natural: 'illuminated by soft natural daylight from a nearby window, creating gentle shadows and natural color rendition, diffused ambient light',
    studio: 'lit with professional studio lighting setup — key light, fill light, and rim light — creating clean highlights, controlled shadows, and product-photography-quality illumination',
    golden: 'bathed in warm golden hour sunlight with long soft shadows, amber-tinted atmospheric glow, romantic and cinematic quality',
    dramatic: 'lit by a single dramatic side light creating strong contrast between light and shadow, moody chiaroscuro effect, theatrical intensity',
    warm: 'illuminated by warm tungsten incandescent light, cozy yellow-orange tones, intimate workshop atmosphere, visible warm color temperature',
    cold: 'lit by cool blue-tinted LED or fluorescent light, modern clinical feel, high-contrast shadows, technical aesthetic'
};

const HAND_POSITIONS = {
    pinch: 'delicately held between the thumb and index finger in a pinch grip, showing the extreme contrast between the large realistic human fingers and the impossibly tiny yet perfectly detailed tool',
    palm: 'resting in the center of an open palm, the hand slightly cupped to cradle the miniature tool, visible life lines and skin texture on the palm providing scale reference',
    fingertip: 'balanced carefully on the tip of a single index finger, the tool so small it barely covers the fingernail, demonstrating incredible miniaturization',
    twohand: 'held gently between two hands as if presenting a precious artifact, both thumbs and forefingers carefully positioning the tiny tool, reverent handling',
    table: 'placed on a flat surface next to a human hand for scale comparison, the fingers resting beside the tiny tool, emphasizing its minuscule size',
    comparison: 'placed next to a coin (quarter dollar) for dramatic scale comparison, the miniature tool roughly the same size as the coin, sharp focus on both objects'
};

const BRANDS = {
    stihl: { name: 'STIHL', colors: 'iconic STIHL brand orange and white color scheme, with the STIHL logo clearly visible on the body' },
    dewalt: { name: 'DeWalt', colors: 'signature DeWalt black and yellow color scheme, with the DeWalt logo embossed on the housing' },
    makita: { name: 'Makita', colors: 'distinctive Makita teal/aqua blue color with black accents, Makita branding visible' },
    bosch: { name: 'Bosch', colors: 'Bosch blue professional color with red accents, Bosch logo printed on the tool body' },
    milwaukee: { name: 'Milwaukee', colors: 'Milwaukee red and black color scheme, FUEL branding and Milwaukee logo visible' },
    hilti: { name: 'Hilti', colors: 'Hilti red and black industrial color scheme, Hilti logo and model number printed on housing' },
    generic: { name: 'Generic', colors: 'a neutral industrial color scheme with metallic and matte black finishes, no specific brand markings' }
};

const DETAIL_LEVELS = {
    standard: 'sharp focus, high resolution, intricate details visible on the tool surface, 85mm lens equivalent',
    macro: 'extreme macro photography, incredible close-up detail showing every microscopic texture, material grain, tiny imperfections, and manufacturing marks, shallow depth of field, 100mm macro lens',
    closeup: 'close-up shot filling the frame, medium depth of field, every component of the tool clearly visible and identifiable, 50mm lens equivalent',
    wide: 'slightly wider environmental shot showing the tool in context with its surroundings, moderate depth of field, establishing the scene, 35mm lens equivalent'
};

const CONDITIONS = {
    new: 'brand new condition, pristine factory finish, glossy surfaces, clean sharp edges, untouched and perfect, fresh out of the box',
    used: 'showing signs of regular use, minor scratches and scuffs, slight paint wear on edges, authentic workshop patina, well-maintained but clearly worked with',
    vintage: 'vintage antique aesthetic, aged patina, slightly faded colors, retro design features, collectible quality, signs of careful preservation',
    weathered: 'heavily weathered and worn, rust spots, chipped paint, dented surfaces, exposed bare metal where paint has flaked, telling a story of years of hard use'
};

// ==========================================
// GLOVE TYPES
// ==========================================
const GLOVES = {
    bare: {
        name: 'Tangan Kosong',
        desc: 'bare human hands with visible dirt, grease stains, and grime under the fingernails, calloused fingertips from heavy work, small cuts and scratches on the knuckles, realistic weathered working hands with embedded workshop dirt, oil smudges on the palms'
    },
    leather: {
        name: 'Sarung Tangan Kulit',
        desc: 'wearing thick leather work gloves that are visibly worn and dirty — scuffed brown leather surface with dark grease stains, frayed stitching on the fingertips, dried mud and sawdust embedded in the creases, sweat-darkened wrist area, authentic well-used work gloves'
    },
    rubber: {
        name: 'Sarung Tangan Karet',
        desc: 'wearing industrial rubber gloves with a textured grip surface, streaked with oil and chemical residue, slightly dusty with fine powder coating, yellowed from use, small tears and worn spots at the fingertips revealing the inner lining'
    },
    welding: {
        name: 'Sarung Tangan Las',
        desc: 'wearing heavy-duty welding gauntlet gloves made of thick heat-resistant leather, blackened and scorched from welding sparks, metal spatter marks dotting the surface, the long cuff protecting the forearm, burn holes and char marks showing extensive use'
    },
    nitrile: {
        name: 'Sarung Tangan Mekanik',
        desc: 'wearing fitted black nitrile mechanic gloves smeared with dark engine grease and motor oil, the thin material conforming tightly to the hand shape, fingertips stained and worn thin, smudges of metal dust and lubricant on the palms'
    },
    cotton: {
        name: 'Sarung Tangan Katun',
        desc: 'wearing white cotton work gloves that have turned grayish-brown from dirt and use, PVC dot grip pattern on the palms partially worn away, fraying at the wrist elastic, sawdust particles clinging to the fabric, visible soil stains'
    }
};

// ==========================================
// MATERIAL / TARGET OBJECTS
// ==========================================
const MATERIALS = {
    wood: {
        label: 'Jenis Kayu / Objek',
        items: [
            { id: 'oak_log', name: 'Batang Kayu Oak', emoji: '🪵', desc: 'a tiny miniature oak tree log with rough bark texture, visible microscopic growth rings on the cut surface, minuscule mossy patches, small enough to fit on a fingertip' },
            { id: 'pine_plank', name: 'Papan Kayu Pinus', emoji: '🪵', desc: 'a tiny miniature pine wood plank with visible fine grain pattern, natural yellowish tone, freshly sanded surface, scaled down to match the miniature tool' },
            { id: 'bamboo', name: 'Bambu', emoji: '🎋', desc: 'a tiny miniature green bamboo pole with visible nodes and hollow interior, smooth outer skin, proportionally small like a toothpick-sized bamboo' },
            { id: 'plywood', name: 'Plywood / Triplek', emoji: '📋', desc: 'a tiny miniature sheet of layered plywood showing multiple hair-thin wood veneer layers on the edge, flat smooth surface, coin-sized' },
            { id: 'mahogany', name: 'Kayu Mahoni', emoji: '🟤', desc: 'a tiny miniature dark reddish-brown mahogany timber block with beautiful deep grain, polished finish, premium hardwood scaled to dollhouse size' },
            { id: 'teak', name: 'Kayu Jati', emoji: '🪵', desc: 'a tiny miniature piece of teak wood with golden-brown color, tight grain pattern, natural oil sheen, scaled down proportionally to the miniature tool' },
            { id: 'driftwood', name: 'Kayu Apung', emoji: '🌊', desc: 'a tiny miniature piece of weathered driftwood, bleached by sun and salt water, smooth organic shapes, pale gray tone, small enough to rest on a coin' },
            { id: 'tree_branch', name: 'Dahan Pohon', emoji: '🌿', desc: 'a tiny miniature tree branch, green bark, microscopic leaves sprouting, tiny sap droplet visible at cut point, twig-sized' }
        ]
    },
    metal: {
        label: 'Jenis Logam / Objek',
        items: [
            { id: 'steel_pipe', name: 'Pipa Besi', emoji: '🔧', desc: 'a tiny miniature round steel pipe with industrial galvanized coating, threaded end, visible micro weld seam along the length, pencil-thin diameter' },
            { id: 'iron_plate', name: 'Plat Besi', emoji: '🔲', desc: 'a tiny miniature flat iron plate with mill scale surface, raw industrial edges, scaled down to stamp-sized, proportional to the miniature tool' },
            { id: 'rebar', name: 'Besi Beton / Rebar', emoji: '🏗️', desc: 'a tiny miniature ribbed steel reinforcement rebar with characteristic spiral ridge pattern, rusty surface, needle-thin construction material' },
            { id: 'aluminum_sheet', name: 'Lembaran Aluminium', emoji: '✨', desc: 'a tiny miniature shiny aluminum sheet with reflective silver surface, lightweight, slight flex visible, coin-sized piece' },
            { id: 'copper_pipe', name: 'Pipa Tembaga', emoji: '🟤', desc: 'a tiny miniature copper pipe with warm reddish-brown color, green patina developing, smooth polished exterior, straw-thin diameter' },
            { id: 'stainless_steel', name: 'Stainless Steel', emoji: '🪞', desc: 'a tiny miniature piece of stainless steel with mirror-like polished surface, fingerprint-resistant, scaled down to match the miniature tool' },
            { id: 'chain', name: 'Rantai Besi', emoji: '⛓️', desc: 'a tiny miniature iron chain with interlocking oval links, galvanized coating, each link the size of a grain of rice' },
            { id: 'angle_iron', name: 'Besi Siku', emoji: '📐', desc: 'a tiny miniature L-shaped angle iron with 90-degree bend, hot-rolled steel, visible mill scale, micro holes drilled at intervals' }
        ]
    },
    welding: {
        label: 'Objek yang Dilas',
        items: [
            { id: 'steel_joint', name: 'Sambungan Baja', emoji: '🔗', desc: 'two tiny miniature steel plates being joined at a butt joint, visible micro weld bead forming, heat-affected zone glowing orange, scaled down proportionally' },
            { id: 'pipe_connection', name: 'Sambungan Pipa', emoji: '🔧', desc: 'two tiny miniature steel pipes being welded together at a T-joint, circular micro weld path, filler material melting into joint, straw-thin pipes' },
            { id: 'frame_structure', name: 'Rangka Besi', emoji: '🏗️', desc: 'a tiny miniature metal frame structure with square tubes being welded at corners, minuscule tack welds visible, dollhouse-scale framework' },
            { id: 'car_panel', name: 'Panel Mobil', emoji: '🚗', desc: 'a tiny miniature automotive body panel being spot-welded, thin sheet metal repair at toy car scale' },
            { id: 'gate_fence', name: 'Pagar / Gerbang', emoji: '🚪', desc: 'tiny miniature decorative iron fence bars being welded to a frame, microscopic ornamental metalwork, intricate scrollwork details at miniature scale' },
            { id: 'bracket', name: 'Bracket / Siku', emoji: '📐', desc: 'a tiny miniature metal bracket being fillet-welded to a base plate, small structural support element, clean right angle, fingernail-sized' },
            { id: 'exhaust_pipe', name: 'Knalpot / Exhaust', emoji: '💨', desc: 'a tiny miniature stainless steel exhaust pipe being TIG welded, hair-thin wall material, precise heat control at microscopic scale' },
            { id: 'artistic_sculpture', name: 'Patung / Sculpture', emoji: '🎨', desc: 'a tiny miniature artistic metal sculpture being assembled from various welded metal pieces, creative metalwork art at dollhouse scale' }
        ]
    },
    drilling: {
        label: 'Objek yang Dibor',
        items: [
            { id: 'concrete_wall', name: 'Dinding Beton', emoji: '🧱', desc: 'a tiny miniature concrete block with aggregate texture visible, micro dust emerging from the drill hole, scaled-down anchor bolt installation' },
            { id: 'wood_board', name: 'Papan Kayu', emoji: '🪵', desc: 'a tiny miniature wooden board clamped to a small surface, pilot hole being drilled, microscopic wood shavings curling out from the bit' },
            { id: 'metal_plate', name: 'Plat Logam', emoji: '🔲', desc: 'a tiny miniature steel plate being drilled with a droplet of cutting oil applied, micro metal chips spiraling out, coin-sized plate' },
            { id: 'tile_ceramic', name: 'Keramik / Ubin', emoji: '🔳', desc: 'a tiny miniature ceramic tile with diamond bit drilling through, water droplet cooling, careful precision at miniature scale' },
            { id: 'brick_wall', name: 'Dinding Bata', emoji: '🧱', desc: 'a tiny miniature red brick block with mortar joints, masonry bit drilling in, fine red dust powder emerging, dollhouse-scale brick' },
            { id: 'pcb_board', name: 'PCB / Papan Sirkuit', emoji: '💚', desc: 'a tiny miniature green printed circuit board with microscopic electronic components, ultra-precision hole being drilled' },
            { id: 'glass', name: 'Kaca', emoji: '🪟', desc: 'a tiny miniature sheet of glass being carefully drilled with a diamond core bit, water droplet lubricant, stamp-sized glass piece' },
            { id: 'marble', name: 'Marmer', emoji: '⬜', desc: 'a tiny miniature slab of polished marble with beautiful veining pattern, diamond bit creating a clean micro hole, gem-sized luxury material' }
        ]
    },
    hand: {
        label: 'Objek yang Dikerjakan',
        items: [
            { id: 'nail_wood', name: 'Paku di Kayu', emoji: '📌', desc: 'a tiny miniature steel nail being hammered into a miniature wooden block, the pin-sized nail halfway driven in, microscopic wood grain visible around impact' },
            { id: 'bolt_nut', name: 'Baut & Mur', emoji: '🔩', desc: 'a tiny miniature hexagonal bolt and nut being tightened, microscopic threads visible, miniature washer underneath, ant-sized mechanical fastening' },
            { id: 'screw_hinge', name: 'Sekrup di Engsel', emoji: '🪛', desc: 'a tiny miniature wood screw being driven into a dollhouse-scale brass hinge mounted on a miniature wooden frame' },
            { id: 'wire_cable', name: 'Kabel / Kawat', emoji: '🔌', desc: 'a tiny miniature electrical wire being stripped and cut, hair-thin copper strands visible inside insulation, micro-scale electrical work' },
            { id: 'pipe_fitting', name: 'Fitting Pipa', emoji: '🔧', desc: 'a tiny miniature plumbing pipe fitting being tightened with the wrench, thread-thin connection, micro plumber\'s tape visible' },
            { id: 'furniture', name: 'Perabot / Furniture', emoji: '🪑', desc: 'a tiny miniature dollhouse-scale wooden furniture piece being assembled, micro joints being measured, intricate miniature craftsmanship' },
            { id: 'bicycle', name: 'Sepeda', emoji: '🚲', desc: 'a tiny miniature bicycle component being adjusted and repaired, microscopic chain, gears, or brake mechanism, toy-scale mechanical maintenance' },
            { id: 'electronics', name: 'Elektronik', emoji: '📱', desc: 'a tiny miniature electronic device being opened and repaired, ant-sized screws, microscopic circuit board visible, ultra-precision repair work' }
        ]
    },
    food: {
        label: 'Makanan yang Dipotong',
        items: [
            { id: 'pizza', name: 'Pizza', emoji: '🍕', desc: 'a tiny miniature whole pizza with melted mozzarella cheese, pepperoni slices, tomato sauce visible, crispy golden crust, being sliced into perfect triangular pieces' },
            { id: 'birthday_cake', name: 'Kue Ulang Tahun', emoji: '🎂', desc: 'a tiny miniature multi-layered birthday cake with colorful frosting, sprinkles, miniature candles on top, cream layers visible at the cut cross-section' },
            { id: 'steak', name: 'Steak', emoji: '🥩', desc: 'a tiny miniature thick-cut ribeye steak with beautiful grill marks, medium-rare pink center visible at the cut, juices pooling on the tiny plate' },
            { id: 'bread_loaf', name: 'Roti Tawar', emoji: '🍞', desc: 'a tiny miniature freshly baked bread loaf with golden-brown crust, soft white interior crumb visible at the slice, flour dusting on top' },
            { id: 'cheese_block', name: 'Keju', emoji: '🧀', desc: 'a tiny miniature block of aged cheddar cheese with characteristic orange color, visible cheese holes, crumbly texture at the cut surface' },
            { id: 'sushi_roll', name: 'Sushi Roll', emoji: '🍣', desc: 'a tiny miniature sushi roll being sliced to reveal the cross-section of rice, nori seaweed wrapper, salmon, avocado, and cucumber filling inside' },
            { id: 'roast_chicken', name: 'Ayam Panggang', emoji: '🍗', desc: 'a tiny miniature golden roasted whole chicken with crispy skin, herb seasoning visible, being carved with juice dripping, aromatic rosemary garnish' },
            { id: 'watermelon', name: 'Semangka', emoji: '🍉', desc: 'a tiny miniature watermelon with dark green striped rind, vibrant red flesh visible at the cut, tiny black seeds scattered, juice glistening on the surface' }
        ]
    },
    fruits: {
        label: 'Buah yang Dipotong',
        items: [
            { id: 'apple', name: 'Apel', emoji: '🍎', desc: 'a tiny miniature red apple being sliced in half, crisp white flesh visible inside, tiny seeds in the core, shiny red skin with natural wax coating' },
            { id: 'orange', name: 'Jeruk', emoji: '🍊', desc: 'a tiny miniature orange being cut in half, vibrant citrus segments visible, juice droplets spraying from the cut, textured orange peel with tiny oil glands' },
            { id: 'pineapple', name: 'Nanas', emoji: '🍍', desc: 'a tiny miniature pineapple with spiky green crown, diamond-pattern rough skin, bright yellow juicy flesh visible at the cross-section cut, tropical sweetness' },
            { id: 'mango', name: 'Mangga', emoji: '🥭', desc: 'a tiny miniature ripe mango with gradient yellow-orange-red skin, golden-orange flesh exposed at the cut, visible flat seed inside, juice dripping' },
            { id: 'dragon_fruit', name: 'Buah Naga', emoji: '🐉', desc: 'a tiny miniature dragon fruit sliced in half, striking white flesh with tiny black seeds, vivid pink outer skin with green-tipped scales, exotic tropical look' },
            { id: 'coconut', name: 'Kelapa', emoji: '🥥', desc: 'a tiny miniature coconut cracked open, white coconut meat lining the inside, brown hairy shell exterior, coconut water droplets visible' },
            { id: 'strawberry', name: 'Strawberry', emoji: '🍓', desc: 'a tiny miniature strawberry being sliced, vibrant red exterior with tiny seeds, lighter pink interior visible at the cut, green leafy cap on top' },
            { id: 'durian', name: 'Durian', emoji: '🏆', desc: 'a tiny miniature durian with thorny spiky shell being cut open, creamy yellow custard-like flesh pods visible inside, king of fruits in miniature scale' }
        ]
    },
    vegetables: {
        label: 'Sayuran yang Dipotong',
        items: [
            { id: 'carrot', name: 'Wortel', emoji: '🥕', desc: 'a tiny miniature orange carrot being sliced into coins, bright orange core with lighter rings visible at cross-section, green leafy top still attached' },
            { id: 'cabbage', name: 'Kubis / Kol', emoji: '🥬', desc: 'a tiny miniature green cabbage head being cut in half, tightly packed layered leaves visible inside, white core center, fresh crisp texture' },
            { id: 'tomato', name: 'Tomat', emoji: '🍅', desc: 'a tiny miniature ripe red tomato being sliced, juicy seed chambers visible inside, glistening red flesh, green stem cap, juice and seeds spilling' },
            { id: 'onion', name: 'Bawang Bombay', emoji: '🧅', desc: 'a tiny miniature yellow onion being cut in half, concentric ring layers visible inside, papery golden outer skin, translucent inner layers' },
            { id: 'chili', name: 'Cabai Merah', emoji: '🌶️', desc: 'a tiny miniature red chili pepper being sliced open, white seeds and ribs visible inside, glossy red skin, intense heat implied by its vibrant color' },
            { id: 'pumpkin', name: 'Labu', emoji: '🎃', desc: 'a tiny miniature orange pumpkin being cut open, fibrous interior with seeds visible, thick orange flesh walls, ribbed exterior surface' },
            { id: 'corn', name: 'Jagung', emoji: '🌽', desc: 'a tiny miniature ear of corn being sliced, rows of yellow kernels in neat lines, green husk partially peeled back, silk threads visible' },
            { id: 'eggplant', name: 'Terong', emoji: '🍆', desc: 'a tiny miniature purple eggplant being sliced into rounds, creamy white flesh with tiny seed pattern inside, glossy dark purple skin, green calyx cap' }
        ]
    },
    drinks: {
        label: 'Botol Minuman yang Dipotong',
        items: [
            { id: 'coca_cola', name: 'Botol Coca-Cola', emoji: '🥤', desc: 'a tiny miniature iconic Coca-Cola glass bottle with the classic contour shape, red label, being cleanly cut to reveal the dark brown carbonated liquid inside with tiny fizz bubbles' },
            { id: 'fanta', name: 'Botol Fanta', emoji: '🍊', desc: 'a tiny miniature Fanta orange soda bottle with the distinctive twisted shape, bright orange label, cut open showing vibrant orange liquid with micro bubbles inside' },
            { id: 'aqua', name: 'Botol Air Mineral', emoji: '💧', desc: 'a tiny miniature clear plastic water bottle (Aqua brand) with blue label, crystal-clear water visible through transparent plastic, clean cut cross-section' },
            { id: 'beer', name: 'Botol Bir', emoji: '🍺', desc: 'a tiny miniature amber glass beer bottle with golden label, dark amber glass being cut to reveal golden beer liquid inside, foam head visible at the top' },
            { id: 'wine', name: 'Botol Wine', emoji: '🍷', desc: 'a tiny miniature elegant wine bottle with a long neck, dark green glass, vintage label, deep red wine visible through the cut section, cork stopper' },
            { id: 'juice', name: 'Botol Jus', emoji: '🧃', desc: 'a tiny miniature juice bottle with a colorful label, transparent plastic showing bright orange/apple juice inside, screw cap, nutritional label visible' },
            { id: 'milk', name: 'Botol Susu', emoji: '🥛', desc: 'a tiny miniature milk bottle with white liquid visible inside, classic glass bottle design, cream layer visible at the top, foil cap, being cleanly sectioned' },
            { id: 'energy_drink', name: 'Minuman Energi', emoji: '⚡', desc: 'a tiny miniature energy drink can with bold graphic design, metallic aluminum body being cut open, neon-colored liquid inside, pull-tab on top' }
        ]
    },
    shoes: {
        label: 'Sepatu yang Dipotong',
        items: [
            { id: 'nike', name: 'Sepatu Nike', emoji: '👟', desc: 'a tiny miniature Nike Air Max sneaker with the iconic swoosh logo, visible Air unit in the sole, mesh upper, being cut to reveal the layered construction — foam midsole, air cushioning unit, insole layers' },
            { id: 'adidas', name: 'Sepatu Adidas', emoji: '👟', desc: 'a tiny miniature Adidas Superstar sneaker with the three stripes, rubber shell toe, being sliced to show internal structure — Boost foam cushioning, textile lining, rubber outsole layers' },
            { id: 'boot', name: 'Sepatu Boot', emoji: '🥾', desc: 'a tiny miniature leather work boot with thick Vibram sole, steel toe cap visible at the cut section, leather upper, padded collar, heavy-duty stitching visible in cross-section' },
            { id: 'sandal', name: 'Sandal', emoji: '🩴', desc: 'a tiny miniature rubber flip-flop sandal being cut, layered EVA foam sole visible in cross-section, rubber strap, textured grip pattern on the bottom' },
            { id: 'converse', name: 'Sepatu Converse', emoji: '👟', desc: 'a tiny miniature Converse Chuck Taylor All-Star with the star ankle patch, canvas upper, rubber toe cap, being cut to show thin rubber sole, canvas layers, and vulcanized rubber construction' },
            { id: 'leather_shoe', name: 'Sepatu Kulit Formal', emoji: '👞', desc: 'a tiny miniature polished leather Oxford dress shoe, being sectioned to reveal leather sole layers, cork insole, leather lining, Goodyear welt stitching construction visible' },
            { id: 'running', name: 'Sepatu Lari', emoji: '🏃', desc: 'a tiny miniature high-tech running shoe with mesh upper, thick cushioned sole, being cut in half revealing complex foam layers, carbon fiber plate, gel cushioning inserts' },
            { id: 'kids_shoe', name: 'Sepatu Anak', emoji: '👶', desc: 'a tiny miniature colorful children shoe with cartoon character design, velcro strap, soft sole, being cut to show soft foam padding inside, gentle cushioning layers' }
        ]
    },
    toycar: {
        label: 'Mobil-Mobilan yang Dipotong',
        items: [
            { id: 'hotwheels', name: 'Hot Wheels', emoji: '🏎️', desc: 'a tiny miniature Hot Wheels die-cast metal car with flame decals, chrome wheels, being cut in half revealing the zinc alloy body, plastic interior, metal axle pins, and wheel mechanism' },
            { id: 'tomica', name: 'Tomica', emoji: '🚗', desc: 'a tiny miniature Tomica die-cast car (Japanese model) with accurate real car proportions, opening doors, being sectioned to show metal body, detailed plastic interior, suspension mechanism' },
            { id: 'truck_mini', name: 'Truk Mini', emoji: '🚚', desc: 'a tiny miniature toy dump truck with tilting bed, chunky plastic body, being cut to reveal hollow interior, axle mechanism, simple wheel assembly' },
            { id: 'race_car', name: 'Mobil Balap', emoji: '🏁', desc: 'a tiny miniature Formula 1 toy race car with aerodynamic body, rear wing, being sliced to show sleek internal structure, tiny driver figure inside cockpit' },
            { id: 'suv_mini', name: 'SUV Mini', emoji: '🚙', desc: 'a tiny miniature toy SUV with roof rack, off-road tires, being cut open revealing rugged plastic body construction, spring suspension, four-wheel-drive axle system' },
            { id: 'sport_car', name: 'Mobil Sport', emoji: '🏎️', desc: 'a tiny miniature Lamborghini-style toy sports car with scissor doors, low profile body, being sectioned to reveal detailed interior, engine bay molding, die-cast metal chassis' },
            { id: 'classic_car', name: 'Mobil Klasik', emoji: '🚕', desc: 'a tiny miniature vintage VW Beetle toy car with rounded body, chrome bumpers, being cut to show retro interior design, simple mechanical construction, nostalgia charm' },
            { id: 'bus_mini', name: 'Bus Mini', emoji: '🚌', desc: 'a tiny miniature double-decker toy bus with red London bus design, being sliced to reveal two-floor interior, tiny passenger seats, staircase between decks' }
        ]
    },
    bustayo: {
        label: 'Bus Tayo yang Dipotong',
        items: [
            { id: 'tayo_blue', name: 'Tayo (Biru)', emoji: '🚌', desc: 'a tiny miniature Tayo the Little Bus toy — the iconic friendly blue bus with big round eyes on the windshield, cheerful smile on the bumper, being cut in half to reveal plastic interior, tiny seats, and the happy face split dramatically' },
            { id: 'rogi_green', name: 'Rogi (Hijau)', emoji: '🚌', desc: 'a tiny miniature Rogi toy bus — the green bus character from Tayo with mischievous expression, round eyes, being sectioned to show green plastic body layers, interior seat rows, and wheel axle mechanism' },
            { id: 'lani_yellow', name: 'Lani (Kuning)', emoji: '🚌', desc: 'a tiny miniature Lani toy bus — the cute yellow bus from Tayo with sweet eyelash details on the eyes, small body, being cut to reveal yellow plastic construction and tiny interior' },
            { id: 'gani_red', name: 'Gani (Merah)', emoji: '🚌', desc: 'a tiny miniature Gani toy bus — the strong red bus from Tayo with determined expression, muscular-looking front, being sliced to show sturdy red plastic body, reinforced bumper construction' },
            { id: 'cito', name: 'Cito (Express)', emoji: '🚌', desc: 'a tiny miniature Cito express bus toy from Tayo — the sleek long-distance bus with streamlined body, being cut showing aerodynamic shell, comfortable interior seats' },
            { id: 'pat', name: 'Pat (Polisi)', emoji: '🚔', desc: 'a tiny miniature Pat police car toy from Tayo — the friendly police car with siren on top, badge detail, being sectioned to reveal plastic body, tiny police equipment inside' },
            { id: 'toto', name: 'Toto (Taksi)', emoji: '🚕', desc: 'a tiny miniature Toto taxi toy from Tayo — the orange/yellow taxi with taxi sign on roof, friendly face, being cut to show interior with tiny meter and seats' },
            { id: 'frank', name: 'Frank (Pemadam)', emoji: '🚒', desc: 'a tiny miniature Frank fire truck toy from Tayo — the brave red fire truck with ladder on top, water hose, being sectioned to show fire equipment compartments, folded ladder mechanism' }
        ]
    },
    sprunki: {
        label: 'Boneka Sprunki yang Dipotong',
        items: [
            { id: 'sprunki_gray', name: 'Sprunki Gray', emoji: '🧸', desc: 'a tiny miniature Sprunki Gray plush doll — the signature gray character with big round eyes and spiky head shape, being cut open revealing soft cotton stuffing, fabric layers, and stitched seam construction' },
            { id: 'sprunki_oren', name: 'Sprunki Orange', emoji: '🧡', desc: 'a tiny miniature Sprunki Orange plush doll — the vibrant orange character with energetic expression, being sliced to show colorful polyester filling, inner wire armature for posing, and layered felt construction' },
            { id: 'sprunki_biru', name: 'Sprunki Blue', emoji: '💙', desc: 'a tiny miniature Sprunki Blue character plush doll — the cool blue variant with calm expression, being cut open showing blue-tinted stuffing inside, embroidered facial features detail, inner foam padding' },
            { id: 'sprunki_pink', name: 'Sprunki Pink', emoji: '💖', desc: 'a tiny miniature Sprunki Pink plush doll — the cute pink character, being sectioned revealing pink soft filling, safety eyes mechanism visible from behind, velour fabric layers' },
            { id: 'sprunki_hijau', name: 'Sprunki Green', emoji: '💚', desc: 'a tiny miniature Sprunki Green character plush — the nature-themed green variant, being cut showing eco-friendly bamboo fiber stuffing, green gradient fabric, embroidered leaf details' },
            { id: 'sprunki_ungu', name: 'Sprunki Purple', emoji: '💜', desc: 'a tiny miniature Sprunki Purple plush doll — the mysterious purple character with galaxy-themed design, being sliced to reveal sparkly stuffing material, holographic fabric accents' },
            { id: 'sprunki_merah', name: 'Sprunki Red', emoji: '❤️', desc: 'a tiny miniature Sprunki Red character plush — the fiery red variant with fierce expression, being cut open showing flame-patterned inner lining, dense premium stuffing' },
            { id: 'sprunki_kuning', name: 'Sprunki Yellow', emoji: '💛', desc: 'a tiny miniature Sprunki Yellow plush doll — the sunny happy yellow character, being sectioned revealing cheerful patterned inner fabric, soft hypoallergenic filling, squeaker mechanism inside' }
        ]
    },
    superhero: {
        label: 'Figur Superhero yang Dipotong',
        items: [
            { id: 'spiderman', name: 'Spider-Man', emoji: '🕷️', desc: 'a tiny miniature action figure of a hero wearing a full-body tight red and blue costume covered in black web patterns, large white angular eye lenses on the mask, crouching in a dynamic pose, being dramatically sliced in half revealing plastic/PVC construction, articulation joints, and painted detail layers' },
            { id: 'hulk', name: 'Hulk', emoji: '💪', desc: 'a tiny miniature action figure of a giant green-skinned muscular man with an angry expression, messy black hair, wearing only torn purple shorts, massive fists clenched, being cut to reveal thick solid PVC body, heavy dense plastic construction, paint layers on green skin' },
            { id: 'batman', name: 'Batman', emoji: '🦇', desc: 'a tiny miniature action figure of a dark knight hero in a dark gray and black armored suit, long pointed-ear cowl mask, flowing black cape, bat-shaped emblem on chest, utility belt, being sectioned to show detailed interior, articulated joint mechanism, cape attachment point' },
            { id: 'ironman', name: 'Iron Man', emoji: '🤖', desc: 'a tiny miniature action figure of a hero in a sleek metallic red and gold high-tech power armor suit, glowing blue circular chest reactor, helmet with glowing eye slits, being sliced to reveal complex layered armor detail, LED light mechanism, segmented armor plates' },
            { id: 'superman', name: 'Superman', emoji: '🦸', desc: 'a tiny miniature action figure of a hero wearing a blue bodysuit with red boots, red flowing cape, a large diamond-shaped S emblem on the chest, black curly hair with a signature curl on forehead, being cut revealing solid muscular body construction, cape fabric attachment' },
            { id: 'captain', name: 'Captain America', emoji: '🛡️', desc: 'a tiny miniature action figure of a patriotic hero in a red-white-and-blue star-spangled suit, with a large round red-white-blue striped shield with a star in the center, winged helmet, being sectioned showing body articulation, shield attachment mechanism, detailed costume paint' },
            { id: 'thor', name: 'Thor', emoji: '⚡', desc: 'a tiny miniature action figure of a muscular Norse warrior hero with long blonde hair, silver-scaled armor, flowing red cape, holding a short-handled square hammer weapon, being cut to show muscular build construction, cape attachment, hammer accessory mechanism' },
            { id: 'wonder_woman', name: 'Wonder Woman', emoji: '👸', desc: 'a tiny miniature action figure of an Amazonian warrior woman in red-and-gold strapless armor, blue starry skirt, silver tiara with a star, silver arm bracers, holding a golden glowing lasso rope, being sliced revealing detailed body construction, articulation joints' }
        ]
    },
    anomaly: {
        label: 'Figur Anomali yang Dipotong',
        items: [
            { id: 'tung_tung', name: 'Tung Tung Tung Sahur', emoji: '👾', desc: 'a tiny miniature 3D CGI cartoon-style Tung Tung Tung Sahur figurine — the body is a tall vertical cylinder shape like a wooden log or barrel, entirely golden-orange wooden color with subtle vertical wood grain lines on the surface, the face is directly on the cylinder body: two large round dark brown eyes with white highlights, thick dark brown arched eyebrows, a tiny round button nose, and a wide friendly smile, the arms are very thin and noodle-like extending from the sides of the cylinder body, same orange wooden color, the legs are also thin and noodle-like with bare human-like feet, one hand is holding a large wooden baseball bat dragging on the ground, the entire character has a smooth shiny Pixar/3D-animated polished look, warm golden-orange tones throughout, being sliced in half to reveal solid smooth wooden cross-section interior with visible concentric tree ring growth patterns' },
            { id: 'ballerina', name: 'Ballerina Cappuccina', emoji: '☕', desc: 'a tiny miniature 3D CGI cartoon-style Ballerina Cappuccina figurine — the body is a cute young ballerina girl with fair skin wearing a fluffy pink tutu ballet dress and pink ballet pointe shoes, her arms in graceful ballet pose, BUT her head is replaced by a large white ceramic cappuccino coffee cup with brown latte art foam swirl on top, the cup has two big cute round dark eyes with eyelashes, a small cute nose, and a sweet smile printed on the cup surface, the overall style is smooth glossy Pixar/3D-animated aesthetic, being sliced to reveal creamy coffee-colored liquid interior flowing out of the cup head and cotton stuffing in the ballerina body' },
            { id: 'tralalero', name: 'Tralalero Tralala', emoji: '🦈', desc: 'a tiny miniature 3D CGI cartoon-style Tralalero Tralala figurine — the upper body is a big fat blue-gray great white shark with open mouth showing rows of sharp white teeth, small beady black eyes, dorsal fin on top, BUT instead of a tail fin, the shark body connects directly to two muscular tanned human male legs wearing white sports sneakers with laces, the shark walks upright on these human legs like a person, the legs are buff and athletic, the overall style is smooth glossy Pixar/3D-animated aesthetic with absurd humor, being cut in half at the connection point between shark body and human legs showing the bizarre hybrid anatomy' },
            { id: 'bombardiro', name: 'Bombardiro Crocodilo', emoji: '🐊', desc: 'a tiny miniature 3D CGI cartoon-style Bombardiro Crocodilo figurine — a dark green crocodile/alligator body with textured scales and bumpy armored skin, BUT it has mechanical airplane bomber modifications: a large spinning gray airplane propeller mounted on the tip of its snout/nose, two fixed military aircraft wings extending from both sides of its body like a WW2 bomber plane, the tail is like an airplane tail fin, small dark eyes, powerful jaw with teeth visible, the overall style is smooth glossy Pixar/3D-animated aesthetic, being sliced to reveal green reptilian flesh mixed with mechanical airplane engine parts, gears, and propeller mechanisms inside' },
            { id: 'la_vaca', name: 'La Vaca Saturno', emoji: '🐄', desc: 'a tiny miniature 3D CGI cartoon-style La Vaca Saturno figurine — a classic black and white spotted dairy cow with horns and a neutral calm cow expression, BUT the cow is floating/sitting inside a large metallic silver flying saucer UFO ring that orbits around its midsection like the rings of planet Saturn, the cow body pokes out from the top and bottom of the disc, the UFO ring has small lights and sci-fi details, the overall style is smooth glossy Pixar/3D-animated aesthetic, being sliced to show cow interior on one side and alien UFO technology with glowing circuits on the other side' },
            { id: 'cappuccino', name: 'Cappuccino Assassino', emoji: '☕', desc: 'a tiny miniature 3D CGI cartoon-style Cappuccino Assassino figurine — a brown paper/cardboard takeaway coffee cup character standing upright, the cup has a Naruto-style black ninja headband (hitai-ate) with a metal plate tied around the cup body, two big round white eyes with dark pupils on the cup surface, the cup has a white plastic lid on top like a hat, the legs are dark metallic robotic/mechanical legs with joints and pistons giving it a cyborg ninja look, the overall style is smooth glossy Pixar/3D-animated aesthetic, being sectioned to reveal warm brown coffee liquid splashing out and tiny mechanical robot parts inside the legs' },
            { id: 'capybara', name: 'Capybara Samurai', emoji: '⚔️', desc: 'a tiny miniature 3D CGI cartoon-style Capybara Samurai figurine — a round chubby brown capybara (large rodent) with its signature calm unbothered zen facial expression, small round ears, dark beady eyes, blunt snout, light brown/tan belly, BUT it is standing on its hind legs in a samurai warrior stance, each front paw gripping a long gleaming silver katana samurai sword, serious warrior pose despite the adorable face, the overall style is smooth glossy Pixar/3D-animated aesthetic, being sliced to reveal fluffy soft brown fur layers and a tiny brave warrior heart inside' },
            { id: 'udin', name: 'Udin Din Din Dun', emoji: '🎵', desc: 'a tiny miniature 3D CGI cartoon-style Udin Din Din Dun figurine — a quirky short character with an oversized round head shaped like a traditional drum (bedug/kentongan), warm brown wooden color with drumhead membrane on top, big expressive cartoon eyes, wide cheerful mouth, small stubby body and limbs, the character appears to be vibrating or bouncing with musical energy, tiny musical notes floating around it, the overall style is smooth glossy Pixar/3D-animated aesthetic, being sliced to reveal hollow drum interior with resonating sound wave ripple patterns and tiny musical note particles inside' }
        ]
    }
};

// ==========================================
// VARIATION DATA (for randomization)
// ==========================================
const EXTRA_DETAILS = [
    'tiny metal particles scattered around the tool on the surface',
    'a single drop of machine oil glistening on the tool surface',
    'microscopic sawdust or metal shavings clinging to the tool',
    'a thin layer of fine dust on the surrounding surface',
    'a tiny shadow cast by the tool revealing its three-dimensional form',
    'condensation droplets on the cold metal surface of the tool',
    'a tiny price tag or sticker partially visible on the tool',
    'fingerprint smudges on the polished metal parts',
    'a reflection of overhead light on the tool\'s chrome components',
    'subtle engraved serial numbers barely visible on the tool body'
];

const ATMOSPHERE = [
    'photorealistic quality rivaling a professional product photograph',
    'hyper-detailed rendering that blurs the line between reality and miniature art',
    'the scene captures a magical moment of impossible miniaturization',
    'captured with the precision of a high-end DSLR camera sensor',
    'the image quality matches a Phase One medium format camera output',
    'indistinguishable from a real photograph in a luxury lifestyle magazine',
    'tilt-shift photography quality with selective focus planes',
    'the visual fidelity of a 100-megapixel sensor capturing every micro-detail'
];

// ==========================================
// REALISTIC TOOL SOUNDS
// ==========================================
const TOOL_SOUNDS = {
    // Wood cutting tools
    chainsaw: 'loud aggressive two-stroke gasoline engine revving and roaring, sharp rattling chain teeth biting into wood, wood cracking and splintering, exhaust popping',
    circular_saw: 'high-pitched electric motor whine spinning up, loud buzzing saw blade cutting through wood, sawdust spraying, blade humming at full speed',
    jigsaw: 'rapid reciprocating buzzing vibration, rhythmic up-down blade chattering through material, electric motor humming, slight wood cracking',
    band_saw: 'continuous low humming of a long looping blade, steady smooth cutting sound, quiet electric motor drone, gentle wood feeding noise',
    table_saw: 'powerful electric motor spinning a large blade at high RPM, loud sustained buzzing whine, wood being pushed through with crackling resistance',
    router: 'very high-pitched screaming spindle rotation, aggressive routing sound as bit carves through wood, fine dust spraying, loud sustained whine',

    // Metal cutting tools
    angle_grinder: 'extremely loud high-pitched grinding whine, sharp metal-on-metal screeching, abrasive disc spinning at high speed, metallic ringing',
    plasma_cutter: 'sharp electrical crackling and hissing of ionized gas arc, compressed air whooshing, sizzling of molten metal, intermittent popping',
    band_saw_metal: 'slow steady metallic scraping of blade teeth against metal, coolant dripping, low motor hum, rhythmic cutting pace',
    cut_off_saw: 'loud abrasive disc screaming through metal, high-pitched metallic shrieking, motor straining under load, metallic ringing on contact',
    tin_snips: 'sharp metallic snipping and clicking, sheet metal flexing and pinging, crisp clean cutting clicks, spring mechanism snapping',
    nibbler: 'rapid mechanical punching and clicking, fast rhythmic stamping of the die mechanism, sheet metal vibrating, motor buzzing',

    // Welding tools
    mig_welder: 'steady crackling and sizzling of wire arc, continuous buzzing hum, wire feed motor whirring, molten metal popping and spattering',
    tig_welder: 'smooth sustained electrical humming arc, gentle sizzling, gas flowing with a soft hiss, precise quiet crackling of the tungsten tip',
    arc_welder: 'loud sharp electrical crackling and snapping, electrode sizzling against metal, intense buzzing arc sound, molten spatter popping',
    welding_torch: 'steady roaring flame with a soft hissing of mixed gases, torch flame adjusting with whooshing, metal heating with gentle ticking',
    soldering_iron: 'quiet gentle sizzling as solder melts, faint hissing of flux vaporizing, soft bubbling of molten solder, subtle ticking',
    spot_welder: 'short sharp electrical zapping bursts, rapid clicking of electrode arms squeezing, brief intense buzzing on each weld spot',

    // Drilling tools
    impact_drill: 'loud hammering percussion combined with drill spinning, rapid rat-tat-tat impact mechanism, aggressive vibrating motor, material crumbling',
    cordless_drill: 'smooth electric motor whirring, drill bit spinning with a rising pitch, chuck clicking, gentle humming at variable speeds',
    drill_press: 'steady smooth drilling hum, consistent motor drone, handle lever creaking, metal shavings curling away with a quiet scraping',
    core_drill: 'deep rumbling motor with heavy vibration, diamond bit grinding against hard material, water splashing as coolant flows, sustained drone',
    rotary_hammer: 'aggressive hammering percussion with deep thumping, powerful vibration, concrete crumbling and dust spraying, motor straining',
    dremel: 'very high-pitched whining buzz of a small fast motor, light grinding or cutting sound, pitch changing with pressure, fine vibration',

    // Hand tools
    hammer: 'sharp metallic clang on impact, ringing echo of steel head hitting nail, wood thudding as nail drives in, handle vibration',
    wrench: 'metallic clicking and ratcheting, bolt creaking as it tightens, steel-on-steel contact sounds, quiet mechanical precision',
    pliers: 'metallic gripping and squeezing clicks, wire snapping, spring mechanism tension, pivot joint creaking',
    screwdriver: 'quiet turning and threading of screw, screw head clicking into slot, gentle twisting friction, wood or metal accepting the screw',
    tape_measure: 'blade extending with a smooth sliding hiss, spring-loaded retraction snap and rapid clicking, blade lock clicking',
    level: 'quiet placement sound, bubble liquid settling with a faint sloshing, aluminum body tapping on surface',

    // Food cutting tools
    chef_knife: 'clean sharp chopping impact on cutting board, crisp slicing through food, blade rocking on wooden board, food fibers separating',
    bread_knife: 'gentle back-and-forth sawing through crusty bread, crust crackling and crunching, serrated blade rasping, crumbs falling',
    cleaver: 'heavy powerful thwack of thick blade hitting cutting board, bone cracking, meat splitting, deep impactful chopping sound',
    kitchen_scissors: 'sharp metallic snipping clicks, blades sliding against each other, spring tension clicking, clean cutting action',
    pizza_cutter: 'rolling wheel gliding through cheese and dough, crust crunching, cheese stretching and pulling, smooth rolling action',
    food_processor: 'electric motor whirring up to speed, blades chopping rapidly, food being pulverized, lid vibrating, rhythmic pulsing',

    // Fruit cutting tools
    fruit_knife: 'gentle slicing through soft fruit flesh, juice squishing, thin blade gliding, fruit skin popping as blade penetrates',
    peeler: 'light scraping of blade against fruit skin, thin peel curling away, gentle rasping sound, rhythmic peeling strokes',
    melon_baller: 'soft scooping sound in fruit flesh, juice dripping, round scoop carving through melon, gentle pressing',
    apple_corer: 'crunching through apple flesh, core cracking, blade pushing through with resistance, apple splitting apart',
    pineapple_corer: 'twisting scraping through pineapple flesh, fibrous material separating, juice flowing, spiral blade grinding',
    mango_slicer: 'blade pressing through mango flesh, pit resisting and cracking, juice squishing out, fruit splitting',

    // Vegetable cutting tools
    nakiri: 'clean precise chopping on cutting board, crisp vegetable fibers snapping, flat blade making full contact, rapid rhythmic chopping',
    mandoline: 'rapid sliding scraping across sharp blade, vegetable slicing into uniform pieces, guard clicking, steady rhythmic motion',
    herb_scissors: 'multiple blades snipping simultaneously, herbs being minced with rapid clicks, parallel blades sliding, fresh crunch',
    julienne_peeler: 'fine scraping teeth creating thin strips, vegetable fibers shredding, light rasping strokes, matchstick pieces falling',
    chopper: 'push-down mechanism clicking with spring action, grid blades crunching through vegetable, container thudding, mechanical snap',
    santoku: 'smooth rocking chop on cutting board, clean slicing through vegetables, blade tapping board, crisp precise cutting',

    // Drinks / bottle cutting tools
    bottle_cutter: 'glass scoring with a sharp scratching sound, scoring wheel rolling with high-pitched scraping, glass clicking as it rotates',
    glass_cutter: 'high-pitched scratching of diamond tip on glass surface, thin glass cracking along score line, crisp snapping',
    wire_saw: 'thin wire rasping back and forth against glass, gritty abrasive grinding, glass dust scraping, steady sawing rhythm',
    rotary_glass: 'high-speed rotary tool buzzing, diamond disc grinding against glass, fine glass dust spraying, motor whining',
    bottle_breaker: 'scoring wheel clicking and scratching, glass snapping cleanly along score line, crisp cracking sound',
    heat_cutter: 'nichrome wire humming with electrical current, material sizzling on contact, faint burning smell crackling, quiet buzzing',

    // Shoe cutting tools
    leather_knife: 'sharp blade slicing through thick leather, leather fibers separating with a quiet tearing, blade scraping on cutting mat',
    shoe_scissors: 'heavy shears crunching through leather and rubber, thick material compressing and snapping, powerful snipping',
    rotary_cutter: 'circular blade rolling through fabric and leather, smooth cutting glide, blade clicking in safety guard, fabric tearing',
    hot_knife_shoe: 'heated blade sizzling through synthetic material, plastic melting with a hissing sound, faint chemical smell crackling',
    band_knife_shoe: 'continuous blade humming through leather, motor droning, material feeding through steadily, smooth splitting sound',
    die_cutter: 'hydraulic press hissing and thumping, sharp die stamping through material, clean punching impact, machine cycling',

    // Toy car cutting tools
    mini_saw: 'fine-toothed blade rasping through plastic, quiet back-and-forth sawing, plastic cracking, tiny precise strokes',
    dremel_toy: 'high-pitched rotary tool whining, cutting disc grinding through die-cast metal, tiny metal sparks ticking, motor buzzing',
    plastic_cutter: 'scribing tool scratching along plastic surface, scored plastic snapping cleanly, clicking and cracking',
    hot_wire_toy: 'heated wire humming softly, plastic melting with a quiet sizzling, material separating smoothly, faint buzzing',
    hacksaw_mini: 'fine metal saw teeth rasping against die-cast metal, rhythmic back-forth scraping, metal filings dropping, blade singing',
    cutting_pliers: 'sharp snipping click of hardened steel jaws, plastic sprue snapping, spring mechanism clicking, clean cut pop',

    // Bus Tayo cutting tools
    tayo_saw: 'fine saw teeth rasping through toy plastic, back-and-forth sawing motion, plastic cracking and separating, gentle cutting',
    tayo_dremel: 'high-speed rotary buzz cutting through plastic, motor whining at high RPM, plastic shavings spraying, precision grinding',
    tayo_snips: 'sharp precision snipping clicks, thin plastic popping as cut, spring-loaded mechanism clicking, clean separation',
    tayo_blade: 'sharp hobby blade slicing through plastic shell, clean cutting through thin material, blade tip scraping, precise scoring',
    tayo_wire: 'heated nichrome wire humming, plastic melting and sizzling on contact, smooth continuous cutting, quiet electrical buzz',
    tayo_laser: 'focused laser beam with a subtle high-frequency humming, material vaporizing with tiny crackling pops, fan cooling whirring',

    // Sprunki doll cutting tools
    sprunki_scissors: 'fabric scissors snipping through plush material, cotton stuffing puffing out, thread snapping, fabric tearing gently',
    sprunki_knife: 'craft blade slicing through seam stitching, fabric separating, stuffing cotton poofing out, precise quiet cutting',
    sprunki_rotary: 'circular rotary blade rolling through fabric layers, motor buzzing softly, plush material separating, smooth gliding',
    sprunki_seam: 'tiny hook blade popping individual stitches, thread snapping one by one, quiet picking sounds, seam opening gradually',
    sprunki_laser: 'laser humming with precision focus, fabric edges singeing with faint crackling, material vaporizing cleanly, fan whirring',
    sprunki_hot: 'heated blade sizzling through synthetic plush, material edges melting and sealing, quiet hissing, fabric separating',

    // Superhero figure cutting tools
    laser_sword: 'thin saw blade rasping back and forth through hard plastic, precise strokes, plastic cracking, blade scraping cleanly',
    plasma_blade: 'plasma torch hissing sharply, compressed air rushing, plastic melting and sizzling, brief crackling on contact, steady hiss',
    power_saw_hero: 'electric circular saw whining at high speed, plastic and rubber being cut with a buzzing grind, motor revving',
    diamond_blade: 'diamond disc grinding with high-pitched whine, hard material being abraded, fine dust spraying, steady motor hum',
    ultra_cutter: 'high-frequency ultrasonic vibration humming, almost silent cutting through material, faint electronic tone, clean separation',
    hero_guillotine: 'lever handle creaking, blade dropping with a sharp metallic thunk, clean slice through material, crisp cutting impact',

    // Anomaly figure cutting tools
    anomaly_chainsaw: 'two-stroke engine sputtering to life, chain rattling and buzzing at high speed, material cracking under the blade, engine revving',
    anomaly_laser: 'focused CO2 laser humming steadily, material vaporizing with tiny popping sounds, cooling fan whirring, precise quiet operation',
    anomaly_blade: 'oscillating blade vibrating rapidly with a buzzing hum, material being cut with quick vibration, motor oscillating rhythmically',
    anomaly_saw: 'thin coping saw blade rasping back and forth, frame flexing slightly, material cracking along cut line, quiet manual sawing',
    anomaly_plasma: 'plasma arc hissing and crackling, compressed air rushing through nozzle, molten material sizzling, sharp electrical buzzing',
    anomaly_sonic: 'high-frequency ultrasonic blade humming at near-silent pitch, material cleanly separating, faint electronic whine, precision vibration'
};

// ==========================================
// STATE
// ==========================================
let selectedCategory = null;
let selectedTool = null;
let selectedMaterial = null;

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initCategoryCards();
    initRefImageToggle();
});

function initParticles() {
    const container = document.getElementById('bgParticles');
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
    }
}

function initCategoryCards() {
    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card => {
        card.addEventListener('click', () => selectCategory(card));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectCategory(card);
            }
        });
    });
}

function initRefImageToggle() {
    const toggle = document.getElementById('refImageToggle');
    const options = document.getElementById('refImageOptions');
    toggle.addEventListener('change', () => {
        options.style.display = toggle.checked ? 'block' : 'none';
    });
}

// ==========================================
// CATEGORY SELECTION
// ==========================================
function selectCategory(card) {
    // Deselect all
    document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    selectedCategory = card.dataset.category;
    selectedTool = null;
    selectedMaterial = null;

    renderToolGrid(selectedCategory);
    renderMaterialGrid(selectedCategory);
    showSection('toolSection');
    showSection('materialSection');
    showSection('customSection');
    showSection('actionSection');
    hideSection('outputSection');
}

// ==========================================
// TOOL GRID RENDERING
// ==========================================
function renderToolGrid(category) {
    const grid = document.getElementById('toolGrid');
    const tools = TOOLS[category].tools;

    grid.innerHTML = '';
    tools.forEach((tool, idx) => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.dataset.toolId = tool.id;
        card.style.animationDelay = (idx * 0.05) + 's';
        card.innerHTML = `
            <span class="tool-emoji">${tool.emoji}</span>
            <span class="tool-name">${tool.name}</span>
        `;
        card.addEventListener('click', () => selectTool(card, tool));
        grid.appendChild(card);
    });
}

function selectTool(card, tool) {
    document.querySelectorAll('#toolGrid .tool-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    selectedTool = tool;
}

// ==========================================
// MATERIAL GRID RENDERING
// ==========================================
function renderMaterialGrid(category) {
    const grid = document.getElementById('materialGrid');
    const materials = MATERIALS[category].items;

    grid.innerHTML = '';
    materials.forEach((mat, idx) => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.dataset.materialId = mat.id;
        card.style.animationDelay = (idx * 0.05) + 's';
        card.innerHTML = `
            <span class="tool-emoji">${mat.emoji}</span>
            <span class="tool-name">${mat.name}</span>
        `;
        card.addEventListener('click', () => selectMaterial(card, mat));
        grid.appendChild(card);
    });
}

function selectMaterial(card, mat) {
    document.querySelectorAll('#materialGrid .tool-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    selectedMaterial = mat;
}

// ==========================================
// SECTION VISIBILITY
// ==========================================
function showSection(id) {
    const el = document.getElementById(id);
    if (el.style.display === 'none') {
        el.style.display = 'block';
        el.classList.add('section-enter');
        setTimeout(() => el.classList.remove('section-enter'), 500);
    }
}

function hideSection(id) {
    document.getElementById(id).style.display = 'none';
}

// ==========================================
// PROMPT GENERATION
// ==========================================
function generatePrompt() {
    if (!selectedCategory) {
        alert('Silakan pilih kategori alat terlebih dahulu!');
        return;
    }

    // If no specific tool selected, pick first one
    if (!selectedTool) {
        const tools = TOOLS[selectedCategory].tools;
        selectedTool = tools[0];
        const firstCard = document.querySelector('.tool-card');
        if (firstCard) firstCard.classList.add('active');
    }

    const bg = document.getElementById('backgroundSelect').value;
    const lighting = document.getElementById('lightingSelect').value;
    const hand = document.getElementById('handSelect').value;
    const glove = document.getElementById('gloveSelect').value;
    const brand = document.getElementById('brandSelect').value;
    const detail = document.getElementById('detailSelect').value;
    const condition = document.getElementById('conditionSelect').value;

    const prompt = buildPrompt(selectedTool, bg, lighting, hand, glove, brand, detail, condition);

    // Display
    document.getElementById('outputText').textContent = prompt;
    document.getElementById('infoCategory').textContent = TOOLS[selectedCategory].name;
    document.getElementById('infoTool').textContent = selectedTool.name;
    document.getElementById('infoBrand').textContent = BRANDS[brand].name;

    showSection('outputSection');

    // Scroll to output
    setTimeout(() => {
        document.getElementById('outputSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function buildPrompt(tool, bg, lighting, hand, glove, brand, detail, condition) {
    const extraDetail = EXTRA_DETAILS[Math.floor(Math.random() * EXTRA_DETAILS.length)];
    const atmosphere = ATMOSPHERE[Math.floor(Math.random() * ATMOSPHERE.length)];
    const extraDetail2 = EXTRA_DETAILS[Math.floor(Math.random() * EXTRA_DETAILS.length)];

    const brandInfo = BRANDS[brand];
    const toolDesc = brand !== 'generic'
        ? tool.desc.replace(/a miniature|miniature/i, `a miniature ${brandInfo.name}`)
        : tool.desc;

    // Glove description
    const gloveInfo = GLOVES[glove];
    const gloveDesc = gloveInfo.desc;

    // Hand realism details based on glove type
    let handRealism;
    if (glove === 'bare') {
        handRealism = 'The skin texture on the hand is rendered with pore-level detail, visible fingerprint ridges, natural skin imperfections, realistic subsurface scattering on the fingertips, dirt trapped in skin creases, grease-stained cuticles, and the authentic look of a hardworking laborer\'s hands.';
    } else {
        handRealism = `The ${gloveInfo.name} shows incredible material texture detail — realistic fabric/leather weave, stitching threads, wear patterns, dirt accumulation in the seams, and the natural way the glove creases and folds around the fingers gripping the tiny tool.`;
    }

    // Material/target object description
    let materialLine = '';
    if (selectedMaterial) {
        const actionVerbs = {
            wood: 'actively cutting into',
            metal: 'actively cutting through',
            welding: 'actively welding on',
            drilling: 'actively drilling into',
            hand: 'actively working on',
            food: 'actively slicing through',
            fruits: 'actively cutting into',
            vegetables: 'actively chopping through',
            drinks: 'actively cutting through',
            shoes: 'actively slicing through',
            toycar: 'actively sawing through',
            bustayo: 'actively cutting through',
            sprunki: 'actively cutting open',
            superhero: 'actively slicing through',
            anomaly: 'actively cutting through'
        };
        const verb = actionVerbs[selectedCategory] || 'working on';
        materialLine = `\n\nThe miniature tool is ${verb} ${selectedMaterial.desc}. IMPORTANT: both the tool AND the material/object are miniature-sized, proportionally scaled to each other — they are equally tiny, creating a complete miniature diorama scene. The interaction between the tool and the material is realistic \u2014 showing contact point details, material deformation, tiny debris particles, and natural residue appropriate to the cutting process (fine dust, small shavings, material chips), all at miniature scale.`;
    }

    // Reference image instructions
    let refImageLine = '';
    const refToggle = document.getElementById('refImageToggle');
    if (refToggle && refToggle.checked) {
        const refDesc = document.getElementById('refImageDesc').value.trim();
        const refStrength = document.getElementById('refStrengthSelect').value;

        const strengthInstructions = {
            strict: 'CRITICAL — You MUST follow the uploaded reference image EXACTLY. Match the same composition, camera angle, colors, lighting, hand position, tool placement, and background as shown in the reference image. Do NOT deviate from the reference image in any way. The output must look like a direct continuation or animated version of the reference frame. Maintain 100% visual consistency with the reference image throughout the entire video.',
            moderate: 'IMPORTANT — Follow the uploaded reference image closely as a visual guide. Maintain the same general composition, tool appearance, hand position, and scene atmosphere shown in the reference. Minor natural variations are acceptable (slight camera movement, subtle lighting shifts) but the core visual identity must remain consistent with the reference image.',
            loose: 'Use the uploaded reference image as inspiration for the overall mood, style, and visual direction. The output should share a similar aesthetic and feel with the reference image, but creative variations in composition, angle, and details are welcome.'
        };

        refImageLine = `\n\nREFERENCE IMAGE INSTRUCTIONS: ${strengthInstructions[refStrength]}`;

        if (refDesc) {
            refImageLine += `\n\nReference image description: The uploaded reference image shows: ${refDesc}. The generated video MUST visually match this reference — maintaining the same tool, hand, object, background, and overall scene composition as described.`;
        }
    }

    // Realistic tool sound description
    let soundLine = '';
    const toolSound = TOOL_SOUNDS[tool.id];
    if (toolSound) {
        soundLine = `\n\nAudio/Sound: The scene has realistic ambient sound — ${toolSound}. The sound is authentic and matches the real tool perfectly, creating an immersive experience.`;
    }

    const prompt = `Ultra-realistic photograph of ${toolDesc}, ${brandInfo.colors}, ${CONDITIONS[condition]}. The tool itself shows realistic signs of workshop use \u2014 minor scuffs, dust, and work residue on its surface.

The miniature tool is ${HAND_POSITIONS[hand]}, with the hand ${gloveDesc}.${materialLine}

Scene setting: ${BACKGROUNDS[bg]}.

Lighting: ${LIGHTING[lighting]}.

Camera & Detail: ${DETAIL_LEVELS[detail]}, ${atmosphere}.

Additional realism details: ${extraDetail}. ${extraDetail2}. ${handRealism}${soundLine}${refImageLine}

Style: Ultra photorealistic, 8K resolution, physically-based rendering, ray-traced global illumination, cinematic depth of field, professional product photography meets macro photography, the miniature tool is an exact scaled-down replica of the real thing with every functional part perfectly reproduced at tiny scale.

Negative: cartoon, illustration, painting, sketch, blurry, low quality, distorted fingers, extra fingers, deformed hands, unrealistic proportions, clean pristine hands.`;

    return prompt;
}

// ==========================================
// RANDOM GENERATION
// ==========================================
function generateRandom() {
    // Random category
    const categories = Object.keys(TOOLS);
    const randCat = categories[Math.floor(Math.random() * categories.length)];

    // Select category card
    const catCard = document.querySelector(`.category-card[data-category="${randCat}"]`);
    selectCategory(catCard);

    // Random tool
    const tools = TOOLS[randCat].tools;
    const randTool = tools[Math.floor(Math.random() * tools.length)];

    // Random material
    const materials = MATERIALS[randCat].items;
    const randMat = materials[Math.floor(Math.random() * materials.length)];

    // Wait for tool grid to render
    setTimeout(() => {
        const toolCard = document.querySelector(`.tool-card[data-tool-id="${randTool.id}"]`);
        if (toolCard) selectTool(toolCard, randTool);

        const matCard = document.querySelector(`.tool-card[data-material-id="${randMat.id}"]`);
        if (matCard) selectMaterial(matCard, randMat);

        // Random options
        randomizeSelect('backgroundSelect');
        randomizeSelect('lightingSelect');
        randomizeSelect('handSelect');
        randomizeSelect('gloveSelect');
        randomizeSelect('brandSelect');
        randomizeSelect('detailSelect');
        randomizeSelect('conditionSelect');

        // Generate
        generatePrompt();
    }, 100);
}

function randomizeSelect(selectId) {
    const select = document.getElementById(selectId);
    const options = select.options;
    const randIndex = Math.floor(Math.random() * options.length);
    select.selectedIndex = randIndex;
}

// ==========================================
// COPY TO CLIPBOARD
// ==========================================
function copyPrompt() {
    const text = document.getElementById('outputText').textContent;
    const btn = document.getElementById('copyBtn');

    navigator.clipboard.writeText(text).then(() => {
        btn.classList.add('copied');
        btn.innerHTML = '<span>✅ Copied!</span>';
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = '<span>📋 Copy</span>';
        }, 2000);
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        btn.classList.add('copied');
        btn.innerHTML = '<span>✅ Copied!</span>';
        setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = '<span>📋 Copy</span>';
        }, 2000);
    });
}
