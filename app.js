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
            { id: 'chainsaw_metal', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw with a reinforced carbide-tipped chain, heavy-duty orange and gray body, powerful motor housing, pull-start cord, safety chain brake, designed for cutting through metal pipes and iron bars' },
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
            { id: 'chainsaw_food', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw with a small guide bar and sharp chain teeth, orange and white body, compact motor housing, pull-start cord, being used to dramatically slice through food items with exaggerated power' },
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
            { id: 'chainsaw_fruit', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw with sharp micro chain teeth on a small guide bar, bright orange body, compact engine, pull-start cord, being used to dramatically slice through fruits with satisfying cross-sections' },
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
            { id: 'chainsaw_veg', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw with rattling chain teeth, orange and white compact body, pull-start mechanism, exhaust port, being used to dramatically chop through vegetables with over-the-top power' },
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
            { id: 'chainsaw_bottle', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw with sharp chain teeth wrapped around a guide bar, orange and white body, pull-start cord, compact motor, being used to dramatically cut through glass and plastic bottles' },
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
            { id: 'chainsaw_shoe', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw with micro chain teeth on a short guide bar, orange body, compact motor housing, pull-start cord, being used to dramatically slice through shoes revealing internal layers and construction' },
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
            { id: 'chainsaw_toycar', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw with sharp chain teeth, orange and white body, compact engine housing, pull-start cord, chain brake, being used to dramatically cut through toy car models revealing die-cast metal and plastic internals' },
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
            { id: 'chainsaw_tayo', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw with rattling chain teeth on a guide bar, orange and white body, pull-start cord, compact two-stroke engine, being used to dramatically slice through Bus Tayo toy bus plastic body' },
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
            { id: 'chainsaw_sprunki', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw with sharp chain teeth, orange and white body, compact motor, pull-start cord, being used to dramatically slice through Sprunki plush doll body revealing cotton stuffing and fabric layers inside' },
            { id: 'sprunki_scissors', name: 'Gunting Jahit', emoji: '✂️', desc: 'miniature fabric scissors with sharp pointed blades, for cutting through Sprunki doll plush fabric body, felt material, and stuffing with precision' },
            { id: 'sprunki_knife', name: 'Craft Knife', emoji: '🔪', desc: 'a miniature precision craft knife with a replaceable blade, for carefully slicing open Sprunki doll seams and revealing the colorful cotton stuffing inside' },
            { id: 'sprunki_rotary', name: 'Rotary Cutter', emoji: '🔴', desc: 'a miniature rotary fabric cutter with a circular blade, safety guard, for smoothly cutting through Sprunki plush doll fabric layers' },
            { id: 'sprunki_seam', name: 'Seam Ripper', emoji: '🪡', desc: 'a miniature seam ripper with a tiny hook blade and red ball tip, for unpicking stitched seams on Sprunki character dolls, revealing inner construction' },
            { id: 'sprunki_laser', name: 'Laser Cutter', emoji: '⚡', desc: 'a miniature CO2 laser cutter creating a precise beam cutting through Sprunki doll material, glowing cut line, clean edges on the plush fabric' },
            { id: 'sprunki_hot', name: 'Hot Cutter', emoji: '🔥', desc: 'a miniature heated blade tool for thermally cutting through Sprunki synthetic plush material, melted sealed edges, controlled temperature dial' }
        ]
    },
    superhero: {
        name: 'Miniatur Superhero',
        icon: '🦸',
        tools: [
            { id: 'chainsaw_hero', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw with detailed chain teeth on a guide bar, orange and white body, compact engine, pull-start cord, exhaust port, being used to dramatically cut through superhero action figure revealing internal plastic construction and articulation joints' },
            { id: 'laser_sword', name: 'Hobby Saw', emoji: '🪚', desc: 'a miniature fine-tooth hobby razor saw with ultra-thin kerf blade, ergonomic plastic handle, replaceable blade mechanism, designed for detailed model building and figurine assembly work' },
            { id: 'plasma_blade', name: 'Detail Knife', emoji: '🔪', desc: 'a miniature precision craft knife with a #11 pointed scalpel blade, aluminum barrel handle, blade cap, snap-off mechanism, ideal for trimming mold lines on collectible model kits' },
            { id: 'power_saw_hero', name: 'Rotary Tool', emoji: '🌀', desc: 'a miniature Dremel-style rotary tool with a small sanding drum attachment, variable speed dial, slim cylindrical body, collet nut, ventilation slots, for smoothing and shaping model figurine parts' },
            { id: 'diamond_blade', name: 'Precision File', emoji: '💎', desc: 'a miniature diamond-coated needle file set with fine grit surface, slim tapered profile, comfortable rubber handle, for refining details and smoothing seams on collectible figurines' },
            { id: 'ultra_cutter', name: 'Sanding Stick', emoji: '📐', desc: 'a miniature flexible sanding stick with fine-grit abrasive surface on a foam backing pad, dual-sided for different grits, for smoothing and finishing model figure surfaces' },
            { id: 'hero_guillotine', name: 'Sprue Cutter', emoji: '✂️', desc: 'miniature precision flush-cut sprue nippers with hardened steel jaws, spring-loaded handles, for cleanly removing model kit parts from plastic sprues and runners' }
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
    },
    squishy: {
        name: 'Potong Squishy',
        icon: '🧽',
        tools: [
            { id: 'chainsaw_squishy', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw with sharp chain teeth, orange and white body, pull-start cord, being used to dramatically slice through squishy toys, foam exploding and deforming under the chain' },
            { id: 'squishy_knife', name: 'Pisau Tajam', emoji: '🔪', desc: 'a miniature razor-sharp knife with a polished steel blade, wooden handle, for slicing through squishy foam toys with smooth satisfying cuts revealing colorful interior' },
            { id: 'squishy_scissors', name: 'Gunting Besar', emoji: '✂️', desc: 'miniature heavy-duty scissors with thick blades, for cutting through squishy stress toys, foam compressing and springing back around the blade edges' },
            { id: 'squishy_rotary', name: 'Rotary Cutter', emoji: '🔴', desc: 'a miniature rotary cutting tool with a sharp circular blade, for rolling through squishy material creating smooth clean cuts through foam layers' },
            { id: 'squishy_hot', name: 'Hot Knife', emoji: '🔥', desc: 'a miniature heated blade tool that melts through squishy foam material, creating smooth sealed edges, foam sizzling on contact with the hot metal' },
            { id: 'squishy_laser', name: 'Laser Cutter', emoji: '⚡', desc: 'a miniature laser cutting tool with a focused beam, for precisely cutting through squishy toys with clean vaporized edges, foam material separating cleanly' }
        ]
    },
    ball: {
        name: 'Potong Bola',
        icon: '⚽',
        tools: [
            { id: 'chainsaw_ball', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw with rattling chain teeth, orange body, being used to dramatically slice through sports balls, rubber and leather tearing apart, inner bladder and layers exposed' },
            { id: 'ball_knife', name: 'Pisau Tajam', emoji: '🔪', desc: 'a miniature heavy-duty utility knife with a thick sharp blade, for slicing through tough ball materials like leather, rubber, and synthetic layers' },
            { id: 'ball_saw', name: 'Gergaji Besi', emoji: '🪚', desc: 'a miniature hacksaw with fine teeth, for sawing through hard sports balls revealing interior construction, bladder and padding layers' },
            { id: 'ball_dremel', name: 'Dremel Cutting', emoji: '🌀', desc: 'a miniature rotary tool with a cutting disc, for sectioning sports balls with precision, cutting through multiple material layers cleanly' },
            { id: 'ball_scissors', name: 'Gunting Heavy-Duty', emoji: '✂️', desc: 'miniature industrial-grade scissors with reinforced blades, for cutting through thick ball materials including leather panels and rubber cores' },
            { id: 'ball_hot', name: 'Hot Wire Cutter', emoji: '🔥', desc: 'a miniature heated wire cutter for melting through synthetic ball materials, creating smooth cross-sections revealing internal layered construction' }
        ]
    },
    candy: {
        name: 'Potong Permen & Kue',
        icon: '🍬',
        tools: [
            { id: 'chainsaw_candy', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw roaring with chain teeth spinning, being used to dramatically slice through giant candy and sweets, sugar shattering, chocolate cracking, colorful candy pieces flying' },
            { id: 'candy_knife', name: 'Pisau Chef', emoji: '🔪', desc: 'a miniature chef knife with a sharp steel blade, for cleanly cutting through candy bars, chocolates, and sweets revealing colorful layered interiors' },
            { id: 'candy_cleaver', name: 'Pisau Daging', emoji: '🥩', desc: 'a miniature heavy cleaver for dramatically chopping through giant candy, hard sugar shells cracking, chocolate layers splitting apart' },
            { id: 'candy_scissors', name: 'Gunting Dapur', emoji: '✂️', desc: 'miniature kitchen scissors for snipping through gummy candies, soft nougat, and chewy sweets with satisfying clean cuts' },
            { id: 'candy_wire', name: 'Wire Cutter', emoji: '〰️', desc: 'a miniature fine wire cheese/candy cutter for slicing through soft chocolate truffles, fudge, and layered candy with perfectly smooth cross-sections' },
            { id: 'candy_saw', name: 'Gergaji Kue', emoji: '🪚', desc: 'a miniature serrated cake saw for cutting through layered cakes, pastries, and baked sweets revealing cream filling and decoration layers' }
        ]
    },
    soap: {
        name: 'Potong Sabun (ASMR)',
        icon: '🧼',
        tools: [
            { id: 'chainsaw_soap', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw with chain teeth buzzing, being used to dramatically slice through colorful bars of soap, soap shavings and chunks flying everywhere, satisfying destruction' },
            { id: 'soap_knife', name: 'Pisau Tajam', emoji: '🔪', desc: 'a miniature very sharp thin blade knife for making precise satisfying cuts through bars of soap, creating perfect thin slices with smooth surfaces' },
            { id: 'soap_peeler', name: 'Pengupas Sabun', emoji: '🥝', desc: 'a miniature Y-peeler used to create long thin satisfying curls and shavings from soap bars, peeling layers in ASMR fashion' },
            { id: 'soap_chopper', name: 'Soap Chopper', emoji: '🔲', desc: 'a miniature grid press chopper for pressing down through soap bars, creating satisfying grid-pattern cube pieces, soap crumbling into perfect squares' },
            { id: 'soap_cutter', name: 'Multi-Blade Cutter', emoji: '📏', desc: 'a miniature multi-blade wire cutter with parallel wires, for slicing soap bars into multiple uniform thin slices simultaneously' },
            { id: 'soap_scraper', name: 'Soap Scraper', emoji: '🪒', desc: 'a miniature flat scraping blade for shaving thin satisfying curls and flakes from the surface of colorful soap bars, ASMR sensory experience' }
        ]
    },
    toytren: {
        name: 'Potong Mainan Trending',
        icon: '🎮',
        tools: [
            { id: 'chainsaw_toytren', name: 'Chainsaw', emoji: '🪚', desc: 'a miniature chainsaw with sharp chain teeth, orange body, pull-start cord, being used to dramatically slice through trending toys, plastic cracking, foam and rubber internals revealed' },
            { id: 'toytren_knife', name: 'Craft Knife', emoji: '🔪', desc: 'a miniature precision craft knife with a sharp pointed blade, for carefully cutting through trending toy figures and plastic toys revealing internal construction' },
            { id: 'toytren_saw', name: 'Gergaji Mini', emoji: '🪚', desc: 'a miniature fine-tooth hobby saw for cutting through plastic and rubber trending toys, revealing hollow interiors and mechanisms inside' },
            { id: 'toytren_dremel', name: 'Dremel Rotary', emoji: '🌀', desc: 'a miniature rotary tool with cutting disc for sectioning trending toys cleanly, motor buzzing, plastic shavings spraying' },
            { id: 'toytren_scissors', name: 'Gunting Tajam', emoji: '✂️', desc: 'miniature sharp scissors for cutting through soft rubber and silicone trending toys like Pop It, stress toys, and fidget toys' },
            { id: 'toytren_hot', name: 'Hot Knife', emoji: '🔥', desc: 'a miniature heated blade for melting through plastic and silicone trending toys, material sizzling, clean thermal cuts through colorful toy bodies' }
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
// TREE POSITIONS (Wood category only)
// ==========================================
const TREE_POSITIONS = {
    standing: {
        name: 'Pohon Berdiri di Tanah',
        desc: 'The tree/plant is standing upright rooted in the ground on natural soil terrain with grass and small plants around the base. The chainsaw is actively cutting through the trunk horizontally.',
        falling_effect: 'DRAMATIC FALLING EFFECT: As the chainsaw cuts through, the tree begins to tilt and fall to one side in dramatic slow-motion — the trunk cracking and splitting at the cut point, wood fibers tearing apart, the heavy canopy swaying and accelerating downward with gravity, leaves and small branches shaking violently, dust and wood chips flying from the impact zone, the ground trembling slightly as the massive tree crashes down, creating a cloud of dust and scattered debris on impact.'
    },
    fallen: {
        name: 'Pohon Sudah Tumbang',
        desc: 'The tree has already fallen and is lying horizontally on the ground, resting on the forest floor surrounded by scattered leaves and broken branches. The trunk is being cut/sectioned into logs by the tool, sawdust accumulating on the ground beneath the cut point.',
        falling_effect: ''
    },
    branch: {
        name: 'Dahan / Ranting Pohon',
        desc: 'The tool is cutting a thick branch or limb still attached to a standing tree, working at an elevated position on the tree.',
        falling_effect: 'BRANCH FALLING EFFECT: As the branch is cut through, it detaches and drops downward — the heavy limb swinging on the last wood fibers before snapping free, leaves rustling loudly, the branch tumbling and spinning as it falls through the air, crashing through lower branches on the way down, bouncing on the ground with a heavy thud, leaves scattering everywhere on impact.'
    },
    stump: {
        name: 'Potongan Batang / Tunggul',
        desc: 'The tool is cutting through a tree stump or a section of log that is placed on the ground or a wooden chopping block, like splitting firewood or sectioning a log.',
        falling_effect: ''
    },
    floating: {
        name: 'Batang Mengapung di Sungai',
        desc: 'The tree trunk or log is partially submerged and floating in a river or stream, with water flowing around it. The tool is cutting the log while it rests in shallow water.',
        falling_effect: 'WATER SPLASH EFFECT: As the cut completes, the separated log section rolls and splashes into the water — creating ripples and small waves, water spraying upward from the impact, the log bobbing and floating downstream, wet sawdust and wood chips scattered across the water surface.'
    }
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
            // Kayu klasik
            { id: 'oak_log', name: 'Batang Kayu Oak', emoji: '🪵', desc: 'a tiny miniature oak tree log with rough bark texture, visible microscopic growth rings on the cut surface, minuscule mossy patches, small enough to fit on a fingertip' },
            { id: 'pine_plank', name: 'Papan Kayu Pinus', emoji: '🪵', desc: 'a tiny miniature pine wood plank with visible fine grain pattern, natural yellowish tone, freshly sanded surface, scaled down to match the miniature tool' },
            { id: 'mahogany', name: 'Kayu Mahoni', emoji: '🟤', desc: 'a tiny miniature dark reddish-brown mahogany timber block with beautiful deep grain, polished finish, premium hardwood scaled to dollhouse size' },
            { id: 'teak', name: 'Kayu Jati', emoji: '🪵', desc: 'a tiny miniature piece of teak wood with golden-brown color, tight grain pattern, natural oil sheen, scaled down proportionally to the miniature tool' },
            { id: 'ebony', name: 'Kayu Eboni', emoji: '🖤', desc: 'a tiny miniature jet-black ebony wood block with extremely dense fine grain, mirror-like polished surface, one of the heaviest and most luxurious woods, deep dark color throughout the cross-section' },
            { id: 'rosewood', name: 'Kayu Rosewood', emoji: '🟤', desc: 'a tiny miniature rosewood piece with rich dark reddish-purple color, beautiful swirling grain patterns, faint sweet fragrance implied, premium exotic wood with oily surface sheen' },
            { id: 'sandalwood', name: 'Kayu Cendana', emoji: '🪵', desc: 'a tiny miniature sandalwood log with warm golden-brown heartwood, creamy white sapwood outer ring, aromatic fragrant wood, smooth fine grain visible at cross-section' },
            { id: 'cedar', name: 'Kayu Cedar', emoji: '🌲', desc: 'a tiny miniature cedar wood piece with warm reddish-brown color, aromatic texture, natural insect-repelling properties implied, straight grain with fine lines, lightweight feel' },
            { id: 'birch', name: 'Kayu Birch', emoji: '🌳', desc: 'a tiny miniature birch log with distinctive white papery bark peeling in thin layers, pale cream-colored wood underneath, fine even grain visible at the cut surface' },
            { id: 'walnut', name: 'Kayu Walnut', emoji: '🟤', desc: 'a tiny miniature walnut wood piece with rich chocolate brown heartwood, lighter sapwood contrast, beautiful wavy grain patterns, premium furniture-grade hardwood' },
            { id: 'maple', name: 'Kayu Maple', emoji: '🍁', desc: 'a tiny miniature maple wood block with light creamy white color, very fine uniform grain, birds-eye figure pattern visible, hard dense wood with satin-like surface' },
            // Pohon tropis
            { id: 'coconut_tree', name: 'Pohon Kelapa', emoji: '🌴', desc: 'a tiny miniature coconut palm tree trunk with fibrous brown bark texture, being cut to reveal the dense fibrous interior without growth rings, scattered vascular bundles visible in cross-section, tropical palm wood' },
            { id: 'banana_tree', name: 'Pohon Pisang', emoji: '🍌', desc: 'a tiny miniature banana tree trunk with layered green pseudostem, being sliced to reveal concentric leaf sheath layers inside, moist watery interior, bright green outer layer peeling' },
            { id: 'bamboo', name: 'Bambu', emoji: '🎋', desc: 'a tiny miniature thick green bamboo culm with visible nodes and hollow interior, smooth outer skin, being cut to reveal the hollow tube structure with fibrous wall, proportionally scaled down' },
            { id: 'mango_tree', name: 'Pohon Mangga', emoji: '🥭', desc: 'a tiny miniature mango tree trunk with rough dark gray-brown bark, being cut to reveal yellowish-orange heartwood with interlocking grain, dense tropical hardwood, tiny mango fruits on branches' },
            { id: 'rubber_tree', name: 'Pohon Karet', emoji: '🌳', desc: 'a tiny miniature rubber tree trunk with smooth gray bark, being sliced to reveal white milky latex sap oozing from the cut surface, light-colored wood, dripping sticky white rubber sap' },
            { id: 'jackfruit_tree', name: 'Pohon Nangka', emoji: '🌳', desc: 'a tiny miniature jackfruit tree trunk with rough dark bark, being cut to reveal bright golden-yellow heartwood that deepens with exposure, sticky sap oozing, beautiful warm-toned wood grain' },
            { id: 'durian_tree', name: 'Pohon Durian', emoji: '🌳', desc: 'a tiny miniature durian tree trunk with rough reddish-brown bark, being cut to reveal light pinkish-brown wood with straight grain, tall tropical tree trunk, tiny durian fruits hanging from branches' },
            { id: 'papaya_tree', name: 'Pohon Pepaya', emoji: '🌴', desc: 'a tiny miniature papaya tree trunk with soft green hollow stem, being sliced to reveal the hollow interior with white pith walls, very soft and spongy wood-like material, large tropical leaves on top' },
            { id: 'rambutan_tree', name: 'Pohon Rambutan', emoji: '🌳', desc: 'a tiny miniature rambutan tree trunk with rough brown bark, being cut to reveal dense reddish wood grain, tiny clusters of hairy red rambutan fruits hanging from branches, tropical Southeast Asian tree' },
            // Pohon buah
            { id: 'apple_tree', name: 'Pohon Apel', emoji: '🍎', desc: 'a tiny miniature apple tree trunk with grayish-brown scaly bark, being cut to reveal hard dense pinkish-brown heartwood with fine grain, tiny red apples hanging from delicate branches' },
            { id: 'cherry_tree', name: 'Pohon Sakura', emoji: '🌸', desc: 'a tiny miniature cherry blossom tree trunk with smooth reddish-brown bark with horizontal lenticels, being cut to reveal warm pinkish-red heartwood, tiny pink sakura flowers blooming on branches' },
            { id: 'orange_tree', name: 'Pohon Jeruk', emoji: '🍊', desc: 'a tiny miniature orange tree trunk with thorny branches, light brown bark, being cut to reveal pale yellow hardwood with citrus-scented grain, tiny orange fruits and white blossoms on branches' },
            { id: 'avocado_tree', name: 'Pohon Alpukat', emoji: '🥑', desc: 'a tiny miniature avocado tree trunk with smooth grayish-green bark, being cut to reveal soft light-colored wood with fine grain, large green leaves, tiny avocado fruits hanging from branches' },
            // Pohon besar & hutan
            { id: 'eucalyptus', name: 'Pohon Eucalyptus', emoji: '🌿', desc: 'a tiny miniature eucalyptus tree trunk with distinctive peeling bark revealing smooth multi-colored layers underneath (cream, green, orange), aromatic wood, being cut to reveal pale interlocked grain' },
            { id: 'willow', name: 'Pohon Willow', emoji: '🌳', desc: 'a tiny miniature weeping willow tree trunk with deeply furrowed gray-brown bark, being cut to reveal lightweight pale wood, drooping cascade of thin green branches hanging gracefully' },
            { id: 'banyan', name: 'Pohon Beringin', emoji: '🌳', desc: 'a tiny miniature banyan tree with massive trunk and aerial prop roots descending from branches, rough gray bark, being cut to reveal pale wood, iconic Indonesian shade tree' },
            { id: 'acacia', name: 'Pohon Akasia', emoji: '🌳', desc: 'a tiny miniature acacia tree with flat-topped canopy shape, thorny branches, being cut to reveal dark reddish-brown heartwood with beautiful striped grain, savanna-style tree' },
            { id: 'redwood', name: 'Pohon Redwood', emoji: '🌲', desc: 'a tiny miniature giant redwood tree trunk section with thick fibrous reddish bark, massive scale, being cut to reveal stunning deep red heartwood with straight even grain, ancient tree' },
            { id: 'baobab', name: 'Pohon Baobab', emoji: '🌳', desc: 'a tiny miniature baobab tree with its iconic massive swollen trunk, smooth gray bark, being cut to reveal soft fibrous spongy interior that stores water, unique African tree with tiny branches on top' },
            // Tanaman lain
            { id: 'cactus', name: 'Kaktus Besar', emoji: '🌵', desc: 'a tiny miniature tall saguaro cactus with ribbed green body and sharp spines, being sliced to reveal watery gel-filled interior with fibrous ribs, succulent cross-section, desert plant' },
            { id: 'tree_branch', name: 'Dahan Pohon', emoji: '🌿', desc: 'a tiny miniature thick tree branch with green bark, microscopic leaves sprouting, tiny sap droplet visible at cut point, being cut to reveal growth rings and inner bark layers' },
            { id: 'driftwood', name: 'Kayu Apung', emoji: '🌊', desc: 'a tiny miniature piece of weathered driftwood, bleached by sun and salt water, smooth organic shapes, pale gray tone, small enough to rest on a coin' },
            { id: 'plywood', name: 'Plywood / Triplek', emoji: '📋', desc: 'a tiny miniature sheet of layered plywood showing multiple hair-thin wood veneer layers on the edge, flat smooth surface, coin-sized' },
            { id: 'sugar_palm', name: 'Pohon Aren', emoji: '🌴', desc: 'a tiny miniature sugar palm tree trunk with dark fibrous hairy bark covering, being cut to reveal dense dark brown wood with scattered vascular bundles, black palm fibers peeling from surface' },
            { id: 'mangrove', name: 'Pohon Bakau', emoji: '🌳', desc: 'a tiny miniature mangrove tree with tangled aerial stilt roots emerging from water, being cut to reveal extremely hard dense dark wood, saltwater-tolerant coastal tree, barnacles on roots' },
            { id: 'clove_tree', name: 'Pohon Cengkeh', emoji: '🌳', desc: 'a tiny miniature clove tree trunk with smooth gray bark, being cut to reveal aromatic light brown wood, tiny dried clove buds on branches, fragrant Indonesian spice tree' },
            { id: 'sengon', name: 'Pohon Sengon', emoji: '🌳', desc: 'a tiny miniature sengon/albizia tree trunk with smooth white bark, being cut to reveal very soft light white wood with wide growth rings, fast-growing tropical tree commonly found in Indonesia' }
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
            { id: 'durian', name: 'Durian', emoji: '🏆', desc: 'a tiny miniature durian with thorny spiky shell being cut open, creamy yellow custard-like flesh pods visible inside, king of fruits in miniature scale' },
            { id: 'tomato_fruit', name: 'Tomat', emoji: '🍅', desc: 'a tiny miniature ripe red tomato being sliced in half, juicy red flesh with seed chambers visible inside, glistening juice droplets, green stem cap on top, glossy smooth skin' },
            { id: 'cucumber', name: 'Timun', emoji: '🥒', desc: 'a tiny miniature fresh green cucumber being sliced into rounds, crisp light green flesh with tiny white seeds arranged in a circle at the center, dark green skin with small bumps' },
            { id: 'butternut_squash', name: 'Labu Kuning', emoji: '🎃', desc: 'a tiny miniature butternut squash with tan-orange skin being cut open, revealing vibrant deep orange flesh, seed cavity with flat oval seeds, smooth dense interior' },
            { id: 'bell_pepper', name: 'Paprika', emoji: '🫑', desc: 'a tiny miniature colorful bell pepper being sliced in half, hollow interior with white ribs and tiny round seeds, thick crisp walls, glossy smooth skin in vibrant red/yellow/green' },
            { id: 'eggplant_fruit', name: 'Terong', emoji: '🍆', desc: 'a tiny miniature glossy purple eggplant being sliced into rounds, creamy white spongy flesh with tiny seed pattern inside, smooth dark purple skin, green calyx cap on top' },
            { id: 'avocado', name: 'Alpukat', emoji: '🥑', desc: 'a tiny miniature ripe avocado being cut in half, creamy green-yellow buttery flesh visible, large round brown pit in the center, dark green bumpy skin, smooth gradient flesh' },
            { id: 'pumpkin_fruit', name: 'Labu', emoji: '🎃', desc: 'a tiny miniature round pumpkin being cut open, thick orange flesh walls, fibrous stringy interior with flat white seeds, deep ribbed exterior, classic pumpkin shape' },
            { id: 'papaya', name: 'Pepaya', emoji: '🍈', desc: 'a tiny miniature ripe papaya being sliced in half lengthwise, vibrant orange-salmon flesh, cluster of round black seeds in the central cavity, thin green-yellow skin' },
            { id: 'guava', name: 'Jambu Biji', emoji: '🍈', desc: 'a tiny miniature fresh guava being cut in half, pink flesh with numerous tiny hard seeds scattered throughout the center, light green bumpy outer skin, fragrant tropical fruit' },
            { id: 'starfruit', name: 'Belimbing', emoji: '⭐', desc: 'a tiny miniature starfruit being sliced into cross-sections, revealing perfect five-pointed star shape, translucent yellow-green waxy flesh, thin brown seed lines along each ridge' },
            { id: 'passion_fruit', name: 'Markisa', emoji: '💜', desc: 'a tiny miniature passion fruit being cut open, revealing bright orange-yellow pulp filled with dark seeds surrounded by translucent juice sacs, wrinkled purple-brown outer shell' },
            { id: 'jackfruit', name: 'Nangka', emoji: '🟡', desc: 'a tiny miniature jackfruit being cut open, revealing yellow fleshy pods (bulbs) surrounding large seeds, sticky white latex sap oozing, bumpy green spiky thick rind exterior' },
            { id: 'mangosteen', name: 'Manggis', emoji: '🟣', desc: 'a tiny miniature mangosteen being opened, thick dark purple rind cracking to reveal pure white segmented flesh inside, juicy translucent white segments, crown-like green calyx on top' },
            { id: 'soursop', name: 'Sirsak', emoji: '💚', desc: 'a tiny miniature soursop being cut open, white fibrous creamy flesh with black seeds scattered throughout, soft spiny green skin exterior, sweet aromatic tropical fruit' },
            { id: 'corn_fruit', name: 'Jagung', emoji: '🌽', desc: 'a tiny miniature ear of corn being sliced across, neat rows of plump yellow kernels in circular pattern visible at cross-section, green husk partially peeled back, golden silk threads' },
            { id: 'cempedak', name: 'Cempedak', emoji: '🟠', desc: 'a tiny miniature cempedak being cut open, revealing bright orange-yellow fleshy segments similar to jackfruit but more aromatic, sticky latex sap, bumpy green-brown thick rind' },
            { id: 'sawo', name: 'Sawo', emoji: '🤎', desc: 'a tiny miniature sapodilla (sawo) being sliced in half, revealing sweet grainy brown flesh with a sandy texture, glossy black flat seeds in the center, rough brown thin skin exterior' }
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
            { id: 'eggplant', name: 'Terong', emoji: '🍆', desc: 'a tiny miniature purple eggplant being sliced into rounds, creamy white flesh with tiny seed pattern inside, glossy dark purple skin, green calyx cap' },
            { id: 'potato', name: 'Kentang', emoji: '🥔', desc: 'a tiny miniature potato being sliced in half, starchy white-yellow flesh inside, thin brown skin, visible starch granules at the cut surface, earthy root vegetable' },
            { id: 'sweet_potato', name: 'Ubi Jalar', emoji: '🍠', desc: 'a tiny miniature sweet potato being cut open, vibrant orange flesh inside, reddish-purple skin exterior, moist starchy texture visible at the cross-section' },
            { id: 'cassava', name: 'Singkong', emoji: '🥔', desc: 'a tiny miniature cassava root being sliced, pure white starchy flesh with a fibrous core line in the center, thick brown bark-like skin, waxy texture' },
            { id: 'radish', name: 'Lobak', emoji: '🥕', desc: 'a tiny miniature white daikon radish being sliced into rounds, crisp translucent white flesh, smooth white skin, fresh and crunchy texture visible at the cut' },
            { id: 'beetroot', name: 'Bit', emoji: '🟣', desc: 'a tiny miniature beetroot being cut in half, deep dark red-purple flesh with concentric ring patterns inside, dark red juice bleeding from the cut, leafy green top' },
            { id: 'shallot', name: 'Bawang Merah', emoji: '🧅', desc: 'a tiny miniature red shallot being sliced, purple-red layers visible inside with white translucent rings, thin papery reddish-brown outer skin peeling' },
            { id: 'garlic', name: 'Bawang Putih', emoji: '🧄', desc: 'a tiny miniature garlic bulb being cut in half, revealing individual white cloves arranged in a circle, papery white skin, pungent aroma implied, sticky juice on cut surface' },
            { id: 'cucumber_veg', name: 'Mentimun', emoji: '🥒', desc: 'a tiny miniature fresh cucumber being sliced into thin rounds, crisp light green flesh with tiny white seeds in circular pattern, dark green skin with subtle ridges' },
            { id: 'butternut_veg', name: 'Labu Kuning', emoji: '🎃', desc: 'a tiny miniature butternut squash being cut open, deep vibrant orange flesh, seed cavity with flat oval seeds clustered inside, smooth tan-orange skin exterior' },
            { id: 'chayote', name: 'Labu Siam', emoji: '🥒', desc: 'a tiny miniature chayote squash being sliced in half, pale green translucent flesh with a single flat seed in the center, light green wrinkled skin, crisp watery texture' },
            { id: 'bitter_gourd', name: 'Pare', emoji: '🥒', desc: 'a tiny miniature bitter gourd being cut open, revealing white pith interior with red-coated seeds, bumpy warty green skin exterior, hollow seed chamber visible' },
            { id: 'bell_pepper_veg', name: 'Paprika', emoji: '🫑', desc: 'a tiny miniature bell pepper being sliced in half, hollow interior with white membrane ribs and tiny round seeds, thick crisp colorful walls in red/yellow/green' },
            { id: 'long_bean', name: 'Kacang Panjang', emoji: '🫛', desc: 'a tiny miniature long bean being sliced, thin green pods revealing small round beans inside in a neat row, crisp snap at the cut, long slender green vegetable' },
            { id: 'green_bean', name: 'Buncis', emoji: '🫛', desc: 'a tiny miniature green bean being snapped and sliced, crisp green pod with small white beans visible inside, fresh snap at the break point, tender young pods' }
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
            { id: 'energy_drink', name: 'Minuman Energi', emoji: '⚡', desc: 'a tiny miniature energy drink can with bold graphic design, metallic aluminum body being cut open, neon-colored liquid inside, pull-tab on top' },
            { id: 'teh_botol', name: 'Teh Botol Sosro', emoji: '🍵', desc: 'a tiny miniature iconic Teh Botol Sosro glass bottle with the classic brown tea color, red and yellow label with Sosro branding, being cut to reveal dark amber jasmine tea liquid inside' },
            { id: 'sprite', name: 'Botol Sprite', emoji: '🥤', desc: 'a tiny miniature Sprite bottle with the distinctive green-tinted clear plastic, green and silver label, being cut to reveal crystal-clear lemon-lime carbonated liquid with fizzy bubbles inside' },
            { id: 'pepsi', name: 'Botol Pepsi', emoji: '🥤', desc: 'a tiny miniature Pepsi bottle with the iconic red-white-blue circular logo, blue label design, being cut to reveal dark brown cola liquid with carbonation bubbles inside' },
            { id: 'pocari', name: 'Pocari Sweat', emoji: '💧', desc: 'a tiny miniature Pocari Sweat bottle with the iconic blue and white label design, being cut to reveal slightly cloudy isotonic sports drink liquid inside, clear plastic bottle' },
            { id: 'mizone', name: 'Mizone', emoji: '💧', desc: 'a tiny miniature Mizone isotonic drink bottle with colorful label, curved plastic bottle shape, being cut to reveal lightly colored vitamin-infused liquid inside' },
            { id: 'le_minerale', name: 'Le Minerale', emoji: '💧', desc: 'a tiny miniature Le Minerale water bottle with the distinctive blue label and mountain logo, clear plastic bottle, being cut to reveal crystal-clear mineral water inside' },
            { id: 'ades', name: 'Ades', emoji: '💧', desc: 'a tiny miniature Ades water bottle with green eco-friendly label design, clear crushable plastic bottle, being cut to reveal pure clear drinking water inside' },
            { id: 'buavita', name: 'Buavita', emoji: '🧃', desc: 'a tiny miniature Buavita juice box with colorful fruit imagery on the packaging, tetra pak carton, being cut to reveal thick natural fruit juice inside, straw hole on top' },
            { id: 'minute_maid', name: 'Minute Maid Pulpy Orange', emoji: '🍊', desc: 'a tiny miniature Minute Maid Pulpy Orange bottle with orange label and fruit imagery, being cut to reveal bright orange juice with visible real orange pulp bits floating inside' },
            { id: 'floridina', name: 'Floridina', emoji: '🍊', desc: 'a tiny miniature Floridina orange juice bottle with tropical fruit label design, being cut to reveal orange citrus juice with real fruit pulp bits visible inside' },
            { id: 'frestea', name: 'Frestea', emoji: '🍵', desc: 'a tiny miniature Frestea bottle with green tea label design, plastic bottle, being cut to reveal golden-amber tea liquid inside, refreshing Indonesian tea brand' },
            { id: 'ichitan', name: 'Ichitan Thai Tea', emoji: '🍵', desc: 'a tiny miniature Ichitan Thai Tea bottle with distinctive gold and brown label, being cut to reveal rich creamy orange-brown Thai milk tea liquid inside' },
            { id: 'nu_green_tea', name: 'Nu Green Tea', emoji: '🍵', desc: 'a tiny miniature Nu Green Tea bottle with green and white label, pet plastic bottle, being cut to reveal light golden-green natural green tea liquid inside' },
            { id: 'yakult', name: 'Yakult', emoji: '🥛', desc: 'a tiny miniature iconic Yakult bottle with the small distinctive shape, red foil cap, white and red branding, being cut to reveal creamy white probiotic fermented milk drink inside' },
            { id: 'vit_levite', name: 'Vit Levite', emoji: '💧', desc: 'a tiny miniature Vit Levite flavored water bottle with colorful fruit-themed label, being cut to reveal lightly tinted fruit-flavored water inside, slim bottle design' },
            { id: 'hydro_coco', name: 'Hydro Coco', emoji: '🥥', desc: 'a tiny miniature Hydro Coco coconut water bottle with green and white tropical label design, being cut to reveal slightly cloudy natural coconut water inside' },
            { id: 'tebs', name: 'Tebs Sparkling', emoji: '✨', desc: 'a tiny miniature Tebs sparkling tea can with silver and green design, aluminum can, being cut to reveal golden carbonated sparkling tea with fine bubbles inside' },
            { id: 'bear_brand', name: 'Bear Brand Milk', emoji: '🐻', desc: 'a tiny miniature Bear Brand sterilized milk can with the iconic bear logo, gold and white design, aluminum can being cut to reveal pure white sterilized milk inside' },
            { id: 'ultra_milk', name: 'Ultra Milk (botol)', emoji: '🥛', desc: 'a tiny miniature Ultra Milk bottle with colorful milk branding, UHT milk packaging, being cut to reveal creamy white fresh milk inside, various flavor variants' },
            { id: 'good_day', name: 'Good Day Coffee (botol)', emoji: '☕', desc: 'a tiny miniature Good Day coffee bottle with brown and gold label design, glass bottle, being cut to reveal rich brown coffee milk blend inside with creamy swirl' },
            { id: 'nescafe', name: 'Nescafé Coffee (botol)', emoji: '☕', desc: 'a tiny miniature Nescafé ready-to-drink coffee bottle with the iconic red logo, being cut to reveal dark brown smooth coffee liquid with a hint of cream inside' },
            { id: 'pokka', name: 'Pokka Coffee', emoji: '☕', desc: 'a tiny miniature Pokka coffee can with the classic brown and gold Japanese-style design, aluminum can being cut to reveal rich dark brown premium coffee liquid inside' }
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
            { id: 'hotwheels', name: 'Hot Wheels', emoji: '🔥', desc: 'a tiny miniature Hot Wheels die-cast metal car with flame decals, chrome wheels, being cut in half revealing the zinc alloy body, plastic interior, metal axle pins, and wheel mechanism' },
            { id: 'tomica', name: 'Tomica', emoji: '🚗', desc: 'a tiny miniature Tomica die-cast car (Japanese model) with accurate real car proportions, opening doors, being sectioned to show metal body, detailed plastic interior, suspension mechanism' },
            { id: 'truck_mini', name: 'Truk Mini', emoji: '🚚', desc: 'a tiny miniature toy dump truck with tilting bed, chunky plastic body, being cut to reveal hollow interior, axle mechanism, simple wheel assembly' },
            { id: 'race_car', name: 'Mobil Balap', emoji: '🏁', desc: 'a tiny miniature Formula 1 toy race car with aerodynamic body, rear wing, being sliced to show sleek internal structure, tiny driver figure inside cockpit' },
            { id: 'suv_mini', name: 'SUV Mini', emoji: '🚙', desc: 'a tiny miniature toy SUV with roof rack, off-road tires, being cut open revealing rugged plastic body construction, spring suspension, four-wheel-drive axle system' },
            { id: 'sport_car', name: 'Mobil Sport', emoji: '🏎️', desc: 'a tiny miniature Lamborghini-style toy sports car with scissor doors, low profile body, being sectioned to reveal detailed interior, engine bay molding, die-cast metal chassis' },
            { id: 'classic_car', name: 'Mobil Klasik', emoji: '🚕', desc: 'a tiny miniature vintage VW Beetle toy car with rounded body, chrome bumpers, being cut to show retro interior design, simple mechanical construction, nostalgia charm' },
            { id: 'bus_mini', name: 'Bus Mini', emoji: '🚌', desc: 'a tiny miniature double-decker toy bus with red London bus design, being sliced to reveal two-floor interior, tiny passenger seats, staircase between decks' },
            { id: 'excavator', name: 'Excavator', emoji: '⛏️', desc: 'a tiny miniature toy excavator with articulated boom arm, bucket with teeth, rotating cab on tracks, being cut to reveal hydraulic cylinder mechanism, track drive system, operator cab interior' },
            { id: 'bulldozer', name: 'Bulldozer', emoji: '🚜', desc: 'a tiny miniature toy bulldozer with large front blade, crawler tracks, exhaust stack, being cut to reveal heavy-duty track mechanism, blade push frame construction, engine compartment' },
            { id: 'dump_truck', name: 'Dump Truck', emoji: '🚛', desc: 'a tiny miniature toy dump truck with large tilting bed, massive off-road tires, being cut to reveal hydraulic tipping mechanism, heavy chassis frame, deep cargo bed interior' },
            { id: 'wheel_loader', name: 'Wheel Loader', emoji: '🔄', desc: 'a tiny miniature toy wheel loader with large front bucket, articulated steering joint, massive rubber tires, being cut to reveal bucket linkage mechanism, articulation pivot, cab interior' },
            { id: 'backhoe_loader', name: 'Backhoe Loader', emoji: '🦾', desc: 'a tiny miniature toy backhoe loader with front bucket and rear excavator arm, stabilizer legs, being cut to reveal dual-function hydraulic systems, swing mechanism, operator cab' },
            { id: 'crane_truck', name: 'Crane Truck', emoji: '🏗️', desc: 'a tiny miniature toy crane truck with telescoping boom arm, outrigger stabilizers, cable winch, being cut to reveal boom extension mechanism, winch drum, counterweight system' },
            { id: 'concrete_mixer', name: 'Truk Molen', emoji: '🌀', desc: 'a tiny miniature toy concrete mixer truck with rotating drum, spiral fins inside, discharge chute, being cut to reveal the spiral mixing blade interior, drum rotation mechanism, thick cement residue' },
            { id: 'asphalt_paver', name: 'Asphalt Paver', emoji: '🛤️', desc: 'a tiny miniature toy asphalt paver with wide screed plate, hopper, conveyor system, being cut to reveal material feed mechanism, screed heating elements, tracked undercarriage' },
            { id: 'road_roller', name: 'Road Roller', emoji: '🛞', desc: 'a tiny miniature toy road roller (vibro roller) with heavy steel drum, ROPS cab, being cut to reveal vibration mechanism inside the drum, counterweight system, hydraulic drive' },
            { id: 'motor_grader', name: 'Motor Grader', emoji: '🔪', desc: 'a tiny miniature toy motor grader with long adjustable blade underneath, tandem rear axles, being cut to reveal blade angle adjustment mechanism, articulated frame, operator cab interior' },
            { id: 'forklift', name: 'Forklift', emoji: '📦', desc: 'a tiny miniature toy forklift with lifting mast, fork tines, counterweight rear, being cut to reveal chain lift mechanism inside the mast, hydraulic cylinder, small engine compartment' },
            { id: 'skid_steer', name: 'Skid Steer Loader', emoji: '🔲', desc: 'a tiny miniature toy skid steer loader with front bucket, compact body, being cut to reveal independent wheel drive mechanism, compact hydraulic system, tiny operator compartment' },
            { id: 'compactor', name: 'Compactor', emoji: '⬇️', desc: 'a tiny miniature toy soil compactor with padfoot drum, enclosed cab, being cut to reveal heavy vibration mechanism inside drum, padfoot welded pattern, hydraulic drive system' },
            { id: 'water_tank_truck', name: 'Truk Tangki Air', emoji: '💧', desc: 'a tiny miniature toy water tank truck with cylindrical tank, spray nozzles, being cut to reveal hollow tank interior with water baffles, pump mechanism, spray distribution system' },
            { id: 'flatbed_truck', name: 'Flatbed Truck', emoji: '➖', desc: 'a tiny miniature toy flatbed truck with long flat cargo bed, stake sides, being cut to reveal steel frame chassis, suspension system, cargo tie-down anchor points' },
            { id: 'crawler_crane', name: 'Crawler Crane', emoji: '🔺', desc: 'a tiny miniature toy crawler crane with lattice boom, heavy crawler tracks, cable system, being cut to reveal lattice boom pin connections, winch drum mechanism, counterweight stack' },
            { id: 'mobile_crane', name: 'Mobile Crane', emoji: '🦺', desc: 'a tiny miniature toy mobile crane on wheeled chassis, telescoping boom, outriggers, being cut to reveal nested telescoping boom sections, slewing ring mechanism, operator cab' },
            { id: 'drilling_truck', name: 'Truk Bor Tanah', emoji: '🔩', desc: 'a tiny miniature toy drilling machine truck with drill mast, auger bit, stabilizer jacks, being cut to reveal rotary drill mechanism, kelly bar system, mud pump internals' },
            { id: 'concrete_pump', name: 'Concrete Pump Truck', emoji: '🧱', desc: 'a tiny miniature toy concrete pump truck with folding boom arm, hopper, being cut to reveal concrete pipeline running through boom sections, piston pump mechanism, valve system' },
            { id: 'telehandler', name: 'Telehandler', emoji: '🔼', desc: 'a tiny miniature toy telehandler with telescoping boom, fork attachment, being cut to reveal boom extension cylinder, stabilizer mechanism, versatile attachment mounting plate' }
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
        label: 'Figur Superhero Miniatur',
        items: [
            { id: 'spiderman', name: 'Red Web Hero', emoji: '🕷️', desc: 'a tiny miniature collectible cross-section display model of an action figure wearing a full-body tight red and blue costume covered in black web patterns, large white angular eye lenses on the mask, in a dynamic crouching pose — the figure is a factory-made cutaway display model showing the internal plastic/PVC construction layers, articulation ball joints visible inside, painted detail layers, like a museum exhibit piece' },
            { id: 'hulk', name: 'Green Giant Hero', emoji: '💪', desc: 'a tiny miniature collectible cross-section display model of a giant green-skinned muscular action figure with an intense expression, messy black hair, wearing torn purple shorts, massive fists — the figure is a factory-made cutaway display showing thick solid PVC body construction, heavy dense plastic interior, multiple paint coating layers on the green skin surface' },
            { id: 'batman', name: 'Dark Knight Hero', emoji: '🦇', desc: 'a tiny miniature collectible cross-section display model of an action figure in a dark gray and black armored suit, pointed-ear cowl mask, flowing black cape, bat-shaped emblem on chest, utility belt — the figure is a factory-made cutaway exhibit piece showing detailed interior structure, articulated joint mechanism, cape attachment point construction' },
            { id: 'ironman', name: 'Red Gold Armor Hero', emoji: '🤖', desc: 'a tiny miniature collectible cross-section display model of an action figure in a sleek metallic red and gold high-tech armor suit, glowing blue circular chest piece, helmet with illuminated eye slits — the figure is a factory-made cutaway display revealing complex layered armor detail, tiny LED light mechanism, segmented armor plate construction' },
            { id: 'superman', name: 'Blue Cape Hero', emoji: '🦸', desc: 'a tiny miniature collectible cross-section display model of an action figure wearing a blue bodysuit with red boots, red flowing cape, a large diamond-shaped emblem on the chest, black curly hair with a signature curl on forehead — the figure is a factory-made cutaway exhibit showing solid muscular body construction, internal skeleton frame, cape fabric attachment method' },
            { id: 'captain', name: 'Star Shield Hero', emoji: '🛡️', desc: 'a tiny miniature collectible cross-section display model of a patriotic action figure in a red-white-and-blue star-spangled suit, with a large round striped shield with a star in the center, winged helmet — the figure is a factory-made cutaway display showing body articulation system, shield attachment mechanism, detailed costume paint layers' },
            { id: 'thor', name: 'Thunder Warrior Hero', emoji: '⚡', desc: 'a tiny miniature collectible cross-section display model of a muscular Norse warrior action figure with long blonde hair, silver-scaled armor, flowing red cape, holding a short-handled square hammer accessory — the figure is a factory-made cutaway exhibit showing muscular build construction, cape attachment, hammer accessory socket mechanism' },
            { id: 'wonder_woman', name: 'Amazon Warrior Hero', emoji: '👸', desc: 'a tiny miniature collectible cross-section display model of a warrior woman action figure in red-and-gold strapless armor, blue starry skirt, silver tiara with a star, silver arm bracers, holding a golden lasso accessory — the figure is a factory-made cutaway display showing detailed body construction, articulation joints, accessory attachment points' }
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
    },
    squishy: {
        label: 'Squishy / Stress Toy yang Dipotong',
        items: [
            { id: 'squishy_food', name: 'Squishy Makanan', emoji: '🍩', desc: 'a tiny miniature food-shaped squishy toy (donut/burger/cake shape) with colorful slow-rising foam, being cut to reveal the dense memory foam interior with smooth uniform texture, satisfying slow deformation' },
            { id: 'stress_ball', name: 'Stress Ball', emoji: '🟡', desc: 'a tiny miniature mesh stress ball filled with colorful slime/gel, being cut open to reveal the gooey gel squishing out through the mesh net, colorful oozing material bulging through holes' },
            { id: 'squishy_animal', name: 'Squishy Hewan', emoji: '🐱', desc: 'a tiny miniature animal-shaped squishy toy (cat/panda/unicorn), being sliced to reveal soft dense polyurethane foam interior, slow-rising material deforming satisfyingly around the blade' },
            { id: 'slime_ball', name: 'Bola Slime', emoji: '🟢', desc: 'a tiny miniature ball filled with colorful stretchy slime, being cut open to reveal the gooey stretchy slime oozing out, glittery sparkly slime material dripping and stretching' },
            { id: 'water_beads', name: 'Orbeez / Water Beads', emoji: '🔮', desc: 'a tiny miniature container or ball filled with colorful Orbeez water beads, being cut to reveal hundreds of tiny translucent colorful gel spheres spilling out, bouncy jelly-like hydrogel beads' },
            { id: 'kinetic_sand', name: 'Kinetic Sand', emoji: '🏖️', desc: 'a tiny miniature block of kinetic sand being sliced, the sand holding its shape momentarily then slowly crumbling apart satisfyingly, flowing and cascading like slow-motion sand waterfall' },
            { id: 'squishy_fruit', name: 'Squishy Buah', emoji: '🍓', desc: 'a tiny miniature fruit-shaped squishy toy (strawberry/peach/watermelon), being cut in half showing the printed fruit design on outside and plain white foam interior, satisfying slow squish' },
            { id: 'fidget_cube', name: 'Fidget Cube', emoji: '🎲', desc: 'a tiny miniature fidget cube toy with buttons, switches, and spinners on each face, being cut open to reveal the internal spring mechanisms, button assemblies, and click mechanisms inside' }
        ]
    },
    ball: {
        label: 'Bola yang Dipotong',
        items: [
            { id: 'soccer_ball', name: 'Bola Sepak', emoji: '⚽', desc: 'a tiny miniature soccer ball with classic black and white pentagon panels, being cut in half to reveal multiple layers — outer synthetic leather, foam backing, polyester lining, rubber bladder in the center' },
            { id: 'basketball', name: 'Bola Basket', emoji: '🏀', desc: 'a tiny miniature orange basketball with black channel lines, being cut in half showing thick rubber outer shell, nylon winding layers, and inflatable rubber bladder core' },
            { id: 'tennis_ball', name: 'Bola Tenis', emoji: '🎾', desc: 'a tiny miniature yellow-green tennis ball with white seam line, being cut to reveal the hollow rubber core with pressurized air inside, thick felt outer layer separating from rubber' },
            { id: 'baseball', name: 'Bola Baseball', emoji: '⚾', desc: 'a tiny miniature white baseball with red stitching, being cut to reveal the cork and rubber core center (pill), tightly wound yarn layers, and leather cover' },
            { id: 'volleyball', name: 'Bola Voli', emoji: '🏐', desc: 'a tiny miniature white volleyball with colored panel design, being cut showing synthetic leather panels, cloth lining layers, and rubber bladder center' },
            { id: 'golf_ball', name: 'Bola Golf', emoji: '⛳', desc: 'a tiny miniature white golf ball with dimpled surface, being perfectly halved to reveal the solid or multi-layer core — rubber center, mantle layer, and urethane cover with dimple pattern' },
            { id: 'bowling_ball', name: 'Bola Bowling', emoji: '🎳', desc: 'a tiny miniature shiny bowling ball with finger holes, being cut to show the dense heavy core weight block inside, intermediate layer, and glossy coverstock outer shell' },
            { id: 'rugby_ball', name: 'Bola Rugby', emoji: '🏉', desc: 'a tiny miniature oval rugby ball with textured grip panels, being cut showing rubber bladder, cotton lining, and synthetic leather outer panels with brand markings' }
        ]
    },
    candy: {
        label: 'Permen & Kue yang Dipotong',
        items: [
            { id: 'giant_gummy', name: 'Giant Gummy Bear', emoji: '🐻', desc: 'a tiny miniature giant gummy bear candy in translucent red/green/yellow, being sliced to reveal the dense chewy gelatin interior, gummy texture stretching at the cut, glossy surface' },
            { id: 'chocolate_bar', name: 'Cokelat Batangan', emoji: '🍫', desc: 'a tiny miniature chocolate bar with snap segments, being cut to reveal layers — dark chocolate shell, creamy filling, caramel layer, wafer, nougat, rich brown chocolate cross-section' },
            { id: 'lollipop', name: 'Lollipop Besar', emoji: '🍭', desc: 'a tiny miniature giant spiral lollipop with colorful swirl pattern on a stick, being cut across to reveal the rainbow spiral layers in cross-section, hard candy with concentric color rings' },
            { id: 'candy_cane', name: 'Candy Cane', emoji: '🎄', desc: 'a tiny miniature red and white striped candy cane, being snapped and cut to show the hard sugar interior with twisted color stripes visible in the cross-section' },
            { id: 'kinder_egg', name: 'Telur Kejutan', emoji: '🥚', desc: 'a tiny miniature chocolate surprise egg, being cut open to reveal thin chocolate outer shell, white chocolate inner layer, and a yellow plastic capsule with a tiny toy inside' },
            { id: 'rainbow_cake', name: 'Rainbow Cake', emoji: '🌈', desc: 'a tiny miniature rainbow layer cake being sliced, revealing six colorful sponge layers (red, orange, yellow, green, blue, purple) with white cream frosting between each layer' },
            { id: 'donut', name: 'Donat', emoji: '🍩', desc: 'a tiny miniature glazed donut with colorful sprinkles on top, being cut in half revealing the fluffy soft bread dough interior, glossy sugar glaze coating, cream or jam filling inside' },
            { id: 'ice_cream', name: 'Es Krim Batangan', emoji: '🍦', desc: 'a tiny miniature ice cream bar on a stick, being sliced to reveal chocolate coating layer, vanilla/strawberry ice cream body, cookie crumble core, melting slightly at the cut edge' }
        ]
    },
    soap: {
        label: 'Sabun yang Dipotong (ASMR)',
        items: [
            { id: 'soap_color', name: 'Sabun Warna-Warni', emoji: '🟣', desc: 'a tiny miniature stack of colorful soap bars in rainbow colors (pink, blue, green, yellow, purple), being sliced into thin satisfying pieces, smooth creamy soap cross-section' },
            { id: 'soap_flower', name: 'Sabun Bunga', emoji: '🌸', desc: 'a tiny miniature decorative flower-shaped soap with embedded dried flower petals, being cut to reveal the layered colored soap with botanical elements inside, aromatic beautiful cross-section' },
            { id: 'soap_glitter', name: 'Sabun Glitter', emoji: '✨', desc: 'a tiny miniature soap bar with embedded glitter and shimmer particles throughout, being sliced to reveal sparkling glittery interior, biodegradable glitter catching the light' },
            { id: 'soap_layer', name: 'Sabun Berlapis', emoji: '🌈', desc: 'a tiny miniature multi-layered soap bar with distinct colorful horizontal stripes, being cut to reveal perfectly clean layer boundaries — each color a different soap fragrance, satisfying cross-section' },
            { id: 'soap_embed', name: 'Sabun dengan Mainan', emoji: '🧸', desc: 'a tiny miniature transparent glycerin soap bar with a small toy figurine embedded inside, being cut to reveal the toy slowly being exposed through clear soap layers, exciting discovery' },
            { id: 'bath_bomb', name: 'Bath Bomb', emoji: '💣', desc: 'a tiny miniature colorful bath bomb sphere being cut in half, revealing compressed colorful powder layers inside, fizzing slightly, vibrant color rings like a geode, aromatic powder spilling' },
            { id: 'soap_crystal', name: 'Sabun Kristal', emoji: '💎', desc: 'a tiny miniature crystal/gemstone shaped glycerin soap with translucent faceted design, being cut to show the gem-like transparent interior with color gradients, prismatic light effects' },
            { id: 'soap_marble', name: 'Sabun Marmer', emoji: '🪨', desc: 'a tiny miniature marble-patterned soap with swirled multi-color design throughout, being sliced to reveal the organic marbled pattern continuing through the interior, unique in every cut' }
        ]
    },
    toytren: {
        label: 'Mainan Trending yang Dipotong',
        items: [
            { id: 'pop_it', name: 'Pop It', emoji: '🫧', desc: 'a tiny miniature colorful silicone Pop It fidget toy with bubble pattern, being cut to reveal the hollow silicone bubble chambers inside, flexible rubber material, satisfying cross-section of push-pop mechanism' },
            { id: 'skibidi_toilet', name: 'Skibidi Toilet', emoji: '🚽', desc: 'a tiny miniature Skibidi Toilet figurine — the viral character with a human head emerging from a toilet bowl, being cut in half to reveal hollow plastic toilet interior, head mechanism, bizarre cross-section' },
            { id: 'among_us', name: 'Among Us Crewmate', emoji: '🧑‍🚀', desc: 'a tiny miniature Among Us crewmate figurine in red/blue/green color with the iconic visor and backpack shape, being cut to reveal hollow plastic interior, tiny impostor bone inside joke' },
            { id: 'fidget_spinner', name: 'Fidget Spinner', emoji: '🌀', desc: 'a tiny miniature fidget spinner with three-arm design, being sliced through the center to reveal the ball bearing mechanism in the middle, weighted arm interiors, precision engineering visible' },
            { id: 'surprise_egg', name: 'Surprise Egg Besar', emoji: '🥚', desc: 'a tiny miniature giant surprise egg (LOL Surprise/Kinder style), being cut open layer by layer revealing wrapping, stickers, small accessories, and a tiny doll/toy character in the center' },
            { id: 'rubiks_cube', name: "Rubik's Cube", emoji: '🟥', desc: 'a tiny miniature colorful Rubik\'s Cube puzzle, being cut in half diagonally to reveal the internal rotating mechanism — center cross, spring-loaded core, corner and edge piece construction' },
            { id: 'roblox_fig', name: 'Figur Roblox', emoji: '🎮', desc: 'a tiny miniature Roblox character figurine with the blocky pixelated body style, customized avatar look, being cut to show hollow plastic blocky interior construction, joint mechanism' },
            { id: 'minecraft_fig', name: 'Figur Minecraft', emoji: '⛏️', desc: 'a tiny miniature Minecraft character figurine (Steve/Creeper/Enderman) with the iconic pixelated cube design, being cut to reveal the blocky plastic construction, square joint mechanisms inside' },
            { id: 'paw_patrol', name: 'Paw Patrol', emoji: '🐕', desc: 'a tiny miniature Paw Patrol toy figure (Chase/Marshall/Skye), the cute rescue puppy in uniform, being cut to show plastic body construction, paint layers, tiny vehicle mechanism inside' },
            { id: 'cocomelon', name: 'Cocomelon JJ', emoji: '🍉', desc: 'a tiny miniature Cocomelon JJ baby doll figure with the signature watermelon-pattern onesie, round baby head, being cut to reveal soft vinyl body construction, rattle mechanism inside' }
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
    chainsaw_metal: 'loud aggressive two-stroke engine roaring, carbide chain teeth screeching against metal, metallic sparks flying, metal pipe cracking and ringing, exhaust popping',
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
    chainsaw_food: 'loud two-stroke gasoline engine revving, chain teeth ripping through food dramatically, food splattering and splitting apart, engine roaring with exaggerated power',
    chef_knife: 'clean sharp chopping impact on cutting board, crisp slicing through food, blade rocking on wooden board, food fibers separating',
    bread_knife: 'gentle back-and-forth sawing through crusty bread, crust crackling and crunching, serrated blade rasping, crumbs falling',
    cleaver: 'heavy powerful thwack of thick blade hitting cutting board, bone cracking, meat splitting, deep impactful chopping sound',
    kitchen_scissors: 'sharp metallic snipping clicks, blades sliding against each other, spring tension clicking, clean cutting action',
    pizza_cutter: 'rolling wheel gliding through cheese and dough, crust crunching, cheese stretching and pulling, smooth rolling action',
    food_processor: 'electric motor whirring up to speed, blades chopping rapidly, food being pulverized, lid vibrating, rhythmic pulsing',

    // Fruit cutting tools
    chainsaw_fruit: 'aggressive two-stroke engine buzzing, chain teeth slicing through fruit flesh, juice spraying everywhere, fruit splitting open with a wet crack, engine revving',
    fruit_knife: 'gentle slicing through soft fruit flesh, juice squishing, thin blade gliding, fruit skin popping as blade penetrates',
    peeler: 'light scraping of blade against fruit skin, thin peel curling away, gentle rasping sound, rhythmic peeling strokes',
    melon_baller: 'soft scooping sound in fruit flesh, juice dripping, round scoop carving through melon, gentle pressing',
    apple_corer: 'crunching through apple flesh, core cracking, blade pushing through with resistance, apple splitting apart',
    pineapple_corer: 'twisting scraping through pineapple flesh, fibrous material separating, juice flowing, spiral blade grinding',
    mango_slicer: 'blade pressing through mango flesh, pit resisting and cracking, juice squishing out, fruit splitting',

    // Vegetable cutting tools
    chainsaw_veg: 'loud gasoline engine roaring, chain teeth chopping through vegetables dramatically, vegetable fibers cracking and snapping, pieces flying, engine sputtering',
    nakiri: 'clean precise chopping on cutting board, crisp vegetable fibers snapping, flat blade making full contact, rapid rhythmic chopping',
    mandoline: 'rapid sliding scraping across sharp blade, vegetable slicing into uniform pieces, guard clicking, steady rhythmic motion',
    herb_scissors: 'multiple blades snipping simultaneously, herbs being minced with rapid clicks, parallel blades sliding, fresh crunch',
    julienne_peeler: 'fine scraping teeth creating thin strips, vegetable fibers shredding, light rasping strokes, matchstick pieces falling',
    chopper: 'push-down mechanism clicking with spring action, grid blades crunching through vegetable, container thudding, mechanical snap',
    santoku: 'smooth rocking chop on cutting board, clean slicing through vegetables, blade tapping board, crisp precise cutting',

    // Drinks / bottle cutting tools
    chainsaw_bottle: 'two-stroke engine revving aggressively, chain teeth grinding through glass with high-pitched screeching, glass shattering and cracking, liquid splashing, engine roaring',
    bottle_cutter: 'glass scoring with a sharp scratching sound, scoring wheel rolling with high-pitched scraping, glass clicking as it rotates',
    glass_cutter: 'high-pitched scratching of diamond tip on glass surface, thin glass cracking along score line, crisp snapping',
    wire_saw: 'thin wire rasping back and forth against glass, gritty abrasive grinding, glass dust scraping, steady sawing rhythm',
    rotary_glass: 'high-speed rotary tool buzzing, diamond disc grinding against glass, fine glass dust spraying, motor whining',
    bottle_breaker: 'scoring wheel clicking and scratching, glass snapping cleanly along score line, crisp cracking sound',
    heat_cutter: 'nichrome wire humming with electrical current, material sizzling on contact, faint burning smell crackling, quiet buzzing',

    // Shoe cutting tools
    chainsaw_shoe: 'loud two-stroke engine buzzing, chain teeth ripping through leather and rubber sole, material tearing and splitting apart, foam layers crumbling, engine revving',
    leather_knife: 'sharp blade slicing through thick leather, leather fibers separating with a quiet tearing, blade scraping on cutting mat',
    shoe_scissors: 'heavy shears crunching through leather and rubber, thick material compressing and snapping, powerful snipping',
    rotary_cutter: 'circular blade rolling through fabric and leather, smooth cutting glide, blade clicking in safety guard, fabric tearing',
    hot_knife_shoe: 'heated blade sizzling through synthetic material, plastic melting with a hissing sound, faint chemical smell crackling',
    band_knife_shoe: 'continuous blade humming through leather, motor droning, material feeding through steadily, smooth splitting sound',
    die_cutter: 'hydraulic press hissing and thumping, sharp die stamping through material, clean punching impact, machine cycling',

    // Toy car cutting tools
    chainsaw_toycar: 'aggressive two-stroke engine revving, chain teeth grinding through die-cast metal and plastic, tiny metal sparks flying, plastic cracking, engine roaring loudly',
    mini_saw: 'fine-toothed blade rasping through plastic, quiet back-and-forth sawing, plastic cracking, tiny precise strokes',
    dremel_toy: 'high-pitched rotary tool whining, cutting disc grinding through die-cast metal, tiny metal sparks ticking, motor buzzing',
    plastic_cutter: 'scribing tool scratching along plastic surface, scored plastic snapping cleanly, clicking and cracking',
    hot_wire_toy: 'heated wire humming softly, plastic melting with a quiet sizzling, material separating smoothly, faint buzzing',
    hacksaw_mini: 'fine metal saw teeth rasping against die-cast metal, rhythmic back-forth scraping, metal filings dropping, blade singing',
    cutting_pliers: 'sharp snipping click of hardened steel jaws, plastic sprue snapping, spring mechanism clicking, clean cut pop',

    // Bus Tayo cutting tools
    chainsaw_tayo: 'loud gasoline engine sputtering to life, chain teeth ripping through toy plastic body, plastic cracking and splitting dramatically, engine buzzing at high RPM',
    tayo_saw: 'fine saw teeth rasping through toy plastic, back-and-forth sawing motion, plastic cracking and separating, gentle cutting',
    tayo_dremel: 'high-speed rotary buzz cutting through plastic, motor whining at high RPM, plastic shavings spraying, precision grinding',
    tayo_snips: 'sharp precision snipping clicks, thin plastic popping as cut, spring-loaded mechanism clicking, clean separation',
    tayo_blade: 'sharp hobby blade slicing through plastic shell, clean cutting through thin material, blade tip scraping, precise scoring',
    tayo_wire: 'heated nichrome wire humming, plastic melting and sizzling on contact, smooth continuous cutting, quiet electrical buzz',
    tayo_laser: 'focused laser beam with a subtle high-frequency humming, material vaporizing with tiny crackling pops, fan cooling whirring',

    // Sprunki doll cutting tools
    chainsaw_sprunki: 'two-stroke engine roaring, chain teeth shredding through plush fabric, cotton stuffing exploding outward, fabric tearing dramatically, engine revving and buzzing',
    sprunki_scissors: 'fabric scissors snipping through plush material, cotton stuffing puffing out, thread snapping, fabric tearing gently',
    sprunki_knife: 'craft blade slicing through seam stitching, fabric separating, stuffing cotton poofing out, precise quiet cutting',
    sprunki_rotary: 'circular rotary blade rolling through fabric layers, motor buzzing softly, plush material separating, smooth gliding',
    sprunki_seam: 'tiny hook blade popping individual stitches, thread snapping one by one, quiet picking sounds, seam opening gradually',
    sprunki_laser: 'laser humming with precision focus, fabric edges singeing with faint crackling, material vaporizing cleanly, fan whirring',
    sprunki_hot: 'heated blade sizzling through synthetic plush, material edges melting and sealing, quiet hissing, fabric separating',

    // Superhero figure crafting tools
    chainsaw_hero: 'aggressive two-stroke engine buzzing, chain teeth grinding through plastic action figure, plastic cracking and splitting, internal joints snapping, engine roaring dramatically',
    laser_sword: 'fine-tooth hobby saw rasping gently back and forth, precise careful strokes on plastic, soft scraping rhythm, quiet material filing',
    plasma_blade: 'craft knife scoring a precise line on plastic surface, gentle scraping, blade tip tracing along mold seam, quiet focused work',
    power_saw_hero: 'small rotary tool humming at moderate speed, sanding drum smoothing surface gently, motor buzzing softly, fine dust falling',
    diamond_blade: 'diamond needle file rasping lightly against plastic surface, fine grit smoothing sound, gentle back-and-forth filing, quiet precision work',
    ultra_cutter: 'sanding stick gliding smoothly over surface, soft abrasive rasping, foam pad flexing gently, quiet finishing strokes',
    hero_guillotine: 'precision nippers clicking cleanly, spring mechanism snapping, small plastic sprue popping free, crisp snipping sound',

    // Anomaly figure cutting tools
    anomaly_chainsaw: 'two-stroke engine sputtering to life, chain rattling and buzzing at high speed, material cracking under the blade, engine revving',
    anomaly_laser: 'focused CO2 laser humming steadily, material vaporizing with tiny popping sounds, cooling fan whirring, precise quiet operation',
    anomaly_blade: 'oscillating blade vibrating rapidly with a buzzing hum, material being cut with quick vibration, motor oscillating rhythmically',
    anomaly_saw: 'thin coping saw blade rasping back and forth, frame flexing slightly, material cracking along cut line, quiet manual sawing',
    anomaly_plasma: 'plasma arc hissing and crackling, compressed air rushing through nozzle, molten material sizzling, sharp electrical buzzing',
    anomaly_sonic: 'high-frequency ultrasonic blade humming at near-silent pitch, material cleanly separating, faint electronic whine, precision vibration',

    // Squishy / stress toy cutting tools
    chainsaw_squishy: 'two-stroke engine buzzing, chain teeth ripping through soft foam, foam compressing and tearing, squishy material squishing and deforming, engine revving',
    squishy_knife: 'blade slicing smoothly through soft foam, satisfying clean cut, foam compressing then slowly bouncing back, quiet slicing sound',
    squishy_scissors: 'scissors snipping through dense foam, foam squishing under blade pressure, slow compression, material springing back on edges',
    squishy_rotary: 'circular blade rolling through soft material, quiet smooth cutting, foam cleanly separating, satisfying slicing glide',
    squishy_hot: 'heated blade sizzling through foam material, foam melting at contact point, quiet hissing, sealed smooth edges forming',
    squishy_laser: 'laser humming with focused beam, foam vaporizing cleanly, faint crackling, precise cut with no deformation',

    // Sports ball cutting tools
    chainsaw_ball: 'engine roaring, chain teeth grinding through leather and rubber, ball material tearing and splitting, air hissing out from pressurized bladder, layers separating',
    ball_knife: 'blade cutting through tough leather and rubber layers, material resisting then giving way, air escaping with a hiss, clean slicing',
    ball_saw: 'hacksaw teeth rasping against rubber and leather, steady back-forth motion, material gradually yielding, synthetic fibers snapping',
    ball_dremel: 'rotary tool buzzing at high speed, cutting disc grinding through ball layers, rubber shavings flying, motor whining under load',
    ball_scissors: 'heavy scissors crunching through thick rubber and leather panels, material compressing, strong snipping clicks, tough material yielding',
    ball_hot: 'heated wire sizzling through synthetic materials, rubber melting and separating, faint chemical smell crackling, clean thermal cut',

    // Candy & cake cutting tools
    chainsaw_candy: 'engine buzzing dramatically, chain teeth crunching through hard candy shell, sugar shattering, chocolate cracking, sweet pieces flying, engine revving',
    candy_knife: 'knife cutting cleanly through chocolate and candy layers, shell cracking, soft filling squishing, satisfying snap of candy breaking',
    candy_cleaver: 'heavy chopping impact on hard candy, sugar shell cracking and shattering, chocolate pieces flying, powerful thwack on cutting board',
    candy_scissors: 'scissors snipping through gummy and chewy candy, stretchy material resisting then snapping, clean chewy cuts',
    candy_wire: 'thin wire gliding smoothly through soft chocolate and fudge, perfectly silent cuts, minimal resistance, smooth separation',
    candy_saw: 'serrated blade sawing through cake layers, sponge fibers tearing gently, cream squishing, steady sawing motion',

    // Soap cutting tools (ASMR)
    chainsaw_soap: 'engine buzzing, chain teeth shredding through soap bars, soap chunks and shavings flying, soap crumbling satisfyingly, engine sputtering',
    soap_knife: 'razor-sharp blade gliding through soap bar with almost no resistance, smooth satisfying slicing, soap cleanly separating, quiet precise cut',
    soap_peeler: 'peeler blade curling thin soap shavings, satisfying curling sound, long ribbons of soap peeling away, gentle rasping',
    soap_chopper: 'grid blade pressing down through soap, soap crumbling into perfect cubes, satisfying crunching as bars separate into pieces, spring clicking',
    soap_cutter: 'multiple parallel wires simultaneously slicing through soap, uniform pieces falling away, quiet wire cutting, satisfying separation',
    soap_scraper: 'scraping blade shaving thin flakes from soap surface, delicate curls forming, gentle rhythmic scraping, ASMR satisfying sound',

    // Trending toy cutting tools
    chainsaw_toytren: 'two-stroke engine revving, chain teeth ripping through plastic and silicone, toy material cracking and splitting, colorful pieces flying, engine buzzing',
    toytren_knife: 'craft blade carefully cutting through plastic toy body, material cracking along cut line, clean precise slicing, plastic separating',
    toytren_saw: 'fine-tooth saw rasping through plastic, back-forth motion, material gradually yielding, plastic dust falling',
    toytren_dremel: 'rotary tool whining at high speed, cutting disc grinding through toy plastic, shavings spraying, motor buzzing under load',
    toytren_scissors: 'sharp scissors snipping through silicone and rubber toy material, material stretching then snapping, clean cutting clicks',
    toytren_hot: 'heated blade sizzling through plastic and silicone, material melting at contact, bubbling edges, quiet hissing and faint smoke'
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

    // Show tree position section only for wood category
    if (selectedCategory === 'wood') {
        showSection('treePositionSection');
    } else {
        hideSection('treePositionSection');
    }

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
    // Tree position (wood category only)
    let treePositionLine = '';
    if (selectedCategory === 'wood') {
        const treePos = document.getElementById('treePositionSelect').value;
        const treePosData = TREE_POSITIONS[treePos];
        treePositionLine = `\n\nTree/Plant Position: ${treePosData.desc}`;
        if (treePosData.falling_effect) {
            treePositionLine += `\n\n${treePosData.falling_effect}`;
        }
    }

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
            superhero: 'carefully displaying a cross-section of',
            anomaly: 'actively cutting through'
        };
        const verb = actionVerbs[selectedCategory] || 'working on';
        materialLine = `\n\nThe miniature tool is ${verb} ${selectedMaterial.desc}. IMPORTANT: both the tool AND the material/object are miniature-sized, proportionally scaled to each other — they are equally tiny, creating a complete miniature diorama scene. The interaction between the tool and the material is realistic \u2014 showing contact point details, material deformation, tiny debris particles, and natural residue appropriate to the cutting process (fine dust, small shavings, material chips), all at miniature scale.${treePositionLine}`;
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

        // Randomize tree position for wood category
        if (randCat === 'wood') {
            randomizeSelect('treePositionSelect');
        }

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
