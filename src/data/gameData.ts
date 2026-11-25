import { LevelData } from '../types';

export const GAME_LEVELS: LevelData[] = [
  {
    id: 1,
    title: 'The Caveman Conundrum',
    subtitle: 'Fire & The Wheel',
    difficulty: 'EASY',
    era: '35,000 BCE - Stone Age',
    themeStyle: 'prehistoric',
    problemDescription:
      'A temporal paradox has scrambled Clan Ogg’s survival records! The clan chroniclers are confused between the invention of the circular wooden wheel and the friction-sparking flint stones. If we don’t identify the exact spark mineral and Clan Ogg’s core winter survival strategy, human civilization will never leave the caves!',
    documentType: 'Carved Slate & Mammoth-Hide Chronicle',
    documentTitle: 'Clan Ogg’s Winter Camp Dispatch & Tool Record',
    documentText: `**CLAN OGG DISPATCH: MOON OF THE FROZEN TUSK**
*Carved by Chronicler Brakk upon the Great Slate Wall*

### Section I: The Great Frost Strategy
As the northern glaciers advance across the Mammoth Valley, Clan Ogg must adapt our collective survival doctrine. Our paramount strategy is maintaining communal warmth and preserving cured mammoth meat inside the Deep Cavern. Individual hunting parties must cease solitary expeditions and combine resources under a unified shelter. Without strict food rationing and shared campfire duties, the frost will extinguish our lineage before the thaw of Sun-Peak.

### Section II: Tool Ledger & Invention Trials
* **Rolling Timber Logs (Early Wheels):** Tested by Chief Ogg along the riverbed. Three cylindrical ash logs were bound with sinew to move the 400-pound boulder. The circular motion reduced friction by half.
* **Fire-Making Apparatus:** After wet moss ruined the tinder bundle, Scout Vana brought dry pyrite nodules and struck them against dark **iron pyrite** flints at Sun-Peak. This produced 14 glowing sparks in under three heartbeats, successfully igniting the dried birch fungus.
* **Spear Points:** 28 obsidian tips were flaked using deer antler hammers for the upcoming woolly bison migration.`,
    tasks: [
      {
        id: '1-1',
        skill: 'SCANNING',
        taskTitle: 'Task 1: Scanning for Specific Minerals',
        question:
          'Scan the text to find the EXACT mineral material Scout Vana struck to produce 14 sparks at Sun-Peak.',
        targetAnswer: 'iron pyrite',
        acceptableKeywords: ['iron pyrite', 'pyrite', 'flint and pyrite', 'pyrite nodules'],
        options: [
          'Dark iron pyrite',
          'Wet moss and granite',
          'Ash timber logs',
          'Obsidian spear tips',
        ],
        correctOptionIndex: 0,
        hint1:
          'Scan specifically under Section II: Tool Ledger for words like "sparks", "igniting", or "mineral".',
        hint2:
          'Look right after "Scout Vana brought dry pyrite nodules and struck them against..."',
        celebrationQuote:
          'Ah! You caught the pyrite before the sparks faded! Excellent scanning—your eyes went straight to the noun.',
        readingStrategy:
          'Scanning means keeping a target keyword (like "sparks" or "mineral") in mind and letting your eyes glide directly to that exact detail without reading every sentence.',
      },
      {
        id: '1-2',
        skill: 'SKIMMING',
        taskTitle: 'Task 2: Skimming for the Main Survival Strategy',
        question:
          'Skim the text to identify the MAIN IDEA of Clan Ogg’s winter survival plan.',
        targetAnswer:
          'Maintaining communal warmth and combining resources in the deep cavern to survive the winter frost.',
        acceptableKeywords: [
          'communal warmth',
          'combine resources',
          'deep cavern',
          'surviving the frost',
          'food rationing and shared campfire',
          'sharing warmth and food',
        ],
        options: [
          'Uniting in the deep cavern for shared warmth and rationed food',
          'Crafting 28 obsidian spearheads for solo bison hunting',
          'Inventing wooden carts to migrate over northern glaciers',
          'Building individual stone shelters along the riverbed',
        ],
        correctOptionIndex: 0,
        hint1:
          'Skim the heading and the first and last sentences of Section I: The Great Frost Strategy.',
        hint2:
          'The main idea focuses on the entire clan uniting under one cave with shared fires and rations, not single tool details.',
        celebrationQuote:
          'Splendid! You grasped the big picture of Clan Ogg’s survival without getting lost in the mammoth bones!',
        readingStrategy:
          'Skimming means reading titles, subheadings, and topic sentences quickly to grasp the overall gist or central message.',
      },
    ],
    chronoPageName: 'The Flint & Friction Parchment',
    chronoPageDescription:
      'A glowing prehistoric manuscript glowing with the primal embers of human discovery.',
    chronoPageIcon: 'Flame',
    trivia: {
      title: 'The Real Origin of Fire & Wheels',
      fact: 'Early humans controlled fire over 400,000 years ago, but the wheel wasn’t invented for transport until around 3500 BCE in Mesopotamia—first used as potters’ wheels!',
      readingTip:
        'When skimming, always check the introductory paragraph and conclusion to find the author’s main claim quickly.',
    },
    timerSeconds: 90,
  },
  {
    id: 2,
    title: "The Pharaoh's Phones",
    subtitle: 'Pyramids of Giza',
    difficulty: 'EASY',
    era: '2560 BCE - Old Kingdom Egypt',
    themeStyle: 'egyptian',
    problemDescription:
      'Chrono-interference has spawned bizarre rumors in the royal scrolls claiming Pharaoh Khufu used wireless copper monoliths to command the pyramid masons! We must skim the overseer’s true administrative mandate and scan for the factual quota of stone blocks to purge the anomaly.',
    documentType: 'Royal Papyrus Administrative Decree',
    documentTitle: 'Overseer Imhotep-Seneb’s Quarry & Masonry Dispatch',
    documentText: `**MINISTRY OF THE ROYAL MONUMENTS: FOURTH DYNASTY**
*From Overseer Imhotep-Seneb to the Scribes of the Western Bank*

### General Proclamation & Objective
The sovereign eternal resting monument of Pharaoh Khufu must proceed with supreme geometric harmony. The overarching duty of all regional governors is to synchronize the annual floodwaters of the Nile with barge shipments so that all stonecutting gangs are supplied without delay. Every labor division must adhere to unified solar alignment records to honor the sun god Ra.

### Logistics, Labor Quotas, and Provisions
1. **Limestone Shipments:** The Tura quarries delivered exactly **2,300 fine limestone casing blocks** via the southern barge canal before the flood crest reached its height.
2. **Onion and Beer Rations:** A daily ration of 3 loaves of emmer bread, 2 jugs of fermented barley beer, and fresh Nile leeks was issued to each of the 4,000 permanent craftsmen.
3. **Copper Chisels:** The tool-smiths sharpened 680 bronze saws and 1,200 copper hand-chisels at the dawn shift. No mysterious humming rods or copper wireless signals exist; all commands travel by royal messenger foot-courier.`,
    tasks: [
      {
        id: '2-1',
        skill: 'SKIMMING',
        taskTitle: 'Task 1: Skimming for the General Proclamation',
        question:
          'Skim the proclamation to state the CENTRAL PURPOSE of Overseer Imhotep-Seneb’s administrative decree.',
        targetAnswer:
          'Synchronizing Nile barge shipments with quarry work to ensure timely, harmonized pyramid construction.',
        acceptableKeywords: [
          'synchronize nile flood',
          'barge shipments',
          'pyramid construction',
          'supplying stonecutting gangs',
          'harmonized building',
        ],
        options: [
          'Synchronizing Nile flood barges and labor to build the pyramid smoothly',
          'Distributing rations of emmer bread and barley beer to soldiers',
          'Replacing copper chisels with ceremonial bronze saws',
          'Ordering the construction of a new palace on the Eastern bank',
        ],
        correctOptionIndex: 0,
        hint1:
          'Skim Section 1 "General Proclamation & Objective" to find the primary purpose.',
        hint2:
          'Look at the second sentence: "The overarching duty of all regional governors is to..."',
        celebrationQuote:
          'By the beard of Osiris, you skimmed that papyrus like a seasoned royal scribe!',
        readingStrategy:
          'Notice how the first paragraph delivers the broad "Why" (the purpose), while the numbered list delivers the "What" (the specific facts).',
      },
      {
        id: '2-2',
        skill: 'SCANNING',
        taskTitle: 'Task 2: Scanning for Quarry Numbers',
        question:
          'Scan the text to find the EXACT NUMBER of fine limestone casing blocks delivered from the Tura quarries.',
        targetAnswer: '2,300',
        acceptableKeywords: ['2,300', '2300', '2,300 fine limestone', '2300 blocks'],
        options: ['2,300 blocks', '4,000 blocks', '1,200 blocks', '680 blocks'],
        correctOptionIndex: 0,
        hint1:
          'Scan specifically for number digits and the keyword "Tura" or "limestone".',
        hint2:
          'Look at item 1 under Logistics: "The Tura quarries delivered exactly..."',
        celebrationQuote:
          'Spot on! 2,300 blocks accounted for. No magical alien wireless towers in sight!',
        readingStrategy:
          'When scanning for numbers, look for digits, commas, and capital names like "Tura" or "Limestone".',
      },
    ],
    chronoPageName: "The Papyrus of Khufu's Blueprint",
    chronoPageDescription:
      'A golden, sun-baked papyrus detailing the architectural mastery of the Giza Plateau.',
    chronoPageIcon: 'Scroll',
    trivia: {
      title: 'Pyramid Builders Weren’t Slaves!',
      fact: 'Archaeological digs in Giza proved the pyramid builders were well-fed, respected Egyptian artisans who lived in permanent worker villages with medical care.',
      readingTip:
        'Scanning is 3-5 times faster than regular reading because you ignore 90% of non-relevant words.',
    },
    timerSeconds: 90,
  },
  {
    id: 3,
    title: 'The Roman Road Rage',
    subtitle: 'The Via Appia & Roman Legionaries',
    difficulty: 'EASY',
    era: '120 CE - High Roman Empire',
    themeStyle: 'roman',
    problemDescription:
      'The legendary Roman roadway network has plunged into chariot gridlock because someone tampered with the official imperial courier routes and road standards! We need to scan for the commanding tribune’s name and skim the imperial directive on standardized road construction.',
    documentType: 'Imperial Military Dispatch & Milestone Tablet',
    documentTitle: 'Tribune Marcus Aurelius Varro’s Courier Directive',
    documentText: `**SENATUS POPULUSQUE ROMANUS (SPQR)**
*Praetorian Courier Station: Via Appia, Milestone XLII*

### Imperial Directive: Uniformity of the Roman Arteries
All military roads radiating from Rome exist fundamentally to secure rapid legionary deployment, swift imperial postal correspondence (Cursus Publicus), and smooth grain commerce across the provinces. When roads vary in width or foundation quality, empire-wide communication slows, imperiling the frontiers. Therefore, every provincial governor must enforce standard multi-layer paving: statumen (foundation stones), rudus (rubble/mortar), nucleus (fine gravel), and pavimentum (polygonal basalt slabs).

### Milestone XLII Station Log
* **Station Commander:** Tribune **Gaius Valerius Festus** presided over the morning inspection of the equestrian relays.
* **Traffic Incidents:** Two heavy ox-carts transporting amphorae of Falernian wine broke axles at the Capua junction due to excessive wheel ruts.
* **Standard Road Width:** The carriageway was measured at precisely **14 Roman feet (4.14 meters)**, allowing two dual-horse chariots to pass without collision.
* **Fast Courier Times:** An imperial dispatch from Rome reached Brundisium in 48 hours via 18 fresh horse changes.`,
    tasks: [
      {
        id: '3-1',
        skill: 'SCANNING',
        taskTitle: 'Task 1: Scanning for the Commander’s Name',
        question:
          'Scan the text to find the FULL NAME of the Tribune presiding over Milestone XLII station inspection.',
        targetAnswer: 'Gaius Valerius Festus',
        acceptableKeywords: [
          'gaius valerius festus',
          'valerius festus',
          'tribune gaius valerius festus',
        ],
        options: [
          'Tribune Gaius Valerius Festus',
          'Tribune Marcus Aurelius Varro',
          'Governor Falernian Capua',
          'Centurion Brundisium',
        ],
        correctOptionIndex: 0,
        hint1:
          'Scan for the bold or capitalized name right next to "Station Commander:".',
        hint2: 'Look in the bulleted list under "Milestone XLII Station Log".',
        celebrationQuote:
          'Aha! Tribune Gaius Valerius Festus salutes your sharp eyes! Monocle points to you.',
        readingStrategy:
          'Scanning for proper nouns (capitalized names) is easy if you let your eyes jump between capital letters.',
      },
      {
        id: '3-2',
        skill: 'SKIMMING',
        taskTitle: 'Task 2: Skimming for the Main Strategic Objective',
        question:
          'Skim the Imperial Directive section to identify the PRIMARY REASON Rome standardized its roadway system.',
        targetAnswer:
          'To ensure rapid troop deployment, imperial postal communication, and efficient provincial trade.',
        acceptableKeywords: [
          'rapid legionary deployment',
          'fast postal communication',
          'cursus publicus',
          'troop deployment',
          'secure communication across provinces',
          'swift trade and military movement',
        ],
        options: [
          'To enable rapid legion deployment, postal courier speed, and provincial trade',
          'To show off polygonal basalt stones to visiting foreign dignitaries',
          'To prevent ox-carts from carrying heavy wine amphorae to Capua',
          'To build chariot racetracks extending from Rome to Brundisium',
        ],
        correctOptionIndex: 0,
        hint1:
          'Skim the opening sentence of the "Imperial Directive" paragraph.',
        hint2:
          'The core purpose connects military movement (legions), mail (postal), and trade (grain).',
        celebrationQuote:
          'All roads lead to Rome, and all your skimming skills lead to victory! Well summarized!',
        readingStrategy:
          'Look for causal keywords like "exist fundamentally to...", "therefore...", and "in order to...".',
      },
    ],
    chronoPageName: 'The Imperial Milestone Slate',
    chronoPageDescription:
      'An inscribed Roman marble tablet mapping the unbreakable roads of the ancient world.',
    chronoPageIcon: 'Compass',
    trivia: {
      title: 'The Engineering of Roman Roads',
      fact: 'Roman roads were cambered (crowned in the middle) so rainwater would run off into side drainage ditches, which is why many Roman roadbeds still exist after 2,000 years!',
      readingTip:
        'When skimming a historical directive, the main justification is almost always placed right at the beginning.',
    },
    timerSeconds: 90,
  },
  {
    id: 4,
    title: 'The Viking Voyage',
    subtitle: 'Leif Erikson & The Vinland Saga',
    difficulty: 'MEDIUM',
    era: '1000 CE - Norse Expansion',
    themeStyle: 'viking',
    problemDescription:
      'A swirling temporal storm in the North Atlantic has scrambled the Skaldic navigational charts of Leif Erikson’s flagship, the *Sea-Raven*. Skim the saga to capture the overarching mood and mission, and scan the sea-chest log for their crucial navigational artifact!',
    documentType: 'Icelandic Saga & Longship Log',
    documentTitle: 'The Saga of Leif the Lucky & The Western Seas',
    documentText: `**FROM THE GREENLAND CODEX: SAGA OF VINLAND**
*Chanted by Skald Thorhall & Inscribed on Vellum*

### The Western Horizon & The Quest for New Timber
Hear now of Leif, son of Erik the Red, whose soul hungered for lands beyond the mist. The overriding purpose of the western voyage was to locate fertile meadows, wild grapevines, and tall timber forests where Norse settlements could thrive beyond Greenland’s barren shores. Though icebergs loomed and the sea hissed with frost, Leif steered boldly into unknown waves, trusting in fraternal loyalty, courage against the howling gale, and the promise of a bountiful western haven.

### Navigator Bjorn’s Ship Inventory (*The Sea-Raven*)
* **Vessel Specifications:** Knarr-class ocean trader, 54 feet in length, fitted with 16 oars and a wool square sail treated with pine tar.
* **Navigational Instruments:** To pierce the dense ocean fog when the sun hid behind grey squalls, Navigator Bjorn relied upon a **calcified Iceland sunstone** (solar spar crystal) that revealed polarized sunlight patterns.
* **Provisions & Cargo:**
  - 45 casks of salted cod and smoked mutton
  - 18 barrels of pure spring water
  - 3 iron axes and 12 spare spruce oars
* **Landfall Markers:** After passing Helluland (Stone-Slab Land) and Markland (Forest Land), the crew anchored in a mild fjord where wild wheat and berries grew in abundance.`,
    tasks: [
      {
        id: '4-1',
        skill: 'SKIMMING',
        taskTitle: 'Task 1: Skimming for Overall Mission & Tone',
        question:
          'Skim the Saga section to identify the OVERALL PURPOSE of Leif Erikson’s voyage.',
        targetAnswer:
          'To explore and find fertile land, timber, and wild resources to establish thriving Norse settlements.',
        acceptableKeywords: [
          'find fertile land',
          'timber forests',
          'new settlements',
          'fertile meadows and timber',
          'expand beyond greenland',
          'resources',
        ],
        options: [
          'To find fertile lands, timber, and resources for new Norse settlements',
          'To wage war against neighboring Nordic kings in Greenland',
          'To trade salted mutton exclusively with Irish monks',
          'To test whether pine tar would make wool sails waterproof',
        ],
        correctOptionIndex: 0,
        hint1:
          'Skim the first paragraph under "The Western Horizon & The Quest for New Timber".',
        hint2:
          'Look for what Leif’s soul hungered for: "fertile meadows, wild grapevines, and tall timber forests...".',
        celebrationQuote:
          'By Thor’s hammer! You captured the spirit of the Viking saga in a single glance!',
        readingStrategy:
          'Skimming narrative passages requires filtering out poetic adjectives to locate the underlying mission and theme.',
      },
      {
        id: '4-2',
        skill: 'SCANNING',
        taskTitle: 'Task 2: Scanning for Navigational Equipment',
        question:
          'Scan the ship inventory to find the EXACT instrument Navigator Bjorn used to detect sunlight through fog.',
        targetAnswer: 'calcified Iceland sunstone',
        acceptableKeywords: [
          'sunstone',
          'iceland sunstone',
          'calcified iceland sunstone',
          'solar spar crystal',
        ],
        options: [
          'Calcified Iceland sunstone (solar spar crystal)',
          'Magnetic iron lodestone compass',
          'Astrolabe from Baghdad',
          'Hourglass of Icelandic sand',
        ],
        correctOptionIndex: 0,
        hint1:
          'Scan under Section "Navigator Bjorn’s Ship Inventory" for words like "Instruments", "fog", or "sunlight".',
        hint2:
          'Look right after "Navigator Bjorn relied upon a..."',
        celebrationQuote:
          'Magnificent! The sunstone crystal shines true in your grasp. No fog can blind a master scanner!',
        readingStrategy:
          'Scan specifically for tool-related trigger words: "Instruments", "fog", "sun".',
      },
    ],
    chronoPageName: 'The Runestone of Vinland',
    chronoPageDescription:
      'An ancient carved runestone humming with ocean gales and explorer courage.',
    chronoPageIcon: 'Anchor',
    trivia: {
      title: 'How Viking Sunstones Actually Worked',
      fact: 'Viking sunstones were likely Iceland spar (calcite), a double-refracting crystal that polarizes light, allowing sailors to locate the sun’s exact position even on heavily overcast days!',
      readingTip:
        'When scanning technical or inventory lists, bullet points are your best friend—jump straight to the relevant bullet category.',
    },
    timerSeconds: 100,
  },
  {
    id: 5,
    title: 'The Medieval Menu',
    subtitle: 'Feasts, Knights & Royal Diplomacy',
    difficulty: 'MEDIUM',
    era: '1385 CE - High Middle Ages',
    themeStyle: 'medieval',
    problemDescription:
      'The Grand Royal Feast of King Edward III has been contaminated by time-traveling pranksters! The banquet records contain scrambled diplomatic messages and bizarre recipe measurements. Skim the royal proclamation to understand the political alliance, and scan the menu for the exact exotic spice measurement!',
    documentType: 'Illuminated Vellum Banquet Ledger',
    documentTitle: 'Master Chef Guillaume’s Feast of the Golden Spur',
    documentText: `**COURT OF THE CROWN: WINDSOR CASTLE BANQUET ROLL**
*Prepared by Master of the Royal Kitchens, Guillaume de Coucy*

### The Sovereign Diplomatic Intention
This three-day tournament banquet is convened primarily to seal the martial alliance between the House of Lancaster and the Duchy of Brittany. By presenting opulent displays of culinary extravagance, heraldic pageantry, and knightly chivalry, the Crown demonstrates its supreme wealth and military readiness to foreign ambassadors, thereby deterring border warfare and solidifying trade pacts across the English Channel.

### Service of the Third Course (The High Table)
1. **Roast Peacock in Full Plumage:** Re-feathered and served with gold-leaf gilding on the beak, surrounded by roasted larks.
2. **Sir Gawain’s Boar Head:** Glazed with spiced wine, basted in elderberry reduction, and seasoned with precisely **4 drams of crushed Zanzibar cloves** and powdered galangal.
3. **Subtlety (Sugar Sculpture):** A sugar-paste castle displaying a miniature fire-breathing dragon defending the royal banner of St. George.
4. **Trenchers and Bread:** 120 loaves of stale manchet bread sliced into thick trenchers to absorb roast drippings, later distributed to the poor at the outer castle gate.`,
    tasks: [
      {
        id: '5-1',
        skill: 'SCANNING',
        taskTitle: 'Task 1: Scanning for Spice Measurements',
        question:
          'Scan the Third Course menu to find the EXACT amount and type of spice used to season Sir Gawain’s Boar Head.',
        targetAnswer: '4 drams of crushed Zanzibar cloves',
        acceptableKeywords: [
          '4 drams of crushed zanzibar cloves',
          '4 drams',
          'zanzibar cloves',
          '4 drams of cloves',
          'crushed zanzibar cloves',
        ],
        options: [
          '4 drams of crushed Zanzibar cloves',
          '12 drams of powdered cinnamon',
          '2 ounces of elderberry glaze',
          '8 drams of ginger root',
        ],
        correctOptionIndex: 0,
        hint1:
          'Scan for numbers and units like "drams" or the phrase "Sir Gawain’s Boar Head".',
        hint2:
          'Look at item 2 under Service of the Third Course: "...seasoned with precisely..."',
        celebrationQuote:
          'A royal feast for the senses! 4 drams of Zanzibar cloves scanned to perfection!',
        readingStrategy:
          'When looking for measurements, scan for numeric digits combined with archaic units (drams, ounces, grains).',
      },
      {
        id: '5-2',
        skill: 'SKIMMING',
        taskTitle: 'Task 2: Skimming for Diplomatic Motives',
        question:
          'Skim the sovereign intention section to summarize the TRUE DIPLOMATIC PURPOSE of holding this lavish banquet.',
        targetAnswer:
          'To seal a military alliance with Brittany and deter border warfare by displaying the Crown’s wealth and power.',
        acceptableKeywords: [
          'seal martial alliance',
          'alliance with brittany',
          'display wealth and military readiness',
          'deter border warfare',
          'diplomatic alliance and peace',
        ],
        options: [
          'To seal a military alliance with Brittany and deter war by showcasing royal wealth',
          'To test whether sugar paste dragons could burn during dinner',
          'To celebrate the retirement of Master Chef Guillaume de Coucy',
          'To donate 120 loaves of manchet bread to the castle guards',
        ],
        correctOptionIndex: 0,
        hint1:
          'Skim the paragraph under "The Sovereign Diplomatic Intention".',
        hint2:
          'Look for what the feast is convened to seal: "...martial alliance between the House of Lancaster and the Duchy of Brittany."',
        celebrationQuote:
          'Huzzah! You parsed the medieval court politics with the cunning of a royal chancellor!',
        readingStrategy:
          'Skimming diplomatic texts means looking for power relations: who is allying with whom, and what message is being sent.',
      },
    ],
    chronoPageName: 'The Illuminated Feast Scroll',
    chronoPageDescription:
      'A gilded parchment shimmering with gold leaf, heraldic dragons, and royal seals.',
    chronoPageIcon: 'Utensils',
    trivia: {
      title: 'Medieval Spices & Trenchers',
      fact: 'Spices like cloves and cinnamon were so costly in the Middle Ages that they were kept locked in iron chests, and a pound of cloves could be worth more than a farm animal!',
      readingTip:
        'Subheadings like "Diplomatic Intention" give you the answer category before you even read the sentence.',
    },
    timerSeconds: 100,
  },
  {
    id: 6,
    title: 'The Renaissance Riddle',
    subtitle: 'Leonardo da Vinci’s Mirror-Script Codex',
    difficulty: 'MEDIUM',
    era: '1503 CE - Italian Renaissance',
    themeStyle: 'renaissance',
    problemDescription:
      'The timeless notes of Leonardo da Vinci are vibrating into quantum gibberish! His mirror-script notes on the Mona Lisa’s sfumato technique and scientific philosophy are at risk. Skim Leonardo’s philosophical musings on Art and Science, then scan for his secret oil-glaze ratio!',
    documentType: 'Mirror-Script Artist Workshop Notebook',
    documentTitle: 'Codex Leonardo: Studio on the Arno River, Florence',
    documentText: `**DA VINCI WORKSHOP JOURNAL: FOLIO 47R**
*Inscribed in left-handed mirror script by Maestro Leonardo*

### Philosophical Synthesis: Art as the Daughter of Nature
Painting is not mere imitation; it is a supreme scientific inquiry into the physical laws of light, anatomy, and human passion. To render a living face upon flat poplar wood, the painter must master the geometry of shadows, the mechanics of facial muscles, and the fluid dynamics of air. True wisdom comes only from relentless empirical observation—art and science are twin branches stemming from the single trunk of natural truth.

### Studio Experiments & Pigment Formulation
* **The Enigmatic Smile (Sfumato Technique):** To abolish harsh outlines around the corners of the lips and eyes, I have applied multiple ultra-thin translucent glazes.
* **The Secret Glaze Formula:** The portrait’s smoky veil was achieved by mixing **3 parts cold-pressed walnut oil**, **1 part amber resin varnish**, and **0.5 parts pulverized burnt bone black**. Each layer was rubbed with a badger-hair brush and dried for 40 solar days.
* **Anatomical Studies:** Completed 14 dissection sketches of the orbicularis oris muscle to comprehend how smiles change under emotional tension.`,
    tasks: [
      {
        id: '6-1',
        skill: 'SKIMMING',
        taskTitle: 'Task 1: Skimming for Da Vinci’s Core Philosophy',
        question:
          'Skim Leonardo’s philosophical synthesis to identify his MAIN PHILOSOPHICAL BELIEF about art and science.',
        targetAnswer:
          'Art and science are deeply interconnected through direct empirical observation of natural laws.',
        acceptableKeywords: [
          'art and science are twin branches',
          'empirical observation',
          'scientific inquiry into nature',
          'interconnected',
          'natural truth and observation',
        ],
        options: [
          'Art and science are deeply united through empirical observation of nature',
          'Painting should only copy religious icons without questioning nature',
          'Dissecting muscles is a waste of time for a portrait painter',
          'Walnut oil is superior to all forms of scientific mathematics',
        ],
        correctOptionIndex: 0,
        hint1:
          'Skim the final sentence of Section 1: "True wisdom comes only from..."',
        hint2:
          'Notice how Leonardo describes art as a "scientific inquiry" and "twin branches" of natural truth.',
        celebrationQuote:
          'Bellissimo! Leonardo himself would give you a subtle, enigmatic Mona Lisa smile for that skimming prowess!',
        readingStrategy:
          'Skimming philosophy requires identifying the thesis statement, which authors often place at the very end of their opening paragraph.',
      },
      {
        id: '6-2',
        skill: 'SCANNING',
        taskTitle: 'Task 2: Scanning for Pigment Formula Ratios',
        question:
          'Scan the notes to find the EXACT RATIO of ingredients in Leonardo’s Secret Glaze Formula.',
        targetAnswer:
          '3 parts cold-pressed walnut oil, 1 part amber resin varnish, and 0.5 parts pulverized burnt bone black',
        acceptableKeywords: [
          '3 parts walnut oil',
          '1 part amber resin',
          '0.5 parts bone black',
          '3 parts cold-pressed walnut oil',
          'walnut oil, amber resin, bone black',
        ],
        options: [
          '3 parts walnut oil, 1 part amber resin varnish, 0.5 parts burnt bone black',
          '5 parts linseed oil, 2 parts turpentine, 1 part charcoal ash',
          '1 part egg tempera, 3 parts water, 0.5 parts lapis lazuli',
          '4 parts olive oil, 1 part pine sap, 2 parts chalk powder',
        ],
        correctOptionIndex: 0,
        hint1:
          'Scan under "Studio Experiments" for bold keywords like "Secret Glaze Formula" or numeric ratios.',
        hint2:
          'Look for the exact parts: "3 parts...", "1 part...", "0.5 parts...".',
        celebrationQuote:
          'Flawless scanning! You pulled the exact recipe right out of Da Vinci’s mirror-script!',
        readingStrategy:
          'When looking for recipes or formulas, scan for ratio numbers (e.g., 3 parts, 1 part) and chemical or plant ingredient names.',
      },
    ],
    chronoPageName: 'The Mirror-Script Codex Page',
    chronoPageDescription:
      'A delicate parchment inscribed with Leonardo’s backwards cursive, illuminated with sketches of wings and smiles.',
    chronoPageIcon: 'Feather',
    trivia: {
      title: 'Why Da Vinci Wrote Backwards',
      fact: 'Leonardo was left-handed and wrote in mirror-script (from right to left) likely because it prevented his hand from smudging wet ink across the page as he wrote!',
      readingTip:
        'Look out for bullet point headings like "The Secret Glaze Formula" to pinpoint exact data in technical artist logs.',
    },
    timerSeconds: 105,
  },
  {
    id: 7,
    title: 'The Industrial Invention',
    subtitle: 'James Watt & The Steam Engine',
    difficulty: 'HARD',
    era: '1776 CE - Industrial Revolution',
    themeStyle: 'victorian',
    problemDescription:
      'The thermodynamics of the industrial revolution are breaking down! James Watt’s patent specifications for the separate condenser steam engine have temporal anomalies. Skim the patent preamble to isolate the revolutionary engineering concept, then scan the test logs for exact pressure metrics!',
    documentType: 'British Patent Specification & Foundry Trial Log',
    documentTitle: 'Patent Specification No. 913: Soho Manufactory, Birmingham',
    documentText: `**GREAT SEAL PATENT OFFICE: KINGDOM OF GREAT BRITAIN**
*Specification of James Watt, Mechanical Engineer & Instrument Maker*

### Preamble: Principles of the Condensation Breakthrough
In existing atmospheric fire-engines (namely those constructed upon Thomas Newcomen’s design), immense thermal energy is wasted because the main working cylinder is alternately heated by steam and chilled by injected cold water during every single stroke. The core principle of my invention is to keep the main steam cylinder continuously as hot as the entering steam itself, while condensing the vapor in a distinct, isolated vessel called the **separate condenser**. This fundamental separation eliminates the constant reheating cycle, thereby reducing coal fuel consumption by more than seventy-five percent.

### Soho Foundry Trial Bench Logs (Trial No. 42B)
* **Engine Type:** Double-acting rotative beam engine with sun-and-planet gear assembly.
* **Cylinder Dimensions:** Cast-iron bore diameter of **38.5 inches** with a 6.0-foot vertical piston stroke.
* **Operational Pressure:** The boiler maintained a continuous working steam pressure of **12.5 pounds per square inch (psi)** above atmosphere.
* **Condenser Vacuum:** The auxiliary air pump maintained a vacuum of 27 inches of mercury in the condensation chamber.
* **Coal Efficiency Test:** Pumped 15,000 gallons of water per hour using only 2.5 bushels of Newcastle bituminous coal.`,
    tasks: [
      {
        id: '7-1',
        skill: 'SCANNING',
        taskTitle: 'Task 1: Scanning for Machine Pressure & Cylinder Bore',
        question:
          'Scan the trial log to find the EXACT working steam pressure (psi) and cylinder bore diameter (inches).',
        targetAnswer: '12.5 psi working pressure and 38.5 inches cylinder bore',
        acceptableKeywords: [
          '12.5 psi',
          '38.5 inches',
          '12.5 pounds per square inch',
          '38.5',
          '12.5 psi and 38.5 inches',
        ],
        options: [
          '12.5 psi steam pressure and 38.5 inches bore diameter',
          '25.0 psi steam pressure and 42.0 inches bore diameter',
          '18.5 psi steam pressure and 24.0 inches bore diameter',
          '7.5 psi steam pressure and 50.0 inches bore diameter',
        ],
        correctOptionIndex: 0,
        hint1:
          'Scan for the abbreviations "psi" and "inches" or the word "Cylinder Dimensions".',
        hint2:
          'Check the bullet points under "Soho Foundry Trial Bench Logs".',
        celebrationQuote:
          'Pressure holds! 12.5 psi and 38.5 inches scanned with mechanical precision!',
        readingStrategy:
          'Scan specifically for units of measurement: "psi", "inches", and decimal numbers like "12.5" and "38.5".',
      },
      {
        id: '7-2',
        skill: 'SKIMMING',
        taskTitle: 'Task 2: Skimming for the Main Engineering Breakthrough',
        question:
          'Skim the patent preamble to explain the PRIMARY MECHANICAL BREAKTHROUGH of Watt’s steam engine compared to Newcomen’s.',
        targetAnswer:
          'Keeping the main cylinder constantly hot by condensing steam in a separate condenser vessel, massively reducing fuel waste.',
        acceptableKeywords: [
          'separate condenser',
          'keeping cylinder hot',
          'separate vessel',
          'condensing in an isolated vessel',
          'reducing fuel waste',
          'condensing steam separately',
        ],
        options: [
          'Condensing steam in a separate vessel so the main cylinder stays constantly hot',
          'Using double the amount of Newcastle coal to heat the boiler faster',
          'Replacing cast iron cylinders with bronze gears to eliminate friction',
          'Pumping cold water directly inside the piston on every single stroke',
        ],
        correctOptionIndex: 0,
        hint1:
          'Skim the middle of the Preamble paragraph for "The core principle of my invention is...".',
        hint2:
          'The breakthrough is about keeping the cylinder hot while condensing in the "separate condenser".',
        celebrationQuote:
          'By the gears of Birmingham! You understood the heartbeat of the Industrial Revolution in seconds!',
        readingStrategy:
          'Look for contrast words when skimming comparative texts: "In existing engines...", "whereas the core principle of my invention is...".',
      },
    ],
    chronoPageName: 'The Brass Condenser Blueprint',
    chronoPageDescription:
      'A technical schematic drawn in crisp copperplate ink, radiating steam energy and mechanical genius.',
    chronoPageIcon: 'Cog',
    trivia: {
      title: 'Where "Horsepower" Came From',
      fact: 'James Watt invented the term "horsepower" as a marketing metric to explain to brewery owners and mine operators how many draft horses his steam engines could replace!',
      readingTip:
        'Skimming technical manuals requires focusing on the problem-solution structure: what was wrong with the old design, and how the new design fixes it.',
    },
    timerSeconds: 110,
  },
  {
    id: 8,
    title: 'The World War Whispers',
    subtitle: 'The July Crisis & The Sarajevo Dispatch',
    difficulty: 'HARD',
    era: 'June-July 1914 - World War I Eve',
    themeStyle: 'ww1',
    problemDescription:
      'The fragile peace of Europe in the summer of 1914 is tearing at the temporal seams! Diplomatic telegrams and police ciphers from the Sarajevo incident have been cross-wired. Skim the high-level intelligence cable to grasp the escalating crisis, and scan the police dispatch for the fateful street corner!',
    documentType: 'Encrypted Diplomatic Telegram & Municipal Police Log',
    documentTitle: 'Imperial Diplomatic Dispatch & Sarajevo Incident Report',
    documentText: `**URGENT CIPHER TELEGRAM: FOREIGN OFFICE, VIENNA**
*Transmitted via Austro-Hungarian Imperial Telegraph Lines*

### Strategic Intelligence Briefing: The Alliance Powder Keg
The fragile geopolitical equilibrium of Europe is on the brink of general continental war following the assassination in Sarajevo. Imperial obligations under the Triple Alliance (Austria-Hungary, Germany, Italy) now collide directly with the counter-commitments of the Triple Entente (Russia, France, Great Britain). The central threat is not merely local unrest in the Balkans, but an uncontrollable chain reaction of military mobilizations triggered by secret mutual defense treaties. If diplomacy cannot decouple the crisis, an all-out global conflict is inevitable within weeks.

### Sarajevo Municipal Police Motorcade Log (June 28, 1914)
* **Official Route:** The Archduke Franz Ferdinand’s convoy was scheduled to proceed directly along the Appel Quay to the municipal hospital.
* **The Fatal Wrong Turn:** Driver Leopold Lojka, unfamiliar with the last-minute route revision, mistakenly turned right onto **Franz Josef Street** directly outside **Schiller’s Delicatessen** at **10:45 AM**.
* **Security Flaws:** Only 120 police officers were deployed across the entire 4-mile route, and the motorcade’s open-top Graf & Stift cabriolet lacked protective armor plating.`,
    tasks: [
      {
        id: '8-1',
        skill: 'SKIMMING',
        taskTitle: 'Task 1: Skimming for the Geopolitical Crisis',
        question:
          'Skim the intelligence briefing to identify the CORE DANGER threatening Europe in July 1914.',
        targetAnswer:
          'An uncontrollable chain reaction of military mobilizations triggered by interlocking mutual defense treaties.',
        acceptableKeywords: [
          'chain reaction of military mobilizations',
          'mutual defense treaties',
          'triple alliance and triple entente',
          'continental war',
          'interlocking alliances',
          'mobilization domino effect',
        ],
        options: [
          'A chain reaction of military mobilizations caused by interlocking alliance treaties',
          'A short trade dispute between German and French coal merchants',
          'A minor naval incident between British and Italian fishing fleets',
          'The refusal of the Archduke’s driver to purchase street maps',
        ],
        correctOptionIndex: 0,
        hint1:
          'Skim the middle sentences of the "Strategic Intelligence Briefing" paragraph.',
        hint2:
          'Look for what the "central threat" is: "...uncontrollable chain reaction of military mobilizations...".',
        celebrationQuote:
          'Astute reading! You saw the entire alliance domino effect looming over Europe.',
        readingStrategy:
          'Skimming geopolitical texts means looking for systemic causes (alliances, treaties, mobilization) rather than just individual isolated incidents.',
      },
      {
        id: '8-2',
        skill: 'SCANNING',
        taskTitle: 'Task 2: Scanning for Street Names & Timestamp',
        question:
          'Scan the police log to find the EXACT street name and shop outside of which the driver made the wrong turn at 10:45 AM.',
        targetAnswer:
          'Franz Josef Street outside Schiller’s Delicatessen',
        acceptableKeywords: [
          'franz josef street',
          'schiller’s delicatessen',
          'schillers delicatessen',
          'franz josef street outside schiller’s delicatessen',
        ],
        options: [
          'Franz Josef Street outside Schiller’s Delicatessen',
          'Appel Quay outside the Municipal Hospital',
          'Balkan Boulevard outside the City Hall',
          'Vienna Avenue outside the Telegraph Office',
        ],
        correctOptionIndex: 0,
        hint1:
          'Scan for the bold words under "The Fatal Wrong Turn" in the bulleted list.',
        hint2:
          'Look for the exact street name and the shop name right before "10:45 AM".',
        celebrationQuote:
          'You found the fateful street corner in the blink of an eye! History’s timeline stands corrected!',
        readingStrategy:
          'Scan for capitalized street names ("Street", "Avenue") and proper shop titles ("Delicatessen").',
      },
    ],
    chronoPageName: 'The Encrypted Sarajevo Telegram',
    chronoPageDescription:
      'A yellowed telegram ribbon stamped with urgent imperial seals and Morse-code ciphers.',
    chronoPageIcon: 'Radio',
    trivia: {
      title: 'The Telegram War of 1914',
      fact: 'In the final days before World War I erupted, Kaiser Wilhelm of Germany and Tsar Nicholas of Russia frantically exchanged personal telegrams signed "Willy" and "Nicky," trying in vain to halt their own military mobilizations!',
      readingTip:
        'When scanning historical reports, key events are often anchored to specific timestamps (e.g. 10:45 AM) and location names.',
    },
    timerSeconds: 110,
  },
  {
    id: 9,
    title: 'The Space Race Scramble',
    subtitle: 'Apollo 11 & The Lunar Descent',
    difficulty: 'HARD',
    era: 'July 20, 1969 - Lunar Orbit',
    themeStyle: 'apollo',
    problemDescription:
      'The Apollo 11 Lunar Module *Eagle* is 3,000 feet above the cratered surface of the Moon, but temporal static is scrambling the guidance alarms! Skim the flight director logs to understand how Mission Control overcame the computer overload, and scan the telemetry log for remaining descent fuel!',
    documentType: 'NASA Mission Control Telemetry Transcript',
    documentTitle: 'Apollo 11 Voice Loop: Flight Director & Lunar Descent Console',
    documentText: `**NASA MANNED SPACECRAFT CENTER: HOUSTON, TEXAS**
*Flight Director (FLIGHT) Gene Kranz & Capcom Charlie Duke Voice Loop*

### Operational Strategy: Managing the 1202 Program Alarm
During final powered descent at 33,000 feet, the Apollo Guidance Computer (AGC) triggered recurring **1202 and 1201 program alarms**. The core problem was radar data executive overflow: the computer was being asked to calculate too many secondary tasks at once. Flight Director Gene Kranz and computer specialist Steve Bales executed the critical decision: as long as the alarm was intermittent and the radar wasn't dropping primary navigation data, the crew was instructed to **"GO" for landing**. The software's priority-scheduling architecture successfully dropped low-priority display cycles while preserving the life-critical thruster burns.

### Lunar Module Descent Telemetry Snapshot (T+102:45:40)
* **Callsign:** *Eagle* (LM-5) crewed by Neil Armstrong and Edwin "Buzz" Aldrin.
* **Altitude & Descent Velocity:** 140 feet above Mare Tranquillitatis; vertical descent 3.2 feet/second.
* **Critical Propellant Quantity Remaining:** At the moment of contact light illumination, the descent stage tanks contained precisely **8.5 percent propellant** (only **25 seconds of hover fuel** remaining before mandatory abort).
* **Landing Site:** Successfully touched down at West Crater coordinates 0.67408° N, 23.47297° E.`,
    tasks: [
      {
        id: '9-1',
        skill: 'SCANNING',
        taskTitle: 'Task 1: Scanning for Fuel Percentage & Margin',
        question:
          'Scan the telemetry snapshot to find the EXACT percentage of descent propellant remaining and seconds of hover fuel left at touchdown.',
        targetAnswer:
          '8.5 percent propellant and 25 seconds of hover fuel',
        acceptableKeywords: [
          '8.5 percent',
          '8.5%',
          '25 seconds',
          '8.5 percent propellant',
          '25 seconds of hover fuel',
          '8.5% and 25 seconds',
        ],
        options: [
          '8.5 percent propellant and 25 seconds of hover fuel',
          '15.2 percent propellant and 60 seconds of hover fuel',
          '3.2 percent propellant and 10 seconds of hover fuel',
          '23.4 percent propellant and 45 seconds of hover fuel',
        ],
        correctOptionIndex: 0,
        hint1:
          'Scan for the percent symbol "%" or the word "Propellant" in the telemetry bullet points.',
        hint2:
          'Look under "Critical Propellant Quantity Remaining": "contained precisely...".',
        celebrationQuote:
          'Houston, Tranquility Base here! Your scanning brought Eagle down safely on 8.5% fuel!',
        readingStrategy:
          'Scan directly for percentage signs (%) and numeric time units ("seconds") in telemetry and flight data.',
      },
      {
        id: '9-2',
        skill: 'SKIMMING',
        taskTitle: 'Task 2: Skimming for Alarm Resolution Strategy',
        question:
          'Skim the Operational Strategy section to summarize HOW Mission Control resolved the 1202 computer program alarms.',
        targetAnswer:
          'They determined the computer was dropping low-priority tasks while preserving critical navigation, allowing a "GO" decision as long as alarms were intermittent.',
        acceptableKeywords: [
          'priority scheduling',
          'dropping low priority tasks',
          'preserving critical thruster burns',
          'intermittent alarm go decision',
          'software dropped low priority display',
          'go for landing',
        ],
        options: [
          'They verified the software dropped low-priority tasks while keeping critical thrust, giving a "GO"',
          'They ordered Neil Armstrong to reboot the entire guidance computer from scratch',
          'They switched all navigation controls to the command module orbiting above',
          'They ignored the alarms and told the crew to turn off the radar completely',
        ],
        correctOptionIndex: 0,
        hint1:
          'Skim the explanation under "Operational Strategy: Managing the 1202 Program Alarm".',
        hint2:
          'Focus on why they decided "GO": priority-scheduling dropped low-priority tasks while keeping critical ones.',
        celebrationQuote:
          'A giant leap for your reading comprehension! That is how real flight controllers skim complex logs!',
        readingStrategy:
          'Skimming crisis management texts means extracting: (1) What was the problem? (2) What was the solution? (3) What was the outcome?',
      },
    ],
    chronoPageName: 'The Lunar Descent Telemetry Log',
    chronoPageDescription:
      'A dot-matrix telemetry printout carrying the dust of Tranquility Base and humanity’s greatest voyage.',
    chronoPageIcon: 'Rocket',
    trivia: {
      title: 'Margaret Hamilton’s Genius Code',
      fact: 'Margaret Hamilton, director of the MIT Software Engineering Division, pioneered asynchronous executive software for Apollo 11. Her code prioritized life-critical thruster commands when the computer became overloaded, saving the moon landing!',
      readingTip:
        'When skimming scientific or space logs, isolate the decision sentence (e.g., "instructed to GO for landing") to find the central message.',
    },
    timerSeconds: 115,
  },
  {
    id: 10,
    title: 'The Chronos Vortex of Chaos',
    subtitle: 'The Final Boss: The Nexus Temporal Maelstrom',
    difficulty: 'FINAL BOSS',
    era: 'All Timelines Colliding - The Quantum Nexus',
    themeStyle: 'vortex',
    problemDescription:
      'WARNING! The Chronos Nexus is tearing apart! Four distinct eras have collided into a swirling vortex of text: Stone Age flint glyphs, Renaissance mirror notes, Victorian steam gauges, and Apollo telemetry loops. To defeat the Final Boss and seal the Chronos Vortex forever, you must SKIM across the entire multi-text vortex to identify the single document holding the Master Anchor, and then SCAN within it for the exact 4-part calibration security code!',
    documentType: 'The Multiverse Chrono-Vortex Matrix',
    documentTitle: 'TEMPORAL VORTEX MATRIX: 4-SECTOR ANOMALY COLLISION',
    documentText: `================================================================================
*** SECTOR ALPHA: PREHISTORIC TUSK GLYPH (35,000 BCE) ***
Clan Ogg warns of heavy snowdrifts. Stone tools and mammoth fat fires burning steadily.
Notice: This sector radiates cold temporal baseline. No master anchor detected here.
Secondary reading: 14 sparks ignited from pyrite.
================================================================================

*** SECTOR BETA: DA VINCI ANATOMICAL MANUSCRIPT (1503 CE) ***
Maestro Leonardo notes that shadows soften across the sfumato canvas when observed in twilight.
Notice: The Arno river currents flow normally. This sector is an echoing reflection only.
Secondary reading: 3 parts walnut oil mixed with amber resin.
================================================================================

*** SECTOR GAMMA: SOHO ENGINE SPECIFICATION (1776 CE) ***
Patent No. 913 condensing chamber records steady steam exhaust. Rotary beam engine operational.
Notice: Minor thermal fluctuations detected, but pressure is stabilized at 12.5 psi.
Secondary reading: Cast-iron cylinder bore measures 38.5 inches.
================================================================================

*** SECTOR DELTA: APOLLO-NEXUS TRANQUILITY CORE TRANSMISSION (1969 CE) ***
CRITICAL ALERT: THIS IS THE MASTER TEMPORAL ANCHOR FREQUENCY!
The quantum core of the Chronos Library has merged with the Apollo 11 lunar communication array.
To stabilize the entire nexus and permanently lock the timeline, enter the Master Calibration Sequence:
>> CALIBRATION OVERRIDE KEY: [ **CHRONOS-ALPHA-7749-OMEGA** ] <<
Fuel margin: 8.5%. Program Alarm 1202 neutralized. All 10 historical anchors ready for permanent sync.
================================================================================`,
    tasks: [
      {
        id: '10-1',
        skill: 'SKIM & SCAN (FINAL BOSS)',
        taskTitle: 'The Master Challenge: Skim the Vortex & Scan the Core Key',
        question:
          'First, SKIM all 4 sectors of the Vortex to find which Sector holds the MASTER TEMPORAL ANCHOR. Then, SCAN within that sector for the EXACT Calibration Override Key in brackets.',
        targetAnswer: 'CHRONOS-ALPHA-7749-OMEGA',
        acceptableKeywords: [
          'chronos-alpha-7749-omega',
          'chronos alpha 7749 omega',
          'sector delta chronos-alpha-7749-omega',
          '7749',
          'chronos-alpha',
        ],
        options: [
          'Sector Delta: CHRONOS-ALPHA-7749-OMEGA',
          'Sector Alpha: OGG-MAMMOTH-3500-FLINT',
          'Sector Beta: LEONARDO-SFUMATO-1503-SMILE',
          'Sector Gamma: WATT-CONDENSER-1776-STEAM',
        ],
        correctOptionIndex: 0,
        hint1:
          'Skim each Sector’s "Notice" line to see which one says "CRITICAL ALERT: THIS IS THE MASTER TEMPORAL ANCHOR FREQUENCY!".',
        hint2:
          'Once you locate Sector Delta, scan for the brackets: [ CHRONOS-... ].',
        celebrationQuote:
          'EXTRAORDINARY! You skimmed the entire vortex and scanned the exact quantum key!',
        readingStrategy:
          'The ultimate reading superpower: First skim broad sections to eliminate irrelevant noise (Sectors Alpha, Beta, Gamma), then instantly switch to high-precision scanning inside the target section (Sector Delta).',
      },
    ],
    chronoPageName: 'The Master Chronos Nexus Core',
    chronoPageDescription:
      'The radiant tenth Chrono-Page, pulsing with iridescent starlight that binds all 10 timelines into eternal harmony.',
    chronoPageIcon: 'Sparkles',
    trivia: {
      title: 'Skimming + Scanning: The Ultimate Superpower',
      fact: 'Research shows that scholars who combine skimming (finding relevant chapters) with scanning (locating exact statistics and names) can research complex essays up to 400% faster than linear readers!',
      readingTip:
        'In college, exams, and real careers, you will rarely read every word in order. You will skim to find where the treasure is buried, and scan to dig it up!',
    },
    timerSeconds: 120,
  },
];

