var j=Object.defineProperty;var R=(p,e,i)=>e in p?j(p,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):p[e]=i;var l=(p,e,i)=>R(p,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(a){if(a.ep)return;a.ep=!0;const r=i(a);fetch(a.href,r)}})();class M{constructor(){l(this,"currentUser",null);l(this,"pendingProjectId",null);l(this,"listeners",[]);this.loadPersistedSession()}loadPersistedSession(){try{const e=localStorage.getItem("grambandhan_investor_session");e&&(this.currentUser=JSON.parse(e))}catch{this.currentUser=null}}isAuthenticated(){return this.currentUser!==null}getUser(){return this.currentUser}setPendingProject(e){this.pendingProjectId=e}getPendingProject(){return this.pendingProjectId}clearPendingProject(){this.pendingProjectId=null}login(e,i,t){const a={name:t||e.split("@")[0].replace("."," ").replace(/\b\w/g,r=>r.toUpperCase()),email:e,phone:"+880 1711-234567",nidVerified:!0,portfolioValueBDT:15e4};this.currentUser=a;try{localStorage.setItem("grambandhan_investor_session",JSON.stringify(a))}catch(r){console.warn("LocalStorage unavailable",r)}return this.notifyListeners(),a}demoLogin(){return this.login("tariq.rahman@investor.bd","demo1234","Tariq Rahman")}logout(){this.currentUser=null;try{localStorage.removeItem("grambandhan_investor_session")}catch(e){console.warn("LocalStorage unavailable",e)}this.notifyListeners()}onAuthChange(e){return this.listeners.push(e),e(this.currentUser),()=>{this.listeners=this.listeners.filter(i=>i!==e)}}notifyListeners(){for(const e of this.listeners)e(this.currentUser)}}const v=new M,T=[{id:1,title:"Paddy Seedlings Cultivation • ফসলী ধানের চারা রোপণ",subtitle:"Replacing predatory microcredit usury with transparent, asset-backed agricultural partnership contracts.",tag:"Zero Usury / 0% Riba",image:"/images/farmer-rice-planting.jpg",alt:"Bangladeshi farmer planting emerald rice seedlings in sunlit paddy waters",caption:"Rangpur & Bogura • High-Yield Boro Rice"},{id:2,title:"Eco Jute & Bamboo Homeware • সোনালী আঁশ ও বাঁশ শিল্প",subtitle:"Reviving Bengal’s golden fiber and cane basketry for zero-plastic sustainable global living.",tag:"Eco Handicrafts Mission",image:"/images/jute-bamboo-women.jpg",alt:"Village women weaving golden fiber jute bags and natural bamboo baskets",caption:"Kurigram & Faridpur • Golden Fiber Jute Artisans"},{id:3,title:"Highland Organic Tea Gardens • শ্রীমঙ্গলের সবুজ চা বাগান",subtitle:"Smallholder green tea & citrus plantations producing export-grade whole leaf harvest under Halal profit sharing.",tag:"Highland Agro Export",image:"/images/highland-tea.jpg",alt:"Lush rolling green tea gardens of Sreemangal with tea pluckers in morning sun",caption:"Panchagarh & Sreemangal • Highland Organic Tea"},{id:4,title:"Empowering Rural Growth Through Ethical Investment",subtitle:"Connecting global ethical investors with local farmers to build a sustainable, interest-free future for rural communities.",tag:"100% Halal & Asset-Backed",image:"/images/hero-bangladesh-farming.jpg",alt:"Bangladeshi farmer plowing stepped rice paddy with oxen under golden morning sunlight",caption:"Sylhet & Bogura Valley • Traditional Boro Rice Farming"},{id:5,title:"Sun-Dried Red Chilli Harvest • লাল মরিচ শুকানো ও বাছাই",subtitle:"Empowering rural women farmers with direct post-harvest drying facilities and guaranteed spice market linkages.",tag:"Authentic Bangladeshi Agriculture",image:"/images/hero-chilli-drying.jpg",alt:"Bangladeshi village women sorting and sun-drying vibrant red chillies on jute mats in rural fields",caption:"Bogura & Jamalpur • Sun-Dried Red Chilli Harvest"},{id:6,title:"Rajshahi Tree-Ripened Mangoes • রাজশাহীর ফরমালিনমুক্ত আম",subtitle:"Premium chemical-free paper-bagged Amrapali and Fazli orchards generating high seasonal harvest profits.",tag:"High Seasonal Return",image:"/images/rajshahi-mango-harvest.jpg",alt:"Farmers harvesting ripe mangoes in Rajshahi orchard during golden morning",caption:"Charghat, Rajshahi • Organic Mango Orchards"}],S=[{id:"proj-chilli-bogura",name:"Red Chilli farming - 1",bengaliName:"বগুড়া ও জামালপুর উন্নত জাতের লাল মরিচ চাষ",category:"crops",location:"Bogura & Jamalpur",district:"বগুড়া • Sariakandi, Bogura",image:"/images/red-chilli-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:64e4,fundingGoalBDT:8e5,minInvestmentBDT:2e4,potentialReturn:"15.5% – 18.2%",bengaliReturn:"১৫.৫% – ১৮.২% প্রতি ৩ মাস",returnRangePercent:[15.5,18.2],duration:"24 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 23,100 – ৳ 23,640",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"মরিচ চাষি সমবায় (Bogura Chilli Farmers)",producerRole:"Lead Producer & Field Director",cooperativeInfo:"Bogura Char Agriculture Alliance",shortStory:"High-yield sun-dried red chillies produced on fertile Jamuna riverbanks with guaranteed corporate procurement by top spices brands.",fullDescription:"Supplies high-yield drought-tolerant chili seedlings, bio-fertilizers, and clean solar drying tarpaulins to 24 river-island farmers. Guaranteed purchase agreements with leading spice brands in Bangladesh.",profitSharingRatio:"65% Chilli Grower / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% মরিচ চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Payout upon post-drying bulk sale.","Aflatoxin-free moisture testing verified before delivery.","Direct purchase agreements with certified spice millers."],verificationChecklist:["Field inspection of Jamuna char farmland completed","Solar drying floor and moisture control certified","Corporate supply agreement signed with national spice processors"]},{id:"proj-potato-munshiganj",name:"Munshiganj Organic Potato Harvest",bengaliName:"মুন্সীগঞ্জ উন্নত জাতের গোল আলু প্রকল্প",category:"crops",location:"Munshiganj Hub",district:"মুন্সীগঞ্জ • Tongibari, Munshiganj",image:"/images/munshiganj-potato-harvest.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:58e4,fundingGoalBDT:75e4,minInvestmentBDT:1e4,potentialReturn:"16.0% – 19.2%",bengaliReturn:"১৬.০% – ১৯.২% প্রতি ৪ মাস",returnRangePercent:[16,19.2],duration:"26 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 11,600 – ৳ 11,920",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"মোঃ বাবুল হোসেন ও কৃষক দল",producerRole:"Chief Potato Cultivator",cooperativeInfo:"Padma Basin Potato Growers Samity",shortStory:"Disease-free certified seed potatoes grown in silt-rich soil of Munshiganj with direct cold-storage preservation.",fullDescription:"Finances certified Diamant and Cardinal seed tubers, natural compost fertilization, and climate-controlled micro-cold storage to avoid mid-season market distress sales.",profitSharingRatio:"65% Potato Farmer / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% আলু চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month crop cycle payout.","Cold storage warehouse receipts held as financial collateral.","Quality sorting and grading completed at packing facility."],verificationChecklist:["Upazila Agriculture Officer verified seed origin","Soil nutrient and irrigation availability audited","Warehouse cold room temperature logs integrated"]},{id:"proj-beter-jhuri",name:"Beter Jhuri & Bamboo Craft Collective",bengaliName:"সিলেট ও জামালপুর বেতের ঝুড়ি ও হ্যান্ডব্যাগ সমবায়",category:"handicrafts",location:"Sylhet & Jamalpur",district:"সিলেট • Gowainghat, Sylhet",image:"/images/beter-jhuri-bag.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:42e4,fundingGoalBDT:6e5,minInvestmentBDT:7500,potentialReturn:"14.5% – 17.0%",bengaliReturn:"১৪.৫% – ১৭.০% প্রতি ৪ মাস",returnRangePercent:[14.5,17],duration:"21 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 8,585 – ৳ 8,775",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"সুফিয়া খাতুন ও ২৮ নারী কারিগর",producerRole:"Master Artisan & Cooperative Head",cooperativeInfo:"Surma Cane & Bamboo Women Guild",shortStory:"Preserving heritage cane weaving with stylish eco-friendly handbags, shopping baskets, and artisanal storage bins.",fullDescription:"Empowers 28 rural women artisans with bulk treated cane (বেত) and bamboo splits. Products are finished with natural plant dyes and sold to export boutiques and premium domestic outlets.",profitSharingRatio:"70% Women Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% নারী কারিগর / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Batch settlement upon boutique distribution.","Weekly advance fair-wage stipends for artisans.","Zero synthetic plastic in all woven goods."],verificationChecklist:["Artisan workshops physically inspected and certified","Quality control guidelines verified for export standards","Mobile banking verification for each individual artisan"]},{id:"proj-poultry-gazipur",name:"Sustainable Poultry Cluster",bengaliName:"টেকসই ব্রয়লার ও বাণিজ্যিক পোল্ট্রি খামার",category:"livestock",location:"Gazipur Agro Hub",district:"গাজীপুর • Gazipur, Dhaka",image:"/images/sustainable-poultry.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:48e4,fundingGoalBDT:8e5,minInvestmentBDT:7500,potentialReturn:"15.5% – 18.2%",bengaliReturn:"১৫.৫% – ১৮.২% বার্ষিক মুনাফা",returnRangePercent:[15.5,18.2],duration:"28 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 8,660 – ৳ 8,865",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"Md. Delwar Hossain & 6 Farmers",producerRole:"Managing Farm Director",cooperativeInfo:"Gazipur Eco-Broiler Growers Association",shortStory:"Modern bio-secure poultry facility in Gazipur producing antibiotic-free broiler meat with automated bell drinkers and organic grain feeding.",fullDescription:"This verified poultry project provides working capital for day-old high-grade chicks, bio-fermented grain feed, veterinary vaccinations, and automated temperature-controlled sheds. Meat is sold directly to vetted Dhaka supermarket chains, returning 65% of net profits to the grower and 35% to investors under an ethical Mudarabah agreement.",profitSharingRatio:"65% Poultry Grower / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% পোল্ট্রি খামারি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Estimated payout upon 60-day batch sale.","Veterinary clearance certificates updated weekly.","Direct-to-wholesale corporate contracts secured.","Asset-backed by live flock and equipment."],verificationChecklist:["Site inspected by Gazipur Upazila Livestock Officer","Bio-security fencing & clean water borehole confirmed","Corporate supply agreement with Shwapno & Meena Bazar verified","Digital batch ledger linked with GramBondhon portal"]},{id:"proj-fish-mymensingh",name:"Freshwater Rui-Katla Aquaculture",bengaliName:"ময়মনসিংহ রুপালি রুই ও কাতলা মাছ চাষ",category:"fisheries",location:"Mymensingh Aquaculture Hub",district:"ময়মনসিংহ • Trishal, Mymensingh",image:"/images/freshwater-fish-culture.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:6e5,fundingGoalBDT:9e5,minInvestmentBDT:12e3,potentialReturn:"17.5% – 21.0%",bengaliReturn:"১৭.৫% – ২১.০% প্রতি ৬ মাস",returnRangePercent:[17.5,21],duration:"32 Days Left",durationMonths:6,periodText:"6 Months",totalReturnBDT:"৳ 14,100 – ৳ 14,520",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"আব্দুল মোমেন ও মৎস্যচাষি দল",producerRole:"Lead Fishery Specialist",cooperativeInfo:"Brahmaputra Fishery Cooperative",shortStory:"Commercial freshwater carp aquaculture in clean earthen ponds with bio-floc aeration and pelleted nutritious feed.",fullDescription:"Finances fingerlings, oxygen aeration machinery, and certified fish feed for 4 interconnected ponds in Trishal. Harvested Rui, Katla, and Mrigel fish are auctioned at Kawran Bazar wholesale hub.",profitSharingRatio:"65% Fish Cultivator / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% মৎস্যচাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 6-month seasonal netting revenue settlement.","Routine water pH and dissolved oxygen lab testing.","Cold-chain insulated pickup vehicles booked for market dispatch."],verificationChecklist:["Pond ownership verified by District Fisheries Office","Water quality parameters and aeration systems tested","Wholesale commission agent auction contract validated"]},{id:"proj-mustard-manikganj",name:"Mustard & Pure Honey Apiculture",bengaliName:"মানিকগঞ্জ সরিষা ফুল ও খাঁটি মধু প্রকল্প",category:"crops",location:"Manikganj Mustard Valley",district:"মানিকগঞ্জ • Singair, Manikganj",image:"/images/mustard-honey-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:45e4,fundingGoalBDT:65e4,minInvestmentBDT:8e3,potentialReturn:"16.2% – 19.5%",bengaliReturn:"১৬.২% – ১৯.৫% প্রতি ৩ মাস",returnRangePercent:[16.2,19.5],duration:"18 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 9,295 – ৳ 9,560",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"মৌয়াল ও সরিষা চাষি সমবায়",producerRole:"Apiculture & Crop Lead",cooperativeInfo:"Dhaleshwari Honey Producers Union",shortStory:"Dual-revenue winter project: cold-pressed pungent mustard oil and raw wildflower honeycomb honey extracted by local beekeepers.",fullDescription:"Finances certified mustard seeds and 50 modern beehive wooden boxes placed in vast blooming yellow mustard fields. Generates double returns from raw honey jars and pure Ghani-pressed oil.",profitSharingRatio:"65% Farmer-Beekeeper / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% কৃষক-মৌয়াল / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Fast 90-day winter cycle turnaround.","Zero sugar adulteration certified by laboratory test.","Oil cold-pressed using traditional wooden Ghani machines."],verificationChecklist:["Beekeeping apiary boxes and centrifuge extractors audited","Mustard field acreage certified with Upazila agriculture wing","Honey purity testing verified with certified refractometer"]},{id:"proj-nakshi-rajshahi",name:"Nakshi Kantha Collective",bengaliName:"জামালপুর-রাজশাহী নকশী কাঁথা সমবায়",category:"handicrafts",location:"Islampur, Jamalpur",district:"জামালপুর ও রাজশাহী • Jamalpur, BD",image:"/images/nakshi-kantha-artisan.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:562500,fundingGoalBDT:75e4,minInvestmentBDT:7500,potentialReturn:"14.0% – 16.5%",bengaliReturn:"১৪.০% – ১৬.৫% বার্ষিক মুনাফা",returnRangePercent:[14,16.5],duration:"22 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 8,550 – ৳ 8,740",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"Rokeya Begum & 32 Artisans",producerRole:"Master Artisan & Cooperative Lead",cooperativeInfo:"Jamalpur-Rajshahi Karukriti Samity",shortStory:"Empowering 32 skilled village women to weave export-grade Nakshi Kantha quilts using pure combed cotton and azo-free natural dyes.",fullDescription:"Nakshi Kantha represents Bengal’s timeless heritage. This project bypasses middlemen to supply 32 rural artisans with bulk fine cotton, pure silk threads, and advance living stipends.",profitSharingRatio:"70% Women Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% নারী কারিগর / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Quarterly retail batch profit distribution.","Fair artisan wages disbursed weekly in advance.","Every quilt includes an artisan biographical authenticity tag."],verificationChecklist:["Artisan home looms physically validated by field coordinator","Cooperative bank account with dual-signatory verification","Export quality certification from EPB consultant"]},{id:"proj-highland-tea",name:"Highland Tea Collective",bengaliName:"পঞ্চগড় ও শ্রীমঙ্গল অর্গানিক চা বাগান",category:"crops",location:"Panchagarh & Sreemangal",district:"পঞ্চগড় • Panchagarh, Rangpur",image:"/images/highland-tea.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:72e4,fundingGoalBDT:8e5,minInvestmentBDT:1e4,potentialReturn:"16.5% – 19.5%",bengaliReturn:"১৬.৫% – ১৯.৫% বার্ষিক মুনাফা",returnRangePercent:[16.5,19.5],duration:"18 Days Left",durationMonths:6,periodText:"6 Months",totalReturnBDT:"৳ 11,650 – ৳ 11,950",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"Joynal Abedin & 18 Planters",producerRole:"Estate Field Director",cooperativeInfo:"North Bengal Organic Tea Consortium",shortStory:"Smallholder green tea terrace cultivation in Panchagarh using organic compost, solar water pumping, and whole-leaf micro-batch processing.",fullDescription:"Panchagarh is the burgeoning tea frontier of Bangladesh. This project finances whole-leaf organic tea flushes and solar-assisted drying facilities for 18 smallholder grower families.",profitSharingRatio:"60% Tea Planters / 40% Ethical Investors",investorShareText:"৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",bengaliProfitSplit:"৬০% চা চাষি / ৪০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Phased revenue settlement during peak plucking cycles.","Chemical pesticide-free organic soil certification monitored.","Fixed-price wholesale purchase commitments from European tea buyers."],verificationChecklist:["Land lease & tea garden boundary registered with Land Board","Organic soil audit confirms zero synthetic agrochemicals","Solar drying facility inspected and operational"]},{id:"proj-rajshahi-mangoes",name:"Rajshahi Organic Mangoes",bengaliName:"চারঘাট ফরমালিনমুক্ত আম্রপালি বাগান",category:"crops",location:"Charghat, Rajshahi",district:"রাজশাহী • Charghat, Rajshahi",image:"/images/rajshahi-mango-harvest.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:68e4,fundingGoalBDT:8e5,minInvestmentBDT:8e3,potentialReturn:"17.0% – 20.5%",bengaliReturn:"১৭.০% – ২০.৫% মৌসুমি মুনাফা",returnRangePercent:[17,20.5],duration:"25 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 9,360 – ৳ 9,640",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"Md. Enamul Haque & Orchard Group",producerRole:"Chief Orchardist",cooperativeInfo:"Padma Agro Fruit Producers Group",shortStory:"Chemical-free paper-bagged Amrapali and Fazli mangoes from 450 heritage trees in Charghat, shipped tree-ripe to urban consumers.",fullDescription:"Finances food-grade double-layered fruit bagging (cutting pesticide dependency by 95%), drip irrigation, and cushioned carton packaging.",profitSharingRatio:"65% Orchard Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% বাগান চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 5-month turnaround during seasonal harvest window.","Zero formalin, calcium carbide, or artificial ripening agents.","Direct-to-consumer pre-orders take care of sales volume."],verificationChecklist:["Orchard ownership verified with Charghat Sub-Registrar","Laboratory pesticide residue test report on sample fruits","Packaging and cold chain transit route finalized"]},{id:"proj-bogura-dairy",name:"Bogura Modern Dairy Hub",bengaliName:"বগুড়া উন্নত জাতের ডেইরি ও দুগ্ধ খামার",category:"livestock",location:"Sariakandi, Bogura",district:"বগুড়া • Sariakandi, Bogura",image:"/images/bogura-dairy-farm.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:63e4,fundingGoalBDT:9e5,minInvestmentBDT:15e3,potentialReturn:"15.0% – 17.8%",bengaliReturn:"১৫.০% – ১৭.৮% প্রতি ৬ মাস",returnRangePercent:[15,17.8],duration:"30 Days Left",durationMonths:6,periodText:"6 Months",totalReturnBDT:"৳ 17,250 – ৳ 17,670",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"Md. Al-Amin & 8 Dairy Farmers",producerRole:"Lead Livestock Manager",cooperativeInfo:"Jamuna Basin Dairy Collective",shortStory:"Hygienic milk chilling unit and organic silage feed cluster serving 15 village dairy producers in Bogura.",fullDescription:"Supplies high-grade silage nutrition, automated milking hygiene equipment, and bulk milk delivery contracts to regional sweetmeat confectioners.",profitSharingRatio:"60% Dairy Farmers / 40% Ethical Investors",investorShareText:"৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",bengaliProfitSplit:"৬০% ডেইরি খামারি / ৪০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Bi-monthly milk distribution settlement.","Disease and hoof health monitored bi-weekly.","Guaranteed purchase agreements with certified dairies."],verificationChecklist:["Veterinary officer certification on herd vaccination","Milk fat and SNF testing logs confirmed on digital lactometer","Chilling tank refrigeration backup generator installed"]},{id:"proj-clay-pottery",name:"Terracotta Clay Pottery Guild",bengaliName:"ধামরাই ও সাভার ঐতিহ্যবাহী মৃৎশিল্প সমবায়",category:"handicrafts",location:"Dhamrai, Dhaka",district:"ঢাকা • Dhamrai, Dhaka",image:"/images/clay-pottery.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:32e4,fundingGoalBDT:5e5,minInvestmentBDT:5e3,potentialReturn:"13.5% – 16.0%",bengaliReturn:"১৩.৫% – ১৬.০% প্রতি ৪ মাস",returnRangePercent:[13.5,16],duration:"19 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 5,675 – ৳ 5,800",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"গৌরাঙ্গ পাল ও ১২ পালপাড়া কারিগর",producerRole:"Master Sculptor & Potter",cooperativeInfo:"Dhamrai Terracotta Heritage Guild",shortStory:"Traditional terracotta cookware, curd pots (দইয়ের ভাঁড়), flower planters, and Bengali ornamental home decor.",fullDescription:"Finances purified alluvial clay, wood-fuel kilns, and electric potter wheels for Palpara artisan families in Dhamrai.",profitSharingRatio:"70% Potters / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% মৃৎশিল্পী / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month kiln batch profit settlement.","Zero lead chemical glazes; 100% organic fired terracotta.","Direct wholesale supply to sweet shops in Bogura & Dhaka."],verificationChecklist:["Kiln operation and smoke ventilation validated","Artisan registry and pottery showroom inspected","Local cooperative bank account verified"]},{id:"proj-rice-seedlings",name:"High-Yield Boro Seedlings Nursery",bengaliName:"রংপুর হাইব্রিড বোরো ধানের চারা ও ফলন",category:"crops",location:"Mithapukur, Rangpur",district:"রংপুর • Mithapukur, Rangpur",image:"/images/farmer-rice-planting.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:41e4,fundingGoalBDT:6e5,minInvestmentBDT:6e3,potentialReturn:"14.8% – 17.5%",bengaliReturn:"১৪.৮% – ১৭.৫% প্রতি ৪ মাস",returnRangePercent:[14.8,17.5],duration:"27 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 6,888 – ৳ 7,050",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"মোঃ সামসুল হক ও ১৪ কৃষক",producerRole:"Agronomist & Lead Farmer",cooperativeInfo:"North Bengal Rice Growers Forum",shortStory:"Disease-resistant high-yield Boro paddy seedlings grown in solar-irrigated seedbeds and distributed to smallholder farmers.",fullDescription:"Finances certified foundation seed from BADC, balanced micronutrient feeding, and efficient solar water pumping for dry-season rice production.",profitSharingRatio:"65% Rice Growers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% ধান চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Harvest grain weight verification upon threshing.","Registered with Upazila agriculture extension.","Disaster relief backup fund allocated in agreement."],verificationChecklist:["Certified seed lot numbers from BADC verified","Solar irrigation pump operational and audited","Farmer cooperative membership list validated"]},{id:"proj-jute-women",name:"Golden Fiber Jute & Eco Weaving",bengaliName:"ফরিদপুর সোনালী আঁশ পাট ও কারুপণ্য",category:"handicrafts",location:"Faridpur Jute Cluster",district:"ফরিদপুর • Boalmari, Faridpur",image:"/images/jute-bamboo-women.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:49e4,fundingGoalBDT:7e5,minInvestmentBDT:7e3,potentialReturn:"14.0% – 16.8%",bengaliReturn:"১৪.০% – ১৬.৮% প্রতি ৫ মাস",returnRangePercent:[14,16.8],duration:"23 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 7,980 – ৳ 8,175",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"হাসিনা বেগম ও ৪০ কারিগর",producerRole:"Cooperative President",cooperativeInfo:"Padma Golden Jute Weavers",shortStory:"Fine spun Tosha jute woven into zero-plastic shopping bags, home rugs, and braided plant hanging baskets for sustainable living.",fullDescription:"Supplies premium Tosha raw jute fibers and modernized handlooms to 40 women artisans in Faridpur, producing biodegradable export goods.",profitSharingRatio:"70% Jute Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% পাট কারিগর / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 5-month turnaround with bulk wholesale delivery.","Fair living wage stipends disbursed bi-weekly.","Biodegradable export packaging with zero chemical plastic."],verificationChecklist:["Weaving loom workshops inspected across 3 villages","Raw jute fiber moisture and tensile strength verified","Export order confirmation letter on file"]},{id:"proj-stepped-paddy",name:"Stepped Organic Paddy Cultivation",bengaliName:"বগুড়া ও দিনাজপুর সুগন্ধি ধান চাষ",category:"crops",location:"Dinajpur & Bogura",district:"দিনাজপুর • Birganj, Dinajpur",image:"/images/hero-bangladesh-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:54e4,fundingGoalBDT:75e4,minInvestmentBDT:9e3,potentialReturn:"15.2% – 18.0%",bengaliReturn:"১৫.২% – ১৮.০% প্রতি ৫ মাস",returnRangePercent:[15.2,18],duration:"29 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 10,368 – ৳ 10,620",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"মকবুল হোসেন ও কৃষক দল",producerRole:"Master Cultivator",cooperativeInfo:"Kataribhog Rice Producers Club",shortStory:"Heritage aromatic Kataribhog and Kalijira rice grown without chemical synthetic fertilizers using organic compost.",fullDescription:"Finances heirloom aromatic paddy cultivation in fertile northern plains. Milled rice is packaged in jute sacks for gourmet domestic markets and expatriate export.",profitSharingRatio:"65% Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% কৃষক / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 5-month harvest and milling cycle settlement.","Aromatic grain quality and moisture tested before packaging.","Contract farming agreement registered with Upazila board."],verificationChecklist:["Aromatic seed variety verified with BRRI researchers","Compost preparation and bio-pesticide methods inspected","Wholesale packaging facility ready for dispatch"]},{id:"proj-chilli-char-sariakandi",name:"Sariakandi River-Island Red Chilli",bengaliName:"সারিয়াকান্দি চরের লাল মরিচ সংগ্রহ",category:"crops",location:"Sariakandi Char, Bogura",district:"বগুড়া • Sariakandi, Bogura",image:"/images/red-chilli-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:72e4,fundingGoalBDT:9e5,minInvestmentBDT:12e3,potentialReturn:"16.0% – 19.0%",bengaliReturn:"১৬.০% – ১৯.০% প্রতি ৩ মাস",returnRangePercent:[16,19],duration:"15 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 13,920 – ৳ 14,280",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"মোঃ শফিকুল ইসলাম ও ২০ চর কৃষক",producerRole:"Char Agricultural Coordinator",cooperativeInfo:"Jamuna Char Farmers Collective",shortStory:"High-pungency river-silt chillies harvested across Jamuna chars and sun-dried on vast woven bamboo mats.",fullDescription:"Finances early chili seedling transplanting, safe solar dehydrator tents, and moisture-proof jute packaging for bulk supply to Dhaka grocery giants.",profitSharingRatio:"65% Char Growers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% চর চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Payout upon delivery to corporate processing hub.","Moisture level strictly capped at under 11%.","Asset backed by collected dry chili inventory."],verificationChecklist:["Char land cultivation boundaries gps-mapped","Quality solar drying tents inspected and validated","Signed invoice agreements with national spice brand"]},{id:"proj-potato-cold-rangpur",name:"Rangpur Cold Storage Seed Potato",bengaliName:"রংপুর হিমাগার বীজ আলু সংরক্ষণ ও বিতরণ",category:"crops",location:"Pirganj, Rangpur",district:"রংপুর • Pirganj, Rangpur",image:"/images/munshiganj-potato-harvest.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:51e4,fundingGoalBDT:7e5,minInvestmentBDT:8500,potentialReturn:"15.8% – 18.5%",bengaliReturn:"১৫.৮% – ১৮.৫% প্রতি ৪ মাস",returnRangePercent:[15.8,18.5],duration:"20 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 9,843 – ৳ 10,072",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"আমজাদ হোসেন ও সমবায় কৃষক",producerRole:"Cold Storage Director",cooperativeInfo:"Pirganj Farmers Seed Bank",shortStory:"Certified foundation seed potatoes stored in energy-efficient cold vaults to supply next season northern farmers.",fullDescription:"Guarantees disease-free certified foundation potato seeds for smallholders, preserving tubers during off-season heat and selling when demand peaks.",profitSharingRatio:"65% Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% আলু চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month cold storage settlement.","Temperature and humidity logged every 4 hours.","Insurance covers storage power outage or spoilage."],verificationChecklist:["Seed certification tags verified by BADC inspectors","Cold room insulation and refrigeration backup certified","Farmer purchase pre-bookings recorded"]},{id:"proj-cane-furniture-sylhet",name:"Sylhet Cane Basket & Home Craft",bengaliName:"সিলেট বেতের গৃহসজ্জা ও হস্তশিল্প",category:"handicrafts",location:"Beanibazar, Sylhet",district:"সিলেট • Beanibazar, Sylhet",image:"/images/beter-jhuri-bag.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:65e4,fundingGoalBDT:8e5,minInvestmentBDT:1e4,potentialReturn:"15.0% – 17.5%",bengaliReturn:"১৫.০% – ১৭.৫% প্রতি ৪ মাস",returnRangePercent:[15,17.5],duration:"16 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 11,500 – ৳ 11,750",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"তারেক মাহমুদ ও কারুশিল্পী দল",producerRole:"Cane Master Craftsman",cooperativeInfo:"Sylhet Cane Furniture Guild",shortStory:"Artisanal cane planters, stylish storage hampers, and sustainable home decor handwoven from natural wild forest canes.",fullDescription:"Finances seasoned natural cane poles, organic anti-termite treatments, and skilled village artisans in Sylhet crafting premium home goods for lifestyle brands.",profitSharingRatio:"70% Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% কারুশিল্পী / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Profit distribution upon boutique store consignment.","100% natural, chemical-free polishing.","Artisans receive fair wages upfront."],verificationChecklist:["Artisan workshop and raw cane seasoning area audited","Finished furniture strength and polish tested","Domestic retail showroom supply agreement confirmed"]},{id:"proj-fish-haor-sunamganj",name:"Sunamganj Haor Indigenous Fish",bengaliName:"সুনামগঞ্জ হাওরের দেশীয় মাছ সংরক্ষণ ও চাষ",category:"fisheries",location:"Tanguar Haor, Sunamganj",district:"সুনামগঞ্জ • Tahirpur, Sunamganj",image:"/images/freshwater-fish-culture.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:715e3,fundingGoalBDT:85e4,minInvestmentBDT:11e3,potentialReturn:"18.0% – 21.5%",bengaliReturn:"১৮.০% – ২১.৫% প্রতি ৫ মাস",returnRangePercent:[18,21.5],duration:"22 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 12,980 – ৳ 13,365",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"আব্দুস সোবহান ও হাওর জেলে সমবায়",producerRole:"Haor Fishery Coordinator",cooperativeInfo:"Tanguar Haor Fishermen Community",shortStory:"Native freshwater Boal, Shol, Pabda, and Ayre fish reared in community-protected sanctuary enclosures in Sunamganj haor basin.",fullDescription:"Finances deep natural water enclosure pens, live organic food supply, and eco-harvesting protocols to conserve endangered indigenous fish varieties while earning high premiums.",profitSharingRatio:"65% Fishermen / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% মৎস্যজীবী / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 5-month seasonal harvest settlement.","Sanctuary regulations respected; no undersized fish netted.","Transported live in aerated water tanks to premium Dhaka markets."],verificationChecklist:["Haor community enclosure license confirmed","Live fish transportation water tank and oxygen pump verified","Daily catch log audited by local fisheries staff"]},{id:"proj-honey-sundarbans",name:"Sundarbans Coastal Mangrove Honey",bengaliName:"সুন্দরবন প্রাকৃতিক মৌয়াল মধু সংগ্রহ",category:"crops",location:"Shyamnagar, Satkhira",district:"সাতক্ষীরা • Shyamnagar, Satkhira",image:"/images/mustard-honey-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:39e4,fundingGoalBDT:5e5,minInvestmentBDT:6500,potentialReturn:"16.5% – 19.8%",bengaliReturn:"১৬.৫% – ১৯.৮% প্রতি ৩ মাস",returnRangePercent:[16.5,19.8],duration:"14 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 7,570 – ৳ 7,785",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"মৌয়াল সমবায় সমিতি",producerRole:"Forest Honey Cooperative Leader",cooperativeInfo:"Sundarbans Mouyal Kalyan Samity",shortStory:"Pure raw Khalsi and Goran flower honey harvested by traditional Mouyals with safety gear and glass jar packaging.",fullDescription:"Provides protective beekeeping gear, non-destructive harvesting training, and food-grade glass bottling facilities. Pure raw honey is sold directly to consumers.",profitSharingRatio:"70% Mouyals / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% মৌয়াল / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Payout upon harvest batch bottling.","100% pure raw unpasteurized honey with natural pollen.","BSTI and lab chemical purity certificates guaranteed."],verificationChecklist:["Forest Department collection permit verified","Laboratory sugar and moisture test passed","Sterilized glass bottling line inspected"]},{id:"proj-dairy-sirajganj",name:"Sirajganj Baghabari Dairy Cooperative",bengaliName:"সিরাজগঞ্জ বাঘাবাড়ী দুগ্ধ খামার সমবায়",category:"livestock",location:"Shahjadpur, Sirajganj",district:"সিরাজগঞ্জ • Shahjadpur, Sirajganj",image:"/images/bogura-dairy-farm.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:99e4,fundingGoalBDT:12e5,minInvestmentBDT:18e3,potentialReturn:"15.2% – 18.0%",bengaliReturn:"১৫.২% – ১৮.০% প্রতি ৬ মাস",returnRangePercent:[15.2,18],duration:"31 Days Left",durationMonths:6,periodText:"6 Months",totalReturnBDT:"৳ 20,736 – ৳ 21,240",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"আনিসুর রহমান ও দুগ্ধ সমবায়",producerRole:"Dairy Cooperative Secretary",cooperativeInfo:"Baghabari Milk Producers Society",shortStory:"Lush bathan-grazing cows yielding high-butterfat pure milk processed for sweetmeat and ghee production.",fullDescription:"Finances balanced cattle nutrition, veterinary disease prevention, and chilled storage for smallholder dairy farmers in the famous Baghabari milk zone.",profitSharingRatio:"60% Dairy Farmers / 40% Ethical Investors",investorShareText:"৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",bengaliProfitSplit:"৬০% খামারি / ৪০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Bi-weekly milk sale revenue disbursements.","Veterinary doctor conducts health checks every 10 days.","Milk purchased directly under long-term contract with sweet makers."],verificationChecklist:["Bathan pasture grazing rights verified","Milking hygiene and stainless-steel transport cans certified","Daily milk fat testing ledger linked to portal"]},{id:"proj-pottery-rajshahi",name:"Terracotta Garden Planters & Tiles",bengaliName:"রাজশাহী টেরাকোটা বাগানপাত্র ও টালি সমবায়",category:"handicrafts",location:"Paba, Rajshahi",district:"রাজশাহী • Paba, Rajshahi",image:"/images/clay-pottery.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:36e4,fundingGoalBDT:5e5,minInvestmentBDT:6e3,potentialReturn:"14.0% – 16.5%",bengaliReturn:"১৪.০% – ১৬.৫% প্রতি ৪ মাস",returnRangePercent:[14,16.5],duration:"24 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 6,840 – ৳ 6,990",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"রমেশ পাল ও কুমার কারিগর দল",producerRole:"Chief Terracotta Craftsman",cooperativeInfo:"Padma Clay Artisans Society",shortStory:"Weather-resistant hand-molded terracotta architectural tiles, planter pots, and traditional water pitchers.",fullDescription:"Supports 16 rural potter families in Rajshahi with fine red silt clay and energy-efficient kilns, supplying urban landscaping nurseries and architects.",profitSharingRatio:"70% Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% কারিগর / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month kiln batch distribution.","Breakage insurance included in logistics budget.","Zero lead chemical glaze."],verificationChecklist:["Artisan village workshop verified by local union council","Finished product fire-baking hardness tested","Direct order receipts from nursery association confirmed"]},{id:"proj-chilli-comilla",name:"Chandpur & Comilla Naga Chilli",bengaliName:"কুমিল্লা ও চাঁদপুর বোম্বাই ও নাগা মরিচ চাষ",category:"crops",location:"Faridganj, Chandpur",district:"চাঁদপুর • Faridganj, Chandpur",image:"/images/red-chilli-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:84e4,fundingGoalBDT:1e6,minInvestmentBDT:14e3,potentialReturn:"16.5% – 19.5%",bengaliReturn:"১৬.৫% – ১৯.৫% প্রতি ৪ মাস",returnRangePercent:[16.5,19.5],duration:"17 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 16,310 – ৳ 16,730",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"মজিবুর রহমান ও কৃষক সমিতি",producerRole:"Specialty Chili Grower",cooperativeInfo:"Meghna Agro Spices Forum",shortStory:"Export-grade intensely aromatic Naga Morich (Ghost Pepper) cultivated under micro-mesh netting for export to London and Middle East.",fullDescription:"Finances protected net houses, organic drip fertigation, and padded export crates for premium high-capsaicin fresh chili peppers.",profitSharingRatio:"65% Growers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% মরিচ চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Harvest settlements every 30 days during harvest peak.","Export air-freight logistics partner on standby.","Complete phytosanitary lab testing guaranteed."],verificationChecklist:["Net house shading and drip irrigation operational","Export quarantine phytosanitary clearance verified","International freight booking order logged"]},{id:"proj-potato-bogura",name:"Shibganj Diamond Potato Harvest",bengaliName:"শিবগঞ্জ ডায়মন্ড আলু সরাসরি রফতানি প্রকল্প",category:"crops",location:"Shibganj, Bogura",district:"বগুড়া • Shibganj, Bogura",image:"/images/munshiganj-potato-harvest.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:617500,fundingGoalBDT:85e4,minInvestmentBDT:9500,potentialReturn:"15.5% – 18.2%",bengaliReturn:"১৫.৫% – ১৮.২% প্রতি ৪ মাস",returnRangePercent:[15.5,18.2],duration:"22 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 10,972 – ৳ 11,229",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"খোন্দকার মোস্তফা ও আলু চাষি দল",producerRole:"Field Director",cooperativeInfo:"Bogura Agro Potato Exporters Club",shortStory:"Export-standard Diamant potatoes grown in rich Karatoya soil for fresh supermarket supply and potato chip processors.",fullDescription:"Provides certified seeds and pest-resistant organic spray protocols to 18 farmers in Bogura. Crop is harvested and packaged in breathable jute sacks.",profitSharingRatio:"65% Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month farmgate delivery payout.","Sorting and grading by diameter standards.","Zero synthetic chemical dusting."],verificationChecklist:["Field soil and fertilizer balance certified by DAE","Storage shed ventilated with digital thermometers","Contract agreement with food processing buyers verified"]},{id:"proj-shitolpati-sylhet",name:"Traditional Shitol Pati Cane Mat",bengaliName:"মৌলভীবাজার শীতল পাটি ও বেতের দোলনা সমবায়",category:"handicrafts",location:"Rajnagar, Moulvibazar",district:"মৌলভীবাজার • Rajnagar, Sylhet",image:"/images/beter-jhuri-bag.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:48e4,fundingGoalBDT:6e5,minInvestmentBDT:8e3,potentialReturn:"14.2% – 16.8%",bengaliReturn:"১৪.২% – ১৬.৮% প্রতি ৪ মাস",returnRangePercent:[14.2,16.8],duration:"19 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 9,136 – ৳ 9,344",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"জয়া রানী দে ও কারিগর দল",producerRole:"UNESCO Heritage Artisan Lead",cooperativeInfo:"Sylhet Shitol Pati Weavers Society",shortStory:"UNESCO-recognized handwoven Murta cane mats that naturally stay cool in summer, paired with woven cane cradle baskets.",fullDescription:"Finances raw Murta plant cane harvesting and water-soaking for 25 women artisans preserving Bengal’s world-famous Shitol Pati heritage.",profitSharingRatio:"70% Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% কারিগর / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Quarterly export consignment payout.","Authentic certified Murta cane strips.","Fair wages credited to mobile wallets."],verificationChecklist:["Heritage artisan family lineage and skills audited","Murta reed plantation inventory checked","Craft exhibition sales partner confirmed"]},{id:"proj-prawn-khulna",name:"Khulna Bagda & Galda Shrimps",bengaliName:"খুলনা লবণাক্ত মিষ্টি জলের গলদা চিংড়ি প্রকল্প",category:"fisheries",location:"Paikgachha, Khulna",district:"খুলনা • Paikgachha, Khulna",image:"/images/freshwater-fish-culture.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:13e5,fundingGoalBDT:16e5,minInvestmentBDT:2e4,potentialReturn:"18.5% – 22.0%",bengaliReturn:"১৮.৫% – ২২.০% প্রতি ৫ মাস",returnRangePercent:[18.5,22],duration:"28 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 23,700 – ৳ 24,400",returnTypeTag:"Variable Return",riskLevel:"Medium-High",producerName:"মোঃ গোলাম মোস্তফা ও ঘের মালিক সমবায়",producerRole:"Lead Shrimp Farmer",cooperativeInfo:"Sundarbans Coastal Aquaculture Society",shortStory:"Organic SPF post-larvae giant freshwater prawns reared in brackish water gher enclosures with mangrove water exchange.",fullDescription:"Supplies certified disease-free PL seeds, organic feed, and water salinity control to 8 shrimp farmers in Khulna, producing premium seafood.",profitSharingRatio:"65% Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% চিংড়ি চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 5-month harvest turnaround.","Antibiotic-free laboratory verification.","Direct purchase agreement with export processing plant."],verificationChecklist:["Gher dike structural strength and water gate certified","PCR laboratory report on zero viral pathogen in seeds","Processing plant export agreement verified"]},{id:"proj-mustard-tangail",name:"Tangail Maghi Mustard Cold-Press",bengaliName:"টাঙ্গাইল মাঘী সরিষা ও খাঁটি ঘানি তেল সমবায়",category:"crops",location:"Mirzapur, Tangail",district:"টাঙ্গাইল • Mirzapur, Tangail",image:"/images/mustard-honey-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:46e4,fundingGoalBDT:6e5,minInvestmentBDT:7500,potentialReturn:"16.0% – 18.8%",bengaliReturn:"১৬.০% – ১৮.৮% প্রতি ৩ মাস",returnRangePercent:[16,18.8],duration:"16 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 8,700 – ৳ 8,910",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"আব্দুল কাদের ও সরিষা খামারি দল",producerRole:"Mustard Mill Manager",cooperativeInfo:"Tangail Ghani Oil Producers Club",shortStory:"Winter Maghi mustard seeds cold-pressed slowly in wooden mortar Ghanis to retain full aroma and zero chemical residues.",fullDescription:"Finances local farmers to grow indigenous Maghi mustard seeds and operate slow wooden cold presses, delivering pure pungent mustard oil to health-conscious consumers.",profitSharingRatio:"65% Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% কৃষক / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 90-day winter crop and pressing cycle.","Zero synthetic color or chemical solvents.","Delivered in food-grade tin containers."],verificationChecklist:["Cold-press wooden ghani machines inspected","Mustard seed purity and low moisture audited","Food safety clearance certificate verified"]},{id:"proj-poultry-narsingdi",name:"Narsingdi Sonali Free-Range Poultry",bengaliName:"নরসিংদী সোনালী মুরগি ও ডিম খামার সমবায়",category:"livestock",location:"Shibpur, Narsingdi",district:"নরসিংদী • Shibpur, Narsingdi",image:"/images/sustainable-poultry.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:56e4,fundingGoalBDT:75e4,minInvestmentBDT:8e3,potentialReturn:"15.8% – 18.5%",bengaliReturn:"১৫.৮% – ১৮.৫% প্রতি ৩ মাস",returnRangePercent:[15.8,18.5],duration:"21 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 9,264 – ৳ 9,480",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"কামাল উদ্দিন ও খামারি দল",producerRole:"Managing Breeder",cooperativeInfo:"Narsingdi Free-Range Poultry Forum",shortStory:"Hardy indigenous Sonali breed chickens reared in spacious ventilated sheds with open-range outdoor foraging runs.",fullDescription:"Provides certified day-old Sonali chicks, high-protein organic grain feed, and veterinary biosecurity. Meat and eggs are sold directly to Dhaka organic food stores.",profitSharingRatio:"65% Poultry Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% খামারি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 75-day flock marketing settlement.","Regular vaccination recorded by livestock officer.","Asset backed by live flock inventory."],verificationChecklist:["Free-range enclosure fencing verified","Veterinary vaccine log books audited","Direct purchase agreements with retail shops on record"]},{id:"proj-tea-panchagarh",name:"Panchagarh Plainland Green Tea Estate",bengaliName:"পঞ্চগড় সমতলের অর্গানিক গ্রিন টি প্রকল্প",category:"crops",location:"Tetulia, Panchagarh",district:"পঞ্চগড় • Tetulia, Rangpur",image:"/images/highland-tea.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:78e4,fundingGoalBDT:95e4,minInvestmentBDT:10500,potentialReturn:"16.0% – 19.0%",bengaliReturn:"১৬.০% – ১৯.০% প্রতি ৬ মাস",returnRangePercent:[16,19],duration:"25 Days Left",durationMonths:6,periodText:"6 Months",totalReturnBDT:"৳ 12,180 – ৳ 12,495",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"সিরাজুল ইসলাম ও চা চাষি সমবায়",producerRole:"Estate Manager",cooperativeInfo:"Borderland Tea Planters Union",shortStory:"Himalayan foothills plainland organic tea garden in Tetulia, producing tender two-leaves-and-a-bud green tea.",fullDescription:"Finances eco-friendly organic manure, micro-sprinklers, and modern leaf rolling machinery for smallholders in northernmost Bangladesh.",profitSharingRatio:"60% Tea Planters / 40% Ethical Investors",investorShareText:"৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",bengaliProfitSplit:"৬০% চা চাষি / ৪০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 6-month plucking cycle settlement.","Certified 100% pesticide-free whole leaf.","Direct factory processing agreement with tea brand."],verificationChecklist:["Tea Board smallholder registration verified","Organic soil audit report passed","Sprinkler irrigation operational"]},{id:"proj-mango-chapainawabganj",name:"Shibganj Fazli & Amrapali Mango Orchard",bengaliName:"চাঁপাইনবাবগঞ্জ শিবগঞ্জ ফজলি আম বাগান",category:"crops",location:"Shibganj, Chapainawabganj",district:"চাঁপাইনবাবগঞ্জ • Shibganj, Rajshahi",image:"/images/rajshahi-mango-harvest.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:72e4,fundingGoalBDT:9e5,minInvestmentBDT:9e3,potentialReturn:"17.2% – 20.8%",bengaliReturn:"১৭.২% – ২০.৮% প্রতি ৫ মাস",returnRangePercent:[17.2,20.8],duration:"26 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 10,548 – ৳ 10,872",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"মোঃ শফিকুল আলম ও বাগান মালিক",producerRole:"Heritage Mango Cultivator",cooperativeInfo:"Ganges Basin Fruit Growers",shortStory:"GI-certified Fazli, Khirsapat, and Langra mangoes grown with eco fruit bagging to protect against fruit flies without chemicals.",fullDescription:"Finances tree pruning, organic soil composting, and fruit-bagging on 500 mature trees in Chapainawabganj, delivering tree-ripened fruit.",profitSharingRatio:"65% Growers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% বাগান মালিক / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Post-harvest 5-month seasonal settlement.","Chemical-free ripening in wooden crates with clean rice straw.","Direct courier shipping to pre-booked corporate consumers."],verificationChecklist:["Orchard deed and tree count physically validated","Double-layer paper bags applied and inspected","Logistics delivery fleet contract signed"]},{id:"proj-jute-crafts-dhaka",name:"Export-Grade Jute Rugs & Fashion Totes",bengaliName:"ঢাকা হস্তশিল্প বহুমুখী পাটপণ্য ও শপিং ব্যাগ",category:"handicrafts",location:"Sonargaon, Narayanganj",district:"নারায়ণগঞ্জ • Sonargaon, Dhaka",image:"/images/jute-bamboo-women.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:518400,fundingGoalBDT:72e4,minInvestmentBDT:7200,potentialReturn:"14.5% – 17.2%",bengaliReturn:"১৪.৫% – ১৭.২% প্রতি ৪ মাস",returnRangePercent:[14.5,17.2],duration:"20 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 8,244 – ৳ 8,438",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"ফরিদা ইয়াসমিন ও কারুশিল্পী দল",producerRole:"Cooperative Design Director",cooperativeInfo:"Shitolakshya Jute Artisans Samity",shortStory:"Natural braided golden jute floor rugs, beach totes, and table runners handcrafted by 35 rural women artisans.",fullDescription:"Supplies bleached and dyed export-grade jute yarns to village women artisans in Sonargaon, supplying European fair-trade boutiques.",profitSharingRatio:"70% Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% পাটশিল্পী / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month order fulfillment settlement.","Fair wages credited directly to mobile accounts.","Azo-free environmental dyes used."],verificationChecklist:["Handloom workshops in Sonargaon audited","Sample rugs passed international abrasion tests","Export purchase order on record"]}],C={id:"proj-rangpur-solar-potato",name:"Rangpur Community Solar Cold Storage & Potato Farm",bengaliName:"রংপুর কমিউনিটি সৌর কোল্ড স্টোরেজ ও আলু চাষ",category:"agriculture",location:"Mithapukur, Rangpur",district:"রংপুর • Mithapukur, Rangpur",image:"/images/hero-bangladesh-farming.jpg",badge:"Featured Project of the Month",verified:!0,fundingRaisedBDT:142e4,fundingGoalBDT:18e5,minInvestmentBDT:1e4,potentialReturn:"15.0% - 18.5% est.",bengaliReturn:"১৫.০% – ১৮.৫% বার্ষিক মুনাফা",returnRangePercent:[15,18.5],duration:"7 Months",durationMonths:7,riskLevel:"Low-Medium",producerName:"Md. Rafiqul Islam & 14 Smallholder Farmers",producerRole:"Lead Cooperative Director",cooperativeInfo:"Mithapukur Green Krishi Samity",shortStory:"Solving the seasonal distress-sale crisis by combining high-yield certified seed potato cultivation with an on-farm 50-tonne solar micro-cold store.",fullDescription:"Every winter, thousands of hardworking Rangpur potato growers face crushing losses because conventional cold storage slots are monopolized by middlemen. This game-changing project finances a shared 50-metric-tonne decentralized solar-powered cooling chamber right beside the cultivation fields. Farmers can safely hold their crop for 4 months and sell during peak market prices, increasing net profits by up to 60%.",profitSharingRatio:"65% Farmer Cooperative / 35% Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% কৃষক সমবায় / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 7-month investment tenure covering sowing, harvest, storage, and phased sale.","Solar refrigeration equipment insured against electrical/mechanical failure.","Cold room temperature and humidity monitored via live IoT sensors.","Transparent digital audit of every kilogram entered and dispatched."],verificationChecklist:["Physical land verification for cold-chamber installation completed","Technical blueprint approved by BUET-trained renewable energy consultant","Cooperative bylaws registered with Directorate of Cooperatives","Signed letter of consent from all 14 farmer families"],isFeatured:!0},y=[{id:"prod-chinigura-rice",name:"Premium Chinigura Aromatic Rice",bengaliName:"দিনাজপুরের প্রিমিয়াম সুগন্ধি চিনিগুঁড়া চাল",category:"farming",priceBDT:140,originalPriceBDT:175,discountPercent:20,unit:"1 kg",image:"/images/chinigura-rice.jpg",artisanName:"Shonali Organic Farm",artisanDistrict:"Dinajpur",craftType:"Traditional Indigenous Crop",description:"Freshly milled, fragrant non-sticky Chinigura rice cultivated with zero toxic chemical pesticides in Dinajpur.",rating:4.9,reviewsCount:142,flashDeal:!0,sellerCooperative:"Dinajpur Farmer Samity",originVillage:"Birganj, Dinajpur",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-miniket-rice",name:"Kushtia Premium Miniket Rice",bengaliName:"কুষ্টিয়ার ঝরঝরে বাসমতি মিনিকেট চাল",category:"farming",priceBDT:82,originalPriceBDT:95,discountPercent:14,unit:"1 kg",image:"/images/farmer-rice-planting.jpg",artisanName:"Kushtia Agro Farmers",artisanDistrict:"Kushtia",craftType:"Paddy Milling",description:"Slender, long-grain Miniket rice processed from newly harvested paddy, perfect for daily healthy family dining.",rating:4.8,reviewsCount:88,flashDeal:!1,sellerCooperative:"Padma Agro Union",originVillage:"Kumarkhali, Kushtia",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-kalijira-rice",name:"Kalijira Gobindobhog Fine Polao Rice",bengaliName:"কালোজিরা সুগন্ধি পোলাও চাল",category:"farming",priceBDT:155,originalPriceBDT:180,discountPercent:14,unit:"1 kg",image:"/images/chinigura-rice.jpg",artisanName:"Barind Heritage Grain",artisanDistrict:"Naogaon",craftType:"Aromatic Paddy",description:"Miniature grain heirloom rice reserved for celebratory Polao, Biryani, and festive Bengali Payesh.",rating:4.9,reviewsCount:64,flashDeal:!0,sellerCooperative:"Naogaon Organic Growers",originVillage:"Manda, Naogaon",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-red-lentils",name:"Red Lentils - Deshi Musur Dal",bengaliName:"পাবনার দেশি লাল মসুর ডাল",category:"farming",priceBDT:145,originalPriceBDT:170,discountPercent:15,unit:"1 kg",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Ishwardi Farmers Guild",artisanDistrict:"Pabna",craftType:"Hand-sorted Legumes",description:"Fast-cooking, nutrient-rich indigenous brown-seeded red lentils with natural sweet earthen aroma and no polishing.",rating:4.9,reviewsCount:110,flashDeal:!0,sellerCooperative:"Ishwardi Pulse Union",originVillage:"Ishwardi, Pabna",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-shonali-moong-dal",name:"Shonali Roasted Moong Dal",bengaliName:"ভাজা সোনালী সোনা মুগ ডাল",category:"farming",priceBDT:185,originalPriceBDT:210,discountPercent:12,unit:"1 kg",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Jashore Agro Alliance",artisanDistrict:"Jashore",craftType:"Artisan Roasted Legumes",description:"Golden small-grain moong dal lightly clay-roasted in iron wok to bring out exquisite nutty fragrance.",rating:4.8,reviewsCount:53,flashDeal:!1,sellerCooperative:"Jashore Krishi Somaj",originVillage:"Bagherpara, Jashore",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-raw-honey",name:"Raw Sundarban Multifloral Forest Honey",bengaliName:"সুন্দরবনের প্রাকৃতিক চাকভাঙা খাঁটি মধু",category:"farming",priceBDT:750,originalPriceBDT:900,discountPercent:17,unit:"500 gm",image:"/images/mustard-honey-farming.jpg",artisanName:"Mawali Honey Collectors",artisanDistrict:"Satkhira",craftType:"Wild Mangrove Honey",description:"100% pure raw unpasteurized multifloral honey collected sustainably from deep Sundarban mangrove bee hives.",rating:5,reviewsCount:178,flashDeal:!0,sellerCooperative:"Sundarban Forest Guild",originVillage:"Shyamnagar, Satkhira",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-mustard-honey",name:"Organic Mustard Blossom Natural Honey",bengaliName:"সরিষা ফুলের প্রাকৃতিক ক্রিস্টালাইজড মধু",category:"farming",priceBDT:480,originalPriceBDT:550,discountPercent:13,unit:"500 gm",image:"/images/mustard-honey-farming.jpg",artisanName:"Manikganj Bee Haven",artisanDistrict:"Manikganj",craftType:"Apiary Beekeeping",description:"Golden blossom honey from blooming winter mustard fields; smooth velvety texture with immunity-boosting natural enzymes.",rating:4.8,reviewsCount:76,flashDeal:!1,sellerCooperative:"Dhaleshwari Beekeepers",originVillage:"Singair, Manikganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-munshiganj-potatoes",name:"Munshiganj Diamond Potatoes (Bagged)",bengaliName:"মুন্সীগঞ্জের টাটকা ডায়মন্ড আলু (১০ কেজি)",category:"farming",priceBDT:360,originalPriceBDT:420,discountPercent:14,unit:"10 kg bag",image:"/images/munshiganj-potato-harvest.jpg",artisanName:"Bikrampur Agri Hub",artisanDistrict:"Munshiganj",craftType:"River Silt Agriculture",description:"Firm, golden-fleshed Diamond potatoes freshly harvested from fertile Padma-Meghna alluvium soil.",rating:4.8,reviewsCount:92,flashDeal:!1,sellerCooperative:"Munshiganj Potato Farmers",originVillage:"Tongibari, Munshiganj",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-panchagarh-black-tea",name:"Panchagarh Highland Organic Black Tea",bengaliName:"পঞ্চগড়ের প্রিমিয়াম অর্গানিক ব্ল্যাক টি",category:"farming",priceBDT:320,originalPriceBDT:380,discountPercent:16,unit:"400 gm",image:"/images/highland-tea.jpg",artisanName:"Himalayan Foothills Tea",artisanDistrict:"Panchagarh",craftType:"Whole Leaf Orthodox CTC",description:"Bold, malt-rich orthodox black tea cultivated in pesticide-free gardens near the Himalayan foothills.",rating:4.9,reviewsCount:114,flashDeal:!1,sellerCooperative:"Tetulia Tea Planters",originVillage:"Tetulia, Panchagarh",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-sylhet-green-tea",name:"Sreemangal Jasmine Green Tea",bengaliName:"শ্রীমঙ্গলের সতেজ জেসমিন গ্রিন টি",category:"farming",priceBDT:420,originalPriceBDT:500,discountPercent:16,unit:"250 gm",image:"/images/highland-tea.jpg",artisanName:"Radhanagar Tea Gardens",artisanDistrict:"Moulvibazar",craftType:"Single Estate Green Tea",description:"First flush delicate green tea leaves infused with handpicked wild jasmine blossoms from Sreemangal hills.",rating:4.9,reviewsCount:68,flashDeal:!1,sellerCooperative:"Sreemangal Hill Guild",originVillage:"Radhanagar, Sreemangal",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-date-palm-gur",name:"Jashore Nolen Gur (Liquid Date Palm)",bengaliName:"যশোরের খাঁটি নলেন গুড় (ঝুলা গুড়)",category:"farming",priceBDT:380,originalPriceBDT:450,discountPercent:16,unit:"1 kg clay jar",image:"/images/clay-pottery.jpg",artisanName:"Gachi Gurgor Silpo",artisanDistrict:"Jashore",craftType:"Traditional Sap Evaporation",description:"Fresh winter dawn date palm sap boiled down in woodfire earthen furnace; rich caramel floral bouquet.",rating:5,reviewsCount:135,flashDeal:!0,sellerCooperative:"Khajura Gachi Samity",originVillage:"Khajura, Jashore",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-patali-gur",name:"Rajshahi Solid Patali Khejur Gur",bengaliName:"রাজশাহীর পাটালি খেজুর গুড় (১ কেজি)",category:"farming",priceBDT:350,originalPriceBDT:400,discountPercent:12,unit:"1 kg slab",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Charghat Agro Artisans",artisanDistrict:"Rajshahi",craftType:"Solidified Palm Syrup",description:"Solid crystallized natural Khejur Patali gur with no artificial color, hydro, or chemical preservatives.",rating:4.8,reviewsCount:82,flashDeal:!1,sellerCooperative:"Padma Riverside Farmers",originVillage:"Charghat, Rajshahi",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-kataribhog-rice",name:"Dinajpur Kataribhog Heirloom Rice",bengaliName:"দিনাজপুরের ঐতিহ্যবাহী কাটারিভোগ চাল",category:"farming",priceBDT:110,originalPriceBDT:130,discountPercent:15,unit:"1 kg",image:"/images/chinigura-rice.jpg",artisanName:"Kantanagar Farmers Collective",artisanDistrict:"Dinajpur",craftType:"Heritage Scented Grain",description:"Renowned pointed slender rice grain with distinct heritage aroma praised across Bengal for centuries.",rating:4.8,reviewsCount:71,flashDeal:!1,sellerCooperative:"Dinajpur Heirloom Seeds",originVillage:"Kaharole, Dinajpur",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-black-rice",name:"Organic Forbidden Black Rice (কালো চাল)",bengaliName:"ময়মনসিংহের পুষ্টিকর অর্গানিক কালো চাল",category:"farming",priceBDT:240,originalPriceBDT:300,discountPercent:20,unit:"1 kg",image:"/images/farmer-rice-planting.jpg",artisanName:"Brahmaputra Organic Project",artisanDistrict:"Mymensingh",craftType:"Anthocyanin-Rich Grain",description:"Deep purple antioxidant superfood black rice, ideal for health-conscious diabetics and fitness nutrition.",rating:4.9,reviewsCount:47,flashDeal:!1,sellerCooperative:"Mymensingh Green Roots",originVillage:"Trishal, Mymensingh",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-deshi-mung-beans",name:"Unpolished Whole Green Gram (সবুজ মুগ)",bengaliName:"পাবনার আনপলিশড গোটা সবুজ মুগ ডাল",category:"farming",priceBDT:160,originalPriceBDT:185,discountPercent:14,unit:"1 kg",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Pabna Pulse Growers",artisanDistrict:"Pabna",craftType:"Whole Organic Seeds",description:"Whole green gram for sprouting, dal cooking, and high plant protein home cuisine without wax coating.",rating:4.7,reviewsCount:39,flashDeal:!1,sellerCooperative:"Pabna Green Union",originVillage:"Chatmohar, Pabna",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-organic-chia-seeds",name:"Sirajganj Cultivated Organic Chia Seeds",bengaliName:"সিরাজগঞ্জের অর্গানিক চিয়া সিড (৫০০ গ্রাম)",category:"farming",priceBDT:390,originalPriceBDT:480,discountPercent:19,unit:"500 gm",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Chalanbeel Agro Innovation",artisanDistrict:"Sirajganj",craftType:"Superfood Seeds",description:"Omega-3 and dietary fiber powerhouse cultivated under zero pesticide supervision in Chalanbeel basin.",rating:4.9,reviewsCount:65,flashDeal:!1,sellerCooperative:"Chalanbeel Youth Farmers",originVillage:"Tarash, Sirajganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-mustard-seeds-yellow",name:"Indigenous Yellow Mustard Seeds (হলুদ সরিষা)",bengaliName:"মানিকগঞ্জের দেশি হলুদ সরিষা (১ কেজি)",category:"farming",priceBDT:135,originalPriceBDT:160,discountPercent:16,unit:"1 kg",image:"/images/mustard-honey-farming.jpg",artisanName:"Manikganj Seed Network",artisanDistrict:"Manikganj",craftType:"Sun-Dried Oilseeds",description:"Premium quality golden mustard seeds for fresh home mustard paste (shorshe bata) with mild pungency.",rating:4.8,reviewsCount:58,flashDeal:!1,sellerCooperative:"Dhaleshwari Seed Union",originVillage:"Saturia, Manikganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-sugarcane-gur",name:"Chuadanga Organic Sugarcane Gur (আখের গুড়)",bengaliName:"চুয়াডাঙ্গার কেমিক্যালমুক্ত খাঁটি আখের গুড়",category:"farming",priceBDT:190,originalPriceBDT:230,discountPercent:17,unit:"1 kg container",image:"/images/clay-pottery.jpg",artisanName:"Darshana Cane Millers",artisanDistrict:"Chuadanga",craftType:"Traditional Boiling",description:"Fresh sugarcane cane juice reduced over crushed bagasse fires into aromatic semi-soft country gur.",rating:4.9,reviewsCount:84,flashDeal:!1,sellerCooperative:"Darshana Agro Cooperatives",originVillage:"Damurhuda, Chuadanga",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-chinabadam-raw",name:"Char Alluvial Raw Groundnuts (কাঁচা চিনাবাদাম)",bengaliName:"কুড়িগ্রামের চরাঞ্চলের কাঁচা চিনাবাদাম",category:"farming",priceBDT:165,originalPriceBDT:195,discountPercent:15,unit:"1 kg",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Kurigram Char Farmer Guild",artisanDistrict:"Kurigram",craftType:"Sandbar Soil Cultivation",description:"Plump, crunchy groundnuts harvested from river sandbars of Brahmaputra; naturally sweet and nutrient-dense.",rating:4.8,reviewsCount:42,flashDeal:!1,sellerCooperative:"Brahmaputra Char Union",originVillage:"Ulipur, Kurigram",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-organic-brown-sugar",name:"Deshi Unrefined Brown Sugar (লাল চিনি)",bengaliName:"রাজশাহীর দেশি অপরিশোধিত লাল চিনি",category:"farming",priceBDT:170,originalPriceBDT:200,discountPercent:15,unit:"1 kg pack",image:"/images/chinigura-rice.jpg",artisanName:"Varendra Cane Guild",artisanDistrict:"Rajshahi",craftType:"Unbleached Molasses Sugar",description:"Mineral-rich unrefined cane sugar retaining natural cane molasses, free from sulfur and chemical bleaching.",rating:4.9,reviewsCount:77,flashDeal:!1,sellerCooperative:"Varendra Sugar Producers",originVillage:"Bagha, Rajshahi",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-mashkalai-dal",name:"Chalanbeel Split Mashkalai Dal (কলাই ডাল)",bengaliName:"চলনবিলের সুগন্ধি মাষকলাইয়ের ডাল",category:"farming",priceBDT:190,originalPriceBDT:225,discountPercent:16,unit:"1 kg",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Tarash Farmer Cooperative",artisanDistrict:"Sirajganj",craftType:"Traditional Dal Milling",description:"Essential for traditional Bengali Fish head Macher Muro and winter winter pithas, rich creamy texture.",rating:4.8,reviewsCount:49,flashDeal:!1,sellerCooperative:"Chalanbeel Grain Union",originVillage:"Tarash, Sirajganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-nazirshail-rice",name:"Old-Harvest Barishal Balam Nazirshail Rice",bengaliName:"বরিশালের পুরনো নাজিরশাইল চাল (৫ কেজি)",category:"farming",priceBDT:440,originalPriceBDT:500,discountPercent:12,unit:"5 kg bag",image:"/images/chinigura-rice.jpg",artisanName:"Kirtankhola Agro",artisanDistrict:"Barishal",craftType:"Aged Parboiled Paddy",description:"Well-matured slender grain parboiled rice that expands gracefully and remains firm when served.",rating:4.8,reviewsCount:96,flashDeal:!1,sellerCooperative:"Southern Rice Exporters",originVillage:"Babuganj, Barishal",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-nakshi-kantha",name:"Jamalpur Silk-Embroidered Nakshi Kantha",bengaliName:"জামালপুরের ঐতিহ্যবাহী রেশম সুতার নকশী কাঁথা",category:"handicrafts",priceBDT:3450,originalPriceBDT:4200,discountPercent:18,unit:"1 piece (7.5 x 5 ft)",image:"/images/nakshi-kantha-artisan.jpg",artisanName:"Rokeya Begum",artisanDistrict:"Jamalpur",craftType:"Pure Cotton with Fine Silk Threads",description:"100% hand-stitched over 45 days depicting traditional Bengali folk motifs, lotus ponds, and village flora.",rating:4.9,reviewsCount:38,flashDeal:!0,sellerCooperative:"Jamalpur Women Artisan Guild",originVillage:"Islampur, Jamalpur",inStock:!0,deliveryDays:"3-4 Business Days"},{id:"prod-clay-pottery",name:"Handcrafted Terracotta Clay Pottery",bengaliName:"হাতে গড়া ঐতিহ্যবাহী মাটির পাত্র",category:"handicrafts",priceBDT:950,originalPriceBDT:1200,discountPercent:21,unit:"Set of 3 pieces",image:"/images/clay-pottery.jpg",artisanName:"Gouranga Pal",artisanDistrict:"Dhamrai, Dhaka",craftType:"Fired Natural Terracotta Clay",description:"Artisanal wheel-thrown terracotta serving vessels made with indigenous river clay and wood-fired kiln finishes.",rating:4.9,reviewsCount:42,flashDeal:!1,sellerCooperative:"Dhamrai Pal Mahashava",originVillage:"Kagojinagar, Dhamrai",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-jute-tote",name:"Handcrafted Golden Fiber Eco Jute Bag",bengaliName:"হাতে বোনা সোনালী আঁশের পরিবেশবান্ধব জুট ব্যাগ",category:"handicrafts",priceBDT:850,originalPriceBDT:1050,discountPercent:19,unit:"1 piece",image:"/images/jute-bamboo-women.jpg",artisanName:"Shahnaz Parvin",artisanDistrict:"Faridpur",craftType:"Braided Natural Jute with Cotton Lining",description:"Durable, sustainable, and 100% biodegradable daily tote bag handmade by women artisans of Faridpur.",rating:4.8,reviewsCount:52,flashDeal:!1,sellerCooperative:"Faridpur Women Cooperative",originVillage:"Boalmari, Faridpur",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-beter-jhuri-bag",name:"Artisan Bamboo & Cane Handwoven Basket (বেতের ঝুড়ি)",bengaliName:"হাতে তৈরি ঐতিহ্যবাহী বেতের ঝুড়ি ও ফ্রুট বাস্কেট",category:"handicrafts",priceBDT:650,originalPriceBDT:850,discountPercent:24,unit:"1 piece",image:"/images/beter-jhuri-bag.jpg",artisanName:"Firoza Khatun",artisanDistrict:"Kurigram",craftType:"Hand-Cured Rattan & Green Bamboo",description:"Carefully cured and woven cane storage basket with smooth lacquer finish; pest-resistant and biodegradable.",rating:4.9,reviewsCount:56,flashDeal:!0,sellerCooperative:"Kurigram Bamboo Craft Alliance",originVillage:"Nageshwari, Kurigram",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-rattan-tray",name:"Rattan Handcrafted Serving Tray",bengaliName:"বেতের নান্দনিক ডাইনিং পরিবেশন ট্রে",category:"handicrafts",priceBDT:890,originalPriceBDT:1100,discountPercent:19,unit:"1 piece (16 x 12 inch)",image:"/images/beter-jhuri-bag.jpg",artisanName:"Sufia Begum",artisanDistrict:"Sylhet",craftType:"Natural Rattan & Cane Weaving",description:"Handwoven tea and fruit serving tray with solid cane handles and polished organic teak wax coating.",rating:4.9,reviewsCount:45,flashDeal:!0,sellerCooperative:"Surma Cane Artisans",originVillage:"Golapganj, Sylhet",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-rangpur-gamcha",name:"Rangpur Handloom Pure Cotton Gamcha",bengaliName:"রংপুরের ঐতিহ্যবাহী তাঁতের খাঁটি সুতি গামছা",category:"handicrafts",priceBDT:260,originalPriceBDT:320,discountPercent:19,unit:"Pack of 2",image:"/images/nakshi-kantha-artisan.jpg",artisanName:"Motaleb Hossain",artisanDistrict:"Rangpur",craftType:"Pitloom Hand-Woven Cotton",description:"Super absorbent, 100% fine cotton traditional checkered towel loomed by master weavers in Gangachara.",rating:4.9,reviewsCount:89,flashDeal:!1,sellerCooperative:"Teesta Handloom Union",originVillage:"Gangachara, Rangpur",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-rajshahi-silk-scarf",name:"Rajshahi Pure Mulberry Silk Scarf",bengaliName:"রাজশাহীর খাঁটি রেশম তসর সিল্ক ওড়না",category:"handicrafts",priceBDT:2450,originalPriceBDT:2900,discountPercent:16,unit:"1 piece",image:"/images/nakshi-kantha-artisan.jpg",artisanName:"Anwara Silk Weavers",artisanDistrict:"Rajshahi",craftType:"Sericulture Mulberry Silk",description:"Feather-light pure silk dupatta spun from indigenous mulberry cocoons with hand-block botanical dyes.",rating:5,reviewsCount:62,flashDeal:!1,sellerCooperative:"Resham Polli Samabay",originVillage:"Sopura, Rajshahi",inStock:!0,deliveryDays:"3-4 Business Days"},{id:"prod-tangail-cotton-sari",name:"Tangail Handloom Khadi Cotton Sari",bengaliName:"টাঙ্গাইলের ঐতিহ্যবাহী হাতে বোনা তাঁতের শাড়ি",category:"handicrafts",priceBDT:2200,originalPriceBDT:2600,discountPercent:15,unit:"1 piece",image:"/images/nakshi-kantha-artisan.jpg",artisanName:"Basak Weavers Guild",artisanDistrict:"Tangail",craftType:"Jacquard Handloom Cotton",description:"Soft, breathable pure cotton Tangail saree with hand-woven temple border and geometric pallu work.",rating:4.9,reviewsCount:78,flashDeal:!1,sellerCooperative:"Delduar Tant Silpo",originVillage:"Pathrail, Tangail",inStock:!0,deliveryDays:"3-4 Business Days"},{id:"prod-shital-pati-mat",name:"Sylhet Hand-Stripped Shital Pati Mat",bengaliName:"সিলেটের ঐতিহ্যবাহী শীতল পাটি (৬ × ৪ ফুট)",category:"handicrafts",priceBDT:2800,originalPriceBDT:3400,discountPercent:18,unit:"1 piece",image:"/images/beter-jhuri-bag.jpg",artisanName:"Manindra Debnath",artisanDistrict:"Sylhet",craftType:"Murta Cane Splitting",description:"Cooling natural Murta reed mat hand-woven over 3 weeks; renowned for providing soothing thermal relief in summer.",rating:4.9,reviewsCount:41,flashDeal:!1,sellerCooperative:"Bholaganj Shital Pati Samity",originVillage:"Companiganj, Sylhet",inStock:!0,deliveryDays:"3-4 Business Days"},{id:"prod-jute-floor-mat",name:"Hand-Braided Natural Jute Circular Rug",bengaliName:"হাতে বোনা প্রাকৃতিক গোল জুট রাগ (৩ ফুট)",category:"handicrafts",priceBDT:1250,originalPriceBDT:1550,discountPercent:19,unit:"1 piece (36 inch diameter)",image:"/images/jute-bamboo-women.jpg",artisanName:"Fatema Begum",artisanDistrict:"Faridpur",craftType:"Twisted Golden Jute Fiber",description:"Rustic circular bohemian area rug hand-braided with heavy ply unbleached golden jute fiber.",rating:4.8,reviewsCount:36,flashDeal:!1,sellerCooperative:"Faridpur Jute Crafters",originVillage:"Madukhali, Faridpur",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-dhamrai-brass-bell",name:"Dhamrai Hand-Cast Brass Puja & Dinner Bell",bengaliName:"ধামরাইয়ের হাতে ঢালাই করা পিতলের ঘণ্টা",category:"handicrafts",priceBDT:1150,originalPriceBDT:1400,discountPercent:18,unit:"1 piece",image:"/images/clay-pottery.jpg",artisanName:"Banu Kangsabanik",artisanDistrict:"Dhaka",craftType:"Lost-Wax Bell Metal Casting",description:"Solid bell-metal bronze casting producing clear, resonant harmonic chime, handcrafted in ancient Dhamrai.",rating:4.9,reviewsCount:29,flashDeal:!1,sellerCooperative:"Dhamrai Metal Heritage Guild",originVillage:"Shilpa Para, Dhamrai",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-coconut-shell-bowls",name:"Artisan Polished Coconut Shell Bowls",bengaliName:"নারিকেলের মালায় তৈরি ইকো বাটি (৪টির সেট)",category:"handicrafts",priceBDT:480,originalPriceBDT:600,discountPercent:20,unit:"Set of 4",image:"/images/clay-pottery.jpg",artisanName:"Bagerhat Eco Works",artisanDistrict:"Bagerhat",craftType:"Reclaimed Coconut Wood Polishing",description:"Eco-friendly, smooth coconut oil conditioned serving bowls upcycled from natural coastal coconut shells.",rating:4.7,reviewsCount:31,flashDeal:!1,sellerCooperative:"Sundarban Coastal Crafters",originVillage:"Morrelganj, Bagerhat",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-clay-water-pitcher",name:"Paturia Natural Terracotta Water Jug (কলসি)",bengaliName:"পানি ঠান্ডা রাখার মাটির সুরাহী ও কলসি",category:"handicrafts",priceBDT:520,originalPriceBDT:650,discountPercent:20,unit:"1 piece (3 Liters)",image:"/images/clay-pottery.jpg",artisanName:"Niranjan Pal",artisanDistrict:"Manikganj",craftType:"Natural Evaporative Terracotta",description:"Porous riverbed clay jug that naturally chills drinking water by 4-6 degrees Celsius without electricity.",rating:4.8,reviewsCount:54,flashDeal:!1,sellerCooperative:"Padma Clay Potters Guild",originVillage:"Shibaloy, Manikganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-nakshi-cushion-covers",name:"Handmade Nakshi Stitched Cushion Covers",bengaliName:"নকশী কাঁথা কাজের কুশন কভার (২টির সেট)",category:"handicrafts",priceBDT:720,originalPriceBDT:900,discountPercent:20,unit:"Set of 2 (16x16 inch)",image:"/images/nakshi-kantha-artisan.jpg",artisanName:"Rabeya Khatun",artisanDistrict:"Jashore",craftType:"Folk Running Stitch on Cotton",description:"Floral peacock and lotus running-stitch embroidered cushion covers with hidden zipper closure.",rating:4.9,reviewsCount:67,flashDeal:!0,sellerCooperative:"Banchte Shekha Crafts",originVillage:"Chanchra, Jashore",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-bamboo-tea-cups",name:"Handcrafted Bamboo Tea Cups & Saucers",bengaliName:"বাঁশের চায়ের কাপ ও পিরিচ (৪ জোড়া)",category:"handicrafts",priceBDT:590,originalPriceBDT:750,discountPercent:21,unit:"Set of 4 pairs",image:"/images/beter-jhuri-bag.jpg",artisanName:"Subhas Barua",artisanDistrict:"Rangamati",craftType:"Carved Hill Bamboo",description:"Heat-resistant, natural cured bamboo nodes carved into aesthetic tea cups with natural beeswax seal.",rating:4.8,reviewsCount:43,flashDeal:!1,sellerCooperative:"Chittagong Hill Crafts",originVillage:"Kaptai, Rangamati",inStock:!0,deliveryDays:"3-4 Business Days"},{id:"prod-palm-leaf-pakha",name:"Vintage Hand-Embroidered Talpatar Pakha",bengaliName:"তালপাতার নকশী হাতপাখা (২টির সেট)",category:"handicrafts",priceBDT:340,originalPriceBDT:420,discountPercent:19,unit:"Set of 2",image:"/images/jute-bamboo-women.jpg",artisanName:"Halima Begum",artisanDistrict:"Kishoreganj",craftType:"Palm Leaf & Cotton Thread Binding",description:"Traditional Bengali handfan made of sun-dried palm fronds bordered with vibrant yarn stitching.",rating:4.7,reviewsCount:28,flashDeal:!1,sellerCooperative:"Haor Rural Women Artisans",originVillage:"Nikli, Kishoreganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-jute-plant-hangers",name:"Macrame Handwoven Jute Plant Hangers",bengaliName:"হাতে বোনা ম্যাক্রামে জুট প্ল্যান্ট হ্যাঙ্গার",category:"handicrafts",priceBDT:450,originalPriceBDT:550,discountPercent:18,unit:"Pack of 2",image:"/images/jute-bamboo-women.jpg",artisanName:"Salma Akhter",artisanDistrict:"Narsingdi",craftType:"Jute Macrame Knotting",description:"Heavy duty jute cord knotted into aesthetic hanging planters for indoor botanical balconies.",rating:4.8,reviewsCount:39,flashDeal:!1,sellerCooperative:"Narsingdi Jute Guild",originVillage:"Monohardi, Narsingdi",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-terracotta-windchime",name:"Bogura Terracotta Village Birds Wind Chime",bengaliName:"মাটির তৈরি পাখি উইন্ড চাইম (টেরাকোটা)",category:"handicrafts",priceBDT:620,originalPriceBDT:750,discountPercent:17,unit:"1 piece",image:"/images/clay-pottery.jpg",artisanName:"Biren Pal",artisanDistrict:"Bogura",craftType:"Baked Clay Bells & Beads",description:"Hand-painted terracotta swallows and chimes that produce gentle rustic acoustics in the breeze.",rating:4.8,reviewsCount:33,flashDeal:!1,sellerCooperative:"Karatoya Terracotta Guild",originVillage:"Sherpur, Bogura",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-jamdani-stole",name:"Handloom Soft Cotton Jamdani Stole",bengaliName:"নারায়ণগঞ্জের আদি জামদানি সুতি ওড়না",category:"handicrafts",priceBDT:1850,originalPriceBDT:2300,discountPercent:20,unit:"1 piece",image:"/images/nakshi-kantha-artisan.jpg",artisanName:"Alkas Mia Weavers",artisanDistrict:"Narayanganj",craftType:"Supplementary Weft Jamdani",description:"Authentic Demra loom woven cotton stole featuring intricate butidar floral motifs.",rating:4.9,reviewsCount:51,flashDeal:!0,sellerCooperative:"Shitalakshya Tant Somiti",originVillage:"Tarabo, Narayanganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-brass-thali-set",name:"Kansa Traditional Bronze Dinner Plate Set",bengaliName:"ধামরাইয়ের ঐতিহ্যবাহী কাঁসার থালা ও বাটি",category:"handicrafts",priceBDT:4200,originalPriceBDT:5e3,discountPercent:16,unit:"Set (Plate, Bowl, Glass)",image:"/images/clay-pottery.jpg",artisanName:"Sukumar Banik",artisanDistrict:"Dhaka",craftType:"Hand-Hammered Kansa Alloy (78% Cu, 22% Sn)",description:"Ayurvedic health-benefiting bell-metal dining set hammer-beaten from molten copper and tin alloy.",rating:5,reviewsCount:46,flashDeal:!1,sellerCooperative:"Dhamrai Metal Heritage Guild",originVillage:"Shilpa Para, Dhamrai",inStock:!0,deliveryDays:"3-4 Business Days"},{id:"prod-bamboo-laundry-basket",name:"Large Standing Bamboo Cane Laundry Hamper",bengaliName:"বড় সাইজের বেত ও বাঁশের কাপড় রাখার ঝুড়ি",category:"handicrafts",priceBDT:1350,originalPriceBDT:1650,discountPercent:18,unit:"1 piece (Height 22 inch)",image:"/images/beter-jhuri-bag.jpg",artisanName:"Kalu Mia",artisanDistrict:"Chittagong",craftType:"Heavy Weave Wild Cane",description:"Breathable cylindrical storage basket with matching lid and organic cotton removable inner liner.",rating:4.8,reviewsCount:37,flashDeal:!1,sellerCooperative:"Karnafuli Cane Artisans",originVillage:"Fatikchhari, Chittagong",inStock:!0,deliveryDays:"3-4 Business Days"},{id:"prod-hand-painted-kula",name:"Decorative Rickshaw-Art Bamboo Winnowing Fan (কুলা)",bengaliName:"রিকশা আর্টে আঁকা ঐতিহ্যবাহী বিয়ের কুলা",category:"handicrafts",priceBDT:750,originalPriceBDT:950,discountPercent:21,unit:"1 piece",image:"/images/beter-jhuri-bag.jpg",artisanName:"Ratan Rickshaw Art",artisanDistrict:"Dhaka",craftType:"Enamel Painting on Bamboo Kula",description:"Eye-popping traditional Bengali rickshaw floral and bird motifs hand-painted over cured bamboo winnower.",rating:4.9,reviewsCount:59,flashDeal:!1,sellerCooperative:"Old Dhaka Heritage Crafters",originVillage:"Lalbagh, Dhaka",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-pure-cow-ghee",name:"Village Churn Pure Deshi Cow Ghee",bengaliName:"ঘোল থেকে বিলোনো খাঁটি গাওয়া ঘি (বগুড়া)",category:"dairy",priceBDT:950,originalPriceBDT:1200,discountPercent:21,unit:"500 gm jar",image:"/images/pure-cow-ghee.jpg",artisanName:"Shonali Organic Farm",artisanDistrict:"Bogura",craftType:"Traditional Bilona Butter Churning",description:"Golden, granular aromatic ghee made from grass-fed indigenous cow milk curd churned by hand.",rating:5,reviewsCount:164,flashDeal:!0,sellerCooperative:"Bogura Dairy Farmers Cooperative",originVillage:"Sherpur, Bogura",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-bogura-mishti-doi",name:"Traditional Bogura Clay-Pot Mishti Doi",bengaliName:"বগুড়ার স্পেশাল মাটির হাঁড়ির খাঁটি মিষ্টি দই",category:"dairy",priceBDT:340,originalPriceBDT:400,discountPercent:15,unit:"1 kg clay sora",image:"/images/bogura-dairy-farm.jpg",artisanName:"Gour Gopal Ghosh",artisanDistrict:"Bogura",craftType:"Slow-Smoked Clay Sora Fermentation",description:"Iconic thick caramelized sweet curd set in porous unglazed clay sora that wicks away whey for dense creamy texture.",rating:4.9,reviewsCount:195,flashDeal:!0,sellerCooperative:"Sherpur Doi Kalyan Samity",originVillage:"Sherpur, Bogura",inStock:!0,deliveryDays:"1 Business Day (Chilled Delivery)"},{id:"prod-roshogolla-sweets",name:"Roshogolla Traditional Artisan Sweets",bengaliName:"ঐতিহ্যবাহী খাঁটি ছানার নরম রসগোল্লা (১ কেজি)",category:"dairy",priceBDT:420,originalPriceBDT:500,discountPercent:16,unit:"1 kg container",image:"/images/bogura-dairy-farm.jpg",artisanName:"Porabari Sweet Masters",artisanDistrict:"Tangail",craftType:"Fresh Cow Milk Chhana Poaching",description:"Spongy melt-in-mouth cottage cheese balls simmered in light fragrant cardamom syrup.",rating:4.9,reviewsCount:122,flashDeal:!1,sellerCooperative:"Porabari Halwai Guild",originVillage:"Porabari, Tangail",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-fresh-cow-milk",name:"Pabna Pasture-Fed Fresh Raw Cow Milk",bengaliName:"পাবনার খামারের খাঁটি কাঁচা দুধ (২ লিটার)",category:"dairy",priceBDT:190,originalPriceBDT:220,discountPercent:14,unit:"2 Liters chilled bottle",image:"/images/bogura-dairy-farm.jpg",artisanName:"Bhangura Dairy Union",artisanDistrict:"Pabna",craftType:"Hygienic Milking & Chill Chain",description:"100% unadulterated whole milk from pasture-fed deshi cows, collected and cold-chained within 2 hours.",rating:4.8,reviewsCount:94,flashDeal:!1,sellerCooperative:"Bhangura Milk Producers",originVillage:"Bhangura, Pabna",inStock:!0,deliveryDays:"Same Day / Next Morning"},{id:"prod-smoked-paneer",name:"Ashtagram Heritage Smoked Paneer (পনির)",bengaliName:"কিশোরগঞ্জের অষ্টগ্রামের আদি খাঁটি পনির",category:"dairy",priceBDT:850,originalPriceBDT:1e3,discountPercent:15,unit:"500 gm block",image:"/images/pure-cow-ghee.jpg",artisanName:"Haor Paneer Crafters",artisanDistrict:"Kishoreganj",craftType:"Natural Fermentation in Bamboo Molds",description:"Centuries-old artisanal semi-hard cheese cured in salted brine and bamboo baskets; savory, tangy umami flavor.",rating:5,reviewsCount:88,flashDeal:!0,sellerCooperative:"Ashtagram Paneer Society",originVillage:"Ashtagram, Kishoreganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-organic-butter",name:"Sirajganj Hand-Churned White Table Butter (মাখন)",bengaliName:"সিরাজগঞ্জের মাঠা বিলোনো খাঁটি সাদা মাখন",category:"dairy",priceBDT:480,originalPriceBDT:560,discountPercent:14,unit:"400 gm pack",image:"/images/pure-cow-ghee.jpg",artisanName:"Shahjadpur Dairy Cooperative",artisanDistrict:"Sirajganj",craftType:"Cultured Cream Churning",description:"Unsalted, pure white village butter freshly churned from fermented cream, perfect for warm rice and parathas.",rating:4.8,reviewsCount:63,flashDeal:!1,sellerCooperative:"Shahjadpur Dudh Shilpa",originVillage:"Shahjadpur, Sirajganj",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-roshomalai-comilla",name:"Authentic Cumilla Matri Bhander Roshomalai",bengaliName:"কুমিল্লার বিখ্যাত খাঁটি রসমালাই (১ কেজি)",category:"dairy",priceBDT:650,originalPriceBDT:750,discountPercent:13,unit:"1 kg tub",image:"/images/bogura-dairy-farm.jpg",artisanName:"Manoharpur Sweets",artisanDistrict:"Cumilla",craftType:"Thick Malai & Chhana Drops",description:"Tiny soft cottage cheese dumplings soaked in slow-condensed cardamom-scented saffron cream milk.",rating:5,reviewsCount:184,flashDeal:!0,sellerCooperative:"Cumilla Halwai Union",originVillage:"Manoharpur, Cumilla",inStock:!0,deliveryDays:"1 Business Day (Express Chilled)"},{id:"prod-tok-doi-natural",name:"Probiotic Natural Tok Doi (টক দই)",bengaliName:"শরীরের জন্য উপকারী খাঁটি টক দই (১ কেজি)",category:"dairy",priceBDT:160,originalPriceBDT:190,discountPercent:16,unit:"1 kg clay container",image:"/images/bogura-dairy-farm.jpg",artisanName:"Dhaka Dairy Collective",artisanDistrict:"Gazipur",craftType:"Live Culture Clay Setting",description:"Unsweetened gut-friendly natural yogurt fermented in earthenware, rich in active Lactobacillus cultures.",rating:4.7,reviewsCount:71,flashDeal:!1,sellerCooperative:"Gazipur Organic Dairy",originVillage:"Kapasia, Gazipur",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-fresh-chhana",name:"Fresh Cow Milk Soft Chhana (ছানা)",bengaliName:"মিষ্টি তৈরির খাঁটি নরম ছানা (১ কেজি)",category:"dairy",priceBDT:380,originalPriceBDT:450,discountPercent:16,unit:"1 kg pack",image:"/images/pure-cow-ghee.jpg",artisanName:"Karatoya Dairy Union",artisanDistrict:"Sirajganj",craftType:"Whey-Curdled Fresh Chhana",description:"Moist, mild, and non-acidic cottage curd prepared daily for home-made sandesh, roshogolla, and healthy diet.",rating:4.8,reviewsCount:42,flashDeal:!1,sellerCooperative:"Ullapara Dudh Samity",originVillage:"Ullapara, Sirajganj",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-khoya-kheer",name:"Pure Mawa / Khoya Kheer Block",bengaliName:"খাঁটি ঘন ক্ষীর ও মাওয়া (৫০০ গ্রাম)",category:"dairy",priceBDT:460,originalPriceBDT:540,discountPercent:15,unit:"500 gm block",image:"/images/bogura-dairy-farm.jpg",artisanName:"Bikrampur Dairy Artisans",artisanDistrict:"Munshiganj",craftType:"Simmered Milk Solids Reduction",description:"Rich condensed milk solids slow-stirred over gentle coal hearth; perfect base for traditional Bengali pithas.",rating:4.9,reviewsCount:57,flashDeal:!1,sellerCooperative:"Bikrampur Kheer Samity",originVillage:"Srinagar, Munshiganj",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-chomchom-porabari",name:"Tangail Porabari Traditional Chomchom",bengaliName:"টাঙ্গাইলের পোড়াবাড়ীর খাঁটি চমচম (১ কেজি)",category:"dairy",priceBDT:490,originalPriceBDT:580,discountPercent:16,unit:"1 kg box",image:"/images/bogura-dairy-farm.jpg",artisanName:"Porabari Heritage Halwai",artisanDistrict:"Tangail",craftType:"Deep Caramelized Chhana Confection",description:"Deep golden exterior with dense caramelized grain core sprinkled with fresh powdered mawa.",rating:4.9,reviewsCount:112,flashDeal:!1,sellerCooperative:"Porabari Chomchom Association",originVillage:"Porabari, Tangail",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-mattha-ghol",name:"Pabna Spiced Village Mattha / Ghol (মাঠা)",bengaliName:"পাবনার সুস্বাদু খাঁটি ছানার ঘোল ও মাঠা (২ লিটার)",category:"dairy",priceBDT:180,originalPriceBDT:220,discountPercent:18,unit:"2 Liters chilled bottle",image:"/images/bogura-dairy-farm.jpg",artisanName:"Bhangura Mattha Ghar",artisanDistrict:"Pabna",craftType:"Lightly Salted Spiced Buttermilk",description:"Refreshing traditional digestive beverage made from churned yogurt flavored with rock salt and roasted cumin.",rating:4.8,reviewsCount:79,flashDeal:!1,sellerCooperative:"Bhangura Dairy Artisans",originVillage:"Bhangura, Pabna",inStock:!0,deliveryDays:"Same Day Chilled"},{id:"prod-buffalo-curd-bhola",name:"Bhola Island Pure Buffalo Milk Curd (মহিষের দই)",bengaliName:"ভোলার চরাঞ্চলের খাঁটি মহিষের দুধের দই (১.৫ কেজি)",category:"dairy",priceBDT:420,originalPriceBDT:500,discountPercent:16,unit:"1.5 kg clay dish (Tali)",image:"/images/bogura-dairy-farm.jpg",artisanName:"Charfasson Buffalo Ranchers",artisanDistrict:"Bhola",craftType:"Wild Pasture Buffalo Curd",description:"Thick, creamy, naturally rich curd prepared in large earthen tali from coastal island grazing water buffaloes.",rating:5,reviewsCount:93,flashDeal:!0,sellerCooperative:"Bhola Char Livestock Union",originVillage:"Charfasson, Bhola",inStock:!0,deliveryDays:"2 Business Days"},{id:"prod-sandesh-kachagolla",name:"Natore Traditional Special Kachagolla",bengaliName:"নাটোরের বিখ্যাত আসল কাঁচাগোল্লা (১ কেজি)",category:"dairy",priceBDT:550,originalPriceBDT:650,discountPercent:15,unit:"1 kg box",image:"/images/bogura-dairy-farm.jpg",artisanName:"Natore Rajbari Sweets",artisanDistrict:"Natore",craftType:"Lightly Tossed Sweetened Chhana",description:"Unpressed, gently warmed fresh cottage curd in mild sugar syrup, famous for its juicy granular mouthfeel.",rating:5,reviewsCount:147,flashDeal:!1,sellerCooperative:"Natore Halwai Samity",originVillage:"Natore Sadar, Natore",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-river-rui",name:"River Rui Fish - Fresh Padma Catch",bengaliName:"পদ্মা নদীর তাজা রুই মাছ (৩-৪ কেজি সাইজ)",category:"fisheries",priceBDT:680,originalPriceBDT:850,discountPercent:20,unit:"1 kg portion",image:"/images/freshwater-fish-culture.jpg",artisanName:"Padma Fishermen Cooperative",artisanDistrict:"Rajbari",craftType:"River Net Fishing",description:"Naturally wild caught freshwater Rui fish from rapid currents of the Padma river; sweet meat and rich natural oils.",rating:4.9,reviewsCount:96,flashDeal:!0,sellerCooperative:"Daulatdia Fishermen Union",originVillage:"Goalondo, Rajbari",inStock:!0,deliveryDays:"1 Business Day (Iced Delivery)"},{id:"prod-chandpur-ilish",name:"Chandpur Padma Silver Hilsa / Ilish",bengaliName:"চাঁদপুরের রুপালি ইলিশ (১.২ কেজি সাইজ)",category:"fisheries",priceBDT:1850,originalPriceBDT:2300,discountPercent:20,unit:"1 fish (1.2 kg)",image:"/images/freshwater-fish-culture.jpg",artisanName:"Meghna Estuary Fishermen",artisanDistrict:"Chandpur",craftType:"Estuary Drift Net",description:"The monarch of Bengal fishes; authentic Chandpur three-river confluence catch loaded with omega-rich melt-in-mouth fats.",rating:5,reviewsCount:189,flashDeal:!0,sellerCooperative:"Chandpur Ghat Fishermen Union",originVillage:"Boro Station Ghat, Chandpur",inStock:!0,deliveryDays:"Next Morning (Chilled Insulated Box)"},{id:"prod-rupchanda-pomfret",name:"Rupchanda Silver Pomfret (রূপচাঁদা)",bengaliName:"কক্সবাজারের তাজা রূপচাঁদা মাছ (১ কেজি)",category:"fisheries",priceBDT:1100,originalPriceBDT:1350,discountPercent:19,unit:"1 kg pack (3-4 pcs)",image:"/images/freshwater-fish-culture.jpg",artisanName:"Bay of Bengal Artisanal Fishers",artisanDistrict:"Cox's Bazar",craftType:"Coastal Trawler Catch",description:"Deep sea silver pomfret with tender boneless fillets, highly prized for crispy pan-fry and butter masala.",rating:4.9,reviewsCount:73,flashDeal:!1,sellerCooperative:"Cox's Bazar Fishery Guild",originVillage:"Teknaf, Cox's Bazar",inStock:!0,deliveryDays:"1-2 Business Days (Iced)"},{id:"prod-golda-chingri",name:"Khulna Freshwater Giant Golda Chingri",bengaliName:"খুলনার তাজা গলদা চিংড়ি (বড় সাইজ)",category:"fisheries",priceBDT:1250,originalPriceBDT:1550,discountPercent:19,unit:"1 kg (8-10 pcs)",image:"/images/freshwater-fish-culture.jpg",artisanName:"Rupsha Gher Farmers",artisanDistrict:"Khulna",craftType:"Natural Saline-Freshwater Gher",description:"Jumbo river prawns with head-shell marrow (ghilu), perfect for celebratory Malaikari and mustard roast.",rating:5,reviewsCount:138,flashDeal:!0,sellerCooperative:"Rupsha Shrimp Growers Union",originVillage:"Batiaghata, Khulna",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-bagda-shrimp",name:"Satkhira Coastal Black Tiger Bagda Shrimp",bengaliName:"সাতক্ষীরার বাগদা চিংড়ি (মাঝারি সাইজ)",category:"fisheries",priceBDT:880,originalPriceBDT:1050,discountPercent:16,unit:"1 kg (20-25 pcs)",image:"/images/freshwater-fish-culture.jpg",artisanName:"Sundarban Coastal Aquaculture",artisanDistrict:"Satkhira",craftType:"Mangrove Gher Farming",description:"Crisp, sweet brackish-water black tiger shrimp harvested sustainably without chemical antibiotics.",rating:4.8,reviewsCount:82,flashDeal:!1,sellerCooperative:"Satkhira Coastal Fisheries",originVillage:"Kaliganj, Satkhira",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-haor-boal",name:"Tanguar Haor Wild Fresh Boal Fish",bengaliName:"টাঙ্গুয়ার হাওরের তাজা বোয়াল মাছ",category:"fisheries",priceBDT:820,originalPriceBDT:980,discountPercent:16,unit:"1 kg portion",image:"/images/freshwater-fish-culture.jpg",artisanName:"Tanguar Wetland Fishermen",artisanDistrict:"Sunamganj",craftType:"Wetland Haor Netting",description:"Predatory wild river catfish from the crystal wetland waters of Tanguar Haor; firm and flavorful white meat.",rating:4.8,reviewsCount:61,flashDeal:!1,sellerCooperative:"Sunamganj Haor Fishermen Guild",originVillage:"Tahirpur, Sunamganj",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-fresh-katla",name:"Freshwater Bighead Katla Fish",bengaliName:"নদীর তাজা কাতল মাছ (৪ কেজি+ সাইজ)",category:"fisheries",priceBDT:620,originalPriceBDT:740,discountPercent:16,unit:"1 kg portion",image:"/images/freshwater-fish-culture.jpg",artisanName:"Brahmaputra Fishermen Collective",artisanDistrict:"Kurigram",craftType:"River Net Catch",description:"Large freshwater carp with rich fatty belly cut (peti), great for Bengali mustard gravy and kalia.",rating:4.8,reviewsCount:54,flashDeal:!1,sellerCooperative:"Chilmari Fishermen Union",originVillage:"Chilmari, Kurigram",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-pabda-fish",name:"Deshi Sweetwater Pabda Fish",bengaliName:"দেশি টাটকা পাবদা মাছ (মাঝারি সাইজ)",category:"fisheries",priceBDT:690,originalPriceBDT:820,discountPercent:16,unit:"1 kg (12-15 pcs)",image:"/images/freshwater-fish-culture.jpg",artisanName:"Atrai River Fishers",artisanDistrict:"Naogaon",craftType:"Freshwater Netting",description:"Soft, single-bone butterfish that absorbs mustard and tomato shorshe jhol exquisitely.",rating:4.9,reviewsCount:88,flashDeal:!0,sellerCooperative:"Atrai Fisheries Union",originVillage:"Atrai, Naogaon",inStock:!0,deliveryDays:"1 Business Day"},{id:"prod-loitta-dry-shutki",name:"Cox's Bazar Organic Sun-Dried Loitta Shutki",bengaliName:"কক্সবাজারের বিষমুক্ত লইট্যা শুঁটকি",category:"fisheries",priceBDT:720,originalPriceBDT:890,discountPercent:19,unit:"500 gm pack",image:"/images/freshwater-fish-culture.jpg",artisanName:"Naziratek Shutki Mohol",artisanDistrict:"Cox's Bazar",craftType:"Pesticide-Free Solar Drying",description:"Sun-cured on high wooden racks without synthetic insecticides, bursting with deep coastal savory aroma.",rating:4.8,reviewsCount:104,flashDeal:!1,sellerCooperative:"Naziratek Shutki Guild",originVillage:"Naziratek, Cox's Bazar",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-chapa-shutki",name:"Mymensingh Traditional Fermented Chapa Shutki",bengaliName:"ময়মনসিংহের ঐতিহ্যবাহী চ্যাপা শুঁটকি",category:"fisheries",priceBDT:450,originalPriceBDT:550,discountPercent:18,unit:"250 gm pack",image:"/images/freshwater-fish-culture.jpg",artisanName:"Brahmaputra Fish Processors",artisanDistrict:"Mymensingh",craftType:"Semi-Fermented Puti in Earthen Mutka",description:"Authentic clay pot aged Puti fish fermented with mustard oil; supreme ingredient for spicy Bengali shutki bhorta.",rating:4.9,reviewsCount:77,flashDeal:!1,sellerCooperative:"Trishal Agro Artisans",originVillage:"Muktagacha, Mymensingh",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-shing-fish",name:"Live Wetland Deshi Shing Fish (শিং মাছ)",bengaliName:"হাওরের জ্যান্ত দেশি শিং মাছ (১ কেজি)",category:"fisheries",priceBDT:780,originalPriceBDT:920,discountPercent:15,unit:"1 kg live weight",image:"/images/freshwater-fish-culture.jpg",artisanName:"Hakaluki Haor Guild",artisanDistrict:"Moulvibazar",craftType:"Natural Wetland Trap",description:"Nutrient-packed freshwater stinging catfish celebrated for building hemoglobin and convalescent nourishment.",rating:4.9,reviewsCount:65,flashDeal:!1,sellerCooperative:"Kulaura Fishermen Union",originVillage:"Kulaura, Moulvibazar",inStock:!0,deliveryDays:"1 Business Day (Oxygenated Water Box)"},{id:"prod-freshwater-magur",name:"Live Indigenous Deshi Magur Fish",bengaliName:"বিল ও খামারের জ্যান্ত দেশি মাগুর মাছ",category:"fisheries",priceBDT:850,originalPriceBDT:1e3,discountPercent:15,unit:"1 kg live weight",image:"/images/freshwater-fish-culture.jpg",artisanName:"Beel Dakatia Fishers",artisanDistrict:"Khulna",craftType:"Indigenous Wetland Traps",description:"Hardy walking catfish with high protein content, ideal for light digestive broths and recovering patients.",rating:4.8,reviewsCount:58,flashDeal:!1,sellerCooperative:"Dumuria Fisheries Union",originVillage:"Dumuria, Khulna",inStock:!0,deliveryDays:"1 Business Day (Live Delivered)"},{id:"prod-fresh-bhetki",name:"Coastal River Asian Sea Bass / Bhetki",bengaliName:"সুন্দরবনের মোহনার তাজা ভেটকি মাছ (১ কেজি)",category:"fisheries",priceBDT:980,originalPriceBDT:1200,discountPercent:18,unit:"1 kg portion",image:"/images/freshwater-fish-culture.jpg",artisanName:"Sundarban Estuary Guild",artisanDistrict:"Satkhira",craftType:"Estuary Fishing",description:"Thick boneless sweet white meat fish famous for Calcutta-style fish fry and fragrant paturi steamed in banana leaves.",rating:4.9,reviewsCount:92,flashDeal:!1,sellerCooperative:"Munshiganj Satkhira Union",originVillage:"Debhata, Satkhira",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-deshi-koi-fish",name:"Live Deshi Climbing Perch (কৈ মাছ)",bengaliName:"বিল ও হাওরের জ্যান্ত দেশি কৈ মাছ",category:"fisheries",priceBDT:650,originalPriceBDT:780,discountPercent:17,unit:"1 kg (8-10 pcs)",image:"/images/freshwater-fish-culture.jpg",artisanName:"Chalanbeel Fishermen",artisanDistrict:"Natore",craftType:"Natural Freshwater Catch",description:"Wild climbing perch with tender sweet flesh, traditional pairing with cumin and fresh green chillies.",rating:4.7,reviewsCount:46,flashDeal:!1,sellerCooperative:"Singra Fisheries Guild",originVillage:"Singra, Natore",inStock:!0,deliveryDays:"1 Business Day"},{id:"prod-radhuni-mustard-oil",name:"Radhuni Pure Cold-Pressed Mustard Oil",bengaliName:"ঘানির খাঁটি ঝাঁঝালো সরিষার তেল (১ লিটার)",category:"spices",priceBDT:290,originalPriceBDT:350,discountPercent:17,unit:"1 Liter bottle",image:"/images/mustard-honey-farming.jpg",artisanName:"Varendra Oil Mills",artisanDistrict:"Rajshahi",craftType:"Wooden Ghani Cold-Extraction",description:"100% natural, intensely pungent cold-pressed yellow and brown mustard oil; heart of authentic Bengali cooking and pickles.",rating:5,reviewsCount:165,flashDeal:!0,sellerCooperative:"Godagari Ghani Samity",originVillage:"Godagari, Rajshahi",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-red-chilli-flakes",name:"Red Chilli Sun-Dried Flakes",bengaliName:"পাবনার তীব্র ঝাল খাঁটি শুকনা মরিচ গুঁড়া",category:"spices",priceBDT:180,originalPriceBDT:220,discountPercent:18,unit:"500 gm pack",image:"/images/red-chilli-farming.jpg",artisanName:"Sujanagar Chilli Farmers",artisanDistrict:"Pabna",craftType:"River Sand Sun Drying & Mill Grinding",description:"Vibrant crimson chillies slow-dried on riverbanks and stone ground with no artificial coloring or brick dust.",rating:4.9,reviewsCount:118,flashDeal:!0,sellerCooperative:"Sujanagar Spice Union",originVillage:"Sujanagar, Pabna",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-radhuni-cumin-seeds",name:"Radhuni Cumin Whole Seeds (খাঁটি গোটা জিরা)",bengaliName:"সুগন্ধি বাছাইকৃত খাঁটি গোটা জিরা (২৫০ গ্রাম)",category:"spices",priceBDT:280,originalPriceBDT:340,discountPercent:18,unit:"250 gm pack",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Bogra Spice Traders",artisanDistrict:"Bogura",craftType:"Hand-Cleaned Sun-Cured Seeds",description:"Carefully sifted whole cumin seeds rich in natural essential oils and deep earthy aroma when roasted.",rating:4.8,reviewsCount:62,flashDeal:!1,sellerCooperative:"Mahasthangarh Spice Guild",originVillage:"Shibganj, Bogura",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-pabna-dry-chillies-whole",name:"Pabna Sun-Dried Stemless Red Chillies",bengaliName:"পাবনার বোঁটাহীন আস্ত শুকনা মরিচ (১ কেজি)",category:"spices",priceBDT:360,originalPriceBDT:440,discountPercent:18,unit:"1 kg bag",image:"/images/red-chilli-farming.jpg",artisanName:"Sujanagar Chilli Cooperative",artisanDistrict:"Pabna",craftType:"Solar Cured Indigenous Chillies",description:"Fiery, whole stemless chillies that blister delightfully in mustard oil tadka for dal and bhortas.",rating:4.9,reviewsCount:89,flashDeal:!1,sellerCooperative:"Pabna Red Spice Union",originVillage:"Sujanagar, Pabna",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-hill-turmeric-powder",name:"Khagrachhari Hill Tracts Organic Turmeric Powder",bengaliName:"খাগড়াছড়ির পাহাড়ি খাঁটি হলুদ গুঁড়া (৫০০ গ্রাম)",category:"spices",priceBDT:190,originalPriceBDT:240,discountPercent:21,unit:"500 gm pack",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Marma Farmers Collective",artisanDistrict:"Khagrachhari",craftType:"Jhum Mountain Farming",description:"Golden-orange high-curcumin turmeric grown on virgin hill slopes without synthetic agrochemicals.",rating:4.9,reviewsCount:95,flashDeal:!0,sellerCooperative:"Chittagong Hill Organic Network",originVillage:"Dighinala, Khagrachhari",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-organic-ginger-root",name:"Bandarban Highland Organic Fresh Ginger",bengaliName:"বান্দরবানের পাহাড়ি রসালো তাজা আদা (১ কেজি)",category:"spices",priceBDT:180,originalPriceBDT:220,discountPercent:18,unit:"1 kg",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Bawm Agro Cooperative",artisanDistrict:"Bandarban",craftType:"Mountain Terrace Cultivation",description:"Juicy, fiber-light ginger rhizomes packed with spicy zing and therapeutic anti-inflammatory gingerol.",rating:4.8,reviewsCount:71,flashDeal:!1,sellerCooperative:"Bandarban Indigenous Farmers",originVillage:"Ruma, Bandarban",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-natore-white-garlic",name:"Natore Deshi Organic White Garlic (রসুন)",bengaliName:"নাটোরের চলনবিলের দেশি খাঁটি রসুন (১ কেজি)",category:"spices",priceBDT:210,originalPriceBDT:260,discountPercent:19,unit:"1 kg net bag",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Gurudaspur Garlic Growers",artisanDistrict:"Natore",craftType:"No-Till Silt Mulch Agriculture",description:"Small compact cloves with intensely pungent alicin aroma that enhances curries and boosts cardiovascular health.",rating:4.8,reviewsCount:83,flashDeal:!1,sellerCooperative:"Chalanbeel Spice Growers",originVillage:"Gurudaspur, Natore",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-sylhet-bay-leaves",name:"Sylhet Jaintia Wild Tejpata / Bay Leaves",bengaliName:"সিলেটের সুবাসিত পাহাড়ি তেজপাতা (২৫০ গ্রাম)",category:"spices",priceBDT:95,originalPriceBDT:120,discountPercent:21,unit:"250 gm pack",image:"/images/highland-tea.jpg",artisanName:"Jaintiapur Forest Foragers",artisanDistrict:"Sylhet",craftType:"Wild Hill Canopy Harvest",description:"Intensely fragrant whole green bay leaves harvested from wild cinnamon trees in Jaintia hills.",rating:4.9,reviewsCount:64,flashDeal:!1,sellerCooperative:"Jaintia Herb Gatherers",originVillage:"Jaintiapur, Sylhet",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-panch-phoron-blend",name:"Traditional Bengali Panch Phoron 5-Spice Mix",bengaliName:"ঐতিহ্যবাহী পাঁচফোড়ন মসলা ব্লেন্ড (২৫০ গ্রাম)",category:"spices",priceBDT:130,originalPriceBDT:160,discountPercent:19,unit:"250 gm jar",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Bikrampur Spice Blend",artisanDistrict:"Munshiganj",craftType:"Heirloom 5-Seed Balanced Ratio",description:"Harmonious blend of fenugreek, nigella, cumin, black mustard, and fennel seeds for traditional temperings.",rating:4.9,reviewsCount:52,flashDeal:!1,sellerCooperative:"Bikrampur Masala Samity",originVillage:"Lohajang, Munshiganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-black-cumin-kalojira",name:"Panchagarh Natural Black Cumin (কালোজিরা)",bengaliName:"পঞ্চগড়ের খাঁটি ঔষধি কালোজিরা (২৫০ গ্রাম)",category:"spices",priceBDT:160,originalPriceBDT:200,discountPercent:20,unit:"250 gm pack",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Boda Agro Cooperative",artisanDistrict:"Panchagarh",craftType:"Cold Air Winnowed Nigella Sativa",description:"Renowned medicinal seed loaded with thymoquinone; wonderful for daily wellness, tea, and warm rice bhorta.",rating:5,reviewsCount:108,flashDeal:!1,sellerCooperative:"Panchagarh Herbal Society",originVillage:"Boda, Panchagarh",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-coriander-powder",name:"Stone-Ground Fragrant Coriander Powder (ধনিয়া)",bengaliName:"পাথরে ভাঙানো খাঁটি ধনিয়া গুঁড়া (৫০০ গ্রাম)",category:"spices",priceBDT:140,originalPriceBDT:175,discountPercent:20,unit:"500 gm pack",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Faridpur Spice Millers",artisanDistrict:"Faridpur",craftType:"Slow Stone Grinding",description:"Lightly roasted indigenous coriander seeds stone-ground to preserve volatile citrusy aroma oils.",rating:4.8,reviewsCount:47,flashDeal:!1,sellerCooperative:"Faridpur Agro Millers",originVillage:"Bhanga, Faridpur",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-green-cardamom",name:"Premium Bold Green Cardamom (সবুজ এলাচ)",bengaliName:"বড় দানার সুগন্ধি সবুজ এলাচি (১০০ গ্রাম)",category:"spices",priceBDT:380,originalPriceBDT:460,discountPercent:17,unit:"100 gm pack",image:"/images/highland-tea.jpg",artisanName:"Khatunganj Spice Guild",artisanDistrict:"Chattogram",craftType:"Hand-Sorted 8mm Pods",description:"Plump, aromatic whole cardamom pods with high essential oil resin content for polao and royal curries.",rating:4.9,reviewsCount:73,flashDeal:!1,sellerCooperative:"Chattogram Spice Importers & Merchants",originVillage:"Kotwali, Chattogram",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-cinnamon-bark",name:"True Ceylon Cinnamon Quills (দারুচিনি)",bengaliName:"খাঁটি মিষ্টি সুগন্ধি দারুচিনি (২০০ গ্রাম)",category:"spices",priceBDT:240,originalPriceBDT:300,discountPercent:20,unit:"200 gm pack",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Chittagong Heritage Spices",artisanDistrict:"Chattogram",craftType:"Hand-Rolled Bark Quills",description:"Delicate multi-layered thin bark quills with sweet woody fragrance, low coumarin content.",rating:4.8,reviewsCount:51,flashDeal:!1,sellerCooperative:"Chittagong Port Spice Union",originVillage:"Pahartali, Chattogram",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-whole-cloves",name:"Handpicked Whole Fragrant Cloves (লবঙ্গ)",bengaliName:"তৈলাক্ত খাঁটি গোটা লবঙ্গ (১০০ গ্রাম)",category:"spices",priceBDT:220,originalPriceBDT:270,discountPercent:19,unit:"100 gm pack",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Sylhet Exotic Spices",artisanDistrict:"Sylhet",craftType:"Sun-Dried Flower Buds",description:"Large headed, oil-rich cloves that release intense warm aroma when crushed or tempered.",rating:4.8,reviewsCount:44,flashDeal:!1,sellerCooperative:"Surma Spice Network",originVillage:"Beanibazar, Sylhet",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-rajshahi-himsagar",name:"Rajshahi Himsagar Sweet Mango",bengaliName:"রাজশাহীর বিখ্যাত ফরমালিনমুক্ত হিমসাগর আম (১০ কেজি)",category:"fruits",priceBDT:1350,originalPriceBDT:1650,discountPercent:18,unit:"10 kg eco-crate",image:"/images/rajshahi-mango-harvest.jpg",artisanName:"Varendra Orchard Farmers",artisanDistrict:"Rajshahi",craftType:"Paper-Bagged Organic Harvest",description:"The crowning jewel of Bengal mangoes; fiberless, intensely aromatic, tree-ripened naturally without carbide.",rating:5,reviewsCount:192,flashDeal:!0,sellerCooperative:"Rajshahi Mango Growers Association",originVillage:"Bagha, Rajshahi",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-ripe-papaya",name:"Ripe Organic Papaya - Natore",bengaliName:"নাটোরের গাছপাকা মিষ্টি অর্গানিক পেঁপে",category:"fruits",priceBDT:120,originalPriceBDT:150,discountPercent:20,unit:"1 piece (~1.5 kg)",image:"/images/rajshahi-mango-harvest.jpg",artisanName:"Baraigram Fruit Guild",artisanDistrict:"Natore",craftType:"Tree-Ripened Organic Fruit",description:"Deep salmon-colored flesh bursting with natural sweetness and digestive papain enzyme, harvested ripe from tree.",rating:4.8,reviewsCount:63,flashDeal:!1,sellerCooperative:"Natore Horticultural Union",originVillage:"Baraigram, Natore",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-rangpur-haribhanga",name:"Rangpur Haribhanga Juicy Mango",bengaliName:"রংপুরের ঐতিহ্যবাহী সুস্বাদু হাঁড়িভাঙা আম (১০ কেজি)",category:"fruits",priceBDT:1250,originalPriceBDT:1500,discountPercent:17,unit:"10 kg crate",image:"/images/rajshahi-mango-harvest.jpg",artisanName:"Mithapukur Mango Producers",artisanDistrict:"Rangpur",craftType:"Indigenous Variety Orchard",description:"Distinctive round-bottomed succulent mango famed for thick pulp, small flat seed, and fiberless nectar juice.",rating:4.9,reviewsCount:141,flashDeal:!0,sellerCooperative:"Haribhanga Kalyan Samity",originVillage:"Padmarag, Mithapukur, Rangpur",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-fazli-mango",name:"Chapainawabganj Giant Fazli Mango",bengaliName:"চাঁপাইনবাবগঞ্জের বিশাল ফজলি আম (১০ কেজি)",category:"fruits",priceBDT:1100,originalPriceBDT:1350,discountPercent:19,unit:"10 kg crate (8-10 pcs)",image:"/images/rajshahi-mango-harvest.jpg",artisanName:"Shibganj Mango Syndicate",artisanDistrict:"Chapainawabganj",craftType:"Late Summer Harvest",description:"Enormous aromatic mango with luscious firm flesh, harvested late in summer from century-old heritage groves.",rating:4.8,reviewsCount:88,flashDeal:!1,sellerCooperative:"Shibganj Orchard Guild",originVillage:"Kansat, Chapainawabganj",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-amrapali-mango",name:"Naturally Tree-Ripened Amrapali Mango",bengaliName:"গাছপাকা ফরমালিনমুক্ত আম্রপালি আম (১০ কেজি)",category:"fruits",priceBDT:1200,originalPriceBDT:1450,discountPercent:17,unit:"10 kg crate",image:"/images/rajshahi-mango-harvest.jpg",artisanName:"Md. Enamul Haque",artisanDistrict:"Rajshahi",craftType:"Chemical-Free Orchard Harvest",description:"Deep orange honey-sweet flesh with incredible brix sugar count, packed in ventilated cushioned eco-boxes.",rating:5,reviewsCount:114,flashDeal:!1,sellerCooperative:"Varendra Green Farms",originVillage:"Paba, Rajshahi",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-dinajpur-lychee",name:"Dinajpur Bedana Sweet Lychee",bengaliName:"দিনাজপুরের স্পেশাল বেদানা লিচু (১০০ পিস)",category:"fruits",priceBDT:950,originalPriceBDT:1200,discountPercent:21,unit:"100 pcs bundle",image:"/images/rajshahi-mango-harvest.jpg",artisanName:"Mashimpur Lychee Growers",artisanDistrict:"Dinajpur",craftType:"Tree-Cooled Morning Plucking",description:"King of lychees with tiny aborted seed and overflowing transparent sweet nectar flesh.",rating:5,reviewsCount:167,flashDeal:!0,sellerCooperative:"Dinajpur Lychee Association",originVillage:"Mashimpur, Dinajpur",inStock:!0,deliveryDays:"1 Business Day (Express Morning Delivery)"},{id:"prod-sylhet-zara-lemon",name:"Sylhet Fragrant Zara Lemon (জারা লেবু)",bengaliName:"সিলেটের সুগন্ধি ঐতিহ্যবাহী জারা লেবু (৪ পিস)",category:"fruits",priceBDT:320,originalPriceBDT:400,discountPercent:20,unit:"Pack of 4 large lemons",image:"/images/highland-tea.jpg",artisanName:"Jaintiapur Citrus Guild",artisanDistrict:"Sylhet",craftType:"Hill Slope Citrus Cultivation",description:"Iconic thick-skinned citrus with edible sweet peel and exotic aromatic oils that perfume dining tables.",rating:4.9,reviewsCount:52,flashDeal:!1,sellerCooperative:"Sylhet Citrus Planters",originVillage:"Jaintiapur, Sylhet",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-barisal-guava",name:"Swarupkathi Floating Market Deshi Guava",bengaliName:"স্বরূপকাঠির ভাসমান বাজারের মিষ্টি পেয়ারা (৫ কেজি)",category:"fruits",priceBDT:250,originalPriceBDT:300,discountPercent:17,unit:"5 kg basket",image:"/images/freshwater-fish-culture.jpg",artisanName:"Kirtankhola Canal Farmers",artisanDistrict:"Pirojpur",craftType:"Canal Bank Agroforestry",description:"Crisp, seed-light sweet white guavas plucked at dawn and ferried directly through Bengal's floating markets.",rating:4.8,reviewsCount:84,flashDeal:!1,sellerCooperative:"Floating Market Growers Union",originVillage:"Kuriana, Swarupkathi, Pirojpur",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-chuadanga-banana",name:"Chuadanga Shobri Sweet Banana",bengaliName:"চুয়াডাঙ্গার খাঁটি গাছপাকা শবরি কলা (১ ডজন)",category:"fruits",priceBDT:140,originalPriceBDT:170,discountPercent:18,unit:"1 Dozen (12 pcs)",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Damurhuda Fruit Growers",artisanDistrict:"Chuadanga",craftType:"Natural Maturation Without Ethylene",description:"Fragrant, velvety smooth sweet country bananas matured on plant without chemical ripening gas.",rating:4.8,reviewsCount:69,flashDeal:!1,sellerCooperative:"Chuadanga Fruit Producers",originVillage:"Damurhuda, Chuadanga",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-madhupur-pineapple",name:"Madhupur Giant Honey Queen Pineapple",bengaliName:"মধুপুরের পাহাড়ি সুমিষ্ট আনারস (৪ পিস)",category:"fruits",priceBDT:280,originalPriceBDT:350,discountPercent:20,unit:"Pack of 4 pineapples",image:"/images/highland-tea.jpg",artisanName:"Garo Hills Agri Union",artisanDistrict:"Tangail",craftType:"Red Soil Plateau Farming",description:"Deep golden interior with rich pineapple fragrance and intensely sweet tropical juice without biting acidity.",rating:4.9,reviewsCount:93,flashDeal:!1,sellerCooperative:"Madhupur Garo Cooperative",originVillage:"Jalchatra, Madhupur, Tangail",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-bandarban-dragon-fruit",name:"Bandarban Hilltop Red Dragon Fruit",bengaliName:"বান্দরবানের পাহাড়ি লাল ড্রাগন ফল (২ কেজি)",category:"fruits",priceBDT:480,originalPriceBDT:600,discountPercent:20,unit:"2 kg box (4-5 pcs)",image:"/images/hero-bangladesh-farming.jpg",artisanName:"Chimbuk Hill Orchards",artisanDistrict:"Bandarban",craftType:"Terrace Hill Viticulture",description:"Vibrant crimson flesh bursting with natural betalain antioxidants and crunchy black seed crunch.",rating:4.8,reviewsCount:57,flashDeal:!0,sellerCooperative:"Chimbuk Hill Horticulture",originVillage:"Thanchi, Bandarban",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-langra-mango",name:"Rajshahi Heritage Langra Mango",bengaliName:"রাজশাহীর বিখ্যাত সুস্বাদু ল্যাংড়া আম (১০ কেজি)",category:"fruits",priceBDT:1300,originalPriceBDT:1550,discountPercent:16,unit:"10 kg eco-crate",image:"/images/rajshahi-mango-harvest.jpg",artisanName:"Paba Mango Cooperative",artisanDistrict:"Rajshahi",craftType:"Traditional Thin-Skin Orchard",description:"Thin bright olive skin harboring buttery, zesty sweet pulp with timeless royal heritage fragrance.",rating:5,reviewsCount:128,flashDeal:!1,sellerCooperative:"Rajshahi Mango Growers",originVillage:"Paba, Rajshahi",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-tangail-sweet-orange",name:"Tangail Garo Hills Deshi Sweet Malta / Orange",bengaliName:"টাঙ্গাইলের রসালো মিষ্টি দেশি মাল্টা (৩ কেজি)",category:"fruits",priceBDT:360,originalPriceBDT:440,discountPercent:18,unit:"3 kg pack",image:"/images/highland-tea.jpg",artisanName:"Madhupur Citrus Project",artisanDistrict:"Tangail",craftType:"Highland Citrus Orchard",description:"Thin green peel yielding abundant sweet juice with high vitamin C and no artificial coloring wash.",rating:4.8,reviewsCount:66,flashDeal:!1,sellerCooperative:"Garo Citrus Planters",originVillage:"Madhupur, Tangail",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-chittagong-watermelon",name:"Patiya Sweet Sugar-Baby Watermelon",bengaliName:"পটিয়ার রসালো লাল তরমুজ (১ পিস, ৬-৭ কেজি)",category:"fruits",priceBDT:260,originalPriceBDT:320,discountPercent:19,unit:"1 large fruit (6-7 kg)",image:"/images/rajshahi-mango-harvest.jpg",artisanName:"Karnafuli Basin Farmers",artisanDistrict:"Chattogram",craftType:"River Basin Sandy Agriculture",description:"Crisp deep red sugary heart harvested at peak ripeness; thirst-quenching natural summer refreshment.",rating:4.8,reviewsCount:74,flashDeal:!1,sellerCooperative:"Patiya Farmers Guild",originVillage:"Patiya, Chattogram",inStock:!0,deliveryDays:"1-2 Business Days"}],k={name:"Tanvir Ahmed",email:"tanvir.ahmed@buyer.bd",phone:"+880 1712-889900",address:"Flat 4B, House 18, Road 11, Banani",city:"Dhaka",district:"Dhaka",preferredPayment:"bKash",memberSince:"March 2026"},P=[{id:"GB-ORD-94812",date:"15 Sep 2026",status:"on_the_way",statusBengali:"পথিমধ্যে রয়েছে (চলমান ডেলিভারি)",statusBadgeClass:"badge-transit",items:[{product:{id:"prod-chinigura-rice",name:"Premium Chinigura Aromatic Rice",bengaliName:"দিনাজপুরের প্রিমিয়াম সুগন্ধি চিনিগুঁড়া চাল",category:"farming",priceBDT:140,originalPriceBDT:175,discountPercent:20,unit:"1 kg",image:"/images/chinigura-rice.jpg",artisanName:"Shonali Organic Farm",artisanDistrict:"Dinajpur",craftType:"Traditional Indigenous Crop",description:"Freshly milled, fragrant non-sticky Chinigura rice cultivated with zero toxic chemical pesticides in Dinajpur.",rating:4.9,reviewsCount:142,flashDeal:!0,sellerCooperative:"Dinajpur Farmer Samity",originVillage:"Birganj, Dinajpur",inStock:!0,deliveryDays:"2-3 Business Days"},quantity:3},{product:{id:"prod-pure-cow-ghee",name:"Village Churn Pure Deshi Cow Ghee",bengaliName:"ঘোল থেকে বিলোনো খাঁটি গাওয়া ঘি (বগুড়া)",category:"dairy",priceBDT:950,originalPriceBDT:1200,discountPercent:21,unit:"500 gm jar",image:"/images/pure-cow-ghee.jpg",artisanName:"Shonali Organic Farm",artisanDistrict:"Bogura",craftType:"Traditional Bilona Butter Churning",description:"Golden, granular aromatic ghee made from grass-fed indigenous cow milk curd churned by hand.",rating:5,reviewsCount:164,flashDeal:!0,sellerCooperative:"Bogura Dairy Farmers Cooperative",originVillage:"Sherpur, Bogura",inStock:!0,deliveryDays:"1-2 Business Days"},quantity:1}],subtotal:1370,shippingFee:60,discount:50,total:1380,paymentMethod:"bKash",paymentDetails:"bKash Mobile: 01712-889900 (TxnID: BK9948120)",shippingAddress:"Flat 4B, House 18, Road 11, Banani, Dhaka-1213",recipientPhone:"+880 1712-889900",trackingNumber:"REDX-GB-99412",courierPartner:"RedX Express Logistics",estimatedDelivery:"Tomorrow, by 4:00 PM",trackingSteps:[{label:"Order Confirmed",bengaliLabel:"অর্ডার গৃহীত হয়েছে",time:"15 Sep, 10:30 AM",completed:!0},{label:"Picked from Dinajpur Farm",bengaliLabel:"দিনাজপুর খামার থেকে সংগৃহীত",time:"15 Sep, 04:15 PM",completed:!0},{label:"In Transit / On The Way",bengaliLabel:"পথিমধ্যে রয়েছে (ঢাকা সেন্ট্রাল হাবের পথে)",time:"16 Sep, 08:00 AM",completed:!0,active:!0},{label:"Out for Delivery",bengaliLabel:"ডেলিভারির জন্য বের হবে",time:"Expected Tomorrow, 10:00 AM",completed:!1},{label:"Delivered",bengaliLabel:"পণ্য পৌঁছে গেছে",time:"Pending",completed:!1}]},{id:"GB-ORD-88210",date:"08 Sep 2026",status:"delivered",statusBengali:"সম্পন্ন ডেলিভারি (পৌঁছে গেছে)",statusBadgeClass:"badge-delivered",items:[{product:{id:"prod-nakshi-kantha",name:"Jamalpur Silk-Embroidered Nakshi Kantha",bengaliName:"জামালপুরের ঐতিহ্যবাহী রেশম সুতার নকশী কাঁথা",category:"handicrafts",priceBDT:3450,originalPriceBDT:4200,discountPercent:18,unit:"1 piece (7.5 x 5 ft)",image:"/images/nakshi-kantha-artisan.jpg",artisanName:"Rokeya Begum",artisanDistrict:"Jamalpur",craftType:"Pure Cotton with Fine Silk Threads",description:"100% hand-stitched over 45 days depicting traditional Bengali folk motifs, lotus ponds, and village flora.",rating:4.9,reviewsCount:38,flashDeal:!0,sellerCooperative:"Jamalpur Women Artisan Guild",originVillage:"Islampur, Jamalpur",inStock:!0,deliveryDays:"3-4 Business Days"},quantity:1},{product:{id:"prod-clay-pottery",name:"Handcrafted Terracotta Clay Pottery",bengaliName:"হাতে গড়া ঐতিহ্যবাহী মাটির পাত্র",category:"handicrafts",priceBDT:950,originalPriceBDT:1200,discountPercent:21,unit:"Set of 3 pieces",image:"/images/clay-pottery.jpg",artisanName:"Gouranga Pal",artisanDistrict:"Dhamrai, Dhaka",craftType:"Fired Natural Terracotta Clay",description:"Artisanal wheel-thrown terracotta serving vessels made with indigenous river clay and wood-fired kiln finishes.",rating:4.9,reviewsCount:42,flashDeal:!1,sellerCooperative:"Dhamrai Pal Mahashava",originVillage:"Kagojinagar, Dhamrai",inStock:!0,deliveryDays:"2-3 Business Days"},quantity:1}],subtotal:4400,shippingFee:0,discount:100,total:4300,paymentMethod:"Nagad",paymentDetails:"Nagad Mobile: 01712-889900 (TxnID: NG882104)",shippingAddress:"Flat 4B, House 18, Road 11, Banani, Dhaka-1213",recipientPhone:"+880 1712-889900",trackingNumber:"STEADFAST-GB-88210",courierPartner:"Steadfast Courier",estimatedDelivery:"Delivered on 08 Sep 2026, 03:45 PM"},{id:"GB-ORD-74190",date:"28 Aug 2026",status:"delivered",statusBengali:"সম্পন্ন ডেলিভারি (পৌঁছে গেছে)",statusBadgeClass:"badge-delivered",items:[{product:{id:"prod-bogura-mishti-doi",name:"Traditional Bogura Clay-Pot Mishti Doi",bengaliName:"বগুড়ার স্পেশাল মাটির হাঁড়ির খাঁটি মিষ্টি দই",category:"dairy",priceBDT:340,originalPriceBDT:400,discountPercent:15,unit:"1 kg clay sora",image:"/images/bogura-dairy-farm.jpg",artisanName:"Gour Gopal Ghosh",artisanDistrict:"Bogura",craftType:"Slow-Smoked Clay Sora Fermentation",description:"Iconic thick caramelized sweet curd set in porous unglazed clay sora that wicks away whey for dense creamy texture.",rating:4.9,reviewsCount:195,flashDeal:!0,sellerCooperative:"Sherpur Doi Kalyan Samity",originVillage:"Sherpur, Bogura",inStock:!0,deliveryDays:"1 Business Day (Chilled Delivery)"},quantity:2},{product:{id:"prod-jute-tote",name:"Handcrafted Golden Fiber Eco Jute Bag",bengaliName:"হাতে বোনা সোনালী আঁশের পরিবেশবান্ধব জুট ব্যাগ",category:"handicrafts",priceBDT:850,originalPriceBDT:1050,discountPercent:19,unit:"1 piece",image:"/images/jute-bamboo-women.jpg",artisanName:"Shahnaz Parvin",artisanDistrict:"Faridpur",craftType:"Braided Natural Jute with Cotton Lining",description:"Durable, sustainable, and 100% biodegradable daily tote bag handmade by women artisans of Faridpur.",rating:4.8,reviewsCount:52,flashDeal:!1,sellerCooperative:"Faridpur Women Cooperative",originVillage:"Boalmari, Faridpur",inStock:!0,deliveryDays:"2-3 Business Days"},quantity:1}],subtotal:1530,shippingFee:60,discount:0,total:1590,paymentMethod:"Cash on Delivery",paymentDetails:"Cash paid on delivery to courier agent",shippingAddress:"Flat 4B, House 18, Road 11, Banani, Dhaka-1213",recipientPhone:"+880 1712-889900",trackingNumber:"PATHAO-GB-74190",courierPartner:"Pathao Courier",estimatedDelivery:"Delivered on 28 Aug 2026, 01:20 PM"},{id:"GB-ORD-61205",date:"18 Aug 2026",status:"cancelled",statusBengali:"বাতিলকৃত অর্ডার",statusBadgeClass:"badge-cancelled",items:[{product:{id:"prod-rajshahi-himsagar",name:"Rajshahi Himsagar Sweet Mango",bengaliName:"রাজশাহীর বিখ্যাত ফরমালিনমুক্ত হিমসাগর আম (১০ কেজি)",category:"fruits",priceBDT:1350,originalPriceBDT:1650,discountPercent:18,unit:"10 kg eco-crate",image:"/images/rajshahi-mango-harvest.jpg",artisanName:"Varendra Orchard Farmers",artisanDistrict:"Rajshahi",craftType:"Paper-Bagged Organic Harvest",description:"The crowning jewel of Bengal mangoes; fiberless, intensely aromatic, tree-ripened naturally without carbide.",rating:5,reviewsCount:192,flashDeal:!0,sellerCooperative:"Rajshahi Mango Growers Association",originVillage:"Bagha, Rajshahi",inStock:!0,deliveryDays:"1-2 Business Days"},quantity:1}],subtotal:1350,shippingFee:60,discount:0,total:1410,paymentMethod:"bKash",paymentDetails:"Full refund ৳1,410 sent to bKash 01712-889900 (TxnID: REF-BK61205)",shippingAddress:"Flat 4B, House 18, Road 11, Banani, Dhaka-1213",recipientPhone:"+880 1712-889900",cancelReason:"Customer requested change of shipping address to Sylhet; fresh order created.",refundStatus:"100% Refunded to bKash (Txn: REF-BK61205)"}];class E{constructor(){l(this,"currentIndex",0);l(this,"timer",null);l(this,"intervalMs",2e3);l(this,"slidesContainer",null);l(this,"dotsContainer",null);this.slidesContainer=document.getElementById("hero-slides-wrapper"),this.dotsContainer=document.getElementById("hero-dots-wrapper")}init(){!this.slidesContainer||!this.dotsContainer||(this.renderSlides(),this.renderDots(),this.setupEventListeners(),this.goToSlide(0),this.startAutoPlay())}renderSlides(){this.slidesContainer&&(this.slidesContainer.innerHTML=T.map((e,i)=>`
      <div class="hero-slide ${i===0?"active":""}" data-index="${i}" style="background-image: url('${e.image}')">
        <div class="hero-slide-overlay"></div>
      </div>
    `).join(""))}renderDots(){this.dotsContainer&&(this.dotsContainer.innerHTML=T.map((e,i)=>`
      <button class="hero-dot ${i===0?"active":""}" data-index="${i}" aria-label="Go to slide ${i+1}"></button>
    `).join(""))}setupEventListeners(){var e;(e=this.dotsContainer)==null||e.addEventListener("click",i=>{const t=i.target.closest(".hero-dot");if(t&&t.dataset.index!==void 0){const a=parseInt(t.dataset.index,10);this.goToSlide(a),this.restartAutoPlay()}})}goToSlide(e){var a,r;e<0&&(e=T.length-1),e>=T.length&&(e=0),this.currentIndex=e;const i=(a=this.slidesContainer)==null?void 0:a.querySelectorAll(".hero-slide");i==null||i.forEach((n,s)=>{n.classList.toggle("active",s===e)});const t=(r=this.dotsContainer)==null?void 0:r.querySelectorAll(".hero-dot");t==null||t.forEach((n,s)=>{n.classList.toggle("active",s===e)})}next(){this.goToSlide(this.currentIndex+1)}prev(){this.goToSlide(this.currentIndex-1)}startAutoPlay(){this.timer&&clearInterval(this.timer),this.timer=window.setInterval(()=>{this.next()},this.intervalMs)}restartAutoPlay(){this.startAutoPlay()}}class L{constructor(e,i){l(this,"closeAuthBtn",null);l(this,"formLogin",null);l(this,"demoLoginBtn",null);l(this,"becomeInvestorBtn",null);l(this,"navInvestBtn",null);l(this,"bannerCtaBtn",null);l(this,"projectsController");l(this,"onToastNotification");this.projectsController=e,this.onToastNotification=i}init(){this.bindElements(),this.setupEventListeners()}bindElements(){this.closeAuthBtn=document.getElementById("close-auth-modal"),this.formLogin=document.getElementById("form-login"),this.demoLoginBtn=document.getElementById("btn-demo-login"),this.becomeInvestorBtn=document.getElementById("cta-become-investor"),this.navInvestBtn=document.getElementById("nav-invest-btn"),this.bannerCtaBtn=document.getElementById("cta-invest-banner")}setupEventListeners(){var e,i,t,a,r,n;(e=this.becomeInvestorBtn)==null||e.addEventListener("click",()=>{const s=document.getElementById("projects");s==null||s.scrollIntoView({behavior:"smooth"})}),(i=this.navInvestBtn)==null||i.addEventListener("click",s=>{s.preventDefault(),v.clearPendingProject(),this.openInvestorModal()}),(t=this.bannerCtaBtn)==null||t.addEventListener("click",()=>{const s=document.getElementById("projects");s==null||s.scrollIntoView({behavior:"smooth"})}),(a=this.closeAuthBtn)==null||a.addEventListener("click",()=>{this.closeInvestorModal()}),(r=this.demoLoginBtn)==null||r.addEventListener("click",()=>{const s=v.demoLogin();this.handlePostAuthSuccess(s.name)}),(n=this.formLogin)==null||n.addEventListener("submit",s=>{s.preventDefault();const o=document.getElementById("login-email"),d=(o==null?void 0:o.value.trim())||"investor@grambondhon.bd",g=v.login(d);this.handlePostAuthSuccess(g.name)})}openInvestorModal(e,i=!1){this.projectsController.openAuthModal(e,i)}closeInvestorModal(){this.projectsController.closeAuthModal()}handlePostAuthSuccess(e){this.closeInvestorModal(),this.notifyToast(`Welcome, ${e}! Logged in as Verified Ethical Investor.`);const i=v.getPendingProject();i&&(v.clearPendingProject(),setTimeout(()=>{this.projectsController.openProjectDetailsModal(i)},350))}notifyToast(e){this.onToastNotification&&this.onToastNotification(e)}}class A{constructor(){l(this,"currentFilter","all");l(this,"allProjects",[...S,C]);l(this,"showAllProjects",!1)}init(){this.renderActiveProjects(),this.renderFeaturedProject(),this.setupCategoryFilters(),this.setupEventListeners()}toggleShowAllProjects(){this.showAllProjects=!this.showAllProjects,this.renderActiveProjects()}isShowingAll(){return this.showAllProjects}setupCategoryFilters(){const e=document.getElementById("project-filters");e&&e.addEventListener("click",i=>{const t=i.target.closest(".filter-pill");if(!t)return;const a=t.dataset.category;a&&(e.querySelectorAll(".filter-pill").forEach(r=>r.classList.remove("active")),t.classList.add("active"),this.currentFilter=a,this.renderActiveProjects())})}setupEventListeners(){document.addEventListener("click",e=>{const i=e.target,t=i.closest('[data-action="view-project"]');if(t){e.preventDefault();const s=t.dataset.projectId;s&&this.handleProjectClick(s,!1);return}const a=i.closest('[data-action="invest-project"]');if(a){e.preventDefault();const s=a.dataset.projectId;s&&this.handleProjectClick(s,!0);return}if(i.closest("#btn-view-all-projects")){e.preventDefault(),this.toggleShowAllProjects();return}if(i.closest("#btn-expand-projects")){e.preventDefault(),this.toggleShowAllProjects();return}})}handleProjectClick(e,i=!1){v.isAuthenticated()?this.openProjectDetailsModal(e,i):(v.setPendingProject(e),this.openAuthModal(e,i))}openAuthModal(e,i=!1){const t=document.getElementById("auth-modal");if(!t)return;const a=document.getElementById("auth-modal-project-context");if(a)if(e){const r=this.allProjects.find(n=>n.id===e);r&&(a.style.display="flex",a.innerHTML=`
            <div class="context-icon">🔒</div>
            <div class="context-text">
              <strong>Investor Access Required</strong>
              <span>Log in to review verified financial audit & profit-sharing terms for <em>"${r.name}"</em></span>
            </div>
          `)}else a.style.display="none";t.classList.add("active"),t.setAttribute("data-direct-invest",i?"true":"false"),document.body.style.overflow="hidden"}closeAuthModal(){const e=document.getElementById("auth-modal");e&&(e.classList.remove("active"),document.body.style.overflow="")}renderActiveProjects(){const e=document.getElementById("active-projects-grid");if(!e)return;let i=S;if(this.currentFilter!=="all"&&(i=S.filter(o=>o.category===this.currentFilter)),i.length===0){e.innerHTML=`
        <div class="empty-state" style="padding: 40px; text-align: center; color: #5B6E66; grid-column: 1 / -1;">
          <p>No active projects found in this category right now.</p>
        </div>
      `;return}const t=this.showAllProjects?i:i.slice(0,4);e.innerHTML=t.map(o=>{const d=Math.min(100,Math.round(o.fundingRaisedBDT/o.fundingGoalBDT*100));return`
        <article class="project-card" data-project-id="${o.id}">
          <!-- Top Image Header with Overlay matching media_1789573283421.png -->
          <div class="project-card-header">
            <img src="${o.image}" alt="${o.name}" class="project-card-image" loading="lazy" />
            <div class="project-header-overlay"></div>

            <!-- Top Badges: LIVE Status & Field Verified -->
            <div class="project-header-top-tags">
              <span class="project-live-chip">
                <span class="live-dot-pulse">●</span> LIVE
              </span>
              <span class="project-verified-chip" title="100% In-Person Verified">
                ✓ Verified
              </span>
            </div>

            <!-- Title & Price Overlay at Bottom of Image matching media_1789573283421.png -->
            <div class="project-header-bottom-info">
              <div class="header-info-left">
                <h3 class="project-title-overlay">${o.name}</h3>
                <div class="project-loc-overlay">📍 ${o.location}</div>
              </div>
              <div class="header-price-right">
                <div class="unit-price-overlay">৳ ${o.minInvestmentBDT.toLocaleString()} BDT</div>
                <div class="unit-label-overlay">BDT/unit</div>
              </div>
            </div>
          </div>

          <!-- Eye-Soothing Card Body matching media_1789573283421.png -->
          <div class="project-card-body">
            <!-- Top Right Pastel Pill Badge -->
            <div class="project-tag-row">
              <span class="variable-return-pill">
                🌱 ${o.returnTypeTag||"Variable Return"}
              </span>
            </div>

            <!-- Clean Key-Value Metrics List matching Image 2 -->
            <div class="soothing-metrics-list">
              <div class="metric-line">
                <span class="metric-key">Period</span>
                <strong class="metric-val">${o.periodText||o.durationMonths+" Months"}</strong>
              </div>
              <div class="metric-line">
                <span class="metric-key">Return</span>
                <strong class="metric-val return-val">${o.potentialReturn}</strong>
              </div>
              <div class="metric-line total-return-line">
                <span class="metric-key">Total return</span>
                <strong class="metric-val total-val">${o.totalReturnBDT||"৳ "+(o.minInvestmentBDT*1.15).toLocaleString()+" – ৳ "+(o.minInvestmentBDT*1.18).toLocaleString()}</strong>
              </div>
            </div>

            <!-- Progress & Micro-Stats matching media_1789573484322.png -->
            <div class="project-progress-container">
              <div class="progress-labels-row">
                <span class="percent-bold">${d}% Funded</span>
                <span class="days-left">${o.duration}</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill" style="width: ${d}%;"></div>
              </div>
              <div class="goal-micro-stat">Raised: ৳${o.fundingRaisedBDT.toLocaleString()} of ৳${o.fundingGoalBDT.toLocaleString()} (DEMO)</div>
            </div>

            <!-- Card Action Buttons matching media_1789573484322.png -->
            <div class="project-card-btn-group">
              <button class="btn btn-invest-card" data-action="invest-project" data-project-id="${o.id}">
                Invest Now
              </button>
              <button class="btn btn-view-terms" data-action="view-project" data-project-id="${o.id}">
                View Terms
              </button>
            </div>
          </div>
        </article>
      `}).join("");const a=document.getElementById("btn-view-all-projects");a&&(this.showAllProjects?a.innerHTML=`
          <span>Show Top 4</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        `:a.innerHTML=`
          <span>View All</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        `);const r=document.getElementById("projects-bottom-cta"),n=document.getElementById("btn-expand-projects-text"),s=document.getElementById("btn-expand-projects-icon");r&&n&&s&&(i.length<=4?r.style.display="none":(r.style.display="flex",this.showAllProjects?(n.textContent="Show Top 4 Projects (কমিয়ে ৪টি দেখুন)",s.innerHTML='<polyline points="18 15 12 9 6 15"></polyline>'):(n.textContent=`View All Projects (${i.length}টি প্রকল্প দেখুন)`,s.innerHTML='<polyline points="6 9 12 15 18 9"></polyline>')))}renderFeaturedProject(){const e=document.getElementById("featured-project-container");if(!e)return;const i=C,t=Math.min(100,Math.round(i.fundingRaisedBDT/i.fundingGoalBDT*100));e.innerHTML=`
      <div class="featured-project-card">
        <div class="featured-project-media">
          <img src="${i.image}" alt="${i.name}" class="featured-img" loading="lazy" />
          <span class="featured-badge">🌟 ${i.badge}</span>
        </div>

        <div class="featured-project-content">
          <div class="featured-header">
            <div class="location-tag">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${i.location}</span>
            </div>
            <div class="verified-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>100% In-Person Verified</span>
            </div>
          </div>

          <h3 class="featured-title">${i.name}</h3>
          <p class="featured-bengali">${i.bengaliName}</p>
          <p class="featured-story">${i.shortStory}</p>

          <div class="featured-producer">
            <strong>Led by:</strong> ${i.producerName} (${i.cooperativeInfo})
          </div>

          <div class="featured-progress-block">
            <div class="progress-bar-track">
              <div class="progress-bar-fill" style="width: ${t}%;"></div>
            </div>
            <div class="progress-stats">
              <span><strong>৳${i.fundingRaisedBDT.toLocaleString()}</strong> raised of ৳${i.fundingGoalBDT.toLocaleString()}</span>
              <span class="percent-tag">${t}% Funded</span>
            </div>
          </div>

          <div class="featured-metrics-row">
            <div class="f-metric">
              <span class="label">Potential Return (Est.)</span>
              <span class="val return-text">${i.potentialReturn}</span>
            </div>
            <div class="f-metric">
              <span class="label">Duration</span>
              <span class="val">${i.duration}</span>
            </div>
            <div class="f-metric">
              <span class="label">Risk Level</span>
              <span class="val">${i.riskLevel}</span>
            </div>
            <div class="f-metric">
              <span class="label">Min. Ticket</span>
              <span class="val">৳${i.minInvestmentBDT.toLocaleString()}</span>
            </div>
          </div>

          <div class="featured-actions">
            <button class="btn btn-primary btn-lg" data-action="view-project" data-project-id="${i.id}">
              <span>View Full Project Terms</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <span class="investor-note">🔒 Full verification audit & financials require Investor login</span>
          </div>
        </div>
      </div>
    `}openProjectDetailsModal(e,i=!1){const t=document.getElementById("project-detail-modal");if(!t)return;const a=this.allProjects.find(d=>d.id===e);if(!a)return;const r=document.getElementById("project-detail-modal-body");if(!r)return;const n=Math.min(100,Math.round(a.fundingRaisedBDT/a.fundingGoalBDT*100));r.innerHTML=`
      <div class="p-modal-content">
        <div class="p-modal-banner" style="background-image: url('${a.image}');">
          <div class="p-modal-overlay"></div>
          <div class="p-modal-badges">
            <span class="badge category">${a.badge}</span>
            <span class="badge verified">✓ Field Verified</span>
            <span class="badge demo">DEMO DATA</span>
          </div>
          <div class="p-modal-headline">
            <h2>${a.name}</h2>
            <p class="bengali">${a.bengaliName}</p>
            <div class="location-row">
              <span>📍 ${a.location}</span>
              <span>•</span>
              <span>🌾 ${a.cooperativeInfo}</span>
            </div>
          </div>
        </div>

        <div class="p-modal-grid">
          <div class="p-modal-main">
            <section class="detail-section">
              <h4>Project Narrative & Purpose • প্রকল্পের উদ্দেশ্য</h4>
              <p>${a.fullDescription}</p>
            </section>

            <section class="detail-section">
              <h4>People & Community Impact</h4>
              <div class="producer-card-inline">
                <div class="producer-avatar">👤</div>
                <div>
                  <strong>${a.producerName}</strong>
                  <p>${a.producerRole} • ${a.cooperativeInfo}</p>
                </div>
              </div>
            </section>

            <section class="detail-section">
              <h4>Verified Field Checklist</h4>
              <ul class="checklist">
                ${a.verificationChecklist.map(d=>`
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span>${d}</span>
                  </li>
                `).join("")}
              </ul>
            </section>

            <section class="detail-section">
              <h4>Transparent Profit-Sharing Terms • মুনাফা বণ্টন নীতি</h4>
              <div class="ratio-pill">
                <strong>Agreed Ratio:</strong> ${a.profitSharingRatio}
              </div>
              <ul class="terms-list">
                ${a.terms.map(d=>`<li>• ${d}</li>`).join("")}
              </ul>
            </section>

            <section class="detail-section risk-notice">
              <h4>⚠️ Statutory Ethical Risk Notice</h4>
              <p>GramBondhon does not offer guaranteed profits or fixed interest. Returns are estimated based on seasonal market conditions, crop yield, and fair trade pricing. Capital is subject to agricultural and business risks as disclosed in the project agreement.</p>
            </section>
          </div>

          <div class="p-modal-sidebar">
            <div class="investment-summary-card ${i?"highlight-focus":""}">
              <div class="summary-header">
                <h3>Investment Terms (DEMO)</h3>
                <span class="demo-tag">ILLUSTRATIVE</span>
              </div>

              <div class="metric-row">
                <span>Target Funding</span>
                <strong>৳${a.fundingGoalBDT.toLocaleString()}</strong>
              </div>
              <div class="metric-row">
                <span>Funded So Far</span>
                <strong class="green-text">৳${a.fundingRaisedBDT.toLocaleString()} (${n}%)</strong>
              </div>

              <div class="progress-bar-track my-2">
                <div class="progress-bar-fill" style="width: ${n}%;"></div>
              </div>

              <div class="metric-row">
                <span>Price per Share</span>
                <strong>৳${a.minInvestmentBDT.toLocaleString()}</strong>
              </div>
              <div class="metric-row">
                <span>Duration</span>
                <strong>${a.duration}</strong>
              </div>
              <div class="metric-row">
                <span>Risk Assessment</span>
                <strong class="risk-badge risk-${a.riskLevel.toLowerCase().replace("-","")}">${a.riskLevel}</strong>
              </div>
              <div class="metric-row">
                <span>Projected Return</span>
                <strong class="return-highlight">${a.potentialReturn}</strong>
              </div>

              <div class="investment-calculator" id="investment-calc-box">
                <h4>Interactive Return Simulator</h4>
                <p class="calc-hint">Enter sample amount to see estimated return (DEMO):</p>
                <div class="calc-input-group">
                  <span class="currency-prefix">৳</span>
                  <input type="number" id="calc-input-amount" value="${a.minInvestmentBDT}" min="${a.minInvestmentBDT}" step="1000" />
                </div>
                <div class="quick-amounts">
                  <button class="quick-btn" data-amt="${a.minInvestmentBDT}">৳${a.minInvestmentBDT.toLocaleString()}</button>
                  <button class="quick-btn" data-amt="${a.minInvestmentBDT*2}">৳${(a.minInvestmentBDT*2).toLocaleString()}</button>
                  <button class="quick-btn" data-amt="${a.minInvestmentBDT*5}">৳${(a.minInvestmentBDT*5).toLocaleString()}</button>
                </div>

                <div class="calc-result" id="calc-result-box"></div>
              </div>

              <button class="btn btn-primary btn-block btn-invest-confirm" id="btn-confirm-investment" data-project-id="${a.id}">
                Proceed to Invest (Demo)
              </button>

              <div id="invest-success-msg" class="invest-success-banner" style="display: none;">
                ✓ <strong>Investment Confirmed (Demo)!</strong>
                <p>Congratulations! You have participated in this rural initiative.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,t.classList.add("active"),document.body.style.overflow="hidden",this.setupCalculatorLogic(a);const s=document.getElementById("btn-confirm-investment"),o=document.getElementById("invest-success-msg");s==null||s.addEventListener("click",()=>{s&&o&&(s.setAttribute("disabled","true"),s.textContent="Processing Investment...",setTimeout(()=>{s.style.display="none",o.style.display="block"},800))})}setupCalculatorLogic(e){const i=document.getElementById("calc-input-amount"),t=document.getElementById("calc-result-box"),a=document.querySelectorAll(".quick-btn"),r=()=>{if(!i||!t)return;let n=parseFloat(i.value);(isNaN(n)||n<0)&&(n=e.minInvestmentBDT);const[s,o]=e.returnRangePercent,d=Math.round(n*s/100),g=Math.round(n*o/100),h=n+d,f=n+g;t.innerHTML=`
        <div class="result-row">
          <span>Est. Profit (${e.potentialReturn}):</span>
          <strong class="profit-val">৳${d.toLocaleString()} – ৳${g.toLocaleString()}</strong>
        </div>
        <div class="result-row total">
          <span>Est. Total Payout:</span>
          <strong class="total-val">৳${h.toLocaleString()} – ৳${f.toLocaleString()}</strong>
        </div>
        <small class="disclaimer">*Illustrative DEMO DATA. Actual outcome depends on real harvest/production.</small>
      `};i==null||i.addEventListener("input",r),a.forEach(n=>{n.addEventListener("click",s=>{const o=s.currentTarget.getAttribute("data-amt");o&&i&&(i.value=o,r())})}),r()}closeProjectDetailsModal(){const e=document.getElementById("project-detail-modal");e&&(e.classList.remove("active"),document.body.style.overflow="")}}class N{constructor(){l(this,"cart",[]);l(this,"activeView","storefront");l(this,"selectedProductId",null);l(this,"currentCategory","all");l(this,"searchQuery","");l(this,"appliedVoucher",null);l(this,"selectedPaymentMethod","bKash");l(this,"currentProfileTab","on_the_way");l(this,"buyerSession",null);l(this,"orders",[]);l(this,"pendingAuthAction",null);l(this,"flashTimerSeconds",15512);l(this,"timerInterval",null);this.loadState()}init(){this.renderHomepagePreviewGrid(),this.setupGlobalTriggers(),this.startFlashTimer(),this.initBuyerAuthDialog()}loadState(){try{const e=localStorage.getItem("gb_market_cart");e&&(this.cart=JSON.parse(e));const i=localStorage.getItem("gb_buyer_session");if(i)this.buyerSession=JSON.parse(i);else if(v.isAuthenticated()){const a=v.getUser();a&&(this.buyerSession={name:a.name,email:a.email,phone:a.phone,address:"House 14, Road 5, Dhanmondi",city:"Dhaka",district:"Dhaka",preferredPayment:"bKash",memberSince:"March 2026"})}const t=localStorage.getItem("gb_buyer_orders");t?this.orders=JSON.parse(t):(this.orders=[...P],localStorage.setItem("gb_buyer_orders",JSON.stringify(this.orders)))}catch(e){console.warn("LocalStorage error in MarketplaceController:",e),this.orders=[...P]}}saveCart(){try{localStorage.setItem("gb_market_cart",JSON.stringify(this.cart))}catch(e){console.warn(e)}this.updateCartBadge()}saveOrders(){try{localStorage.setItem("gb_buyer_orders",JSON.stringify(this.orders))}catch(e){console.warn(e)}}startFlashTimer(){this.timerInterval&&clearInterval(this.timerInterval),this.timerInterval=setInterval(()=>{this.flashTimerSeconds>0&&(this.flashTimerSeconds--,this.updateFlashTimerDisplay())},1e3)}updateFlashTimerDisplay(){const e=Math.floor(this.flashTimerSeconds/3600),i=Math.floor(this.flashTimerSeconds%3600/60),t=this.flashTimerSeconds%60,a=o=>o.toString().padStart(2,"0"),r=document.getElementById("flash-h"),n=document.getElementById("flash-m"),s=document.getElementById("flash-s");r&&(r.textContent=a(e)),n&&(n.textContent=a(i)),s&&(s.textContent=a(t))}renderHomepagePreviewGrid(){const e=document.getElementById("marketplace-preview-grid");if(!e)return;const i=y.slice(0,4);e.innerHTML=i.map(t=>`
      <article class="market-card" data-product-id="${t.id}">
        <div class="market-card-image-wrap">
          <img src="${t.image}" alt="${t.name}" class="market-card-img" loading="lazy" />
          <span class="artisan-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            ${t.artisanName} (${t.artisanDistrict})
          </span>
          ${t.discountPercent?`<span class="market-demo-tag">-${t.discountPercent}%</span>`:""}
        </div>
        <div class="market-card-content">
          <h4 class="market-title">${t.name}</h4>
          <p class="market-bengali">${t.bengaliName}</p>
          <div class="market-price-row">
            <span class="price">৳${t.priceBDT.toLocaleString()}</span>
            <span class="craft-type">${t.craftType}</span>
          </div>
          <button class="btn btn-sm btn-market" data-action="open-marketplace" data-product-id="${t.id}">
            View in Marketplace →
          </button>
        </div>
      </article>
    `).join("")}setupGlobalTriggers(){document.addEventListener("click",e=>{const t=e.target.closest('[data-action="open-marketplace"]');if(t){e.preventDefault();const a=t.getAttribute("data-product-id");a?this.openProductDetail(a):this.openMarketplace("storefront")}}),document.addEventListener("keydown",e=>{if(e.key==="Escape"){const i=document.getElementById("marketplace-modal");i!=null&&i.classList.contains("active")&&this.closeMarketplace()}})}openMarketplace(e="storefront"){const i=document.getElementById("marketplace-modal");i&&(this.activeView=e,this.renderMarketplaceApp(),i.classList.add("active"),document.body.style.overflow="hidden")}closeMarketplace(){const e=document.getElementById("marketplace-modal");e&&(e.classList.remove("active"),document.body.style.overflow="")}openMarketplaceModal(){this.openMarketplace("storefront")}closeMarketplaceModal(){this.closeMarketplace()}openProductDetail(e){this.selectedProductId=e,this.openMarketplace("detail")}openCart(){this.openMarketplace("cart")}openCheckout(){this.requireBuyerAuth(()=>{if(this.cart.length===0){this.showToast("Your bag is empty! Add products first."),this.openMarketplace("storefront");return}this.openMarketplace("checkout")})}openBuyerProfile(e="on_the_way"){this.requireBuyerAuth(()=>{this.currentProfileTab=e,this.openMarketplace("profile")})}requireBuyerAuth(e){if(this.buyerSession){e();return}this.pendingAuthAction=e,this.openBuyerAuthDialog()}initBuyerAuthDialog(){var i,t,a;let e=document.getElementById("buyer-auth-dialog");e||(e=document.createElement("div"),e.id="buyer-auth-dialog",e.className="buyer-auth-dialog",e.innerHTML=`
        <div class="buyer-auth-card">
          <button class="modal-close-btn" id="close-buyer-auth-btn" style="position:absolute;top:14px;right:16px;background:none;border:none;font-size:1.4rem;cursor:pointer;color:#64748B;">✕</button>
          
          <div class="auth-header-wrap">
            <div style="font-size: 2.2rem; margin-bottom: 6px;">🛍️</div>
            <h3>Sign in to GramBondhon</h3>
            <p>Please sign in to add products to your cart, place orders, and track live deliveries directly from rural producers.</p>
          </div>

          <button type="button" class="btn-demo-buyer-login" id="btn-demo-buyer-auth">
            ⚡ 1-Click Demo Login as Tanvir Ahmed (Dhaka Buyer)
          </button>

          <div class="auth-divider">
            <span>OR SIGN IN WITH MOBILE</span>
          </div>

          <form id="buyer-manual-auth-form" style="display:flex;flex-direction:column;gap:12px;">
            <div class="auth-form-group">
              <label>Mobile Number / Email</label>
              <input type="text" class="auth-form-input" id="auth-input-phone" placeholder="e.g. 01712-889900" value="01712-889900" required />
            </div>
            <div class="auth-form-group">
              <label>Password</label>
              <input type="password" class="auth-form-input" id="auth-input-pwd" placeholder="Enter password" value="password123" required />
            </div>
            <button type="submit" class="btn-submit-auth">Sign In to Continue</button>
          </form>
        </div>
      `,document.body.appendChild(e),(i=e.querySelector("#close-buyer-auth-btn"))==null||i.addEventListener("click",()=>{this.closeBuyerAuthDialog()}),(t=e.querySelector("#btn-demo-buyer-auth"))==null||t.addEventListener("click",()=>{this.loginBuyerAsDemo()}),(a=e.querySelector("#buyer-manual-auth-form"))==null||a.addEventListener("submit",r=>{var s;r.preventDefault();const n=((s=document.getElementById("auth-input-phone"))==null?void 0:s.value)||"+880 1712-889900";this.loginBuyerCustom(n)}))}openBuyerAuthDialog(){const e=document.getElementById("buyer-auth-dialog");e&&e.classList.add("active")}closeBuyerAuthDialog(){const e=document.getElementById("buyer-auth-dialog");e&&e.classList.remove("active"),this.pendingAuthAction=null}loginBuyerAsDemo(){this.buyerSession={...k};try{localStorage.setItem("gb_buyer_session",JSON.stringify(this.buyerSession))}catch(e){console.warn(e)}if(this.closeBuyerAuthDialog(),this.showToast(`Welcome back, ${this.buyerSession.name}!`),this.renderTopBarRight(),this.pendingAuthAction){const e=this.pendingAuthAction;this.pendingAuthAction=null,e()}}loginBuyerCustom(e){this.buyerSession={name:"Tanvir Ahmed",email:"tanvir.ahmed@buyer.bd",phone:e,address:"Flat 4B, House 18, Road 11, Banani",city:"Dhaka",district:"Dhaka",preferredPayment:"bKash",memberSince:"March 2026"};try{localStorage.setItem("gb_buyer_session",JSON.stringify(this.buyerSession))}catch(i){console.warn(i)}if(this.closeBuyerAuthDialog(),this.showToast(`Logged in successfully as ${this.buyerSession.name}!`),this.renderTopBarRight(),this.pendingAuthAction){const i=this.pendingAuthAction;this.pendingAuthAction=null,i()}}logoutBuyer(){this.buyerSession=null;try{localStorage.removeItem("gb_buyer_session")}catch(e){console.warn(e)}this.showToast("Signed out of buyer account"),this.openMarketplace("storefront")}renderMarketplaceApp(){const e=document.getElementById("marketplace-modal");e&&(e.innerHTML=`
      <div class="market-app-window" id="market-app-window">
        <!-- Top Sticky Header -->
        <header class="market-top-bar">
          <div class="market-nav-left">
            <button class="market-back-btn" id="market-back-nav" title="Back">
              ←
            </button>
            <div class="market-brand-badge">
              <div class="market-brand-title">
                <span>🌾 GramBondhon</span>
                <span style="font-size:0.75rem;background:#10B981;color:#FFF;padding:1px 6px;border-radius:10px;">Store</span>
              </div>
              <div class="market-brand-location">📍 Delivery to: Banani, Dhaka</div>
            </div>
          </div>

          <!-- Dynamic Search with 'R' Autocomplete Dropdown -->
          <div class="market-search-wrapper">
            <div class="market-search-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                class="market-search-input" 
                id="market-search-input" 
                placeholder="Search 100+ rural items (try typing 'r' for Rice, Rui, Radhuni...)" 
                value="${this.searchQuery}"
                autocomplete="off"
              />
              <button class="market-search-clear ${this.searchQuery?"active":""}" id="market-search-clear" title="Clear">✕</button>
            </div>

            <!-- Autocomplete Suggestion Dropdown -->
            <div class="market-search-dropdown" id="market-search-dropdown"></div>
          </div>

          <!-- Right Action Icons: Profile & Cart -->
          <div class="market-nav-right" id="market-nav-right">
            <!-- Rendered by renderTopBarRight() -->
          </div>

          <button class="market-close-modal-btn" id="market-close-all" title="Close Store">✕</button>
        </header>

        <!-- Main View Container -->
        <main class="market-view-container" id="market-view-container">
          <!-- Dynamically inserted view -->
        </main>
      </div>
    `,this.renderTopBarRight(),this.setupTopBarEvents(),this.renderCurrentView())}renderTopBarRight(){var t,a;const e=document.getElementById("market-nav-right");if(!e)return;const i=this.cart.reduce((r,n)=>r+n.quantity,0);e.innerHTML=`
      <!-- Improved Account Button -->
      <button class="market-account-btn" id="btn-top-profile" title="My Account & Orders">
        <div class="account-icon-wrap">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="account-btn-label">
          <span class="account-name-tag">${this.buyerSession?this.buyerSession.name.split(" ")[0]:"Account"}</span>
          <span class="account-sub-tag">${this.buyerSession?"Orders & Track":"Sign In"}</span>
        </div>
        <span class="account-caret">▾</span>
      </button>

      <!-- White & Bold Pill BAG Button -->
      <button class="market-shajgooj-bag-btn" id="btn-top-cart" title="Shopping Bag">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0D382A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <span class="bag-btn-text">BAG</span>
        <span class="bag-btn-badge" id="top-cart-badge">${i}</span>
      </button>
    `,(t=document.getElementById("btn-top-profile"))==null||t.addEventListener("click",()=>{this.openBuyerProfile("on_the_way")}),(a=document.getElementById("btn-top-cart"))==null||a.addEventListener("click",()=>{this.openCart()})}setupTopBarEvents(){const e=document.getElementById("market-back-nav");e==null||e.addEventListener("click",()=>{this.activeView==="storefront"?this.closeMarketplace():(this.activeView="storefront",this.renderCurrentView())});const i=document.getElementById("market-close-all");i==null||i.addEventListener("click",()=>{this.closeMarketplace()});const t=document.getElementById("market-search-input"),a=document.getElementById("market-search-clear"),r=document.getElementById("market-search-dropdown");t==null||t.addEventListener("input",()=>{const n=t.value;this.searchQuery=n,a&&(n.length>0?a.classList.add("active"):a.classList.remove("active")),this.handleSearchAutocomplete(n),this.activeView==="storefront"&&this.renderStorefrontGridOnly()}),t==null||t.addEventListener("focus",()=>{t.value.trim().length>0&&this.handleSearchAutocomplete(t.value)}),a==null||a.addEventListener("click",()=>{this.searchQuery="",t&&(t.value=""),a.classList.remove("active"),r&&r.classList.remove("active"),this.activeView==="storefront"&&this.renderStorefrontGridOnly()}),document.addEventListener("click",n=>{!n.target.closest(".market-search-wrapper")&&r&&r.classList.remove("active")})}handleSearchAutocomplete(e){const i=document.getElementById("market-search-dropdown");if(!i)return;const t=e.trim().toLowerCase();if(!t){i.classList.remove("active");return}let a=y.filter(n=>n.name.toLowerCase().includes(t)||n.bengaliName.toLowerCase().includes(t)||n.artisanDistrict.toLowerCase().includes(t)||n.category.toLowerCase().includes(t));if(t==="r"||t==="র"){const n=a.filter(o=>o.name.toLowerCase().startsWith("r")),s=a.filter(o=>!o.name.toLowerCase().startsWith("r"));a=[...n,...s]}if(a.length===0){i.innerHTML=`
        <div class="search-drop-header">
          <span>Search Results</span>
          <span>0 found</span>
        </div>
        <div style="padding: 18px; text-align: center; color: #64748B; font-size: 0.85rem;">
          No products found matching "<strong>${e}</strong>"
        </div>
      `,i.classList.add("active");return}const r=t==="r"||t==="র"?`✨ Recommended Products starting with "R" (${a.length} items)`:`✨ Suggested Matches for "${e}" (${a.length} items)`;i.innerHTML=`
      <div class="search-drop-header">
        <span>${r}</span>
        <span style="color:#059669;font-weight:800;">Fast Delivery</span>
      </div>
      <div class="search-drop-list">
        ${a.slice(0,8).map(n=>`
          <div class="search-drop-item" data-product-id="${n.id}">
            <img src="${n.image}" alt="${n.name}" class="search-drop-img" />
            <div class="search-drop-info">
              <div class="search-drop-name">${n.name}</div>
              <div class="search-drop-meta">
                <span class="search-drop-tag">${n.category}</span>
                <span>📍 ${n.artisanDistrict}</span>
                <span>★ ${n.rating}</span>
              </div>
            </div>
            <div class="search-drop-price">
              ৳${n.priceBDT.toLocaleString()}
            </div>
          </div>
        `).join("")}
      </div>
    `,i.classList.add("active"),i.querySelectorAll(".search-drop-item").forEach(n=>{n.addEventListener("click",s=>{const o=s.currentTarget.getAttribute("data-product-id");o&&(i.classList.remove("active"),this.openProductDetail(o))})})}renderCurrentView(){const e=document.getElementById("market-view-container");if(e)switch(e.scrollTop=0,this.activeView){case"storefront":this.renderStorefrontView(e);break;case"detail":this.renderDetailView(e);break;case"cart":this.renderCartView(e);break;case"checkout":this.renderCheckoutView(e);break;case"profile":this.renderProfileView(e);break}}renderStorefrontView(e){const i=y.filter(a=>a.flashDeal).slice(0,8);e.innerHTML=`
      <div class="storefront-view">
        
        <!-- Category Filter Chips Bar -->
        <div class="market-chips-bar" id="market-chips-bar">
          <button class="market-chip ${this.currentCategory==="all"?"active":""}" data-cat="all">
            🌟 ALL (সব)
          </button>
          <button class="market-chip ${this.currentCategory==="farming"?"active":""}" data-cat="farming">
            🌾 Farming (কৃষি ও চাল)
          </button>
          <button class="market-chip ${this.currentCategory==="handicrafts"?"active":""}" data-cat="handicrafts">
            🧵 Handicrafts (হস্তশিল্প)
          </button>
          <button class="market-chip ${this.currentCategory==="dairy"?"active":""}" data-cat="dairy">
            🥛 Dairy (ঘি ও মিষ্টি)
          </button>
          <button class="market-chip ${this.currentCategory==="fisheries"?"active":""}" data-cat="fisheries">
            🐟 Fisheries (মাছ ও ইলিশ)
          </button>
          <button class="market-chip ${this.currentCategory==="spices"?"active":""}" data-cat="spices">
            🌶️ Spices (তেল ও মসলা)
          </button>
          <button class="market-chip ${this.currentCategory==="fruits"?"active":""}" data-cat="fruits">
            🥭 Fruits (আম ও ফল)
          </button>
        </div>

        <!-- ⚡ Flash Offers Section -->
        <section class="flash-offers-card">
          <div class="flash-header-row">
            <div class="flash-title-wrap">
              <span class="flash-badge-pill">⚡ FLASH DEALS</span>
              <h3 class="flash-heading">Direct from Farmers</h3>
            </div>
            <div class="flash-countdown">
              <span class="flash-countdown-label">Ends in:</span>
              <span class="flash-timer-box" id="flash-h">04</span>
              <span class="flash-timer-colon">:</span>
              <span class="flash-timer-box" id="flash-m">18</span>
              <span class="flash-timer-colon">:</span>
              <span class="flash-timer-box" id="flash-s">32</span>
            </div>
          </div>

          <div class="flash-deals-carousel">
            ${i.map(a=>`
              <div class="flash-deal-item" data-product-id="${a.id}">
                <div class="flash-img-box">
                  <img src="${a.image}" alt="${a.name}" loading="lazy" />
                  <span class="flash-discount-tag">-${a.discountPercent}%</span>
                </div>
                <div class="flash-item-body">
                  <div class="flash-item-title">${a.name}</div>
                  <div class="flash-price-action-row">
                    <div class="flash-price-row">
                      <span class="flash-curr-price">৳${a.priceBDT.toLocaleString()}</span>
                      ${a.originalPriceBDT?`<span class="flash-orig-price">৳${a.originalPriceBDT.toLocaleString()}</span>`:""}
                    </div>
                    <button 
                      type="button" 
                      class="prod-add-btn flash-add-btn" 
                      data-action="add-cart" 
                      data-product-id="${a.id}" 
                      title="Add to Shopping Bag"
                    >
                      +
                    </button>
                  </div>
                  <div class="flash-stock-meter">
                    <div class="flash-stock-fill" style="width: 78%;"></div>
                  </div>
                  <div class="flash-stock-text">
                    <span>⚡ 78% Sold</span>
                    <span>In Stock</span>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </section>

        <!-- Main Products Grid Header -->
        <div class="store-grid-header">
          <div class="store-grid-title">
            <span>🌿 Authentic Village Produce</span>
            <span class="store-count-badge" id="product-count-label">100 Products</span>
          </div>
        </div>

        <!-- Main Products Grid -->
        <div class="market-products-grid" id="market-products-grid">
          <!-- Rendered by renderStorefrontGridOnly() -->
        </div>

      </div>
    `,this.updateFlashTimerDisplay(),this.renderStorefrontGridOnly();const t=document.getElementById("market-chips-bar");t==null||t.addEventListener("click",a=>{const r=a.target.closest(".market-chip");if(!r)return;const n=r.getAttribute("data-cat")||"all";t.querySelectorAll(".market-chip").forEach(s=>s.classList.remove("active")),r.classList.add("active"),this.currentCategory=n,this.renderStorefrontGridOnly()}),e.querySelectorAll(".flash-deal-item").forEach(a=>{a.addEventListener("click",r=>{if(r.target.closest('[data-action="add-cart"]'))return;const s=r.currentTarget.getAttribute("data-product-id");s&&this.openProductDetail(s)})}),e.querySelectorAll('[data-action="add-cart"]').forEach(a=>{a.addEventListener("click",r=>{r.stopPropagation();const n=r.currentTarget.getAttribute("data-product-id");n&&this.requireBuyerAuth(()=>{this.addToCart(n)})})})}renderStorefrontGridOnly(){const e=document.getElementById("market-products-grid"),i=document.getElementById("product-count-label");if(!e)return;let t=y;if(this.currentCategory!=="all"&&(t=t.filter(a=>a.category===this.currentCategory)),this.searchQuery.trim()){const a=this.searchQuery.trim().toLowerCase();if(t=t.filter(r=>r.name.toLowerCase().includes(a)||r.bengaliName.toLowerCase().includes(a)||r.artisanDistrict.toLowerCase().includes(a)||r.craftType.toLowerCase().includes(a)||r.category.toLowerCase().includes(a)),a==="r"||a==="র"){const r=t.filter(s=>s.name.toLowerCase().startsWith("r")),n=t.filter(s=>!s.name.toLowerCase().startsWith("r"));t=[...r,...n]}}if(i&&(i.textContent=`${t.length} Products`),t.length===0){e.innerHTML=`
        <div class="market-empty-state" style="grid-column: 1 / -1;">
          <div style="font-size: 2.5rem;">🔍</div>
          <h4>No products found</h4>
          <p>Try searching for rice, ghee, mango, fish, or clear your filters.</p>
        </div>
      `;return}e.innerHTML=t.map(a=>`
      <article class="product-card" data-product-id="${a.id}">
        <div class="product-img-wrap">
          <img src="${a.image}" alt="${a.name}" loading="lazy" />
          ${a.discountPercent?`<span class="prod-badge-discount">-${a.discountPercent}% OFF</span>`:""}
          <span class="prod-badge-organic">100% Shariah</span>
        </div>
        <div class="product-card-body">
          <div class="prod-seller-chip">
            <span>🌾</span>
            <span>${a.artisanName} (${a.artisanDistrict})</span>
          </div>
          <h4 class="prod-title">${a.name}</h4>
          <div class="prod-bengali-sub">${a.bengaliName}</div>
          <div class="prod-rating-row">
            <span>★ ${a.rating}</span>
            <span class="prod-reviews-count">(${a.reviewsCount})</span>
          </div>
          <div class="prod-bottom-row">
            <div class="prod-price-box">
              <span class="prod-unit">${a.unit||"1 Unit"}</span>
              <div>
                <span class="prod-main-price">৳${a.priceBDT.toLocaleString()}</span>
                ${a.originalPriceBDT?`<span class="prod-orig-price">৳${a.originalPriceBDT.toLocaleString()}</span>`:""}
              </div>
            </div>
            <button 
              type="button" 
              class="prod-add-btn" 
              data-action="add-cart" 
              data-product-id="${a.id}"
              title="Add to Shopping Bag"
            >
              +
            </button>
          </div>
        </div>
      </article>
    `).join(""),e.querySelectorAll(".product-card").forEach(a=>{a.addEventListener("click",r=>{if(r.target.closest('[data-action="add-cart"]'))return;const s=a.getAttribute("data-product-id");s&&this.openProductDetail(s)})}),e.querySelectorAll('[data-action="add-cart"]').forEach(a=>{a.addEventListener("click",r=>{r.stopPropagation();const n=r.currentTarget.getAttribute("data-product-id");n&&this.requireBuyerAuth(()=>{this.addToCart(n)})})})}renderDetailView(e){var t,a,r;const i=y.find(n=>n.id===this.selectedProductId)||y[0];e.innerHTML=`
      <div class="detail-view">
        <div class="detail-nav-row">
          <button class="btn-detail-back" id="btn-back-to-store">
            ← Back to Store
          </button>
          <div style="font-size: 0.85rem; color: #64748B; font-weight: 600;">
            Product ID: #${i.id}
          </div>
        </div>

        <div class="detail-grid">
          <!-- Gallery -->
          <div class="detail-gallery">
            <img src="${i.image}" alt="${i.name}" class="detail-main-img" id="detail-main-img" />
            <div class="detail-thumbs-strip">
              <img src="${i.image}" class="detail-thumb active" alt="View 1" />
              <img src="/images/chinigura-rice.jpg" class="detail-thumb" alt="View 2" />
              <img src="/images/pure-cow-ghee.jpg" class="detail-thumb" alt="View 3" />
            </div>
          </div>

          <!-- Product Info Column -->
          <div class="detail-info-col">
            <span class="detail-category-badge">${i.category.toUpperCase()} • 100% NATURAL</span>
            
            <h2 class="detail-title-en">${i.name}</h2>
            <h3 class="detail-title-bn">${i.bengaliName}</h3>

            <div class="detail-price-banner">
              <span class="detail-price-main">৳${i.priceBDT.toLocaleString()}</span>
              ${i.originalPriceBDT?`<span class="detail-price-orig">৳${i.originalPriceBDT.toLocaleString()}</span>`:""}
              ${i.discountPercent?`<span class="detail-discount-chip">Save ${i.discountPercent}%</span>`:""}
              <span style="font-size:0.85rem;color:#64748B;font-weight:600;">/ ${i.unit||"1 Unit"}</span>
            </div>

            <!-- Voucher Banner -->
            <div class="detail-voucher-box">
              <span>🎟️</span>
              <div>
                <strong>Special Voucher Available:</strong> Use code <code style="background:#FFF;padding:2px 6px;border-radius:4px;font-weight:800;">GRAM20</code> for ৳20 OFF on orders above ৳500!
              </div>
            </div>

            <!-- Verified Producer / Farmer Card -->
            <div class="detail-seller-box">
              <div class="seller-meta">
                <div class="seller-avatar">🌾</div>
                <div>
                  <div class="seller-name">${i.artisanName}</div>
                  <div class="seller-origin">📍 ${i.originVillage||i.artisanDistrict} • Verified Producer</div>
                </div>
              </div>
              <div class="platform-fulfillment-chip" style="background:#E2E8F0;color:#0D382A;font-size:0.75rem;font-weight:700;padding:6px 14px;border-radius:20px;display:inline-flex;align-items:center;gap:6px;">
                <span>🛡️</span>
                <span>Platform Fulfilled & Quality Inspected</span>
              </div>
            </div>

            <!-- Delivery Guarantees -->
            <div class="detail-perks-row">
              <div class="detail-perk">
                <span>🚚</span>
                <span>2-3 Days Delivery</span>
              </div>
              <div class="detail-perk">
                <span>🔄</span>
                <span>7-Day Return</span>
              </div>
              <div class="detail-perk">
                <span>🛡️</span>
                <span>Zero Middlemen</span>
              </div>
            </div>

            <!-- Bilingual Description -->
            <div style="background:#F8FAFC;padding:14px;border-radius:10px;border:1px solid #E2E8F0;font-size:0.88rem;line-height:1.5;color:#334155;">
              <p style="margin-bottom:8px;"><strong>About this Harvest:</strong> ${i.description}</p>
              <p style="margin:0;font-family:'Tiro Bangla',serif;color:#475569;">
                <strong>খামারের তথ্য:</strong> এই পণ্যটি রাসায়নিক কীটনাশকমুক্ত উপায়ে সরাসরি প্রান্তিক কৃষক ও পল্লী কারিগরদের তত্ত্বাবধানে তৈরি ও সংগৃহীত। আপনার ক্রয়ের সম্পূর্ণ অর্থ সরাসরি উৎপাদকের পরিবারকে স্বাবলম্বী করে।
              </p>
            </div>

            <!-- Customer Reviews -->
            <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-top:1px solid #E2E8F0;">
              <div style="display:flex;align-items:center;gap:6px;font-weight:800;color:#0D382A;">
                <span style="color:#F59E0B;font-size:1.1rem;">★ ${i.rating}</span>
                <span>Customer Ratings (${i.reviewsCount} verified reviews)</span>
              </div>
              <span style="color:#059669;font-size:0.8rem;font-weight:700;">100% Positive Feedback</span>
            </div>

            <!-- Sticky Bottom Action Bar -->
            <div class="detail-action-bar">
              <button class="btn-detail-add-cart" id="btn-detail-add">
                🛒 Add to Bag
              </button>
              <button class="btn-detail-buy-now" id="btn-detail-buy">
                ⚡ BUY NOW
              </button>
            </div>

          </div>
        </div>
      </div>
    `,(t=document.getElementById("btn-back-to-store"))==null||t.addEventListener("click",()=>{this.activeView="storefront",this.renderCurrentView()}),(a=document.getElementById("btn-detail-add"))==null||a.addEventListener("click",()=>{this.requireBuyerAuth(()=>{this.addToCart(i.id);const n=document.getElementById("btn-detail-add");if(n){const s=n.innerHTML;n.innerHTML="✓ Added to Bag!",setTimeout(()=>{n.innerHTML=s},1400)}})}),(r=document.getElementById("btn-detail-buy"))==null||r.addEventListener("click",()=>{this.requireBuyerAuth(()=>{this.addToCart(i.id,1,!1),this.openCheckout()})})}renderCartView(e){var g,h,f,m;const i=this.cart.reduce((u,c)=>u+c.quantity,0),t=this.cart.reduce((u,c)=>u+c.product.priceBDT*c.quantity,0),a=1e3,r=t>=a||t===0,n=r?0:60,s=this.appliedVoucher?this.appliedVoucher.discountBDT:0,o=Math.max(0,t+n-s),d={};this.cart.forEach(u=>{const c=u.product.artisanName;d[c]||(d[c]=[]),d[c].push(u)}),e.innerHTML=`
      <div class="cart-view">
        <div class="cart-header-row">
          <div class="cart-heading">
            <span>🛍️ My Shopping Bag (আমার শপিং ব্যাগ)</span>
            <span style="font-size:0.85rem;background:#E2E8F0;color:#334155;padding:2px 8px;border-radius:12px;">${i} items</span>
          </div>
          <button class="btn-detail-back" id="btn-cart-back">
            ← Continue Shopping
          </button>
        </div>

        <!-- Free Delivery Progress Meter -->
        <div class="cart-free-shipping-box">
          <div style="display:flex;justify-content:space-between;">
            <span>${r&&t>0?"🎉 You unlocked FREE Delivery across Bangladesh!":`Add ৳${Math.max(0,a-t)} more to get FREE Delivery!`}</span>
            <span>Threshold: ৳1,000</span>
          </div>
          <div class="free-ship-meter">
            <div class="free-ship-fill" style="width: ${Math.min(100,t/a*100)}%;"></div>
          </div>
        </div>

        ${this.cart.length===0?`
          <div class="market-empty-state">
            <div style="font-size: 3rem; margin-bottom: 12px;">🛍️</div>
            <h3>Your Shopping Bag is Empty</h3>
            <p>Explore 100+ authentic village items from verified Bangladeshi producers.</p>
            <button class="btn btn-primary" id="btn-empty-shop-now" style="margin-top: 14px;">
              Start Shopping Now
            </button>
          </div>
        `:`
          <!-- Items List Grouped by Seller -->
          <div class="cart-items-container">
            ${Object.keys(d).map(u=>`
              <div class="cart-seller-group">
                <div class="cart-seller-header">
                  <span>🌾</span>
                  <span><strong>Seller:</strong> ${u} (${d[u][0].product.artisanDistrict})</span>
                </div>
                <div class="cart-seller-items">
                  ${d[u].map(c=>`
                    <div class="cart-item-row" data-product-id="${c.product.id}">
                      <img src="${c.product.image}" alt="${c.product.name}" class="cart-item-thumb" />
                      <div class="cart-item-info">
                        <div class="cart-item-name">${c.product.name}</div>
                        <div class="cart-item-unit">${c.product.unit||"1 Unit"} • ৳${c.product.priceBDT.toLocaleString()} each</div>
                        <div class="cart-item-price">৳${(c.product.priceBDT*c.quantity).toLocaleString()}</div>
                      </div>
                      <div class="cart-item-stepper">
                        <button class="btn-stepper" data-action="qty-minus" data-id="${c.product.id}">−</button>
                        <span class="stepper-qty">${c.quantity}</span>
                        <button class="btn-stepper" data-action="qty-plus" data-id="${c.product.id}">+</button>
                      </div>
                      <button class="btn-remove-item" data-action="remove-item" data-id="${c.product.id}" title="Remove">🗑️</button>
                    </div>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Voucher Promo Code -->
          <div class="cart-voucher-row">
            <input 
              type="text" 
              class="cart-voucher-input" 
              id="cart-voucher-input" 
              placeholder="Enter voucher code (e.g. GRAM20, EID100)" 
              value="${this.appliedVoucher?this.appliedVoucher.code:""}"
            />
            <button class="btn-apply-voucher" id="btn-apply-voucher">Apply Voucher</button>
          </div>
          ${this.appliedVoucher?`
            <div style="font-size:0.82rem;color:#059669;font-weight:700;">
              ✓ Voucher "${this.appliedVoucher.code}" applied! You saved ৳${this.appliedVoucher.discountBDT}.
            </div>
          `:""}

          <!-- Bill Summary -->
          <div class="cart-bill-summary">
            <div class="cart-bill-line">
              <span>Subtotal</span>
              <span>৳${t.toLocaleString()}</span>
            </div>
            <div class="cart-bill-line">
              <span>Delivery Fee (Standard 2-3 Days)</span>
              <span>${n===0?'<strong style="color:#059669;">FREE</strong>':`৳${n}`}</span>
            </div>
            ${s>0?`
              <div class="cart-bill-line" style="color:#059669;font-weight:700;">
                <span>Voucher Discount</span>
                <span>−৳${s.toLocaleString()}</span>
              </div>
            `:""}
            <div class="cart-bill-line total">
              <span>Grand Total Payable</span>
              <span>৳${o.toLocaleString()}</span>
            </div>
          </div>

          <!-- Proceed to Checkout -->
          <button class="btn-checkout-proceed" id="btn-proceed-checkout">
            <span>Proceed to Checkout (অর্ডার সম্পন্ন করুন) • ৳${o.toLocaleString()}</span>
            <span>→</span>
          </button>
        `}

        <!-- Just For You Recommendation Strip -->
        <div style="margin-top: 10px; border-top: 1px solid #E2E8F0; padding-top: 16px;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: #0D382A; margin-bottom: 12px;">
            ✨ Recommended For You (আপনার জন্য প্রস্তাবিত)
          </h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
            ${y.slice(4,7).map(u=>`
              <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:10px;display:flex;align-items:center;gap:10px;">
                <img src="${u.image}" style="width:45px;height:45px;border-radius:8px;object-fit:cover;" />
                <div style="flex:1;min-width:0;">
                  <div style="font-size:0.8rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${u.name}</div>
                  <div style="font-size:0.75rem;color:#0D382A;font-weight:800;">৳${u.priceBDT}</div>
                </div>
                <button class="btn-stepper" data-action="quick-add" data-id="${u.id}" style="width:28px;height:28px;background:#0D382A;color:#FFF;border-radius:6px;" title="Add">+</button>
              </div>
            `).join("")}
          </div>
        </div>

      </div>
    `,(g=document.getElementById("btn-cart-back"))==null||g.addEventListener("click",()=>{this.activeView="storefront",this.renderCurrentView()}),(h=document.getElementById("btn-empty-shop-now"))==null||h.addEventListener("click",()=>{this.activeView="storefront",this.renderCurrentView()}),e.querySelectorAll('[data-action="qty-plus"]').forEach(u=>{u.addEventListener("click",()=>{const c=u.getAttribute("data-id");c&&this.updateCartQuantity(c,1)})}),e.querySelectorAll('[data-action="qty-minus"]').forEach(u=>{u.addEventListener("click",()=>{const c=u.getAttribute("data-id");c&&this.updateCartQuantity(c,-1)})}),e.querySelectorAll('[data-action="remove-item"]').forEach(u=>{u.addEventListener("click",()=>{const c=u.getAttribute("data-id");c&&this.removeFromCart(c)})}),e.querySelectorAll('[data-action="quick-add"]').forEach(u=>{u.addEventListener("click",()=>{const c=u.getAttribute("data-id");c&&this.requireBuyerAuth(()=>{this.addToCart(c)})})}),(f=document.getElementById("btn-apply-voucher"))==null||f.addEventListener("click",()=>{var c;const u=(c=document.getElementById("cart-voucher-input"))==null?void 0:c.value.trim().toUpperCase();this.applyVoucher(u)}),(m=document.getElementById("btn-proceed-checkout"))==null||m.addEventListener("click",()=>{this.openCheckout()})}renderCheckoutView(e){var s,o;const i=this.cart.reduce((d,g)=>d+g.product.priceBDT*g.quantity,0),t=i>=1e3?0:60,a=this.appliedVoucher?this.appliedVoucher.discountBDT:0,r=Math.max(0,i+t-a),n=this.buyerSession||k;e.innerHTML=`
      <div class="checkout-view" id="checkout-view-content">
        <div class="cart-header-row">
          <div class="cart-heading">
            <span>🔒 Secure Checkout (পেমেন্ট ও ডেলিভারি)</span>
          </div>
          <button class="btn-detail-back" id="btn-checkout-to-cart">
            ← Back to Bag
          </button>
        </div>

        <div class="checkout-grid">
          <!-- Left Column: Address & Payment Methods -->
          <div style="display:flex;flex-direction:column;gap:20px;">
            
            <!-- Delivery Address Card -->
            <div>
              <div class="checkout-section-title">
                <span>📍 1. Delivery Address (ডেলিভারি ঠিকানা)</span>
              </div>
              <div class="checkout-address-card">
                <div>
                  <div class="address-buyer-name">${n.name} <span style="background:#D1FAE5;color:#065F46;font-size:0.7rem;padding:2px 6px;border-radius:10px;margin-left:4px;">Home</span></div>
                  <div class="address-buyer-phone">📞 Mobile: ${n.phone}</div>
                  <div class="address-buyer-street">${n.address}, ${n.city}, Bangladesh</div>
                </div>
                <button class="btn-edit-addr" id="btn-edit-checkout-addr">Edit</button>
              </div>
            </div>

            <!-- Payment Methods Stack -->
            <div>
              <div class="checkout-section-title">
                <span>💳 2. Payment Method (পেমেন্ট মাধ্যম বেছে নিন)</span>
              </div>
              
              <div class="payment-methods-stack">
                
                <!-- bKash (বিকাশ) -->
                <div class="payment-method-card bkash-card ${this.selectedPaymentMethod==="bKash"?"selected":""}" data-method="bKash">
                  <div class="payment-method-header">
                    <div class="payment-brand-label">
                      <input type="radio" name="pay_opt" class="payment-radio" ${this.selectedPaymentMethod==="bKash"?"checked":""} />
                      <div class="payment-logo-wrap">
                        <!-- Official bKash Bird SVG -->
                        <svg width="34" height="26" viewBox="0 0 100 70" fill="none">
                          <path d="M5 25 L35 5 L65 25 L35 45 Z" fill="#E2136E"/>
                          <path d="M35 45 L65 25 L85 55 L45 55 Z" fill="#D10056"/>
                          <path d="M65 25 L95 20 L85 55 Z" fill="#E2136E"/>
                          <path d="M35 5 L55 2 L50 18 Z" fill="#C0004C"/>
                        </svg>
                        <div>
                          <strong style="color:#E2136E;font-size:1.05rem;">bKash (বিকাশ)</strong>
                          <div style="font-size:0.75rem;color:#64748B;">Instant Shariah Compliant Mobile Banking</div>
                        </div>
                      </div>
                    </div>
                    <span style="font-size:0.72rem;background:#FCE7F3;color:#BE185D;padding:3px 8px;border-radius:12px;font-weight:700;">Instant</span>
                  </div>
                  
                  <div class="payment-method-body">
                    <label class="payment-input-label">bKash Account Number</label>
                    <input type="tel" class="payment-account-input" id="bkash-phone-input" placeholder="017XXXXXXXX" value="${n.phone.replace(/[^0-9]/g,"").slice(-11)}" />
                    <div class="payment-security-note">
                      <span>🔒</span>
                      <span>You will receive an OTP notification on your phone to complete payment securely.</span>
                    </div>
                  </div>
                </div>

                <!-- Nagad (নগদ) -->
                <div class="payment-method-card nagad-card ${this.selectedPaymentMethod==="Nagad"?"selected":""}" data-method="Nagad">
                  <div class="payment-method-header">
                    <div class="payment-brand-label">
                      <input type="radio" name="pay_opt" class="payment-radio" ${this.selectedPaymentMethod==="Nagad"?"checked":""} />
                      <div class="payment-logo-wrap">
                        <!-- Official Nagad Swirl SVG -->
                        <svg width="30" height="26" viewBox="0 0 100 75" fill="none">
                          <path d="M50 5 C25 5 10 25 15 48 C18 62 32 70 48 70 C72 70 90 50 85 28 C82 14 68 8 50 15 C35 21 28 35 32 48 C35 57 45 60 52 56 C58 52 60 44 56 38 C53 34 47 34 45 37" stroke="#F7941D" stroke-width="11" stroke-linecap="round" fill="none"/>
                        </svg>
                        <div>
                          <strong style="color:#F7941D;font-size:1.05rem;">Nagad (নগদ)</strong>
                          <div style="font-size:0.75rem;color:#64748B;">Bangladesh Post Office Digital Financial Service</div>
                        </div>
                      </div>
                    </div>
                    <span style="font-size:0.72rem;background:#FFEDD5;color:#C2410C;padding:3px 8px;border-radius:12px;font-weight:700;">Fast</span>
                  </div>

                  <div class="payment-method-body">
                    <label class="payment-input-label">Nagad Account Number</label>
                    <input type="tel" class="payment-account-input" id="nagad-phone-input" placeholder="01XXXXXXXXX" value="${n.phone.replace(/[^0-9]/g,"").slice(-11)}" />
                    <div class="payment-security-note">
                      <span>🔒</span>
                      <span>Encrypted direct payment through Bangladesh Postal Service network.</span>
                    </div>
                  </div>
                </div>

                <!-- Cash on Delivery -->
                <div class="payment-method-card ${this.selectedPaymentMethod==="Cash on Delivery"?"selected":""}" data-method="Cash on Delivery">
                  <div class="payment-method-header">
                    <div class="payment-brand-label">
                      <input type="radio" name="pay_opt" class="payment-radio" ${this.selectedPaymentMethod==="Cash on Delivery"?"checked":""} />
                      <div class="payment-logo-wrap">
                        <span style="font-size:1.5rem;">💵</span>
                        <div>
                          <strong style="color:#0F172A;font-size:1.05rem;">Cash on Delivery (ক্যাশ অন ডেলিভারি)</strong>
                          <div style="font-size:0.75rem;color:#64748B;">Pay in cash when delivery courier reaches your door</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="payment-method-body">
                    <div style="font-size:0.8rem;color:#475569;">
                      Please keep <strong>৳${r.toLocaleString()}</strong> cash ready upon parcel handover.
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <!-- Right Column: Order Summary -->
          <div class="checkout-summary-box">
            <h4 style="font-size: 1rem; font-weight: 800; color: #0F172A; margin: 0;">Order Summary</h4>
            
            <div class="checkout-items-preview">
              ${this.cart.map(d=>`
                <div class="checkout-preview-item">
                  <span class="title">${d.product.name} × ${d.quantity}</span>
                  <strong>৳${(d.product.priceBDT*d.quantity).toLocaleString()}</strong>
                </div>
              `).join("")}
            </div>

            <div style="display:flex;flex-direction:column;gap:6px;font-size:0.85rem;color:#475569;">
              <div style="display:flex;justify-content:space-between;">
                <span>Subtotal</span>
                <span>৳${i.toLocaleString()}</span>
              </div>
              <div style="display:flex;justify-content:space-between;">
                <span>Shipping Fee</span>
                <span>${t===0?'<strong style="color:#059669;">FREE</strong>':`৳${t}`}</span>
              </div>
              ${a>0?`
                <div style="display:flex;justify-content:space-between;color:#059669;font-weight:700;">
                  <span>Voucher Discount</span>
                  <span>−৳${a.toLocaleString()}</span>
                </div>
              `:""}
              <div style="display:flex;justify-content:space-between;font-size:1.15rem;font-weight:800;color:#0D382A;border-top:1px dashed #CBD5E1;padding-top:8px;margin-top:4px;">
                <span>Total Amount</span>
                <span>৳${r.toLocaleString()}</span>
              </div>
            </div>

            <button class="btn-place-order" id="btn-confirm-place-order">
              Place Order (অর্ডার নিশ্চিত করুন) • ৳${r.toLocaleString()}
            </button>

            <div style="font-size:0.72rem;text-align:center;color:#64748B;">
              By confirming, you support ethical rural agriculture and women artisans of Bangladesh.
            </div>
          </div>

        </div>
      </div>
    `,(s=document.getElementById("btn-checkout-to-cart"))==null||s.addEventListener("click",()=>{this.openCart()}),e.querySelectorAll(".payment-method-card").forEach(d=>{d.addEventListener("click",()=>{const g=d.getAttribute("data-method");g&&(this.selectedPaymentMethod=g,this.renderCheckoutView(e))})}),(o=document.getElementById("btn-confirm-place-order"))==null||o.addEventListener("click",()=>{this.processOrderPlacement(e,r,i,t,a,n)})}processOrderPlacement(e,i,t,a,r,n){var h;const s=`GB-ORD-${Math.floor(1e4+Math.random()*9e4)}`,o=`REDX-GB-${Math.floor(1e4+Math.random()*9e4)}`,g={id:s,date:"17 Sep 2026",status:"on_the_way",statusBengali:"পথিমধ্যে রয়েছে (চলমান ডেলিভারি)",statusBadgeClass:"badge-transit",items:[...this.cart],subtotal:t,shippingFee:a,discount:r,total:i,paymentMethod:this.selectedPaymentMethod,paymentDetails:`${this.selectedPaymentMethod} (${n.phone}) - TxnID: GB${Math.floor(1e5+Math.random()*9e5)}`,shippingAddress:`${n.address}, ${n.city}`,recipientPhone:n.phone,trackingNumber:o,courierPartner:"RedX Express Logistics",estimatedDelivery:"Tomorrow, by 4:00 PM",trackingSteps:[{label:"Order Confirmed",bengaliLabel:"অর্ডার গৃহীত হয়েছে",time:"Just Now",completed:!0},{label:"Packed by Village Cooperative",bengaliLabel:"পণ্য প্রস্তুত ও প্যাকিং",time:"In Progress",completed:!0,active:!0},{label:"In Transit / On The Way",bengaliLabel:"পথিমধ্যে রয়েছে (ঢাকা হাবের পথে)",time:"Expected Tonight",completed:!1},{label:"Out for Delivery",bengaliLabel:"ডেলিভারির জন্য বের হবে",time:"Tomorrow 10:00 AM",completed:!1},{label:"Delivered",bengaliLabel:"পৌঁছে গেছে",time:"Pending",completed:!1}]};this.orders.unshift(g),this.saveOrders(),this.cart=[],this.appliedVoucher=null,this.saveCart(),e.innerHTML=`
      <div class="order-success-wrap">
        <div class="success-check-icon">✓</div>
        <h2 style="font-size: 1.6rem; font-weight: 800; color: #0D382A; margin: 0;">
          Order Placed Successfully!
        </h2>
        <div style="font-family: 'Tiro Bangla', serif; font-size: 1.05rem; color: #059669;">
          আপনার অর্ডারটি সফলভাবে গৃহীত হয়েছে।
        </div>
        <div class="success-order-id">
          Order ID: ${s} • Tracking: ${o}
        </div>
        <div style="background:#F8FAFC;border:1px solid #E2E8F0;padding:16px 24px;border-radius:12px;max-width:480px;text-align:left;font-size:0.88rem;color:#334155;line-height:1.6;">
          <div><strong>Payment Method:</strong> ${this.selectedPaymentMethod} (Verified)</div>
          <div><strong>Delivery Address:</strong> ${n.address}, ${n.city}</div>
          <div><strong>Estimated Arrival:</strong> Tomorrow, by 4:00 PM via RedX Express</div>
        </div>

        <button class="btn-track-profile" id="btn-success-track">
          🚚 Track in Buyer Profile (অর্ডার ট্র্যাক করুন)
        </button>
      </div>
    `,(h=document.getElementById("btn-success-track"))==null||h.addEventListener("click",()=>{this.openBuyerProfile("on_the_way")})}renderProfileView(e){const i=this.buyerSession||k,t=this.orders.filter(s=>s.status==="on_the_way"),a=this.orders.filter(s=>s.status==="delivered"),r=this.orders.filter(s=>s.status==="cancelled");e.innerHTML=`
      <div class="profile-view">
        
        <!-- Profile Header Card -->
        <div class="profile-header-card">
          <div class="profile-user-left">
            <div class="profile-big-avatar">${i.name.charAt(0)}</div>
            <div class="profile-user-info">
              <h3>${i.name}</h3>
              <p>✉️ ${i.email} • 📞 ${i.phone}</p>
              <div class="profile-status-pill">✓ Verified Buyer (যাচাইকৃত ক্রেতা)</div>
            </div>
          </div>
          <div style="display:flex;gap:12px;text-align:right;">
            <div style="background:rgba(255,255,255,0.12);padding:8px 16px;border-radius:10px;">
              <div style="font-size:1.25rem;font-weight:800;">${t.length}</div>
              <div style="font-size:0.72rem;color:#D1FAE5;">On The Way</div>
            </div>
            <div style="background:rgba(255,255,255,0.12);padding:8px 16px;border-radius:10px;">
              <div style="font-size:1.25rem;font-weight:800;">${a.length}</div>
              <div style="font-size:0.72rem;color:#D1FAE5;">Delivered</div>
            </div>
          </div>
        </div>

        <!-- 4 Profile Tabs -->
        <div class="profile-tabs-bar" id="profile-tabs-bar">
          <button class="profile-tab-btn ${this.currentProfileTab==="on_the_way"?"active":""}" data-tab="on_the_way">
            🚚 On The Way (পথিমধ্যে ডেলিভারি) [${t.length}]
          </button>
          <button class="profile-tab-btn ${this.currentProfileTab==="delivered"?"active":""}" data-tab="delivered">
            ✅ Previous Purchases (সম্পন্ন অর্ডার) [${a.length}]
          </button>
          <button class="profile-tab-btn ${this.currentProfileTab==="cancelled"?"active":""}" data-tab="cancelled">
            ❌ Cancelled Orders (বাতিলকৃত অর্ডার) [${r.length}]
          </button>
          <button class="profile-tab-btn ${this.currentProfileTab==="settings"?"active":""}" data-tab="settings">
            ⚙️ Settings (অ্যাকাউন্ট সেটিংস)
          </button>
        </div>

        <!-- Tab Content Body -->
        <div id="profile-tab-body">
          <!-- Rendered by renderProfileTabContent() -->
        </div>

      </div>
    `,this.renderProfileTabContent();const n=document.getElementById("profile-tabs-bar");n==null||n.addEventListener("click",s=>{const o=s.target.closest(".profile-tab-btn");if(!o)return;const d=o.getAttribute("data-tab");n.querySelectorAll(".profile-tab-btn").forEach(g=>g.classList.remove("active")),o.classList.add("active"),this.currentProfileTab=d,this.renderProfileTabContent()})}renderProfileTabContent(){var i,t;const e=document.getElementById("profile-tab-body");if(e){if(this.currentProfileTab==="on_the_way"){const a=this.orders.filter(r=>r.status==="on_the_way");if(a.length===0){e.innerHTML=`
          <div class="market-empty-state">
            <div style="font-size:2.5rem;">🚚</div>
            <h4>No orders currently on the way</h4>
            <p>Your newly placed shipments will show real-time tracking here.</p>
          </div>
        `;return}e.innerHTML=`
        <div class="orders-list-stack">
          ${a.map(r=>`
            <div class="buyer-order-card">
              <div class="order-card-header">
                <div class="order-id-group">
                  <span>Order #${r.id}</span>
                  <span class="order-date-label">Placed: ${r.date}</span>
                </div>
                <span class="${r.statusBadgeClass}">
                  <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#2563EB;animation:pulse 1.2s infinite;"></span>
                  ${r.statusBengali}
                </span>
              </div>

              <!-- Multi-step Live Tracking Timeline -->
              <div class="tracking-timeline-box">
                <div class="timeline-courier-row">
                  <div>
                    <strong>Partner:</strong> ${r.courierPartner||"Express Courier"} • 
                    <strong>Track ID:</strong> <code>${r.trackingNumber||"N/A"}</code>
                  </div>
                  <div style="color:#2563EB;">ETA: ${r.estimatedDelivery||"Tomorrow"}</div>
                </div>

                <div class="timeline-stepper">
                  ${(r.trackingSteps||[]).map((n,s)=>`
                    <div class="timeline-step ${n.completed?"completed":""} ${n.active?"active":""}">
                      <div class="step-dot">${n.completed?"✓":s+1}</div>
                      <div class="step-text">${n.label}</div>
                      <div class="step-time">${n.time}</div>
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Items in shipment -->
              <div class="order-items-detail-list">
                ${r.items.map(n=>`
                  <div class="order-item-mini-row">
                    <div style="display:flex;align-items:center;gap:10px;">
                      <img src="${n.product.image}" style="width:36px;height:36px;border-radius:6px;object-fit:cover;" />
                      <div>
                        <strong>${n.product.name}</strong>
                        <div style="font-size:0.75rem;color:#64748B;">Qty: ${n.quantity} • Seller: ${n.product.artisanName}</div>
                      </div>
                    </div>
                    <strong>৳${(n.product.priceBDT*n.quantity).toLocaleString()}</strong>
                  </div>
                `).join("")}
              </div>

              <div class="order-card-footer">
                <div>
                  <span>Total Paid: <strong>৳${r.total.toLocaleString()}</strong></span>
                  <span style="font-size:0.75rem;color:#64748B;margin-left:8px;">(${r.paymentMethod})</span>
                </div>
                <button class="btn-order-action" data-action="call-partner" data-courier="${r.courierPartner}">
                  📞 Call Courier Agent
                </button>
              </div>
            </div>
          `).join("")}
        </div>
      `,e.querySelectorAll('[data-action="call-partner"]').forEach(r=>{r.addEventListener("click",()=>{this.showToast("Calling RedX delivery dispatcher (+880 9612-445566)...")})})}else if(this.currentProfileTab==="delivered"){const a=this.orders.filter(r=>r.status==="delivered");e.innerHTML=`
        <div class="orders-list-stack">
          ${a.map(r=>{var n;return`
            <div class="buyer-order-card">
              <div class="order-card-header">
                <div class="order-id-group">
                  <span>Order #${r.id}</span>
                  <span class="order-date-label">Delivered on: ${r.date}</span>
                </div>
                <span class="${r.statusBadgeClass}">✓ ${r.statusBengali}</span>
              </div>

              <div class="order-items-detail-list">
                ${r.items.map(s=>`
                  <div class="order-item-mini-row">
                    <div style="display:flex;align-items:center;gap:10px;">
                      <img src="${s.product.image}" style="width:36px;height:36px;border-radius:6px;object-fit:cover;" />
                      <div>
                        <strong>${s.product.name}</strong>
                        <div style="font-size:0.75rem;color:#64748B;">Qty: ${s.quantity} • ${s.product.artisanName}</div>
                      </div>
                    </div>
                    <strong>৳${(s.product.priceBDT*s.quantity).toLocaleString()}</strong>
                  </div>
                `).join("")}
              </div>

              <div class="order-card-footer">
                <div>Total: <strong>৳${r.total.toLocaleString()}</strong> via ${r.paymentMethod}</div>
                <div style="display:flex;gap:8px;">
                  <button class="btn-order-action" data-action="buy-again" data-id="${(n=r.items[0])==null?void 0:n.product.id}">
                    🔄 Buy Again
                  </button>
                  <button class="btn-order-action" data-action="rate-order">
                    ★ Leave 5★ Rating
                  </button>
                </div>
              </div>
            </div>
          `}).join("")}
        </div>
      `,e.querySelectorAll('[data-action="buy-again"]').forEach(r=>{r.addEventListener("click",()=>{const n=r.getAttribute("data-id");n&&(this.addToCart(n),this.openCart())})}),e.querySelectorAll('[data-action="rate-order"]').forEach(r=>{r.addEventListener("click",()=>{this.showToast("Thank you! 5★ review recorded for village producer.")})})}else if(this.currentProfileTab==="cancelled"){const a=this.orders.filter(r=>r.status==="cancelled");e.innerHTML=`
        <div class="orders-list-stack">
          ${a.map(r=>{var n;return`
            <div class="buyer-order-card">
              <div class="order-card-header">
                <div class="order-id-group">
                  <span>Order #${r.id}</span>
                  <span class="order-date-label">Cancelled on: ${r.date}</span>
                </div>
                <span class="${r.statusBadgeClass}">✕ ${r.statusBengali}</span>
              </div>

              <div style="padding:14px 18px;background:#FFF5F5;border-bottom:1px solid #FED7D7;font-size:0.85rem;color:#C53030;">
                <div><strong>Reason:</strong> ${r.cancelReason||"Requested by customer"}</div>
                <div style="margin-top:4px;color:#2F855A;font-weight:700;"><strong>Refund Status:</strong> ${r.refundStatus||"Refunded in full to original method"}</div>
              </div>

              <div class="order-items-detail-list">
                ${r.items.map(s=>`
                  <div class="order-item-mini-row">
                    <div style="display:flex;align-items:center;gap:10px;">
                      <img src="${s.product.image}" style="width:36px;height:36px;border-radius:6px;object-fit:cover;" />
                      <div>
                        <strong>${s.product.name}</strong>
                        <div style="font-size:0.75rem;color:#64748B;">Amount: ৳${r.total.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                `).join("")}
              </div>

              <div class="order-card-footer">
                <span style="color:#64748B;font-size:0.8rem;">100% Refund Complete</span>
                <button class="btn-order-action" data-action="reorder-fresh" data-id="${(n=r.items[0])==null?void 0:n.product.id}">
                  Re-order Fresh Batch
                </button>
              </div>
            </div>
          `}).join("")}
        </div>
      `,e.querySelectorAll('[data-action="reorder-fresh"]').forEach(r=>{r.addEventListener("click",()=>{const n=r.getAttribute("data-id");n&&(this.addToCart(n),this.openCart())})})}else if(this.currentProfileTab==="settings"){const a=this.buyerSession||k;e.innerHTML=`
        <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:14px;padding:20px;">
          <h4 style="font-size:1.05rem;font-weight:800;color:#0D382A;margin-bottom:16px;">
            Account & Delivery Preferences
          </h4>

          <div class="settings-form-grid">
            <div class="settings-group">
              <label>Full Name</label>
              <input type="text" class="settings-input" id="set-buyer-name" value="${a.name}" />
            </div>
            <div class="settings-group">
              <label>Contact Phone</label>
              <input type="tel" class="settings-input" id="set-buyer-phone" value="${a.phone}" />
            </div>
            <div class="settings-group">
              <label>Email Address</label>
              <input type="email" class="settings-input" id="set-buyer-email" value="${a.email}" />
            </div>
            <div class="settings-group">
              <label>Default Shipping Address</label>
              <input type="text" class="settings-input" id="set-buyer-addr" value="${a.address}" />
            </div>
            <div class="settings-group">
              <label>City / Division</label>
              <input type="text" class="settings-input" id="set-buyer-city" value="${a.city}" />
            </div>
            <div class="settings-group">
              <label>Preferred Payment Gateway</label>
              <select class="settings-input" id="set-buyer-payment">
                <option value="bKash" ${a.preferredPayment==="bKash"?"selected":""}>bKash (বিকাশ)</option>
                <option value="Nagad" ${a.preferredPayment==="Nagad"?"selected":""}>Nagad (নগদ)</option>
                <option value="Cash on Delivery" ${a.preferredPayment==="Cash on Delivery"?"selected":""}>Cash on Delivery</option>
              </select>
            </div>
          </div>

          <div class="settings-actions-row">
            <button class="btn-order-action" id="btn-save-settings" style="background:#0D382A;color:#FFF;padding:10px 20px;">
              Save Profile Changes
            </button>
            <button class="btn-order-action" id="btn-logout-buyer" style="color:#DC2626;border-color:#FCA5A5;">
              Sign Out (লগআউট)
            </button>
          </div>
        </div>
      `,(i=document.getElementById("btn-save-settings"))==null||i.addEventListener("click",()=>{var o,d,g;const r=(o=document.getElementById("set-buyer-name"))==null?void 0:o.value,n=(d=document.getElementById("set-buyer-phone"))==null?void 0:d.value,s=(g=document.getElementById("set-buyer-addr"))==null?void 0:g.value;if(this.buyerSession){this.buyerSession.name=r,this.buyerSession.phone=n,this.buyerSession.address=s,localStorage.setItem("gb_buyer_session",JSON.stringify(this.buyerSession)),this.showToast("Profile settings saved successfully!");const h=document.getElementById("market-view-container");h&&this.renderProfileView(h)}}),(t=document.getElementById("btn-logout-buyer"))==null||t.addEventListener("click",()=>{this.logoutBuyer()})}}}addToCart(e,i=1,t=!0){const a=y.find(n=>n.id===e);if(!a)return;const r=this.cart.find(n=>n.product.id===e);r?r.quantity+=i:this.cart.push({product:a,quantity:i}),this.saveCart(),t&&this.showToast(`✓ Added ${a.name} to Shopping Bag!`)}updateCartQuantity(e,i){const t=this.cart.find(a=>a.product.id===e);if(t)if(t.quantity+=i,t.quantity<=0)this.removeFromCart(e);else{this.saveCart();const a=document.getElementById("market-view-container");a&&this.activeView==="cart"&&this.renderCartView(a)}}removeFromCart(e){this.cart=this.cart.filter(t=>t.product.id!==e),this.saveCart();const i=document.getElementById("market-view-container");i&&this.activeView==="cart"&&this.renderCartView(i),this.showToast("Item removed from Shopping Bag")}applyVoucher(e){if(!e)return;e==="GRAM20"?(this.appliedVoucher={code:"GRAM20",discountBDT:20},this.showToast("🎉 Voucher GRAM20 applied! ৳20 discount deducted.")):e==="EID100"?(this.appliedVoucher={code:"EID100",discountBDT:100},this.showToast("🎉 Voucher EID100 applied! ৳100 discount deducted.")):e==="FARMERLOVE"?(this.appliedVoucher={code:"FARMERLOVE",discountBDT:50},this.showToast("🎉 Voucher FARMERLOVE applied! ৳50 discount deducted.")):this.showToast("Invalid voucher code. Try GRAM20 or EID100.");const i=document.getElementById("market-view-container");i&&this.activeView==="cart"&&this.renderCartView(i)}updateCartBadge(){const e=this.cart.reduce((a,r)=>a+r.quantity,0),i=document.getElementById("top-cart-badge");i&&(i.textContent=e.toString());const t=document.getElementById("market-cart-count");t&&(t.textContent=e.toString())}showToast(e){let i=document.getElementById("market-toast");i||(i=document.createElement("div"),i.id="market-toast",i.className="market-toast-notification",document.body.appendChild(i)),i.textContent=e,i.classList.add("active"),setTimeout(()=>{i==null||i.classList.remove("active")},2400)}}class I{constructor(e){l(this,"portalModal",null);l(this,"closeBtn",null);l(this,"navFarmerLink",null);l(this,"joinFarmerBtn",null);l(this,"tabFarmer",null);l(this,"tabArtisan",null);l(this,"contentFarmer",null);l(this,"contentArtisan",null);l(this,"dashboard",null);l(this,"btnDemoFarmer",null);l(this,"btnDemoArtisan",null);l(this,"formFarmer",null);l(this,"formArtisan",null);l(this,"btnProducerLogout",null);l(this,"btnProducerNew",null);l(this,"chatBtn",null);l(this,"onToastNotification");this.onToastNotification=e}init(){this.bindElements(),this.setupEventListeners()}bindElements(){this.portalModal=document.getElementById("farmer-women-modal"),this.closeBtn=document.getElementById("close-farmer-modal"),this.navFarmerLink=document.getElementById("nav-farmer-women-link"),this.joinFarmerBtn=document.getElementById("cta-join-farmer"),this.tabFarmer=document.getElementById("tab-btn-farmer"),this.tabArtisan=document.getElementById("tab-btn-artisan"),this.contentFarmer=document.getElementById("tab-content-farmer"),this.contentArtisan=document.getElementById("tab-content-artisan"),this.dashboard=document.getElementById("producer-dashboard"),this.btnDemoFarmer=document.getElementById("btn-demo-farmer"),this.btnDemoArtisan=document.getElementById("btn-demo-artisan"),this.formFarmer=document.getElementById("form-farmer-login"),this.formArtisan=document.getElementById("form-artisan-login"),this.btnProducerLogout=document.getElementById("btn-producer-logout"),this.btnProducerNew=document.getElementById("btn-producer-new-project"),this.chatBtn=document.getElementById("hero-chat-btn")}setupEventListeners(){var e,i,t,a,r,n,s,o,d,g,h,f;(e=this.navFarmerLink)==null||e.addEventListener("click",m=>{m.preventDefault(),this.openPortal("farmer")}),(i=this.joinFarmerBtn)==null||i.addEventListener("click",m=>{m.preventDefault(),this.openPortal("farmer")}),(t=this.closeBtn)==null||t.addEventListener("click",()=>this.closePortal()),(a=this.tabFarmer)==null||a.addEventListener("click",()=>this.switchTab("farmer")),(r=this.tabArtisan)==null||r.addEventListener("click",()=>this.switchTab("artisan")),(n=this.btnDemoFarmer)==null||n.addEventListener("click",()=>{this.showProducerDashboard("মোঃ রফিকুল ইসলাম (Md. Rafiqul Islam)","🌾 Bio-Secure Poultry Farmer • Gazipur Upazila","Gazipur Broiler Poultry Shed #GB-2026-04","45% Backed by 12 Investors (৳1,20,000 Goal)","bKash Merchant Verified • 01712-345678"),this.notifyToast("🌾 Welcome, Md. Rafiqul Islam! Logged in as Verified Farmer.")}),(s=this.btnDemoArtisan)==null||s.addEventListener("click",()=>{this.showProducerDashboard("ফাতেমা বেগম (Fatima Begum)","🧵 Rural Nakshi Kantha Artisan • Islampur, Jamalpur","Jamalpur Women Artisan Handicraft Collective","24 Hand-Stitched Quilts Live in Marketplace","Nagad Verified • 01823-456789"),this.notifyToast("🧵 Welcome, Fatima Begum! Logged in as Verified Rural Artisan.")}),(o=this.formFarmer)==null||o.addEventListener("submit",m=>{var b,D,B;m.preventDefault();const u=((b=document.getElementById("farmer-name"))==null?void 0:b.value.trim())||"Md. Rafiqul Islam",c=((D=document.getElementById("farmer-district"))==null?void 0:D.value)||"Gazipur",w=((B=document.getElementById("farmer-category"))==null?void 0:B.value)||"Poultry";this.showProducerDashboard(u,`🌾 ${w} Producer • ${c} Hub`,`${c} ${w} Development Project`,"Under Agronomist Review (GPS Verified)","bKash Account Verified"),this.notifyToast(`🌾 Proposal submitted successfully! Welcome, ${u}.`)}),(d=this.formArtisan)==null||d.addEventListener("submit",m=>{var b,D,B;m.preventDefault();const u=((b=document.getElementById("artisan-name"))==null?void 0:b.value.trim())||"Fatima Begum",c=((D=document.getElementById("artisan-district"))==null?void 0:D.value)||"Jamalpur",w=((B=document.getElementById("artisan-craft"))==null?void 0:B.value)||"Nakshi Kantha";this.showProducerDashboard(u,`🧵 ${w} Artisan • ${c}`,`${c} Handcrafted Collection`,"Active Marketplace Storefront","bKash / Nagad Verified"),this.notifyToast(`🧵 Store opened successfully! Welcome, ${u}.`)}),(g=this.btnProducerLogout)==null||g.addEventListener("click",()=>{this.resetProducerState(),this.notifyToast("Logged out of Producer account")}),(h=this.btnProducerNew)==null||h.addEventListener("click",()=>{this.switchTab("farmer"),this.notifyToast("Ready for new project submission")}),(f=this.chatBtn)==null||f.addEventListener("click",()=>{this.notifyToast("GramBondhon Advisory: Investment & Producer support team is online.")})}openPortal(e="farmer"){this.portalModal&&(this.portalModal.classList.add("active"),document.body.style.overflow="hidden",this.switchTab(e))}closePortal(){this.portalModal&&(this.portalModal.classList.remove("active"),document.body.style.overflow="")}switchTab(e){var i,t,a,r;this.dashboard&&(this.dashboard.style.display="none"),e==="farmer"?((i=this.tabFarmer)==null||i.classList.add("active"),(t=this.tabArtisan)==null||t.classList.remove("active"),this.contentFarmer&&(this.contentFarmer.style.display="block"),this.contentArtisan&&(this.contentArtisan.style.display="none")):((a=this.tabArtisan)==null||a.classList.add("active"),(r=this.tabFarmer)==null||r.classList.remove("active"),this.contentArtisan&&(this.contentArtisan.style.display="block"),this.contentFarmer&&(this.contentFarmer.style.display="none"))}showProducerDashboard(e,i,t,a,r){var m;this.contentFarmer&&(this.contentFarmer.style.display="none"),this.contentArtisan&&(this.contentArtisan.style.display="none"),this.dashboard&&(this.dashboard.style.display="block");const n=document.getElementById("dash-producer-name"),s=document.getElementById("dash-producer-role"),o=document.getElementById("dash-project-title"),d=document.getElementById("dash-funding-status"),g=document.getElementById("dash-payout-wallet");n&&(n.textContent=e),s&&(s.textContent=i),o&&(o.textContent=t),d&&(d.textContent=a),g&&(g.textContent=r);const h=document.getElementById("nav-login-btn"),f=document.getElementById("nav-user-badge");h&&(h.style.display="none"),f&&(f.style.display="inline-flex",f.innerHTML=`
        <span class="user-pill-avatar" style="background:#0D382A;color:#FFF;border-radius:50%;width:26px;height:26px;display:inline-flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;">🌾</span>
        <span class="user-pill-name" style="font-weight:600;font-size:0.85rem;color:#0D382A;">${e.split(" ")[0]} (Producer)</span>
        <button class="user-logout-btn" id="logout-producer-nav" title="Logout" style="background:none;border:none;cursor:pointer;margin-left:4px;">✕</button>
      `,(m=document.getElementById("logout-producer-nav"))==null||m.addEventListener("click",u=>{u.stopPropagation(),this.resetProducerState(),this.notifyToast("Logged out of Producer session")}))}resetProducerState(){this.dashboard&&(this.dashboard.style.display="none"),this.switchTab("farmer");const e=document.getElementById("nav-login-btn"),i=document.getElementById("nav-user-badge");e&&(e.style.display="inline-block"),i&&(i.style.display="none")}notifyToast(e){this.onToastNotification&&this.onToastNotification(e)}}class F{constructor(){l(this,"heroSection");l(this,"joinAsInvestor");l(this,"activeProjects");l(this,"marketplace");l(this,"joinAsFarmer");this.heroSection=new E,this.activeProjects=new A,this.marketplace=new N,this.joinAsFarmer=new I(this.showToast.bind(this)),this.joinAsInvestor=new L(this.activeProjects,this.showToast.bind(this))}init(){this.heroSection.init(),this.activeProjects.init(),this.marketplace.init(),this.joinAsFarmer.init(),this.joinAsInvestor.init(),this.setupNavbar(),this.setupProjectsAndHeroButtons(),this.setupModalEscapeKeys(),this.setupSmoothScroll(),console.log("🌾 GramBondhon (গ্রামীণ বন্ধন) initialized successfully with sector modules.")}setupNavbar(){const e=document.getElementById("nav-login-btn"),i=document.getElementById("nav-user-badge"),t=document.getElementById("mobile-menu-toggle");v.onAuthChange(a=>{var r;a?(e&&(e.style.display="none"),i&&(i.style.display="inline-flex",i.innerHTML=`
            <span class="user-pill-avatar" style="background:#0D382A;color:#FFF;border-radius:50%;width:26px;height:26px;display:inline-flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;">TR</span>
            <span class="user-pill-name" style="font-weight:600;font-size:0.85rem;color:#0D382A;">${a.name}</span>
            <button class="user-logout-btn" id="logout-btn" title="Logout" style="background:none;border:none;cursor:pointer;margin-left:4px;">✕</button>
          `,(r=document.getElementById("logout-btn"))==null||r.addEventListener("click",n=>{n.stopPropagation(),v.logout(),this.showToast("Logged out successfully")}))):(e&&(e.style.display="inline-block"),i&&(i.style.display="none"))}),e==null||e.addEventListener("click",a=>{a.preventDefault(),v.clearPendingProject(),this.joinAsInvestor.openInvestorModal()}),t==null||t.addEventListener("click",()=>{const a=document.getElementById("projects");a&&a.scrollIntoView({behavior:"smooth"})})}setupProjectsAndHeroButtons(){const e=document.getElementById("btn-view-all-projects");e==null||e.addEventListener("click",t=>{t.preventDefault(),this.activeProjects.toggleShowAllProjects();const a=this.activeProjects.isShowingAll();this.showToast(a?"Showing all 30 verified Bangladeshi projects":"Showing top 4 projects")});const i=document.getElementById("close-project-detail");i==null||i.addEventListener("click",()=>{this.activeProjects.closeProjectDetailsModal()})}setupModalEscapeKeys(){document.addEventListener("keydown",e=>{e.key==="Escape"&&(this.activeProjects.closeAuthModal(),this.activeProjects.closeProjectDetailsModal(),this.marketplace.closeMarketplaceModal(),this.joinAsFarmer.closePortal())}),document.querySelectorAll(".modal-backdrop").forEach(e=>{e.addEventListener("click",i=>{i.target===e&&(e.classList.remove("active"),document.body.style.overflow="")})})}setupSmoothScroll(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",i=>{const t=e.getAttribute("href");if(!t||t==="#")return;const a=document.querySelector(t);a&&(i.preventDefault(),a.scrollIntoView({behavior:"smooth"}))})})}showToast(e){const i=document.getElementById("toast-notification"),t=document.getElementById("toast-message");!i||!t||(t.textContent=e,i.classList.add("show"),setTimeout(()=>{i.classList.remove("show")},4e3))}}document.addEventListener("DOMContentLoaded",()=>{new F().init()});
