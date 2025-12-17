"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import MessageModal from "./message-modal"

const messages = [
  {
    id: 1,
    name: "Deepa Prabha",
    message:
      "Happyyy birthdayyyyyy mathi❤️🫶🫶yeah v couldn't give u big gifts but still i think and i hope u will like our small presents😅😅na yepavom soldrathu tha neraya pothu yosikada, everything happened for a reason 🤞🤞whenever u feel low just come to me na un anna maari sirika veppena theriyadu but i ll try my best😁😁pleaseeee make a resolution this yr that u would stay happy💖💫(not just fake smiling) and try to reduce ur cries,alugave koodathunu la na solla maaten coz i know u can't 😂😂see u can achieve a lot with ur capability but un somberi thanam and ennaku varadunu soldrathu stop pannithu start ur progres aprm namala thoda mudiyathu😎💪romba karutha pesiten nenaikuren😅😅only one time precious talks edula so soldra padi nadanthuko😅😂actually ne romba alagu theriyuma i never told u,well u know i can't 😅un smile ennaku rombaaaa pidikum oru maari unmaiya natural uh alagaa erukkum not everyone has it💞🫶don't lose it for any reason...avalotha enda pugalichi laa maranduranum😁😁happyy porandanaall ga💫💖❤️",
    image: "/profile-photo-1.jpeg",
  },
  {
    id: 2,
    name: "Gayathri S",
    message: "Hello gurlll..ungalta nerla vitta na pesite irupen ana eluthi kekureenga enna panna sollunga..irunthalum knjo try panren..ungala first hostella paakum pothu frnd aagaum nuh thonuchu apro nammaltalam frnd aavengala nuh thonuchu ipo paatha en frnd aagiteengall🫣first yr gayathri ta sonna nambamaata..nee sonala first day thaniya iruntha apo enna kooptruntha odi vathrupen🏃🏻‍♀️...ana neega koopdala😅 parava illa ini nee koopdataalum varuven.....neenga epovu mass en heart la oru 1/2 area ungaluku othikiten neenga vera yaarachu sonna sandaiku varatheenga....en other frnds munnadi neenga keteengana na naa solli avunga kannuh vachra koodathula😂epdi mass katurana ...nanuh flirt pannama pesanumnuh nenaikuren...ana unga alagula enaku vera ethuvum vara maatuthunga naa enna pannatum solunga☺️seri okay...gurll...neee suma yaraiyu nenaikatha....unwanted pps la nenachu unga ponnana tym la waste pannnatheenga uga moolaikula pora alavu avunga scene ila....nanga irukom..irupom...KIND NOTICE- na itha nenaikirenuh neeyatu ethayu nenaikatha okay i am poor at communication...poitu varen",
    image: "/profile-photo-2.jpeg",
  },
  {
    id: 3,
    name: "Agnus Serena",
    message:
      "Anbulla mathiku , ennaku Olunga pesavae varathu irunthalum nee keta maari letter eluthirken apidi ipidi nu tha irukum konjam adjust panniko, ithu unakaga tha ❤️, arambathula romba attitude kaatuva nu ninacha ponnu ipo ava evlo thangam nu pirinchikitten , Neeyum Naanum senthu iruntha naala vida sanda potta naal athigam ena purinchikutu ena oru nalla person (konjamah) ah mathirka, nee en bad times la ena vittathu ila , u were there for me always , maturity ilama sanda pottathulam ipo nenacha siripa varuthu 😂, how childish we were ,nee ilama na en college life epidi survive agirpen nu thrla , kadavul ela phase layum oruthavangala nammaku kamichi kudupanga antha maari tha Neeyum , en life la vanthen angel ila nalum oru alagana ratchasi 😂Na ena solla varen nu sollamalayae therinjupa , na kashtathula iruntha unnaku therinjirum , nee romba nalla ponnu ellarayum purinjikra ponnu , I know you value people and the bond with them , athu maari nammakulla irukra bond eppovumae fade aagama irukum I promise ❤️ , yaaru iruntha ena ila na enna ? Vittu thallu na iruken unnaku , vittu thallum pathukalam... irunthalum nee konjam ila rombavae  thuruthuru nu tha irupa apidiyae iru 😂I hope you get the best in your life always ❤️",
    image: "/profile-photo-3.jpeg",
  },
  {
    id: 4,
    name: "Krishnaveni",
    message: "hi thangoo letter write panna sona enna write pandrathunu than therla 😅yeppaiyum happy ah iru, yetha ninachum feel pannatha, azhama yethukume,sirichikite iru😁 naa namba school days ah romba miss pandre unake theriyum nee oru time kuda nalla pesunathu ila athukana reason naana kuda irukalam nee ean ennaiya avlo hurt pananu enaku  reason therla ipovaraiyum🥲may be yentha thapum naa pannama irunthu,nee hurt aagama irunthu iruntha enum neraiya memories irunthu irukum namakula. but ipo iruka alavuku namba close aagi irupomanu therla aana naa apdi ila d🫣naan unkite pesite unnaiya torture pannite than irupen🙊. Reasone theriyama pudicha ponnuna nee than😇❤️. unaku ennaiya pudikum ah nu therla aana enaku unnaiya romba pudikum🫠 nee nenachathu ellam nadaka naa pray pannikiren🙏.No matter who stay who leaves i will always there for you 🫂.Happie happier happiest birthday rabbit🐰 love u to the core💗 miss u eruma🥲🫶🏻",
    image: "/profile-photo-4.jpeg",
  },
  {
    id: 5,
    name: "The Great Spiderman",
    message: "Happy birthday Thangachi 🥳🥳, oru annan na solren nee oru romba thangamana ponnu unmailiye🥰, romba manasu suththamana va, mukiyama nee oru kolandha🍼. Ennakku unna rombaaaaaaa pudikkum, innum eththana romba poduven nnu theriyathu, avlo pudikkum unna💪💪. Unna maari oru thangachi ennaku kidaikka naan romba romba kuduththu vachirukken🫠🫠. You are one of the best person in my life🔥, ennaku nee panra ellame pudikkum except a very very few things😅😅. But remember this, 'unnaku enna pudikkum ngra kaaga unna ennaku pudikkum nnu illa'😎😎. Nee laam oru periya loosu😂, ippa epdi enta nee pesuriyo, koodavo illama koraiyaama apdi iruma. I know I have showed too much affection to you, I like you athukkaga thaan apdi irunthen😅😅, I have fought many times with you, but you have defended me at many places🙏🙏. Unnaku enna pidikkum enna pidikaathu nnu ethum theriyaathu ennaku, enna manichuru, aana naan itha eppa Venum naalum solluven, thirumba thirumba kooda solluven, unnakku oru prechana naan unna irukken🕷️🕸️🕷️. Nee ennaikkum thani aalu illa. Ennakku unna eppa paaththalum nee Unnoda chinna vaisu photo anuppu na paaththiyaa, en kannukku nee eppaium apdi thaan iruppa, nee pesum pothu kooda ennaku antha oru character thaan kannukku varum🍼🍼. Nee sogama irunthalum athe chinna vayasu photo thaan ennaku therium😭😭. Ennakku neeya lays ah nnu vantha nee thaan mukkiom unna maari illa. Finally Many more happy returns of the day🥳🥳",
    image: "/profile-photo-5.jpeg",
  },
]

export default function MessageCards() {
  const [selectedMessage, setSelectedMessage] = useState<(typeof messages)[0] | null>(null)

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">😂Emotional Messages from everyone😂</h2>
        <p className="text-muted-foreground text-lg">Open everything and read it to the fullest🥰</p>
      </motion.div>

      <div className="space-y-12">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
          >
            {/* Text content */}
            <div className="flex-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedMessage(message)}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 hover:bg-white"
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">{message.name}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed line-clamp-3">{message.message}</p>
                <button className="mt-4 text-primary font-semibold hover:text-primary/80 transition">
                  Read more →
                </button>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-lg ring-4 ring-primary/30">
                <img
                  src={message.image || "/placeholder.svg"}
                  alt={message.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {selectedMessage && <MessageModal message={selectedMessage} onClose={() => setSelectedMessage(null)} />}
    </section>
  )
}