export const SKILL_GUIDE = {
  skimming: {
    title: 'The Art of Skimming',
    subtitle: 'Reading for the Gist & Main Ideas',
    icon: 'Eye',
    description:
      'Skimming is like flying over a forest in a helicopter. You are not counting individual leaves; you are observing the shape of the river, the mountain peaks, and where the paths lead.',
    whenToUse: [
      'When you need to know the overall topic or main argument of a chapter.',
      'When deciding if an article or book is relevant to your research project.',
      'When reviewing study notes before a major exam to refresh the big picture.',
    ],
    howToSkim: [
      'Read the Title, Subtitles, and bold Headings.',
      'Read the FIRST sentence (topic sentence) of each paragraph.',
      'Read the LAST sentence or concluding paragraph.',
      'Glance at bullet points, diagrams, and summary charts.',
      'Ignore small statistics and unfamiliar names on your first pass.',
    ],
  },
  scanning: {
    title: 'The Art of Scanning',
    subtitle: 'Hunting for Specific Details, Numbers & Names',
    icon: 'Search',
    description:
      'Scanning is like turning on a metal detector on a sandy beach. You know EXACTLY what coin or treasure you are looking for, and you let your eyes glide until you hear the beep.',
    whenToUse: [
      'When finding a specific phone number, date, year, or page reference.',
      'When answering specific comprehension questions asking "Who?", "When?", "What number?", or "Which place?".',
      'When looking up words in a dictionary or index.',
    ],
    howToScan: [
      'Identify your target KEYWORD or format before your eyes touch the page (e.g. look for digits for a year, or capital letters for a name).',
      'Move your eyes across the lines in a smooth "Z" or "S" zigzag motion.',
      'Do NOT read every sentence from left to right.',
      'Stop immediately when your eyes spot the target keyword or number.',
      'Read only the 1-2 words immediately surrounding your target to verify the answer.',
    ],
  },
};
