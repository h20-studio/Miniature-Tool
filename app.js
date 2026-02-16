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
            hand: 'actively working on'
        };
        const verb = actionVerbs[selectedCategory] || 'working on';
        materialLine = `\n\nThe miniature tool is ${verb} ${selectedMaterial.desc}. IMPORTANT: both the tool AND the material/object are miniature-sized, proportionally scaled to each other — they are equally tiny, creating a complete miniature diorama scene. The interaction between the tool and the material is realistic \u2014 showing contact point details, material deformation, tiny debris particles, and action-specific effects (micro sparks, fine sawdust, tiny shavings, wisps of smoke, or faint heat glow as appropriate), all at miniature scale.`;
    }

    const prompt = `Ultra-realistic photograph of ${toolDesc}, ${brandInfo.colors}, ${CONDITIONS[condition]}. The tool itself shows realistic signs of workshop use \u2014 minor scuffs, dust, and work residue on its surface.

The miniature tool is ${HAND_POSITIONS[hand]}, with the hand ${gloveDesc}.${materialLine}

Scene setting: ${BACKGROUNDS[bg]}.

Lighting: ${LIGHTING[lighting]}.

Camera & Detail: ${DETAIL_LEVELS[detail]}, ${atmosphere}.

Additional realism details: ${extraDetail}. ${extraDetail2}. ${handRealism}

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
