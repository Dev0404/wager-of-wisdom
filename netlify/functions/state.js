import { getStore } from "@netlify/blobs";

const CATEGORIES = {
  "Sports": [
    {text:"Which two years did India win the ICC Cricket World Cup?",
     options:["1975 & 1979","1983 & 2011","1992 & 1996","2003 & 2007"], correct:1,
     note:"Kapil Dev's 1983 side and MS Dhoni's 2011 side both lifted the trophy."},
    {text:"In which format did Sachin Tendulkar first score a double century?",
     options:["T20 International","Test Match","One Day International","First-class cricket"], correct:2,
     note:"He achieved it in an ODI in 2010, against South Africa."},
    {text:"In which sport has India won the most Olympic gold medals overall?",
     options:["Wrestling","Shooting","Hockey","Badminton"], correct:2,
     note:"India has 8 Olympic golds in hockey — its most successful Olympic sport by far."},
    {text:"Neeraj Chopra won India's first Olympic gold in athletics — in which event and Games?",
     options:["100m, Tokyo 2020","Javelin throw, Tokyo 2020","Long jump, Beijing 2008","Javelin throw, Paris 2024"], correct:1,
     note:"His javelin throw at Tokyo 2020 made history as India's first athletics gold."}
  ],
  "Culture": [
    {text:"Who built the Taj Mahal?", options:["Akbar","Shah Jahan","Aurangzeb","Humayun"], correct:1,
     note:"Built as a mausoleum for his wife, Mumtaz Mahal."},
    {text:"Kathakali, the classical dance-drama form, originates from which state?",
     options:["Tamil Nadu","Karnataka","Kerala","Andhra Pradesh"], correct:2,
     note:"Kathakali is a classical art form native to Kerala."},
    {text:"How many languages are officially recognized in the Eighth Schedule of the Indian Constitution?",
     options:["18","22","25","29"], correct:1,
     note:"It began with 14 languages and has been expanded over time to 22."}
  ],
  "Current Affairs": [
    {text:"In which year did India hold the G20 presidency?", options:["2021","2022","2023","2024"], correct:2,
     note:"The New Delhi summit was held in September 2023."},
    {text:"Where did Chandrayaan-3 land on the Moon in 2023?",
     options:["North Pole","South Pole","Equatorial region","Far side (dark side)"], correct:1,
     note:"It landed near the south pole — a global first for any country."},
    {text:"When was India's new Parliament building inaugurated?", options:["2021","2022","2023","2024"], correct:2,
     note:"Inaugurated in May 2023."}
  ],
  "Bollywood & Arts": [
    {text:"Which song from the film RRR won the Academy Award for Best Original Song?",
     options:["Naatu Naatu","Jai Ho","Kesariya","Chaiyya Chaiyya"], correct:0,
     note:"\"Naatu Naatu\" won at the 95th Academy Awards in 2023."},
    {text:"Who directed the film \"Lagaan\"?",
     options:["Ashutosh Gowariker","Karan Johar","Sanjay Leela Bhansali","Rajkumar Hirani"], correct:0,
     note:"Lagaan (2001) was also nominated for the Academy Award for Best Foreign Language Film."},
    {text:"Which legendary Indian sitar maestro performed globally and passed away in 2012?",
     options:["Zakir Hussain","Ravi Shankar","Bismillah Khan","Hariprasad Chaurasia"], correct:1,
     note:"Pandit Ravi Shankar is credited with popularizing Indian classical music worldwide."},
    {text:"Satyajit Ray, the legendary Indian filmmaker, is best known for which trilogy?",
     options:["Apu Trilogy","Godfather Trilogy","Malgudi Trilogy","Ramayana Trilogy"], correct:0,
     note:"The Apu Trilogy remains one of the most acclaimed works in world cinema."}
  ],
  "Business & Economy": [
    {text:"Which Indian conglomerate has generally ranked as India's largest company by market capitalization in recent years?",
     options:["Tata Group","Reliance Industries","Adani Group","Infosys"], correct:1,
     note:"Reliance Industries, led by Mukesh Ambani — worth a quick check for the latest ranking before your event."},
    {text:"What does \"UPI\" stand for in India's digital payments system?",
     options:["Unified Payments Interface","Universal Public Investment","United Payment Index","Unique Personal Identifier"], correct:0,
     note:"UPI has become one of the world's largest real-time payment systems by volume."},
    {text:"Which Indian city is popularly known as the \"Silicon Valley of India\"?",
     options:["Hyderabad","Bengaluru","Pune","Chennai"], correct:1,
     note:"Bengaluru is home to a large share of India's IT and startup industry."},
    {text:"Who is considered the chief architect of India's 1991 economic liberalization reforms, as Finance Minister at the time?",
     options:["Manmohan Singh","P. Chidambaram","Arun Jaitley","Yashwant Sinha"], correct:0,
     note:"Manmohan Singh later went on to serve as Prime Minister from 2004–2014."}
  ],
  "Regional & Food": [
    {text:"Which Indian state is the largest producer of tea?", options:["Kerala","Assam","Tamil Nadu","West Bengal"], correct:1,
     note:"Assam is renowned for its strong, malty black tea."},
    {text:"Biryani is widely believed to have been shaped by which cuisine's influence?",
     options:["Persian/Mughal","Portuguese","French","Chinese"], correct:0,
     note:"Biryani's layered rice-and-meat technique traces back to Persian and Mughal culinary traditions."},
    {text:"Which festival is known as the \"Festival of Colors\"?", options:["Diwali","Holi","Navratri","Onam"], correct:1,
     note:"Holi celebrates the arrival of spring and the triumph of good over evil."},
    {text:"Dosa and idli are staple dishes most associated with which region of India?",
     options:["Punjab","South India","Rajasthan","North-East India"], correct:1,
     note:"Both are fermented rice-and-lentil dishes central to South Indian cuisine."}
  ],
  "Tadka Time — Fun & Snacks": [
    {text:"डिब्बे में बंद, तीखा-खट्टा, और हर भारतीय ट्रेन जर्नी का पक्का साथी — यह क्या है?",
     options:["अचार","समोसा","चटनी","पापड़"], correct:0,
     note:"हर मां का यही मानना है कि सफर बिना अचार के अधूरा है।"},
    {text:"गोल आकार, बीच में छेद, तेल में डूबा, और भारतीय स्ट्रीट फूड की सबसे तीखी \"पानी वाली\" चुनौती — यह क्या है?",
     options:["गोलगप्पा (पानी पूरी)","समोसा","कचौरी","भल्ला"], correct:0,
     note:"हर शहर में इसका नाम बदल जाता है — पानी पूरी, गोलगप्पा या पुचका — पर चुनौती वही रहती है।"},
    {text:"यह मिठाई शादी के कार्ड से इतनी जुड़ी है कि लोग अक्सर सिर्फ इसे खाने के लिए पूछते हैं — \"शादी की तारीख क्या है?\"",
     options:["लड्डू","जलेबी","बर्फी","रसगुल्ला"], correct:0,
     note:"शादी के कार्ड के साथ लड्डू का डिब्बा भारतीय परंपरा का अभिन्न हिस्सा है।"},
    {text:"भारतीय ऑटो-रिक्शा वाले किसी भी दूरी के लिए सबसे पहले क्या कहते हैं, चाहे वो 2 किमी हो या 20?",
     options:["मीटर से जाऊंगा","उस तरफ नहीं जाता","ज़्यादा लगेगा","चलिए बैठिए"], correct:1,
     note:"मंज़िल चाहे नज़दीक हो, जवाब हमेशा एक जैसा होता है।"}
  ]
};
const BONUS = {
  text:"As of India's most recent Olympic Games, how many total Olympic gold medals has India won in its Summer Olympics history?",
  options:["6 – 7","8 – 9","10 – 11","12 or more"], correct:2,
  note:"India's tally stands at 10 Olympic golds — worth a quick check before your event in case a newer Games has changed this."
};
const START_BALANCE = 100;

