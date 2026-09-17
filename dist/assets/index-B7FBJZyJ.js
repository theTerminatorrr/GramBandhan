var R=Object.defineProperty;var E=(h,e,a)=>e in h?R(h,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):h[e]=a;var l=(h,e,a)=>E(h,typeof e!="symbol"?e+"":e,a);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();class j{constructor(){l(this,"currentUser",null);l(this,"pendingProjectId",null);l(this,"listeners",[]);this.loadPersistedSession()}loadPersistedSession(){try{const e=localStorage.getItem("grambandhan_investor_session");e&&(this.currentUser=JSON.parse(e))}catch{this.currentUser=null}}isAuthenticated(){return this.currentUser!==null}getUser(){return this.currentUser}setPendingProject(e){this.pendingProjectId=e}getPendingProject(){return this.pendingProjectId}clearPendingProject(){this.pendingProjectId=null}login(e,a,i){const t={name:i||e.split("@")[0].replace("."," ").replace(/\b\w/g,r=>r.toUpperCase()),email:e,phone:"+880 1711-234567",nidVerified:!0,portfolioValueBDT:15e4};this.currentUser=t;try{localStorage.setItem("grambandhan_investor_session",JSON.stringify(t))}catch(r){console.warn("LocalStorage unavailable",r)}return this.notifyListeners(),t}demoLogin(){return this.login("tariq.rahman@investor.bd","demo1234","Tariq Rahman")}logout(){this.currentUser=null;try{localStorage.removeItem("grambandhan_investor_session")}catch(e){console.warn("LocalStorage unavailable",e)}this.notifyListeners()}onAuthChange(e){return this.listeners.push(e),e(this.currentUser),()=>{this.listeners=this.listeners.filter(a=>a!==e)}}notifyListeners(){for(const e of this.listeners)e(this.currentUser)}}const v=new j,k=[{id:1,title:"Paddy Seedlings Cultivation • ফসলী ধানের চারা রোপণ",subtitle:"Replacing predatory microcredit usury with transparent, asset-backed agricultural partnership contracts.",tag:"Zero Usury / 0% Riba",image:"/images/farmer-rice-planting.jpg",alt:"Bangladeshi farmer planting emerald rice seedlings in sunlit paddy waters",caption:"Rangpur & Bogura • High-Yield Boro Rice"},{id:2,title:"Eco Jute & Bamboo Homeware • সোনালী আঁশ ও বাঁশ শিল্প",subtitle:"Reviving Bengal’s golden fiber and cane basketry for zero-plastic sustainable global living.",tag:"Eco Handicrafts Mission",image:"/images/jute-bamboo-women.jpg",alt:"Village women weaving golden fiber jute bags and natural bamboo baskets",caption:"Kurigram & Faridpur • Golden Fiber Jute Artisans"},{id:3,title:"Highland Organic Tea Gardens • শ্রীমঙ্গলের সবুজ চা বাগান",subtitle:"Smallholder green tea & citrus plantations producing export-grade whole leaf harvest under Halal profit sharing.",tag:"Highland Agro Export",image:"/images/highland-tea.jpg",alt:"Lush rolling green tea gardens of Sreemangal with tea pluckers in morning sun",caption:"Panchagarh & Sreemangal • Highland Organic Tea"},{id:4,title:"Empowering Rural Growth Through Ethical Investment",subtitle:"Connecting global ethical investors with local farmers to build a sustainable, interest-free future for rural communities.",tag:"100% Halal & Asset-Backed",image:"/images/hero-bangladesh-farming.jpg",alt:"Bangladeshi farmer plowing stepped rice paddy with oxen under golden morning sunlight",caption:"Sylhet & Bogura Valley • Traditional Boro Rice Farming"},{id:5,title:"Sun-Dried Red Chilli Harvest • লাল মরিচ শুকানো ও বাছাই",subtitle:"Empowering rural women farmers with direct post-harvest drying facilities and guaranteed spice market linkages.",tag:"Authentic Bangladeshi Agriculture",image:"/images/hero-chilli-drying.jpg",alt:"Bangladeshi village women sorting and sun-drying vibrant red chillies on jute mats in rural fields",caption:"Bogura & Jamalpur • Sun-Dried Red Chilli Harvest"},{id:6,title:"Rajshahi Tree-Ripened Mangoes • রাজশাহীর ফরমালিনমুক্ত আম",subtitle:"Premium chemical-free paper-bagged Amrapali and Fazli orchards generating high seasonal harvest profits.",tag:"High Seasonal Return",image:"/images/rajshahi-mango-harvest.jpg",alt:"Farmers harvesting ripe mangoes in Rajshahi orchard during golden morning",caption:"Charghat, Rajshahi • Organic Mango Orchards"}],S=[{id:"proj-chilli-bogura",name:"Red Chilli farming - 1",bengaliName:"বগুড়া ও জামালপুর উন্নত জাতের লাল মরিচ চাষ",category:"crops",location:"Bogura & Jamalpur",district:"বগুড়া • Sariakandi, Bogura",image:"/images/red-chilli-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:64e4,fundingGoalBDT:8e5,minInvestmentBDT:2e4,potentialReturn:"15.5% – 18.2%",bengaliReturn:"১৫.৫% – ১৮.২% প্রতি ৩ মাস",returnRangePercent:[15.5,18.2],duration:"24 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 23,100 – ৳ 23,640",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"মরিচ চাষি সমবায় (Bogura Chilli Farmers)",producerRole:"Lead Producer & Field Director",cooperativeInfo:"Bogura Char Agriculture Alliance",shortStory:"High-yield sun-dried red chillies produced on fertile Jamuna riverbanks with guaranteed corporate procurement by top spices brands.",fullDescription:"Supplies high-yield drought-tolerant chili seedlings, bio-fertilizers, and clean solar drying tarpaulins to 24 river-island farmers. Guaranteed purchase agreements with leading spice brands in Bangladesh.",profitSharingRatio:"65% Chilli Grower / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% মরিচ চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Payout upon post-drying bulk sale.","Aflatoxin-free moisture testing verified before delivery.","Direct purchase agreements with certified spice millers."],verificationChecklist:["Field inspection of Jamuna char farmland completed","Solar drying floor and moisture control certified","Corporate supply agreement signed with national spice processors"]},{id:"proj-potato-munshiganj",name:"Munshiganj Organic Potato Harvest",bengaliName:"মুন্সীগঞ্জ উন্নত জাতের গোল আলু প্রকল্প",category:"crops",location:"Munshiganj Hub",district:"মুন্সীগঞ্জ • Tongibari, Munshiganj",image:"/images/munshiganj-potato-harvest.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:58e4,fundingGoalBDT:75e4,minInvestmentBDT:1e4,potentialReturn:"16.0% – 19.2%",bengaliReturn:"১৬.০% – ১৯.২% প্রতি ৪ মাস",returnRangePercent:[16,19.2],duration:"26 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 11,600 – ৳ 11,920",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"মোঃ বাবুল হোসেন ও কৃষক দল",producerRole:"Chief Potato Cultivator",cooperativeInfo:"Padma Basin Potato Growers Samity",shortStory:"Disease-free certified seed potatoes grown in silt-rich soil of Munshiganj with direct cold-storage preservation.",fullDescription:"Finances certified Diamant and Cardinal seed tubers, natural compost fertilization, and climate-controlled micro-cold storage to avoid mid-season market distress sales.",profitSharingRatio:"65% Potato Farmer / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% আলু চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month crop cycle payout.","Cold storage warehouse receipts held as financial collateral.","Quality sorting and grading completed at packing facility."],verificationChecklist:["Upazila Agriculture Officer verified seed origin","Soil nutrient and irrigation availability audited","Warehouse cold room temperature logs integrated"]},{id:"proj-beter-jhuri",name:"Beter Jhuri & Bamboo Craft Collective",bengaliName:"সিলেট ও জামালপুর বেতের ঝুড়ি ও হ্যান্ডব্যাগ সমবায়",category:"handicrafts",location:"Sylhet & Jamalpur",district:"সিলেট • Gowainghat, Sylhet",image:"/images/beter-jhuri-bag.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:42e4,fundingGoalBDT:6e5,minInvestmentBDT:7500,potentialReturn:"14.5% – 17.0%",bengaliReturn:"১৪.৫% – ১৭.০% প্রতি ৪ মাস",returnRangePercent:[14.5,17],duration:"21 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 8,585 – ৳ 8,775",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"সুফিয়া খাতুন ও ২৮ নারী কারিগর",producerRole:"Master Artisan & Cooperative Head",cooperativeInfo:"Surma Cane & Bamboo Women Guild",shortStory:"Preserving heritage cane weaving with stylish eco-friendly handbags, shopping baskets, and artisanal storage bins.",fullDescription:"Empowers 28 rural women artisans with bulk treated cane (বেত) and bamboo splits. Products are finished with natural plant dyes and sold to export boutiques and premium domestic outlets.",profitSharingRatio:"70% Women Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% নারী কারিগর / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Batch settlement upon boutique distribution.","Weekly advance fair-wage stipends for artisans.","Zero synthetic plastic in all woven goods."],verificationChecklist:["Artisan workshops physically inspected and certified","Quality control guidelines verified for export standards","Mobile banking verification for each individual artisan"]},{id:"proj-poultry-gazipur",name:"Sustainable Poultry Cluster",bengaliName:"টেকসই ব্রয়লার ও বাণিজ্যিক পোল্ট্রি খামার",category:"livestock",location:"Gazipur Agro Hub",district:"গাজীপুর • Gazipur, Dhaka",image:"/images/sustainable-poultry.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:48e4,fundingGoalBDT:8e5,minInvestmentBDT:7500,potentialReturn:"15.5% – 18.2%",bengaliReturn:"১৫.৫% – ১৮.২% বার্ষিক মুনাফা",returnRangePercent:[15.5,18.2],duration:"28 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 8,660 – ৳ 8,865",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"Md. Delwar Hossain & 6 Farmers",producerRole:"Managing Farm Director",cooperativeInfo:"Gazipur Eco-Broiler Growers Association",shortStory:"Modern bio-secure poultry facility in Gazipur producing antibiotic-free broiler meat with automated bell drinkers and organic grain feeding.",fullDescription:"This verified poultry project provides working capital for day-old high-grade chicks, bio-fermented grain feed, veterinary vaccinations, and automated temperature-controlled sheds. Meat is sold directly to vetted Dhaka supermarket chains, returning 65% of net profits to the grower and 35% to investors under an ethical Mudarabah agreement.",profitSharingRatio:"65% Poultry Grower / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% পোল্ট্রি খামারি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Estimated payout upon 60-day batch sale.","Veterinary clearance certificates updated weekly.","Direct-to-wholesale corporate contracts secured.","Asset-backed by live flock and equipment."],verificationChecklist:["Site inspected by Gazipur Upazila Livestock Officer","Bio-security fencing & clean water borehole confirmed","Corporate supply agreement with Shwapno & Meena Bazar verified","Digital batch ledger linked with GramBondhon portal"]},{id:"proj-fish-mymensingh",name:"Freshwater Rui-Katla Aquaculture",bengaliName:"ময়মনসিংহ রুপালি রুই ও কাতলা মাছ চাষ",category:"fisheries",location:"Mymensingh Aquaculture Hub",district:"ময়মনসিংহ • Trishal, Mymensingh",image:"/images/freshwater-fish-culture.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:6e5,fundingGoalBDT:9e5,minInvestmentBDT:12e3,potentialReturn:"17.5% – 21.0%",bengaliReturn:"১৭.৫% – ২১.০% প্রতি ৬ মাস",returnRangePercent:[17.5,21],duration:"32 Days Left",durationMonths:6,periodText:"6 Months",totalReturnBDT:"৳ 14,100 – ৳ 14,520",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"আব্দুল মোমেন ও মৎস্যচাষি দল",producerRole:"Lead Fishery Specialist",cooperativeInfo:"Brahmaputra Fishery Cooperative",shortStory:"Commercial freshwater carp aquaculture in clean earthen ponds with bio-floc aeration and pelleted nutritious feed.",fullDescription:"Finances fingerlings, oxygen aeration machinery, and certified fish feed for 4 interconnected ponds in Trishal. Harvested Rui, Katla, and Mrigel fish are auctioned at Kawran Bazar wholesale hub.",profitSharingRatio:"65% Fish Cultivator / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% মৎস্যচাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 6-month seasonal netting revenue settlement.","Routine water pH and dissolved oxygen lab testing.","Cold-chain insulated pickup vehicles booked for market dispatch."],verificationChecklist:["Pond ownership verified by District Fisheries Office","Water quality parameters and aeration systems tested","Wholesale commission agent auction contract validated"]},{id:"proj-mustard-manikganj",name:"Mustard & Pure Honey Apiculture",bengaliName:"মানিকগঞ্জ সরিষা ফুল ও খাঁটি মধু প্রকল্প",category:"crops",location:"Manikganj Mustard Valley",district:"মানিকগঞ্জ • Singair, Manikganj",image:"/images/mustard-honey-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:45e4,fundingGoalBDT:65e4,minInvestmentBDT:8e3,potentialReturn:"16.2% – 19.5%",bengaliReturn:"১৬.২% – ১৯.৫% প্রতি ৩ মাস",returnRangePercent:[16.2,19.5],duration:"18 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 9,295 – ৳ 9,560",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"মৌয়াল ও সরিষা চাষি সমবায়",producerRole:"Apiculture & Crop Lead",cooperativeInfo:"Dhaleshwari Honey Producers Union",shortStory:"Dual-revenue winter project: cold-pressed pungent mustard oil and raw wildflower honeycomb honey extracted by local beekeepers.",fullDescription:"Finances certified mustard seeds and 50 modern beehive wooden boxes placed in vast blooming yellow mustard fields. Generates double returns from raw honey jars and pure Ghani-pressed oil.",profitSharingRatio:"65% Farmer-Beekeeper / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% কৃষক-মৌয়াল / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Fast 90-day winter cycle turnaround.","Zero sugar adulteration certified by laboratory test.","Oil cold-pressed using traditional wooden Ghani machines."],verificationChecklist:["Beekeeping apiary boxes and centrifuge extractors audited","Mustard field acreage certified with Upazila agriculture wing","Honey purity testing verified with certified refractometer"]},{id:"proj-nakshi-rajshahi",name:"Nakshi Kantha Collective",bengaliName:"জামালপুর-রাজশাহী নকশী কাঁথা সমবায়",category:"handicrafts",location:"Islampur, Jamalpur",district:"জামালপুর ও রাজশাহী • Jamalpur, BD",image:"/images/nakshi-kantha-artisan.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:562500,fundingGoalBDT:75e4,minInvestmentBDT:7500,potentialReturn:"14.0% – 16.5%",bengaliReturn:"১৪.০% – ১৬.৫% বার্ষিক মুনাফা",returnRangePercent:[14,16.5],duration:"22 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 8,550 – ৳ 8,740",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"Rokeya Begum & 32 Artisans",producerRole:"Master Artisan & Cooperative Lead",cooperativeInfo:"Jamalpur-Rajshahi Karukriti Samity",shortStory:"Empowering 32 skilled village women to weave export-grade Nakshi Kantha quilts using pure combed cotton and azo-free natural dyes.",fullDescription:"Nakshi Kantha represents Bengal’s timeless heritage. This project bypasses middlemen to supply 32 rural artisans with bulk fine cotton, pure silk threads, and advance living stipends.",profitSharingRatio:"70% Women Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% নারী কারিগর / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Quarterly retail batch profit distribution.","Fair artisan wages disbursed weekly in advance.","Every quilt includes an artisan biographical authenticity tag."],verificationChecklist:["Artisan home looms physically validated by field coordinator","Cooperative bank account with dual-signatory verification","Export quality certification from EPB consultant"]},{id:"proj-highland-tea",name:"Highland Tea Collective",bengaliName:"পঞ্চগড় ও শ্রীমঙ্গল অর্গানিক চা বাগান",category:"crops",location:"Panchagarh & Sreemangal",district:"পঞ্চগড় • Panchagarh, Rangpur",image:"/images/highland-tea.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:72e4,fundingGoalBDT:8e5,minInvestmentBDT:1e4,potentialReturn:"16.5% – 19.5%",bengaliReturn:"১৬.৫% – ১৯.৫% বার্ষিক মুনাফা",returnRangePercent:[16.5,19.5],duration:"18 Days Left",durationMonths:6,periodText:"6 Months",totalReturnBDT:"৳ 11,650 – ৳ 11,950",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"Joynal Abedin & 18 Planters",producerRole:"Estate Field Director",cooperativeInfo:"North Bengal Organic Tea Consortium",shortStory:"Smallholder green tea terrace cultivation in Panchagarh using organic compost, solar water pumping, and whole-leaf micro-batch processing.",fullDescription:"Panchagarh is the burgeoning tea frontier of Bangladesh. This project finances whole-leaf organic tea flushes and solar-assisted drying facilities for 18 smallholder grower families.",profitSharingRatio:"60% Tea Planters / 40% Ethical Investors",investorShareText:"৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",bengaliProfitSplit:"৬০% চা চাষি / ৪০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Phased revenue settlement during peak plucking cycles.","Chemical pesticide-free organic soil certification monitored.","Fixed-price wholesale purchase commitments from European tea buyers."],verificationChecklist:["Land lease & tea garden boundary registered with Land Board","Organic soil audit confirms zero synthetic agrochemicals","Solar drying facility inspected and operational"]},{id:"proj-rajshahi-mangoes",name:"Rajshahi Organic Mangoes",bengaliName:"চারঘাট ফরমালিনমুক্ত আম্রপালি বাগান",category:"crops",location:"Charghat, Rajshahi",district:"রাজশাহী • Charghat, Rajshahi",image:"/images/rajshahi-mango-harvest.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:68e4,fundingGoalBDT:8e5,minInvestmentBDT:8e3,potentialReturn:"17.0% – 20.5%",bengaliReturn:"১৭.০% – ২০.৫% মৌসুমি মুনাফা",returnRangePercent:[17,20.5],duration:"25 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 9,360 – ৳ 9,640",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"Md. Enamul Haque & Orchard Group",producerRole:"Chief Orchardist",cooperativeInfo:"Padma Agro Fruit Producers Group",shortStory:"Chemical-free paper-bagged Amrapali and Fazli mangoes from 450 heritage trees in Charghat, shipped tree-ripe to urban consumers.",fullDescription:"Finances food-grade double-layered fruit bagging (cutting pesticide dependency by 95%), drip irrigation, and cushioned carton packaging.",profitSharingRatio:"65% Orchard Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% বাগান চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 5-month turnaround during seasonal harvest window.","Zero formalin, calcium carbide, or artificial ripening agents.","Direct-to-consumer pre-orders take care of sales volume."],verificationChecklist:["Orchard ownership verified with Charghat Sub-Registrar","Laboratory pesticide residue test report on sample fruits","Packaging and cold chain transit route finalized"]},{id:"proj-bogura-dairy",name:"Bogura Modern Dairy Hub",bengaliName:"বগুড়া উন্নত জাতের ডেইরি ও দুগ্ধ খামার",category:"livestock",location:"Sariakandi, Bogura",district:"বগুড়া • Sariakandi, Bogura",image:"/images/bogura-dairy-farm.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:63e4,fundingGoalBDT:9e5,minInvestmentBDT:15e3,potentialReturn:"15.0% – 17.8%",bengaliReturn:"১৫.০% – ১৭.৮% প্রতি ৬ মাস",returnRangePercent:[15,17.8],duration:"30 Days Left",durationMonths:6,periodText:"6 Months",totalReturnBDT:"৳ 17,250 – ৳ 17,670",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"Md. Al-Amin & 8 Dairy Farmers",producerRole:"Lead Livestock Manager",cooperativeInfo:"Jamuna Basin Dairy Collective",shortStory:"Hygienic milk chilling unit and organic silage feed cluster serving 15 village dairy producers in Bogura.",fullDescription:"Supplies high-grade silage nutrition, automated milking hygiene equipment, and bulk milk delivery contracts to regional sweetmeat confectioners.",profitSharingRatio:"60% Dairy Farmers / 40% Ethical Investors",investorShareText:"৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",bengaliProfitSplit:"৬০% ডেইরি খামারি / ৪০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Bi-monthly milk distribution settlement.","Disease and hoof health monitored bi-weekly.","Guaranteed purchase agreements with certified dairies."],verificationChecklist:["Veterinary officer certification on herd vaccination","Milk fat and SNF testing logs confirmed on digital lactometer","Chilling tank refrigeration backup generator installed"]},{id:"proj-clay-pottery",name:"Terracotta Clay Pottery Guild",bengaliName:"ধামরাই ও সাভার ঐতিহ্যবাহী মৃৎশিল্প সমবায়",category:"handicrafts",location:"Dhamrai, Dhaka",district:"ঢাকা • Dhamrai, Dhaka",image:"/images/clay-pottery.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:32e4,fundingGoalBDT:5e5,minInvestmentBDT:5e3,potentialReturn:"13.5% – 16.0%",bengaliReturn:"১৩.৫% – ১৬.০% প্রতি ৪ মাস",returnRangePercent:[13.5,16],duration:"19 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 5,675 – ৳ 5,800",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"গৌরাঙ্গ পাল ও ১২ পালপাড়া কারিগর",producerRole:"Master Sculptor & Potter",cooperativeInfo:"Dhamrai Terracotta Heritage Guild",shortStory:"Traditional terracotta cookware, curd pots (দইয়ের ভাঁড়), flower planters, and Bengali ornamental home decor.",fullDescription:"Finances purified alluvial clay, wood-fuel kilns, and electric potter wheels for Palpara artisan families in Dhamrai.",profitSharingRatio:"70% Potters / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% মৃৎশিল্পী / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month kiln batch profit settlement.","Zero lead chemical glazes; 100% organic fired terracotta.","Direct wholesale supply to sweet shops in Bogura & Dhaka."],verificationChecklist:["Kiln operation and smoke ventilation validated","Artisan registry and pottery showroom inspected","Local cooperative bank account verified"]},{id:"proj-rice-seedlings",name:"High-Yield Boro Seedlings Nursery",bengaliName:"রংপুর হাইব্রিড বোরো ধানের চারা ও ফলন",category:"crops",location:"Mithapukur, Rangpur",district:"রংপুর • Mithapukur, Rangpur",image:"/images/farmer-rice-planting.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:41e4,fundingGoalBDT:6e5,minInvestmentBDT:6e3,potentialReturn:"14.8% – 17.5%",bengaliReturn:"১৪.৮% – ১৭.৫% প্রতি ৪ মাস",returnRangePercent:[14.8,17.5],duration:"27 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 6,888 – ৳ 7,050",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"মোঃ সামসুল হক ও ১৪ কৃষক",producerRole:"Agronomist & Lead Farmer",cooperativeInfo:"North Bengal Rice Growers Forum",shortStory:"Disease-resistant high-yield Boro paddy seedlings grown in solar-irrigated seedbeds and distributed to smallholder farmers.",fullDescription:"Finances certified foundation seed from BADC, balanced micronutrient feeding, and efficient solar water pumping for dry-season rice production.",profitSharingRatio:"65% Rice Growers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% ধান চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Harvest grain weight verification upon threshing.","Registered with Upazila agriculture extension.","Disaster relief backup fund allocated in agreement."],verificationChecklist:["Certified seed lot numbers from BADC verified","Solar irrigation pump operational and audited","Farmer cooperative membership list validated"]},{id:"proj-jute-women",name:"Golden Fiber Jute & Eco Weaving",bengaliName:"ফরিদপুর সোনালী আঁশ পাট ও কারুপণ্য",category:"handicrafts",location:"Faridpur Jute Cluster",district:"ফরিদপুর • Boalmari, Faridpur",image:"/images/jute-bamboo-women.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:49e4,fundingGoalBDT:7e5,minInvestmentBDT:7e3,potentialReturn:"14.0% – 16.8%",bengaliReturn:"১৪.০% – ১৬.৮% প্রতি ৫ মাস",returnRangePercent:[14,16.8],duration:"23 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 7,980 – ৳ 8,175",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"হাসিনা বেগম ও ৪০ কারিগর",producerRole:"Cooperative President",cooperativeInfo:"Padma Golden Jute Weavers",shortStory:"Fine spun Tosha jute woven into zero-plastic shopping bags, home rugs, and braided plant hanging baskets for sustainable living.",fullDescription:"Supplies premium Tosha raw jute fibers and modernized handlooms to 40 women artisans in Faridpur, producing biodegradable export goods.",profitSharingRatio:"70% Jute Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% পাট কারিগর / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 5-month turnaround with bulk wholesale delivery.","Fair living wage stipends disbursed bi-weekly.","Biodegradable export packaging with zero chemical plastic."],verificationChecklist:["Weaving loom workshops inspected across 3 villages","Raw jute fiber moisture and tensile strength verified","Export order confirmation letter on file"]},{id:"proj-stepped-paddy",name:"Stepped Organic Paddy Cultivation",bengaliName:"বগুড়া ও দিনাজপুর সুগন্ধি ধান চাষ",category:"crops",location:"Dinajpur & Bogura",district:"দিনাজপুর • Birganj, Dinajpur",image:"/images/hero-bangladesh-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:54e4,fundingGoalBDT:75e4,minInvestmentBDT:9e3,potentialReturn:"15.2% – 18.0%",bengaliReturn:"১৫.২% – ১৮.০% প্রতি ৫ মাস",returnRangePercent:[15.2,18],duration:"29 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 10,368 – ৳ 10,620",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"মকবুল হোসেন ও কৃষক দল",producerRole:"Master Cultivator",cooperativeInfo:"Kataribhog Rice Producers Club",shortStory:"Heritage aromatic Kataribhog and Kalijira rice grown without chemical synthetic fertilizers using organic compost.",fullDescription:"Finances heirloom aromatic paddy cultivation in fertile northern plains. Milled rice is packaged in jute sacks for gourmet domestic markets and expatriate export.",profitSharingRatio:"65% Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% কৃষক / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 5-month harvest and milling cycle settlement.","Aromatic grain quality and moisture tested before packaging.","Contract farming agreement registered with Upazila board."],verificationChecklist:["Aromatic seed variety verified with BRRI researchers","Compost preparation and bio-pesticide methods inspected","Wholesale packaging facility ready for dispatch"]},{id:"proj-chilli-char-sariakandi",name:"Sariakandi River-Island Red Chilli",bengaliName:"সারিয়াকান্দি চরের লাল মরিচ সংগ্রহ",category:"crops",location:"Sariakandi Char, Bogura",district:"বগুড়া • Sariakandi, Bogura",image:"/images/red-chilli-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:72e4,fundingGoalBDT:9e5,minInvestmentBDT:12e3,potentialReturn:"16.0% – 19.0%",bengaliReturn:"১৬.০% – ১৯.০% প্রতি ৩ মাস",returnRangePercent:[16,19],duration:"15 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 13,920 – ৳ 14,280",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"মোঃ শফিকুল ইসলাম ও ২০ চর কৃষক",producerRole:"Char Agricultural Coordinator",cooperativeInfo:"Jamuna Char Farmers Collective",shortStory:"High-pungency river-silt chillies harvested across Jamuna chars and sun-dried on vast woven bamboo mats.",fullDescription:"Finances early chili seedling transplanting, safe solar dehydrator tents, and moisture-proof jute packaging for bulk supply to Dhaka grocery giants.",profitSharingRatio:"65% Char Growers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% চর চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Payout upon delivery to corporate processing hub.","Moisture level strictly capped at under 11%.","Asset backed by collected dry chili inventory."],verificationChecklist:["Char land cultivation boundaries gps-mapped","Quality solar drying tents inspected and validated","Signed invoice agreements with national spice brand"]},{id:"proj-potato-cold-rangpur",name:"Rangpur Cold Storage Seed Potato",bengaliName:"রংপুর হিমাগার বীজ আলু সংরক্ষণ ও বিতরণ",category:"crops",location:"Pirganj, Rangpur",district:"রংপুর • Pirganj, Rangpur",image:"/images/munshiganj-potato-harvest.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:51e4,fundingGoalBDT:7e5,minInvestmentBDT:8500,potentialReturn:"15.8% – 18.5%",bengaliReturn:"১৫.৮% – ১৮.৫% প্রতি ৪ মাস",returnRangePercent:[15.8,18.5],duration:"20 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 9,843 – ৳ 10,072",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"আমজাদ হোসেন ও সমবায় কৃষক",producerRole:"Cold Storage Director",cooperativeInfo:"Pirganj Farmers Seed Bank",shortStory:"Certified foundation seed potatoes stored in energy-efficient cold vaults to supply next season northern farmers.",fullDescription:"Guarantees disease-free certified foundation potato seeds for smallholders, preserving tubers during off-season heat and selling when demand peaks.",profitSharingRatio:"65% Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% আলু চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month cold storage settlement.","Temperature and humidity logged every 4 hours.","Insurance covers storage power outage or spoilage."],verificationChecklist:["Seed certification tags verified by BADC inspectors","Cold room insulation and refrigeration backup certified","Farmer purchase pre-bookings recorded"]},{id:"proj-cane-furniture-sylhet",name:"Sylhet Cane Basket & Home Craft",bengaliName:"সিলেট বেতের গৃহসজ্জা ও হস্তশিল্প",category:"handicrafts",location:"Beanibazar, Sylhet",district:"সিলেট • Beanibazar, Sylhet",image:"/images/beter-jhuri-bag.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:65e4,fundingGoalBDT:8e5,minInvestmentBDT:1e4,potentialReturn:"15.0% – 17.5%",bengaliReturn:"১৫.০% – ১৭.৫% প্রতি ৪ মাস",returnRangePercent:[15,17.5],duration:"16 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 11,500 – ৳ 11,750",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"তারেক মাহমুদ ও কারুশিল্পী দল",producerRole:"Cane Master Craftsman",cooperativeInfo:"Sylhet Cane Furniture Guild",shortStory:"Artisanal cane planters, stylish storage hampers, and sustainable home decor handwoven from natural wild forest canes.",fullDescription:"Finances seasoned natural cane poles, organic anti-termite treatments, and skilled village artisans in Sylhet crafting premium home goods for lifestyle brands.",profitSharingRatio:"70% Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% কারুশিল্পী / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Profit distribution upon boutique store consignment.","100% natural, chemical-free polishing.","Artisans receive fair wages upfront."],verificationChecklist:["Artisan workshop and raw cane seasoning area audited","Finished furniture strength and polish tested","Domestic retail showroom supply agreement confirmed"]},{id:"proj-fish-haor-sunamganj",name:"Sunamganj Haor Indigenous Fish",bengaliName:"সুনামগঞ্জ হাওরের দেশীয় মাছ সংরক্ষণ ও চাষ",category:"fisheries",location:"Tanguar Haor, Sunamganj",district:"সুনামগঞ্জ • Tahirpur, Sunamganj",image:"/images/freshwater-fish-culture.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:715e3,fundingGoalBDT:85e4,minInvestmentBDT:11e3,potentialReturn:"18.0% – 21.5%",bengaliReturn:"১৮.০% – ২১.৫% প্রতি ৫ মাস",returnRangePercent:[18,21.5],duration:"22 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 12,980 – ৳ 13,365",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"আব্দুস সোবহান ও হাওর জেলে সমবায়",producerRole:"Haor Fishery Coordinator",cooperativeInfo:"Tanguar Haor Fishermen Community",shortStory:"Native freshwater Boal, Shol, Pabda, and Ayre fish reared in community-protected sanctuary enclosures in Sunamganj haor basin.",fullDescription:"Finances deep natural water enclosure pens, live organic food supply, and eco-harvesting protocols to conserve endangered indigenous fish varieties while earning high premiums.",profitSharingRatio:"65% Fishermen / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% মৎস্যজীবী / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 5-month seasonal harvest settlement.","Sanctuary regulations respected; no undersized fish netted.","Transported live in aerated water tanks to premium Dhaka markets."],verificationChecklist:["Haor community enclosure license confirmed","Live fish transportation water tank and oxygen pump verified","Daily catch log audited by local fisheries staff"]},{id:"proj-honey-sundarbans",name:"Sundarbans Coastal Mangrove Honey",bengaliName:"সুন্দরবন প্রাকৃতিক মৌয়াল মধু সংগ্রহ",category:"crops",location:"Shyamnagar, Satkhira",district:"সাতক্ষীরা • Shyamnagar, Satkhira",image:"/images/mustard-honey-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:39e4,fundingGoalBDT:5e5,minInvestmentBDT:6500,potentialReturn:"16.5% – 19.8%",bengaliReturn:"১৬.৫% – ১৯.৮% প্রতি ৩ মাস",returnRangePercent:[16.5,19.8],duration:"14 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 7,570 – ৳ 7,785",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"মৌয়াল সমবায় সমিতি",producerRole:"Forest Honey Cooperative Leader",cooperativeInfo:"Sundarbans Mouyal Kalyan Samity",shortStory:"Pure raw Khalsi and Goran flower honey harvested by traditional Mouyals with safety gear and glass jar packaging.",fullDescription:"Provides protective beekeeping gear, non-destructive harvesting training, and food-grade glass bottling facilities. Pure raw honey is sold directly to consumers.",profitSharingRatio:"70% Mouyals / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% মৌয়াল / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Payout upon harvest batch bottling.","100% pure raw unpasteurized honey with natural pollen.","BSTI and lab chemical purity certificates guaranteed."],verificationChecklist:["Forest Department collection permit verified","Laboratory sugar and moisture test passed","Sterilized glass bottling line inspected"]},{id:"proj-dairy-sirajganj",name:"Sirajganj Baghabari Dairy Cooperative",bengaliName:"সিরাজগঞ্জ বাঘাবাড়ী দুগ্ধ খামার সমবায়",category:"livestock",location:"Shahjadpur, Sirajganj",district:"সিরাজগঞ্জ • Shahjadpur, Sirajganj",image:"/images/bogura-dairy-farm.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:99e4,fundingGoalBDT:12e5,minInvestmentBDT:18e3,potentialReturn:"15.2% – 18.0%",bengaliReturn:"১৫.২% – ১৮.০% প্রতি ৬ মাস",returnRangePercent:[15.2,18],duration:"31 Days Left",durationMonths:6,periodText:"6 Months",totalReturnBDT:"৳ 20,736 – ৳ 21,240",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"আনিসুর রহমান ও দুগ্ধ সমবায়",producerRole:"Dairy Cooperative Secretary",cooperativeInfo:"Baghabari Milk Producers Society",shortStory:"Lush bathan-grazing cows yielding high-butterfat pure milk processed for sweetmeat and ghee production.",fullDescription:"Finances balanced cattle nutrition, veterinary disease prevention, and chilled storage for smallholder dairy farmers in the famous Baghabari milk zone.",profitSharingRatio:"60% Dairy Farmers / 40% Ethical Investors",investorShareText:"৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",bengaliProfitSplit:"৬০% খামারি / ৪০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Bi-weekly milk sale revenue disbursements.","Veterinary doctor conducts health checks every 10 days.","Milk purchased directly under long-term contract with sweet makers."],verificationChecklist:["Bathan pasture grazing rights verified","Milking hygiene and stainless-steel transport cans certified","Daily milk fat testing ledger linked to portal"]},{id:"proj-pottery-rajshahi",name:"Terracotta Garden Planters & Tiles",bengaliName:"রাজশাহী টেরাকোটা বাগানপাত্র ও টালি সমবায়",category:"handicrafts",location:"Paba, Rajshahi",district:"রাজশাহী • Paba, Rajshahi",image:"/images/clay-pottery.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:36e4,fundingGoalBDT:5e5,minInvestmentBDT:6e3,potentialReturn:"14.0% – 16.5%",bengaliReturn:"১৪.০% – ১৬.৫% প্রতি ৪ মাস",returnRangePercent:[14,16.5],duration:"24 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 6,840 – ৳ 6,990",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"রমেশ পাল ও কুমার কারিগর দল",producerRole:"Chief Terracotta Craftsman",cooperativeInfo:"Padma Clay Artisans Society",shortStory:"Weather-resistant hand-molded terracotta architectural tiles, planter pots, and traditional water pitchers.",fullDescription:"Supports 16 rural potter families in Rajshahi with fine red silt clay and energy-efficient kilns, supplying urban landscaping nurseries and architects.",profitSharingRatio:"70% Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% কারিগর / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month kiln batch distribution.","Breakage insurance included in logistics budget.","Zero lead chemical glaze."],verificationChecklist:["Artisan village workshop verified by local union council","Finished product fire-baking hardness tested","Direct order receipts from nursery association confirmed"]},{id:"proj-chilli-comilla",name:"Chandpur & Comilla Naga Chilli",bengaliName:"কুমিল্লা ও চাঁদপুর বোম্বাই ও নাগা মরিচ চাষ",category:"crops",location:"Faridganj, Chandpur",district:"চাঁদপুর • Faridganj, Chandpur",image:"/images/red-chilli-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:84e4,fundingGoalBDT:1e6,minInvestmentBDT:14e3,potentialReturn:"16.5% – 19.5%",bengaliReturn:"১৬.৫% – ১৯.৫% প্রতি ৪ মাস",returnRangePercent:[16.5,19.5],duration:"17 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 16,310 – ৳ 16,730",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"মজিবুর রহমান ও কৃষক সমিতি",producerRole:"Specialty Chili Grower",cooperativeInfo:"Meghna Agro Spices Forum",shortStory:"Export-grade intensely aromatic Naga Morich (Ghost Pepper) cultivated under micro-mesh netting for export to London and Middle East.",fullDescription:"Finances protected net houses, organic drip fertigation, and padded export crates for premium high-capsaicin fresh chili peppers.",profitSharingRatio:"65% Growers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% মরিচ চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Harvest settlements every 30 days during harvest peak.","Export air-freight logistics partner on standby.","Complete phytosanitary lab testing guaranteed."],verificationChecklist:["Net house shading and drip irrigation operational","Export quarantine phytosanitary clearance verified","International freight booking order logged"]},{id:"proj-potato-bogura",name:"Shibganj Diamond Potato Harvest",bengaliName:"শিবগঞ্জ ডায়মন্ড আলু সরাসরি রফতানি প্রকল্প",category:"crops",location:"Shibganj, Bogura",district:"বগুড়া • Shibganj, Bogura",image:"/images/munshiganj-potato-harvest.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:617500,fundingGoalBDT:85e4,minInvestmentBDT:9500,potentialReturn:"15.5% – 18.2%",bengaliReturn:"১৫.৫% – ১৮.২% প্রতি ৪ মাস",returnRangePercent:[15.5,18.2],duration:"22 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 10,972 – ৳ 11,229",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"খোন্দকার মোস্তফা ও আলু চাষি দল",producerRole:"Field Director",cooperativeInfo:"Bogura Agro Potato Exporters Club",shortStory:"Export-standard Diamant potatoes grown in rich Karatoya soil for fresh supermarket supply and potato chip processors.",fullDescription:"Provides certified seeds and pest-resistant organic spray protocols to 18 farmers in Bogura. Crop is harvested and packaged in breathable jute sacks.",profitSharingRatio:"65% Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month farmgate delivery payout.","Sorting and grading by diameter standards.","Zero synthetic chemical dusting."],verificationChecklist:["Field soil and fertilizer balance certified by DAE","Storage shed ventilated with digital thermometers","Contract agreement with food processing buyers verified"]},{id:"proj-shitolpati-sylhet",name:"Traditional Shitol Pati Cane Mat",bengaliName:"মৌলভীবাজার শীতল পাটি ও বেতের দোলনা সমবায়",category:"handicrafts",location:"Rajnagar, Moulvibazar",district:"মৌলভীবাজার • Rajnagar, Sylhet",image:"/images/beter-jhuri-bag.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:48e4,fundingGoalBDT:6e5,minInvestmentBDT:8e3,potentialReturn:"14.2% – 16.8%",bengaliReturn:"১৪.২% – ১৬.৮% প্রতি ৪ মাস",returnRangePercent:[14.2,16.8],duration:"19 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 9,136 – ৳ 9,344",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"জয়া রানী দে ও কারিগর দল",producerRole:"UNESCO Heritage Artisan Lead",cooperativeInfo:"Sylhet Shitol Pati Weavers Society",shortStory:"UNESCO-recognized handwoven Murta cane mats that naturally stay cool in summer, paired with woven cane cradle baskets.",fullDescription:"Finances raw Murta plant cane harvesting and water-soaking for 25 women artisans preserving Bengal’s world-famous Shitol Pati heritage.",profitSharingRatio:"70% Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% কারিগর / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Quarterly export consignment payout.","Authentic certified Murta cane strips.","Fair wages credited to mobile wallets."],verificationChecklist:["Heritage artisan family lineage and skills audited","Murta reed plantation inventory checked","Craft exhibition sales partner confirmed"]},{id:"proj-prawn-khulna",name:"Khulna Bagda & Galda Shrimps",bengaliName:"খুলনা লবণাক্ত মিষ্টি জলের গলদা চিংড়ি প্রকল্প",category:"fisheries",location:"Paikgachha, Khulna",district:"খুলনা • Paikgachha, Khulna",image:"/images/freshwater-fish-culture.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:13e5,fundingGoalBDT:16e5,minInvestmentBDT:2e4,potentialReturn:"18.5% – 22.0%",bengaliReturn:"১৮.৫% – ২২.০% প্রতি ৫ মাস",returnRangePercent:[18.5,22],duration:"28 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 23,700 – ৳ 24,400",returnTypeTag:"Variable Return",riskLevel:"Medium-High",producerName:"মোঃ গোলাম মোস্তফা ও ঘের মালিক সমবায়",producerRole:"Lead Shrimp Farmer",cooperativeInfo:"Sundarbans Coastal Aquaculture Society",shortStory:"Organic SPF post-larvae giant freshwater prawns reared in brackish water gher enclosures with mangrove water exchange.",fullDescription:"Supplies certified disease-free PL seeds, organic feed, and water salinity control to 8 shrimp farmers in Khulna, producing premium seafood.",profitSharingRatio:"65% Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% চিংড়ি চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 5-month harvest turnaround.","Antibiotic-free laboratory verification.","Direct purchase agreement with export processing plant."],verificationChecklist:["Gher dike structural strength and water gate certified","PCR laboratory report on zero viral pathogen in seeds","Processing plant export agreement verified"]},{id:"proj-mustard-tangail",name:"Tangail Maghi Mustard Cold-Press",bengaliName:"টাঙ্গাইল মাঘী সরিষা ও খাঁটি ঘানি তেল সমবায়",category:"crops",location:"Mirzapur, Tangail",district:"টাঙ্গাইল • Mirzapur, Tangail",image:"/images/mustard-honey-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:46e4,fundingGoalBDT:6e5,minInvestmentBDT:7500,potentialReturn:"16.0% – 18.8%",bengaliReturn:"১৬.০% – ১৮.৮% প্রতি ৩ মাস",returnRangePercent:[16,18.8],duration:"16 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 8,700 – ৳ 8,910",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"আব্দুল কাদের ও সরিষা খামারি দল",producerRole:"Mustard Mill Manager",cooperativeInfo:"Tangail Ghani Oil Producers Club",shortStory:"Winter Maghi mustard seeds cold-pressed slowly in wooden mortar Ghanis to retain full aroma and zero chemical residues.",fullDescription:"Finances local farmers to grow indigenous Maghi mustard seeds and operate slow wooden cold presses, delivering pure pungent mustard oil to health-conscious consumers.",profitSharingRatio:"65% Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% কৃষক / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 90-day winter crop and pressing cycle.","Zero synthetic color or chemical solvents.","Delivered in food-grade tin containers."],verificationChecklist:["Cold-press wooden ghani machines inspected","Mustard seed purity and low moisture audited","Food safety clearance certificate verified"]},{id:"proj-poultry-narsingdi",name:"Narsingdi Sonali Free-Range Poultry",bengaliName:"নরসিংদী সোনালী মুরগি ও ডিম খামার সমবায়",category:"livestock",location:"Shibpur, Narsingdi",district:"নরসিংদী • Shibpur, Narsingdi",image:"/images/sustainable-poultry.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:56e4,fundingGoalBDT:75e4,minInvestmentBDT:8e3,potentialReturn:"15.8% – 18.5%",bengaliReturn:"১৫.৮% – ১৮.৫% প্রতি ৩ মাস",returnRangePercent:[15.8,18.5],duration:"21 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 9,264 – ৳ 9,480",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"কামাল উদ্দিন ও খামারি দল",producerRole:"Managing Breeder",cooperativeInfo:"Narsingdi Free-Range Poultry Forum",shortStory:"Hardy indigenous Sonali breed chickens reared in spacious ventilated sheds with open-range outdoor foraging runs.",fullDescription:"Provides certified day-old Sonali chicks, high-protein organic grain feed, and veterinary biosecurity. Meat and eggs are sold directly to Dhaka organic food stores.",profitSharingRatio:"65% Poultry Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% খামারি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 75-day flock marketing settlement.","Regular vaccination recorded by livestock officer.","Asset backed by live flock inventory."],verificationChecklist:["Free-range enclosure fencing verified","Veterinary vaccine log books audited","Direct purchase agreements with retail shops on record"]},{id:"proj-tea-panchagarh",name:"Panchagarh Plainland Green Tea Estate",bengaliName:"পঞ্চগড় সমতলের অর্গানিক গ্রিন টি প্রকল্প",category:"crops",location:"Tetulia, Panchagarh",district:"পঞ্চগড় • Tetulia, Rangpur",image:"/images/highland-tea.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:78e4,fundingGoalBDT:95e4,minInvestmentBDT:10500,potentialReturn:"16.0% – 19.0%",bengaliReturn:"১৬.০% – ১৯.০% প্রতি ৬ মাস",returnRangePercent:[16,19],duration:"25 Days Left",durationMonths:6,periodText:"6 Months",totalReturnBDT:"৳ 12,180 – ৳ 12,495",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"সিরাজুল ইসলাম ও চা চাষি সমবায়",producerRole:"Estate Manager",cooperativeInfo:"Borderland Tea Planters Union",shortStory:"Himalayan foothills plainland organic tea garden in Tetulia, producing tender two-leaves-and-a-bud green tea.",fullDescription:"Finances eco-friendly organic manure, micro-sprinklers, and modern leaf rolling machinery for smallholders in northernmost Bangladesh.",profitSharingRatio:"60% Tea Planters / 40% Ethical Investors",investorShareText:"৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",bengaliProfitSplit:"৬০% চা চাষি / ৪০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 6-month plucking cycle settlement.","Certified 100% pesticide-free whole leaf.","Direct factory processing agreement with tea brand."],verificationChecklist:["Tea Board smallholder registration verified","Organic soil audit report passed","Sprinkler irrigation operational"]},{id:"proj-mango-chapainawabganj",name:"Shibganj Fazli & Amrapali Mango Orchard",bengaliName:"চাঁপাইনবাবগঞ্জ শিবগঞ্জ ফজলি আম বাগান",category:"crops",location:"Shibganj, Chapainawabganj",district:"চাঁপাইনবাবগঞ্জ • Shibganj, Rajshahi",image:"/images/rajshahi-mango-harvest.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:72e4,fundingGoalBDT:9e5,minInvestmentBDT:9e3,potentialReturn:"17.2% – 20.8%",bengaliReturn:"১৭.২% – ২০.৮% প্রতি ৫ মাস",returnRangePercent:[17.2,20.8],duration:"26 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 10,548 – ৳ 10,872",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"মোঃ শফিকুল আলম ও বাগান মালিক",producerRole:"Heritage Mango Cultivator",cooperativeInfo:"Ganges Basin Fruit Growers",shortStory:"GI-certified Fazli, Khirsapat, and Langra mangoes grown with eco fruit bagging to protect against fruit flies without chemicals.",fullDescription:"Finances tree pruning, organic soil composting, and fruit-bagging on 500 mature trees in Chapainawabganj, delivering tree-ripened fruit.",profitSharingRatio:"65% Growers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% বাগান মালিক / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Post-harvest 5-month seasonal settlement.","Chemical-free ripening in wooden crates with clean rice straw.","Direct courier shipping to pre-booked corporate consumers."],verificationChecklist:["Orchard deed and tree count physically validated","Double-layer paper bags applied and inspected","Logistics delivery fleet contract signed"]},{id:"proj-jute-crafts-dhaka",name:"Export-Grade Jute Rugs & Fashion Totes",bengaliName:"ঢাকা হস্তশিল্প বহুমুখী পাটপণ্য ও শপিং ব্যাগ",category:"handicrafts",location:"Sonargaon, Narayanganj",district:"নারায়ণগঞ্জ • Sonargaon, Dhaka",image:"/images/jute-bamboo-women.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:518400,fundingGoalBDT:72e4,minInvestmentBDT:7200,potentialReturn:"14.5% – 17.2%",bengaliReturn:"১৪.৫% – ১৭.২% প্রতি ৪ মাস",returnRangePercent:[14.5,17.2],duration:"20 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 8,244 – ৳ 8,438",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"ফরিদা ইয়াসমিন ও কারুশিল্পী দল",producerRole:"Cooperative Design Director",cooperativeInfo:"Shitolakshya Jute Artisans Samity",shortStory:"Natural braided golden jute floor rugs, beach totes, and table runners handcrafted by 35 rural women artisans.",fullDescription:"Supplies bleached and dyed export-grade jute yarns to village women artisans in Sonargaon, supplying European fair-trade boutiques.",profitSharingRatio:"70% Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% পাটশিল্পী / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month order fulfillment settlement.","Fair wages credited directly to mobile accounts.","Azo-free environmental dyes used."],verificationChecklist:["Handloom workshops in Sonargaon audited","Sample rugs passed international abrasion tests","Export purchase order on record"]}],P={id:"proj-rangpur-solar-potato",name:"Rangpur Community Solar Cold Storage & Potato Farm",bengaliName:"রংপুর কমিউনিটি সৌর কোল্ড স্টোরেজ ও আলু চাষ",category:"agriculture",location:"Mithapukur, Rangpur",district:"রংপুর • Mithapukur, Rangpur",image:"/images/hero-bangladesh-farming.jpg",badge:"Featured Project of the Month",verified:!0,fundingRaisedBDT:142e4,fundingGoalBDT:18e5,minInvestmentBDT:1e4,potentialReturn:"15.0% - 18.5% est.",bengaliReturn:"১৫.০% – ১৮.৫% বার্ষিক মুনাফা",returnRangePercent:[15,18.5],duration:"7 Months",durationMonths:7,riskLevel:"Low-Medium",producerName:"Md. Rafiqul Islam & 14 Smallholder Farmers",producerRole:"Lead Cooperative Director",cooperativeInfo:"Mithapukur Green Krishi Samity",shortStory:"Solving the seasonal distress-sale crisis by combining high-yield certified seed potato cultivation with an on-farm 50-tonne solar micro-cold store.",fullDescription:"Every winter, thousands of hardworking Rangpur potato growers face crushing losses because conventional cold storage slots are monopolized by middlemen. This game-changing project finances a shared 50-metric-tonne decentralized solar-powered cooling chamber right beside the cultivation fields. Farmers can safely hold their crop for 4 months and sell during peak market prices, increasing net profits by up to 60%.",profitSharingRatio:"65% Farmer Cooperative / 35% Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% কৃষক সমবায় / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 7-month investment tenure covering sowing, harvest, storage, and phased sale.","Solar refrigeration equipment insured against electrical/mechanical failure.","Cold room temperature and humidity monitored via live IoT sensors.","Transparent digital audit of every kilogram entered and dispatched."],verificationChecklist:["Physical land verification for cold-chamber installation completed","Technical blueprint approved by BUET-trained renewable energy consultant","Cooperative bylaws registered with Directorate of Cooperatives","Signed letter of consent from all 14 farmer families"],isFeatured:!0},y=[{id:"prod-chinigura-rice",name:"Premium Chinigura Aromatic Rice",bengaliName:"দিনাজপুরের প্রিমিয়াম সুগন্ধি চিনিগুঁড়া চাল",category:"farming",priceBDT:140,originalPriceBDT:175,discountPercent:20,unit:"1 kg",image:"/images/chinigura-rice.jpg",artisanName:"Shonali Organic Farm",artisanDistrict:"Dinajpur",craftType:"Traditional Indigenous Crop",description:"Freshly milled, fragrant non-sticky Chinigura rice cultivated with zero toxic chemical pesticides in Dinajpur.",rating:4.9,reviewsCount:142,flashDeal:!0,sellerCooperative:"Dinajpur Farmer Samity",originVillage:"Birganj, Dinajpur",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-miniket-rice",name:"Kushtia Premium Miniket Rice",bengaliName:"কুষ্টিয়ার ঝরঝরে বাসমতি মিনিকেট চাল",category:"farming",priceBDT:82,originalPriceBDT:95,discountPercent:14,unit:"1 kg",image:"/images/products/miniket-rice.jpg",artisanName:"Kushtia Agro Farmers",artisanDistrict:"Kushtia",craftType:"Paddy Milling",description:"Slender, long-grain Miniket rice processed from newly harvested paddy, perfect for daily healthy family dining.",rating:4.8,reviewsCount:88,flashDeal:!1,sellerCooperative:"Padma Agro Union",originVillage:"Kumarkhali, Kushtia",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-kalijira-rice",name:"Kalijira Gobindobhog Fine Polao Rice",bengaliName:"কালোজিরা সুগন্ধি পোলাও চাল",category:"farming",priceBDT:155,originalPriceBDT:180,discountPercent:14,unit:"1 kg",image:"/images/products/kalijira-rice.jpg",artisanName:"Barind Heritage Grain",artisanDistrict:"Naogaon",craftType:"Aromatic Paddy",description:"Miniature grain heirloom rice reserved for celebratory Polao, Biryani, and festive Bengali Payesh.",rating:4.9,reviewsCount:64,flashDeal:!0,sellerCooperative:"Naogaon Organic Growers",originVillage:"Manda, Naogaon",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-shonali-moong-dal",name:"Shonali Roasted Moong Dal",bengaliName:"সোনালী ভাজা মুগ ডাল",category:"farming",priceBDT:165,originalPriceBDT:190,discountPercent:13,unit:"1 kg",image:"/images/products/moong-dal.jpg",artisanName:"Faridpur Pulse Guild",artisanDistrict:"Faridpur",craftType:"Solar Dried Pulses",description:"Golden roasted split green gram pulse delivering signature aroma and velvety texture for traditional Bhuna Khichuri.",rating:4.8,reviewsCount:76,flashDeal:!1,sellerCooperative:"Faridpur Krishi Kallyan",originVillage:"Bhanga, Faridpur",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-munshiganj-potatoes",name:"Munshiganj Diamond Potatoes (Bagged)",bengaliName:"মুন্সীগঞ্জের ডায়মন্ড জাতের তাজা আলু",category:"farming",priceBDT:55,originalPriceBDT:65,discountPercent:15,unit:"5 kg net",image:"/images/products/real-potatoes.jpg",artisanName:"Padma River Alluvial Farms",artisanDistrict:"Munshiganj",craftType:"Cold-Storage Root Crop",description:"Firm skin, pesticide-monitored diamond potatoes direct from Munshiganj cold-storages for everyday cooking.",rating:4.7,reviewsCount:198,flashDeal:!1,sellerCooperative:"Munshiganj Potato Farmers",originVillage:"Tongibari, Munshiganj",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-pabna-red-onions",name:"Pabna Indigenous Deshi Red Onions",bengaliName:"পাবনার দেশি লাল পেঁয়াজ",category:"farming",priceBDT:85,originalPriceBDT:100,discountPercent:15,unit:"2 kg bag",image:"/images/products/red-onions.jpg",artisanName:"Pabna Alluvial Farm Alliance",artisanDistrict:"Pabna",craftType:"Pungent Deshi Onion Harvest",description:"Tight-skinned, highly aromatic small deshi onions with pungent zest essential for authentic Bengali curries.",rating:4.8,reviewsCount:134,flashDeal:!1,sellerCooperative:"Santhia Growers Samity",originVillage:"Santhia, Pabna",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-fresh-carrots",name:"Fresh Organic Farm Carrots",bengaliName:"মাঠের তাজা লাল গাজর",category:"farming",priceBDT:70,originalPriceBDT:85,discountPercent:18,unit:"1 kg bunch",image:"/images/products/fresh-carrots.jpg",artisanName:"Bogura Vegetable Farmers",artisanDistrict:"Bogura",craftType:"Organic Root Cultivation",description:"Crisp, sweet, bright orange fresh farm carrots harvested daily with green tops intact.",rating:4.8,reviewsCount:55,flashDeal:!1,sellerCooperative:"Bogura Farmers Welfare Association",originVillage:"Shibganj, Bogura",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-fresh-cucumber",name:"Fresh Green Deshi Cucumber",bengaliName:"মাঠের টাটকা দেশি শসা",category:"farming",priceBDT:60,originalPriceBDT:75,discountPercent:20,unit:"1 kg",image:"/images/products/fresh-cucumber.jpg",artisanName:"Jessore Alluvial Farms",artisanDistrict:"Jashore",craftType:"Hydro-Natural Gardening",description:"Tender, crunchy small seed deshi cucumbers freshly picked in morning dew for refreshing salads.",rating:4.7,reviewsCount:48,flashDeal:!1,sellerCooperative:"Jashore Agro Cooperative",originVillage:"Monirampur, Jashore",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-cauliflower-cabbage",name:"Fresh Farm Cauliflower Produce",bengaliName:"ক্ষেতের টাটকা ফুলকপি",category:"farming",priceBDT:65,originalPriceBDT:80,discountPercent:19,unit:"2 medium heads",image:"/images/products/cauliflower-cabbage.jpg",artisanName:"Rangpur Winter Vegetable Guild",artisanDistrict:"Rangpur",craftType:"Winter Agro Harvest",description:"Snow-white compact heads wrapped in protective crisp green leaves straight from the river alluvial soil.",rating:4.8,reviewsCount:62,flashDeal:!1,sellerCooperative:"Rangpur Agro Samity",originVillage:"Mithapukur, Rangpur",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-fresh-tomatoes",name:"Vine-Ripened Fresh Red Tomatoes",bengaliName:"গাছপাকা তাজা লাল টমেটো",category:"farming",priceBDT:75,originalPriceBDT:90,discountPercent:17,unit:"1 kg",image:"/images/products/fresh-tomatoes.jpg",artisanName:"Rajshahi Horticulture Society",artisanDistrict:"Rajshahi",craftType:"Natural Vine Ripening",description:"Firm, juicy, naturally ripened ruby-red cluster tomatoes bursting with fresh tangy-sweet flavor.",rating:4.9,reviewsCount:91,flashDeal:!0,sellerCooperative:"Rajshahi Green Growers",originVillage:"Godagari, Rajshahi",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-nakshi-kantha",name:"Jamalpur Silk-Embroidered Nakshi Kantha",bengaliName:"জামালপুরের হাতে সেলাই করা রেশমি নকশী কাঁথা",category:"handicrafts",priceBDT:3400,originalPriceBDT:4200,discountPercent:19,unit:"1 piece (7.5x5 ft)",image:"/images/nakshi-kantha-artisan.jpg",artisanName:"Jamalpur Women Artisan Guild",artisanDistrict:"Jamalpur",craftType:"Hand Embroidery",description:"100% hand-stitched over 45 days depicting traditional Bengali folk motifs, lotus ponds, and village flora.",rating:5,reviewsCount:88,flashDeal:!0,sellerCooperative:"Jamalpur Shilmoyi Mohila Samity",originVillage:"Islampur, Jamalpur",inStock:!0,deliveryDays:"3-5 Business Days"},{id:"prod-clay-pottery",name:"Handcrafted Terracotta Clay Pottery",bengaliName:"ধামরাইয়ের ঐতিহ্যবাহী মাটির শিল্প ও পাত্র",category:"handicrafts",priceBDT:380,originalPriceBDT:450,discountPercent:16,unit:"Set of 3",image:"/images/clay-pottery.jpg",artisanName:"Dhamrai Kumar Para Crafts",artisanDistrict:"Dhaka",craftType:"Clay Pottery",description:"Natural wheel-spun terracotta planters and cooking bowls hardened in traditional wood-burning village kilns.",rating:4.8,reviewsCount:71,flashDeal:!1,sellerCooperative:"Dhamrai Clay Artisans Union",originVillage:"Kumar Para, Dhamrai",inStock:!0,deliveryDays:"3-4 Business Days"},{id:"prod-jute-tote",name:"Handcrafted Golden Fiber Eco Jute Bag",bengaliName:"ফরিদপুরের সোনালী আঁশের পরিবেশবান্ধব জুট ব্যাগ",category:"handicrafts",priceBDT:450,originalPriceBDT:550,discountPercent:18,unit:"1 piece",image:"/images/jute-bamboo-women.jpg",artisanName:"Faridpur Jute Craft Women",artisanDistrict:"Faridpur",craftType:"Jute Weaving",description:"Durable, sustainable, and 100% biodegradable daily tote bag handmade by women artisans of Faridpur.",rating:4.9,reviewsCount:114,flashDeal:!0,sellerCooperative:"Faridpur Women Craft Cooperative",originVillage:"Boalmari, Faridpur",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-beter-jhuri-bag",name:"Artisan Bamboo & Cane Handwoven Basket (বেতের ঝুড়ি)",bengaliName:"হাতে বোনা প্রাকৃতিক বেতের ও বাঁশের ঝুড়ি",category:"handicrafts",priceBDT:620,originalPriceBDT:750,discountPercent:17,unit:"1 basket",image:"/images/beter-jhuri-bag.jpg",artisanName:"Sylhet Bet Shilpo Karigor",artisanDistrict:"Sylhet",craftType:"Cane Weaving",description:"Classic sturdy cane and bamboo storage basket crafted meticulously by generational cane weavers of Sylhet.",rating:4.9,reviewsCount:53,flashDeal:!1,sellerCooperative:"Sylhet Cane Artisans Cooperative",originVillage:"Gowainghat, Sylhet",inStock:!0,deliveryDays:"3-4 Business Days"},{id:"prod-rajshahi-silk-scarf",name:"Rajshahi Pure Mulberry Silk Scarf",bengaliName:"রাজশাহীর খাঁটি মালবেরি রেশম সিল্ক ওড়না",category:"handicrafts",priceBDT:1800,originalPriceBDT:2200,discountPercent:18,unit:"1 piece",image:"/images/products/silk-scarf.jpg",artisanName:"Rajshahi Resham Shilpi Samity",artisanDistrict:"Rajshahi",craftType:"Mulberry Silk Handloom",description:"Featherlight pure mulberry silk scarf woven on authentic handlooms in the silk hub of Rajshahi.",rating:4.9,reviewsCount:62,flashDeal:!0,sellerCooperative:"Padma Silk Artisans Union",originVillage:"Baneswar, Rajshahi",inStock:!0,deliveryDays:"2-4 Business Days"},{id:"prod-jute-floor-mat",name:"Hand-Braided Natural Jute Circular Rug",bengaliName:"হাতে বোনা প্রাকৃতিক সোনালী পাটের গোল পাপোশ",category:"handicrafts",priceBDT:850,originalPriceBDT:1050,discountPercent:19,unit:"1 rug (3 ft diameter)",image:"/images/products/jute-rug.jpg",artisanName:"Rangpur Jute Handicrafts Guild",artisanDistrict:"Rangpur",craftType:"Braided Jute Craft",description:"Sturdy, textured natural golden jute circular floor rug handmade by skilled women weavers.",rating:4.8,reviewsCount:47,flashDeal:!1,sellerCooperative:"Rangpur Shotoronji & Jute Samity",originVillage:"Nisbetganj, Rangpur",inStock:!0,deliveryDays:"3-4 Business Days"},{id:"prod-coconut-shell-bowls",name:"Artisan Polished Coconut Shell Bowls",bengaliName:"হস্তশিল্পের পালিশ করা নারকেলের খোলসের বাটি",category:"handicrafts",priceBDT:340,originalPriceBDT:420,discountPercent:19,unit:"Set of 2",image:"/images/products/coconut-bowl.jpg",artisanName:"Bagerhat Coconut Crafters",artisanDistrict:"Bagerhat",craftType:"Reclaimed Coconut Craft",description:"Zero-chemical, food-safe coconut oil polished eco bowls carved from reclaimed coastal coconut shells.",rating:4.7,reviewsCount:39,flashDeal:!1,sellerCooperative:"Sundarban Eco Crafts",originVillage:"Morrelganj, Bagerhat",inStock:!0,deliveryDays:"3-4 Business Days"},{id:"prod-pure-cow-ghee",name:"Village Churn Pure Deshi Cow Ghee",bengaliName:"ঘোল থেকে বিলোনো খাঁটি গাওয়া ঘি (বগুড়া)",category:"dairy",priceBDT:950,originalPriceBDT:1200,discountPercent:21,unit:"500 gm jar",image:"/images/pure-cow-ghee.jpg",artisanName:"Shonali Organic Farm",artisanDistrict:"Bogura",craftType:"Traditional Bilona Butter Churning",description:"Golden, granular aromatic ghee made from grass-fed indigenous cow milk curd churned by hand.",rating:5,reviewsCount:164,flashDeal:!0,sellerCooperative:"Bogura Dairy Farmers Cooperative",originVillage:"Sherpur, Bogura",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-bogura-mishti-doi",name:"Traditional Bogura Clay-Pot Mishti Doi",bengaliName:"বগুড়ার স্পেশাল মাটির সরা মিষ্টি দই",category:"dairy",priceBDT:280,originalPriceBDT:340,discountPercent:18,unit:"800 gm clay pot",image:"/images/products/sweet-yogurt.jpg",artisanName:"Gour Gopal Ghosh & Sons",artisanDistrict:"Bogura",craftType:"Clay-Pot Sweet Curd Setting",description:"Carmelized thick artisanal sweetened curd set in porous terracotta pots that absorb excess whey naturally.",rating:5,reviewsCount:220,flashDeal:!0,sellerCooperative:"Bogura Confectioners Association",originVillage:"Chakjadu, Bogura",inStock:!0,deliveryDays:"Same-Day / Next-Day Delivery"},{id:"prod-fresh-cow-milk",name:"Pabna Pasture-Fed Fresh Raw Cow Milk",bengaliName:"পাবনার খামারের খাঁটি তরল গরুর দুধ",category:"dairy",priceBDT:85,originalPriceBDT:100,discountPercent:15,unit:"1 liter chilled bottle",image:"/images/products/fresh-milk.jpg",artisanName:"Bhangura Dairy Farmers",artisanDistrict:"Pabna",craftType:"Grass-Fed Dairy",description:"100% unadulterated whole milk from pasture-fed deshi cows, collected and cold-chained within 2 hours.",rating:4.9,reviewsCount:145,flashDeal:!1,sellerCooperative:"Milk Vita Supplier Samity",originVillage:"Bhangura, Pabna",inStock:!0,deliveryDays:"Daily Morning 7 AM Delivery"},{id:"prod-smoked-paneer",name:"Ashtagram Heritage Smoked Paneer (পনির)",bengaliName:"কিশোরগঞ্জ অষ্টগ্রামের ঐতিহ্যবাহী স্মোকড পনির",category:"dairy",priceBDT:820,originalPriceBDT:1e3,discountPercent:18,unit:"500 gm round wheel",image:"/images/products/artisan-paneer.jpg",artisanName:"Ashtagram Paneer Karigor",artisanDistrict:"Kishoreganj",craftType:"Handcrafted Smoked Cheese",description:"Centuries-old recipe artisanal buffalo and cow milk cheese cured over wood-smoke with unique salty crust.",rating:4.8,reviewsCount:52,flashDeal:!1,sellerCooperative:"Haor Dairy & Paneer Samity",originVillage:"Ashtagram, Kishoreganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-organic-butter",name:"Sirajganj Hand-Churned White Table Butter (মাখন)",bengaliName:"সিরাজগঞ্জের খাঁটি দুধের সাদা মাখন",category:"dairy",priceBDT:420,originalPriceBDT:500,discountPercent:16,unit:"400 gm pack",image:"/images/products/country-butter.jpg",artisanName:"Shahjadpur Butter Artisans",artisanDistrict:"Sirajganj",craftType:"Traditional Churning",description:"Unsalted pure white table butter skimmed and hand-kneaded from cultured whole farm milk.",rating:4.9,reviewsCount:88,flashDeal:!1,sellerCooperative:"Shahjadpur Dairy Union",originVillage:"Shahjadpur, Sirajganj",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-tok-doi-natural",name:"Bogura Farmhouse Whole Milk Curd",bengaliName:"বগুড়ার খামারের খাঁটি দেশি দই",category:"dairy",priceBDT:140,originalPriceBDT:170,discountPercent:18,unit:"1 kg container",image:"/images/bogura-dairy-farm.jpg",artisanName:"Bogura Bio-Dairy Farms",artisanDistrict:"Bogura",craftType:"Fermented Probiotic Curd",description:"Creamy, naturally set unsweetened sour yogurt rich in gut-healthy live cultures, free from gelatins.",rating:4.8,reviewsCount:65,flashDeal:!1,sellerCooperative:"Bogura Dairy Farmers Cooperative",originVillage:"Sherpur, Bogura",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-raw-honey",name:"Raw Sundarban Multifloral Forest Honey",bengaliName:"সুন্দরবনের খাঁটি প্রাকৃতিক মধু",category:"dairy",priceBDT:650,originalPriceBDT:750,discountPercent:13,unit:"500 gm jar",image:"/images/products/raw-honey.jpg",artisanName:"Mowali Honey Collectors",artisanDistrict:"Satkhira",craftType:"Wild Honey Harvesting",description:"100% pure raw unpasteurized multifloral honey collected sustainably from deep Sundarban mangrove bee hives.",rating:5,reviewsCount:210,flashDeal:!0,sellerCooperative:"Sundarban Forest Honey Society",originVillage:"Shyamnagar, Satkhira",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-mustard-honey",name:"Organic Mustard Blossom Natural Honey",bengaliName:"সরিষা ফুলের খাঁটি প্রাকৃতিক মধু",category:"dairy",priceBDT:480,originalPriceBDT:550,discountPercent:13,unit:"500 gm jar",image:"/images/mustard-honey-farming.jpg",artisanName:"Sirajganj Bee Keepers",artisanDistrict:"Sirajganj",craftType:"Apiculture",description:"Light golden smooth natural honey collected from beehives in the blooming mustard fields of North Bengal.",rating:4.9,reviewsCount:95,flashDeal:!1,sellerCooperative:"Chalanbeel Apiculture Union",originVillage:"Ullapara, Sirajganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-river-rui",name:"River Rui Fish - Fresh Padma Catch",bengaliName:"পদ্মা নদীর তরতাজা দেশি রুই মাছ",category:"fisheries",priceBDT:620,originalPriceBDT:750,discountPercent:17,unit:"1 kg (whole cut/cleaned)",image:"/images/freshwater-fish-culture.jpg",artisanName:"Goalondo Padma Fishermen Guild",artisanDistrict:"Rajbari",craftType:"River Netting",description:"Naturally sweet wild river carp caught overnight in the flowing waters of Padma, dressed hygienically on ice.",rating:4.9,reviewsCount:138,flashDeal:!0,sellerCooperative:"Goalondo River Fishermen Union",originVillage:"Daulatdia Ghat, Rajbari",inStock:!0,deliveryDays:"Next Morning Delivery (Cold Chained)"},{id:"prod-rupchanda-pomfret",name:"Rupchanda Silver Pomfret (রূপচাঁদা)",bengaliName:"বঙ্গোপসাগরের রুপালি রূপচাঁদা মাছ",category:"fisheries",priceBDT:950,originalPriceBDT:1150,discountPercent:17,unit:"1 kg (3-4 pcs cleaned)",image:"/images/products/pomfret-fish.jpg",artisanName:"Cox's Bazar Deep Sea Trawlers",artisanDistrict:"Cox's Bazar",craftType:"Deep Sea Line Catch",description:"Pristine white-fleshed coastal silver pomfret, blast-frozen right on the boat deck to preserve ocean freshness.",rating:4.9,reviewsCount:92,flashDeal:!1,sellerCooperative:"Chittagong Coastal Fisheries Samity",originVillage:"Teknaf, Cox's Bazar",inStock:!0,deliveryDays:"2 Business Days (Dry Ice Pack)"},{id:"prod-fresh-katla",name:"Freshwater Bighead Katla Fish",bengaliName:"মিঠাপানির বিশাল কাতলা মাছ",category:"fisheries",priceBDT:580,originalPriceBDT:700,discountPercent:17,unit:"1 kg (cleaned slices)",image:"/images/products/katla-fish.jpg",artisanName:"Chalanbeel Freshwater Catch",artisanDistrict:"Natore",craftType:"Open-Water Fisheries",description:"Rich and oily sweetwater Katla caught from sprawling freshwater beels, prized for festive fish head curry.",rating:4.8,reviewsCount:68,flashDeal:!1,sellerCooperative:"Natore Fishermen Union",originVillage:"Singra, Natore",inStock:!0,deliveryDays:"Next Morning Delivery"},{id:"prod-golda-chingri",name:"Khulna Freshwater Giant Golda Chingri",bengaliName:"খুলনার ঘেরের তাজা গলদা চিংড়ি",category:"fisheries",priceBDT:1150,originalPriceBDT:1400,discountPercent:18,unit:"1 kg (8-10 pcs head-on)",image:"/images/products/golda-prawn.jpg",artisanName:"Rupsha River Prawn Growers",artisanDistrict:"Khulna",craftType:"Eco-Friendly Prawn Gher",description:"Large succulent giant freshwater prawns with rich head butter (marrow), cultivated naturally with organic feed.",rating:5,reviewsCount:175,flashDeal:!0,sellerCooperative:"Khulna Prawn Export Samity",originVillage:"Dumuria, Khulna",inStock:!0,deliveryDays:"Next Day Delivery"},{id:"prod-bagda-shrimp",name:"Satkhira Coastal Black Tiger Bagda Shrimp",bengaliName:"সাতক্ষীরার উপকূলীয় ব্ল্যাক টাইগার বাগদা চিংড়ি",category:"fisheries",priceBDT:850,originalPriceBDT:1050,discountPercent:19,unit:"1 kg (20-25 pcs)",image:"/images/products/bagda-shrimp.jpg",artisanName:"Satkhira Coastal Aquaculture",artisanDistrict:"Satkhira",craftType:"Brackish Water Aquaculture",description:"Tiger-striped tender brackish water shrimp from coastal farms near the Sundarbans, perfectly cleaned.",rating:4.8,reviewsCount:84,flashDeal:!1,sellerCooperative:"Satkhira Fish Growers Guild",originVillage:"Debhata, Satkhira",inStock:!0,deliveryDays:"Next Day Delivery"},{id:"prod-loitta-dry-shutki",name:"Cox's Bazar Organic Sun-Dried Loitta Shutki",bengaliName:"কক্সবাজারের বিষমুক্ত রোদে শুকানো লইট্টা শুঁটকি",category:"fisheries",priceBDT:650,originalPriceBDT:800,discountPercent:19,unit:"500 gm pack",image:"/images/products/dry-shutki.jpg",artisanName:"Nazirartek Shutki Mahal Artisans",artisanDistrict:"Cox's Bazar",craftType:"Chemical-Free Sun Drying",description:"Authentic, salt-brined sun-dried Loitta shutki dried on bamboo scaffolds with absolute zero toxic pesticide spray.",rating:4.9,reviewsCount:112,flashDeal:!1,sellerCooperative:"Nazirartek Shutki Producers Samity",originVillage:"Nazirartek, Cox's Bazar",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-radhuni-mustard-oil",name:"Radhuni Pure Cold-Pressed Mustard Oil",bengaliName:"ঘানিভাঙা খাঁটি সরিষার ঝাঁঝালো তেল",category:"spices",priceBDT:310,originalPriceBDT:380,discountPercent:18,unit:"1 liter glass bottle",image:"/images/products/mustard-oil.jpg",artisanName:"Natore Wooden Ghani Guild",artisanDistrict:"Natore",craftType:"Slow Cold-Press Ghani",description:"100% natural, intensely pungent cold-pressed yellow and brown mustard oil; heart of authentic Bengali cooking and pickles.",rating:5,reviewsCount:245,flashDeal:!0,sellerCooperative:"Natore Ghani Artisans Union",originVillage:"Bagatipara, Natore",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-pabna-dry-chillies-whole",name:"Pabna Sun-Dried Whole Red Chillies",bengaliName:"পাবনার রোদে শুকানো লাল মরিচ",category:"spices",priceBDT:220,originalPriceBDT:270,discountPercent:19,unit:"500 gm pack",image:"/images/red-chilli-farming.jpg",artisanName:"Santhia Spice Growers",artisanDistrict:"Pabna",craftType:"Solar Yard Drying",description:"Deep red, glossy whole sun-dried chillies dried under open sunlight; prized for smoky bhorta and curries.",rating:4.9,reviewsCount:119,flashDeal:!0,sellerCooperative:"Pabna Chilli Growers Samity",originVillage:"Santhia, Pabna",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-red-chilli-flakes",name:"Red Chilli Sun-Dried Crushed Flakes",bengaliName:"রোদে শুকানো খাঁটি লাল মরিচের গুঁড়ো ও ফ্লেক্স",category:"spices",priceBDT:160,originalPriceBDT:200,discountPercent:20,unit:"250 gm jar",image:"/images/hero-chilli-drying.jpg",artisanName:"Char Sonatola Chilli Guild",artisanDistrict:"Bogra",craftType:"Sun-Dried Stone Grinding",description:"Vibrant scarlet, fiery sun-dried riverbank hot chillies coarsely ground with natural seeds and oils intact.",rating:4.8,reviewsCount:88,flashDeal:!1,sellerCooperative:"Sonatola Chilli Producers Union",originVillage:"Sonatola, Bogura",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-fresh-red-chillies",name:"Pabna Fresh Spicy Red Chillies",bengaliName:"পাবনার ক্ষেতের টাটকা ঝাঁঝালো লাল মরিচ",category:"spices",priceBDT:70,originalPriceBDT:85,discountPercent:18,unit:"500 gm pack",image:"/images/products/green-chillies.jpg",artisanName:"Pabna Chilli Farm Alliance",artisanDistrict:"Pabna",craftType:"Fresh Harvest Pods",description:"Freshly picked pungent crimson red chillies with spicy kick for fish curries and spicy pastes.",rating:4.8,reviewsCount:65,flashDeal:!1,sellerCooperative:"Pabna Hot Pepper Society",originVillage:"Chatmohar, Pabna",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-natore-white-garlic",name:"Natore Deshi Organic White Garlic (রসুন)",bengaliName:"নাটোরের দেশি বাছাইকৃত সাদা রসুন",category:"spices",priceBDT:160,originalPriceBDT:200,discountPercent:20,unit:"1 kg mesh bag",image:"/images/products/garlic-cloves.jpg",artisanName:"Chalanbeel Garlic Farmers",artisanDistrict:"Natore",craftType:"Zero-Tillage Garlic Harvest",description:"Small pod deshi garlic cultivated through zero-tillage method, packed with pungent allicin compound.",rating:4.9,reviewsCount:94,flashDeal:!1,sellerCooperative:"Gurudaspur Farmers Guild",originVillage:"Gurudaspur, Natore",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-bengali-panch-phoron-mix",name:"Bengali Whole Spice & Seed Mix (পাঁচফোড়ন)",bengaliName:"ঐতিহ্যবাহী খাঁটি গোটা পাঁচফোড়ন মশলা",category:"spices",priceBDT:130,originalPriceBDT:160,discountPercent:19,unit:"200 gm jar",image:"/images/products/cumin-seeds.jpg",artisanName:"Panchagarh Heritage Spices",artisanDistrict:"Panchagarh",craftType:"Artisanal Spice Blending",description:"Authentic whole spice flat lay including cumin, brown mustard, fenugreek, nigella, and fennel seeds.",rating:4.9,reviewsCount:73,flashDeal:!1,sellerCooperative:"North Bengal Spice Traders",originVillage:"Tetulia, Panchagarh",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-pickling-spice-blend",name:"Traditional Bengali Pickling Spice Blend",bengaliName:"ঐতিহ্যবাহী আচার ও তরকারির গোটা মশলা",category:"spices",priceBDT:140,originalPriceBDT:175,discountPercent:20,unit:"200 gm pouch",image:"/images/products/turmeric-powder.jpg",artisanName:"Dinajpur Spice Guild",artisanDistrict:"Dinajpur",craftType:"Whole Spice Blending",description:"Aromatic blend of dried coriander seeds, crushed pepper, and herbal spices formulated for mango and olive pickles.",rating:4.8,reviewsCount:52,flashDeal:!1,sellerCooperative:"Dinajpur Spices Cooperative",originVillage:"Birganj, Dinajpur",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-organic-chia-seeds",name:"Sirajganj Cultivated Organic Chia Seeds",bengaliName:"সিরাজগঞ্জের অর্গানিক চিয়া সিড",category:"spices",priceBDT:290,originalPriceBDT:350,discountPercent:17,unit:"250 gm pack",image:"/images/products/chia-seeds.jpg",artisanName:"Sirajganj Superfood Growers",artisanDistrict:"Sirajganj",craftType:"Superfood Cultivation",description:"Cleaned, high-fiber nutritious black and grey chia seeds packed with healthy omega-3 fatty acids.",rating:4.9,reviewsCount:68,flashDeal:!1,sellerCooperative:"Chalanbeel Agro Bio-Union",originVillage:"Belkuchi, Sirajganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-yellow-mustard-seeds",name:"Indigenous Yellow Mustard Seeds (হলুদ সরিষা)",bengaliName:"দেশি বাছাইকৃত খাঁটি হলুদ সরিষা",category:"spices",priceBDT:120,originalPriceBDT:150,discountPercent:20,unit:"500 gm pack",image:"/images/products/yellow-mustard-seeds.jpg",artisanName:"Manikganj Mustard Growers",artisanDistrict:"Manikganj",craftType:"Oilseed Sorting",description:"Sun-dried golden yellow mustard seeds with mild sweet pungency, essential for shorshe ilish and pastes.",rating:4.8,reviewsCount:59,flashDeal:!1,sellerCooperative:"Manikganj Oilseed Samity",originVillage:"Singair, Manikganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-chittagong-watermelon",name:"Patiya Sweet Sugar-Baby Watermelon",bengaliName:"পটিয়ার মিষ্টি সুগার-বেবি রসালো তরমুজ",category:"fruits",priceBDT:250,originalPriceBDT:300,discountPercent:17,unit:"1 whole watermelon (4-5 kg)",image:"/images/products/watermelon.jpg",artisanName:"Patiya Coastal Belt Growers",artisanDistrict:"Chittagong",craftType:"Summer Melon Harvest",description:"Crisp crimson flesh, thin rind, high brix sweet sugar-baby watermelon naturally grown on coastal silt.",rating:4.8,reviewsCount:115,flashDeal:!0,sellerCooperative:"Patiya Farmers Union",originVillage:"Patiya, Chittagong",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-rajshahi-himsagar",name:"Rajshahi Himsagar Sweet Mango",bengaliName:"রাজশাহীর সুমিষ্ট পরিপক্ক হিমসাগর আম",category:"fruits",priceBDT:420,originalPriceBDT:500,discountPercent:16,unit:"5 kg crate",image:"/images/products/himsagar-mango.jpg",artisanName:"Charghat Heritage Orchard",artisanDistrict:"Rajshahi",craftType:"Natural Tree-Ripened Mango",description:"Fibreless, ultra-sweet golden fleshed Himsagar mangoes handpicked carefully with zero chemical ripening carbide.",rating:5,reviewsCount:260,flashDeal:!0,sellerCooperative:"Rajshahi Mango Growers Association",originVillage:"Charghat, Rajshahi",inStock:!0,deliveryDays:"Next-Day Delivery"},{id:"prod-ripe-papaya",name:"Ripe Organic Sweet Papaya",bengaliName:"নাটোরের পুষ্টিকর মিষ্টি পাকা পেঁপে",category:"fruits",priceBDT:110,originalPriceBDT:130,discountPercent:15,unit:"1.5 kg single fruit",image:"/images/products/ripe-papaya.jpg",artisanName:"Natore Organic Orchards",artisanDistrict:"Natore",craftType:"Tree-Ripened Tropical Fruit",description:"Rich orange sweet flesh, naturally vine-ripened papaya loaded with vitamin C and digestive enzymes.",rating:4.8,reviewsCount:78,flashDeal:!1,sellerCooperative:"Natore Fruit Growers Samity",originVillage:"Baraigram, Natore",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-fazli-mango",name:"Chapainawabganj Giant Fazli Mango",bengaliName:"চাঁপাইনবাবগঞ্জের ঐতিহ্যবাহী ফজলি আম",category:"fruits",priceBDT:480,originalPriceBDT:580,discountPercent:17,unit:"5 kg crate (4-5 large mangos)",image:"/images/products/fazli-mango.jpg",artisanName:"Shibganj Royal Mango Orchards",artisanDistrict:"Chapainawabganj",craftType:"Late Season Giant Mango",description:"Famous oversized succulent Fazli mangoes with pleasant tang and abundant aromatic juicy pulp.",rating:4.9,reviewsCount:145,flashDeal:!1,sellerCooperative:"Chapainawabganj Mango Growers Guild",originVillage:"Shibganj, Chapainawabganj",inStock:!0,deliveryDays:"Next-Day Delivery"},{id:"prod-amrapali-mango",name:"Naturally Tree-Ripened Amrapali Mango",bengaliName:"গাছপাকা আম্রপালি মিষ্টি আম",category:"fruits",priceBDT:450,originalPriceBDT:540,discountPercent:17,unit:"5 kg crate",image:"/images/rajshahi-mango-harvest.jpg",artisanName:"Bagha Mango Orchards",artisanDistrict:"Rajshahi",craftType:"Organic Tree Ripening",description:"Deep orange intensely sweet hybrid variety famed for its rich tropical nectar and fragrant thin peel.",rating:4.9,reviewsCount:198,flashDeal:!0,sellerCooperative:"Rajshahi Mango Growers Association",originVillage:"Bagha, Rajshahi",inStock:!0,deliveryDays:"Next-Day Delivery"},{id:"prod-sylhet-zara-lemon",name:"Sylhet Fragrant Zara Lemon (জারা লেবু)",bengaliName:"সিলেটের সুবাসিত বিখ্যাত জারা লেবু",category:"fruits",priceBDT:240,originalPriceBDT:300,discountPercent:20,unit:"Pack of 2 large lemons",image:"/images/products/zara-lemon.jpg",artisanName:"Jaintiapur Citrus Groves",artisanDistrict:"Sylhet",craftType:"Indigenous Citrus Cultivation",description:"Legendary giant Sylheti citrus with edible sweet fragrant rind, prized across Bengal for salads and tea.",rating:4.9,reviewsCount:88,flashDeal:!1,sellerCooperative:"Sylhet Citrus Farmers Union",originVillage:"Jaintiapur, Sylhet",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-chuadanga-banana",name:"Chuadanga Shobri Sweet Banana",bengaliName:"চুয়াডাঙ্গার খাঁটি সুস্বাদু সবরি কলা",category:"fruits",priceBDT:120,originalPriceBDT:150,discountPercent:20,unit:"1 dozen (12 pcs)",image:"/images/products/sweet-banana.jpg",artisanName:"Damurhuda Banana Growers",artisanDistrict:"Chuadanga",craftType:"Naturally Ripened Banana",description:"Creamy textured, sweet Shobri bananas ripened naturally without artificial heat or ethylene chemicals.",rating:4.8,reviewsCount:96,flashDeal:!1,sellerCooperative:"Chuadanga Agro Producers Guild",originVillage:"Damurhuda, Chuadanga",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-madhupur-pineapple",name:"Madhupur Giant Honey Queen Pineapple",bengaliName:"মধুপুরের রসালো হানি কুইন আনারস",category:"fruits",priceBDT:160,originalPriceBDT:200,discountPercent:20,unit:"Pack of 2 large pineapples",image:"/images/products/pineapple.jpg",artisanName:"Madhupur Garo Hill Farmers",artisanDistrict:"Tangail",craftType:"Garo Highland Pineapples",description:"Super juicy Honey Queen pineapples grown on red clay mounds of Madhupur forest, exceptionally sweet and tart.",rating:4.9,reviewsCount:165,flashDeal:!0,sellerCooperative:"Madhupur Indigenous Fruit Samity",originVillage:"Aukpara, Tangail",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-bandarban-dragon-fruit",name:"Bandarban Hilltop White Dragon Fruit",bengaliName:"বান্দরবানের পাহাড়ি ড্রাগন ফল",category:"fruits",priceBDT:360,originalPriceBDT:440,discountPercent:18,unit:"1 kg (2-3 large fruits)",image:"/images/products/dragon-fruit.jpg",artisanName:"Chimbuk Hilltop Orchards",artisanDistrict:"Bandarban",craftType:"High Altitude Dragon Fruit Farm",description:"Crisp textured sweet white dragon fruit with soft pink shell fresh-harvested from slope farms.",rating:4.8,reviewsCount:82,flashDeal:!1,sellerCooperative:"Bandarban Exotic Fruit Guild",originVillage:"Chimbuk, Bandarban",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-tangail-sweet-orange",name:"Tangail Garo Hills Deshi Sweet Malta Orange",bengaliName:"টাঙ্গাইলের পাহাড়ি মিষ্টি দেশি মাল্টা",category:"fruits",priceBDT:280,originalPriceBDT:340,discountPercent:18,unit:"2 kg bag",image:"/images/products/malta-orange.jpg",artisanName:"Garo Hills Agro Producers",artisanDistrict:"Tangail",craftType:"Citrus Orchard Cultivation",description:"Juicy, thin-skinned greenish-yellow deshi sweet malta with fresh refreshing citrus tang.",rating:4.9,reviewsCount:104,flashDeal:!1,sellerCooperative:"Tangail Fruit Samity",originVillage:"Madhupur, Tangail",inStock:!0,deliveryDays:"2-3 Business Days"}],T={name:"Tanvir Ahmed",email:"tanvir.ahmed@buyer.bd",phone:"+880 1712-889900",address:"Flat 4B, House 18, Road 11, Banani",city:"Dhaka",district:"Dhaka",preferredPayment:"bKash",memberSince:"March 2026"},C=[{id:"GB-ORD-94812",date:"15 Sep 2026",status:"on_the_way",statusBengali:"পথিমধ্যে রয়েছে (চলমান ডেলিভারি)",statusBadgeClass:"badge-transit",items:[{product:{id:"prod-chinigura-rice",name:"Premium Chinigura Aromatic Rice",bengaliName:"দিনাজপুরের প্রিমিয়াম সুগন্ধি চিনিগুঁড়া চাল",category:"farming",priceBDT:140,originalPriceBDT:175,discountPercent:20,unit:"1 kg",image:"/images/chinigura-rice.jpg",artisanName:"Shonali Organic Farm",artisanDistrict:"Dinajpur",craftType:"Traditional Indigenous Crop",description:"Freshly milled, fragrant non-sticky Chinigura rice cultivated with zero toxic chemical pesticides in Dinajpur.",rating:4.9,reviewsCount:142,flashDeal:!0,sellerCooperative:"Dinajpur Farmer Samity",originVillage:"Birganj, Dinajpur",inStock:!0,deliveryDays:"2-3 Business Days"},quantity:3},{product:{id:"prod-pure-cow-ghee",name:"Village Churn Pure Deshi Cow Ghee",bengaliName:"ঘোল থেকে বিলোনো খাঁটি গাওয়া ঘি (বগুড়া)",category:"dairy",priceBDT:950,originalPriceBDT:1200,discountPercent:21,unit:"500 gm jar",image:"/images/pure-cow-ghee.jpg",artisanName:"Shonali Organic Farm",artisanDistrict:"Bogura",craftType:"Traditional Bilona Butter Churning",description:"Golden, granular aromatic ghee made from grass-fed indigenous cow milk curd churned by hand.",rating:5,reviewsCount:164,flashDeal:!0,sellerCooperative:"Bogura Dairy Farmers Cooperative",originVillage:"Sherpur, Bogura",inStock:!0,deliveryDays:"1-2 Business Days"},quantity:1}],subtotal:1370,shippingFee:60,discount:50,total:1380,paymentMethod:"bKash",paymentDetails:"bKash Mobile: 01712-889900 (TxnID: BK9948120)",shippingAddress:"Flat 4B, House 18, Road 11, Banani, Dhaka-1213",recipientPhone:"+880 1712-889900",trackingNumber:"REDX-GB-99412",courierPartner:"RedX Express Logistics",estimatedDelivery:"Tomorrow, by 4:00 PM",trackingSteps:[{label:"Order Confirmed",bengaliLabel:"অর্ডার গৃহীত হয়েছে",time:"15 Sep, 10:30 AM",completed:!0},{label:"Picked from Dinajpur Farm",bengaliLabel:"দিনাজপুর খামার থেকে সংগৃহীত",time:"15 Sep, 04:15 PM",completed:!0},{label:"In Transit / On The Way",bengaliLabel:"পথিমধ্যে রয়েছে (ঢাকা সেন্ট্রাল হাবের পথে)",time:"16 Sep, 08:00 AM",completed:!0,active:!0},{label:"Out for Delivery",bengaliLabel:"ডেলিভারির জন্য বের হবে",time:"Expected Tomorrow, 10:00 AM",completed:!1},{label:"Delivered",bengaliLabel:"পণ্য পৌঁছে গেছে",time:"Pending",completed:!1}]},{id:"GB-ORD-88210",date:"08 Sep 2026",status:"delivered",statusBengali:"সম্পন্ন ডেলিভারি (পৌঁছে গেছে)",statusBadgeClass:"badge-delivered",items:[{product:{id:"prod-nakshi-kantha",name:"Jamalpur Silk-Embroidered Nakshi Kantha",bengaliName:"জামালপুরের ঐতিহ্যবাহী রেশম সুতার নকশী কাঁথা",category:"handicrafts",priceBDT:3450,originalPriceBDT:4200,discountPercent:18,unit:"1 piece (7.5 x 5 ft)",image:"/images/nakshi-kantha-artisan.jpg",artisanName:"Rokeya Begum",artisanDistrict:"Jamalpur",craftType:"Pure Cotton with Fine Silk Threads",description:"100% hand-stitched over 45 days depicting traditional Bengali folk motifs, lotus ponds, and village flora.",rating:4.9,reviewsCount:38,flashDeal:!0,sellerCooperative:"Jamalpur Women Artisan Guild",originVillage:"Islampur, Jamalpur",inStock:!0,deliveryDays:"3-4 Business Days"},quantity:1},{product:{id:"prod-clay-pottery",name:"Handcrafted Terracotta Clay Pottery",bengaliName:"হাতে গড়া ঐতিহ্যবাহী মাটির পাত্র",category:"handicrafts",priceBDT:950,originalPriceBDT:1200,discountPercent:21,unit:"Set of 3 pieces",image:"/images/clay-pottery.jpg",artisanName:"Gouranga Pal",artisanDistrict:"Dhamrai, Dhaka",craftType:"Fired Natural Terracotta Clay",description:"Artisanal wheel-thrown terracotta serving vessels made with indigenous river clay and wood-fired kiln finishes.",rating:4.9,reviewsCount:42,flashDeal:!1,sellerCooperative:"Dhamrai Pal Mahashava",originVillage:"Kagojinagar, Dhamrai",inStock:!0,deliveryDays:"2-3 Business Days"},quantity:1}],subtotal:4400,shippingFee:0,discount:100,total:4300,paymentMethod:"Nagad",paymentDetails:"Nagad Mobile: 01712-889900 (TxnID: NG882104)",shippingAddress:"Flat 4B, House 18, Road 11, Banani, Dhaka-1213",recipientPhone:"+880 1712-889900",trackingNumber:"STEADFAST-GB-88210",courierPartner:"Steadfast Courier",estimatedDelivery:"Delivered on 08 Sep 2026, 03:45 PM"},{id:"GB-ORD-74190",date:"28 Aug 2026",status:"delivered",statusBengali:"সম্পন্ন ডেলিভারি (পৌঁছে গেছে)",statusBadgeClass:"badge-delivered",items:[{product:{id:"prod-bogura-mishti-doi",name:"Traditional Bogura Clay-Pot Mishti Doi",bengaliName:"বগুড়ার স্পেশাল মাটির হাঁড়ির খাঁটি মিষ্টি দই",category:"dairy",priceBDT:340,originalPriceBDT:400,discountPercent:15,unit:"1 kg clay sora",image:"/images/bogura-dairy-farm.jpg",artisanName:"Gour Gopal Ghosh",artisanDistrict:"Bogura",craftType:"Slow-Smoked Clay Sora Fermentation",description:"Iconic thick caramelized sweet curd set in porous unglazed clay sora that wicks away whey for dense creamy texture.",rating:4.9,reviewsCount:195,flashDeal:!0,sellerCooperative:"Sherpur Doi Kalyan Samity",originVillage:"Sherpur, Bogura",inStock:!0,deliveryDays:"1 Business Day (Chilled Delivery)"},quantity:2},{product:{id:"prod-jute-tote",name:"Handcrafted Golden Fiber Eco Jute Bag",bengaliName:"হাতে বোনা সোনালী আঁশের পরিবেশবান্ধব জুট ব্যাগ",category:"handicrafts",priceBDT:850,originalPriceBDT:1050,discountPercent:19,unit:"1 piece",image:"/images/jute-bamboo-women.jpg",artisanName:"Shahnaz Parvin",artisanDistrict:"Faridpur",craftType:"Braided Natural Jute with Cotton Lining",description:"Durable, sustainable, and 100% biodegradable daily tote bag handmade by women artisans of Faridpur.",rating:4.8,reviewsCount:52,flashDeal:!1,sellerCooperative:"Faridpur Women Cooperative",originVillage:"Boalmari, Faridpur",inStock:!0,deliveryDays:"2-3 Business Days"},quantity:1}],subtotal:1530,shippingFee:60,discount:0,total:1590,paymentMethod:"Cash on Delivery",paymentDetails:"Cash paid on delivery to courier agent",shippingAddress:"Flat 4B, House 18, Road 11, Banani, Dhaka-1213",recipientPhone:"+880 1712-889900",trackingNumber:"PATHAO-GB-74190",courierPartner:"Pathao Courier",estimatedDelivery:"Delivered on 28 Aug 2026, 01:20 PM"},{id:"GB-ORD-61205",date:"18 Aug 2026",status:"cancelled",statusBengali:"বাতিলকৃত অর্ডার",statusBadgeClass:"badge-cancelled",items:[{product:{id:"prod-rajshahi-himsagar",name:"Rajshahi Himsagar Sweet Mango",bengaliName:"রাজশাহীর বিখ্যাত ফরমালিনমুক্ত হিমসাগর আম (১০ কেজি)",category:"fruits",priceBDT:1350,originalPriceBDT:1650,discountPercent:18,unit:"10 kg eco-crate",image:"/images/rajshahi-mango-harvest.jpg",artisanName:"Varendra Orchard Farmers",artisanDistrict:"Rajshahi",craftType:"Paper-Bagged Organic Harvest",description:"The crowning jewel of Bengal mangoes; fiberless, intensely aromatic, tree-ripened naturally without carbide.",rating:5,reviewsCount:192,flashDeal:!0,sellerCooperative:"Rajshahi Mango Growers Association",originVillage:"Bagha, Rajshahi",inStock:!0,deliveryDays:"1-2 Business Days"},quantity:1}],subtotal:1350,shippingFee:60,discount:0,total:1410,paymentMethod:"bKash",paymentDetails:"Full refund ৳1,410 sent to bKash 01712-889900 (TxnID: REF-BK61205)",shippingAddress:"Flat 4B, House 18, Road 11, Banani, Dhaka-1213",recipientPhone:"+880 1712-889900",cancelReason:"Customer requested change of shipping address to Sylhet; fresh order created.",refundStatus:"100% Refunded to bKash (Txn: REF-BK61205)"}];class L{constructor(){l(this,"currentIndex",0);l(this,"timer",null);l(this,"intervalMs",2e3);l(this,"slidesContainer",null);l(this,"dotsContainer",null);this.slidesContainer=document.getElementById("hero-slides-wrapper"),this.dotsContainer=document.getElementById("hero-dots-wrapper")}init(){!this.slidesContainer||!this.dotsContainer||(this.renderSlides(),this.renderDots(),this.setupEventListeners(),this.goToSlide(0),this.startAutoPlay())}renderSlides(){this.slidesContainer&&(this.slidesContainer.innerHTML=k.map((e,a)=>`
      <div class="hero-slide ${a===0?"active":""}" data-index="${a}" style="background-image: url('${e.image}')">
        <div class="hero-slide-overlay"></div>
      </div>
    `).join(""))}renderDots(){this.dotsContainer&&(this.dotsContainer.innerHTML=k.map((e,a)=>`
      <button class="hero-dot ${a===0?"active":""}" data-index="${a}" aria-label="Go to slide ${a+1}"></button>
    `).join(""))}setupEventListeners(){var e;(e=this.dotsContainer)==null||e.addEventListener("click",a=>{const i=a.target.closest(".hero-dot");if(i&&i.dataset.index!==void 0){const t=parseInt(i.dataset.index,10);this.goToSlide(t),this.restartAutoPlay()}})}goToSlide(e){var t,r;e<0&&(e=k.length-1),e>=k.length&&(e=0),this.currentIndex=e;const a=(t=this.slidesContainer)==null?void 0:t.querySelectorAll(".hero-slide");a==null||a.forEach((n,s)=>{n.classList.toggle("active",s===e)});const i=(r=this.dotsContainer)==null?void 0:r.querySelectorAll(".hero-dot");i==null||i.forEach((n,s)=>{n.classList.toggle("active",s===e)})}next(){this.goToSlide(this.currentIndex+1)}prev(){this.goToSlide(this.currentIndex-1)}startAutoPlay(){this.timer&&clearInterval(this.timer),this.timer=window.setInterval(()=>{this.next()},this.intervalMs)}restartAutoPlay(){this.startAutoPlay()}}class A{constructor(e,a){l(this,"closeAuthBtn",null);l(this,"formLogin",null);l(this,"demoLoginBtn",null);l(this,"becomeInvestorBtn",null);l(this,"navInvestBtn",null);l(this,"bannerCtaBtn",null);l(this,"projectsController");l(this,"onToastNotification");this.projectsController=e,this.onToastNotification=a}init(){this.bindElements(),this.setupEventListeners()}bindElements(){this.closeAuthBtn=document.getElementById("close-auth-modal"),this.formLogin=document.getElementById("form-login"),this.demoLoginBtn=document.getElementById("btn-demo-login"),this.becomeInvestorBtn=document.getElementById("cta-become-investor"),this.navInvestBtn=document.getElementById("nav-invest-btn"),this.bannerCtaBtn=document.getElementById("cta-invest-banner")}setupEventListeners(){var e,a,i,t,r,n;(e=this.becomeInvestorBtn)==null||e.addEventListener("click",()=>{const s=document.getElementById("projects");s==null||s.scrollIntoView({behavior:"smooth"})}),(a=this.navInvestBtn)==null||a.addEventListener("click",s=>{s.preventDefault(),v.clearPendingProject(),this.openInvestorModal()}),(i=this.bannerCtaBtn)==null||i.addEventListener("click",()=>{const s=document.getElementById("projects");s==null||s.scrollIntoView({behavior:"smooth"})}),(t=this.closeAuthBtn)==null||t.addEventListener("click",()=>{this.closeInvestorModal()}),(r=this.demoLoginBtn)==null||r.addEventListener("click",()=>{const s=v.demoLogin();this.handlePostAuthSuccess(s.name)}),(n=this.formLogin)==null||n.addEventListener("submit",s=>{s.preventDefault();const o=document.getElementById("login-email"),d=(o==null?void 0:o.value.trim())||"investor@grambondhon.bd",g=v.login(d);this.handlePostAuthSuccess(g.name)})}openInvestorModal(e,a=!1){this.projectsController.openAuthModal(e,a)}closeInvestorModal(){this.projectsController.closeAuthModal()}handlePostAuthSuccess(e){this.closeInvestorModal(),this.notifyToast(`Welcome, ${e}! Logged in as Verified Ethical Investor.`);const a=v.getPendingProject();a&&(v.clearPendingProject(),setTimeout(()=>{this.projectsController.openProjectDetailsModal(a)},350))}notifyToast(e){this.onToastNotification&&this.onToastNotification(e)}}class M{constructor(){l(this,"currentFilter","all");l(this,"allProjects",[...S,P]);l(this,"showAllProjects",!1)}init(){this.renderActiveProjects(),this.renderFeaturedProject(),this.setupCategoryFilters(),this.setupEventListeners()}toggleShowAllProjects(){this.showAllProjects=!this.showAllProjects,this.renderActiveProjects()}isShowingAll(){return this.showAllProjects}setupCategoryFilters(){const e=document.getElementById("project-filters");e&&e.addEventListener("click",a=>{const i=a.target.closest(".filter-pill");if(!i)return;const t=i.dataset.category;t&&(e.querySelectorAll(".filter-pill").forEach(r=>r.classList.remove("active")),i.classList.add("active"),this.currentFilter=t,this.renderActiveProjects())})}setupEventListeners(){document.addEventListener("click",e=>{const a=e.target,i=a.closest('[data-action="view-project"]');if(i){e.preventDefault();const s=i.dataset.projectId;s&&this.handleProjectClick(s,!1);return}const t=a.closest('[data-action="invest-project"]');if(t){e.preventDefault();const s=t.dataset.projectId;s&&this.handleProjectClick(s,!0);return}if(a.closest("#btn-view-all-projects")){e.preventDefault(),this.toggleShowAllProjects();return}if(a.closest("#btn-expand-projects")){e.preventDefault(),this.toggleShowAllProjects();return}})}handleProjectClick(e,a=!1){v.isAuthenticated()?this.openProjectDetailsModal(e,a):(v.setPendingProject(e),this.openAuthModal(e,a))}openAuthModal(e,a=!1){const i=document.getElementById("auth-modal");if(!i)return;const t=document.getElementById("auth-modal-project-context");if(t)if(e){const r=this.allProjects.find(n=>n.id===e);r&&(t.style.display="flex",t.innerHTML=`
            <div class="context-icon">🔒</div>
            <div class="context-text">
              <strong>Investor Access Required</strong>
              <span>Log in to review verified financial audit & profit-sharing terms for <em>"${r.name}"</em></span>
            </div>
          `)}else t.style.display="none";i.classList.add("active"),i.setAttribute("data-direct-invest",a?"true":"false"),document.body.style.overflow="hidden"}closeAuthModal(){const e=document.getElementById("auth-modal");e&&(e.classList.remove("active"),document.body.style.overflow="")}renderActiveProjects(){const e=document.getElementById("active-projects-grid");if(!e)return;let a=S;if(this.currentFilter!=="all"&&(a=S.filter(o=>o.category===this.currentFilter)),a.length===0){e.innerHTML=`
        <div class="empty-state" style="padding: 40px; text-align: center; color: #5B6E66; grid-column: 1 / -1;">
          <p>No active projects found in this category right now.</p>
        </div>
      `;return}const i=this.showAllProjects?a:a.slice(0,4);e.innerHTML=i.map(o=>{const d=Math.min(100,Math.round(o.fundingRaisedBDT/o.fundingGoalBDT*100));return`
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
      `}).join("");const t=document.getElementById("btn-view-all-projects");t&&(this.showAllProjects?t.innerHTML=`
          <span>Show Top 4</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        `:t.innerHTML=`
          <span>View All</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        `);const r=document.getElementById("projects-bottom-cta"),n=document.getElementById("btn-expand-projects-text"),s=document.getElementById("btn-expand-projects-icon");r&&n&&s&&(a.length<=4?r.style.display="none":(r.style.display="flex",this.showAllProjects?(n.textContent="Show Top 4 Projects (কমিয়ে ৪টি দেখুন)",s.innerHTML='<polyline points="18 15 12 9 6 15"></polyline>'):(n.textContent=`View All Projects (${a.length}টি প্রকল্প দেখুন)`,s.innerHTML='<polyline points="6 9 12 15 18 9"></polyline>')))}renderFeaturedProject(){const e=document.getElementById("featured-project-container");if(!e)return;const a=P,i=Math.min(100,Math.round(a.fundingRaisedBDT/a.fundingGoalBDT*100));e.innerHTML=`
      <div class="featured-project-card">
        <div class="featured-project-media">
          <img src="${a.image}" alt="${a.name}" class="featured-img" loading="lazy" />
          <span class="featured-badge">🌟 ${a.badge}</span>
        </div>

        <div class="featured-project-content">
          <div class="featured-header">
            <div class="location-tag">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${a.location}</span>
            </div>
            <div class="verified-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>100% In-Person Verified</span>
            </div>
          </div>

          <h3 class="featured-title">${a.name}</h3>
          <p class="featured-bengali">${a.bengaliName}</p>
          <p class="featured-story">${a.shortStory}</p>

          <div class="featured-producer">
            <strong>Led by:</strong> ${a.producerName} (${a.cooperativeInfo})
          </div>

          <div class="featured-progress-block">
            <div class="progress-bar-track">
              <div class="progress-bar-fill" style="width: ${i}%;"></div>
            </div>
            <div class="progress-stats">
              <span><strong>৳${a.fundingRaisedBDT.toLocaleString()}</strong> raised of ৳${a.fundingGoalBDT.toLocaleString()}</span>
              <span class="percent-tag">${i}% Funded</span>
            </div>
          </div>

          <div class="featured-metrics-row">
            <div class="f-metric">
              <span class="label">Potential Return (Est.)</span>
              <span class="val return-text">${a.potentialReturn}</span>
            </div>
            <div class="f-metric">
              <span class="label">Duration</span>
              <span class="val">${a.duration}</span>
            </div>
            <div class="f-metric">
              <span class="label">Risk Level</span>
              <span class="val">${a.riskLevel}</span>
            </div>
            <div class="f-metric">
              <span class="label">Min. Ticket</span>
              <span class="val">৳${a.minInvestmentBDT.toLocaleString()}</span>
            </div>
          </div>

          <div class="featured-actions">
            <button class="btn btn-primary btn-lg" data-action="view-project" data-project-id="${a.id}">
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
    `}openProjectDetailsModal(e,a=!1){const i=document.getElementById("project-detail-modal");if(!i)return;const t=this.allProjects.find(d=>d.id===e);if(!t)return;const r=document.getElementById("project-detail-modal-body");if(!r)return;const n=Math.min(100,Math.round(t.fundingRaisedBDT/t.fundingGoalBDT*100));r.innerHTML=`
      <div class="p-modal-content">
        <div class="p-modal-banner" style="background-image: url('${t.image}');">
          <div class="p-modal-overlay"></div>
          <div class="p-modal-badges">
            <span class="badge category">${t.badge}</span>
            <span class="badge verified">✓ Field Verified</span>
            <span class="badge demo">DEMO DATA</span>
          </div>
          <div class="p-modal-headline">
            <h2>${t.name}</h2>
            <p class="bengali">${t.bengaliName}</p>
            <div class="location-row">
              <span>📍 ${t.location}</span>
              <span>•</span>
              <span>🌾 ${t.cooperativeInfo}</span>
            </div>
          </div>
        </div>

        <div class="p-modal-grid">
          <div class="p-modal-main">
            <section class="detail-section">
              <h4>Project Narrative & Purpose • প্রকল্পের উদ্দেশ্য</h4>
              <p>${t.fullDescription}</p>
            </section>

            <section class="detail-section">
              <h4>People & Community Impact</h4>
              <div class="producer-card-inline">
                <div class="producer-avatar">👤</div>
                <div>
                  <strong>${t.producerName}</strong>
                  <p>${t.producerRole} • ${t.cooperativeInfo}</p>
                </div>
              </div>
            </section>

            <section class="detail-section">
              <h4>Verified Field Checklist</h4>
              <ul class="checklist">
                ${t.verificationChecklist.map(d=>`
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
                <strong>Agreed Ratio:</strong> ${t.profitSharingRatio}
              </div>
              <ul class="terms-list">
                ${t.terms.map(d=>`<li>• ${d}</li>`).join("")}
              </ul>
            </section>

            <section class="detail-section risk-notice">
              <h4>⚠️ Statutory Ethical Risk Notice</h4>
              <p>GramBondhon does not offer guaranteed profits or fixed interest. Returns are estimated based on seasonal market conditions, crop yield, and fair trade pricing. Capital is subject to agricultural and business risks as disclosed in the project agreement.</p>
            </section>
          </div>

          <div class="p-modal-sidebar">
            <div class="investment-summary-card ${a?"highlight-focus":""}">
              <div class="summary-header">
                <h3>Investment Terms (DEMO)</h3>
                <span class="demo-tag">ILLUSTRATIVE</span>
              </div>

              <div class="metric-row">
                <span>Target Funding</span>
                <strong>৳${t.fundingGoalBDT.toLocaleString()}</strong>
              </div>
              <div class="metric-row">
                <span>Funded So Far</span>
                <strong class="green-text">৳${t.fundingRaisedBDT.toLocaleString()} (${n}%)</strong>
              </div>

              <div class="progress-bar-track my-2">
                <div class="progress-bar-fill" style="width: ${n}%;"></div>
              </div>

              <div class="metric-row">
                <span>Price per Share</span>
                <strong>৳${t.minInvestmentBDT.toLocaleString()}</strong>
              </div>
              <div class="metric-row">
                <span>Duration</span>
                <strong>${t.duration}</strong>
              </div>
              <div class="metric-row">
                <span>Risk Assessment</span>
                <strong class="risk-badge risk-${t.riskLevel.toLowerCase().replace("-","")}">${t.riskLevel}</strong>
              </div>
              <div class="metric-row">
                <span>Projected Return</span>
                <strong class="return-highlight">${t.potentialReturn}</strong>
              </div>

              <div class="investment-calculator" id="investment-calc-box">
                <h4>Interactive Return Simulator</h4>
                <p class="calc-hint">Enter sample amount to see estimated return (DEMO):</p>
                <div class="calc-input-group">
                  <span class="currency-prefix">৳</span>
                  <input type="number" id="calc-input-amount" value="${t.minInvestmentBDT}" min="${t.minInvestmentBDT}" step="1000" />
                </div>
                <div class="quick-amounts">
                  <button class="quick-btn" data-amt="${t.minInvestmentBDT}">৳${t.minInvestmentBDT.toLocaleString()}</button>
                  <button class="quick-btn" data-amt="${t.minInvestmentBDT*2}">৳${(t.minInvestmentBDT*2).toLocaleString()}</button>
                  <button class="quick-btn" data-amt="${t.minInvestmentBDT*5}">৳${(t.minInvestmentBDT*5).toLocaleString()}</button>
                </div>

                <div class="calc-result" id="calc-result-box"></div>
              </div>

              <button class="btn btn-primary btn-block btn-invest-confirm" id="btn-confirm-investment" data-project-id="${t.id}">
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
    `,i.classList.add("active"),document.body.style.overflow="hidden",this.setupCalculatorLogic(t);const s=document.getElementById("btn-confirm-investment"),o=document.getElementById("invest-success-msg");s==null||s.addEventListener("click",()=>{s&&o&&(s.setAttribute("disabled","true"),s.textContent="Processing Investment...",setTimeout(()=>{s.style.display="none",o.style.display="block"},800))})}setupCalculatorLogic(e){const a=document.getElementById("calc-input-amount"),i=document.getElementById("calc-result-box"),t=document.querySelectorAll(".quick-btn"),r=()=>{if(!a||!i)return;let n=parseFloat(a.value);(isNaN(n)||n<0)&&(n=e.minInvestmentBDT);const[s,o]=e.returnRangePercent,d=Math.round(n*s/100),g=Math.round(n*o/100),p=n+d,f=n+g;i.innerHTML=`
        <div class="result-row">
          <span>Est. Profit (${e.potentialReturn}):</span>
          <strong class="profit-val">৳${d.toLocaleString()} – ৳${g.toLocaleString()}</strong>
        </div>
        <div class="result-row total">
          <span>Est. Total Payout:</span>
          <strong class="total-val">৳${p.toLocaleString()} – ৳${f.toLocaleString()}</strong>
        </div>
        <small class="disclaimer">*Illustrative DEMO DATA. Actual outcome depends on real harvest/production.</small>
      `};a==null||a.addEventListener("input",r),t.forEach(n=>{n.addEventListener("click",s=>{const o=s.currentTarget.getAttribute("data-amt");o&&a&&(a.value=o,r())})}),r()}closeProjectDetailsModal(){const e=document.getElementById("project-detail-modal");e&&(e.classList.remove("active"),document.body.style.overflow="")}}class I{constructor(){l(this,"cart",[]);l(this,"activeView","storefront");l(this,"selectedProductId",null);l(this,"currentCategory","all");l(this,"searchQuery","");l(this,"appliedVoucher",null);l(this,"selectedPaymentMethod","bKash");l(this,"currentProfileTab","on_the_way");l(this,"buyerSession",null);l(this,"orders",[]);l(this,"pendingAuthAction",null);l(this,"flashTimerSeconds",15512);l(this,"timerInterval",null);this.loadState()}init(){this.renderHomepagePreviewGrid(),this.setupGlobalTriggers(),this.startFlashTimer(),this.initBuyerAuthDialog()}loadState(){try{const e=localStorage.getItem("gb_market_cart");e&&(this.cart=JSON.parse(e));const a=localStorage.getItem("gb_buyer_session");if(a)this.buyerSession=JSON.parse(a);else if(v.isAuthenticated()){const t=v.getUser();t&&(this.buyerSession={name:t.name,email:t.email,phone:t.phone,address:"House 14, Road 5, Dhanmondi",city:"Dhaka",district:"Dhaka",preferredPayment:"bKash",memberSince:"March 2026"})}const i=localStorage.getItem("gb_buyer_orders");i?this.orders=JSON.parse(i):(this.orders=[...C],localStorage.setItem("gb_buyer_orders",JSON.stringify(this.orders)))}catch(e){console.warn("LocalStorage error in MarketplaceController:",e),this.orders=[...C]}}saveCart(){try{localStorage.setItem("gb_market_cart",JSON.stringify(this.cart))}catch(e){console.warn(e)}this.updateCartBadge()}saveOrders(){try{localStorage.setItem("gb_buyer_orders",JSON.stringify(this.orders))}catch(e){console.warn(e)}}startFlashTimer(){this.timerInterval&&clearInterval(this.timerInterval),this.timerInterval=setInterval(()=>{this.flashTimerSeconds>0&&(this.flashTimerSeconds--,this.updateFlashTimerDisplay())},1e3)}updateFlashTimerDisplay(){const e=Math.floor(this.flashTimerSeconds/3600),a=Math.floor(this.flashTimerSeconds%3600/60),i=this.flashTimerSeconds%60,t=o=>o.toString().padStart(2,"0"),r=document.getElementById("flash-h"),n=document.getElementById("flash-m"),s=document.getElementById("flash-s");r&&(r.textContent=t(e)),n&&(n.textContent=t(a)),s&&(s.textContent=t(i))}renderHomepagePreviewGrid(){const e=document.getElementById("marketplace-preview-grid");if(!e)return;const a=y.slice(0,4);e.innerHTML=a.map(i=>`
      <article class="market-card" data-product-id="${i.id}">
        <div class="market-card-image-wrap">
          <img src="${i.image}" alt="${i.name}" class="market-card-img" loading="lazy" />
          <span class="artisan-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            ${i.artisanName} (${i.artisanDistrict})
          </span>
          ${i.discountPercent?`<span class="market-demo-tag">-${i.discountPercent}%</span>`:""}
        </div>
        <div class="market-card-content">
          <h4 class="market-title">${i.name}</h4>
          <p class="market-bengali">${i.bengaliName}</p>
          <div class="market-price-row">
            <span class="price">৳${i.priceBDT.toLocaleString()}</span>
            <span class="craft-type">${i.craftType}</span>
          </div>
          <button class="btn btn-sm btn-market" data-action="open-marketplace" data-product-id="${i.id}">
            View in Marketplace →
          </button>
        </div>
      </article>
    `).join("")}setupGlobalTriggers(){document.addEventListener("click",e=>{const i=e.target.closest('[data-action="open-marketplace"]');if(i){e.preventDefault();const t=i.getAttribute("data-product-id");t?this.openProductDetail(t):this.openMarketplace("storefront")}}),document.addEventListener("keydown",e=>{if(e.key==="Escape"){const a=document.getElementById("marketplace-modal");a!=null&&a.classList.contains("active")&&this.closeMarketplace()}})}openMarketplace(e="storefront"){const a=document.getElementById("marketplace-modal");a&&(this.activeView=e,this.renderMarketplaceApp(),a.classList.add("active"),document.body.style.overflow="hidden")}closeMarketplace(){const e=document.getElementById("marketplace-modal");e&&(e.classList.remove("active"),document.body.style.overflow="")}openMarketplaceModal(){this.openMarketplace("storefront")}closeMarketplaceModal(){this.closeMarketplace()}openProductDetail(e){this.selectedProductId=e,this.openMarketplace("detail")}openCart(){this.openMarketplace("cart")}openCheckout(){this.requireBuyerAuth(()=>{if(this.cart.length===0){this.showToast("Your bag is empty! Add products first."),this.openMarketplace("storefront");return}this.openMarketplace("checkout")})}openBuyerProfile(e="on_the_way"){this.requireBuyerAuth(()=>{this.currentProfileTab=e,this.openMarketplace("profile")})}requireBuyerAuth(e){if(this.buyerSession){e();return}this.pendingAuthAction=e,this.openBuyerAuthDialog()}initBuyerAuthDialog(){var a,i,t;let e=document.getElementById("buyer-auth-dialog");e||(e=document.createElement("div"),e.id="buyer-auth-dialog",e.className="buyer-auth-dialog",e.innerHTML=`
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
      `,document.body.appendChild(e),(a=e.querySelector("#close-buyer-auth-btn"))==null||a.addEventListener("click",()=>{this.closeBuyerAuthDialog()}),(i=e.querySelector("#btn-demo-buyer-auth"))==null||i.addEventListener("click",()=>{this.loginBuyerAsDemo()}),(t=e.querySelector("#buyer-manual-auth-form"))==null||t.addEventListener("submit",r=>{var s;r.preventDefault();const n=((s=document.getElementById("auth-input-phone"))==null?void 0:s.value)||"+880 1712-889900";this.loginBuyerCustom(n)}))}openBuyerAuthDialog(){const e=document.getElementById("buyer-auth-dialog");e&&e.classList.add("active")}closeBuyerAuthDialog(){const e=document.getElementById("buyer-auth-dialog");e&&e.classList.remove("active"),this.pendingAuthAction=null}loginBuyerAsDemo(){this.buyerSession={...T};try{localStorage.setItem("gb_buyer_session",JSON.stringify(this.buyerSession))}catch(e){console.warn(e)}if(this.closeBuyerAuthDialog(),this.showToast(`Welcome back, ${this.buyerSession.name}!`),this.renderTopBarRight(),this.pendingAuthAction){const e=this.pendingAuthAction;this.pendingAuthAction=null,e()}}loginBuyerCustom(e){this.buyerSession={name:"Tanvir Ahmed",email:"tanvir.ahmed@buyer.bd",phone:e,address:"Flat 4B, House 18, Road 11, Banani",city:"Dhaka",district:"Dhaka",preferredPayment:"bKash",memberSince:"March 2026"};try{localStorage.setItem("gb_buyer_session",JSON.stringify(this.buyerSession))}catch(a){console.warn(a)}if(this.closeBuyerAuthDialog(),this.showToast(`Logged in successfully as ${this.buyerSession.name}!`),this.renderTopBarRight(),this.pendingAuthAction){const a=this.pendingAuthAction;this.pendingAuthAction=null,a()}}logoutBuyer(){this.buyerSession=null;try{localStorage.removeItem("gb_buyer_session")}catch(e){console.warn(e)}this.showToast("Signed out of buyer account"),this.openMarketplace("storefront")}renderMarketplaceApp(){const e=document.getElementById("marketplace-modal");e&&(e.innerHTML=`
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
                placeholder="Search 50+ rural items (try typing 'r' for Rice, Rui, Radhuni...)" 
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
    `,this.renderTopBarRight(),this.setupTopBarEvents(),this.renderCurrentView())}renderTopBarRight(){var i,t;const e=document.getElementById("market-nav-right");if(!e)return;const a=this.cart.reduce((r,n)=>r+n.quantity,0);e.innerHTML=`
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
        <span class="bag-btn-badge" id="top-cart-badge">${a}</span>
      </button>
    `,(i=document.getElementById("btn-top-profile"))==null||i.addEventListener("click",()=>{this.openBuyerProfile("on_the_way")}),(t=document.getElementById("btn-top-cart"))==null||t.addEventListener("click",()=>{this.openCart()})}setupTopBarEvents(){const e=document.getElementById("market-back-nav");e==null||e.addEventListener("click",()=>{this.activeView==="storefront"?this.closeMarketplace():(this.activeView="storefront",this.renderCurrentView())});const a=document.getElementById("market-close-all");a==null||a.addEventListener("click",()=>{this.closeMarketplace()});const i=document.getElementById("market-search-input"),t=document.getElementById("market-search-clear"),r=document.getElementById("market-search-dropdown");i==null||i.addEventListener("input",()=>{const n=i.value;this.searchQuery=n,t&&(n.length>0?t.classList.add("active"):t.classList.remove("active")),this.handleSearchAutocomplete(n),this.activeView==="storefront"&&this.renderStorefrontGridOnly()}),i==null||i.addEventListener("focus",()=>{i.value.trim().length>0&&this.handleSearchAutocomplete(i.value)}),t==null||t.addEventListener("click",()=>{this.searchQuery="",i&&(i.value=""),t.classList.remove("active"),r&&r.classList.remove("active"),this.activeView==="storefront"&&this.renderStorefrontGridOnly()}),document.addEventListener("click",n=>{!n.target.closest(".market-search-wrapper")&&r&&r.classList.remove("active")})}handleSearchAutocomplete(e){const a=document.getElementById("market-search-dropdown");if(!a)return;const i=e.trim().toLowerCase();if(!i){a.classList.remove("active");return}let t=y.filter(n=>n.name.toLowerCase().includes(i)||n.bengaliName.toLowerCase().includes(i)||n.artisanDistrict.toLowerCase().includes(i)||n.category.toLowerCase().includes(i));if(i==="r"||i==="র"){const n=t.filter(o=>o.name.toLowerCase().startsWith("r")),s=t.filter(o=>!o.name.toLowerCase().startsWith("r"));t=[...n,...s]}if(t.length===0){a.innerHTML=`
        <div class="search-drop-header">
          <span>Search Results</span>
          <span>0 found</span>
        </div>
        <div style="padding: 18px; text-align: center; color: #64748B; font-size: 0.85rem;">
          No products found matching "<strong>${e}</strong>"
        </div>
      `,a.classList.add("active");return}const r=i==="r"||i==="র"?`✨ Recommended Products starting with "R" (${t.length} items)`:`✨ Suggested Matches for "${e}" (${t.length} items)`;a.innerHTML=`
      <div class="search-drop-header">
        <span>${r}</span>
        <span style="color:#059669;font-weight:800;">Fast Delivery</span>
      </div>
      <div class="search-drop-list">
        ${t.slice(0,8).map(n=>`
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
    `,a.classList.add("active"),a.querySelectorAll(".search-drop-item").forEach(n=>{n.addEventListener("click",s=>{const o=s.currentTarget.getAttribute("data-product-id");o&&(a.classList.remove("active"),this.openProductDetail(o))})})}renderCurrentView(){const e=document.getElementById("market-view-container");if(e)switch(e.scrollTop=0,this.activeView){case"storefront":this.renderStorefrontView(e);break;case"detail":this.renderDetailView(e);break;case"cart":this.renderCartView(e);break;case"checkout":this.renderCheckoutView(e);break;case"profile":this.renderProfileView(e);break}}renderStorefrontView(e){const a=y.filter(t=>t.flashDeal).slice(0,8);e.innerHTML=`
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
            ${a.map(t=>`
              <div class="flash-deal-item" data-product-id="${t.id}">
                <div class="flash-img-box">
                  <img src="${t.image}" alt="${t.name}" loading="lazy" />
                  <span class="flash-discount-tag">-${t.discountPercent}%</span>
                </div>
                <div class="flash-item-body">
                  <div class="flash-item-title">${t.name}</div>
                  <div class="flash-price-action-row">
                    <div class="flash-price-row">
                      <span class="flash-curr-price">৳${t.priceBDT.toLocaleString()}</span>
                      ${t.originalPriceBDT?`<span class="flash-orig-price">৳${t.originalPriceBDT.toLocaleString()}</span>`:""}
                    </div>
                    <button 
                      type="button" 
                      class="prod-add-btn flash-add-btn" 
                      data-action="add-cart" 
                      data-product-id="${t.id}" 
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
    `,this.updateFlashTimerDisplay(),this.renderStorefrontGridOnly();const i=document.getElementById("market-chips-bar");i==null||i.addEventListener("click",t=>{const r=t.target.closest(".market-chip");if(!r)return;const n=r.getAttribute("data-cat")||"all";i.querySelectorAll(".market-chip").forEach(s=>s.classList.remove("active")),r.classList.add("active"),this.currentCategory=n,this.renderStorefrontGridOnly()}),e.querySelectorAll(".flash-deal-item").forEach(t=>{t.addEventListener("click",r=>{if(r.target.closest('[data-action="add-cart"]'))return;const s=r.currentTarget.getAttribute("data-product-id");s&&this.openProductDetail(s)})}),e.querySelectorAll('[data-action="add-cart"]').forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation();const n=r.currentTarget.getAttribute("data-product-id");n&&this.requireBuyerAuth(()=>{this.addToCart(n)})})})}renderStorefrontGridOnly(){const e=document.getElementById("market-products-grid"),a=document.getElementById("product-count-label");if(!e)return;let i=y;if(this.currentCategory!=="all"&&(i=i.filter(t=>t.category===this.currentCategory)),this.searchQuery.trim()){const t=this.searchQuery.trim().toLowerCase();if(i=i.filter(r=>r.name.toLowerCase().includes(t)||r.bengaliName.toLowerCase().includes(t)||r.artisanDistrict.toLowerCase().includes(t)||r.craftType.toLowerCase().includes(t)||r.category.toLowerCase().includes(t)),t==="r"||t==="র"){const r=i.filter(s=>s.name.toLowerCase().startsWith("r")),n=i.filter(s=>!s.name.toLowerCase().startsWith("r"));i=[...r,...n]}}if(a&&(a.textContent=`${i.length} Products`),i.length===0){e.innerHTML=`
        <div class="market-empty-state" style="grid-column: 1 / -1;">
          <div style="font-size: 2.5rem;">🔍</div>
          <h4>No products found</h4>
          <p>Try searching for rice, ghee, mango, fish, or clear your filters.</p>
        </div>
      `;return}e.innerHTML=i.map(t=>`
      <article class="product-card" data-product-id="${t.id}">
        <div class="product-img-wrap">
          <img src="${t.image}" alt="${t.name}" loading="lazy" />
          ${t.discountPercent?`<span class="prod-badge-discount">-${t.discountPercent}% OFF</span>`:""}
          <span class="prod-badge-organic">100% Shariah</span>
        </div>
        <div class="product-card-body">
          <div class="prod-seller-chip">
            <span>🌾</span>
            <span>${t.artisanName} (${t.artisanDistrict})</span>
          </div>
          <h4 class="prod-title">${t.name}</h4>
          <div class="prod-bengali-sub">${t.bengaliName}</div>
          <div class="prod-rating-row">
            <span>★ ${t.rating}</span>
            <span class="prod-reviews-count">(${t.reviewsCount})</span>
          </div>
          <div class="prod-bottom-row">
            <div class="prod-price-box">
              <span class="prod-unit">${t.unit||"1 Unit"}</span>
              <div>
                <span class="prod-main-price">৳${t.priceBDT.toLocaleString()}</span>
                ${t.originalPriceBDT?`<span class="prod-orig-price">৳${t.originalPriceBDT.toLocaleString()}</span>`:""}
              </div>
            </div>
            <button 
              type="button" 
              class="prod-add-btn" 
              data-action="add-cart" 
              data-product-id="${t.id}"
              title="Add to Shopping Bag"
            >
              +
            </button>
          </div>
        </div>
      </article>
    `).join(""),e.querySelectorAll(".product-card").forEach(t=>{t.addEventListener("click",r=>{if(r.target.closest('[data-action="add-cart"]'))return;const s=t.getAttribute("data-product-id");s&&this.openProductDetail(s)})}),e.querySelectorAll('[data-action="add-cart"]').forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation();const n=r.currentTarget.getAttribute("data-product-id");n&&this.requireBuyerAuth(()=>{this.addToCart(n)})})})}renderDetailView(e){var i,t,r;const a=y.find(n=>n.id===this.selectedProductId)||y[0];e.innerHTML=`
      <div class="detail-view">
        <div class="detail-nav-row">
          <button class="btn-detail-back" id="btn-back-to-store">
            ← Back to Store
          </button>
          <div style="font-size: 0.85rem; color: #64748B; font-weight: 600;">
            Product ID: #${a.id}
          </div>
        </div>

        <div class="detail-grid">
          <!-- Gallery -->
          <div class="detail-gallery">
            <img src="${a.image}" alt="${a.name}" class="detail-main-img" id="detail-main-img" />
            <div class="detail-thumbs-strip">
              <img src="${a.image}" class="detail-thumb active" alt="View 1" />
              <img src="/images/chinigura-rice.jpg" class="detail-thumb" alt="View 2" />
              <img src="/images/pure-cow-ghee.jpg" class="detail-thumb" alt="View 3" />
            </div>
          </div>

          <!-- Product Info Column -->
          <div class="detail-info-col">
            <span class="detail-category-badge">${a.category.toUpperCase()} • 100% NATURAL</span>
            
            <h2 class="detail-title-en">${a.name}</h2>
            <h3 class="detail-title-bn">${a.bengaliName}</h3>

            <div class="detail-price-banner">
              <span class="detail-price-main">৳${a.priceBDT.toLocaleString()}</span>
              ${a.originalPriceBDT?`<span class="detail-price-orig">৳${a.originalPriceBDT.toLocaleString()}</span>`:""}
              ${a.discountPercent?`<span class="detail-discount-chip">Save ${a.discountPercent}%</span>`:""}
              <span style="font-size:0.85rem;color:#64748B;font-weight:600;">/ ${a.unit||"1 Unit"}</span>
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
                  <div class="seller-name">${a.artisanName}</div>
                  <div class="seller-origin">📍 ${a.originVillage||a.artisanDistrict} • Verified Producer</div>
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
              <p style="margin-bottom:8px;"><strong>About this Harvest:</strong> ${a.description}</p>
              <p style="margin:0;font-family:'Tiro Bangla',serif;color:#475569;">
                <strong>খামারের তথ্য:</strong> এই পণ্যটি রাসায়নিক কীটনাশকমুক্ত উপায়ে সরাসরি প্রান্তিক কৃষক ও পল্লী কারিগরদের তত্ত্বাবধানে তৈরি ও সংগৃহীত। আপনার ক্রয়ের সম্পূর্ণ অর্থ সরাসরি উৎপাদকের পরিবারকে স্বাবলম্বী করে।
              </p>
            </div>

            <!-- Customer Reviews -->
            <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-top:1px solid #E2E8F0;">
              <div style="display:flex;align-items:center;gap:6px;font-weight:800;color:#0D382A;">
                <span style="color:#F59E0B;font-size:1.1rem;">★ ${a.rating}</span>
                <span>Customer Ratings (${a.reviewsCount} verified reviews)</span>
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
    `,(i=document.getElementById("btn-back-to-store"))==null||i.addEventListener("click",()=>{this.activeView="storefront",this.renderCurrentView()}),(t=document.getElementById("btn-detail-add"))==null||t.addEventListener("click",()=>{this.requireBuyerAuth(()=>{this.addToCart(a.id);const n=document.getElementById("btn-detail-add");if(n){const s=n.innerHTML;n.innerHTML="✓ Added to Bag!",setTimeout(()=>{n.innerHTML=s},1400)}})}),(r=document.getElementById("btn-detail-buy"))==null||r.addEventListener("click",()=>{this.requireBuyerAuth(()=>{this.addToCart(a.id,1,!1),this.openCheckout()})})}renderCartView(e){var g,p,f,m;const a=this.cart.reduce((u,c)=>u+c.quantity,0),i=this.cart.reduce((u,c)=>u+c.product.priceBDT*c.quantity,0),t=1e3,r=i>=t||i===0,n=r?0:60,s=this.appliedVoucher?this.appliedVoucher.discountBDT:0,o=Math.max(0,i+n-s),d={};this.cart.forEach(u=>{const c=u.product.artisanName;d[c]||(d[c]=[]),d[c].push(u)}),e.innerHTML=`
      <div class="cart-view">
        <div class="cart-header-row">
          <div class="cart-heading">
            <span>🛍️ My Shopping Bag (আমার শপিং ব্যাগ)</span>
            <span style="font-size:0.85rem;background:#E2E8F0;color:#334155;padding:2px 8px;border-radius:12px;">${a} items</span>
          </div>
          <button class="btn-detail-back" id="btn-cart-back">
            ← Continue Shopping
          </button>
        </div>

        <!-- Free Delivery Progress Meter -->
        <div class="cart-free-shipping-box">
          <div style="display:flex;justify-content:space-between;">
            <span>${r&&i>0?"🎉 You unlocked FREE Delivery across Bangladesh!":`Add ৳${Math.max(0,t-i)} more to get FREE Delivery!`}</span>
            <span>Threshold: ৳1,000</span>
          </div>
          <div class="free-ship-meter">
            <div class="free-ship-fill" style="width: ${Math.min(100,i/t*100)}%;"></div>
          </div>
        </div>

        ${this.cart.length===0?`
          <div class="market-empty-state">
            <div style="font-size: 3rem; margin-bottom: 12px;">🛍️</div>
            <h3>Your Shopping Bag is Empty</h3>
            <p>Explore 50+ authentic village items from verified Bangladeshi producers.</p>
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
              <span>৳${i.toLocaleString()}</span>
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
    `,(g=document.getElementById("btn-cart-back"))==null||g.addEventListener("click",()=>{this.activeView="storefront",this.renderCurrentView()}),(p=document.getElementById("btn-empty-shop-now"))==null||p.addEventListener("click",()=>{this.activeView="storefront",this.renderCurrentView()}),e.querySelectorAll('[data-action="qty-plus"]').forEach(u=>{u.addEventListener("click",()=>{const c=u.getAttribute("data-id");c&&this.updateCartQuantity(c,1)})}),e.querySelectorAll('[data-action="qty-minus"]').forEach(u=>{u.addEventListener("click",()=>{const c=u.getAttribute("data-id");c&&this.updateCartQuantity(c,-1)})}),e.querySelectorAll('[data-action="remove-item"]').forEach(u=>{u.addEventListener("click",()=>{const c=u.getAttribute("data-id");c&&this.removeFromCart(c)})}),e.querySelectorAll('[data-action="quick-add"]').forEach(u=>{u.addEventListener("click",()=>{const c=u.getAttribute("data-id");c&&this.requireBuyerAuth(()=>{this.addToCart(c)})})}),(f=document.getElementById("btn-apply-voucher"))==null||f.addEventListener("click",()=>{var c;const u=(c=document.getElementById("cart-voucher-input"))==null?void 0:c.value.trim().toUpperCase();this.applyVoucher(u)}),(m=document.getElementById("btn-proceed-checkout"))==null||m.addEventListener("click",()=>{this.openCheckout()})}renderCheckoutView(e){var s,o;const a=this.cart.reduce((d,g)=>d+g.product.priceBDT*g.quantity,0),i=a>=1e3?0:60,t=this.appliedVoucher?this.appliedVoucher.discountBDT:0,r=Math.max(0,a+i-t),n=this.buyerSession||T;e.innerHTML=`
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
                <span>৳${a.toLocaleString()}</span>
              </div>
              <div style="display:flex;justify-content:space-between;">
                <span>Shipping Fee</span>
                <span>${i===0?'<strong style="color:#059669;">FREE</strong>':`৳${i}`}</span>
              </div>
              ${t>0?`
                <div style="display:flex;justify-content:space-between;color:#059669;font-weight:700;">
                  <span>Voucher Discount</span>
                  <span>−৳${t.toLocaleString()}</span>
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
    `,(s=document.getElementById("btn-checkout-to-cart"))==null||s.addEventListener("click",()=>{this.openCart()}),e.querySelectorAll(".payment-method-card").forEach(d=>{d.addEventListener("click",()=>{const g=d.getAttribute("data-method");g&&(this.selectedPaymentMethod=g,this.renderCheckoutView(e))})}),(o=document.getElementById("btn-confirm-place-order"))==null||o.addEventListener("click",()=>{this.processOrderPlacement(e,r,a,i,t,n)})}processOrderPlacement(e,a,i,t,r,n){var p;const s=`GB-ORD-${Math.floor(1e4+Math.random()*9e4)}`,o=`REDX-GB-${Math.floor(1e4+Math.random()*9e4)}`,g={id:s,date:"17 Sep 2026",status:"on_the_way",statusBengali:"পথিমধ্যে রয়েছে (চলমান ডেলিভারি)",statusBadgeClass:"badge-transit",items:[...this.cart],subtotal:i,shippingFee:t,discount:r,total:a,paymentMethod:this.selectedPaymentMethod,paymentDetails:`${this.selectedPaymentMethod} (${n.phone}) - TxnID: GB${Math.floor(1e5+Math.random()*9e5)}`,shippingAddress:`${n.address}, ${n.city}`,recipientPhone:n.phone,trackingNumber:o,courierPartner:"RedX Express Logistics",estimatedDelivery:"Tomorrow, by 4:00 PM",trackingSteps:[{label:"Order Confirmed",bengaliLabel:"অর্ডার গৃহীত হয়েছে",time:"Just Now",completed:!0},{label:"Packed by Village Cooperative",bengaliLabel:"পণ্য প্রস্তুত ও প্যাকিং",time:"In Progress",completed:!0,active:!0},{label:"In Transit / On The Way",bengaliLabel:"পথিমধ্যে রয়েছে (ঢাকা হাবের পথে)",time:"Expected Tonight",completed:!1},{label:"Out for Delivery",bengaliLabel:"ডেলিভারির জন্য বের হবে",time:"Tomorrow 10:00 AM",completed:!1},{label:"Delivered",bengaliLabel:"পৌঁছে গেছে",time:"Pending",completed:!1}]};this.orders.unshift(g),this.saveOrders(),this.cart=[],this.appliedVoucher=null,this.saveCart(),e.innerHTML=`
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
    `,(p=document.getElementById("btn-success-track"))==null||p.addEventListener("click",()=>{this.openBuyerProfile("on_the_way")})}renderProfileView(e){const a=this.buyerSession||T,i=this.orders.filter(s=>s.status==="on_the_way"),t=this.orders.filter(s=>s.status==="delivered"),r=this.orders.filter(s=>s.status==="cancelled");e.innerHTML=`
      <div class="profile-view">
        
        <!-- Profile Header Card -->
        <div class="profile-header-card">
          <div class="profile-user-left">
            <div class="profile-big-avatar">${a.name.charAt(0)}</div>
            <div class="profile-user-info">
              <h3>${a.name}</h3>
              <p>✉️ ${a.email} • 📞 ${a.phone}</p>
              <div class="profile-status-pill">✓ Verified Buyer (যাচাইকৃত ক্রেতা)</div>
            </div>
          </div>
          <div style="display:flex;gap:12px;text-align:right;">
            <div style="background:rgba(255,255,255,0.12);padding:8px 16px;border-radius:10px;">
              <div style="font-size:1.25rem;font-weight:800;">${i.length}</div>
              <div style="font-size:0.72rem;color:#D1FAE5;">On The Way</div>
            </div>
            <div style="background:rgba(255,255,255,0.12);padding:8px 16px;border-radius:10px;">
              <div style="font-size:1.25rem;font-weight:800;">${t.length}</div>
              <div style="font-size:0.72rem;color:#D1FAE5;">Delivered</div>
            </div>
          </div>
        </div>

        <!-- 4 Profile Tabs -->
        <div class="profile-tabs-bar" id="profile-tabs-bar">
          <button class="profile-tab-btn ${this.currentProfileTab==="on_the_way"?"active":""}" data-tab="on_the_way">
            🚚 On The Way (পথিমধ্যে ডেলিভারি) [${i.length}]
          </button>
          <button class="profile-tab-btn ${this.currentProfileTab==="delivered"?"active":""}" data-tab="delivered">
            ✅ Previous Purchases (সম্পন্ন অর্ডার) [${t.length}]
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
    `,this.renderProfileTabContent();const n=document.getElementById("profile-tabs-bar");n==null||n.addEventListener("click",s=>{const o=s.target.closest(".profile-tab-btn");if(!o)return;const d=o.getAttribute("data-tab");n.querySelectorAll(".profile-tab-btn").forEach(g=>g.classList.remove("active")),o.classList.add("active"),this.currentProfileTab=d,this.renderProfileTabContent()})}renderProfileTabContent(){var a,i;const e=document.getElementById("profile-tab-body");if(e){if(this.currentProfileTab==="on_the_way"){const t=this.orders.filter(r=>r.status==="on_the_way");if(t.length===0){e.innerHTML=`
          <div class="market-empty-state">
            <div style="font-size:2.5rem;">🚚</div>
            <h4>No orders currently on the way</h4>
            <p>Your newly placed shipments will show real-time tracking here.</p>
          </div>
        `;return}e.innerHTML=`
        <div class="orders-list-stack">
          ${t.map(r=>`
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
      `,e.querySelectorAll('[data-action="call-partner"]').forEach(r=>{r.addEventListener("click",()=>{this.showToast("Calling RedX delivery dispatcher (+880 9612-445566)...")})})}else if(this.currentProfileTab==="delivered"){const t=this.orders.filter(r=>r.status==="delivered");e.innerHTML=`
        <div class="orders-list-stack">
          ${t.map(r=>{var n;return`
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
      `,e.querySelectorAll('[data-action="buy-again"]').forEach(r=>{r.addEventListener("click",()=>{const n=r.getAttribute("data-id");n&&(this.addToCart(n),this.openCart())})}),e.querySelectorAll('[data-action="rate-order"]').forEach(r=>{r.addEventListener("click",()=>{this.showToast("Thank you! 5★ review recorded for village producer.")})})}else if(this.currentProfileTab==="cancelled"){const t=this.orders.filter(r=>r.status==="cancelled");e.innerHTML=`
        <div class="orders-list-stack">
          ${t.map(r=>{var n;return`
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
      `,e.querySelectorAll('[data-action="reorder-fresh"]').forEach(r=>{r.addEventListener("click",()=>{const n=r.getAttribute("data-id");n&&(this.addToCart(n),this.openCart())})})}else if(this.currentProfileTab==="settings"){const t=this.buyerSession||T;e.innerHTML=`
        <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:14px;padding:20px;">
          <h4 style="font-size:1.05rem;font-weight:800;color:#0D382A;margin-bottom:16px;">
            Account & Delivery Preferences
          </h4>

          <div class="settings-form-grid">
            <div class="settings-group">
              <label>Full Name</label>
              <input type="text" class="settings-input" id="set-buyer-name" value="${t.name}" />
            </div>
            <div class="settings-group">
              <label>Contact Phone</label>
              <input type="tel" class="settings-input" id="set-buyer-phone" value="${t.phone}" />
            </div>
            <div class="settings-group">
              <label>Email Address</label>
              <input type="email" class="settings-input" id="set-buyer-email" value="${t.email}" />
            </div>
            <div class="settings-group">
              <label>Default Shipping Address</label>
              <input type="text" class="settings-input" id="set-buyer-addr" value="${t.address}" />
            </div>
            <div class="settings-group">
              <label>City / Division</label>
              <input type="text" class="settings-input" id="set-buyer-city" value="${t.city}" />
            </div>
            <div class="settings-group">
              <label>Preferred Payment Gateway</label>
              <select class="settings-input" id="set-buyer-payment">
                <option value="bKash" ${t.preferredPayment==="bKash"?"selected":""}>bKash (বিকাশ)</option>
                <option value="Nagad" ${t.preferredPayment==="Nagad"?"selected":""}>Nagad (নগদ)</option>
                <option value="Cash on Delivery" ${t.preferredPayment==="Cash on Delivery"?"selected":""}>Cash on Delivery</option>
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
      `,(a=document.getElementById("btn-save-settings"))==null||a.addEventListener("click",()=>{var o,d,g;const r=(o=document.getElementById("set-buyer-name"))==null?void 0:o.value,n=(d=document.getElementById("set-buyer-phone"))==null?void 0:d.value,s=(g=document.getElementById("set-buyer-addr"))==null?void 0:g.value;if(this.buyerSession){this.buyerSession.name=r,this.buyerSession.phone=n,this.buyerSession.address=s,localStorage.setItem("gb_buyer_session",JSON.stringify(this.buyerSession)),this.showToast("Profile settings saved successfully!");const p=document.getElementById("market-view-container");p&&this.renderProfileView(p)}}),(i=document.getElementById("btn-logout-buyer"))==null||i.addEventListener("click",()=>{this.logoutBuyer()})}}}addToCart(e,a=1,i=!0){const t=y.find(n=>n.id===e);if(!t)return;const r=this.cart.find(n=>n.product.id===e);r?r.quantity+=a:this.cart.push({product:t,quantity:a}),this.saveCart(),i&&this.showToast(`✓ Added ${t.name} to Shopping Bag!`)}updateCartQuantity(e,a){const i=this.cart.find(t=>t.product.id===e);if(i)if(i.quantity+=a,i.quantity<=0)this.removeFromCart(e);else{this.saveCart();const t=document.getElementById("market-view-container");t&&this.activeView==="cart"&&this.renderCartView(t)}}removeFromCart(e){this.cart=this.cart.filter(i=>i.product.id!==e),this.saveCart();const a=document.getElementById("market-view-container");a&&this.activeView==="cart"&&this.renderCartView(a),this.showToast("Item removed from Shopping Bag")}applyVoucher(e){if(!e)return;e==="GRAM20"?(this.appliedVoucher={code:"GRAM20",discountBDT:20},this.showToast("🎉 Voucher GRAM20 applied! ৳20 discount deducted.")):e==="EID100"?(this.appliedVoucher={code:"EID100",discountBDT:100},this.showToast("🎉 Voucher EID100 applied! ৳100 discount deducted.")):e==="FARMERLOVE"?(this.appliedVoucher={code:"FARMERLOVE",discountBDT:50},this.showToast("🎉 Voucher FARMERLOVE applied! ৳50 discount deducted.")):this.showToast("Invalid voucher code. Try GRAM20 or EID100.");const a=document.getElementById("market-view-container");a&&this.activeView==="cart"&&this.renderCartView(a)}updateCartBadge(){const e=this.cart.reduce((t,r)=>t+r.quantity,0),a=document.getElementById("top-cart-badge");a&&(a.textContent=e.toString());const i=document.getElementById("market-cart-count");i&&(i.textContent=e.toString())}showToast(e){let a=document.getElementById("market-toast");a||(a=document.createElement("div"),a.id="market-toast",a.className="market-toast-notification",document.body.appendChild(a)),a.textContent=e,a.classList.add("active"),setTimeout(()=>{a==null||a.classList.remove("active")},2400)}}class x{constructor(e){l(this,"portalModal",null);l(this,"closeBtn",null);l(this,"navFarmerLink",null);l(this,"joinFarmerBtn",null);l(this,"tabFarmer",null);l(this,"tabArtisan",null);l(this,"contentFarmer",null);l(this,"contentArtisan",null);l(this,"dashboard",null);l(this,"btnDemoFarmer",null);l(this,"btnDemoArtisan",null);l(this,"formFarmer",null);l(this,"formArtisan",null);l(this,"btnProducerLogout",null);l(this,"btnProducerNew",null);l(this,"chatBtn",null);l(this,"onToastNotification");this.onToastNotification=e}init(){this.bindElements(),this.setupEventListeners()}bindElements(){this.portalModal=document.getElementById("farmer-women-modal"),this.closeBtn=document.getElementById("close-farmer-modal"),this.navFarmerLink=document.getElementById("nav-farmer-women-link"),this.joinFarmerBtn=document.getElementById("cta-join-farmer"),this.tabFarmer=document.getElementById("tab-btn-farmer"),this.tabArtisan=document.getElementById("tab-btn-artisan"),this.contentFarmer=document.getElementById("tab-content-farmer"),this.contentArtisan=document.getElementById("tab-content-artisan"),this.dashboard=document.getElementById("producer-dashboard"),this.btnDemoFarmer=document.getElementById("btn-demo-farmer"),this.btnDemoArtisan=document.getElementById("btn-demo-artisan"),this.formFarmer=document.getElementById("form-farmer-login"),this.formArtisan=document.getElementById("form-artisan-login"),this.btnProducerLogout=document.getElementById("btn-producer-logout"),this.btnProducerNew=document.getElementById("btn-producer-new-project"),this.chatBtn=document.getElementById("hero-chat-btn")}setupEventListeners(){var e,a,i,t,r,n,s,o,d,g,p,f;(e=this.navFarmerLink)==null||e.addEventListener("click",m=>{m.preventDefault(),this.openPortal("farmer")}),(a=this.joinFarmerBtn)==null||a.addEventListener("click",m=>{m.preventDefault(),this.openPortal("farmer")}),(i=this.closeBtn)==null||i.addEventListener("click",()=>this.closePortal()),(t=this.tabFarmer)==null||t.addEventListener("click",()=>this.switchTab("farmer")),(r=this.tabArtisan)==null||r.addEventListener("click",()=>this.switchTab("artisan")),(n=this.btnDemoFarmer)==null||n.addEventListener("click",()=>{this.showProducerDashboard("মোঃ রফিকুল ইসলাম (Md. Rafiqul Islam)","🌾 Bio-Secure Poultry Farmer • Gazipur Upazila","Gazipur Broiler Poultry Shed #GB-2026-04","45% Backed by 12 Investors (৳1,20,000 Goal)","bKash Merchant Verified • 01712-345678"),this.notifyToast("🌾 Welcome, Md. Rafiqul Islam! Logged in as Verified Farmer.")}),(s=this.btnDemoArtisan)==null||s.addEventListener("click",()=>{this.showProducerDashboard("ফাতেমা বেগম (Fatima Begum)","🧵 Rural Nakshi Kantha Artisan • Islampur, Jamalpur","Jamalpur Women Artisan Handicraft Collective","24 Hand-Stitched Quilts Live in Marketplace","Nagad Verified • 01823-456789"),this.notifyToast("🧵 Welcome, Fatima Begum! Logged in as Verified Rural Artisan.")}),(o=this.formFarmer)==null||o.addEventListener("submit",m=>{var b,D,B;m.preventDefault();const u=((b=document.getElementById("farmer-name"))==null?void 0:b.value.trim())||"Md. Rafiqul Islam",c=((D=document.getElementById("farmer-district"))==null?void 0:D.value)||"Gazipur",w=((B=document.getElementById("farmer-category"))==null?void 0:B.value)||"Poultry";this.showProducerDashboard(u,`🌾 ${w} Producer • ${c} Hub`,`${c} ${w} Development Project`,"Under Agronomist Review (GPS Verified)","bKash Account Verified"),this.notifyToast(`🌾 Proposal submitted successfully! Welcome, ${u}.`)}),(d=this.formArtisan)==null||d.addEventListener("submit",m=>{var b,D,B;m.preventDefault();const u=((b=document.getElementById("artisan-name"))==null?void 0:b.value.trim())||"Fatima Begum",c=((D=document.getElementById("artisan-district"))==null?void 0:D.value)||"Jamalpur",w=((B=document.getElementById("artisan-craft"))==null?void 0:B.value)||"Nakshi Kantha";this.showProducerDashboard(u,`🧵 ${w} Artisan • ${c}`,`${c} Handcrafted Collection`,"Active Marketplace Storefront","bKash / Nagad Verified"),this.notifyToast(`🧵 Store opened successfully! Welcome, ${u}.`)}),(g=this.btnProducerLogout)==null||g.addEventListener("click",()=>{this.resetProducerState(),this.notifyToast("Logged out of Producer account")}),(p=this.btnProducerNew)==null||p.addEventListener("click",()=>{this.switchTab("farmer"),this.notifyToast("Ready for new project submission")}),(f=this.chatBtn)==null||f.addEventListener("click",()=>{this.notifyToast("GramBondhon Advisory: Investment & Producer support team is online.")})}openPortal(e="farmer"){this.portalModal&&(this.portalModal.classList.add("active"),document.body.style.overflow="hidden",this.switchTab(e))}closePortal(){this.portalModal&&(this.portalModal.classList.remove("active"),document.body.style.overflow="")}switchTab(e){var a,i,t,r;this.dashboard&&(this.dashboard.style.display="none"),e==="farmer"?((a=this.tabFarmer)==null||a.classList.add("active"),(i=this.tabArtisan)==null||i.classList.remove("active"),this.contentFarmer&&(this.contentFarmer.style.display="block"),this.contentArtisan&&(this.contentArtisan.style.display="none")):((t=this.tabArtisan)==null||t.classList.add("active"),(r=this.tabFarmer)==null||r.classList.remove("active"),this.contentArtisan&&(this.contentArtisan.style.display="block"),this.contentFarmer&&(this.contentFarmer.style.display="none"))}showProducerDashboard(e,a,i,t,r){var m;this.contentFarmer&&(this.contentFarmer.style.display="none"),this.contentArtisan&&(this.contentArtisan.style.display="none"),this.dashboard&&(this.dashboard.style.display="block");const n=document.getElementById("dash-producer-name"),s=document.getElementById("dash-producer-role"),o=document.getElementById("dash-project-title"),d=document.getElementById("dash-funding-status"),g=document.getElementById("dash-payout-wallet");n&&(n.textContent=e),s&&(s.textContent=a),o&&(o.textContent=i),d&&(d.textContent=t),g&&(g.textContent=r);const p=document.getElementById("nav-login-btn"),f=document.getElementById("nav-user-badge");p&&(p.style.display="none"),f&&(f.style.display="inline-flex",f.innerHTML=`
        <span class="user-pill-avatar" style="background:#0D382A;color:#FFF;border-radius:50%;width:26px;height:26px;display:inline-flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;">🌾</span>
        <span class="user-pill-name" style="font-weight:600;font-size:0.85rem;color:#0D382A;">${e.split(" ")[0]} (Producer)</span>
        <button class="user-logout-btn" id="logout-producer-nav" title="Logout" style="background:none;border:none;cursor:pointer;margin-left:4px;">✕</button>
      `,(m=document.getElementById("logout-producer-nav"))==null||m.addEventListener("click",u=>{u.stopPropagation(),this.resetProducerState(),this.notifyToast("Logged out of Producer session")}))}resetProducerState(){this.dashboard&&(this.dashboard.style.display="none"),this.switchTab("farmer");const e=document.getElementById("nav-login-btn"),a=document.getElementById("nav-user-badge");e&&(e.style.display="inline-block"),a&&(a.style.display="none")}notifyToast(e){this.onToastNotification&&this.onToastNotification(e)}}class F{constructor(){l(this,"heroSection");l(this,"joinAsInvestor");l(this,"activeProjects");l(this,"marketplace");l(this,"joinAsFarmer");this.heroSection=new L,this.activeProjects=new M,this.marketplace=new I,this.joinAsFarmer=new x(this.showToast.bind(this)),this.joinAsInvestor=new A(this.activeProjects,this.showToast.bind(this))}init(){this.heroSection.init(),this.activeProjects.init(),this.marketplace.init(),this.joinAsFarmer.init(),this.joinAsInvestor.init(),this.setupNavbar(),this.setupProjectsAndHeroButtons(),this.setupModalEscapeKeys(),this.setupSmoothScroll(),console.log("🌾 GramBondhon (গ্রামীণ বন্ধন) initialized successfully with sector modules.")}setupNavbar(){const e=document.getElementById("nav-login-btn"),a=document.getElementById("nav-user-badge"),i=document.getElementById("mobile-menu-toggle");v.onAuthChange(t=>{var r;t?(e&&(e.style.display="none"),a&&(a.style.display="inline-flex",a.innerHTML=`
            <span class="user-pill-avatar" style="background:#0D382A;color:#FFF;border-radius:50%;width:26px;height:26px;display:inline-flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;">TR</span>
            <span class="user-pill-name" style="font-weight:600;font-size:0.85rem;color:#0D382A;">${t.name}</span>
            <button class="user-logout-btn" id="logout-btn" title="Logout" style="background:none;border:none;cursor:pointer;margin-left:4px;">✕</button>
          `,(r=document.getElementById("logout-btn"))==null||r.addEventListener("click",n=>{n.stopPropagation(),v.logout(),this.showToast("Logged out successfully")}))):(e&&(e.style.display="inline-block"),a&&(a.style.display="none"))}),e==null||e.addEventListener("click",t=>{t.preventDefault(),v.clearPendingProject(),this.joinAsInvestor.openInvestorModal()}),i==null||i.addEventListener("click",()=>{const t=document.getElementById("projects");t&&t.scrollIntoView({behavior:"smooth"})})}setupProjectsAndHeroButtons(){const e=document.getElementById("btn-view-all-projects");e==null||e.addEventListener("click",i=>{i.preventDefault(),this.activeProjects.toggleShowAllProjects();const t=this.activeProjects.isShowingAll();this.showToast(t?"Showing all 30 verified Bangladeshi projects":"Showing top 4 projects")});const a=document.getElementById("close-project-detail");a==null||a.addEventListener("click",()=>{this.activeProjects.closeProjectDetailsModal()})}setupModalEscapeKeys(){document.addEventListener("keydown",e=>{e.key==="Escape"&&(this.activeProjects.closeAuthModal(),this.activeProjects.closeProjectDetailsModal(),this.marketplace.closeMarketplaceModal(),this.joinAsFarmer.closePortal())}),document.querySelectorAll(".modal-backdrop").forEach(e=>{e.addEventListener("click",a=>{a.target===e&&(e.classList.remove("active"),document.body.style.overflow="")})})}setupSmoothScroll(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",a=>{const i=e.getAttribute("href");if(!i||i==="#")return;const t=document.querySelector(i);t&&(a.preventDefault(),t.scrollIntoView({behavior:"smooth"}))})})}showToast(e){const a=document.getElementById("toast-notification"),i=document.getElementById("toast-message");!a||!i||(i.textContent=e,a.classList.add("show"),setTimeout(()=>{a.classList.remove("show")},4e3))}}document.addEventListener("DOMContentLoaded",()=>{new F().init()});