function defaultState(){
  return {
    status: "open",
    activeCategory: null,
    activeQIndex: 0,
    revealed: false,
    pointers: Object.fromEntries(Object.keys(CATEGORIES).map(c=>[c,0])),
    bonusUsed: false,
    players: {},   // playerId -> {name, balance}
    answers: {}    // playerId -> {selected, wager}   (cleared each new round)
  };
}

function publicState(state){
  let q = null;
  if(state.activeCategory){
    const src = state.activeCategory === "__BONUS__" ? BONUS : CATEGORIES[state.activeCategory][state.activeQIndex];
    q = { text: src.text, options: src.options };
    if(state.revealed){ q.correct = src.correct; q.note = src.note; }
  }
  const catList = Object.keys(CATEGORIES).map(c => ({
    name: c, left: CATEGORIES[c].length - state.pointers[c]
  }));
  return {
    status: state.status,
    activeCategory: state.activeCategory,
    revealed: state.revealed,
    question: q,
    categories: catList,
    bonusUsed: state.bonusUsed,
    players: Object.entries(state.players).map(([id,p])=>({id, name:p.name, balance:p.balance})).sort((a,b)=>b.balance-a.balance)
  };
}

export default async (req, context) => {
  const store = getStore("wager-game");
  const headers = { "Content-Type": "application/json" };

  if (req.method === "GET") {
    let state = await store.get("state", { type: "json" });
    if(!state){ state = defaultState(); await store.setJSON("state", state); }
    return new Response(JSON.stringify(publicState(state)), { headers });
  }

  if (req.method === "POST") {
    let body;
    try{ body = await req.json(); } catch(e){ return new Response(JSON.stringify({error:"bad request"}), {status:400, headers}); }

    let state = await store.get("state", { type: "json" });
    if(!state){ state = defaultState(); }

    const { action, payload } = body;

    if(action === "reset_game"){
      state = defaultState();
    }

    if(action === "join"){
      if(state.status !== "open"){
        return new Response(JSON.stringify({ error:"closed", message:"Room is closed to new players." }), { headers });
      }
      const id = "p_" + Math.random().toString(36).slice(2,10);
      state.players[id] = { name: (payload.name||"Player").slice(0,24), balance: START_BALANCE };
      await store.setJSON("state", state);
      return new Response(JSON.stringify({ id, state: publicState(state) }), { headers });
    }

    if(action === "select_category"){
      const cat = payload.category;
      if(cat === "__BONUS__"){
        if(!state.bonusUsed){ state.activeCategory = "__BONUS__"; state.activeQIndex = 0; state.revealed=false; state.answers={}; }
      } else if(CATEGORIES[cat] && state.pointers[cat] < CATEGORIES[cat].length){
        state.activeCategory = cat; state.activeQIndex = state.pointers[cat]; state.revealed=false; state.answers={};
      }
    }

    if(action === "submit_answer"){
      if(state.activeCategory && !state.revealed && state.players[payload.playerId]){
        const player = state.players[payload.playerId];
        const isBonus = state.activeCategory === "__BONUS__";
        const cap = isBonus ? player.balance : Math.max(1, Math.floor(player.balance*0.5));
        const wager = Math.min(Math.max(0, parseInt(payload.wager,10)||0), cap);
        state.answers[payload.playerId] = { selected: payload.selected, wager };
      }
    }

    if(action === "reveal"){
      if(state.activeCategory && !state.revealed){
        const src = state.activeCategory === "__BONUS__" ? BONUS : CATEGORIES[state.activeCategory][state.activeQIndex];
        const isBonus = state.activeCategory === "__BONUS__";
        Object.keys(state.answers).forEach(pid=>{
          const a = state.answers[pid];
          const player = state.players[pid];
          if(!player) return;
          const correct = a.selected === src.correct;
          const delta = correct ? a.wager * (isBonus?2:1) : -a.wager;
          player.balance = Math.max(0, player.balance + delta);
        });
        if(isBonus){ state.bonusUsed = true; }
        else { state.pointers[state.activeCategory] += 1; }
        state.revealed = true;
      }
    }

    if(action === "next"){
      state.activeCategory = null; state.revealed = false; state.answers = {};
    }

    if(action === "close_room"){ state.status = "closed"; }
    if(action === "reopen_room"){ state.status = "open"; }

    await store.setJSON("state", state);
    return new Response(JSON.stringify(publicState(state)), { headers });
  }

  return new Response(JSON.stringify({error:"method not allowed"}), { status:405, headers });
};

export const config = { path: "/api/state" };
