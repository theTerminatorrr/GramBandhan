var q=Object.defineProperty;var O=(x,e,t)=>e in x?q(x,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):x[e]=t;var m=(x,e,t)=>O(x,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();class V{constructor(){m(this,"currentUser",null);m(this,"pendingProjectId",null);m(this,"listeners",[]);this.loadPersistedSession()}loadPersistedSession(){try{const e=localStorage.getItem("grambandhan_unified_session");if(e){this.currentUser=JSON.parse(e),this.currentUser&&(!this.currentUser.roles||this.currentUser.roles.length===0)&&(this.currentUser.roles=["investor"]);return}const t=localStorage.getItem("grambandhan_investor_session");if(t){const i=JSON.parse(t);this.currentUser={name:i.name||"Tariq Rahman",email:i.email||"tariq.rahman@investor.bd",phone:i.phone||"+880 1711-234567",roles:i.roles||["investor"],nidVerified:i.nidVerified!==!1,portfolioValueBDT:i.portfolioValueBDT||15e4,address:"House 14, Road 5, Dhanmondi",city:"Dhaka",district:"Dhaka",memberSince:"March 2026"},this.syncStorage();return}const a=localStorage.getItem("gb_buyer_session");if(a){const i=JSON.parse(a);this.currentUser={name:i.name||"Tanvir Ahmed",email:i.email||"tanvir.ahmed@buyer.bd",phone:i.phone||"+880 1712-889900",roles:["buyer"],nidVerified:!1,portfolioValueBDT:0,address:i.address||"Flat 4B, House 18, Road 11, Banani",city:i.city||"Dhaka",district:i.district||"Dhaka",memberSince:i.memberSince||"March 2026"},this.syncStorage();return}}catch{this.currentUser=null}}isAuthenticated(){return this.currentUser!==null}getUser(){return this.currentUser}hasRole(e){return!this.currentUser||!this.currentUser.roles?!1:this.currentUser.roles.includes(e)}addRole(e){this.currentUser&&(this.currentUser.roles||(this.currentUser.roles=[]),this.currentUser.roles.includes(e)||(this.currentUser.roles.push(e),this.syncStorage(),this.notifyListeners()))}getRoleBadgeText(){if(!this.currentUser||!this.currentUser.roles||this.currentUser.roles.length===0)return"Member";const e=this.currentUser.roles,t=e.includes("farmer"),a=e.includes("investor"),i=e.includes("buyer");return t&&a&&i?"Farmer, Investor & Buyer":t&&a?"Farmer & Investor":t&&i?"Farmer & Buyer":a&&i?"Investor & Buyer":t?"Farmer":a?"Investor":i?"Buyer":"Member"}setPendingProject(e){this.pendingProjectId=e}getPendingProject(){return this.pendingProjectId}clearPendingProject(){this.pendingProjectId=null}signUp(e,t,a=["investor"],i){const r=t.includes("@"),n=r?t:`${e.toLowerCase().replace(/[^a-z0-9]/g,"")}@grambandhan.bd`,o=r?i||"+880 1711-234567":t,s={name:e.trim(),email:n,phone:o,roles:a.length>0?a:["investor"],nidVerified:a.includes("investor")||a.includes("farmer"),portfolioValueBDT:a.includes("investor")?15e4:0,address:"House 14, Road 5, Dhanmondi",city:"Dhaka",district:"Dhaka",memberSince:"March 2026"};return this.currentUser=s,this.syncStorage(),this.notifyListeners(),s}login(e,t,a,i=["investor"]){const r=e.includes("@"),n=r?e:`${(a||"user").toLowerCase().replace(/[^a-z0-9]/g,"")}@grambandhan.bd`,o=r?"+880 1711-234567":e,s={name:a||e.split("@")[0].replace("."," ").replace(/\b\w/g,l=>l.toUpperCase()),email:n,phone:o,roles:i,nidVerified:!0,portfolioValueBDT:i.includes("investor")?15e4:0,address:"House 14, Road 5, Dhanmondi",city:"Dhaka",district:"Dhaka",memberSince:"March 2026"};return this.currentUser=s,this.syncStorage(),this.notifyListeners(),s}loginWithCredentials(e,t){return this.login(e,t,void 0,["investor"])}demoLogin(e="investor"){switch(e){case"farmer":return this.login("rafiqul.islam@farmer.bd","demo1234","Md. Rafiqul Islam",["farmer"]);case"buyer":return this.login("tanvir.ahmed@buyer.bd","demo1234","Tanvir Ahmed",["buyer"]);case"farmer_investor":return this.login("tariqul.islam@grambandhan.bd","demo1234","Md. Tariqul Islam",["farmer","investor"]);case"investor":default:return this.login("tariq.rahman@investor.bd","demo1234","Tariq Rahman",["investor"])}}syncStorage(){if(this.currentUser)try{localStorage.setItem("grambandhan_unified_session",JSON.stringify(this.currentUser)),localStorage.setItem("grambandhan_investor_session",JSON.stringify({name:this.currentUser.name,email:this.currentUser.email,phone:this.currentUser.phone,nidVerified:this.currentUser.nidVerified,portfolioValueBDT:this.currentUser.portfolioValueBDT,roles:this.currentUser.roles})),localStorage.setItem("gb_buyer_session",JSON.stringify({name:this.currentUser.name,email:this.currentUser.email,phone:this.currentUser.phone,address:this.currentUser.address||"House 14, Road 5, Dhanmondi",city:this.currentUser.city||"Dhaka",district:this.currentUser.district||"Dhaka",preferredPayment:"bKash",memberSince:this.currentUser.memberSince||"March 2026"}))}catch(e){console.warn("LocalStorage unavailable",e)}}logout(){this.currentUser=null;try{localStorage.removeItem("grambandhan_unified_session"),localStorage.removeItem("grambandhan_investor_session"),localStorage.removeItem("gb_buyer_session")}catch(e){console.warn("LocalStorage unavailable",e)}this.notifyListeners()}onAuthChange(e){return this.listeners.push(e),e(this.currentUser),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notifyListeners(){for(const e of this.listeners)e(this.currentUser)}}const f=new V,M=[{id:1,title:"Paddy Seedlings Cultivation • ফসলী ধানের চারা রোপণ",subtitle:"Replacing predatory microcredit usury with transparent, asset-backed agricultural partnership contracts.",tag:"Zero Usury / 0% Riba",image:"/images/farmer-rice-planting.jpg",alt:"Bangladeshi farmer planting emerald rice seedlings in sunlit paddy waters",caption:"Rangpur & Bogura • High-Yield Boro Rice"},{id:2,title:"Eco Jute & Bamboo Homeware • সোনালী আঁশ ও বাঁশ শিল্প",subtitle:"Reviving Bengal’s golden fiber and cane basketry for zero-plastic sustainable global living.",tag:"Eco Handicrafts Mission",image:"/images/jute-bamboo-women.jpg",alt:"Village women weaving golden fiber jute bags and natural bamboo baskets",caption:"Kurigram & Faridpur • Golden Fiber Jute Artisans"},{id:3,title:"Highland Organic Tea Gardens • শ্রীমঙ্গলের সবুজ চা বাগান",subtitle:"Smallholder green tea & citrus plantations producing export-grade whole leaf harvest under Halal profit sharing.",tag:"Highland Agro Export",image:"/images/highland-tea.jpg",alt:"Lush rolling green tea gardens of Sreemangal with tea pluckers in morning sun",caption:"Panchagarh & Sreemangal • Highland Organic Tea"},{id:4,title:"Empowering Rural Growth Through Ethical Investment",subtitle:"Connecting global ethical investors with local farmers to build a sustainable, interest-free future for rural communities.",tag:"100% Halal & Asset-Backed",image:"/images/hero-bangladesh-farming.jpg",alt:"Bangladeshi farmer plowing stepped rice paddy with oxen under golden morning sunlight",caption:"Sylhet & Bogura Valley • Traditional Boro Rice Farming"},{id:5,title:"Sun-Dried Red Chilli Harvest • লাল মরিচ শুকানো ও বাছাই",subtitle:"Empowering rural women farmers with direct post-harvest drying facilities and guaranteed spice market linkages.",tag:"Authentic Bangladeshi Agriculture",image:"/images/hero-chilli-drying.jpg",alt:"Bangladeshi village women sorting and sun-drying vibrant red chillies on jute mats in rural fields",caption:"Bogura & Jamalpur • Sun-Dried Red Chilli Harvest"},{id:6,title:"Rajshahi Tree-Ripened Mangoes • রাজশাহীর ফরমালিনমুক্ত আম",subtitle:"Premium chemical-free paper-bagged Amrapali and Fazli orchards generating high seasonal harvest profits.",tag:"High Seasonal Return",image:"/images/rajshahi-mango-harvest.jpg",alt:"Farmers harvesting ripe mangoes in Rajshahi orchard during golden morning",caption:"Charghat, Rajshahi • Organic Mango Orchards"}],N=[{id:"proj-chilli-bogura",name:"Red Chilli farming - 1",bengaliName:"বগুড়া ও জামালপুর উন্নত জাতের লাল মরিচ চাষ",category:"crops",location:"Bogura & Jamalpur",district:"বগুড়া • Sariakandi, Bogura",image:"/images/red-chilli-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:64e4,fundingGoalBDT:8e5,minInvestmentBDT:2e4,potentialReturn:"15.5% – 18.2%",bengaliReturn:"১৫.৫% – ১৮.২% প্রতি ৩ মাস",returnRangePercent:[15.5,18.2],duration:"24 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 23,100 – ৳ 23,640",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"মরিচ চাষি সমবায় (Bogura Chilli Farmers)",producerRole:"Lead Producer & Field Director",cooperativeInfo:"Bogura Char Agriculture Alliance",shortStory:"High-yield sun-dried red chillies produced on fertile Jamuna riverbanks with guaranteed corporate procurement by top spices brands.",fullDescription:"Supplies high-yield drought-tolerant chili seedlings, bio-fertilizers, and clean solar drying tarpaulins to 24 river-island farmers. Guaranteed purchase agreements with leading spice brands in Bangladesh.",profitSharingRatio:"65% Chilli Grower / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% মরিচ চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Payout upon post-drying bulk sale.","Aflatoxin-free moisture testing verified before delivery.","Direct purchase agreements with certified spice millers."],verificationChecklist:["Field inspection of Jamuna char farmland completed","Solar drying floor and moisture control certified","Corporate supply agreement signed with national spice processors"]},{id:"proj-potato-munshiganj",name:"Munshiganj Organic Potato Harvest",bengaliName:"মুন্সীগঞ্জ উন্নত জাতের গোল আলু প্রকল্প",category:"crops",location:"Munshiganj Hub",district:"মুন্সীগঞ্জ • Tongibari, Munshiganj",image:"/images/munshiganj-potato-harvest.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:58e4,fundingGoalBDT:75e4,minInvestmentBDT:1e4,potentialReturn:"16.0% – 19.2%",bengaliReturn:"১৬.০% – ১৯.২% প্রতি ৪ মাস",returnRangePercent:[16,19.2],duration:"26 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 11,600 – ৳ 11,920",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"মোঃ বাবুল হোসেন ও কৃষক দল",producerRole:"Chief Potato Cultivator",cooperativeInfo:"Padma Basin Potato Growers Samity",shortStory:"Disease-free certified seed potatoes grown in silt-rich soil of Munshiganj with direct cold-storage preservation.",fullDescription:"Finances certified Diamant and Cardinal seed tubers, natural compost fertilization, and climate-controlled micro-cold storage to avoid mid-season market distress sales.",profitSharingRatio:"65% Potato Farmer / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% আলু চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month crop cycle payout.","Cold storage warehouse receipts held as financial collateral.","Quality sorting and grading completed at packing facility."],verificationChecklist:["Upazila Agriculture Officer verified seed origin","Soil nutrient and irrigation availability audited","Warehouse cold room temperature logs integrated"]},{id:"proj-beter-jhuri",name:"Beter Jhuri & Bamboo Craft Collective",bengaliName:"সিলেট ও জামালপুর বেতের ঝুড়ি ও হ্যান্ডব্যাগ সমবায়",category:"handicrafts",location:"Sylhet & Jamalpur",district:"সিলেট • Gowainghat, Sylhet",image:"/images/beter-jhuri-bag.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:42e4,fundingGoalBDT:6e5,minInvestmentBDT:7500,potentialReturn:"14.5% – 17.0%",bengaliReturn:"১৪.৫% – ১৭.০% প্রতি ৪ মাস",returnRangePercent:[14.5,17],duration:"21 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 8,585 – ৳ 8,775",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"সুফিয়া খাতুন ও ২৮ নারী কারিগর",producerRole:"Master Artisan & Cooperative Head",cooperativeInfo:"Surma Cane & Bamboo Women Guild",shortStory:"Preserving heritage cane weaving with stylish eco-friendly handbags, shopping baskets, and artisanal storage bins.",fullDescription:"Empowers 28 rural women artisans with bulk treated cane (বেত) and bamboo splits. Products are finished with natural plant dyes and sold to export boutiques and premium domestic outlets.",profitSharingRatio:"70% Women Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% নারী কারিগর / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Batch settlement upon boutique distribution.","Weekly advance fair-wage stipends for artisans.","Zero synthetic plastic in all woven goods."],verificationChecklist:["Artisan workshops physically inspected and certified","Quality control guidelines verified for export standards","Mobile banking verification for each individual artisan"]},{id:"proj-poultry-gazipur",name:"Sustainable Poultry Cluster",bengaliName:"টেকসই ব্রয়লার ও বাণিজ্যিক পোল্ট্রি খামার",category:"livestock",location:"Gazipur Agro Hub",district:"গাজীপুর • Gazipur, Dhaka",image:"/images/sustainable-poultry.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:48e4,fundingGoalBDT:8e5,minInvestmentBDT:7500,potentialReturn:"15.5% – 18.2%",bengaliReturn:"১৫.৫% – ১৮.২% বার্ষিক মুনাফা",returnRangePercent:[15.5,18.2],duration:"28 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 8,660 – ৳ 8,865",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"Md. Delwar Hossain & 6 Farmers",producerRole:"Managing Farm Director",cooperativeInfo:"Gazipur Eco-Broiler Growers Association",shortStory:"Modern bio-secure poultry facility in Gazipur producing antibiotic-free broiler meat with automated bell drinkers and organic grain feeding.",fullDescription:"This verified poultry project provides working capital for day-old high-grade chicks, bio-fermented grain feed, veterinary vaccinations, and automated temperature-controlled sheds. Meat is sold directly to vetted Dhaka supermarket chains, returning 65% of net profits to the grower and 35% to investors under an ethical Mudarabah agreement.",profitSharingRatio:"65% Poultry Grower / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% পোল্ট্রি খামারি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Estimated payout upon 60-day batch sale.","Veterinary clearance certificates updated weekly.","Direct-to-wholesale corporate contracts secured.","Asset-backed by live flock and equipment."],verificationChecklist:["Site inspected by Gazipur Upazila Livestock Officer","Bio-security fencing & clean water borehole confirmed","Corporate supply agreement with Shwapno & Meena Bazar verified","Digital batch ledger linked with GramBondhon portal"]},{id:"proj-fish-mymensingh",name:"Freshwater Rui-Katla Aquaculture",bengaliName:"ময়মনসিংহ রুপালি রুই ও কাতলা মাছ চাষ",category:"fisheries",location:"Mymensingh Aquaculture Hub",district:"ময়মনসিংহ • Trishal, Mymensingh",image:"/images/freshwater-fish-culture.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:6e5,fundingGoalBDT:9e5,minInvestmentBDT:12e3,potentialReturn:"17.5% – 21.0%",bengaliReturn:"১৭.৫% – ২১.০% প্রতি ৬ মাস",returnRangePercent:[17.5,21],duration:"32 Days Left",durationMonths:6,periodText:"6 Months",totalReturnBDT:"৳ 14,100 – ৳ 14,520",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"আব্দুল মোমেন ও মৎস্যচাষি দল",producerRole:"Lead Fishery Specialist",cooperativeInfo:"Brahmaputra Fishery Cooperative",shortStory:"Commercial freshwater carp aquaculture in clean earthen ponds with bio-floc aeration and pelleted nutritious feed.",fullDescription:"Finances fingerlings, oxygen aeration machinery, and certified fish feed for 4 interconnected ponds in Trishal. Harvested Rui, Katla, and Mrigel fish are auctioned at Kawran Bazar wholesale hub.",profitSharingRatio:"65% Fish Cultivator / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% মৎস্যচাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 6-month seasonal netting revenue settlement.","Routine water pH and dissolved oxygen lab testing.","Cold-chain insulated pickup vehicles booked for market dispatch."],verificationChecklist:["Pond ownership verified by District Fisheries Office","Water quality parameters and aeration systems tested","Wholesale commission agent auction contract validated"]},{id:"proj-mustard-manikganj",name:"Mustard & Pure Honey Apiculture",bengaliName:"মানিকগঞ্জ সরিষা ফুল ও খাঁটি মধু প্রকল্প",category:"crops",location:"Manikganj Mustard Valley",district:"মানিকগঞ্জ • Singair, Manikganj",image:"/images/mustard-honey-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:45e4,fundingGoalBDT:65e4,minInvestmentBDT:8e3,potentialReturn:"16.2% – 19.5%",bengaliReturn:"১৬.২% – ১৯.৫% প্রতি ৩ মাস",returnRangePercent:[16.2,19.5],duration:"18 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 9,295 – ৳ 9,560",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"মৌয়াল ও সরিষা চাষি সমবায়",producerRole:"Apiculture & Crop Lead",cooperativeInfo:"Dhaleshwari Honey Producers Union",shortStory:"Dual-revenue winter project: cold-pressed pungent mustard oil and raw wildflower honeycomb honey extracted by local beekeepers.",fullDescription:"Finances certified mustard seeds and 50 modern beehive wooden boxes placed in vast blooming yellow mustard fields. Generates double returns from raw honey jars and pure Ghani-pressed oil.",profitSharingRatio:"65% Farmer-Beekeeper / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% কৃষক-মৌয়াল / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Fast 90-day winter cycle turnaround.","Zero sugar adulteration certified by laboratory test.","Oil cold-pressed using traditional wooden Ghani machines."],verificationChecklist:["Beekeeping apiary boxes and centrifuge extractors audited","Mustard field acreage certified with Upazila agriculture wing","Honey purity testing verified with certified refractometer"]},{id:"proj-nakshi-rajshahi",name:"Nakshi Kantha Collective",bengaliName:"জামালপুর-রাজশাহী নকশী কাঁথা সমবায়",category:"handicrafts",location:"Islampur, Jamalpur",district:"জামালপুর ও রাজশাহী • Jamalpur, BD",image:"/images/nakshi-kantha-artisan.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:562500,fundingGoalBDT:75e4,minInvestmentBDT:7500,potentialReturn:"14.0% – 16.5%",bengaliReturn:"১৪.০% – ১৬.৫% বার্ষিক মুনাফা",returnRangePercent:[14,16.5],duration:"22 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 8,550 – ৳ 8,740",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"Rokeya Begum & 32 Artisans",producerRole:"Master Artisan & Cooperative Lead",cooperativeInfo:"Jamalpur-Rajshahi Karukriti Samity",shortStory:"Empowering 32 skilled village women to weave export-grade Nakshi Kantha quilts using pure combed cotton and azo-free natural dyes.",fullDescription:"Nakshi Kantha represents Bengal’s timeless heritage. This project bypasses middlemen to supply 32 rural artisans with bulk fine cotton, pure silk threads, and advance living stipends.",profitSharingRatio:"70% Women Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% নারী কারিগর / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Quarterly retail batch profit distribution.","Fair artisan wages disbursed weekly in advance.","Every quilt includes an artisan biographical authenticity tag."],verificationChecklist:["Artisan home looms physically validated by field coordinator","Cooperative bank account with dual-signatory verification","Export quality certification from EPB consultant"]},{id:"proj-highland-tea",name:"Highland Tea Collective",bengaliName:"পঞ্চগড় ও শ্রীমঙ্গল অর্গানিক চা বাগান",category:"crops",location:"Panchagarh & Sreemangal",district:"পঞ্চগড় • Panchagarh, Rangpur",image:"/images/highland-tea.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:72e4,fundingGoalBDT:8e5,minInvestmentBDT:1e4,potentialReturn:"16.5% – 19.5%",bengaliReturn:"১৬.৫% – ১৯.৫% বার্ষিক মুনাফা",returnRangePercent:[16.5,19.5],duration:"18 Days Left",durationMonths:6,periodText:"6 Months",totalReturnBDT:"৳ 11,650 – ৳ 11,950",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"Joynal Abedin & 18 Planters",producerRole:"Estate Field Director",cooperativeInfo:"North Bengal Organic Tea Consortium",shortStory:"Smallholder green tea terrace cultivation in Panchagarh using organic compost, solar water pumping, and whole-leaf micro-batch processing.",fullDescription:"Panchagarh is the burgeoning tea frontier of Bangladesh. This project finances whole-leaf organic tea flushes and solar-assisted drying facilities for 18 smallholder grower families.",profitSharingRatio:"60% Tea Planters / 40% Ethical Investors",investorShareText:"৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",bengaliProfitSplit:"৬০% চা চাষি / ৪০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Phased revenue settlement during peak plucking cycles.","Chemical pesticide-free organic soil certification monitored.","Fixed-price wholesale purchase commitments from European tea buyers."],verificationChecklist:["Land lease & tea garden boundary registered with Land Board","Organic soil audit confirms zero synthetic agrochemicals","Solar drying facility inspected and operational"]},{id:"proj-rajshahi-mangoes",name:"Rajshahi Organic Mangoes",bengaliName:"চারঘাট ফরমালিনমুক্ত আম্রপালি বাগান",category:"crops",location:"Charghat, Rajshahi",district:"রাজশাহী • Charghat, Rajshahi",image:"/images/rajshahi-mango-harvest.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:68e4,fundingGoalBDT:8e5,minInvestmentBDT:8e3,potentialReturn:"17.0% – 20.5%",bengaliReturn:"১৭.০% – ২০.৫% মৌসুমি মুনাফা",returnRangePercent:[17,20.5],duration:"25 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 9,360 – ৳ 9,640",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"Md. Enamul Haque & Orchard Group",producerRole:"Chief Orchardist",cooperativeInfo:"Padma Agro Fruit Producers Group",shortStory:"Chemical-free paper-bagged Amrapali and Fazli mangoes from 450 heritage trees in Charghat, shipped tree-ripe to urban consumers.",fullDescription:"Finances food-grade double-layered fruit bagging (cutting pesticide dependency by 95%), drip irrigation, and cushioned carton packaging.",profitSharingRatio:"65% Orchard Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% বাগান চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 5-month turnaround during seasonal harvest window.","Zero formalin, calcium carbide, or artificial ripening agents.","Direct-to-consumer pre-orders take care of sales volume."],verificationChecklist:["Orchard ownership verified with Charghat Sub-Registrar","Laboratory pesticide residue test report on sample fruits","Packaging and cold chain transit route finalized"]},{id:"proj-bogura-dairy",name:"Bogura Modern Dairy Hub",bengaliName:"বগুড়া উন্নত জাতের ডেইরি ও দুগ্ধ খামার",category:"livestock",location:"Sariakandi, Bogura",district:"বগুড়া • Sariakandi, Bogura",image:"/images/bogura-dairy-farm.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:63e4,fundingGoalBDT:9e5,minInvestmentBDT:15e3,potentialReturn:"15.0% – 17.8%",bengaliReturn:"১৫.০% – ১৭.৮% প্রতি ৬ মাস",returnRangePercent:[15,17.8],duration:"30 Days Left",durationMonths:6,periodText:"6 Months",totalReturnBDT:"৳ 17,250 – ৳ 17,670",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"Md. Al-Amin & 8 Dairy Farmers",producerRole:"Lead Livestock Manager",cooperativeInfo:"Jamuna Basin Dairy Collective",shortStory:"Hygienic milk chilling unit and organic silage feed cluster serving 15 village dairy producers in Bogura.",fullDescription:"Supplies high-grade silage nutrition, automated milking hygiene equipment, and bulk milk delivery contracts to regional sweetmeat confectioners.",profitSharingRatio:"60% Dairy Farmers / 40% Ethical Investors",investorShareText:"৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",bengaliProfitSplit:"৬০% ডেইরি খামারি / ৪০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Bi-monthly milk distribution settlement.","Disease and hoof health monitored bi-weekly.","Guaranteed purchase agreements with certified dairies."],verificationChecklist:["Veterinary officer certification on herd vaccination","Milk fat and SNF testing logs confirmed on digital lactometer","Chilling tank refrigeration backup generator installed"]},{id:"proj-clay-pottery",name:"Terracotta Clay Pottery Guild",bengaliName:"ধামরাই ও সাভার ঐতিহ্যবাহী মৃৎশিল্প সমবায়",category:"handicrafts",location:"Dhamrai, Dhaka",district:"ঢাকা • Dhamrai, Dhaka",image:"/images/clay-pottery.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:32e4,fundingGoalBDT:5e5,minInvestmentBDT:5e3,potentialReturn:"13.5% – 16.0%",bengaliReturn:"১৩.৫% – ১৬.০% প্রতি ৪ মাস",returnRangePercent:[13.5,16],duration:"19 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 5,675 – ৳ 5,800",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"গৌরাঙ্গ পাল ও ১২ পালপাড়া কারিগর",producerRole:"Master Sculptor & Potter",cooperativeInfo:"Dhamrai Terracotta Heritage Guild",shortStory:"Traditional terracotta cookware, curd pots (দইয়ের ভাঁড়), flower planters, and Bengali ornamental home decor.",fullDescription:"Finances purified alluvial clay, wood-fuel kilns, and electric potter wheels for Palpara artisan families in Dhamrai.",profitSharingRatio:"70% Potters / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% মৃৎশিল্পী / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month kiln batch profit settlement.","Zero lead chemical glazes; 100% organic fired terracotta.","Direct wholesale supply to sweet shops in Bogura & Dhaka."],verificationChecklist:["Kiln operation and smoke ventilation validated","Artisan registry and pottery showroom inspected","Local cooperative bank account verified"]},{id:"proj-rice-seedlings",name:"High-Yield Boro Seedlings Nursery",bengaliName:"রংপুর হাইব্রিড বোরো ধানের চারা ও ফলন",category:"crops",location:"Mithapukur, Rangpur",district:"রংপুর • Mithapukur, Rangpur",image:"/images/farmer-rice-planting.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:41e4,fundingGoalBDT:6e5,minInvestmentBDT:6e3,potentialReturn:"14.8% – 17.5%",bengaliReturn:"১৪.৮% – ১৭.৫% প্রতি ৪ মাস",returnRangePercent:[14.8,17.5],duration:"27 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 6,888 – ৳ 7,050",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"মোঃ সামসুল হক ও ১৪ কৃষক",producerRole:"Agronomist & Lead Farmer",cooperativeInfo:"North Bengal Rice Growers Forum",shortStory:"Disease-resistant high-yield Boro paddy seedlings grown in solar-irrigated seedbeds and distributed to smallholder farmers.",fullDescription:"Finances certified foundation seed from BADC, balanced micronutrient feeding, and efficient solar water pumping for dry-season rice production.",profitSharingRatio:"65% Rice Growers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% ধান চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Harvest grain weight verification upon threshing.","Registered with Upazila agriculture extension.","Disaster relief backup fund allocated in agreement."],verificationChecklist:["Certified seed lot numbers from BADC verified","Solar irrigation pump operational and audited","Farmer cooperative membership list validated"]},{id:"proj-jute-women",name:"Golden Fiber Jute & Eco Weaving",bengaliName:"ফরিদপুর সোনালী আঁশ পাট ও কারুপণ্য",category:"handicrafts",location:"Faridpur Jute Cluster",district:"ফরিদপুর • Boalmari, Faridpur",image:"/images/jute-bamboo-women.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:49e4,fundingGoalBDT:7e5,minInvestmentBDT:7e3,potentialReturn:"14.0% – 16.8%",bengaliReturn:"১৪.০% – ১৬.৮% প্রতি ৫ মাস",returnRangePercent:[14,16.8],duration:"23 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 7,980 – ৳ 8,175",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"হাসিনা বেগম ও ৪০ কারিগর",producerRole:"Cooperative President",cooperativeInfo:"Padma Golden Jute Weavers",shortStory:"Fine spun Tosha jute woven into zero-plastic shopping bags, home rugs, and braided plant hanging baskets for sustainable living.",fullDescription:"Supplies premium Tosha raw jute fibers and modernized handlooms to 40 women artisans in Faridpur, producing biodegradable export goods.",profitSharingRatio:"70% Jute Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% পাট কারিগর / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 5-month turnaround with bulk wholesale delivery.","Fair living wage stipends disbursed bi-weekly.","Biodegradable export packaging with zero chemical plastic."],verificationChecklist:["Weaving loom workshops inspected across 3 villages","Raw jute fiber moisture and tensile strength verified","Export order confirmation letter on file"]},{id:"proj-stepped-paddy",name:"Stepped Organic Paddy Cultivation",bengaliName:"বগুড়া ও দিনাজপুর সুগন্ধি ধান চাষ",category:"crops",location:"Dinajpur & Bogura",district:"দিনাজপুর • Birganj, Dinajpur",image:"/images/hero-bangladesh-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:54e4,fundingGoalBDT:75e4,minInvestmentBDT:9e3,potentialReturn:"15.2% – 18.0%",bengaliReturn:"১৫.২% – ১৮.০% প্রতি ৫ মাস",returnRangePercent:[15.2,18],duration:"29 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 10,368 – ৳ 10,620",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"মকবুল হোসেন ও কৃষক দল",producerRole:"Master Cultivator",cooperativeInfo:"Kataribhog Rice Producers Club",shortStory:"Heritage aromatic Kataribhog and Kalijira rice grown without chemical synthetic fertilizers using organic compost.",fullDescription:"Finances heirloom aromatic paddy cultivation in fertile northern plains. Milled rice is packaged in jute sacks for gourmet domestic markets and expatriate export.",profitSharingRatio:"65% Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% কৃষক / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 5-month harvest and milling cycle settlement.","Aromatic grain quality and moisture tested before packaging.","Contract farming agreement registered with Upazila board."],verificationChecklist:["Aromatic seed variety verified with BRRI researchers","Compost preparation and bio-pesticide methods inspected","Wholesale packaging facility ready for dispatch"]},{id:"proj-chilli-char-sariakandi",name:"Sariakandi River-Island Red Chilli",bengaliName:"সারিয়াকান্দি চরের লাল মরিচ সংগ্রহ",category:"crops",location:"Sariakandi Char, Bogura",district:"বগুড়া • Sariakandi, Bogura",image:"/images/red-chilli-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:72e4,fundingGoalBDT:9e5,minInvestmentBDT:12e3,potentialReturn:"16.0% – 19.0%",bengaliReturn:"১৬.০% – ১৯.০% প্রতি ৩ মাস",returnRangePercent:[16,19],duration:"15 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 13,920 – ৳ 14,280",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"মোঃ শফিকুল ইসলাম ও ২০ চর কৃষক",producerRole:"Char Agricultural Coordinator",cooperativeInfo:"Jamuna Char Farmers Collective",shortStory:"High-pungency river-silt chillies harvested across Jamuna chars and sun-dried on vast woven bamboo mats.",fullDescription:"Finances early chili seedling transplanting, safe solar dehydrator tents, and moisture-proof jute packaging for bulk supply to Dhaka grocery giants.",profitSharingRatio:"65% Char Growers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% চর চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Payout upon delivery to corporate processing hub.","Moisture level strictly capped at under 11%.","Asset backed by collected dry chili inventory."],verificationChecklist:["Char land cultivation boundaries gps-mapped","Quality solar drying tents inspected and validated","Signed invoice agreements with national spice brand"]},{id:"proj-potato-cold-rangpur",name:"Rangpur Cold Storage Seed Potato",bengaliName:"রংপুর হিমাগার বীজ আলু সংরক্ষণ ও বিতরণ",category:"crops",location:"Pirganj, Rangpur",district:"রংপুর • Pirganj, Rangpur",image:"/images/munshiganj-potato-harvest.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:51e4,fundingGoalBDT:7e5,minInvestmentBDT:8500,potentialReturn:"15.8% – 18.5%",bengaliReturn:"১৫.৮% – ১৮.৫% প্রতি ৪ মাস",returnRangePercent:[15.8,18.5],duration:"20 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 9,843 – ৳ 10,072",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"আমজাদ হোসেন ও সমবায় কৃষক",producerRole:"Cold Storage Director",cooperativeInfo:"Pirganj Farmers Seed Bank",shortStory:"Certified foundation seed potatoes stored in energy-efficient cold vaults to supply next season northern farmers.",fullDescription:"Guarantees disease-free certified foundation potato seeds for smallholders, preserving tubers during off-season heat and selling when demand peaks.",profitSharingRatio:"65% Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% আলু চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month cold storage settlement.","Temperature and humidity logged every 4 hours.","Insurance covers storage power outage or spoilage."],verificationChecklist:["Seed certification tags verified by BADC inspectors","Cold room insulation and refrigeration backup certified","Farmer purchase pre-bookings recorded"]},{id:"proj-cane-furniture-sylhet",name:"Sylhet Cane Basket & Home Craft",bengaliName:"সিলেট বেতের গৃহসজ্জা ও হস্তশিল্প",category:"handicrafts",location:"Beanibazar, Sylhet",district:"সিলেট • Beanibazar, Sylhet",image:"/images/beter-jhuri-bag.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:65e4,fundingGoalBDT:8e5,minInvestmentBDT:1e4,potentialReturn:"15.0% – 17.5%",bengaliReturn:"১৫.০% – ১৭.৫% প্রতি ৪ মাস",returnRangePercent:[15,17.5],duration:"16 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 11,500 – ৳ 11,750",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"তারেক মাহমুদ ও কারুশিল্পী দল",producerRole:"Cane Master Craftsman",cooperativeInfo:"Sylhet Cane Furniture Guild",shortStory:"Artisanal cane planters, stylish storage hampers, and sustainable home decor handwoven from natural wild forest canes.",fullDescription:"Finances seasoned natural cane poles, organic anti-termite treatments, and skilled village artisans in Sylhet crafting premium home goods for lifestyle brands.",profitSharingRatio:"70% Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% কারুশিল্পী / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Profit distribution upon boutique store consignment.","100% natural, chemical-free polishing.","Artisans receive fair wages upfront."],verificationChecklist:["Artisan workshop and raw cane seasoning area audited","Finished furniture strength and polish tested","Domestic retail showroom supply agreement confirmed"]},{id:"proj-fish-haor-sunamganj",name:"Sunamganj Haor Indigenous Fish",bengaliName:"সুনামগঞ্জ হাওরের দেশীয় মাছ সংরক্ষণ ও চাষ",category:"fisheries",location:"Tanguar Haor, Sunamganj",district:"সুনামগঞ্জ • Tahirpur, Sunamganj",image:"/images/freshwater-fish-culture.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:715e3,fundingGoalBDT:85e4,minInvestmentBDT:11e3,potentialReturn:"18.0% – 21.5%",bengaliReturn:"১৮.০% – ২১.৫% প্রতি ৫ মাস",returnRangePercent:[18,21.5],duration:"22 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 12,980 – ৳ 13,365",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"আব্দুস সোবহান ও হাওর জেলে সমবায়",producerRole:"Haor Fishery Coordinator",cooperativeInfo:"Tanguar Haor Fishermen Community",shortStory:"Native freshwater Boal, Shol, Pabda, and Ayre fish reared in community-protected sanctuary enclosures in Sunamganj haor basin.",fullDescription:"Finances deep natural water enclosure pens, live organic food supply, and eco-harvesting protocols to conserve endangered indigenous fish varieties while earning high premiums.",profitSharingRatio:"65% Fishermen / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% মৎস্যজীবী / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 5-month seasonal harvest settlement.","Sanctuary regulations respected; no undersized fish netted.","Transported live in aerated water tanks to premium Dhaka markets."],verificationChecklist:["Haor community enclosure license confirmed","Live fish transportation water tank and oxygen pump verified","Daily catch log audited by local fisheries staff"]},{id:"proj-honey-sundarbans",name:"Sundarbans Coastal Mangrove Honey",bengaliName:"সুন্দরবন প্রাকৃতিক মৌয়াল মধু সংগ্রহ",category:"crops",location:"Shyamnagar, Satkhira",district:"সাতক্ষীরা • Shyamnagar, Satkhira",image:"/images/mustard-honey-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:39e4,fundingGoalBDT:5e5,minInvestmentBDT:6500,potentialReturn:"16.5% – 19.8%",bengaliReturn:"১৬.৫% – ১৯.৮% প্রতি ৩ মাস",returnRangePercent:[16.5,19.8],duration:"14 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 7,570 – ৳ 7,785",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"মৌয়াল সমবায় সমিতি",producerRole:"Forest Honey Cooperative Leader",cooperativeInfo:"Sundarbans Mouyal Kalyan Samity",shortStory:"Pure raw Khalsi and Goran flower honey harvested by traditional Mouyals with safety gear and glass jar packaging.",fullDescription:"Provides protective beekeeping gear, non-destructive harvesting training, and food-grade glass bottling facilities. Pure raw honey is sold directly to consumers.",profitSharingRatio:"70% Mouyals / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% মৌয়াল / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Payout upon harvest batch bottling.","100% pure raw unpasteurized honey with natural pollen.","BSTI and lab chemical purity certificates guaranteed."],verificationChecklist:["Forest Department collection permit verified","Laboratory sugar and moisture test passed","Sterilized glass bottling line inspected"]},{id:"proj-dairy-sirajganj",name:"Sirajganj Baghabari Dairy Cooperative",bengaliName:"সিরাজগঞ্জ বাঘাবাড়ী দুগ্ধ খামার সমবায়",category:"livestock",location:"Shahjadpur, Sirajganj",district:"সিরাজগঞ্জ • Shahjadpur, Sirajganj",image:"/images/bogura-dairy-farm.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:99e4,fundingGoalBDT:12e5,minInvestmentBDT:18e3,potentialReturn:"15.2% – 18.0%",bengaliReturn:"১৫.২% – ১৮.০% প্রতি ৬ মাস",returnRangePercent:[15.2,18],duration:"31 Days Left",durationMonths:6,periodText:"6 Months",totalReturnBDT:"৳ 20,736 – ৳ 21,240",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"আনিসুর রহমান ও দুগ্ধ সমবায়",producerRole:"Dairy Cooperative Secretary",cooperativeInfo:"Baghabari Milk Producers Society",shortStory:"Lush bathan-grazing cows yielding high-butterfat pure milk processed for sweetmeat and ghee production.",fullDescription:"Finances balanced cattle nutrition, veterinary disease prevention, and chilled storage for smallholder dairy farmers in the famous Baghabari milk zone.",profitSharingRatio:"60% Dairy Farmers / 40% Ethical Investors",investorShareText:"৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",bengaliProfitSplit:"৬০% খামারি / ৪০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Bi-weekly milk sale revenue disbursements.","Veterinary doctor conducts health checks every 10 days.","Milk purchased directly under long-term contract with sweet makers."],verificationChecklist:["Bathan pasture grazing rights verified","Milking hygiene and stainless-steel transport cans certified","Daily milk fat testing ledger linked to portal"]},{id:"proj-pottery-rajshahi",name:"Terracotta Garden Planters & Tiles",bengaliName:"রাজশাহী টেরাকোটা বাগানপাত্র ও টালি সমবায়",category:"handicrafts",location:"Paba, Rajshahi",district:"রাজশাহী • Paba, Rajshahi",image:"/images/clay-pottery.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:36e4,fundingGoalBDT:5e5,minInvestmentBDT:6e3,potentialReturn:"14.0% – 16.5%",bengaliReturn:"১৪.০% – ১৬.৫% প্রতি ৪ মাস",returnRangePercent:[14,16.5],duration:"24 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 6,840 – ৳ 6,990",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"রমেশ পাল ও কুমার কারিগর দল",producerRole:"Chief Terracotta Craftsman",cooperativeInfo:"Padma Clay Artisans Society",shortStory:"Weather-resistant hand-molded terracotta architectural tiles, planter pots, and traditional water pitchers.",fullDescription:"Supports 16 rural potter families in Rajshahi with fine red silt clay and energy-efficient kilns, supplying urban landscaping nurseries and architects.",profitSharingRatio:"70% Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% কারিগর / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month kiln batch distribution.","Breakage insurance included in logistics budget.","Zero lead chemical glaze."],verificationChecklist:["Artisan village workshop verified by local union council","Finished product fire-baking hardness tested","Direct order receipts from nursery association confirmed"]},{id:"proj-chilli-comilla",name:"Chandpur & Comilla Naga Chilli",bengaliName:"কুমিল্লা ও চাঁদপুর বোম্বাই ও নাগা মরিচ চাষ",category:"crops",location:"Faridganj, Chandpur",district:"চাঁদপুর • Faridganj, Chandpur",image:"/images/red-chilli-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:84e4,fundingGoalBDT:1e6,minInvestmentBDT:14e3,potentialReturn:"16.5% – 19.5%",bengaliReturn:"১৬.৫% – ১৯.৫% প্রতি ৪ মাস",returnRangePercent:[16.5,19.5],duration:"17 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 16,310 – ৳ 16,730",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"মজিবুর রহমান ও কৃষক সমিতি",producerRole:"Specialty Chili Grower",cooperativeInfo:"Meghna Agro Spices Forum",shortStory:"Export-grade intensely aromatic Naga Morich (Ghost Pepper) cultivated under micro-mesh netting for export to London and Middle East.",fullDescription:"Finances protected net houses, organic drip fertigation, and padded export crates for premium high-capsaicin fresh chili peppers.",profitSharingRatio:"65% Growers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% মরিচ চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Harvest settlements every 30 days during harvest peak.","Export air-freight logistics partner on standby.","Complete phytosanitary lab testing guaranteed."],verificationChecklist:["Net house shading and drip irrigation operational","Export quarantine phytosanitary clearance verified","International freight booking order logged"]},{id:"proj-potato-bogura",name:"Shibganj Diamond Potato Harvest",bengaliName:"শিবগঞ্জ ডায়মন্ড আলু সরাসরি রফতানি প্রকল্প",category:"crops",location:"Shibganj, Bogura",district:"বগুড়া • Shibganj, Bogura",image:"/images/munshiganj-potato-harvest.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:617500,fundingGoalBDT:85e4,minInvestmentBDT:9500,potentialReturn:"15.5% – 18.2%",bengaliReturn:"১৫.৫% – ১৮.২% প্রতি ৪ মাস",returnRangePercent:[15.5,18.2],duration:"22 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 10,972 – ৳ 11,229",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"খোন্দকার মোস্তফা ও আলু চাষি দল",producerRole:"Field Director",cooperativeInfo:"Bogura Agro Potato Exporters Club",shortStory:"Export-standard Diamant potatoes grown in rich Karatoya soil for fresh supermarket supply and potato chip processors.",fullDescription:"Provides certified seeds and pest-resistant organic spray protocols to 18 farmers in Bogura. Crop is harvested and packaged in breathable jute sacks.",profitSharingRatio:"65% Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month farmgate delivery payout.","Sorting and grading by diameter standards.","Zero synthetic chemical dusting."],verificationChecklist:["Field soil and fertilizer balance certified by DAE","Storage shed ventilated with digital thermometers","Contract agreement with food processing buyers verified"]},{id:"proj-shitolpati-sylhet",name:"Traditional Shitol Pati Cane Mat",bengaliName:"মৌলভীবাজার শীতল পাটি ও বেতের দোলনা সমবায়",category:"handicrafts",location:"Rajnagar, Moulvibazar",district:"মৌলভীবাজার • Rajnagar, Sylhet",image:"/images/beter-jhuri-bag.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:48e4,fundingGoalBDT:6e5,minInvestmentBDT:8e3,potentialReturn:"14.2% – 16.8%",bengaliReturn:"১৪.২% – ১৬.৮% প্রতি ৪ মাস",returnRangePercent:[14.2,16.8],duration:"19 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 9,136 – ৳ 9,344",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"জয়া রানী দে ও কারিগর দল",producerRole:"UNESCO Heritage Artisan Lead",cooperativeInfo:"Sylhet Shitol Pati Weavers Society",shortStory:"UNESCO-recognized handwoven Murta cane mats that naturally stay cool in summer, paired with woven cane cradle baskets.",fullDescription:"Finances raw Murta plant cane harvesting and water-soaking for 25 women artisans preserving Bengal’s world-famous Shitol Pati heritage.",profitSharingRatio:"70% Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% কারিগর / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Quarterly export consignment payout.","Authentic certified Murta cane strips.","Fair wages credited to mobile wallets."],verificationChecklist:["Heritage artisan family lineage and skills audited","Murta reed plantation inventory checked","Craft exhibition sales partner confirmed"]},{id:"proj-prawn-khulna",name:"Khulna Bagda & Galda Shrimps",bengaliName:"খুলনা লবণাক্ত মিষ্টি জলের গলদা চিংড়ি প্রকল্প",category:"fisheries",location:"Paikgachha, Khulna",district:"খুলনা • Paikgachha, Khulna",image:"/images/freshwater-fish-culture.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:13e5,fundingGoalBDT:16e5,minInvestmentBDT:2e4,potentialReturn:"18.5% – 22.0%",bengaliReturn:"১৮.৫% – ২২.০% প্রতি ৫ মাস",returnRangePercent:[18.5,22],duration:"28 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 23,700 – ৳ 24,400",returnTypeTag:"Variable Return",riskLevel:"Medium-High",producerName:"মোঃ গোলাম মোস্তফা ও ঘের মালিক সমবায়",producerRole:"Lead Shrimp Farmer",cooperativeInfo:"Sundarbans Coastal Aquaculture Society",shortStory:"Organic SPF post-larvae giant freshwater prawns reared in brackish water gher enclosures with mangrove water exchange.",fullDescription:"Supplies certified disease-free PL seeds, organic feed, and water salinity control to 8 shrimp farmers in Khulna, producing premium seafood.",profitSharingRatio:"65% Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% চিংড়ি চাষি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 5-month harvest turnaround.","Antibiotic-free laboratory verification.","Direct purchase agreement with export processing plant."],verificationChecklist:["Gher dike structural strength and water gate certified","PCR laboratory report on zero viral pathogen in seeds","Processing plant export agreement verified"]},{id:"proj-mustard-tangail",name:"Tangail Maghi Mustard Cold-Press",bengaliName:"টাঙ্গাইল মাঘী সরিষা ও খাঁটি ঘানি তেল সমবায়",category:"crops",location:"Mirzapur, Tangail",district:"টাঙ্গাইল • Mirzapur, Tangail",image:"/images/mustard-honey-farming.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:46e4,fundingGoalBDT:6e5,minInvestmentBDT:7500,potentialReturn:"16.0% – 18.8%",bengaliReturn:"১৬.০% – ১৮.৮% প্রতি ৩ মাস",returnRangePercent:[16,18.8],duration:"16 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 8,700 – ৳ 8,910",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"আব্দুল কাদের ও সরিষা খামারি দল",producerRole:"Mustard Mill Manager",cooperativeInfo:"Tangail Ghani Oil Producers Club",shortStory:"Winter Maghi mustard seeds cold-pressed slowly in wooden mortar Ghanis to retain full aroma and zero chemical residues.",fullDescription:"Finances local farmers to grow indigenous Maghi mustard seeds and operate slow wooden cold presses, delivering pure pungent mustard oil to health-conscious consumers.",profitSharingRatio:"65% Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% কৃষক / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 90-day winter crop and pressing cycle.","Zero synthetic color or chemical solvents.","Delivered in food-grade tin containers."],verificationChecklist:["Cold-press wooden ghani machines inspected","Mustard seed purity and low moisture audited","Food safety clearance certificate verified"]},{id:"proj-poultry-narsingdi",name:"Narsingdi Sonali Free-Range Poultry",bengaliName:"নরসিংদী সোনালী মুরগি ও ডিম খামার সমবায়",category:"livestock",location:"Shibpur, Narsingdi",district:"নরসিংদী • Shibpur, Narsingdi",image:"/images/sustainable-poultry.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:56e4,fundingGoalBDT:75e4,minInvestmentBDT:8e3,potentialReturn:"15.8% – 18.5%",bengaliReturn:"১৫.৮% – ১৮.৫% প্রতি ৩ মাস",returnRangePercent:[15.8,18.5],duration:"21 Days Left",durationMonths:3,periodText:"3 Months",totalReturnBDT:"৳ 9,264 – ৳ 9,480",returnTypeTag:"Variable Return",riskLevel:"Low-Medium",producerName:"কামাল উদ্দিন ও খামারি দল",producerRole:"Managing Breeder",cooperativeInfo:"Narsingdi Free-Range Poultry Forum",shortStory:"Hardy indigenous Sonali breed chickens reared in spacious ventilated sheds with open-range outdoor foraging runs.",fullDescription:"Provides certified day-old Sonali chicks, high-protein organic grain feed, and veterinary biosecurity. Meat and eggs are sold directly to Dhaka organic food stores.",profitSharingRatio:"65% Poultry Farmers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% খামারি / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 75-day flock marketing settlement.","Regular vaccination recorded by livestock officer.","Asset backed by live flock inventory."],verificationChecklist:["Free-range enclosure fencing verified","Veterinary vaccine log books audited","Direct purchase agreements with retail shops on record"]},{id:"proj-tea-panchagarh",name:"Panchagarh Plainland Green Tea Estate",bengaliName:"পঞ্চগড় সমতলের অর্গানিক গ্রিন টি প্রকল্প",category:"crops",location:"Tetulia, Panchagarh",district:"পঞ্চগড় • Tetulia, Rangpur",image:"/images/highland-tea.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:78e4,fundingGoalBDT:95e4,minInvestmentBDT:10500,potentialReturn:"16.0% – 19.0%",bengaliReturn:"১৬.০% – ১৯.০% প্রতি ৬ মাস",returnRangePercent:[16,19],duration:"25 Days Left",durationMonths:6,periodText:"6 Months",totalReturnBDT:"৳ 12,180 – ৳ 12,495",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"সিরাজুল ইসলাম ও চা চাষি সমবায়",producerRole:"Estate Manager",cooperativeInfo:"Borderland Tea Planters Union",shortStory:"Himalayan foothills plainland organic tea garden in Tetulia, producing tender two-leaves-and-a-bud green tea.",fullDescription:"Finances eco-friendly organic manure, micro-sprinklers, and modern leaf rolling machinery for smallholders in northernmost Bangladesh.",profitSharingRatio:"60% Tea Planters / 40% Ethical Investors",investorShareText:"৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",bengaliProfitSplit:"৬০% চা চাষি / ৪০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 6-month plucking cycle settlement.","Certified 100% pesticide-free whole leaf.","Direct factory processing agreement with tea brand."],verificationChecklist:["Tea Board smallholder registration verified","Organic soil audit report passed","Sprinkler irrigation operational"]},{id:"proj-mango-chapainawabganj",name:"Shibganj Fazli & Amrapali Mango Orchard",bengaliName:"চাঁপাইনবাবগঞ্জ শিবগঞ্জ ফজলি আম বাগান",category:"crops",location:"Shibganj, Chapainawabganj",district:"চাঁপাইনবাবগঞ্জ • Shibganj, Rajshahi",image:"/images/rajshahi-mango-harvest.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:72e4,fundingGoalBDT:9e5,minInvestmentBDT:9e3,potentialReturn:"17.2% – 20.8%",bengaliReturn:"১৭.২% – ২০.৮% প্রতি ৫ মাস",returnRangePercent:[17.2,20.8],duration:"26 Days Left",durationMonths:5,periodText:"5 Months",totalReturnBDT:"৳ 10,548 – ৳ 10,872",returnTypeTag:"Variable Return",riskLevel:"Medium",producerName:"মোঃ শফিকুল আলম ও বাগান মালিক",producerRole:"Heritage Mango Cultivator",cooperativeInfo:"Ganges Basin Fruit Growers",shortStory:"GI-certified Fazli, Khirsapat, and Langra mangoes grown with eco fruit bagging to protect against fruit flies without chemicals.",fullDescription:"Finances tree pruning, organic soil composting, and fruit-bagging on 500 mature trees in Chapainawabganj, delivering tree-ripened fruit.",profitSharingRatio:"65% Growers / 35% Ethical Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% বাগান মালিক / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: Post-harvest 5-month seasonal settlement.","Chemical-free ripening in wooden crates with clean rice straw.","Direct courier shipping to pre-booked corporate consumers."],verificationChecklist:["Orchard deed and tree count physically validated","Double-layer paper bags applied and inspected","Logistics delivery fleet contract signed"]},{id:"proj-jute-crafts-dhaka",name:"Export-Grade Jute Rugs & Fashion Totes",bengaliName:"ঢাকা হস্তশিল্প বহুমুখী পাটপণ্য ও শপিং ব্যাগ",category:"handicrafts",location:"Sonargaon, Narayanganj",district:"নারায়ণগঞ্জ • Sonargaon, Dhaka",image:"/images/jute-bamboo-women.jpg",badge:"LIVE",verified:!0,fundingRaisedBDT:518400,fundingGoalBDT:72e4,minInvestmentBDT:7200,potentialReturn:"14.5% – 17.2%",bengaliReturn:"১৪.৫% – ১৭.২% প্রতি ৪ মাস",returnRangePercent:[14.5,17.2],duration:"20 Days Left",durationMonths:4,periodText:"4 Months",totalReturnBDT:"৳ 8,244 – ৳ 8,438",returnTypeTag:"Variable Return",riskLevel:"Low",producerName:"ফরিদা ইয়াসমিন ও কারুশিল্পী দল",producerRole:"Cooperative Design Director",cooperativeInfo:"Shitolakshya Jute Artisans Samity",shortStory:"Natural braided golden jute floor rugs, beach totes, and table runners handcrafted by 35 rural women artisans.",fullDescription:"Supplies bleached and dyed export-grade jute yarns to village women artisans in Sonargaon, supplying European fair-trade boutiques.",profitSharingRatio:"70% Artisans / 30% Ethical Investors",investorShareText:"৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",bengaliProfitSplit:"৭০% পাটশিল্পী / ৩০% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 4-month order fulfillment settlement.","Fair wages credited directly to mobile accounts.","Azo-free environmental dyes used."],verificationChecklist:["Handloom workshops in Sonargaon audited","Sample rugs passed international abrasion tests","Export purchase order on record"]}],j={id:"proj-rangpur-solar-potato",name:"Rangpur Community Solar Cold Storage & Potato Farm",bengaliName:"রংপুর কমিউনিটি সৌর কোল্ড স্টোরেজ ও আলু চাষ",category:"agriculture",location:"Mithapukur, Rangpur",district:"রংপুর • Mithapukur, Rangpur",image:"/images/hero-bangladesh-farming.jpg",badge:"Featured Project of the Month",verified:!0,fundingRaisedBDT:142e4,fundingGoalBDT:18e5,minInvestmentBDT:1e4,potentialReturn:"15.0% - 18.5% est.",bengaliReturn:"১৫.০% – ১৮.৫% বার্ষিক মুনাফা",returnRangePercent:[15,18.5],duration:"7 Months",durationMonths:7,riskLevel:"Low-Medium",producerName:"Md. Rafiqul Islam & 14 Smallholder Farmers",producerRole:"Lead Cooperative Director",cooperativeInfo:"Mithapukur Green Krishi Samity",shortStory:"Solving the seasonal distress-sale crisis by combining high-yield certified seed potato cultivation with an on-farm 50-tonne solar micro-cold store.",fullDescription:"Every winter, thousands of hardworking Rangpur potato growers face crushing losses because conventional cold storage slots are monopolized by middlemen. This game-changing project finances a shared 50-metric-tonne decentralized solar-powered cooling chamber right beside the cultivation fields. Farmers can safely hold their crop for 4 months and sell during peak market prices, increasing net profits by up to 60%.",profitSharingRatio:"65% Farmer Cooperative / 35% Investors",investorShareText:"৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",bengaliProfitSplit:"৬৫% কৃষক সমবায় / ৩৫% নৈতিক বিনিয়োগকারী",terms:["DEMO DATA: 7-month investment tenure covering sowing, harvest, storage, and phased sale.","Solar refrigeration equipment insured against electrical/mechanical failure.","Cold room temperature and humidity monitored via live IoT sensors.","Transparent digital audit of every kilogram entered and dispatched."],verificationChecklist:["Physical land verification for cold-chamber installation completed","Technical blueprint approved by BUET-trained renewable energy consultant","Cooperative bylaws registered with Directorate of Cooperatives","Signed letter of consent from all 14 farmer families"],isFeatured:!0},A=[{id:"prod-chinigura-rice",name:"Premium Chinigura Aromatic Rice",bengaliName:"দিনাজপুরের প্রিমিয়াম সুগন্ধি চিনিগুঁড়া চাল",category:"farming",priceBDT:140,originalPriceBDT:175,discountPercent:20,unit:"1 kg",image:"/images/chinigura-rice.jpg",artisanName:"Shonali Organic Farm",artisanDistrict:"Dinajpur",craftType:"Traditional Indigenous Crop",description:"Freshly milled, fragrant non-sticky Chinigura rice cultivated with zero toxic chemical pesticides in Dinajpur.",rating:4.9,reviewsCount:142,flashDeal:!0,sellerCooperative:"Dinajpur Farmer Samity",originVillage:"Birganj, Dinajpur",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-miniket-rice",name:"Kushtia Premium Miniket Rice",bengaliName:"কুষ্টিয়ার ঝরঝরে বাসমতি মিনিকেট চাল",category:"farming",priceBDT:82,originalPriceBDT:95,discountPercent:14,unit:"1 kg",image:"/images/products/miniket-rice.jpg",artisanName:"Kushtia Agro Farmers",artisanDistrict:"Kushtia",craftType:"Paddy Milling",description:"Slender, long-grain Miniket rice processed from newly harvested paddy, perfect for daily healthy family dining.",rating:4.8,reviewsCount:88,flashDeal:!1,sellerCooperative:"Padma Agro Union",originVillage:"Kumarkhali, Kushtia",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-kalijira-rice",name:"Kalijira Gobindobhog Fine Polao Rice",bengaliName:"কালোজিরা সুগন্ধি পোলাও চাল",category:"farming",priceBDT:155,originalPriceBDT:180,discountPercent:14,unit:"1 kg",image:"/images/products/kalijira-rice.jpg",artisanName:"Barind Heritage Grain",artisanDistrict:"Naogaon",craftType:"Aromatic Paddy",description:"Miniature grain heirloom rice reserved for celebratory Polao, Biryani, and festive Bengali Payesh.",rating:4.9,reviewsCount:64,flashDeal:!0,sellerCooperative:"Naogaon Organic Growers",originVillage:"Manda, Naogaon",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-shonali-moong-dal",name:"Shonali Roasted Moong Dal",bengaliName:"সোনালী ভাজা মুগ ডাল",category:"farming",priceBDT:165,originalPriceBDT:190,discountPercent:13,unit:"1 kg",image:"/images/products/moong-dal.jpg",artisanName:"Faridpur Pulse Guild",artisanDistrict:"Faridpur",craftType:"Solar Dried Pulses",description:"Golden roasted split green gram pulse delivering signature aroma and velvety texture for traditional Bhuna Khichuri.",rating:4.8,reviewsCount:76,flashDeal:!1,sellerCooperative:"Faridpur Krishi Kallyan",originVillage:"Bhanga, Faridpur",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-munshiganj-potatoes",name:"Munshiganj Diamond Potatoes (Bagged)",bengaliName:"মুন্সীগঞ্জের ডায়মন্ড জাতের তাজা আলু",category:"farming",priceBDT:55,originalPriceBDT:65,discountPercent:15,unit:"5 kg net",image:"/images/products/real-potatoes.jpg",artisanName:"Padma River Alluvial Farms",artisanDistrict:"Munshiganj",craftType:"Cold-Storage Root Crop",description:"Firm skin, pesticide-monitored diamond potatoes direct from Munshiganj cold-storages for everyday cooking.",rating:4.7,reviewsCount:198,flashDeal:!1,sellerCooperative:"Munshiganj Potato Farmers",originVillage:"Tongibari, Munshiganj",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-pabna-red-onions",name:"Pabna Indigenous Deshi Red Onions",bengaliName:"পাবনার দেশি লাল পেঁয়াজ",category:"farming",priceBDT:85,originalPriceBDT:100,discountPercent:15,unit:"2 kg bag",image:"/images/products/red-onions.jpg",artisanName:"Pabna Alluvial Farm Alliance",artisanDistrict:"Pabna",craftType:"Pungent Deshi Onion Harvest",description:"Tight-skinned, highly aromatic small deshi onions with pungent zest essential for authentic Bengali curries.",rating:4.8,reviewsCount:134,flashDeal:!1,sellerCooperative:"Santhia Growers Samity",originVillage:"Santhia, Pabna",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-fresh-carrots",name:"Fresh Organic Farm Carrots",bengaliName:"মাঠের তাজা লাল গাজর",category:"farming",priceBDT:70,originalPriceBDT:85,discountPercent:18,unit:"1 kg bunch",image:"/images/products/fresh-carrots.jpg",artisanName:"Bogura Vegetable Farmers",artisanDistrict:"Bogura",craftType:"Organic Root Cultivation",description:"Crisp, sweet, bright orange fresh farm carrots harvested daily with green tops intact.",rating:4.8,reviewsCount:55,flashDeal:!1,sellerCooperative:"Bogura Farmers Welfare Association",originVillage:"Shibganj, Bogura",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-fresh-cucumber",name:"Fresh Green Deshi Cucumber",bengaliName:"মাঠের টাটকা দেশি শসা",category:"farming",priceBDT:60,originalPriceBDT:75,discountPercent:20,unit:"1 kg",image:"/images/products/fresh-cucumber.jpg",artisanName:"Jessore Alluvial Farms",artisanDistrict:"Jashore",craftType:"Hydro-Natural Gardening",description:"Tender, crunchy small seed deshi cucumbers freshly picked in morning dew for refreshing salads.",rating:4.7,reviewsCount:48,flashDeal:!1,sellerCooperative:"Jashore Agro Cooperative",originVillage:"Monirampur, Jashore",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-cauliflower-cabbage",name:"Fresh Farm Cauliflower Produce",bengaliName:"ক্ষেতের টাটকা ফুলকপি",category:"farming",priceBDT:65,originalPriceBDT:80,discountPercent:19,unit:"2 medium heads",image:"/images/products/cauliflower-cabbage.jpg",artisanName:"Rangpur Winter Vegetable Guild",artisanDistrict:"Rangpur",craftType:"Winter Agro Harvest",description:"Snow-white compact heads wrapped in protective crisp green leaves straight from the river alluvial soil.",rating:4.8,reviewsCount:62,flashDeal:!1,sellerCooperative:"Rangpur Agro Samity",originVillage:"Mithapukur, Rangpur",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-fresh-tomatoes",name:"Vine-Ripened Fresh Red Tomatoes",bengaliName:"গাছপাকা তাজা লাল টমেটো",category:"farming",priceBDT:75,originalPriceBDT:90,discountPercent:17,unit:"1 kg",image:"/images/products/fresh-tomatoes.jpg",artisanName:"Rajshahi Horticulture Society",artisanDistrict:"Rajshahi",craftType:"Natural Vine Ripening",description:"Firm, juicy, naturally ripened ruby-red cluster tomatoes bursting with fresh tangy-sweet flavor.",rating:4.9,reviewsCount:91,flashDeal:!0,sellerCooperative:"Rajshahi Green Growers",originVillage:"Godagari, Rajshahi",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-nakshi-kantha",name:"Jamalpur Silk-Embroidered Nakshi Kantha",bengaliName:"জামালপুরের হাতে সেলাই করা রেশমি নকশী কাঁথা",category:"handicrafts",priceBDT:3400,originalPriceBDT:4200,discountPercent:19,unit:"1 piece (7.5x5 ft)",image:"/images/nakshi-kantha-artisan.jpg",artisanName:"Jamalpur Women Artisan Guild",artisanDistrict:"Jamalpur",craftType:"Hand Embroidery",description:"100% hand-stitched over 45 days depicting traditional Bengali folk motifs, lotus ponds, and village flora.",rating:5,reviewsCount:88,flashDeal:!0,sellerCooperative:"Jamalpur Shilmoyi Mohila Samity",originVillage:"Islampur, Jamalpur",inStock:!0,deliveryDays:"3-5 Business Days"},{id:"prod-clay-pottery",name:"Handcrafted Terracotta Clay Pottery",bengaliName:"ধামরাইয়ের ঐতিহ্যবাহী মাটির শিল্প ও পাত্র",category:"handicrafts",priceBDT:380,originalPriceBDT:450,discountPercent:16,unit:"Set of 3",image:"/images/clay-pottery.jpg",artisanName:"Dhamrai Kumar Para Crafts",artisanDistrict:"Dhaka",craftType:"Clay Pottery",description:"Natural wheel-spun terracotta planters and cooking bowls hardened in traditional wood-burning village kilns.",rating:4.8,reviewsCount:71,flashDeal:!1,sellerCooperative:"Dhamrai Clay Artisans Union",originVillage:"Kumar Para, Dhamrai",inStock:!0,deliveryDays:"3-4 Business Days"},{id:"prod-jute-tote",name:"Handcrafted Golden Fiber Eco Jute Bag",bengaliName:"ফরিদপুরের সোনালী আঁশের পরিবেশবান্ধব জুট ব্যাগ",category:"handicrafts",priceBDT:450,originalPriceBDT:550,discountPercent:18,unit:"1 piece",image:"/images/jute-bamboo-women.jpg",artisanName:"Faridpur Jute Craft Women",artisanDistrict:"Faridpur",craftType:"Jute Weaving",description:"Durable, sustainable, and 100% biodegradable daily tote bag handmade by women artisans of Faridpur.",rating:4.9,reviewsCount:114,flashDeal:!0,sellerCooperative:"Faridpur Women Craft Cooperative",originVillage:"Boalmari, Faridpur",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-beter-jhuri-bag",name:"Artisan Bamboo & Cane Handwoven Basket (বেতের ঝুড়ি)",bengaliName:"হাতে বোনা প্রাকৃতিক বেতের ও বাঁশের ঝুড়ি",category:"handicrafts",priceBDT:620,originalPriceBDT:750,discountPercent:17,unit:"1 basket",image:"/images/beter-jhuri-bag.jpg",artisanName:"Sylhet Bet Shilpo Karigor",artisanDistrict:"Sylhet",craftType:"Cane Weaving",description:"Classic sturdy cane and bamboo storage basket crafted meticulously by generational cane weavers of Sylhet.",rating:4.9,reviewsCount:53,flashDeal:!1,sellerCooperative:"Sylhet Cane Artisans Cooperative",originVillage:"Gowainghat, Sylhet",inStock:!0,deliveryDays:"3-4 Business Days"},{id:"prod-rajshahi-silk-scarf",name:"Rajshahi Pure Mulberry Silk Scarf",bengaliName:"রাজশাহীর খাঁটি মালবেরি রেশম সিল্ক ওড়না",category:"handicrafts",priceBDT:1800,originalPriceBDT:2200,discountPercent:18,unit:"1 piece",image:"/images/products/silk-scarf.jpg",artisanName:"Rajshahi Resham Shilpi Samity",artisanDistrict:"Rajshahi",craftType:"Mulberry Silk Handloom",description:"Featherlight pure mulberry silk scarf woven on authentic handlooms in the silk hub of Rajshahi.",rating:4.9,reviewsCount:62,flashDeal:!0,sellerCooperative:"Padma Silk Artisans Union",originVillage:"Baneswar, Rajshahi",inStock:!0,deliveryDays:"2-4 Business Days"},{id:"prod-jute-floor-mat",name:"Hand-Braided Natural Jute Circular Rug",bengaliName:"হাতে বোনা প্রাকৃতিক সোনালী পাটের গোল পাপোশ",category:"handicrafts",priceBDT:850,originalPriceBDT:1050,discountPercent:19,unit:"1 rug (3 ft diameter)",image:"/images/products/jute-rug.jpg",artisanName:"Rangpur Jute Handicrafts Guild",artisanDistrict:"Rangpur",craftType:"Braided Jute Craft",description:"Sturdy, textured natural golden jute circular floor rug handmade by skilled women weavers.",rating:4.8,reviewsCount:47,flashDeal:!1,sellerCooperative:"Rangpur Shotoronji & Jute Samity",originVillage:"Nisbetganj, Rangpur",inStock:!0,deliveryDays:"3-4 Business Days"},{id:"prod-coconut-shell-bowls",name:"Artisan Polished Coconut Shell Bowls",bengaliName:"হস্তশিল্পের পালিশ করা নারকেলের খোলসের বাটি",category:"handicrafts",priceBDT:340,originalPriceBDT:420,discountPercent:19,unit:"Set of 2",image:"/images/products/coconut-bowl.jpg",artisanName:"Bagerhat Coconut Crafters",artisanDistrict:"Bagerhat",craftType:"Reclaimed Coconut Craft",description:"Zero-chemical, food-safe coconut oil polished eco bowls carved from reclaimed coastal coconut shells.",rating:4.7,reviewsCount:39,flashDeal:!1,sellerCooperative:"Sundarban Eco Crafts",originVillage:"Morrelganj, Bagerhat",inStock:!0,deliveryDays:"3-4 Business Days"},{id:"prod-pure-cow-ghee",name:"Village Churn Pure Deshi Cow Ghee",bengaliName:"ঘোল থেকে বিলোনো খাঁটি গাওয়া ঘি (বগুড়া)",category:"dairy",priceBDT:950,originalPriceBDT:1200,discountPercent:21,unit:"500 gm jar",image:"/images/pure-cow-ghee.jpg",artisanName:"Shonali Organic Farm",artisanDistrict:"Bogura",craftType:"Traditional Bilona Butter Churning",description:"Golden, granular aromatic ghee made from grass-fed indigenous cow milk curd churned by hand.",rating:5,reviewsCount:164,flashDeal:!0,sellerCooperative:"Bogura Dairy Farmers Cooperative",originVillage:"Sherpur, Bogura",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-bogura-mishti-doi",name:"Traditional Bogura Clay-Pot Mishti Doi",bengaliName:"বগুড়ার স্পেশাল মাটির সরা মিষ্টি দই",category:"dairy",priceBDT:280,originalPriceBDT:340,discountPercent:18,unit:"800 gm clay pot",image:"/images/products/sweet-yogurt.jpg",artisanName:"Gour Gopal Ghosh & Sons",artisanDistrict:"Bogura",craftType:"Clay-Pot Sweet Curd Setting",description:"Carmelized thick artisanal sweetened curd set in porous terracotta pots that absorb excess whey naturally.",rating:5,reviewsCount:220,flashDeal:!0,sellerCooperative:"Bogura Confectioners Association",originVillage:"Chakjadu, Bogura",inStock:!0,deliveryDays:"Same-Day / Next-Day Delivery"},{id:"prod-fresh-cow-milk",name:"Pabna Pasture-Fed Fresh Raw Cow Milk",bengaliName:"পাবনার খামারের খাঁটি তরল গরুর দুধ",category:"dairy",priceBDT:85,originalPriceBDT:100,discountPercent:15,unit:"1 liter chilled bottle",image:"/images/products/fresh-milk.jpg",artisanName:"Bhangura Dairy Farmers",artisanDistrict:"Pabna",craftType:"Grass-Fed Dairy",description:"100% unadulterated whole milk from pasture-fed deshi cows, collected and cold-chained within 2 hours.",rating:4.9,reviewsCount:145,flashDeal:!1,sellerCooperative:"Milk Vita Supplier Samity",originVillage:"Bhangura, Pabna",inStock:!0,deliveryDays:"Daily Morning 7 AM Delivery"},{id:"prod-smoked-paneer",name:"Ashtagram Heritage Smoked Paneer (পনির)",bengaliName:"কিশোরগঞ্জ অষ্টগ্রামের ঐতিহ্যবাহী স্মোকড পনির",category:"dairy",priceBDT:820,originalPriceBDT:1e3,discountPercent:18,unit:"500 gm round wheel",image:"/images/products/artisan-paneer.jpg",artisanName:"Ashtagram Paneer Karigor",artisanDistrict:"Kishoreganj",craftType:"Handcrafted Smoked Cheese",description:"Centuries-old recipe artisanal buffalo and cow milk cheese cured over wood-smoke with unique salty crust.",rating:4.8,reviewsCount:52,flashDeal:!1,sellerCooperative:"Haor Dairy & Paneer Samity",originVillage:"Ashtagram, Kishoreganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-organic-butter",name:"Sirajganj Hand-Churned White Table Butter (মাখন)",bengaliName:"সিরাজগঞ্জের খাঁটি দুধের সাদা মাখন",category:"dairy",priceBDT:420,originalPriceBDT:500,discountPercent:16,unit:"400 gm pack",image:"/images/products/country-butter.jpg",artisanName:"Shahjadpur Butter Artisans",artisanDistrict:"Sirajganj",craftType:"Traditional Churning",description:"Unsalted pure white table butter skimmed and hand-kneaded from cultured whole farm milk.",rating:4.9,reviewsCount:88,flashDeal:!1,sellerCooperative:"Shahjadpur Dairy Union",originVillage:"Shahjadpur, Sirajganj",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-tok-doi-natural",name:"Bogura Farmhouse Whole Milk Curd",bengaliName:"বগুড়ার খামারের খাঁটি দেশি দই",category:"dairy",priceBDT:140,originalPriceBDT:170,discountPercent:18,unit:"1 kg container",image:"/images/bogura-dairy-farm.jpg",artisanName:"Bogura Bio-Dairy Farms",artisanDistrict:"Bogura",craftType:"Fermented Probiotic Curd",description:"Creamy, naturally set unsweetened sour yogurt rich in gut-healthy live cultures, free from gelatins.",rating:4.8,reviewsCount:65,flashDeal:!1,sellerCooperative:"Bogura Dairy Farmers Cooperative",originVillage:"Sherpur, Bogura",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-raw-honey",name:"Raw Sundarban Multifloral Forest Honey",bengaliName:"সুন্দরবনের খাঁটি প্রাকৃতিক মধু",category:"dairy",priceBDT:650,originalPriceBDT:750,discountPercent:13,unit:"500 gm jar",image:"/images/products/raw-honey.jpg",artisanName:"Mowali Honey Collectors",artisanDistrict:"Satkhira",craftType:"Wild Honey Harvesting",description:"100% pure raw unpasteurized multifloral honey collected sustainably from deep Sundarban mangrove bee hives.",rating:5,reviewsCount:210,flashDeal:!0,sellerCooperative:"Sundarban Forest Honey Society",originVillage:"Shyamnagar, Satkhira",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-mustard-honey",name:"Organic Mustard Blossom Natural Honey",bengaliName:"সরিষা ফুলের খাঁটি প্রাকৃতিক মধু",category:"dairy",priceBDT:480,originalPriceBDT:550,discountPercent:13,unit:"500 gm jar",image:"/images/mustard-honey-farming.jpg",artisanName:"Sirajganj Bee Keepers",artisanDistrict:"Sirajganj",craftType:"Apiculture",description:"Light golden smooth natural honey collected from beehives in the blooming mustard fields of North Bengal.",rating:4.9,reviewsCount:95,flashDeal:!1,sellerCooperative:"Chalanbeel Apiculture Union",originVillage:"Ullapara, Sirajganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-river-rui",name:"River Rui Fish - Fresh Padma Catch",bengaliName:"পদ্মা নদীর তরতাজা দেশি রুই মাছ",category:"fisheries",priceBDT:620,originalPriceBDT:750,discountPercent:17,unit:"1 kg (whole cut/cleaned)",image:"/images/freshwater-fish-culture.jpg",artisanName:"Goalondo Padma Fishermen Guild",artisanDistrict:"Rajbari",craftType:"River Netting",description:"Naturally sweet wild river carp caught overnight in the flowing waters of Padma, dressed hygienically on ice.",rating:4.9,reviewsCount:138,flashDeal:!0,sellerCooperative:"Goalondo River Fishermen Union",originVillage:"Daulatdia Ghat, Rajbari",inStock:!0,deliveryDays:"Next Morning Delivery (Cold Chained)"},{id:"prod-rupchanda-pomfret",name:"Rupchanda Silver Pomfret (রূপচাঁদা)",bengaliName:"বঙ্গোপসাগরের রুপালি রূপচাঁদা মাছ",category:"fisheries",priceBDT:950,originalPriceBDT:1150,discountPercent:17,unit:"1 kg (3-4 pcs cleaned)",image:"/images/products/pomfret-fish.jpg",artisanName:"Cox's Bazar Deep Sea Trawlers",artisanDistrict:"Cox's Bazar",craftType:"Deep Sea Line Catch",description:"Pristine white-fleshed coastal silver pomfret, blast-frozen right on the boat deck to preserve ocean freshness.",rating:4.9,reviewsCount:92,flashDeal:!1,sellerCooperative:"Chittagong Coastal Fisheries Samity",originVillage:"Teknaf, Cox's Bazar",inStock:!0,deliveryDays:"2 Business Days (Dry Ice Pack)"},{id:"prod-fresh-katla",name:"Freshwater Bighead Katla Fish",bengaliName:"মিঠাপানির বিশাল কাতলা মাছ",category:"fisheries",priceBDT:580,originalPriceBDT:700,discountPercent:17,unit:"1 kg (cleaned slices)",image:"/images/products/katla-fish.jpg",artisanName:"Chalanbeel Freshwater Catch",artisanDistrict:"Natore",craftType:"Open-Water Fisheries",description:"Rich and oily sweetwater Katla caught from sprawling freshwater beels, prized for festive fish head curry.",rating:4.8,reviewsCount:68,flashDeal:!1,sellerCooperative:"Natore Fishermen Union",originVillage:"Singra, Natore",inStock:!0,deliveryDays:"Next Morning Delivery"},{id:"prod-golda-chingri",name:"Khulna Freshwater Giant Golda Chingri",bengaliName:"খুলনার ঘেরের তাজা গলদা চিংড়ি",category:"fisheries",priceBDT:1150,originalPriceBDT:1400,discountPercent:18,unit:"1 kg (8-10 pcs head-on)",image:"/images/products/golda-prawn.jpg",artisanName:"Rupsha River Prawn Growers",artisanDistrict:"Khulna",craftType:"Eco-Friendly Prawn Gher",description:"Large succulent giant freshwater prawns with rich head butter (marrow), cultivated naturally with organic feed.",rating:5,reviewsCount:175,flashDeal:!0,sellerCooperative:"Khulna Prawn Export Samity",originVillage:"Dumuria, Khulna",inStock:!0,deliveryDays:"Next Day Delivery"},{id:"prod-bagda-shrimp",name:"Satkhira Coastal Black Tiger Bagda Shrimp",bengaliName:"সাতক্ষীরার উপকূলীয় ব্ল্যাক টাইগার বাগদা চিংড়ি",category:"fisheries",priceBDT:850,originalPriceBDT:1050,discountPercent:19,unit:"1 kg (20-25 pcs)",image:"/images/products/bagda-shrimp.jpg",artisanName:"Satkhira Coastal Aquaculture",artisanDistrict:"Satkhira",craftType:"Brackish Water Aquaculture",description:"Tiger-striped tender brackish water shrimp from coastal farms near the Sundarbans, perfectly cleaned.",rating:4.8,reviewsCount:84,flashDeal:!1,sellerCooperative:"Satkhira Fish Growers Guild",originVillage:"Debhata, Satkhira",inStock:!0,deliveryDays:"Next Day Delivery"},{id:"prod-loitta-dry-shutki",name:"Cox's Bazar Organic Sun-Dried Loitta Shutki",bengaliName:"কক্সবাজারের বিষমুক্ত রোদে শুকানো লইট্টা শুঁটকি",category:"fisheries",priceBDT:650,originalPriceBDT:800,discountPercent:19,unit:"500 gm pack",image:"/images/products/dry-shutki.jpg",artisanName:"Nazirartek Shutki Mahal Artisans",artisanDistrict:"Cox's Bazar",craftType:"Chemical-Free Sun Drying",description:"Authentic, salt-brined sun-dried Loitta shutki dried on bamboo scaffolds with absolute zero toxic pesticide spray.",rating:4.9,reviewsCount:112,flashDeal:!1,sellerCooperative:"Nazirartek Shutki Producers Samity",originVillage:"Nazirartek, Cox's Bazar",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-radhuni-mustard-oil",name:"Radhuni Pure Cold-Pressed Mustard Oil",bengaliName:"ঘানিভাঙা খাঁটি সরিষার ঝাঁঝালো তেল",category:"spices",priceBDT:310,originalPriceBDT:380,discountPercent:18,unit:"1 liter glass bottle",image:"/images/products/mustard-oil.jpg",artisanName:"Natore Wooden Ghani Guild",artisanDistrict:"Natore",craftType:"Slow Cold-Press Ghani",description:"100% natural, intensely pungent cold-pressed yellow and brown mustard oil; heart of authentic Bengali cooking and pickles.",rating:5,reviewsCount:245,flashDeal:!0,sellerCooperative:"Natore Ghani Artisans Union",originVillage:"Bagatipara, Natore",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-pabna-dry-chillies-whole",name:"Pabna Sun-Dried Whole Red Chillies",bengaliName:"পাবনার রোদে শুকানো লাল মরিচ",category:"spices",priceBDT:220,originalPriceBDT:270,discountPercent:19,unit:"500 gm pack",image:"/images/red-chilli-farming.jpg",artisanName:"Santhia Spice Growers",artisanDistrict:"Pabna",craftType:"Solar Yard Drying",description:"Deep red, glossy whole sun-dried chillies dried under open sunlight; prized for smoky bhorta and curries.",rating:4.9,reviewsCount:119,flashDeal:!0,sellerCooperative:"Pabna Chilli Growers Samity",originVillage:"Santhia, Pabna",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-red-chilli-flakes",name:"Red Chilli Sun-Dried Crushed Flakes",bengaliName:"রোদে শুকানো খাঁটি লাল মরিচের গুঁড়ো ও ফ্লেক্স",category:"spices",priceBDT:160,originalPriceBDT:200,discountPercent:20,unit:"250 gm jar",image:"/images/hero-chilli-drying.jpg",artisanName:"Char Sonatola Chilli Guild",artisanDistrict:"Bogra",craftType:"Sun-Dried Stone Grinding",description:"Vibrant scarlet, fiery sun-dried riverbank hot chillies coarsely ground with natural seeds and oils intact.",rating:4.8,reviewsCount:88,flashDeal:!1,sellerCooperative:"Sonatola Chilli Producers Union",originVillage:"Sonatola, Bogura",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-fresh-red-chillies",name:"Pabna Fresh Spicy Red Chillies",bengaliName:"পাবনার ক্ষেতের টাটকা ঝাঁঝালো লাল মরিচ",category:"spices",priceBDT:70,originalPriceBDT:85,discountPercent:18,unit:"500 gm pack",image:"/images/products/green-chillies.jpg",artisanName:"Pabna Chilli Farm Alliance",artisanDistrict:"Pabna",craftType:"Fresh Harvest Pods",description:"Freshly picked pungent crimson red chillies with spicy kick for fish curries and spicy pastes.",rating:4.8,reviewsCount:65,flashDeal:!1,sellerCooperative:"Pabna Hot Pepper Society",originVillage:"Chatmohar, Pabna",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-natore-white-garlic",name:"Natore Deshi Organic White Garlic (রসুন)",bengaliName:"নাটোরের দেশি বাছাইকৃত সাদা রসুন",category:"spices",priceBDT:160,originalPriceBDT:200,discountPercent:20,unit:"1 kg mesh bag",image:"/images/products/garlic-cloves.jpg",artisanName:"Chalanbeel Garlic Farmers",artisanDistrict:"Natore",craftType:"Zero-Tillage Garlic Harvest",description:"Small pod deshi garlic cultivated through zero-tillage method, packed with pungent allicin compound.",rating:4.9,reviewsCount:94,flashDeal:!1,sellerCooperative:"Gurudaspur Farmers Guild",originVillage:"Gurudaspur, Natore",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-bengali-panch-phoron-mix",name:"Bengali Whole Spice & Seed Mix (পাঁচফোড়ন)",bengaliName:"ঐতিহ্যবাহী খাঁটি গোটা পাঁচফোড়ন মশলা",category:"spices",priceBDT:130,originalPriceBDT:160,discountPercent:19,unit:"200 gm jar",image:"/images/products/cumin-seeds.jpg",artisanName:"Panchagarh Heritage Spices",artisanDistrict:"Panchagarh",craftType:"Artisanal Spice Blending",description:"Authentic whole spice flat lay including cumin, brown mustard, fenugreek, nigella, and fennel seeds.",rating:4.9,reviewsCount:73,flashDeal:!1,sellerCooperative:"North Bengal Spice Traders",originVillage:"Tetulia, Panchagarh",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-pickling-spice-blend",name:"Traditional Bengali Pickling Spice Blend",bengaliName:"ঐতিহ্যবাহী আচার ও তরকারির গোটা মশলা",category:"spices",priceBDT:140,originalPriceBDT:175,discountPercent:20,unit:"200 gm pouch",image:"/images/products/turmeric-powder.jpg",artisanName:"Dinajpur Spice Guild",artisanDistrict:"Dinajpur",craftType:"Whole Spice Blending",description:"Aromatic blend of dried coriander seeds, crushed pepper, and herbal spices formulated for mango and olive pickles.",rating:4.8,reviewsCount:52,flashDeal:!1,sellerCooperative:"Dinajpur Spices Cooperative",originVillage:"Birganj, Dinajpur",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-organic-chia-seeds",name:"Sirajganj Cultivated Organic Chia Seeds",bengaliName:"সিরাজগঞ্জের অর্গানিক চিয়া সিড",category:"spices",priceBDT:290,originalPriceBDT:350,discountPercent:17,unit:"250 gm pack",image:"/images/products/chia-seeds.jpg",artisanName:"Sirajganj Superfood Growers",artisanDistrict:"Sirajganj",craftType:"Superfood Cultivation",description:"Cleaned, high-fiber nutritious black and grey chia seeds packed with healthy omega-3 fatty acids.",rating:4.9,reviewsCount:68,flashDeal:!1,sellerCooperative:"Chalanbeel Agro Bio-Union",originVillage:"Belkuchi, Sirajganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-yellow-mustard-seeds",name:"Indigenous Yellow Mustard Seeds (হলুদ সরিষা)",bengaliName:"দেশি বাছাইকৃত খাঁটি হলুদ সরিষা",category:"spices",priceBDT:120,originalPriceBDT:150,discountPercent:20,unit:"500 gm pack",image:"/images/products/yellow-mustard-seeds.jpg",artisanName:"Manikganj Mustard Growers",artisanDistrict:"Manikganj",craftType:"Oilseed Sorting",description:"Sun-dried golden yellow mustard seeds with mild sweet pungency, essential for shorshe ilish and pastes.",rating:4.8,reviewsCount:59,flashDeal:!1,sellerCooperative:"Manikganj Oilseed Samity",originVillage:"Singair, Manikganj",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-chittagong-watermelon",name:"Patiya Sweet Sugar-Baby Watermelon",bengaliName:"পটিয়ার মিষ্টি সুগার-বেবি রসালো তরমুজ",category:"fruits",priceBDT:250,originalPriceBDT:300,discountPercent:17,unit:"1 whole watermelon (4-5 kg)",image:"/images/products/watermelon.jpg",artisanName:"Patiya Coastal Belt Growers",artisanDistrict:"Chittagong",craftType:"Summer Melon Harvest",description:"Crisp crimson flesh, thin rind, high brix sweet sugar-baby watermelon naturally grown on coastal silt.",rating:4.8,reviewsCount:115,flashDeal:!0,sellerCooperative:"Patiya Farmers Union",originVillage:"Patiya, Chittagong",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-rajshahi-himsagar",name:"Rajshahi Himsagar Sweet Mango",bengaliName:"রাজশাহীর সুমিষ্ট পরিপক্ক হিমসাগর আম",category:"fruits",priceBDT:420,originalPriceBDT:500,discountPercent:16,unit:"5 kg crate",image:"/images/products/himsagar-mango.jpg",artisanName:"Charghat Heritage Orchard",artisanDistrict:"Rajshahi",craftType:"Natural Tree-Ripened Mango",description:"Fibreless, ultra-sweet golden fleshed Himsagar mangoes handpicked carefully with zero chemical ripening carbide.",rating:5,reviewsCount:260,flashDeal:!0,sellerCooperative:"Rajshahi Mango Growers Association",originVillage:"Charghat, Rajshahi",inStock:!0,deliveryDays:"Next-Day Delivery"},{id:"prod-ripe-papaya",name:"Ripe Organic Sweet Papaya",bengaliName:"নাটোরের পুষ্টিকর মিষ্টি পাকা পেঁপে",category:"fruits",priceBDT:110,originalPriceBDT:130,discountPercent:15,unit:"1.5 kg single fruit",image:"/images/products/ripe-papaya.jpg",artisanName:"Natore Organic Orchards",artisanDistrict:"Natore",craftType:"Tree-Ripened Tropical Fruit",description:"Rich orange sweet flesh, naturally vine-ripened papaya loaded with vitamin C and digestive enzymes.",rating:4.8,reviewsCount:78,flashDeal:!1,sellerCooperative:"Natore Fruit Growers Samity",originVillage:"Baraigram, Natore",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-fazli-mango",name:"Chapainawabganj Giant Fazli Mango",bengaliName:"চাঁপাইনবাবগঞ্জের ঐতিহ্যবাহী ফজলি আম",category:"fruits",priceBDT:480,originalPriceBDT:580,discountPercent:17,unit:"5 kg crate (4-5 large mangos)",image:"/images/products/fazli-mango.jpg",artisanName:"Shibganj Royal Mango Orchards",artisanDistrict:"Chapainawabganj",craftType:"Late Season Giant Mango",description:"Famous oversized succulent Fazli mangoes with pleasant tang and abundant aromatic juicy pulp.",rating:4.9,reviewsCount:145,flashDeal:!1,sellerCooperative:"Chapainawabganj Mango Growers Guild",originVillage:"Shibganj, Chapainawabganj",inStock:!0,deliveryDays:"Next-Day Delivery"},{id:"prod-amrapali-mango",name:"Naturally Tree-Ripened Amrapali Mango",bengaliName:"গাছপাকা আম্রপালি মিষ্টি আম",category:"fruits",priceBDT:450,originalPriceBDT:540,discountPercent:17,unit:"5 kg crate",image:"/images/rajshahi-mango-harvest.jpg",artisanName:"Bagha Mango Orchards",artisanDistrict:"Rajshahi",craftType:"Organic Tree Ripening",description:"Deep orange intensely sweet hybrid variety famed for its rich tropical nectar and fragrant thin peel.",rating:4.9,reviewsCount:198,flashDeal:!0,sellerCooperative:"Rajshahi Mango Growers Association",originVillage:"Bagha, Rajshahi",inStock:!0,deliveryDays:"Next-Day Delivery"},{id:"prod-sylhet-zara-lemon",name:"Sylhet Fragrant Zara Lemon (জারা লেবু)",bengaliName:"সিলেটের সুবাসিত বিখ্যাত জারা লেবু",category:"fruits",priceBDT:240,originalPriceBDT:300,discountPercent:20,unit:"Pack of 2 large lemons",image:"/images/products/zara-lemon.jpg",artisanName:"Jaintiapur Citrus Groves",artisanDistrict:"Sylhet",craftType:"Indigenous Citrus Cultivation",description:"Legendary giant Sylheti citrus with edible sweet fragrant rind, prized across Bengal for salads and tea.",rating:4.9,reviewsCount:88,flashDeal:!1,sellerCooperative:"Sylhet Citrus Farmers Union",originVillage:"Jaintiapur, Sylhet",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-chuadanga-banana",name:"Chuadanga Shobri Sweet Banana",bengaliName:"চুয়াডাঙ্গার খাঁটি সুস্বাদু সবরি কলা",category:"fruits",priceBDT:120,originalPriceBDT:150,discountPercent:20,unit:"1 dozen (12 pcs)",image:"/images/products/sweet-banana.jpg",artisanName:"Damurhuda Banana Growers",artisanDistrict:"Chuadanga",craftType:"Naturally Ripened Banana",description:"Creamy textured, sweet Shobri bananas ripened naturally without artificial heat or ethylene chemicals.",rating:4.8,reviewsCount:96,flashDeal:!1,sellerCooperative:"Chuadanga Agro Producers Guild",originVillage:"Damurhuda, Chuadanga",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-madhupur-pineapple",name:"Madhupur Giant Honey Queen Pineapple",bengaliName:"মধুপুরের রসালো হানি কুইন আনারস",category:"fruits",priceBDT:160,originalPriceBDT:200,discountPercent:20,unit:"Pack of 2 large pineapples",image:"/images/products/pineapple.jpg",artisanName:"Madhupur Garo Hill Farmers",artisanDistrict:"Tangail",craftType:"Garo Highland Pineapples",description:"Super juicy Honey Queen pineapples grown on red clay mounds of Madhupur forest, exceptionally sweet and tart.",rating:4.9,reviewsCount:165,flashDeal:!0,sellerCooperative:"Madhupur Indigenous Fruit Samity",originVillage:"Aukpara, Tangail",inStock:!0,deliveryDays:"1-2 Business Days"},{id:"prod-bandarban-dragon-fruit",name:"Bandarban Hilltop White Dragon Fruit",bengaliName:"বান্দরবানের পাহাড়ি ড্রাগন ফল",category:"fruits",priceBDT:360,originalPriceBDT:440,discountPercent:18,unit:"1 kg (2-3 large fruits)",image:"/images/products/dragon-fruit.jpg",artisanName:"Chimbuk Hilltop Orchards",artisanDistrict:"Bandarban",craftType:"High Altitude Dragon Fruit Farm",description:"Crisp textured sweet white dragon fruit with soft pink shell fresh-harvested from slope farms.",rating:4.8,reviewsCount:82,flashDeal:!1,sellerCooperative:"Bandarban Exotic Fruit Guild",originVillage:"Chimbuk, Bandarban",inStock:!0,deliveryDays:"2-3 Business Days"},{id:"prod-tangail-sweet-orange",name:"Tangail Garo Hills Deshi Sweet Malta Orange",bengaliName:"টাঙ্গাইলের পাহাড়ি মিষ্টি দেশি মাল্টা",category:"fruits",priceBDT:280,originalPriceBDT:340,discountPercent:18,unit:"2 kg bag",image:"/images/products/malta-orange.jpg",artisanName:"Garo Hills Agro Producers",artisanDistrict:"Tangail",craftType:"Citrus Orchard Cultivation",description:"Juicy, thin-skinned greenish-yellow deshi sweet malta with fresh refreshing citrus tang.",rating:4.9,reviewsCount:104,flashDeal:!1,sellerCooperative:"Tangail Fruit Samity",originVillage:"Madhupur, Tangail",inStock:!0,deliveryDays:"2-3 Business Days"}],F={name:"Tanvir Ahmed",email:"tanvir.ahmed@buyer.bd",phone:"+880 1712-889900",address:"Flat 4B, House 18, Road 11, Banani",city:"Dhaka",district:"Dhaka",preferredPayment:"bKash",memberSince:"March 2026"},$=[{id:"GB-ORD-94812",date:"15 Sep 2026",status:"on_the_way",statusBengali:"পথিমধ্যে রয়েছে (চলমান ডেলিভারি)",statusBadgeClass:"badge-transit",items:[{product:{id:"prod-chinigura-rice",name:"Premium Chinigura Aromatic Rice",bengaliName:"দিনাজপুরের প্রিমিয়াম সুগন্ধি চিনিগুঁড়া চাল",category:"farming",priceBDT:140,originalPriceBDT:175,discountPercent:20,unit:"1 kg",image:"/images/chinigura-rice.jpg",artisanName:"Shonali Organic Farm",artisanDistrict:"Dinajpur",craftType:"Traditional Indigenous Crop",description:"Freshly milled, fragrant non-sticky Chinigura rice cultivated with zero toxic chemical pesticides in Dinajpur.",rating:4.9,reviewsCount:142,flashDeal:!0,sellerCooperative:"Dinajpur Farmer Samity",originVillage:"Birganj, Dinajpur",inStock:!0,deliveryDays:"2-3 Business Days"},quantity:3},{product:{id:"prod-pure-cow-ghee",name:"Village Churn Pure Deshi Cow Ghee",bengaliName:"ঘোল থেকে বিলোনো খাঁটি গাওয়া ঘি (বগুড়া)",category:"dairy",priceBDT:950,originalPriceBDT:1200,discountPercent:21,unit:"500 gm jar",image:"/images/pure-cow-ghee.jpg",artisanName:"Shonali Organic Farm",artisanDistrict:"Bogura",craftType:"Traditional Bilona Butter Churning",description:"Golden, granular aromatic ghee made from grass-fed indigenous cow milk curd churned by hand.",rating:5,reviewsCount:164,flashDeal:!0,sellerCooperative:"Bogura Dairy Farmers Cooperative",originVillage:"Sherpur, Bogura",inStock:!0,deliveryDays:"1-2 Business Days"},quantity:1}],subtotal:1370,shippingFee:60,discount:50,total:1380,paymentMethod:"bKash",paymentDetails:"bKash Mobile: 01712-889900 (TxnID: BK9948120)",shippingAddress:"Flat 4B, House 18, Road 11, Banani, Dhaka-1213",recipientPhone:"+880 1712-889900",trackingNumber:"REDX-GB-99412",courierPartner:"RedX Express Logistics",estimatedDelivery:"Tomorrow, by 4:00 PM",trackingSteps:[{label:"Order Confirmed",bengaliLabel:"অর্ডার গৃহীত হয়েছে",time:"15 Sep, 10:30 AM",completed:!0},{label:"Picked from Dinajpur Farm",bengaliLabel:"দিনাজপুর খামার থেকে সংগৃহীত",time:"15 Sep, 04:15 PM",completed:!0},{label:"In Transit / On The Way",bengaliLabel:"পথিমধ্যে রয়েছে (ঢাকা সেন্ট্রাল হাবের পথে)",time:"16 Sep, 08:00 AM",completed:!0,active:!0},{label:"Out for Delivery",bengaliLabel:"ডেলিভারির জন্য বের হবে",time:"Expected Tomorrow, 10:00 AM",completed:!1},{label:"Delivered",bengaliLabel:"পণ্য পৌঁছে গেছে",time:"Pending",completed:!1}]},{id:"GB-ORD-88210",date:"08 Sep 2026",status:"delivered",statusBengali:"সম্পন্ন ডেলিভারি (পৌঁছে গেছে)",statusBadgeClass:"badge-delivered",items:[{product:{id:"prod-nakshi-kantha",name:"Jamalpur Silk-Embroidered Nakshi Kantha",bengaliName:"জামালপুরের ঐতিহ্যবাহী রেশম সুতার নকশী কাঁথা",category:"handicrafts",priceBDT:3450,originalPriceBDT:4200,discountPercent:18,unit:"1 piece (7.5 x 5 ft)",image:"/images/nakshi-kantha-artisan.jpg",artisanName:"Rokeya Begum",artisanDistrict:"Jamalpur",craftType:"Pure Cotton with Fine Silk Threads",description:"100% hand-stitched over 45 days depicting traditional Bengali folk motifs, lotus ponds, and village flora.",rating:4.9,reviewsCount:38,flashDeal:!0,sellerCooperative:"Jamalpur Women Artisan Guild",originVillage:"Islampur, Jamalpur",inStock:!0,deliveryDays:"3-4 Business Days"},quantity:1},{product:{id:"prod-clay-pottery",name:"Handcrafted Terracotta Clay Pottery",bengaliName:"হাতে গড়া ঐতিহ্যবাহী মাটির পাত্র",category:"handicrafts",priceBDT:950,originalPriceBDT:1200,discountPercent:21,unit:"Set of 3 pieces",image:"/images/clay-pottery.jpg",artisanName:"Gouranga Pal",artisanDistrict:"Dhamrai, Dhaka",craftType:"Fired Natural Terracotta Clay",description:"Artisanal wheel-thrown terracotta serving vessels made with indigenous river clay and wood-fired kiln finishes.",rating:4.9,reviewsCount:42,flashDeal:!1,sellerCooperative:"Dhamrai Pal Mahashava",originVillage:"Kagojinagar, Dhamrai",inStock:!0,deliveryDays:"2-3 Business Days"},quantity:1}],subtotal:4400,shippingFee:0,discount:100,total:4300,paymentMethod:"Nagad",paymentDetails:"Nagad Mobile: 01712-889900 (TxnID: NG882104)",shippingAddress:"Flat 4B, House 18, Road 11, Banani, Dhaka-1213",recipientPhone:"+880 1712-889900",trackingNumber:"STEADFAST-GB-88210",courierPartner:"Steadfast Courier",estimatedDelivery:"Delivered on 08 Sep 2026, 03:45 PM"},{id:"GB-ORD-74190",date:"28 Aug 2026",status:"delivered",statusBengali:"সম্পন্ন ডেলিভারি (পৌঁছে গেছে)",statusBadgeClass:"badge-delivered",items:[{product:{id:"prod-bogura-mishti-doi",name:"Traditional Bogura Clay-Pot Mishti Doi",bengaliName:"বগুড়ার স্পেশাল মাটির হাঁড়ির খাঁটি মিষ্টি দই",category:"dairy",priceBDT:340,originalPriceBDT:400,discountPercent:15,unit:"1 kg clay sora",image:"/images/bogura-dairy-farm.jpg",artisanName:"Gour Gopal Ghosh",artisanDistrict:"Bogura",craftType:"Slow-Smoked Clay Sora Fermentation",description:"Iconic thick caramelized sweet curd set in porous unglazed clay sora that wicks away whey for dense creamy texture.",rating:4.9,reviewsCount:195,flashDeal:!0,sellerCooperative:"Sherpur Doi Kalyan Samity",originVillage:"Sherpur, Bogura",inStock:!0,deliveryDays:"1 Business Day (Chilled Delivery)"},quantity:2},{product:{id:"prod-jute-tote",name:"Handcrafted Golden Fiber Eco Jute Bag",bengaliName:"হাতে বোনা সোনালী আঁশের পরিবেশবান্ধব জুট ব্যাগ",category:"handicrafts",priceBDT:850,originalPriceBDT:1050,discountPercent:19,unit:"1 piece",image:"/images/jute-bamboo-women.jpg",artisanName:"Shahnaz Parvin",artisanDistrict:"Faridpur",craftType:"Braided Natural Jute with Cotton Lining",description:"Durable, sustainable, and 100% biodegradable daily tote bag handmade by women artisans of Faridpur.",rating:4.8,reviewsCount:52,flashDeal:!1,sellerCooperative:"Faridpur Women Cooperative",originVillage:"Boalmari, Faridpur",inStock:!0,deliveryDays:"2-3 Business Days"},quantity:1}],subtotal:1530,shippingFee:60,discount:0,total:1590,paymentMethod:"Cash on Delivery",paymentDetails:"Cash paid on delivery to courier agent",shippingAddress:"Flat 4B, House 18, Road 11, Banani, Dhaka-1213",recipientPhone:"+880 1712-889900",trackingNumber:"PATHAO-GB-74190",courierPartner:"Pathao Courier",estimatedDelivery:"Delivered on 28 Aug 2026, 01:20 PM"},{id:"GB-ORD-61205",date:"18 Aug 2026",status:"cancelled",statusBengali:"বাতিলকৃত অর্ডার",statusBadgeClass:"badge-cancelled",items:[{product:{id:"prod-rajshahi-himsagar",name:"Rajshahi Himsagar Sweet Mango",bengaliName:"রাজশাহীর বিখ্যাত ফরমালিনমুক্ত হিমসাগর আম (১০ কেজি)",category:"fruits",priceBDT:1350,originalPriceBDT:1650,discountPercent:18,unit:"10 kg eco-crate",image:"/images/rajshahi-mango-harvest.jpg",artisanName:"Varendra Orchard Farmers",artisanDistrict:"Rajshahi",craftType:"Paper-Bagged Organic Harvest",description:"The crowning jewel of Bengal mangoes; fiberless, intensely aromatic, tree-ripened naturally without carbide.",rating:5,reviewsCount:192,flashDeal:!0,sellerCooperative:"Rajshahi Mango Growers Association",originVillage:"Bagha, Rajshahi",inStock:!0,deliveryDays:"1-2 Business Days"},quantity:1}],subtotal:1350,shippingFee:60,discount:0,total:1410,paymentMethod:"bKash",paymentDetails:"Full refund ৳1,410 sent to bKash 01712-889900 (TxnID: REF-BK61205)",shippingAddress:"Flat 4B, House 18, Road 11, Banani, Dhaka-1213",recipientPhone:"+880 1712-889900",cancelReason:"Customer requested change of shipping address to Sylhet; fresh order created.",refundStatus:"100% Refunded to bKash (Txn: REF-BK61205)"}],H={totalAccountBalanceBDT:185e3,totalProfitBDT:68500,totalInvestmentBDT:45e4,annualInvestmentBDT:32e4,annualProfitBDT:48200,savingsAndInsurancePoolBDT:185e3,savingsBDT:12e4,insuranceBDT:65e3,recentProjectsCount:3,ongoingProjectsCount:5,completedProjectsCount:8,marketplaceSalesBDT:14200,aiRiskFlaggingCount:0,lastSynced:"2 mins ago",systemUptime:"99.98%"},G=[{id:"inv-rec-1",name:"Bio-Secure Layer Poultry Farm",bengaliName:"বায়ো-সিকিউর লেয়ার পোল্ট্রি ফার্ম",category:"Livestock",district:"Gazipur",upazila:"Kapasia",investedAmountBDT:5e4,expectedProfitBDT:7500,status:"recent",statusLabel:"Funding Collection Phase",statusDescription:"Campaign actively raising capital; 80% funded, field start slated upon completion",startDate:"15 Oct 2026",expectedEndDate:"15 Mar 2027",image:"/images/sustainable-poultry.jpg",progressPercent:5,roiPercentage:15,farmerName:"Md. Rafiqul Islam",contractType:"Mudarabah (65% / 35%)",fundingRaisedBDT:68e4,fundingGoalBDT:85e4,fundingPercent:80,daysLeftToClose:12},{id:"inv-rec-2",name:"High-Yield Boro Rice Cluster",bengaliName:"উচ্চ ফলনশীল বোরো ধান চাষ",category:"Crops",district:"Bogura",upazila:"Sariakandi",investedAmountBDT:35e3,expectedProfitBDT:5200,status:"recent",statusLabel:"Funding Collection Phase",statusDescription:"Collective funding phase in progress; seedling nurseries prepared on riverbanks",startDate:"20 Oct 2026",expectedEndDate:"25 Apr 2027",image:"/images/farmer-rice-planting.jpg",progressPercent:0,roiPercentage:14.8,farmerName:"Abdul Karim Mandal",contractType:"Mudarabah (60% / 40%)",fundingRaisedBDT:48e4,fundingGoalBDT:6e5,fundingPercent:80,daysLeftToClose:16},{id:"inv-rec-3",name:"Organic Dairy Cattle Expansion",bengaliName:"উন্নত জাতের গাভী পালন ও দুগ্ধ উৎপাদন",category:"Livestock",district:"Sirajganj",upazila:"Shahjadpur",investedAmountBDT:4e4,expectedProfitBDT:6e3,status:"recent",statusLabel:"Funding Collection Phase",statusDescription:"82% funding reached; shed construction scheduled immediately following campaign close",startDate:"28 Oct 2026",expectedEndDate:"28 Jun 2027",image:"/images/bogura-dairy-farm.jpg",progressPercent:10,roiPercentage:15,farmerName:"Shahidul Alam",contractType:"Murabaha Asset-Backed",fundingRaisedBDT:74e4,fundingGoalBDT:9e5,fundingPercent:82,daysLeftToClose:19},{id:"inv-ong-1",name:"Aman Rice Collective & Cold Storage",bengaliName:"আমন ধান চাষ ও সমবায় সংরক্ষণ",category:"Crops",district:"Rangpur",upazila:"Mithapukur",investedAmountBDT:6e4,expectedProfitBDT:9600,status:"ongoing",statusLabel:"Deploying on Field",statusDescription:"Crop in vegetative growth stage; field officer audited 3 days ago",startDate:"10 Aug 2026",expectedEndDate:"15 Dec 2026",image:"/images/chinigura-rice.jpg",progressPercent:65,roiPercentage:16,farmerName:"Golam Mortuza",contractType:"Mudarabah (65% / 35%)",fieldStage:"Stage 3 of 4: Vegetative Tiller Maturation & Moisture Monitoring",fieldInspector:"Agronomist Dr. M. Faruk (Gazipur Ag University)",soilCondition:"Alluvial silt loam, pH 6.4, High organic nitrogen",weatherStatus:"Favorable intermittent showers, 29°C average",lastAuditDate:"15 Sep 2026 (Audit Score: 98/100 Passed)",progressMilestones:[{label:"Land Preparation & Seedling Sowing",date:"10 Aug 2026",completed:!0},{label:"Organic Bio-fertilization & Solar Aeration",date:"25 Aug 2026",completed:!0},{label:"Tiller Maturation & Biometric Monitoring",date:"15 Sep 2026",completed:!0,active:!0},{label:"Harvesting, Solar Cold Storage & Payout",date:"15 Dec 2026",completed:!1}]},{id:"inv-ong-2",name:"Black Bengal Goat Breeding Station",bengaliName:"ব্ল্যাক বেঙ্গল ছাগল প্রজনন খামার",category:"Livestock",district:"Kushtia",upazila:"Kumarkhali",investedAmountBDT:45e3,expectedProfitBDT:7200,status:"ongoing",statusLabel:"Deploying on Field",statusDescription:"Kid growth metrics 100% on target; vaccinated against PPR",startDate:"01 Jul 2026",expectedEndDate:"01 Jan 2027",image:"/images/pure-cow-ghee.jpg",progressPercent:55,roiPercentage:16,farmerName:"Rashid Ali",contractType:"Musharakah (Equal Risk/Reward)",fieldStage:"Stage 2 of 4: Kid Weaning & High-Protein Grazing Program",fieldInspector:"Dr. Shahabuddin (District Veterinary Surgeon)",soilCondition:"Elevated dry paddock with slatted hygienic wood flooring",weatherStatus:"Well-ventilated natural barn, 28°C",lastAuditDate:"12 Sep 2026 (Vaccination Complete)",progressMilestones:[{label:"Breeder Selection & Quarantine Check",date:"01 Jul 2026",completed:!0},{label:"Vaccination & Bio-security Sanitization",date:"20 Jul 2026",completed:!0},{label:"Weaning & Weight Gain Monitoring",date:"12 Sep 2026",completed:!0,active:!0},{label:"Market Weigh-in & Investor Distribution",date:"01 Jan 2027",completed:!1}]},{id:"inv-ong-3",name:"Jamalpur Nakshi Kantha Artisan Guild",bengaliName:"জামালপুর নকশী কাঁথা নারী সমবায়",category:"Handicrafts",district:"Jamalpur",upazila:"Islampur",investedAmountBDT:3e4,expectedProfitBDT:4800,status:"ongoing",statusLabel:"Deploying on Field",statusDescription:"85 heritage quilts currently being hand-embroidered by 32 rural women",startDate:"15 Jun 2026",expectedEndDate:"15 Nov 2026",image:"/images/nakshi-kantha-artisan.jpg",progressPercent:80,roiPercentage:16,farmerName:"Rokeya Begum & 32 Women",contractType:"Fair-Trade Artisanal Sharing",fieldStage:"Stage 3 of 4: Master Embroidery Completion & Quality Finishing",fieldInspector:"Farzana Yasmin (Rural Heritage Craft Lead)",soilCondition:"Air-conditioned cooperative weaving hall, zero moisture exposure",weatherStatus:"Optimal indoor craft environment",lastAuditDate:"14 Sep 2026 (70 of 85 pieces passed QC)",progressMilestones:[{label:"Azo-free Silk Threads & Cloth Procurement",date:"15 Jun 2026",completed:!0},{label:"Stitching Folk Motifs & Border Trimming",date:"20 Jul 2026",completed:!0},{label:"Final Quality Audit & Export Packaging",date:"14 Sep 2026",completed:!0,active:!0},{label:"Fair Trade Payout to Artisans & Investors",date:"15 Nov 2026",completed:!1}]},{id:"inv-ong-4",name:"Sustainable Hilsha Fishery Collective",bengaliName:"মেঘনা নদী ইলিশ মাছ টেকসই প্রজনন ও আহরণ",category:"Fisheries",district:"Chandpur",upazila:"Haimchar",investedAmountBDT:75e3,expectedProfitBDT:12750,status:"ongoing",statusLabel:"Deploying on Field",statusDescription:"Modern eco-friendly nets deployed with GPS boat monitoring",startDate:"01 Aug 2026",expectedEndDate:"28 Feb 2027",image:"/images/freshwater-fish-culture.jpg",progressPercent:40,roiPercentage:17,farmerName:"Majed Bepari",contractType:"Mudarabah (70% / 30%)",fieldStage:"Stage 2 of 4: Estuarine Feeding Cycle & GPS Trawler Deployment",fieldInspector:"Senior Fishery Officer Enamul Bari",soilCondition:"Riverbed brackish water salinity: 4.2 ppt (Ideal)",weatherStatus:"Calm river conditions, tide tracking active",lastAuditDate:"10 Sep 2026 (GPS trackers calibrated)",progressMilestones:[{label:"Boat Modernization & Eco-Net Rigging",date:"01 Aug 2026",completed:!0},{label:"Meghna Estuary Fish School Tracking",date:"20 Aug 2026",completed:!0,active:!0},{label:"Cold-Chain Transshipment to Dhaka Port",date:"15 Dec 2026",completed:!1},{label:"Wholesale Settlement & Dividend Credit",date:"28 Feb 2027",completed:!1}]},{id:"inv-ong-5",name:"Export-Grade Mango Orchard Management",bengaliName:"রাজশাহী হিমসাগর ও আম্রপালি বাগান উন্নয়ন",category:"Agro",district:"Rajshahi",upazila:"Charghat",investedAmountBDT:55e3,expectedProfitBDT:8250,status:"ongoing",statusLabel:"Deploying on Field",statusDescription:"Fruit bagging and pest defense complete; fruit ripening cycle underway",startDate:"01 May 2026",expectedEndDate:"30 Nov 2026",image:"/images/rajshahi-mango-harvest.jpg",progressPercent:70,roiPercentage:15,farmerName:"Enamul Haque",contractType:"Mudarabah (65% / 35%)",fieldStage:"Stage 3 of 4: Double-Layer Paper Bagging & Organic Bio-Pest Defense",fieldInspector:"Deputy Director Horticulture Dr. K. M. Bashir",soilCondition:"Barind clay-loam, drip-irrigated with bio-slurry",weatherStatus:"Sunny autumn conditions, 31°C",lastAuditDate:"13 Sep 2026 (Zero chemical residue certified)",progressMilestones:[{label:"Pruning, Soil Enrichment & Tree Health Audit",date:"01 May 2026",completed:!0},{label:"Paper Bagging & Eco Pheromone Traps",date:"15 Jun 2026",completed:!0},{label:"Brix Sugar Content Testing & Field Guarding",date:"13 Sep 2026",completed:!0,active:!0},{label:"Supermarket Wholesale Dispatch & Payout",date:"30 Nov 2026",completed:!1}]},{id:"inv-cmp-1",name:"Organic Mustard Oil Seed Cultivation",bengaliName:"দিনাজপুর সরিষা চাষ ও কোল্ড-প্রেস তেল উৎপাদন",category:"Crops",district:"Dinajpur",investedAmountBDT:5e4,expectedProfitBDT:8e3,actualReturnBDT:58200,status:"completed",statusLabel:"Completed & Paid",statusDescription:"Harvest sold in bulk to wholesale traders; full capital + profit paid to bank account",completionDate:"20 Aug 2026",payoutReceivedDate:"22 Aug 2026",image:"/images/mustard-honey-farming.jpg",progressPercent:100,roiPercentage:16.4,farmerName:"Habibur Rahman",contractType:"Mudarabah (65% / 35%)",moneySentDate:"10 Jan 2026, 10:45 AM",moneySentChannel:"bKash Merchant Payment",moneySentTrxId:"BK918234-GMB",fieldDisbursementDate:"16 Jan 2026",mandiSettlementDate:"18 Aug 2026",moneyReceivedDate:"22 Aug 2026, 03:30 PM",moneyReceivedChannel:"BEFTN to Islami Bank Bangladesh Ltd",moneyReceivedTrxId:"EFTN-BB-20260822-9182",moneyReceivedAccount:"IBBL Savings A/C ...4821",harvestWeightKg:4200,mandiRatePerKg:138},{id:"inv-cmp-2",name:"Winter Hydroponic Strawberries & Capsicum",bengaliName:"কুমিল্লা আধুনিক গ্রীনহাউস স্ট্রবেরি চাষ",category:"Agro",district:"Cumilla",investedAmountBDT:4e4,expectedProfitBDT:6200,actualReturnBDT:46400,status:"completed",statusLabel:"Completed & Paid",statusDescription:"Supplied directly to Dhaka supershops; audited final payout settled",completionDate:"15 Jul 2026",payoutReceivedDate:"18 Jul 2026",image:"/images/munshiganj-potato-harvest.jpg",progressPercent:100,roiPercentage:16,farmerName:"Dr. Kamrul Hasan",contractType:"Mudarabah (60% / 40%)",moneySentDate:"05 Jan 2026, 02:15 PM",moneySentChannel:"Nagad Corporate Gateway",moneySentTrxId:"NG482019-GMB",fieldDisbursementDate:"11 Jan 2026",mandiSettlementDate:"12 Jul 2026",moneyReceivedDate:"18 Jul 2026, 11:20 AM",moneyReceivedChannel:"BEFTN to Islami Bank Bangladesh Ltd",moneyReceivedTrxId:"EFTN-BB-20260718-4720",moneyReceivedAccount:"IBBL Savings A/C ...4821",harvestWeightKg:2150,mandiRatePerKg:280},{id:"inv-cmp-3",name:"Haor Free-Range Duck & Egg Production",bengaliName:"হাওর ভাসমান হাঁস পালন ও জৈব ডিম সংগ্রহ",category:"Livestock",district:"Netrokona",investedAmountBDT:35e3,expectedProfitBDT:5600,actualReturnBDT:40950,status:"completed",statusLabel:"Completed & Paid",statusDescription:"Full 6-month laying cycle concluded; birds liquidated at premium market price",completionDate:"30 Jun 2026",payoutReceivedDate:"03 Jul 2026",image:"/images/sustainable-poultry.jpg",progressPercent:100,roiPercentage:17,farmerName:"Motiur Rahman",contractType:"Mudarabah (65% / 35%)",moneySentDate:"28 Dec 2025, 09:30 AM",moneySentChannel:"Islami Bank Direct Transfer",moneySentTrxId:"IB820491-TRX",fieldDisbursementDate:"04 Jan 2026",mandiSettlementDate:"28 Jun 2026",moneyReceivedDate:"03 Jul 2026, 04:45 PM",moneyReceivedChannel:"bKash Verified Wallet Transfer",moneyReceivedTrxId:"BK661902-RET",moneyReceivedAccount:"bKash 01711-XXXXXX",harvestWeightKg:1800,mandiRatePerKg:240},{id:"inv-cmp-4",name:"Golden Jute Fiber Modern Retting Cluster",bengaliName:"ফরিদপুর সোনালী আঁশ পাট রিবন রেটিং প্রকল্প",category:"Crops",district:"Faridpur",investedAmountBDT:65e3,expectedProfitBDT:9750,actualReturnBDT:75400,status:"completed",statusLabel:"Completed & Paid",statusDescription:"Grade-A jute bundles exported to European buyers via BJMC partner mill",completionDate:"12 May 2026",payoutReceivedDate:"16 May 2026",image:"/images/jute-bamboo-women.jpg",progressPercent:100,roiPercentage:16,farmerName:"Sufian Mollah",contractType:"Mudarabah (65% / 35%)",moneySentDate:"15 Nov 2025, 01:10 PM",moneySentChannel:"bKash Merchant Payment",moneySentTrxId:"BK339102-GMB",fieldDisbursementDate:"22 Nov 2025",mandiSettlementDate:"08 May 2026",moneyReceivedDate:"16 May 2026, 12:30 PM",moneyReceivedChannel:"BEFTN to Islami Bank Bangladesh Ltd",moneyReceivedTrxId:"EFTN-BB-20260516-1930",moneyReceivedAccount:"IBBL Savings A/C ...4821",harvestWeightKg:5800,mandiRatePerKg:95},{id:"inv-cmp-5",name:"Hybrid Maize Collective & Feed Supply",bengaliName:"চুয়াডাঙ্গা উচ্চ ফলনশীল ভুট্টা সমবায় প্রকল্প",category:"Crops",district:"Chuadanga",investedAmountBDT:45e3,expectedProfitBDT:7200,actualReturnBDT:52650,status:"completed",statusLabel:"Completed & Paid",statusDescription:"40 tons of sun-dried maize delivered to registered feed mill contract",completionDate:"28 Apr 2026",payoutReceivedDate:"02 May 2026",image:"/images/red-chilli-farming.jpg",progressPercent:100,roiPercentage:17,farmerName:"Zahirul Islam",contractType:"Mudarabah (60% / 40%)",moneySentDate:"02 Nov 2025, 11:00 AM",moneySentChannel:"bKash Merchant Payment",moneySentTrxId:"BK110293-GMB",fieldDisbursementDate:"08 Nov 2025",mandiSettlementDate:"24 Apr 2026",moneyReceivedDate:"02 May 2026, 02:40 PM",moneyReceivedChannel:"BEFTN to Islami Bank Bangladesh Ltd",moneyReceivedTrxId:"EFTN-BB-20260502-8821",moneyReceivedAccount:"IBBL Savings A/C ...4821",harvestWeightKg:8500,mandiRatePerKg:42},{id:"inv-cmp-6",name:"Sylhet Cane & Bamboo Crafts Workshop",bengaliName:"সিলেট ঐতিহ্যবাহী বেত ও বাঁশ হস্তশিল্প কেন্দ্র",category:"Handicrafts",district:"Sylhet",investedAmountBDT:25e3,expectedProfitBDT:3800,actualReturnBDT:29e3,status:"completed",statusLabel:"Completed & Paid",statusDescription:"1,200 handmade tea baskets supplied to tea estates and platform marketplace",completionDate:"10 Apr 2026",payoutReceivedDate:"14 Apr 2026",image:"/images/beter-jhuri-bag.jpg",progressPercent:100,roiPercentage:16,farmerName:"Bipul Chandra Roy",contractType:"Artisan Profit Share",moneySentDate:"18 Oct 2025, 04:20 PM",moneySentChannel:"Nagad Gateway",moneySentTrxId:"NG991823-GMB",fieldDisbursementDate:"25 Oct 2025",mandiSettlementDate:"06 Apr 2026",moneyReceivedDate:"14 Apr 2026, 05:15 PM",moneyReceivedChannel:"bKash Verified Wallet Transfer",moneyReceivedTrxId:"BK772019-RET",moneyReceivedAccount:"bKash 01711-XXXXXX",harvestWeightKg:1200,mandiRatePerKg:185},{id:"inv-cmp-7",name:"Sundarbans Natural Wild Honey Harvesting",bengaliName:"সাতক্ষীরা সুন্দরবন প্রাকৃতিক মধু সংগ্রহ সমবায়",category:"Agro",district:"Satkhira",investedAmountBDT:3e4,expectedProfitBDT:4800,actualReturnBDT:35100,status:"completed",statusLabel:"Completed & Paid",statusDescription:"Pure raw Khalisha honey bottled and sold 100% via GramBondhon marketplace",completionDate:"20 Mar 2026",payoutReceivedDate:"25 Mar 2026",image:"/images/clay-pottery.jpg",progressPercent:100,roiPercentage:17,farmerName:"Gazi Nurul Islam (Mawali)",contractType:"Mudarabah (65% / 35%)",moneySentDate:"01 Oct 2025, 10:15 AM",moneySentChannel:"bKash Merchant Payment",moneySentTrxId:"BK601923-GMB",fieldDisbursementDate:"07 Oct 2025",mandiSettlementDate:"18 Mar 2026",moneyReceivedDate:"25 Mar 2026, 03:20 PM",moneyReceivedChannel:"BEFTN to Islami Bank Bangladesh Ltd",moneyReceivedTrxId:"EFTN-BB-20260325-1102",moneyReceivedAccount:"IBBL Savings A/C ...4821",harvestWeightKg:850,mandiRatePerKg:650},{id:"inv-cmp-8",name:"Eid-ul-Adha Red Cattle Fattening",bengaliName:"পাবনা লাল গরু পালন ও প্রাকৃতিক মোটাতাজাকরণ",category:"Livestock",district:"Pabna",investedAmountBDT:8e4,expectedProfitBDT:13600,actualReturnBDT:94400,status:"completed",statusLabel:"Completed & Paid",statusDescription:"All 8 healthy bulls sold during Eid market at top liveweight auction",completionDate:"25 Jun 2026",payoutReceivedDate:"28 Jun 2026",image:"/images/bogura-dairy-farm.jpg",progressPercent:100,roiPercentage:18,farmerName:"Anwar Hossain",contractType:"Mudarabah (60% / 40%)",moneySentDate:"15 Dec 2025, 03:00 PM",moneySentChannel:"Islami Bank Direct Transfer",moneySentTrxId:"IB910283-TRX",fieldDisbursementDate:"20 Dec 2025",mandiSettlementDate:"24 Jun 2026",moneyReceivedDate:"28 Jun 2026, 05:00 PM",moneyReceivedChannel:"BEFTN to Islami Bank Bangladesh Ltd",moneyReceivedTrxId:"EFTN-BB-20260628-9941",moneyReceivedAccount:"IBBL Savings A/C ...4821",harvestWeightKg:3200,mandiRatePerKg:340}],I=[{id:"act-1",description:"Dividend Payout Credited: Dinajpur Mustard (+৳8,200)",division:"bKash Wallet",status:"COMPLETED",timestamp:"Today, 11:30 AM"},{id:"act-2",description:"Investment Confirmed: Bio-Secure Layer Poultry (৳50,000)",division:"Gazipur Farm",status:"LIVE",timestamp:"Yesterday, 4:15 PM"},{id:"act-3",description:"Field Inspection Passed: Aman Rice Cluster (Audited by Field Officer)",division:"Rangpur Site",status:"IN REVIEW",timestamp:"2 days ago"},{id:"act-4",description:"Contract Milestone: Jamalpur Nakshi Kantha Batch #3 Ready",division:"Jamalpur Guild",status:"LIVE",timestamp:"3 days ago"}];class z{constructor(){m(this,"currentIndex",0);m(this,"timer",null);m(this,"intervalMs",2e3);m(this,"slidesContainer",null);m(this,"dotsContainer",null);this.slidesContainer=document.getElementById("hero-slides-wrapper"),this.dotsContainer=document.getElementById("hero-dots-wrapper")}init(){!this.slidesContainer||!this.dotsContainer||(this.renderSlides(),this.renderDots(),this.setupEventListeners(),this.goToSlide(0),this.startAutoPlay())}renderSlides(){this.slidesContainer&&(this.slidesContainer.innerHTML=M.map((e,t)=>`
      <div class="hero-slide ${t===0?"active":""}" data-index="${t}" style="background-image: url('${e.image}')">
        <div class="hero-slide-overlay"></div>
      </div>
    `).join(""))}renderDots(){this.dotsContainer&&(this.dotsContainer.innerHTML=M.map((e,t)=>`
      <button class="hero-dot ${t===0?"active":""}" data-index="${t}" aria-label="Go to slide ${t+1}"></button>
    `).join(""))}setupEventListeners(){var e;(e=this.dotsContainer)==null||e.addEventListener("click",t=>{const a=t.target.closest(".hero-dot");if(a&&a.dataset.index!==void 0){const i=parseInt(a.dataset.index,10);this.goToSlide(i),this.restartAutoPlay()}})}goToSlide(e){var i,r;e<0&&(e=M.length-1),e>=M.length&&(e=0),this.currentIndex=e;const t=(i=this.slidesContainer)==null?void 0:i.querySelectorAll(".hero-slide");t==null||t.forEach((n,o)=>{n.classList.toggle("active",o===e)});const a=(r=this.dotsContainer)==null?void 0:r.querySelectorAll(".hero-dot");a==null||a.forEach((n,o)=>{n.classList.toggle("active",o===e)})}next(){this.goToSlide(this.currentIndex+1)}prev(){this.goToSlide(this.currentIndex-1)}startAutoPlay(){this.timer&&clearInterval(this.timer),this.timer=window.setInterval(()=>{this.next()},this.intervalMs)}restartAutoPlay(){this.startAutoPlay()}}class K{constructor(e,t,a){m(this,"stats",H);m(this,"portfolioProjects",G);m(this,"currentTab","dashboard");m(this,"currentProjectFilter","all");m(this,"currentMarketCategory","all");m(this,"marketSearchQuery","");m(this,"dashboardSearchQuery","");m(this,"investorProfileSettings",{avatar:"/images/investor-rahat-khan.jpg",fullName:"Rahat Khan",email:"rahat.khan@grambandhan.org",investorId:"GB-INV-8821",nid:"1988269120485921",phone:"+880 1711-892401",investorTier:"Premium Halal Equity Partner",role:"Ethical Agri-FinTech Investor & Shariah Impact Partner",location:"Gulshan-2, Dhaka, Bangladesh",joinedDate:"Aug 2021",activeTheme:"dark",twoFactorActive:!0,portfolioHealth:"100% Active & Shariah Audited",totalCapitalInvested:"৳ 4,85,000",totalProfitEarned:"৳ 84,250 (+19.4%)",bankDetails:{bankName:"Islami Bank Bangladesh Ltd (IBBL)",branchName:"Gulshan Circle-2 Branch, Dhaka",accountHolder:"Rahat Khan",accountNumber:"2050 1480 2019 4821",routingNumber:"125272648",accountType:"Mudarabah Profit-Sharing Savings Account",bkashNumber:"01711-892401",nagadNumber:"01711-892401",payoutPreference:"Bank Transfer (BEFTN / NPSB Electronic Clearing)",verifiedStatus:"Verified Escrow Recipient"},sessions:[{id:"sess-1",device:'MacBook Pro 16" • Chrome',location:"Dhaka, Bangladesh • 103.242.21.4 • Current Session",icon:"laptop"},{id:"sess-2",device:"iPhone 14 Pro • Mobile App",location:"Dhaka, Bangladesh • 2 hours ago",icon:"mobile"}]});m(this,"financialSearchQuery","");m(this,"aiSelectedProjectId","proj-1");m(this,"aiFloodRiskLevel","low");m(this,"aiNdviIndex",.84);m(this,"aiMandiVolatility","low");m(this,"aiCoopRating","tier1");m(this,"isAiSimulating",!1);m(this,"aiSimulationStep",4);m(this,"aiSelectedPrincipal",2e4);m(this,"aiActivePreset","safe");m(this,"isNotificationOpen",!1);m(this,"notificationFilter","all");m(this,"notifications",[{id:"notif-1",category:"financial",icon:"💰",title:"Dividend Payout Credited to Bank",message:"৳ 18,500 Shariah profit successfully transferred via BEFTN to your IBBL A/C ...4821 for Dinajpur Mustard Seed Cultivation (Batch 1).",time:"12 mins ago",read:!1,tab:"financials"},{id:"notif-2",category:"field",icon:"🛰️",title:"Sentinel-2 Crop Biometrics Refresh",message:"Multispectral satellite scan confirmed optimal soil moisture (68%) and high chlorophyll vigour (NDVI 0.84) in Munshiganj Organic Potato Cluster.",time:"2 hours ago",read:!1,tab:"projects",projectFilter:"ongoing"},{id:"notif-3",category:"financial",icon:"🌾",title:"Mandi Wholesale Price Locked",message:"Pran Agro Wholesale Division approved forward off-take agreement for Kurigram Mustard at ৳ 142/KG, securing expected returns.",time:"Yesterday",read:!1,tab:"financials"},{id:"notif-4",category:"field",icon:"🚜",title:"Field Milestone Verified by Agronomist",message:"Bio-security vaccination completed at Gazipur Layer Poultry site. 100% flock survival certified by District Veterinary Officer.",time:"2 days ago",read:!0,tab:"projects",projectFilter:"ongoing"},{id:"notif-5",category:"weather",icon:"🛡️",title:"Monsoon Anomaly Advisory Cleared",message:"Precipitation model indicates normal Kharif weather patterns across Bogura and Rajshahi for the next 14 days.",time:"3 days ago",read:!0,tab:"airisk"}]);m(this,"projectsController");m(this,"marketplaceController");m(this,"showToastNotification");this.projectsController=e,typeof t=="function"?(this.showToastNotification=t,a&&typeof a=="object"&&(this.marketplaceController=a)):(this.marketplaceController=t,this.showToastNotification=a||(i=>console.log(i)))}setMarketplaceController(e){this.marketplaceController=e}getProjectsController(){return this.projectsController}init(){this.loadSavedBankSettings(),this.renderInvestorHero(),this.renderDashboardModal(),this.setupAuthStateListener(),this.setupGlobalClickHandlers(),this.setupInvestmentPaymentEventListener()}setupAuthStateListener(){f.onAuthChange(e=>{this.handleAuthChange(e)})}handleAuthChange(e){const t=document.getElementById("hero-slideshow"),a=document.querySelector(".spotlight-section"),i=document.getElementById("investor-hero-section"),r=document.getElementById("investor-dashboard-view");if(e){i&&(i.style.display="block"),t&&(t.style.display="none"),a&&(a.style.display="none");const n=document.getElementById("dash-user-name");n&&(n.textContent=e.name||"Investor User");const o=document.getElementById("dash-user-avatar");o&&(o.innerHTML=`<span>${this.getInitials(e.name||"Investor User")}</span>`)}else i&&(i.style.display="none"),t&&(t.style.display="block"),a&&(a.style.display="block"),r&&(r.classList.remove("active"),document.body.style.overflow="")}renderInvestorHero(){const e=document.getElementById("investor-hero-container");e&&(e.innerHTML=`
      <section class="investor-hero-banner" id="investor-hero-section" style="display: none;">
        <div class="investor-hero-content">
          <h1 class="investor-hero-title">Invest in the Earth’s<br/>Future</h1>
          <p class="investor-hero-desc">
            Discover vetted agricultural collectives across Bangladesh. Support local farmers while growing your sustainable portfolio.
          </p>

          <!-- Search with Category Autocomplete Recommendation Dropdown matching Photo 4 -->
          <div class="investor-hero-search-wrapper" id="investor-search-wrapper">
            <div class="investor-hero-search-box">
              <span class="investor-hero-search-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input type="text" class="investor-hero-search-input" id="investor-category-search-input" placeholder="Search by category (type 'h' for Handicrafts...)" autocomplete="off" />
              <button class="investor-hero-explore-btn" id="btn-investor-explore">Explore</button>
            </div>

            <!-- Autocomplete Suggestion Dropdown -->
            <div class="investor-search-suggestions" id="investor-search-suggestions"></div>
          </div>

          <!-- Quick link to open Portfolio Dashboard -->
          <button class="investor-dashboard-quicklink" id="btn-open-investor-profile">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>View My Investor Portfolio & Dashboard (পোর্টফোলিও ড্যাশবোর্ড)</span>
            <span>→</span>
          </button>
        </div>
      </section>
    `,this.setupInvestorHeroEvents())}setupInvestorHeroEvents(){const e=document.getElementById("investor-category-search-input"),t=document.getElementById("btn-investor-explore"),a=document.getElementById("btn-open-investor-profile"),i=document.getElementById("investor-search-suggestions"),r=[{key:"handicrafts",category:"handicrafts",title:"Handicrafts & Rural Artisans (হস্তশিল্প)",subtitle:"Nakshi Kantha, Jute Bag & Cane Craft Cooperatives",icon:"🧵",badge:"Vetted Craft"},{key:"crops",category:"crops",title:"High-Yield Crops & Grains (উচ্চ ফলনশীল শস্য)",subtitle:"Boro & Aman Rice, Maize & Char Chillies",icon:"🌾",badge:"15-18% ROI"},{key:"fisheries",category:"fisheries",title:"Hilsha & Sustainable Fisheries (ইলিশ মাছ ও মৎস্য)",subtitle:"Meghna Hilsha, Freshwater Telapia & Shrimps",icon:"🐟",badge:"Eco Nets"},{key:"agro",category:"agro",title:"Honey & Organic Agro (সুন্দরবন প্রাকৃতিক মধু)",subtitle:"Raw Khalisha Wild Honey & Mustard Cold-Press",icon:"🍯",badge:"Sundarbans"},{key:"livestock",category:"livestock",title:"Livestock & Organic Dairy (গাভী ও ছাগল পালন)",subtitle:"Black Bengal Goats & Baghabari Dairy Farms",icon:"🐄",badge:"Asset-Backed"},{key:"hydroponic",category:"crops",title:"Hydroponic Greenhouse Cultivation (হাইড্রোপনিক শাকসবজি)",subtitle:"Premium Strawberries & Capsicum Cold Chain",icon:"🌱",badge:"Direct Link"}],n=s=>{if(!i)return;const l=s.trim().toLowerCase();if(!l){i.classList.remove("active");return}const c=r.filter(d=>d.title.toLowerCase().includes(l)||d.subtitle.toLowerCase().includes(l)||d.key.toLowerCase().includes(l)||d.category.toLowerCase().includes(l));if(c.length===0){i.innerHTML=`
          <div class="investor-sugg-header">
            <span>Category Recommendations</span>
            <span>0 matches</span>
          </div>
          <div style="padding: 14px; text-align: center; color: #64748B; font-size: 0.85rem;">
            No category found matching "<strong>${s}</strong>"
          </div>
        `,i.classList.add("active");return}i.innerHTML=`
        <div class="investor-sugg-header">
          <span>Recommended Categories (${c.length})</span>
          <span>Click to filter</span>
        </div>
        ${c.map(d=>`
          <div class="investor-sugg-item" data-cat="${d.category}" data-title="${d.title}">
            <div class="investor-sugg-icon">${d.icon}</div>
            <div class="investor-sugg-text">
              <div class="investor-sugg-title">${d.title}</div>
              <div class="investor-sugg-sub">${d.subtitle}</div>
            </div>
            <span class="investor-sugg-badge">${d.badge}</span>
          </div>
        `).join("")}
      `,i.classList.add("active"),i.querySelectorAll(".investor-sugg-item").forEach(d=>{d.addEventListener("click",()=>{const p=d.dataset.cat,g=d.dataset.title||"";e&&(e.value=g),i.classList.remove("active"),p&&this.projectsController.filterByCategory(p);const u=document.getElementById("projects");u&&u.scrollIntoView({behavior:"smooth"}),this.showToastNotification(`Showing active projects in: ${g}`)})})};e==null||e.addEventListener("input",()=>{n(e.value)}),e==null||e.addEventListener("focus",()=>{e.value.trim()&&n(e.value)}),document.addEventListener("click",s=>{!s.target.closest("#investor-search-wrapper")&&i&&i.classList.remove("active")});const o=()=>{const s=e==null?void 0:e.value.trim().toLowerCase();i&&i.classList.remove("active");const l=document.getElementById("projects");if(l&&l.scrollIntoView({behavior:"smooth"}),s){const c=r.find(d=>d.title.toLowerCase().includes(s)||d.category.toLowerCase().includes(s)||d.key.toLowerCase().includes(s));if(c)this.projectsController.filterByCategory(c.category),this.showToastNotification(`Showing vetted projects in ${c.title}`);else{const d=document.querySelectorAll(".filter-pill");let p=!1;d.forEach(g=>{const u=g.dataset.category||"";(u.toLowerCase().includes(s)||s.includes(u.toLowerCase()))&&(g.click(),p=!0)}),p||this.showToastNotification(`Showing vetted agricultural projects matching "${s}"`)}}};t==null||t.addEventListener("click",o),e==null||e.addEventListener("keydown",s=>{s.key==="Enter"&&o()}),a==null||a.addEventListener("click",()=>{this.openDashboard()})}renderDashboardModal(){let e=document.getElementById("investor-dashboard-view");e||(e=document.createElement("div"),e.id="investor-dashboard-view",e.className="investor-dashboard-view",document.body.appendChild(e)),e.innerHTML=`
      <!-- 1. LEFT SIDEBAR (PHOTO 1: #02221A DEEP DARK GREEN) -->
      <aside class="dash-sidebar" id="dash-sidebar">
        <div>
          <!-- Brand Logo & Name -->
          <a href="#" class="dash-brand-block" id="dash-brand-home">
            <svg class="brand-leaf-icon" viewBox="0 0 24 24" fill="none" style="width:26px;height:26px;flex-shrink:0;">
              <path d="M21 3C13.5 3.5 6 9 4 17.5C3.5 19.5 4.5 21 6.5 21.5C8 22 10 21.5 12 20C17.5 16 20.5 10 21 3Z" fill="#10B981"/>
              <path d="M8.5 17C12 13.5 15.5 10 19 5.5" stroke="#02221A" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            <span class="dash-brand-title" style="color: #FFFFFF; font-family: var(--font-sans); font-weight: 800;">GramBandhan</span>
          </a>

          <!-- Floating circular arrow toggle button at the middle of the sidebar -->
          <button class="dash-sidebar-floating-toggle" id="dash-floating-sidebar-toggle" title="Toggle Sidebar (স্লাইডবার ইন / আউট)" aria-label="Toggle Sidebar">
            <svg class="toggle-arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <!-- Menu Items matching Photo 1 -->
          <nav class="dash-nav-menu">
            <button class="dash-nav-item active" data-dash-tab="dashboard">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>Dashboard</span>
            </button>

            <button class="dash-nav-item" data-dash-tab="projects">
              <!-- Tractor Icon matching Photo 1 -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="7" cy="15" r="4"></circle>
                <circle cx="18" cy="16" r="3"></circle>
                <path d="M7 11h8l2 5H3l2-5h2"></path>
                <path d="M10 5h4v6h-4z"></path>
              </svg>
              <span>Projects</span>
            </button>

            <button class="dash-nav-item" data-dash-tab="marketplace">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span>Marketplace</span>
            </button>

            <button class="dash-nav-item" data-dash-tab="financials">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M6 12h.01M18 12h.01"></path>
              </svg>
              <span>Financials</span>
            </button>

            <button class="dash-nav-item" data-dash-tab="airisk">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              <span>AI Based Risk Analysis</span>
            </button>

            <button class="dash-nav-item" data-dash-tab="settings">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              <span>Settings</span>
            </button>

            <button class="dash-nav-item" data-dash-tab="support">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <span>Support</span>
            </button>
          </nav>
        </div>

        <!-- Bottom Items matching Photo 1: FeedBack GIVE & Logout -->
        <div class="dash-sidebar-bottom">
          <button class="dash-nav-item item-feedback" data-dash-tab="feedback">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span>FeedBack GIVE</span>
          </button>

          <button class="dash-nav-item item-logout" id="dash-btn-logout">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <!-- 2. MAIN DASHBOARD AREA -->
      <main class="dash-main-area">
        <!-- TOP NAVBAR MATCHING PHOTO 2 -->
        <header class="dash-topbar">
          <div class="dash-topbar-left">
            <div class="dash-search-wrapper" id="dash-search-wrapper">
              <div class="dash-search-pill">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="text" id="dash-topbar-search" placeholder="Search projects, records, investments..." autocomplete="off" />
                <button type="button" id="dash-topbar-search-clear" class="dash-search-clear" style="display: none;" title="Clear search">✕</button>
              </div>
              <div class="dash-search-suggestions" id="dash-search-suggestions"></div>
            </div>

            <button class="dash-btn-back-projects" id="dash-btn-back-projects" title="Back to Active Projects Home">
              <span>← Back to Active Projects</span>
            </button>
          </div>

          <div class="dash-topbar-right">
            <button class="dash-icon-action-btn" id="dash-btn-notifications" aria-label="Notifications" title="Notifications" style="position: relative;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span class="dash-notif-badge" id="dash-notif-badge" style="${this.notifications.filter(t=>!t.read).length>0?"":"display:none;"}">${this.notifications.filter(t=>!t.read).length}</span>
            </button>

            <button class="dash-icon-action-btn" id="dash-btn-help" aria-label="Help & FAQ" title="Help & FAQ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </button>

            <div class="dash-topbar-divider"></div>

            <div class="dash-user-profile-badge" id="dash-user-profile-toggle">
              <span class="dash-user-name" id="dash-user-name">Investor User</span>
              <div class="dash-user-avatar" id="dash-user-avatar">
                <span>TR</span>
              </div>
            </div>
          </div>
        </header>

        <!-- NOTIFICATION CENTER FLYOUT DRAWER -->
        <div class="dash-notif-drawer-overlay" id="dash-notif-drawer-overlay" style="display: none;">
          <div class="dash-notif-drawer" id="dash-notif-drawer">
            <!-- Populated dynamically by renderNotificationDrawerContent() -->
          </div>
        </div>

        <!-- DYNAMIC TAB CONTENT AREA -->
        <div class="dash-scrollable-content" id="dash-dynamic-content">
          <!-- Populated by renderCurrentTabContent() -->
        </div>
      </main>
    `,this.renderCurrentTabContent(),this.setupDashboardEvents()}renderCurrentTabContent(){const e=document.getElementById("dash-dynamic-content");e&&(this.currentTab==="dashboard"?this.renderPortfolioOverview(e):this.currentTab==="projects"?this.renderInvestorProjectsTab(e):this.currentTab==="marketplace"?this.renderMarketplaceTab(e):this.currentTab==="financials"?this.renderFinancialsTab(e):this.currentTab==="airisk"?this.renderAiRiskTab(e):this.currentTab==="settings"?this.renderSettingsTab(e):this.currentTab==="support"?this.renderSupportTab(e):this.currentTab==="feedback"&&this.renderFeedbackTab(e))}renderPortfolioOverview(e){var a,i,r,n,o;const t=this.stats;e.innerHTML=`
      <!-- Header Row -->
      <div class="dash-content-header">
        <div class="dash-title-group">
          <h1>My Investment Portfolio</h1>
          <p>Real-time personal portfolio performance, active field deployments, and profit payouts for ${this.investorProfileSettings.fullName||"Tariq Rahman"}.</p>
        </div>

        <div class="dash-header-actions">
          <span class="dash-live-badge">Live Portfolio</span>
          <span class="dash-sync-time">Last synced: ${t.lastSynced}</span>
          <button class="dash-btn-export" id="btn-export-pdf">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Export Statement</span>
          </button>
        </div>
      </div>

      <!-- ROW 1: THREE FINANCIAL METRICS CARDS (PHOTO 3) -->
      <div class="dash-metrics-grid-top">
        <!-- 1. Total Investment (Till Now) -->
        <div class="dash-square-card dash-card-dark-green">
          <div class="dash-card-top-row">
            <div class="dash-card-icon-wrap">🏛️</div>
            <span class="dash-card-badge badge-green-trend">+14.2%</span>
          </div>
          <div>
            <div class="dash-stat-label">Total Investment (Till Now)</div>
            <div class="dash-stat-val">৳ ${t.totalInvestmentBDT.toLocaleString()}</div>
            <div class="dash-progress-line">
              <div class="dash-progress-fill" style="width: 72%;"></div>
            </div>
            <div class="dash-stat-subline">
              <span>Annual Investment</span>
              <strong>৳ ${t.annualInvestmentBDT.toLocaleString()}</strong>
            </div>
          </div>
        </div>

        <!-- 2. Total Profit (Till Now) -->
        <div class="dash-square-card dash-card-soft-green">
          <div class="dash-card-top-row">
            <div class="dash-card-icon-wrap">💵</div>
            <span class="dash-card-badge badge-green-trend">+8.4%</span>
          </div>
          <div>
            <div class="dash-stat-label">Total Profit (Till Now)</div>
            <div class="dash-stat-val" style="color: #064E3B;">৳ ${t.totalProfitBDT.toLocaleString()}</div>
            <div class="dash-progress-line">
              <div class="dash-progress-fill" style="width: 58%; background: #059669;"></div>
            </div>
            <div class="dash-stat-subline">
              <span>Annual Profit</span>
              <strong>৳ ${t.annualProfitBDT.toLocaleString()}</strong>
            </div>
          </div>
        </div>

        <!-- 3. Available Wallet Balance -->
        <div class="dash-square-card dash-card-soft-mint">
          <div class="dash-card-top-row">
            <div class="dash-card-icon-wrap">🛡️</div>
            <span class="dash-card-badge badge-stable">Withdrawable</span>
          </div>
          <div>
            <div class="dash-stat-label">Available Wallet Balance</div>
            <div class="dash-stat-val" style="color: #064E3B;">৳ ${t.totalAccountBalanceBDT.toLocaleString()}</div>
            <div class="dash-progress-line">
              <div class="dash-progress-fill" style="width: 85%; background: #10B981;"></div>
            </div>
            <div class="dash-stat-subline">
              <span>Withdrawable: <strong>৳ 125,000</strong></span>
              <span>Reinvest Ready: <strong>৳ 60,000</strong></span>
            </div>
          </div>
        </div>
      </div>

      <!-- ROW 2: CRITICAL PROJECT STATUS SQUARE BOXES (USER EXPLICIT REQUIREMENT)
           "then num of recent project ongoing project and completed project .in just square shape box not in details just a sigle word or number.here is a thing recent project means that he invested but the project not started yet ongoing means he invested and the project r deploying on field completed means finished and he got monrey" -->
      <div class="dash-metrics-grid-projects">
        <!-- 4. RECENT PROJECTS -->
        <div class="dash-square-card dash-project-square status-recent" id="stat-card-recent" title="Click to view Recent projects">
          <div class="dash-card-top-row">
            <div class="dash-card-icon-wrap" style="background: #FEF3C7; color: #D97706;">⏳</div>
            <span class="dash-card-badge badge-recent">NOT STARTED YET</span>
          </div>
          <div>
            <div class="dash-stat-label">RECENT PROJECTS</div>
            <div class="dash-stat-val" style="color: #B45309;">${t.recentProjectsCount}</div>
            <div class="dash-project-meaning-desc">
              Invested by you, but field cultivation has not started yet.
            </div>
          </div>
        </div>

        <!-- 5. ONGOING PROJECTS -->
        <div class="dash-square-card dash-project-square status-ongoing" id="stat-card-ongoing" title="Click to view Ongoing projects">
          <div class="dash-card-top-row">
            <div class="dash-card-icon-wrap" style="background: #DBEAFE; color: #2563EB;">🚜</div>
            <span class="dash-card-badge badge-ongoing">DEPLOYING ON FIELD</span>
          </div>
          <div>
            <div class="dash-stat-label">ONGOING PROJECTS</div>
            <div class="dash-stat-val" style="color: #1D4ED8;">${t.ongoingProjectsCount}</div>
            <div class="dash-project-meaning-desc">
              Invested by you & currently actively growing / deploying on the ground.
            </div>
          </div>
        </div>

        <!-- 6. COMPLETED PROJECTS -->
        <div class="dash-square-card dash-project-square status-completed" id="stat-card-completed" title="Click to view Completed projects">
          <div class="dash-card-top-row">
            <div class="dash-card-icon-wrap" style="background: #D1FAE5; color: #059669;">💰</div>
            <span class="dash-card-badge badge-completed">FINISHED & PAID</span>
          </div>
          <div>
            <div class="dash-stat-label">COMPLETED PROJECTS</div>
            <div class="dash-stat-val" style="color: #047857;">${t.completedProjectsCount}</div>
            <div class="dash-project-meaning-desc">
              Finished cycles & you have received full capital + profit payouts.
            </div>
          </div>
        </div>
      </div>

      <!-- MIDDLE SECTION: MAP & DONUT CHART (INVESTOR-CENTRIC) -->
      <div class="dash-middle-grid">
        <!-- Geographical Distribution of My Investments -->
        <div class="dash-panel-card">
          <div class="dash-panel-header">
            <div>
              <h3>My Active Field Locations</h3>
              <p style="margin: 2px 0 0; font-size: 0.75rem; color: #64748B;">Your ৳ 450,000 capital deployed across partner farms</p>
            </div>
            <div class="dash-map-legend">
              <span class="dot-density-high">● High Allocation</span>
              <span class="dot-density-med">● Medium</span>
            </div>
          </div>

          <div class="dash-map-box">
            <!-- Bangladesh Stylized SVG Map -->
            <svg class="dash-map-svg" viewBox="0 0 500 350" fill="none">
              <!-- Outlined Bangladesh shape representation -->
              <path d="M 210,30 Q 235,10 270,35 Q 310,20 340,65 Q 380,85 365,130 Q 385,170 375,210 Q 360,250 330,270 Q 300,310 260,320 Q 220,330 190,290 Q 150,290 140,250 Q 115,220 120,180 Q 110,130 145,95 Q 170,80 185,50 Z" 
                    fill="#1C4337" stroke="#34D399" stroke-width="1.5" />
            </svg>

            <!-- Map pins showing investor's capital and projects -->
            <div class="map-pin-marker" style="top: 22%; left: 32%;" title="Rangpur: ৳ 120,000 (2 Projects • Maize & Mustard)">
              <div class="map-pin-dot"></div>
              <span class="map-pin-label">Rangpur</span>
            </div>

            <div class="map-pin-marker" style="top: 38%; left: 24%;" title="Rajshahi: ৳ 160,000 (3 Projects • Paddy & Dairy)">
              <div class="map-pin-dot"></div>
              <span class="map-pin-label">Rajshahi</span>
            </div>

            <div class="map-pin-marker" style="top: 32%; left: 68%;" title="Sylhet: ৳ 95,000 (2 Projects • Organic Tea & Fish)">
              <div class="map-pin-dot"></div>
              <span class="map-pin-label">Sylhet</span>
            </div>

            <div class="map-pin-marker" style="top: 68%; left: 66%;" title="Chittagong: ৳ 75,000 (1 Project • Nakshi Kantha Artisan)">
              <div class="map-pin-dot"></div>
              <span class="map-pin-label">Chittagong</span>
            </div>
          </div>

          <div class="dash-division-stats-row">
            <div class="dash-div-stat" title="3 Projects • Paddy & Dairy Farm">
              <span>Rajshahi</span>
              <strong>৳ 160,000</strong>
            </div>
            <div class="dash-div-stat" title="2 Projects • Maize & Mustard">
              <span>Rangpur</span>
              <strong>৳ 120,000</strong>
            </div>
            <div class="dash-div-stat" title="2 Projects • Organic Tea & Fish">
              <span>Sylhet</span>
              <strong>৳ 95,000</strong>
            </div>
            <div class="dash-div-stat" title="1 Project • Nakshi Kantha Artisan">
              <span>Chittagong</span>
              <strong>৳ 75,000</strong>
            </div>
          </div>
        </div>

        <!-- My Returns by Sector Donut Chart (Investor-Centric) -->
        <div class="dash-panel-card">
          <div class="dash-panel-header">
            <div>
              <h3>My Profit by Sector</h3>
              <p style="margin: 2px 0 0; font-size: 0.75rem; color: #64748B;">Sector breakdown of your ৳ 68,500 total earnings</p>
            </div>
          </div>

          <div class="donut-chart-wrap">
            <div class="donut-chart-container">
              <!-- SVG Donut Chart with Segments -->
              <svg width="160" height="160" viewBox="0 0 160 160">
                <!-- Background circle -->
                <circle cx="80" cy="80" r="60" fill="transparent" stroke="#E2E8F0" stroke-width="22" />
                <!-- Crops 42% (Arc length 158.3) -->
                <circle cx="80" cy="80" r="60" fill="transparent" stroke="#047857" stroke-width="22"
                        stroke-dasharray="158.3 376.9" stroke-dashoffset="0" />
                <!-- Livestock & Dairy 28% (Arc length 105.6) -->
                <circle cx="80" cy="80" r="60" fill="transparent" stroke="#2563EB" stroke-width="22"
                        stroke-dasharray="105.6 376.9" stroke-dashoffset="-158.3" />
                <!-- Women Artisans 18% (Arc length 67.9) -->
                <circle cx="80" cy="80" r="60" fill="transparent" stroke="#D97706" stroke-width="22"
                        stroke-dasharray="67.9 376.9" stroke-dashoffset="-263.9" />
                <!-- Fisheries 12% (Arc length 45.2) -->
                <circle cx="80" cy="80" r="60" fill="transparent" stroke="#10B981" stroke-width="22"
                        stroke-dasharray="45.2 376.9" stroke-dashoffset="-331.8" />
              </svg>
              <div class="donut-center-info">
                <span>MY PROFIT</span>
                <strong>৳ 68.5K</strong>
              </div>
            </div>

            <div class="donut-legend-grid">
              <div class="donut-legend-item">
                <span class="lbl"><span class="donut-legend-dot" style="background:#047857;"></span> Crops (শস্য)</span>
                <span class="pct">42% (৳28.8K)</span>
              </div>
              <div class="donut-legend-item">
                <span class="lbl"><span class="donut-legend-dot" style="background:#2563EB;"></span> Dairy (দুগ্ধ)</span>
                <span class="pct">28% (৳19.2K)</span>
              </div>
              <div class="donut-legend-item">
                <span class="lbl"><span class="donut-legend-dot" style="background:#D97706;"></span> Artisans (কারুশিল্প)</span>
                <span class="pct">18% (৳12.3K)</span>
              </div>
              <div class="donut-legend-item">
                <span class="lbl"><span class="donut-legend-dot" style="background:#10B981;"></span> Fisheries (মৎস্য)</span>
                <span class="pct">12% (৳8.2K)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- LOWER SECTION: PERSONAL INVESTOR ACTIVITY TABLE & PORTFOLIO SUMMARY -->
      <div class="dash-bottom-grid">
        <!-- My Recent Investment Activity Table -->
        <div class="dash-panel-card">
          <div class="dash-panel-header">
            <h3>My Recent Investment Activity</h3>
            <span style="font-size: 0.775rem; color: #10B981; font-weight: 700;">Verified Investor Ledger</span>
          </div>

          <div class="dash-table-wrap">
            <table class="dash-activity-table">
              <thead>
                <tr>
                  <th>Activity / Transaction</th>
                  <th>Portfolio Destination</th>
                  <th>Status</th>
                  <th>Date & Time</th>
                </tr>
              </thead>
              <tbody>
                ${I.map(s=>`
                  <tr>
                    <td><strong>${s.description}</strong></td>
                    <td>${s.division}</td>
                    <td>
                      <span class="dash-status-pill status-${s.status.toLowerCase().replace(" ","-")}">
                        ${s.status}
                      </span>
                    </td>
                    <td style="color: #64748B;">${s.timestamp}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <!-- My Portfolio Summary & Payout Health -->
        <div class="dash-panel-card">
          <div class="dash-panel-header">
            <h3>My Portfolio Summary & Payouts</h3>
          </div>

          <div class="user-base-list">
            <div class="user-base-item">
              <span class="title">🌾 Active Farming Projects</span>
              <span class="count">${t.recentProjectsCount+t.ongoingProjectsCount} Backed</span>
            </div>
            <div class="user-base-item">
              <span class="title">💰 Total Returns Credited</span>
              <span class="count" style="color: #047857;">৳ ${t.totalProfitBDT.toLocaleString()}</span>
            </div>
            <div class="user-base-item">
              <span class="title">📅 Next Projected Payout</span>
              <span class="count">15 Oct 2026</span>
            </div>
            <div class="user-base-item">
              <span class="title">📜 Shariah Compliance</span>
              <span class="count" style="color: #10B981;">100% Halal Asset-Backed</span>
            </div>
          </div>

          <div class="system-health-box">
            <div class="info">
              <span style="font-size: 1.4rem;">🛡️</span>
              <div>
                <strong style="font-size: 0.85rem; color: #06281E; display: block;">Investor Verification</strong>
                <span style="font-size: 0.725rem; color: #047857; font-weight: 600;">Election Commission NID Validated</span>
              </div>
            </div>
            <span class="val" style="font-size: 0.9rem;">VERIFIED</span>
          </div>
        </div>
      </div>
    `,(a=document.getElementById("stat-card-recent"))==null||a.addEventListener("click",()=>{this.switchTab("projects","recent")}),(i=document.getElementById("stat-card-ongoing"))==null||i.addEventListener("click",()=>{this.switchTab("projects","ongoing")}),(r=document.getElementById("stat-card-completed"))==null||r.addEventListener("click",()=>{this.switchTab("projects","completed")}),(n=document.getElementById("btn-export-pdf"))==null||n.addEventListener("click",()=>{this.showToastNotification("📄 Exporting verified investor portfolio report as PDF (Demo)...")}),(o=document.getElementById("link-view-all-logs"))==null||o.addEventListener("click",s=>{s.preventDefault(),this.showToastNotification("Showing all 24 verified operational logs across Bangladesh divisions.")})}renderInvestorProjectsTab(e){var n,o;let t=this.portfolioProjects;if(this.currentProjectFilter!=="all"&&(t=this.portfolioProjects.filter(s=>s.status===this.currentProjectFilter)),this.dashboardSearchQuery&&this.dashboardSearchQuery.trim()){const s=this.dashboardSearchQuery.trim().toLowerCase();t=t.filter(l=>l.name.toLowerCase().includes(s)||l.bengaliName.toLowerCase().includes(s)||l.district.toLowerCase().includes(s)||l.upazila&&l.upazila.toLowerCase().includes(s)||l.category.toLowerCase().includes(s)||l.farmerName.toLowerCase().includes(s)||l.fieldInspector&&l.fieldInspector.toLowerCase().includes(s))}const a=this.portfolioProjects.filter(s=>s.status==="recent").length,i=this.portfolioProjects.filter(s=>s.status==="ongoing").length,r=this.portfolioProjects.filter(s=>s.status==="completed").length;e.innerHTML=`
      <div class="dash-content-header">
        <div class="dash-title-group">
          <h1>My Invested Projects Portfolio</h1>
          <p>Monitor your active funding collection phases, live on-field deployments across Bangladesh districts, and completed returns.</p>
        </div>

        <button class="dash-btn-back-projects" id="p-tab-btn-browse-new">
          <span>+ Explore New Active Projects to Back</span>
        </button>
      </div>

      <!-- Filter Bar -->
      <div class="portfolio-tab-filters">
        <button class="p-tab-btn ${this.currentProjectFilter==="all"?"active":""}" data-filter="all">
          All Investments (${this.portfolioProjects.length})
        </button>
        <button class="p-tab-btn ${this.currentProjectFilter==="recent"?"active":""}" data-filter="recent">
          ⏳ In Funding Collection Phase (${a})
        </button>
        <button class="p-tab-btn ${this.currentProjectFilter==="ongoing"?"active":""}" data-filter="ongoing">
          🚜 Ongoing Field Projects (${i})
        </button>
        <button class="p-tab-btn ${this.currentProjectFilter==="completed"?"active":""}" data-filter="completed">
          💰 Completed & Settled (${r})
        </button>
      </div>

      <!-- Grid of Projects -->
      <div class="portfolio-projects-grid">
        ${t.length===0?`
          <div style="grid-column: 1 / -1; background: #FFFFFF; border-radius: 12px; padding: 48px 24px; text-align: center; border: 1px dashed #CBD5E1;">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">🔍</div>
            <h3 style="color: #02221A; margin-bottom: 6px;">No projects found matching "${this.dashboardSearchQuery}"</h3>
            <p style="color: #64748B; font-size: 0.875rem;">Try searching for another crop, district name, or clear the search filter.</p>
            <button class="btn btn-primary" id="btn-clear-empty-search" style="margin-top: 12px; background: #02221A;">Clear Search Filter</button>
          </div>
        `:t.map(s=>{if(s.status==="recent"){const l=s.fundingRaisedBDT||68e4,c=s.fundingGoalBDT||85e4,d=s.fundingPercent||Math.min(100,Math.round(l/c*100));return`
              <div class="port-proj-card port-proj-card-funding" data-project-id="${s.id}">
                <div class="port-proj-img" style="background-image: url('${s.image}');">
                  <div class="port-proj-badges-top">
                    <span class="port-proj-tag tag-recent">⏳ IN FUNDING COLLECTION PHASE (তহবিল সংগ্রহ চলছে)</span>
                    <span class="port-proj-subtag">${s.category}</span>
                  </div>
                </div>

                <div class="port-proj-body">
                  <div class="port-proj-header-info">
                    <h4>${s.name}</h4>
                    <p class="port-proj-location">
                      <span>${s.bengaliName}</span> • 📍 District: <strong>${s.district}</strong> • Upazila: <strong>${s.upazila||"Sadar"}</strong>
                    </p>
                  </div>

                  <!-- PROMINENT FUNDING COLLECTION METRICS BOX -->
                  <div class="port-funding-box">
                    <div class="port-funding-row">
                      <div>
                        <span class="port-funding-lbl">Total Funds Collected:</span>
                        <strong class="port-funding-raised">৳ ${l.toLocaleString()}</strong>
                        <span class="port-funding-target">/ ৳ ${c.toLocaleString()}</span>
                      </div>
                      <span class="port-funding-pct-pill">${d}% Funded</span>
                    </div>

                    <div class="port-funding-track">
                      <div class="port-funding-fill" style="width: ${d}%;"></div>
                    </div>

                    <div class="port-funding-subinfo">
                      <span>⏳ <strong>${s.daysLeftToClose||14} Days Left</strong> to Close Campaign</span>
                      <span>🚀 Scheduled Field Start: <strong>${s.startDate||"Slated Next Month"}</strong></span>
                    </div>
                  </div>

                  <!-- MY COMMITTED STAKE -->
                  <div class="port-my-stake-box">
                    <div class="port-stake-col">
                      <span class="lbl">My Committed Capital</span>
                      <strong class="val val-green">৳ ${s.investedAmountBDT.toLocaleString()} BDT</strong>
                    </div>
                    <div class="port-stake-col">
                      <span class="lbl">Expected Profit</span>
                      <strong class="val val-profit">৳ ${s.expectedProfitBDT.toLocaleString()} (+${s.roiPercentage}%)</strong>
                    </div>
                    <div class="port-stake-col">
                      <span class="lbl">Contract Structure</span>
                      <strong class="val">${s.contractType}</strong>
                    </div>
                    <div class="port-stake-col">
                      <span class="lbl">Lead Farmer / Guild</span>
                      <strong class="val">👨‍🌾 ${s.farmerName}</strong>
                    </div>
                  </div>

                  <!-- CARD ACTIONS -->
                  <div class="port-card-actions-row">
                    <button class="btn-port-view-details" data-action="view-funding-details" data-project-id="${s.id}">
                      👁️ View Project & Funding Details (প্রকল্প বিস্তারিত)
                    </button>
                    <button class="btn-port-add-shares" data-action="add-shares" data-project-id="${s.id}">
                      ➕ Back More Shares
                    </button>
                  </div>
                </div>
              </div>
            `}else return s.status==="ongoing"?`
              <div class="port-proj-card port-proj-card-ongoing" data-project-id="${s.id}">
                <div class="port-proj-img" style="background-image: url('${s.image}');">
                  <div class="port-proj-badges-top">
                    <span class="port-proj-tag tag-ongoing">🚜 ONGOING • DEPLOYED ON FIELD (মাঠে কার্যকর)</span>
                    <span class="port-proj-subtag tag-live-pulse">● Live Biometrics Active</span>
                  </div>
                </div>

                <div class="port-proj-body">
                  <div class="port-proj-header-info">
                    <h4>${s.name}</h4>
                    <div class="port-ongoing-district-banner">
                      📍 <strong>District:</strong> ${s.district} • <strong>Upazila:</strong> ${s.upazila||"Sadar"} • <strong>Agro-Zone:</strong> High-Yield Cluster
                    </div>
                  </div>

                  <!-- FIELD STAGE & AGRONOMIST OVERVIEW -->
                  <div class="port-field-stage-box">
                    <div class="stage-tag">🌱 Current Field Deployment:</div>
                    <div class="stage-desc">${s.fieldStage||"Stage 3 of 4: Vegetative Tiller Maturation & Moisture Monitoring"}</div>
                    <div class="field-officer-line">
                      <span>👨‍🌾 Lead Farmer: <strong>${s.farmerName}</strong></span>
                      <span>🔬 Agronomist: <strong>${s.fieldInspector||"Dr. M. Faruk (DAE Gazipur)"}</strong></span>
                    </div>
                  </div>

                  <!-- DISTRICT SENSOR & ENVIRONMENTAL TELEMETRY -->
                  <div class="port-env-strip">
                    <div class="env-item">
                      <span class="env-icon">🌾</span>
                      <div class="env-text">
                        <span class="env-lbl">Soil Condition</span>
                        <span class="env-val">${s.soilCondition||"Alluvial silt loam, pH 6.4"}</span>
                      </div>
                    </div>
                    <div class="env-item">
                      <span class="env-icon">🌤️</span>
                      <div class="env-text">
                        <span class="env-lbl">District Weather</span>
                        <span class="env-val">${s.weatherStatus||"28°C Favorable Monsoon"}</span>
                      </div>
                    </div>
                    <div class="env-item">
                      <span class="env-icon">📋</span>
                      <div class="env-text">
                        <span class="env-lbl">Last Field Audit</span>
                        <span class="env-val">${s.lastAuditDate||"15 Sep 2026 (Audit Score: 98/100)"}</span>
                      </div>
                    </div>
                  </div>

                  <!-- 4-STAGE FIELD PROGRESS TRACKER -->
                  <div class="port-milestones-track-wrap">
                    <div class="milestones-header">
                      <span>Field Progress Timeline (মাঠ পর্যায় অগ্রগতি):</span>
                      <strong style="color: #047857;">${s.progressPercent}% Completed</strong>
                    </div>
                    <div class="milestones-stepper">
                      ${(s.progressMilestones||[{label:"Land Prep & Sowing",date:s.startDate||"10 Aug",completed:!0},{label:"Bio-Fertilization",date:"25 Aug",completed:!0},{label:"Vegetative Growth",date:"Current",completed:!0,active:!0},{label:"Harvest & Settlement",date:s.expectedEndDate||"15 Dec",completed:!1}]).map((l,c)=>`
                        <div class="milestone-node ${l.completed?"completed":""} ${l.active?"active":""}">
                          <div class="milestone-dot">${l.completed?"✓":c+1}</div>
                          <div class="milestone-label">${l.label}</div>
                          <div class="milestone-date">${l.date}</div>
                        </div>
                      `).join("")}
                    </div>
                  </div>

                  <!-- FINANCIAL SUMMARY & TRACK ACTION -->
                  <div class="port-ongoing-footer">
                    <div class="port-ongoing-financials">
                      <span>Invested: <strong>৳ ${s.investedAmountBDT.toLocaleString()}</strong></span>
                      <span>Est. Payout: <strong style="color: #059669;">৳ ${(s.investedAmountBDT+s.expectedProfitBDT).toLocaleString()} (+${s.roiPercentage}%)</strong></span>
                    </div>

                    <div class="port-ongoing-actions-row">
                      <button class="btn-track-live-field" data-action="track-live-field" data-project-id="${s.id}">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                        </svg>
                        <span>Track Live Field Progress (লাইভ ফিল্ড ট্র্যাকিং)</span>
                      </button>

                      <button class="btn-ask-project-question" data-action="ask-question" data-project-id="${s.id}" title="Ask a question about this ongoing project">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Ask Question (প্রশ্ন)</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `:`
              <div class="port-proj-card port-proj-card-completed" data-project-id="${s.id}">
                <div class="port-proj-img" style="background-image: url('${s.image}');">
                  <div class="port-proj-badges-top">
                    <span class="port-proj-tag tag-completed">💰 COMPLETED & PAID (সম্পূর্ণ ও পরিশোধিত)</span>
                    <span class="port-proj-subtag">Payout Settled</span>
                  </div>
                </div>

                <div class="port-proj-body">
                  <div class="port-proj-header-info">
                    <h4>${s.name}</h4>
                    <p class="port-proj-location">
                      <span>${s.bengaliName}</span> • 📍 District: <strong>${s.district}</strong> • Farmer: <strong>${s.farmerName}</strong>
                    </p>
                  </div>

                  <!-- 1. Principal & Return Metrics Grid -->
                  <div class="port-completed-box">
                    <div class="completed-metric-row">
                      <div>
                        <span>Principal Invested</span>
                        <strong>৳ ${s.investedAmountBDT.toLocaleString()} BDT</strong>
                      </div>
                      <div>
                        <span>Net Profit Credited</span>
                        <strong style="color: #047857;">+ ৳ ${(s.actualReturnBDT||s.expectedProfitBDT).toLocaleString()} BDT</strong>
                      </div>
                      <div>
                        <span>Total Received</span>
                        <strong style="color: #064E3B; font-size: 1.15rem;">৳ ${(s.investedAmountBDT+(s.actualReturnBDT||s.expectedProfitBDT)).toLocaleString()} BDT</strong>
                      </div>
                      <div>
                        <span>Return ROI</span>
                        <strong style="color: #10B981;">+${s.roiPercentage}%</strong>
                      </div>
                    </div>
                    <div class="completed-note">
                      ✓ Fully harvested, settled through Shariah audit, and funds credited to your registered bank account / verified MFS wallet.
                    </div>
                  </div>

                  <!-- 2. Yield & Harvest Mandi Settlement Summary -->
                  <div class="port-completed-yield-box">
                    <div class="yield-title-row">
                      <span class="yield-icon">🌾</span>
                      <div>
                        <strong>Verified Harvest Yield & Market Mandi Sale</strong>
                        <span>Government Licensed Agricultural Mandi Wholesale Settlement</span>
                      </div>
                    </div>
                    <div class="yield-metrics-grid">
                      <div class="yield-item">
                        <span class="lbl">Total Harvest Output:</span>
                        <strong class="val">${(s.harvestWeightKg||4200).toLocaleString()} KG Prime Grade</strong>
                      </div>
                      <div class="yield-item">
                        <span class="lbl">Wholesale Mandi Rate:</span>
                        <strong class="val">৳ ${s.mandiRatePerKg||138} / KG</strong>
                      </div>
                      <div class="yield-item">
                        <span class="lbl">Production Duration:</span>
                        <strong class="val">120 Days (Full Cycle)</strong>
                      </div>
                      <div class="yield-item">
                        <span class="lbl">Bio Organic Status:</span>
                        <strong class="val" style="color: #059669;">100% Certified</strong>
                      </div>
                    </div>
                  </div>

                  <!-- 3. MONEY SEND & RECEIVE AUDIT TIMELINE (DETAILED MONEY FLOW) -->
                  <div class="port-completed-money-timeline">
                    <div class="money-timeline-header">
                      <div class="timeline-title">
                        <span class="timeline-badge-icon">💸</span>
                        <strong>Complete Capital Outflow & Return Inflow Ledger (টাকা প্রদান ও প্রাপ্তির বিস্তারিত বিবরণী)</strong>
                      </div>
                      <span class="timeline-verified-pill">✓ 100% Shariah Reconciled</span>
                    </div>

                    <div class="money-timeline-cards">
                      <!-- Stage 1: Money Sent -->
                      <div class="money-flow-step flow-outflow">
                        <div class="flow-step-icon">📤</div>
                        <div class="flow-step-info">
                          <span class="flow-step-lbl">1. CAPITAL SENT DATE (টাকা পাঠানোর তারিখ)</span>
                          <strong class="flow-step-date">${s.moneySentDate||"10 Jan 2026, 10:45 AM"}</strong>
                          <div class="flow-step-meta">
                            <span>Channel: <strong>${s.moneySentChannel||"bKash Merchant Payment"}</strong></span>
                            <span>TrxID: <code class="trx-code">${s.moneySentTrxId||"BK918234-GMB"}</code></span>
                            <span class="flow-amt amt-sent">Sent: - ৳ ${s.investedAmountBDT.toLocaleString()} BDT</span>
                          </div>
                        </div>
                      </div>

                      <!-- Stage 2: Farm Deployment -->
                      <div class="money-flow-step flow-deploy">
                        <div class="flow-step-icon">🚜</div>
                        <div class="flow-step-info">
                          <span class="flow-step-lbl">2. FIELD CAPITAL DEPLOYMENT (মাঠে বীজ ও সার বিতরণ)</span>
                          <strong class="flow-step-date">${s.fieldDisbursementDate||"16 Jan 2026"}</strong>
                          <div class="flow-step-meta">
                            <span>Disbursed to: <strong>${s.farmerName}</strong> (Lead Farmer)</span>
                            <span>Voucher: <code>VOU-DAE-${s.id.toUpperCase()}</code></span>
                          </div>
                        </div>
                      </div>

                      <!-- Stage 3: Mandi Sale -->
                      <div class="money-flow-step flow-mandi">
                        <div class="flow-step-icon">🌾</div>
                        <div class="flow-step-info">
                          <span class="flow-step-lbl">3. HARVEST MANDI SETTLEMENT (পাইকারি আড়তে বিক্রয়)</span>
                          <strong class="flow-step-date">${s.mandiSettlementDate||"18 Aug 2026"}</strong>
                          <div class="flow-step-meta">
                            <span>Output: <strong>${(s.harvestWeightKg||4200).toLocaleString()} KG</strong> @ ৳ ${s.mandiRatePerKg||138}/KG</span>
                            <span>Buyer: <strong>Registered Agro Wholesale Offtaker</strong></span>
                          </div>
                        </div>
                      </div>

                      <!-- Stage 4: Money Received -->
                      <div class="money-flow-step flow-inflow">
                        <div class="flow-step-icon">📥</div>
                        <div class="flow-step-info">
                          <span class="flow-step-lbl">4. MONEY RECEIVED DATE (মূলধন + লভ্যাংশ প্রাপ্তির তারিখ)</span>
                          <strong class="flow-step-date" style="color: #047857;">${s.moneyReceivedDate||s.payoutReceivedDate||"22 Aug 2026, 03:30 PM"}</strong>
                          <div class="flow-step-meta">
                            <span>Channel: <strong>${s.moneyReceivedChannel||"BEFTN to Bank"}</strong></span>
                            <span>A/C: <strong>${s.moneyReceivedAccount||"IBBL Savings A/C ...4821"}</strong></span>
                            <span>TrxID: <code class="trx-code">${s.moneyReceivedTrxId||"EFTN-BB-20260822-9182"}</code></span>
                            <span class="flow-amt amt-rcvd">Received: + ৳ ${(s.investedAmountBDT+(s.actualReturnBDT||s.expectedProfitBDT)).toLocaleString()} BDT</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 4. Action Buttons -->
                  <div class="port-card-actions-row">
                    <button class="btn-port-reinvest" data-action="reinvest-capital" data-project-id="${s.id}" title="Re-invest capital in ongoing active projects">
                      🔄 Re-Invest Capital (পুনরায় বিনিয়োগ)
                    </button>
                    <button class="btn-port-view-receipt" data-action="view-receipt" data-project-id="${s.id}">
                      📄 View Dividend Payout Receipt (রশিদ)
                    </button>
                  </div>
                </div>
              </div>
            `}).join("")}
      </div>
    `,e.querySelectorAll(".p-tab-btn").forEach(s=>{s.addEventListener("click",l=>{const c=l.currentTarget.getAttribute("data-filter");c&&(this.currentProjectFilter=c,this.renderInvestorProjectsTab(e))})}),e.querySelectorAll('[data-action="view-funding-details"]').forEach(s=>{s.addEventListener("click",l=>{const c=l.currentTarget.getAttribute("data-project-id");c&&this.projectsController.openProjectDetailsModal(c,!1)})}),e.querySelectorAll('[data-action="add-shares"]').forEach(s=>{s.addEventListener("click",l=>{const c=l.currentTarget.getAttribute("data-project-id");c&&this.projectsController.openProjectDetailsModal(c,!0)})}),e.querySelectorAll('[data-action="track-live-field"]').forEach(s=>{s.addEventListener("click",l=>{const c=l.currentTarget.getAttribute("data-project-id");if(c){const d=this.portfolioProjects.find(p=>p.id===c);d&&this.openFieldTrackingModal(d)}})}),e.querySelectorAll('[data-action="ask-question"]').forEach(s=>{s.addEventListener("click",l=>{const c=l.currentTarget.getAttribute("data-project-id");if(c){const d=this.portfolioProjects.find(p=>p.id===c);d&&this.openProjectQuestionModal(d)}})}),e.querySelectorAll('[data-action="view-receipt"]').forEach(s=>{s.addEventListener("click",l=>{const c=l.currentTarget.getAttribute("data-project-id");if(c){const d=this.portfolioProjects.find(p=>p.id===c);d&&this.openDividendReceiptModal(d)}})}),e.querySelectorAll('[data-action="reinvest-capital"]').forEach(s=>{s.addEventListener("click",l=>{const c=l.currentTarget.getAttribute("data-project-id"),d=this.portfolioProjects.find(u=>u.id===c),p=d?d.investedAmountBDT+(d.actualReturnBDT||d.expectedProfitBDT):5e4;this.closeDashboard();const g=document.getElementById("projects");g==null||g.scrollIntoView({behavior:"smooth"}),this.showToastNotification(`Choose a project to reinvest your dividend return of ৳ ${p.toLocaleString()} BDT!`)})}),(n=document.getElementById("btn-clear-empty-search"))==null||n.addEventListener("click",()=>{this.dashboardSearchQuery="";const s=document.getElementById("dash-topbar-search");s&&(s.value="");const l=document.getElementById("dash-topbar-search-clear");l&&(l.style.display="none"),this.renderInvestorProjectsTab(e)}),(o=document.getElementById("p-tab-btn-browse-new"))==null||o.addEventListener("click",()=>{this.closeDashboard();const s=document.getElementById("projects");s==null||s.scrollIntoView({behavior:"smooth"})})}getMarketCart(){try{const e=localStorage.getItem("gb_market_cart");if(e)return JSON.parse(e)}catch(e){console.warn(e)}return[]}saveMarketCart(e){try{localStorage.setItem("gb_market_cart",JSON.stringify(e)),this.updateMarketCartBadge()}catch(t){console.warn(t)}}updateMarketCartBadge(){const t=this.getMarketCart().reduce((n,o)=>n+o.quantity,0);document.querySelectorAll(".dash-market-bag-count-val").forEach(n=>{n.textContent=t.toString()});const i=document.getElementById("top-cart-badge");i&&(i.textContent=t.toString());const r=document.getElementById("market-cart-count");r&&(r.textContent=t.toString())}addToMarketCart(e){const t=A.find(r=>r.id===e);if(!t)return;const a=this.getMarketCart(),i=a.find(r=>r.product.id===e);i?i.quantity+=1:a.push({product:t,quantity:1}),this.saveMarketCart(a),this.updateMarketCartBadge(),this.showToastNotification(`🛍️ Added "${t.name}" to shopping bag!`)}renderMarketplaceTab(e){var c,d,p,g;const t=A,i=this.getMarketCart().reduce((u,h)=>u+h.quantity,0),r=[{id:"all",label:"All Products (সকল পণ্য)"},{id:"handicrafts",label:"🧵 Handicrafts (হস্তশিল্প)"},{id:"farming",label:"🌾 Farming & Crops (কৃষি ও শস্য)"},{id:"dairy",label:"🥛 Dairy & Ghee (দুগ্ধ ও ঘি)"},{id:"fisheries",label:"🐟 Fisheries (মৎস্য)"},{id:"spices",label:"🌶️ Spices (মসলা)"},{id:"fruits",label:"🥭 Fruits & Honey (ফল ও মধু)"}];let n=t;this.currentMarketCategory!=="all"&&(n=t.filter(u=>u.category===this.currentMarketCategory));const o=u=>u.id.toLowerCase().includes("rice")||u.name.toLowerCase().includes("rice")||u.bengaliName.includes("চাল")||u.bengaliName.includes("ধান")||u.craftType&&u.craftType.toLowerCase().includes("paddy"),s=(this.marketSearchQuery||"").trim().toLowerCase(),l=s==="r"||s==="র"||s.startsWith("ri")||s==="rice"||s==="chal"||s==="চাল";if(s)if(l){const u=n.filter(o),h=n.filter(v=>!o(v)&&(v.name.toLowerCase().includes(s)||v.bengaliName.toLowerCase().includes(s)||v.artisanDistrict.toLowerCase().includes(s)));n=[...u,...h]}else n=n.filter(u=>u.name.toLowerCase().includes(s)||u.bengaliName.toLowerCase().includes(s)||u.artisanDistrict.toLowerCase().includes(s));e.innerHTML=`
      <div class="dash-market-view">
        <!-- Hero Header -->
        <div class="dash-market-hero-card">
          <div class="dash-market-hero-info">
            <h2>Village Marketplace • গ্রামীণ হস্তশিল্প ও কৃষি বাজার</h2>
            <p>Direct ethical fair-trade goods produced by our vetted rural farmers & women artisan cooperatives across Bangladesh.</p>
          </div>
          <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
            <div class="dash-market-flash-badge">
              <span>⚡ Flash Offers Live</span>
              <span>• 100% Authentic Rural Heritage</span>
            </div>
            <button class="dash-market-hero-bag-btn" id="dash-market-hero-bag-btn" title="View Shopping Bag">
              <span>🛍️ Bag / Cart</span>
              <strong class="dash-market-bag-count-val" style="background: #10B981; color: #FFF; padding: 2px 8px; border-radius: 10px;">${i}</strong>
            </button>
          </div>
        </div>

        <!-- CENTERED BIG SEARCH BAR WITH AUTOCOMPLETE RECOMMENDATIONS -->
        <div class="dash-market-search-centered-wrap">
          <div class="dash-market-big-search-box">
            <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2.2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="dash-market-search-input" placeholder="Search crafts, rice (try 'r')..." value="${this.marketSearchQuery}" autocomplete="off" />
            <button type="button" id="dash-market-search-clear" class="market-search-clear" style="${this.marketSearchQuery?"display:block;":"display:none;"}" title="Clear search">✕</button>
          </div>
          <!-- Dropdown Recommendations -->
          <div class="dash-market-recommendations-dropdown" id="dash-market-recommendations" style="display: none;"></div>
        </div>

        <!-- CENTERED CATEGORY CHIPS -->
        <div class="dash-market-chips-centered">
          ${r.map(u=>`
            <button class="dash-market-chip ${this.currentMarketCategory===u.id?"active":""}" data-market-cat="${u.id}">
              ${u.label}
            </button>
          `).join("")}
        </div>

        ${l?`
          <div style="background: #E8F5EF; border: 1.5px solid #10B981; border-radius: 10px; padding: 10px 18px; margin-bottom: 20px; font-size: 0.85rem; color: #064E3B; display: flex; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 1.4rem;">🌾</span>
              <div>
                <strong style="display: block;">Rice & Grain Recommendations Active (চাল ও শস্যের বিশেষ তালিকা):</strong>
                <span style="color: #065F46; font-size: 0.775rem;">Recommending authentic Bangladeshi varieties: Dinajpur Miniket, Nazirshail, Chinigura Polao, Kalijira, and Organic Red Brown Rice.</span>
              </div>
            </div>
            <button type="button" id="btn-clear-rice-filter" style="background: #02221A; color: #FFF; border: none; padding: 6px 14px; border-radius: 20px; font-size: 0.725rem; font-weight: 700; cursor: pointer;">Show All Products</button>
          </div>
        `:""}

        <!-- Products Grid -->
        <div class="dash-market-grid">
          ${n.length===0?`
            <div style="grid-column: 1 / -1; padding: 48px 20px; text-align: center; color: #64748B; background: #FFF; border: 1px dashed #CBD5E1; border-radius: 12px;">
              <div style="font-size: 2.4rem; margin-bottom: 8px;">🌾</div>
              <strong style="font-size: 1rem; color: #02221A; display: block; margin-bottom: 4px;">No products found matching "${this.marketSearchQuery}"</strong>
              <p style="margin: 0 0 14px; font-size: 0.825rem;">Try searching for <em>rice</em>, <em>honey</em>, <em>ghee</em>, or <em>handicrafts</em>.</p>
              <button type="button" id="btn-empty-reset-market" style="background: #02221A; color: #FFF; border: none; padding: 8px 18px; border-radius: 8px; font-size: 0.8rem; font-weight: 700; cursor: pointer;">Browse All Products</button>
            </div>
          `:n.map(u=>`
            <div class="dash-market-card" data-product-id="${u.id}">
              <div class="dash-market-card-img-wrap">
                <img src="${u.image}" alt="${u.name}" class="dash-market-card-img" loading="lazy" />
                ${u.discountPercent?`<span class="dash-market-discount-badge">-${u.discountPercent}%</span>`:""}
                <span class="dash-market-artisan-tag">👤 ${u.artisanName} (${u.artisanDistrict})</span>
              </div>
              <div class="dash-market-card-body">
                <div>
                  <h4 class="dash-market-title">${u.name}</h4>
                  <p class="dash-market-bengali">${u.bengaliName}</p>
                </div>
                <div>
                  <div class="dash-market-price-row">
                    <span class="dash-market-price">৳ ${u.priceBDT.toLocaleString()}</span>
                    <span style="font-size: 0.75rem; color: #64748B;">★ ${u.rating} (${u.reviewsCount})</span>
                  </div>
                  <div class="dash-market-actions">
                    <button class="dash-market-btn-add" data-action="dash-add-cart" data-product-id="${u.id}">
                      + Add to Bag
                    </button>
                    <button class="dash-market-btn-view" data-action="dash-view-detail" data-product-id="${u.id}">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `,e.querySelectorAll(".dash-market-chip").forEach(u=>{u.addEventListener("click",()=>{const h=u.dataset.marketCat||"all";this.currentMarketCategory=h,this.renderMarketplaceTab(e)})}),this.setupMarketSearchAutocomplete(e),(c=e.querySelector("#dash-market-bag-btn"))==null||c.addEventListener("click",()=>{this.openMarketCartDrawer()}),(d=e.querySelector("#dash-market-hero-bag-btn"))==null||d.addEventListener("click",()=>{this.openMarketCartDrawer()}),(p=e.querySelector("#btn-clear-rice-filter"))==null||p.addEventListener("click",()=>{this.marketSearchQuery="",this.renderMarketplaceTab(e)}),(g=e.querySelector("#btn-empty-reset-market"))==null||g.addEventListener("click",()=>{this.marketSearchQuery="",this.currentMarketCategory="all",this.renderMarketplaceTab(e)}),e.querySelectorAll('[data-action="dash-add-cart"]').forEach(u=>{u.addEventListener("click",h=>{h.stopPropagation();const v=u.dataset.productId;v&&this.addToMarketCart(v)})}),e.querySelectorAll('[data-action="dash-view-detail"]').forEach(u=>{u.addEventListener("click",h=>{h.stopPropagation();const v=u.dataset.productId;v&&this.marketplaceController&&this.marketplaceController.openProductDetail(v)})})}setupMarketSearchAutocomplete(e){const t=e.querySelector("#dash-market-search-input"),a=e.querySelector("#dash-market-search-clear"),i=e.querySelector("#dash-market-recommendations"),r=e.querySelector(".dash-market-search-centered-wrap");if(!t||!i)return;const n=s=>{const l=s.trim().toLowerCase();if(!l){i.innerHTML=`
          <div class="mkt-recom-header">⚡ POPULAR RECOMMENDATIONS • জনপ্রিয় পণ্য ও চাল</div>
          <div class="mkt-recom-tags-row">
            <button type="button" class="mkt-recom-tag" data-q="rice">🌾 Rice & Grains (দিনাজপুর চাল)</button>
            <button type="button" class="mkt-recom-tag" data-q="miniket">🌾 Miniket Rice (মিনিকেট চাল)</button>
            <button type="button" class="mkt-recom-tag" data-q="kalijira">🌾 Kalijira Polao Rice (কালিজিরা)</button>
            <button type="button" class="mkt-recom-tag" data-q="handicrafts">🧵 Handicrafts (হস্তশিল্প)</button>
            <button type="button" class="mkt-recom-tag" data-q="honey">🍯 Sundarbans Honey (মধু)</button>
            <button type="button" class="mkt-recom-tag" data-q="ghee">🥛 Organic Ghee (ঘি)</button>
            <button type="button" class="mkt-recom-tag" data-q="mustard oil">🌶️ Pure Mustard Oil (সরিষার তেল)</button>
          </div>
        `,i.style.display="block",o();return}const c=l==="r"||l==="র"||l.startsWith("ri")||l==="rice"||l==="chal"||l==="চাল";let d=A.filter(g=>g.name.toLowerCase().includes(l)||g.bengaliName.toLowerCase().includes(l)||g.artisanDistrict.toLowerCase().includes(l)||g.category.toLowerCase().includes(l)||g.craftType&&g.craftType.toLowerCase().includes(l));if(c){const g=A.filter(h=>h.id.toLowerCase().includes("rice")||h.name.toLowerCase().includes("rice")||h.bengaliName.includes("চাল")||h.bengaliName.includes("ধান")||h.craftType&&h.craftType.toLowerCase().includes("paddy")),u=d.filter(h=>!g.some(v=>v.id===h.id));d=[...g,...u]}let p="";c&&(p+=`
          <div class="mkt-recom-header highlight">
            <span>🌾 RICE & GRAIN RECOMMENDATIONS (চাল ও শস্য)</span>
            <span class="mkt-recom-badge">Top Match for '${s}'</span>
          </div>
          <div class="mkt-recom-tags-row">
            <button type="button" class="mkt-recom-tag" data-q="miniket">🌾 Miniket Rice (মিনিকেট)</button>
            <button type="button" class="mkt-recom-tag" data-q="chinigura">🌾 Chinigura Polao (চিনিগুঁড়া)</button>
            <button type="button" class="mkt-recom-tag" data-q="kalijira">🌾 Kalijira Heritage (কালিজিরা)</button>
            <button type="button" class="mkt-recom-tag" data-q="red rice">🌾 Red Brown Rice (লাল চাল)</button>
            <button type="button" class="mkt-recom-tag" data-q="nazirshail">🌾 Nazirshail Select</button>
          </div>
        `),d.length>0?(p+=`<div class="mkt-recom-header">SUGGESTED PRODUCTS (${d.length})</div>`,d.slice(0,6).forEach(g=>{p+=`
            <div class="mkt-recom-item" data-product-id="${g.id}" data-product-name="${g.name}">
              <img src="${g.image}" alt="${g.name}" class="mkt-recom-thumb" />
              <div class="mkt-recom-info">
                <div class="mkt-recom-title-row">
                  <strong>${g.name}</strong>
                  <span class="mkt-recom-price">৳ ${g.priceBDT.toLocaleString()}</span>
                </div>
                <span class="mkt-recom-sub">${g.bengaliName} • 📍 ${g.artisanDistrict} • ${g.category}</span>
              </div>
              <button type="button" class="mkt-recom-add-btn" data-action="quick-add" data-product-id="${g.id}" title="Add directly to Bag">
                + Bag
              </button>
            </div>
          `})):p+=`
          <div class="mkt-recom-empty">
            <span>🔍 No matching products found for "<strong>${s}</strong>"</span>
            <p>Try searching for 'rice', 'honey', 'ghee', 'pottery', or 'nakshi'.</p>
          </div>
        `,i.innerHTML=p,i.style.display="block",o()},o=()=>{i.querySelectorAll(".mkt-recom-tag").forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation();const c=s.getAttribute("data-q")||"";t.value=c,this.marketSearchQuery=c,i.style.display="none",this.renderMarketplaceTab(e)})}),i.querySelectorAll(".mkt-recom-item").forEach(s=>{s.addEventListener("click",l=>{if(l.target.closest('[data-action="quick-add"]'))return;const c=s.getAttribute("data-product-name")||"";t.value=c,this.marketSearchQuery=c,i.style.display="none",this.renderMarketplaceTab(e)})}),i.querySelectorAll('[data-action="quick-add"]').forEach(s=>{s.addEventListener("click",l=>{l.stopPropagation();const c=s.getAttribute("data-product-id");c&&this.addToMarketCart(c)})})};t.addEventListener("input",()=>{const s=t.value;a&&(a.style.display=s.length>0?"block":"none"),n(s)}),t.addEventListener("focus",()=>{n(t.value)}),t.addEventListener("keydown",s=>{s.key==="Enter"?(i.style.display="none",this.marketSearchQuery=t.value,this.renderMarketplaceTab(e)):s.key==="Escape"&&(i.style.display="none")}),a==null||a.addEventListener("click",()=>{t.value="",a.style.display="none",i.style.display="none",this.marketSearchQuery="",this.renderMarketplaceTab(e)}),document.addEventListener("click",s=>{r&&!r.contains(s.target)&&(i.style.display="none")})}openMarketCartDrawer(){let e=document.getElementById("dash-market-bag-drawer");e||(e=document.createElement("div"),e.id="dash-market-bag-drawer",e.className="dash-bag-drawer-overlay",document.body.appendChild(e));const t=()=>{var l,c,d;const a=this.getMarketCart(),i=a.reduce((p,g)=>p+g.quantity,0),r=a.reduce((p,g)=>p+g.product.priceBDT*g.quantity,0),n=i>0?r>2e3?0:60:0,o=r+n;e.innerHTML=`
        <div class="dash-bag-dialog">
          <div class="dash-bag-header">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 1.4rem;">🛍️</span>
              <div>
                <h3 style="margin: 0; font-size: 1.15rem; color: #02221A;">Rural Marketplace Bag (শপিং ব্যাগ)</h3>
                <span style="font-size: 0.775rem; color: #64748B;">${i} fair-trade item(s) from local producers</span>
              </div>
            </div>
            <button class="dash-bag-close-btn" id="btn-close-bag-drawer" title="Close Bag">✕</button>
          </div>

          <div class="dash-bag-body">
            ${a.length===0?`
              <div class="dash-bag-empty">
                <div style="font-size: 3rem; margin-bottom: 12px;">🧺</div>
                <h4>Your Bag is Empty</h4>
                <p>Explore authentic Bangladeshi rice, handicrafts, honey, and organic ghee from rural cooperatives.</p>
                <button class="dash-bag-btn-explore" id="btn-bag-explore-shop">Browse Products</button>
              </div>
            `:`
              <div class="dash-bag-items-list">
                ${a.map(p=>`
                  <div class="dash-bag-item" data-product-id="${p.product.id}">
                    <img src="${p.product.image}" alt="${p.product.name}" class="dash-bag-item-img" />
                    <div class="dash-bag-item-info">
                      <div class="dash-bag-item-title">${p.product.name}</div>
                      <div class="dash-bag-item-bengali">${p.product.bengaliName}</div>
                      <div class="dash-bag-item-artisan">📍 ${p.product.artisanDistrict} • ${p.product.artisanName}</div>
                      <div class="dash-bag-item-price-row">
                        <strong class="dash-bag-price">৳ ${(p.product.priceBDT*p.quantity).toLocaleString()}</strong>
                        <span class="dash-bag-unit-rate">(@ ৳ ${p.product.priceBDT.toLocaleString()})</span>
                      </div>
                    </div>
                    <div class="dash-bag-qty-controls">
                      <button type="button" class="dash-bag-qty-btn" data-action="dec" data-product-id="${p.product.id}">−</button>
                      <span class="dash-bag-qty-val">${p.quantity}</span>
                      <button type="button" class="dash-bag-qty-btn" data-action="inc" data-product-id="${p.product.id}">+</button>
                      <button type="button" class="dash-bag-remove-btn" data-action="remove" data-product-id="${p.product.id}" title="Remove item">🗑️</button>
                    </div>
                  </div>
                `).join("")}
              </div>

              <!-- Order Summary -->
              <div class="dash-bag-summary">
                <div class="dash-bag-sum-row">
                  <span>Subtotal</span>
                  <strong>৳ ${r.toLocaleString()} BDT</strong>
                </div>
                <div class="dash-bag-sum-row">
                  <span>Delivery to Address</span>
                  <strong>${n===0?'<span style="color:#047857;">FREE (Investor Tier)</span>':`৳ ${n} BDT`}</strong>
                </div>
                <div class="dash-bag-sum-row total">
                  <span>Total Payable</span>
                  <strong class="dash-bag-total-val">৳ ${o.toLocaleString()} BDT</strong>
                </div>
                <div class="dash-bag-guarantee">
                  ✓ 100% Direct Fair-Trade Proceeds directly credited to Rural Women Artisans & Cooperative Farmers
                </div>
              </div>
            `}
          </div>

          ${a.length>0?`
            <div class="dash-bag-footer">
              <button class="dash-bag-btn-checkout" id="btn-bag-checkout">
                Proceed to Checkout • ৳ ${o.toLocaleString()} BDT
              </button>
            </div>
          `:""}
        </div>
      `,e.classList.add("active"),document.body.style.overflow="hidden";const s=()=>{e.classList.remove("active"),document.body.style.overflow=""};(l=e.querySelector("#btn-close-bag-drawer"))==null||l.addEventListener("click",s),(c=e.querySelector("#btn-bag-explore-shop"))==null||c.addEventListener("click",s),e.querySelectorAll('[data-action="inc"]').forEach(p=>{p.addEventListener("click",()=>{const g=p.getAttribute("data-product-id"),u=a.find(h=>h.product.id===g);u&&(u.quantity+=1,this.saveMarketCart(a),t())})}),e.querySelectorAll('[data-action="dec"]').forEach(p=>{p.addEventListener("click",()=>{const g=p.getAttribute("data-product-id"),u=a.find(h=>h.product.id===g);if(u){if(u.quantity>1)u.quantity-=1;else{const h=a.findIndex(v=>v.product.id===g);h!==-1&&a.splice(h,1)}this.saveMarketCart(a),t()}})}),e.querySelectorAll('[data-action="remove"]').forEach(p=>{p.addEventListener("click",()=>{const g=p.getAttribute("data-product-id"),u=a.findIndex(h=>h.product.id===g);u!==-1&&(a.splice(u,1),this.saveMarketCart(a),t())})}),(d=e.querySelector("#btn-bag-checkout"))==null||d.addEventListener("click",()=>{s(),this.openMarketplacePaymentModal(a,o,r,n)}),e.addEventListener("click",p=>{p.target===e&&s()})};t()}openMarketplacePaymentModal(e,t,a,i){let r=document.getElementById("grambandhan-market-payment-modal");r||(r=document.createElement("div"),r.id="grambandhan-market-payment-modal",r.className="invest-payment-modal-overlay",document.body.appendChild(r));const n=this.investorProfileSettings;let o="bkash",s=n.fullName||"Ariful Islam",l=n.phone||"01712-345678",c=n.location||"House 42, Road 11, Banani, Dhaka-1213";const d=()=>{var g,u,h,v,C,w,k,B;r&&(r.innerHTML=`
        <div class="invest-payment-dialog" style="max-width: 680px;">
          <!-- Top Header -->
          <div class="ip-header">
            <div class="ip-title-wrap">
              <span class="ip-tag">🛍️ RURAL MARKETPLACE CHECKOUT</span>
              <h3>Choose Payment Method (পেমেন্ট পদ্ধতি ও অর্ডার সম্পন্ন করুন)</h3>
              <p>Total Payable: <strong>৳ ${t.toLocaleString()} BDT</strong> (${e.reduce((b,D)=>b+D.quantity,0)} fair-trade items)</p>
            </div>
            <button class="ip-close-btn" id="btn-close-market-pay-modal">✕</button>
          </div>

          <div class="ip-body">
            <!-- Delivery Address Card -->
            <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 14px 16px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
                <div style="font-size:0.8rem; font-weight:800; color:#02221A; text-transform:uppercase; letter-spacing:0.04em;">
                  📍 Delivery Address (ডেলিভারি ঠিকানা)
                </div>
                <span style="font-size:0.7rem; background:#DCFCE7; color:#166534; padding:2px 8px; border-radius:10px; font-weight:700;">
                  Verified Investor Profile
                </span>
              </div>
              <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.85rem;">
                <div>
                  <label class="ip-field-lbl">Recipient Name</label>
                  <input type="text" id="mkt-pay-name" value="${s}" class="ip-input" />
                </div>
                <div>
                  <label class="ip-field-lbl">Contact Phone Number</label>
                  <input type="tel" id="mkt-pay-phone" value="${l}" class="ip-input" />
                </div>
              </div>
              <div style="margin-top: 8px;">
                <label class="ip-field-lbl">Full Delivery Address</label>
                <input type="text" id="mkt-pay-addr" value="${c}" class="ip-input" />
              </div>
            </div>

            <!-- Payment Methods Selector -->
            <div class="ip-methods-section">
              <div class="ip-section-title">Select Payment Channel (পেমেন্ট চ্যানেল বেছে নিন)</div>
              <div class="ip-method-cards-grid" style="grid-template-columns: repeat(4, 1fr);">
                <!-- 1. bKash -->
                <button type="button" class="ip-method-tab ${o==="bkash"?"active active-bkash":""}" data-market-pay="bkash">
                  <div class="ip-method-icon ip-icon-bkash">
                    <span>bKash</span>
                  </div>
                  <div class="ip-method-name">bKash</div>
                  <div class="ip-method-sub">Instant Payment</div>
                </button>

                <!-- 2. Bank Transfer -->
                <button type="button" class="ip-method-tab ${o==="bank"?"active active-bank":""}" data-market-pay="bank">
                  <div class="ip-method-icon ip-icon-bank">
                    <span>🏛️ Bank</span>
                  </div>
                  <div class="ip-method-name">Islami Bank</div>
                  <div class="ip-method-sub">BEFTN / NPSB</div>
                </button>

                <!-- 3. Nagad -->
                <button type="button" class="ip-method-tab ${o==="nagad"?"active active-nagad":""}" data-market-pay="nagad">
                  <div class="ip-method-icon ip-icon-nagad">
                    <span>Nagad</span>
                  </div>
                  <div class="ip-method-name">Nagad</div>
                  <div class="ip-method-sub">Mobile Banking</div>
                </button>

                <!-- 4. Cash on Delivery -->
                <button type="button" class="ip-method-tab ${o==="cod"?"active":""}" data-market-pay="cod" style="${o==="cod"?"border-color:#02221A;background:#F1F5F9;":""}">
                  <div class="ip-method-icon" style="background:#E2E8F0;color:#02221A;">
                    <span>💵</span>
                  </div>
                  <div class="ip-method-name">Cash on Del.</div>
                  <div class="ip-method-sub">Doorstep Handover</div>
                </button>
              </div>
            </div>

            <!-- Dynamic Form Based on Selected Channel -->
            <div class="ip-gateway-form-wrap">
              ${o==="bkash"?`
                <div class="ip-gateway-details gateway-bkash">
                  <div class="ip-merchant-box bkash-merchant-box">
                    <div class="ip-box-header">
                      <span class="badge-merchant">bKash Official Escrow Merchant</span>
                      <strong>Merchant Number: 01700-112233</strong>
                    </div>
                    <ol class="ip-steps-list">
                      <li>Open your <strong>bKash App</strong> or dial <code>*247#</code></li>
                      <li>Select <strong>"Make Payment" (পেমেন্ট করুন)</strong></li>
                      <li>Enter Merchant Account: <strong>01700-112233</strong></li>
                      <li>Enter Amount: <strong>৳ ${t.toLocaleString()} BDT</strong> (Reference: <code>MKT-GB</code>)</li>
                      <li>Enter PIN to confirm and copy your TrxID</li>
                    </ol>
                  </div>

                  <div class="ip-form-grid">
                    <div>
                      <label class="ip-field-lbl">Your bKash Number</label>
                      <input type="tel" id="mkt-sender-phone" value="${((g=n.bankDetails)==null?void 0:g.bkashNumber)||n.phone}" placeholder="017XXXXXXXX" class="ip-input" />
                    </div>
                    <div>
                      <label class="ip-field-lbl">bKash Transaction ID (TrxID)</label>
                      <input type="text" id="mkt-trxid" placeholder="e.g. BL99X4029A" class="ip-input ip-input-mono" />
                    </div>
                  </div>
                </div>
              `:""}

              ${o==="bank"?`
                <div class="ip-gateway-details gateway-bank">
                  <div class="ip-merchant-box bank-merchant-box">
                    <div class="ip-box-header">
                      <span class="badge-merchant" style="background:#E8F5EF;color:#047857;">GramBandhan Shariah Agro Escrow Fund</span>
                      <strong>Bank: Islami Bank Bangladesh Ltd (IBBL)</strong>
                    </div>
                    <div class="ip-escrow-bank-table">
                      <div class="row"><span>Account Name:</span><strong>GramBandhan Agro Shariah Escrow Fund Ltd</strong></div>
                      <div class="row"><span>Account Number:</span><strong style="font-family:monospace;letter-spacing:0.05em;">2050 7710 8899 001</strong></div>
                      <div class="row"><span>Branch:</span><strong>Dilkusha Commercial Area, Dhaka (Routing: 125271983)</strong></div>
                    </div>
                  </div>

                  <div class="ip-form-grid" style="grid-template-columns:1fr 1fr;">
                    <div>
                      <label class="ip-field-lbl">Your Bank & Branch Name</label>
                      <input type="text" id="mkt-sender-bank" value="${((u=n.bankDetails)==null?void 0:u.bankName)||"Islami Bank Bangladesh"}, ${((h=n.bankDetails)==null?void 0:h.branchName)||"Principal Branch"}" class="ip-input" />
                    </div>
                    <div>
                      <label class="ip-field-lbl">Your Sender Account Number</label>
                      <input type="text" id="mkt-sender-acc" value="${((v=n.bankDetails)==null?void 0:v.accountNumber)||"2050XXXXXXXX"}" class="ip-input ip-input-mono" />
                    </div>
                  </div>

                  <div style="margin-top:10px;">
                    <label class="ip-field-lbl">BEFTN / NPSB Reference or Deposit Slip / TrxID</label>
                    <input type="text" id="mkt-trxid" placeholder="e.g. FT-IBBL-2026-8912 or Deposit Slip #4102" class="ip-input ip-input-mono" />
                  </div>
                </div>
              `:""}

              ${o==="nagad"?`
                <div class="ip-gateway-details gateway-nagad">
                  <div class="ip-merchant-box nagad-merchant-box">
                    <div class="ip-box-header">
                      <span class="badge-merchant" style="background:#FFF3E0;color:#E65100;">Nagad Official Escrow Merchant</span>
                      <strong>Merchant Number: 01800-445566</strong>
                    </div>
                    <ol class="ip-steps-list">
                      <li>Open your <strong>Nagad App</strong> or dial <code>*167#</code></li>
                      <li>Select <strong>"Merchant Pay" (মার্চেন্ট পে)</strong></li>
                      <li>Enter Merchant Account: <strong>01800-445566</strong></li>
                      <li>Enter Amount: <strong>৳ ${t.toLocaleString()} BDT</strong></li>
                      <li>Enter your Nagad PIN and copy TrxID</li>
                    </ol>
                  </div>

                  <div class="ip-form-grid">
                    <div>
                      <label class="ip-field-lbl">Your Nagad Mobile Number</label>
                      <input type="tel" id="mkt-sender-phone" value="${((C=n.bankDetails)==null?void 0:C.nagadNumber)||n.phone}" placeholder="018XXXXXXXX" class="ip-input" />
                    </div>
                    <div>
                      <label class="ip-field-lbl">Nagad Transaction ID (TrxID)</label>
                      <input type="text" id="mkt-trxid" placeholder="e.g. NG8821B401" class="ip-input ip-input-mono" />
                    </div>
                  </div>
                </div>
              `:""}

              ${o==="cod"?`
                <div style="background:#F8FAFC;border:1.5px solid #CBD5E1;border-radius:10px;padding:16px;text-align:center;">
                  <div style="font-size:2rem;margin-bottom:8px;">💵</div>
                  <h4 style="margin:0 0 6px 0;color:#02221A;font-weight:800;">Cash on Delivery (ক্যাশ অন ডেলিভারি)</h4>
                  <p style="margin:0 0 10px;font-size:0.85rem;color:#475569;">Please keep exactly <strong>৳ ${t.toLocaleString()} BDT</strong> in cash ready when the courier delivers your products.</p>
                  <span style="font-size:0.75rem;background:#E2E8F0;color:#334155;padding:3px 10px;border-radius:12px;font-weight:700;">Courier: RedX Express Agro Logistics</span>
                </div>
              `:""}
            </div>

            <!-- Items & Price Summary -->
            <div style="background:#F1F8F4;border:1px solid #D1FAE5;border-radius:10px;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;">
              <div>
                <span style="font-size:0.8rem;color:#065F46;font-weight:700;">Subtotal: ৳ ${a.toLocaleString()} BDT</span>
                <span style="font-size:0.8rem;color:#047857;margin-left:12px;">• Delivery: ${i===0?"FREE":`৳ ${i}`}</span>
              </div>
              <div>
                <span style="font-size:0.8rem;color:#02221A;font-weight:700;">Total: </span>
                <strong style="font-size:1.1rem;color:#02221A;font-weight:800;">৳ ${t.toLocaleString()} BDT</strong>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="ip-footer">
            <button type="button" class="btn-ip-cancel" id="btn-cancel-market-pay">Cancel</button>
            <button type="button" class="btn-ip-confirm" id="btn-confirm-market-pay">
              Confirm & Complete Order (৳ ${t.toLocaleString()} BDT) →
            </button>
          </div>
        </div>
      `,(w=r.querySelector("#btn-close-market-pay-modal"))==null||w.addEventListener("click",p),(k=r.querySelector("#btn-cancel-market-pay"))==null||k.addEventListener("click",p),r.querySelectorAll("[data-market-pay]").forEach(b=>{b.addEventListener("click",()=>{const D=b.getAttribute("data-market-pay");if(D){o=D;const y=r==null?void 0:r.querySelector("#mkt-pay-name"),T=r==null?void 0:r.querySelector("#mkt-pay-phone"),E=r==null?void 0:r.querySelector("#mkt-pay-addr");y&&(s=y.value),T&&(l=T.value),E&&(c=E.value),d()}})}),(B=r.querySelector("#btn-confirm-market-pay"))==null||B.addEventListener("click",()=>{const b=r==null?void 0:r.querySelector("#mkt-trxid"),D=(b==null?void 0:b.value.trim())||"TRX-"+Math.random().toString(36).substring(2,9).toUpperCase(),y=r==null?void 0:r.querySelector("#btn-confirm-market-pay");y&&(y.disabled=!0,y.innerHTML=`
            <span class="pay-verifying-spinner"></span>
            Processing Payment & Order...
          `),setTimeout(()=>{const T="ORD-GB-"+Math.floor(1e5+Math.random()*9e5),E=o==="bkash"?"bKash":o==="bank"?"Islami Bank Transfer":o==="nagad"?"Nagad":"Cash on Delivery";f.addRole("buyer"),I.unshift({id:"act-ord-"+Date.now(),description:`Marketplace Order #${T} confirmed via ${E} (৳ ${t.toLocaleString()} BDT)`,division:"Dhaka HQ",status:"COMPLETED",timestamp:"Just now"}),this.saveMarketCart([]),p(),this.showToastNotification(`🎉 Order #${T} Placed! Confirmation SMS sent. Role updated: ${f.getRoleBadgeText()}`),this.openMarketOrderSuccessModal({orderId:T,items:e,total:t,subtotal:a,deliveryFee:i,paymentMethod:E,trxId:D,recipientName:s,recipientPhone:l,recipientAddress:c}),this.renderCurrentTabContent()},1200)}))};r.classList.add("active"),document.body.style.overflow="hidden";const p=()=>{r==null||r.classList.remove("active"),document.body.style.overflow=""};d(),r.addEventListener("click",g=>{g.target===r&&p()})}openMarketOrderSuccessModal(e){var r,n,o;let t=document.getElementById("grambandhan-market-receipt-modal");t||(t=document.createElement("div"),t.id="grambandhan-market-receipt-modal",t.className="project-question-modal-overlay",document.body.appendChild(t));const a=new Date().toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});t.innerHTML=`
      <div class="project-question-dialog" style="max-width: 620px; padding: 0; overflow: hidden; border: 2px solid #10B981; border-radius: 16px;">
        <div style="background: linear-gradient(135deg, #02221A 0%, #064E3B 100%); color: #FFFFFF; padding: 22px 24px; text-align: center; position: relative;">
          <button class="pq-close-btn" id="btn-close-receipt-modal" style="color: #FFF; position: absolute; top: 16px; right: 16px;">✕</button>
          <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(16,185,129,0.2);border:1px solid #10B981;padding:3px 12px;border-radius:20px;font-size:0.75rem;font-weight:800;letter-spacing:0.05em;color:#A7F3D0;margin-bottom:8px;">
            ✓ ORDER PAYMENT CONFIRMED
          </div>
          <h3 style="margin:2px 0 4px;font-size:1.35rem;font-weight:800;">GramBandhan Marketplace Invoice</h3>
          <p style="margin:0;font-size:0.8rem;color:#D1FAE5;">Order #${e.orderId} • Courier Delivery in 2-3 Days</p>
        </div>

        <div style="padding: 20px 24px; background: #FFFFFF; max-height: 65vh; overflow-y: auto;">
          <!-- Meta Grid -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;padding-bottom:14px;border-bottom:1px dashed #CBD5E1;font-size:0.8rem;color:#64748B;">
            <div>
              <span>Invoice Date: </span><strong style="color:#02221A;">${a}</strong>
            </div>
            <div>
              <span>Payment Channel: </span><strong style="color:#02221A;">${e.paymentMethod}</strong>
            </div>
            <div>
              <span>Transaction ID: </span><strong style="color:#02221A;font-family:monospace;">${e.trxId}</strong>
            </div>
            <div>
              <span>Delivery Status: </span><strong style="color:#059669;">Confirmed (Packing)</strong>
            </div>
          </div>

          <!-- Recipient info -->
          <div style="margin: 14px 0; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 10px 14px; font-size: 0.825rem;">
            <div style="color:#64748B;font-size:0.75rem;text-transform:uppercase;font-weight:700;margin-bottom:4px;">Delivery Destination</div>
            <div><strong style="color:#02221A;">${e.recipientName}</strong> (${e.recipientPhone})</div>
            <div style="color:#475569;">${e.recipientAddress}</div>
          </div>

          <!-- Items Table -->
          <div style="margin: 14px 0;">
            <div style="font-size:0.8rem;font-weight:700;color:#02221A;margin-bottom:8px;">Purchased Items:</div>
            ${e.items.map(s=>`
              <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid #F1F5F9;font-size:0.825rem;">
                <div>
                  <span style="font-weight:700;color:#02221A;">${s.product.name}</span>
                  <span style="color:#64748B;margin-left:6px;">× ${s.quantity}</span>
                </div>
                <strong style="color:#02221A;">৳ ${(s.product.priceBDT*s.quantity).toLocaleString()} BDT</strong>
              </div>
            `).join("")}
          </div>

          <!-- Total breakdown -->
          <div style="border-top: 1.5px solid #02221A; padding-top: 10px; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <span style="font-size:0.8rem;color:#64748B;">Subtotal: ৳ ${e.subtotal.toLocaleString()} BDT</span>
              <span style="font-size:0.8rem;color:#047857;margin-left:8px;">• Delivery: ${e.deliveryFee===0?"FREE":`৳ ${e.deliveryFee}`}</span>
            </div>
            <div style="text-align:right;">
              <span style="font-size:0.75rem;color:#64748B;display:block;">Total Paid</span>
              <strong style="font-size:1.25rem;color:#02221A;">৳ ${e.total.toLocaleString()} BDT</strong>
            </div>
          </div>
        </div>

        <div style="padding: 14px 24px; background: #F8FAFC; border-top: 1px solid #E2E8F0; display:flex; justify-content:space-between; align-items:center;">
          <button type="button" id="btn-print-mkt-receipt" style="background:#FFFFFF;border:1px solid #CBD5E1;color:#02221A;padding:8px 16px;border-radius:8px;font-size:0.825rem;font-weight:700;cursor:pointer;">
            🖨️ Print Invoice
          </button>
          <button type="button" id="btn-done-mkt-receipt" style="background:#02221A;border:none;color:#FFFFFF;padding:8px 22px;border-radius:8px;font-size:0.825rem;font-weight:700;cursor:pointer;">
            Done (সম্পন্ন) ✓
          </button>
        </div>
      </div>
    `,t.classList.add("active"),document.body.style.overflow="hidden";const i=()=>{t==null||t.classList.remove("active"),document.body.style.overflow=""};(r=t.querySelector("#btn-close-receipt-modal"))==null||r.addEventListener("click",i),(n=t.querySelector("#btn-done-mkt-receipt"))==null||n.addEventListener("click",i),(o=t.querySelector("#btn-print-mkt-receipt"))==null||o.addEventListener("click",()=>{window.print()}),t.addEventListener("click",s=>{s.target===t&&i()})}renderFinancialsTab(e){var r,n,o,s,l,c;const t=this.stats;let i=this.portfolioProjects.filter(d=>d.status==="completed");if(this.financialSearchQuery&&this.financialSearchQuery.trim()){const d=this.financialSearchQuery.trim().toLowerCase();i=i.filter(p=>p.name.toLowerCase().includes(d)||p.district.toLowerCase().includes(d)||p.moneySentChannel&&p.moneySentChannel.toLowerCase().includes(d)||p.moneySentTrxId&&p.moneySentTrxId.toLowerCase().includes(d)||p.moneyReceivedChannel&&p.moneyReceivedChannel.toLowerCase().includes(d)||p.moneyReceivedTrxId&&p.moneyReceivedTrxId.toLowerCase().includes(d))}e.innerHTML=`
      <!-- Header Row -->
      <div class="dash-content-header">
        <div class="dash-title-group">
          <h1>Financial Balance, Payouts & Shariah Ledger (আর্থিক বিবরণী ও লেনদেন)</h1>
          <p>Comprehensive audit trail of capital deployed, money sent dates, harvest mandi settlements, and dividend payouts received.</p>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button class="btn btn-secondary" id="btn-download-statement" style="font-size: 0.85rem; padding: 8px 16px;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Download FY Statement (PDF)</span>
          </button>
          <button class="btn btn-primary" id="btn-fin-withdraw" style="font-size: 0.85rem; padding: 8px 16px; background: #047857;">
            <span>Withdraw Funds (টাকা উত্তোলন)</span>
          </button>
        </div>
      </div>

      <!-- 1. DETAILED 5-METRIC FINANCIAL CARDS ROW -->
      <div class="fin-metrics-grid">
        <div class="fin-metric-card fin-card-highlight">
          <div class="fin-card-top">
            <span class="fin-lbl">AVAILABLE WITHDRAWABLE BALANCE</span>
            <span class="fin-badge-green">Instant Payout</span>
          </div>
          <div class="fin-val val-dark">৳ ${t.totalAccountBalanceBDT.toLocaleString()} BDT</div>
          <div class="fin-sub">Ready to withdraw to Islami Bank A/C ...4821 or verified bKash wallet</div>
          <div class="fin-actions-row">
            <button class="fin-card-btn btn-action-withdraw" id="card-btn-withdraw">Withdraw to Bank / bKash</button>
            <button class="fin-card-btn btn-action-deposit" id="card-btn-deposit">+ Add Capital</button>
          </div>
        </div>

        <div class="fin-metric-card">
          <div class="fin-card-top">
            <span class="fin-lbl">CAPITAL ACTIVE ON FIELD</span>
            <span class="fin-badge-blue">8 Active Farms</span>
          </div>
          <div class="fin-val">৳ 2,85,000 BDT</div>
          <div class="fin-sub">Deployed in ongoing seed-sowing, bio-fertilization & broiler flocks</div>
        </div>

        <div class="fin-metric-card">
          <div class="fin-card-top">
            <span class="fin-lbl">TOTAL CAPITAL INVESTED</span>
            <span class="fin-badge-dark">All-Time Principal</span>
          </div>
          <div class="fin-val">৳ ${t.totalInvestmentBDT.toLocaleString()} BDT</div>
          <div class="fin-sub">Accumulated capital across 16 Bangladeshi ethical agro-projects</div>
        </div>

        <div class="fin-metric-card">
          <div class="fin-card-top">
            <span class="fin-lbl">TOTAL HALAL PROFIT CREDITED</span>
            <span class="fin-badge-green">+17.2% Avg ROI</span>
          </div>
          <div class="fin-val val-green">৳ ${t.totalProfitBDT.toLocaleString()} BDT</div>
          <div class="fin-sub">100% Shariah audited, 0% riba (interest), distributed on harvest</div>
        </div>

        <div class="fin-metric-card">
          <div class="fin-card-top">
            <span class="fin-lbl">SCHEDULED / IN-TRANSIT PAYOUTS</span>
            <span class="fin-badge-amber">Settling Soon</span>
          </div>
          <div class="fin-val val-amber">৳ 23,800 BDT</div>
          <div class="fin-sub">Meghna Hilsha & Jamalpur Nakshi Kantha final market clearing</div>
        </div>
      </div>

      <!-- 2. MONTHLY CASHFLOW & RETURNS SUMMARY (WATERFALL OVERVIEW) -->
      <div class="dash-panel-card" style="margin-bottom: 24px;">
        <div class="panel-header-row">
          <div>
            <h3 style="margin: 0; font-size: 1.05rem; color: #02221A;">2026 Monthly Cashflow & Shariah Returns (মাসিক ক্যাশফ্লো বিবরণী)</h3>
            <p style="margin: 3px 0 0; font-size: 0.8rem; color: #64748B;">Capital Sent Outflows vs Harvest Dividend Payouts Received</p>
          </div>
          <div class="cashflow-legend">
            <span class="legend-item"><span class="legend-dot dot-outflow"></span> Capital Sent (বিনিয়োগ)</span>
            <span class="legend-item"><span class="legend-dot dot-inflow"></span> Money Received (লভ্যাংশ ও মূলধন)</span>
          </div>
        </div>

        <div class="cashflow-waterfall-grid">
          ${[{month:"Jan 2026",sent:9e4,rcvd:0},{month:"Feb 2026",sent:5e4,rcvd:0},{month:"Mar 2026",sent:3e4,rcvd:35100,note:"Sundarbans Honey settled"},{month:"Apr 2026",sent:7e4,rcvd:81650,note:"Chuadanga Maize & Sylhet Craft"},{month:"May 2026",sent:55e3,rcvd:75400,note:"Faridpur Jute settled"},{month:"Jun 2026",sent:45e3,rcvd:94400,note:"Pabna Eid Cattle settled"},{month:"Jul 2026",sent:8e4,rcvd:87350,note:"Cumilla Strawberry & Haor Duck"},{month:"Aug 2026",sent:6e4,rcvd:58200,note:"Dinajpur Mustard settled"}].map(d=>{const g=Math.max(10,Math.round(d.sent/1e5*90)),u=Math.max(10,Math.round(d.rcvd/1e5*90));return`
              <div class="waterfall-col">
                <div class="waterfall-bars">
                  <div class="wf-bar bar-sent" style="height: ${g}px;" title="Capital Sent: ৳ ${d.sent.toLocaleString()}">
                    <span class="bar-tooltip">-৳${d.sent/1e3}k</span>
                  </div>
                  <div class="wf-bar bar-rcvd" style="height: ${u}px;" title="Received: ৳ ${d.rcvd.toLocaleString()}">
                    <span class="bar-tooltip">${d.rcvd>0?"+৳"+d.rcvd/1e3+"k":"—"}</span>
                  </div>
                </div>
                <span class="wf-month-lbl">${d.month}</span>
              </div>
            `}).join("")}
        </div>
      </div>

      <!-- 3. COMPREHENSIVE CAPITAL OUTFLOW & RETURN INFLOW TRANSACTION LEDGER -->
      <div class="dash-panel-card">
        <div class="panel-header-row" style="margin-bottom: 16px; flex-wrap: wrap; gap: 12px;">
          <div>
            <h3 style="margin: 0; font-size: 1.1rem; color: #02221A;">Completed Projects: Money Send & Receive Audit Ledger (টাকা প্রদান ও প্রাপ্তির হিসাব বিবরণী)</h3>
            <p style="margin: 3px 0 0; font-size: 0.8rem; color: #64748B;">Official settlement timestamps, bank transfer channels, and verified transaction reference IDs.</p>
          </div>

          <div class="fin-ledger-search-box">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" id="fin-search-input" value="${this.financialSearchQuery}" placeholder="Search projects, channels, TrxID..." />
            ${this.financialSearchQuery?'<button id="fin-search-clear" style="background:none;border:none;cursor:pointer;color:#94A3B8;">✕</button>':""}
          </div>
        </div>

        <div class="fin-ledger-table-wrap">
          <table class="fin-ledger-table">
            <thead>
              <tr>
                <th>Project & Crop Name</th>
                <th>Capital Sent Date & Channel</th>
                <th>Capital Outflow (৳)</th>
                <th>Harvest Mandi Date</th>
                <th>Money Received Date & Account</th>
                <th>Total Received (৳)</th>
                <th>Net Shariah Profit</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${i.length===0?`
                <tr>
                  <td colspan="9" style="text-align: center; padding: 36px 16px; color: #64748B;">
                    🔍 No transaction records found matching "${this.financialSearchQuery}".
                  </td>
                </tr>
              `:i.map(d=>{const p=d.investedAmountBDT+(d.actualReturnBDT||d.expectedProfitBDT),g=d.actualReturnBDT||d.expectedProfitBDT;return`
                  <tr>
                    <td>
                      <div class="tbl-proj-title">
                        <strong>${d.name}</strong>
                        <span>${d.bengaliName} • 📍 ${d.district}</span>
                      </div>
                    </td>
                    <td>
                      <div class="tbl-flow-cell">
                        <strong>📅 ${d.moneySentDate||"10 Jan 2026, 10:45 AM"}</strong>
                        <span class="tbl-channel-badge">${d.moneySentChannel||"bKash Merchant Pay"}</span>
                        <span class="tbl-trx-sub">Trx: <code>${d.moneySentTrxId||"BK918234-GMB"}</code></span>
                      </div>
                    </td>
                    <td>
                      <strong class="amt-sent-val">- ৳ ${d.investedAmountBDT.toLocaleString()}</strong>
                    </td>
                    <td>
                      <div class="tbl-flow-cell">
                        <strong>🌾 ${d.mandiSettlementDate||"18 Aug 2026"}</strong>
                        <span class="tbl-sub">${(d.harvestWeightKg||4200).toLocaleString()} KG @ ৳${d.mandiRatePerKg||138}/KG</span>
                      </div>
                    </td>
                    <td>
                      <div class="tbl-flow-cell">
                        <strong style="color: #047857;">📥 ${d.moneyReceivedDate||d.payoutReceivedDate||"22 Aug 2026, 03:30 PM"}</strong>
                        <span class="tbl-channel-badge badge-rcvd">${d.moneyReceivedChannel||"BEFTN Electronic"}</span>
                        <span class="tbl-trx-sub">${d.moneyReceivedAccount||"IBBL A/C ...4821"} • <code>${d.moneyReceivedTrxId||"EFTN-BB-9182"}</code></span>
                      </div>
                    </td>
                    <td>
                      <strong class="amt-rcvd-val">+ ৳ ${p.toLocaleString()}</strong>
                    </td>
                    <td>
                      <div class="tbl-profit-cell">
                        <strong style="color: #047857;">+ ৳ ${g.toLocaleString()}</strong>
                        <span class="tbl-roi-pill">+${d.roiPercentage}%</span>
                      </div>
                    </td>
                    <td>
                      <span class="tbl-status-settled">✓ Reconciled</span>
                    </td>
                    <td>
                      <button class="tbl-btn-slip" data-action="view-slip" data-project-id="${d.id}" title="View Bank Advice Slip">
                        📄 Bank Slip
                      </button>
                    </td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `,(r=e.querySelector("#fin-search-input"))==null||r.addEventListener("input",d=>{this.financialSearchQuery=d.target.value,this.renderFinancialsTab(e)}),(n=e.querySelector("#fin-search-clear"))==null||n.addEventListener("click",()=>{this.financialSearchQuery="",this.renderFinancialsTab(e)}),e.querySelectorAll(".tbl-btn-slip").forEach(d=>{d.addEventListener("click",()=>{const p=d.getAttribute("data-project-id"),g=this.portfolioProjects.find(u=>u.id===p);g&&this.openBankAdviceModal(g)})}),(o=e.querySelector("#btn-download-statement"))==null||o.addEventListener("click",()=>{this.showToastNotification("📄 FY 2025-2026 Shariah Financial Statement generated and downloaded successfully.")}),(s=e.querySelector("#btn-fin-withdraw"))==null||s.addEventListener("click",()=>{this.openWithdrawalModal()}),(l=e.querySelector("#card-btn-withdraw"))==null||l.addEventListener("click",()=>{this.openWithdrawalModal()}),(c=e.querySelector("#card-btn-deposit"))==null||c.addEventListener("click",()=>{this.showToastNotification("Direct bank transfer & bKash instant deposit portal ready.")})}renderAiRiskTab(e){var y,T,E,P;const t=N,a=t.find(S=>S.id===this.aiSelectedProjectId)||t[0];let i=8;this.aiFloodRiskLevel==="medium"&&(i=18),this.aiFloodRiskLevel==="high"&&(i=32);let r=88;this.aiMandiVolatility==="medium"&&(r=76),this.aiMandiVolatility==="high"&&(r=64);const n=Math.round(this.aiNdviIndex*110),o=this.aiCoopRating==="tier1"?98:89,s=((100-i)*.3+n*.25+r*.25+o*.2)/10,l=Math.min(9.8,Math.max(6.2,parseFloat(s.toFixed(1)))),c=Math.min(98,Math.max(78,Math.round(l*10))),p=((a.roiPercentage||((y=a.returnRangePercent)==null?void 0:y[1])||16.5)+(this.aiNdviIndex>.8?1.2:-.5)).toFixed(1),g=(parseFloat(p)-1.8).toFixed(1),u=(parseFloat(p)+2.1).toFixed(1),h=this.aiSelectedPrincipal||a.minInvestmentBDT||2e4,v=Math.round(h*parseFloat(p)/100),C=h+v;e.innerHTML=`
      <!-- Header Row -->
      <div class="dash-content-header">
        <div class="dash-title-group">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <span class="ai-engine-chip">⚡ KRISHI-AI v2.8 SAFETY CHECKER</span>
            <span class="ai-trained-chip">5-Year Field & Satellite Archives</span>
          </div>
          <h1>AI Pre-Investment Risk & Safety Forecaster (কৃষি এআই ঝুঁকি ও নিরাপত্তা যাচাই)</h1>
          <p>Evaluate project safety, 5-year flood history, crop greenery biometrics, and market price stability in plain words before investing.</p>
        </div>
      </div>

      <!-- 3-STEP EASY ONBOARDING GUIDE BANNER -->
      <div class="ai-easy-guide-banner">
        <div class="ai-guide-step-card">
          <div class="ai-guide-icon">🌾</div>
          <div class="ai-guide-text">
            <h4>1. Pick a Farm Project</h4>
            <p>Select any vetted crop, dairy, or artisan project in Bangladesh.</p>
          </div>
        </div>
        <div class="ai-guide-step-card">
          <div class="ai-guide-icon">🤖</div>
          <div class="ai-guide-text">
            <h4>2. AI Checks 4 Key Risks</h4>
            <p>Checks 5-yr flood history, satellite crop health, market price & farmer trust.</p>
          </div>
        </div>
        <div class="ai-guide-step-card">
          <div class="ai-guide-icon">💡</div>
          <div class="ai-guide-text">
            <h4>3. Plain Safety Rating & Profit</h4>
            <p>See clear safety verdict (Safe/Moderate), capital protection %, and exact returns.</p>
          </div>
        </div>
      </div>

      <!-- 1-CLICK SCENARIO TEST PRESETS -->
      <div class="ai-presets-bar">
        <span class="ai-presets-label">⚡ 1-Click Test Scenarios (এক ক্লিকে পরিস্থিতি যাচাই):</span>
        <button class="ai-preset-btn ${this.aiActivePreset==="safe"?"active":""}" data-preset="safe">
          <span>🌟 Typical Safe Season (স্বাভাবিক মৌসুম)</span>
        </button>
        <button class="ai-preset-btn ${this.aiActivePreset==="monsoon"?"active":""}" data-preset="monsoon">
          <span>🌧️ Heavy Monsoon Stress Test (বন্যা সহনশীলতা)</span>
        </button>
        <button class="ai-preset-btn ${this.aiActivePreset==="market"?"active":""}" data-preset="market">
          <span>📉 Wholesale Price Dip Test (বাজার দর পতন)</span>
        </button>
      </div>

      <!-- MAIN AI TWO-COLUMN WORKBENCH -->
      <div class="ai-workbench-grid">
        <!-- LEFT COLUMN: INTERACTIVE PARAMETER CONTROLS -->
        <div class="ai-controls-card">
          <div class="ai-card-header">
            <span class="ai-header-icon">🎛️</span>
            <div>
              <h3>Simulation Controls (সহজ সিমুলেশন সেটিংস)</h3>
              <p>Adjust environmental and market factors to test how resilient your capital is.</p>
            </div>
          </div>

          <!-- Project Selector -->
          <div class="ai-form-group">
            <label class="ai-field-lbl">1. Select Target Project to Evaluate (প্রকল্প নির্বাচন করুন)</label>
            <select id="ai-project-picker" class="ai-select-input">
              ${t.map(S=>`
                <option value="${S.id}" ${S.id===a.id?"selected":""}>
                  ${S.name} • 📍 ${S.location} (Est. ${S.returnRange||S.potentialReturn||"16%"})
                </option>
              `).join("")}
            </select>
          </div>

          <!-- Project Metadata Preview Card -->
          <div class="ai-proj-mini-card">
            <img src="${a.image}" alt="${a.name}" class="ai-mini-img" />
            <div class="ai-mini-info">
              <strong>${a.name}</strong>
              <span class="mini-meta">📍 ${a.location} • Category: ${a.category}</span>
              <span class="mini-funding">Campaign: <strong>${Math.round(a.fundingRaisedBDT/(a.fundingGoalBDT||1)*100)}% Funded</strong> • Duration: ${a.duration}</span>
            </div>
          </div>

          <!-- Control 1: Monsoon & Flood History -->
          <div class="ai-form-group">
            <div class="ai-lbl-row">
              <label class="ai-field-lbl">2. 5-Year Flood History & Drainage (বন্যার ঝুঁকি ও বিগত ৫ বছরের রেকর্ড)</label>
              <span class="ai-badge-val">${i}% Flood Probability</span>
            </div>
            <select id="ai-flood-risk-select" class="ai-select-input">
              <option value="low" ${this.aiFloodRiskLevel==="low"?"selected":""}>🟢 Low Risk: High Land & Polder Embankment (Zero Floods 2021-2025)</option>
              <option value="medium" ${this.aiFloodRiskLevel==="medium"?"selected":""}>🟡 Medium Risk: Low Riverbasin (Protected with Active Drainage Canals)</option>
              <option value="high" ${this.aiFloodRiskLevel==="high"?"selected":""}>🔴 High Risk: Active Riverbank (Vulnerable to Heavy Flash Floods)</option>
            </select>
            <span class="ai-hint">Source: Bangladesh Meteorological Dept (BMD) 5-year regional rainfall anomalies.</span>
          </div>

          <!-- Control 2: Soil & Crop Vigour (NDVI) -->
          <div class="ai-form-group">
            <div class="ai-lbl-row">
              <label class="ai-field-lbl">3. Satellite Crop & Soil Health (স্যাটেলাইট মাটির উর্বরতা ও স্বাস্থ্য)</label>
              <span class="ai-badge-val" id="ai-ndvi-val-display">${this.aiNdviIndex} NDVI (${this.aiNdviIndex>=.84?"Optimal Greenery":this.aiNdviIndex>=.7?"Healthy":"Dry/Stressed"})</span>
            </div>
            <input type="range" id="ai-ndvi-slider" min="0.50" max="0.95" step="0.01" value="${this.aiNdviIndex}" class="ai-range-slider" />
            <div class="ai-slider-ticks">
              <span>0.50 (Dry/Poor)</span>
              <span>0.70 (Healthy)</span>
              <span>0.84 (Optimal Greenery)</span>
              <span>0.95 (Prime Lush)</span>
            </div>
            <span class="ai-hint">High NDVI means dense, well-fertilized crops with strong photosynthesis and root growth.</span>
          </div>

          <!-- Control 3: Wholesale Mandi Price Shock Exposure -->
          <div class="ai-form-group">
            <div class="ai-lbl-row">
              <label class="ai-field-lbl">4. Crop Selling Price Safety (ফসল বিক্রির মূল্য নিশ্চয়তা)</label>
              <span class="ai-badge-val">${this.aiMandiVolatility==="low"?"LOCKED PRICE (SAFE)":this.aiMandiVolatility==="medium"?"NORMAL BUFFER":"OPEN MARKET SWINGS"}</span>
            </div>
            <select id="ai-volatility-select" class="ai-select-input">
              <option value="low" ${this.aiMandiVolatility==="low"?"selected":""}>✅ Guaranteed Buyer: Pre-agreed Fixed Price with PRAN / ACI (Lowest Risk)</option>
              <option value="medium" ${this.aiMandiVolatility==="medium"?"selected":""}>⚠️ Standard Wholesale: +/- 10% Historical Mandi Buffer</option>
              <option value="high" ${this.aiMandiVolatility==="high"?"selected":""}>⚡ Open Spot Auction: +/- 25% Market Price Swings (Higher Risk)</option>
            </select>
          </div>

          <!-- Control 4: Cooperative Farmer Credibility -->
          <div class="ai-form-group">
            <label class="ai-field-lbl">5. Farmer Cooperative Reliability (কৃষক সমবায়ের সুনাম ও রেকর্ড)</label>
            <select id="ai-coop-select" class="ai-select-input">
              <option value="tier1" ${this.aiCoopRating==="tier1"?"selected":""}>⭐ Tier-1 Certified Cooperative: 99.4% On-Time Harvest Delivery & 100% Halal</option>
              <option value="tier2" ${this.aiCoopRating==="tier2"?"selected":""}>🌱 Tier-2 Supervised Group: 95.0% Track Record (Under DAE Agronomist Guidance)</option>
            </select>
          </div>

          <!-- Run AI Simulation Button -->
          <button class="btn btn-primary ai-btn-run" id="btn-run-ai-simulation" ${this.isAiSimulating?"disabled":""}>
            ${this.isAiSimulating?`
              <span class="ai-spinner"></span>
              <span>Running Neural Risk Simulation (ধাপ ${this.aiSimulationStep}/4)...</span>
            `:`
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <span>Run AI Risk Audit (এআই ঝুঁকি বিশ্লেষণ চালান)</span>
            `}
          </button>
        </div>

        <!-- RIGHT COLUMN: AI INFERENCE RESULTS DASHBOARD -->
        <div class="ai-results-card">
          ${this.isAiSimulating?`
            <!-- Neural Inference Progress State -->
            <div class="ai-simulating-box">
              <div class="neural-pulse-loader"></div>
              <h3>Krishi-AI Deep Neural Inference in Progress...</h3>
              <p>Testing 10,000 crop growth and market price scenarios using 5-year historical data.</p>
              
              <div class="ai-sim-steps">
                <div class="sim-step ${this.aiSimulationStep>=1?"step-done":""}">
                  <span>${this.aiSimulationStep>1?"✓":"1"}</span>
                  <span>1. Checking 5-year monsoon rainfall & haor flood records for ${a.location}...</span>
                </div>
                <div class="sim-step ${this.aiSimulationStep>=2?"step-done":""}">
                  <span>${this.aiSimulationStep>2?"✓":"2"}</span>
                  <span>2. Scanning Sentinel-2 satellite images for soil moisture and crop greenery...</span>
                </div>
                <div class="sim-step ${this.aiSimulationStep>=3?"step-done":""}">
                  <span>${this.aiSimulationStep>3?"✓":"3"}</span>
                  <span>3. Simulating wholesale crop market prices across Karwan Bazar and regional mandis...</span>
                </div>
                <div class="sim-step ${this.aiSimulationStep>=4?"step-done":""}">
                  <span>${this.aiSimulationStep>=4?"✓":"4"}</span>
                  <span>4. Finalizing Shariah compliance audit and expert agronomist safety advice...</span>
                </div>
              </div>
            </div>
          `:`
            <!-- Comprehensive AI Results Display -->
            <div class="ai-results-header">
              <div class="ai-score-ring-wrap">
                <div class="ai-score-big">${l}</div>
                <div class="ai-score-sub">/ 10 Score</div>
              </div>

              <div class="ai-verdict-info">
                <div class="ai-verdict-title-row">
                  <h4>${l>=8.5?"EXCELLENT • HIGHLY VIABLE":l>=7.5?"GOOD • MODERATE RISK":"ELEVATED RISK • CAUTION"}</h4>
                  <span class="ai-safety-badge ${l>=8.5?"safe":l>=7.5?"moderate":"caution"}">
                    ${l>=8.5?"🟢 VERY SAFE (অত্যন্ত নিরাপদ)":l>=7.5?"🟡 MODERATE RISK (মাঝারি ঝুঁকি)":"🔴 CAUTION (সতর্কতা)"}
                  </span>
                </div>
                <div style="display: flex; gap: 8px; align-items: center; margin-top: 4px;">
                  <span class="ai-shariah-tag">✓ 100% Halal Asset-Backed</span>
                  <span style="font-size: 0.75rem; font-weight: 750; color: #047857;">🛡️ ${c}% Capital Protection</span>
                </div>
              </div>
            </div>

            <!-- Plain-Language Summary Box -->
            <div class="ai-plain-summary-box">
              <div class="ai-plain-summary-header">
                <span>💡</span>
                <span>In Simple Words (সহজ কথায়):</span>
              </div>
              <p class="ai-plain-summary-desc">
                ${l>=8.5?`Your investment in <strong>${a.name}</strong> is well-protected. The farmland is located on elevated ground with zero historical flood damage, and wholesale off-take contracts guarantee selling prices upon harvest.`:l>=7.5?"This project has moderate risk. While farmland is protected by canals, market price buffers are advised. The cooperative has a solid 95%+ completion record.":"Elevated weather or open auction volatility detected. Recommended only for experienced investors with diversified holdings."}
              </p>
            </div>

            <!-- Interactive Return & Profit Calculator -->
            <div class="ai-calc-box">
              <div class="ai-calc-header">
                <span class="ai-calc-title">
                  <span>💰</span>
                  <span>Profit & Take-Home Calculator (মুনাফা ও ফেরত ক্যালকুলেটর)</span>
                </span>
                <span style="font-size: 0.725rem; font-weight: 800; color: #047857;">+${p}% ROI (+${g}% to +${u}%)</span>
              </div>

              <div class="ai-calc-pills">
                <button class="ai-calc-pill ${h===1e4?"active":""}" data-amt="10000">৳ 10,000</button>
                <button class="ai-calc-pill ${h===2e4?"active":""}" data-amt="20000">৳ 20,000</button>
                <button class="ai-calc-pill ${h===5e4?"active":""}" data-amt="50000">৳ 50,000</button>
                <button class="ai-calc-pill ${h===1e5?"active":""}" data-amt="100000">৳ 1,00,000</button>
              </div>

              <div class="ai-calc-results-row">
                <div class="ai-calc-stat-item">
                  <span class="ai-calc-stat-label">You Invest</span>
                  <span class="ai-calc-stat-val">৳ ${h.toLocaleString()}</span>
                </div>
                <div class="ai-calc-stat-item">
                  <span class="ai-calc-stat-label">Projected Net Profit</span>
                  <span class="ai-calc-stat-val profit">+ ৳ ${v.toLocaleString()}</span>
                </div>
                <div class="ai-calc-stat-item">
                  <span class="ai-calc-stat-label">Total Payout (~${a.duration})</span>
                  <span class="ai-calc-stat-val profit">৳ ${C.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <!-- 4 AI Factor Gauges -->
            <div class="ai-factors-grid">
              <div class="factor-gauge-item">
                <div class="gauge-head">
                  <span class="gauge-icon">🛡️</span>
                  <span>Flood & Climate Safety</span>
                  <strong>${100-i}%</strong>
                </div>
                <div class="gauge-track">
                  <div class="gauge-fill" style="width: ${100-i}%; background: #10B981;"></div>
                </div>
                <span class="gauge-sub">${i<15?"Safe embankment • Zero flood impact in 5 yrs":"Drainage monitoring active"}</span>
              </div>

              <div class="factor-gauge-item">
                <div class="gauge-head">
                  <span class="gauge-icon">🌱</span>
                  <span>Crop Greenery & Health</span>
                  <strong>${n}%</strong>
                </div>
                <div class="gauge-track">
                  <div class="gauge-fill" style="width: ${Math.min(100,n)}%; background: #059669;"></div>
                </div>
                <span class="gauge-sub">Satellite NDVI: ${this.aiNdviIndex} (${this.aiNdviIndex>=.8?"Optimal Growth":"Standard"})</span>
              </div>

              <div class="factor-gauge-item">
                <div class="gauge-head">
                  <span class="gauge-icon">📈</span>
                  <span>Selling Price Protection</span>
                  <strong>${r}%</strong>
                </div>
                <div class="gauge-track">
                  <div class="gauge-fill" style="width: ${r}%; background: #0D9488;"></div>
                </div>
                <span class="gauge-sub">${this.aiMandiVolatility==="low"?"Guaranteed off-take price locked":"Subject to Karwan Bazar spot prices"}</span>
              </div>

              <div class="factor-gauge-item">
                <div class="gauge-head">
                  <span class="gauge-icon">👨‍🌾</span>
                  <span>Farmer Cooperative Trust</span>
                  <strong>${o}%</strong>
                </div>
                <div class="gauge-track">
                  <div class="gauge-fill" style="width: ${o}%; background: #047857;"></div>
                </div>
                <span class="gauge-sub">${this.aiCoopRating==="tier1"?"12 consecutive successful seasons":"Supervised by field agronomists"}</span>
              </div>
            </div>

            <!-- "WHAT IF?" SAFETY GUARANTEE CARDS -->
            <div class="ai-what-if-grid">
              <div class="ai-what-if-card">
                <div class="ai-what-if-question">
                  <span>🌊</span>
                  <span>What if severe floods strike?</span>
                </div>
                <p class="ai-what-if-answer">
                  Farmland is situated on elevated polders with active perimeter drainage ditches. Zero crop loss recorded across 5 seasons.
                </p>
              </div>

              <div class="ai-what-if-card">
                <div class="ai-what-if-question">
                  <span>📉</span>
                  <span>What if market prices drop?</span>
                </div>
                <p class="ai-what-if-answer">
                  Pre-negotiated forward contracts with commercial institutional buyers lock in minimum wholesale prices before harvest.
                </p>
              </div>

              <div class="ai-what-if-card">
                <div class="ai-what-if-question">
                  <span>🌾</span>
                  <span>What if crops get disease?</span>
                </div>
                <p class="ai-what-if-answer">
                  DAE agronomists conduct weekly field visits. Organic bio-pesticides and cooperative reserve funds safeguard capital.
                </p>
              </div>

              <div class="ai-what-if-card">
                <div class="ai-what-if-question">
                  <span>🕌</span>
                  <span>Is this profit 100% Halal?</span>
                </div>
                <p class="ai-what-if-answer">
                  100% Shariah Mudarabah partnership based on physical harvest sharing. Zero fixed interest (Riba-free).
                </p>
              </div>
            </div>

            <!-- Action Buttons Row -->
            <div class="ai-actions-footer" style="margin-top: 18px;">
              <button class="btn btn-primary btn-ai-invest-direct" id="btn-ai-invest-direct">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>Invest in This Project (৳ ${h.toLocaleString()})</span>
              </button>
              
              <button class="btn btn-secondary" id="btn-ai-download-dossier">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download AI Audit Dossier (PDF)</span>
              </button>
            </div>
          `}
        </div>
      </div>

      <!-- 3. HISTORICAL 5-YEAR DATA ARCHIVE TABLE -->
      <div class="dash-panel-card" style="margin-top: 24px;">
        <div class="panel-header-row" style="margin-bottom: 12px;">
          <div>
            <h3 style="margin: 0; font-size: 1.05rem; color: #02221A;">5-Year Historical Performance Archive (${a.location} Cluster)</h3>
            <p style="margin: 3px 0 0; font-size: 0.8rem; color: #64748B;">Actual harvest yields, climate records, and dividend returns achieved by partner cooperatives (2021–2025).</p>
          </div>
          <span class="tbl-status-settled">Verified by Bangladesh DAE</span>
        </div>

        <!-- 5-Year Proof Callout Banner -->
        <div class="ai-history-proof-banner">
          <span>🏆</span>
          <div>
            <strong>5-Year Real Field Proof:</strong> Even during Bangladesh's severe 2022 monsoon flood, investors in this cluster received <strong>100% of their money back</strong> plus <strong>+15.4% net profit</strong>.
          </div>
        </div>

        <div class="fin-ledger-table-wrap">
          <table class="fin-ledger-table">
            <thead>
              <tr>
                <th>Season & Year</th>
                <th>Harvest Output (Acre)</th>
                <th>Monsoon Rainfall Anomaly</th>
                <th>Avg Wholesale Mandi Price</th>
                <th>Investor ROI Disbursed</th>
                <th>Settlement Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>2025 Kharif-2 Season</strong></td>
                <td>4,920 KG Prime Grade</td>
                <td><span style="color: #047857;">Normal (+2% rainfall)</span></td>
                <td>৳ 135 / KG</td>
                <td><strong style="color: #047857;">+17.2% Net Return</strong></td>
                <td><span class="tbl-status-settled">✓ 100% Payout Disbursed</span></td>
              </tr>
              <tr>
                <td><strong>2024 Rabi Season</strong></td>
                <td>4,780 KG Prime Grade</td>
                <td><span style="color: #047857;">Favorable Cold Weather</span></td>
                <td>৳ 128 / KG</td>
                <td><strong style="color: #047857;">+16.8% Net Return</strong></td>
                <td><span class="tbl-status-settled">✓ 100% Payout Disbursed</span></td>
              </tr>
              <tr>
                <td><strong>2023 Kharif-1 Season</strong></td>
                <td>4,650 KG Prime Grade</td>
                <td><span style="color: #047857;">Adequate Monsoon</span></td>
                <td>৳ 122 / KG</td>
                <td><strong style="color: #047857;">+16.0% Net Return</strong></td>
                <td><span class="tbl-status-settled">✓ 100% Payout Disbursed</span></td>
              </tr>
              <tr>
                <td><strong>2022 Monsoon Flood Year</strong></td>
                <td>4,310 KG (Managed)</td>
                <td><span style="color: #D97706;">Moderate Flooding (+18%)</span></td>
                <td>৳ 140 / KG (High Demand)</td>
                <td><strong style="color: #047857;">+15.4% Net Return</strong></td>
                <td><span class="tbl-status-settled">✓ 100% Payout Disbursed</span></td>
              </tr>
              <tr>
                <td><strong>2021 Kharif-2 Season</strong></td>
                <td>4,500 KG Prime Grade</td>
                <td><span style="color: #047857;">Optimal Rainfall</span></td>
                <td>৳ 118 / KG</td>
                <td><strong style="color: #047857;">+15.8% Net Return</strong></td>
                <td><span class="tbl-status-settled">✓ 100% Payout Disbursed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,e.querySelectorAll(".ai-preset-btn").forEach(S=>{S.addEventListener("click",L=>{const R=L.currentTarget.getAttribute("data-preset");R==="safe"?(this.aiActivePreset="safe",this.aiFloodRiskLevel="low",this.aiNdviIndex=.84,this.aiMandiVolatility="low",this.aiCoopRating="tier1"):R==="monsoon"?(this.aiActivePreset="monsoon",this.aiFloodRiskLevel="high",this.aiNdviIndex=.72,this.aiMandiVolatility="medium",this.aiCoopRating="tier1"):R==="market"&&(this.aiActivePreset="market",this.aiFloodRiskLevel="low",this.aiNdviIndex=.8,this.aiMandiVolatility="high",this.aiCoopRating="tier2"),this.renderAiRiskTab(e)})}),e.querySelectorAll(".ai-calc-pill").forEach(S=>{S.addEventListener("click",L=>{const R=parseInt(L.currentTarget.getAttribute("data-amt")||"20000");this.aiSelectedPrincipal=R,this.renderAiRiskTab(e)})});const w=e.querySelector("#ai-project-picker");w==null||w.addEventListener("change",S=>{this.aiSelectedProjectId=S.target.value,this.renderAiRiskTab(e)});const k=e.querySelector("#ai-flood-risk-select");k==null||k.addEventListener("change",S=>{this.aiFloodRiskLevel=S.target.value,this.aiActivePreset="custom",this.renderAiRiskTab(e)});const B=e.querySelector("#ai-ndvi-slider");B==null||B.addEventListener("input",S=>{this.aiNdviIndex=parseFloat(S.target.value),this.aiActivePreset="custom";const L=e.querySelector("#ai-ndvi-val-display");L&&(L.textContent=`${this.aiNdviIndex} NDVI (${this.aiNdviIndex>=.84?"Optimal Greenery":this.aiNdviIndex>=.7?"Healthy":"Dry/Stressed"})`)}),B==null||B.addEventListener("change",()=>{this.renderAiRiskTab(e)});const b=e.querySelector("#ai-volatility-select");b==null||b.addEventListener("change",S=>{this.aiMandiVolatility=S.target.value,this.aiActivePreset="custom",this.renderAiRiskTab(e)});const D=e.querySelector("#ai-coop-select");D==null||D.addEventListener("change",S=>{this.aiCoopRating=S.target.value,this.aiActivePreset="custom",this.renderAiRiskTab(e)}),(T=e.querySelector("#btn-run-ai-simulation"))==null||T.addEventListener("click",()=>{this.runAiSimulation(e)}),(E=e.querySelector("#btn-ai-invest-direct"))==null||E.addEventListener("click",()=>{this.openInvestmentPaymentModal(a,1)}),(P=e.querySelector("#btn-ai-download-dossier"))==null||P.addEventListener("click",()=>{this.showToastNotification(`📄 AI Risk & Pre-Investment Dossier for ${a.name} downloaded.`)})}runAiSimulation(e){this.isAiSimulating=!0,this.aiSimulationStep=1,this.renderAiRiskTab(e);const t=setInterval(()=>{this.aiSimulationStep++;const a=document.getElementById("dash-dynamic-content");a&&this.currentTab==="airisk"&&a.querySelectorAll(".sim-step").forEach((r,n)=>{if(n<this.aiSimulationStep){r.classList.add("step-done");const o=r.querySelector("span:first-child");o&&(o.textContent="✓")}}),this.aiSimulationStep>4&&(clearInterval(t),this.isAiSimulating=!1,a&&this.currentTab==="airisk"&&this.renderAiRiskTab(a),this.showToastNotification("⚡ Krishi-AI Risk Inference completed successfully!"))},450)}renderSettingsTab(e){const t=this.investorProfileSettings;e.innerHTML=`
      <div class="settings-view-container">
        <!-- 1. TOP PROFILE HEADER CARD (INVESTOR WORKFLOW WITH BANGLADESHI PHOTO) -->
        <div class="settings-profile-header-card">
          <div class="settings-profile-left">
            <div class="settings-avatar-wrap">
              <img src="${t.avatar}" alt="${t.fullName}" class="settings-avatar-img" />
              <span class="settings-avatar-online" title="Verified Investor • Active Session"></span>
            </div>
            <div class="settings-profile-info">
              <div class="settings-name-row">
                <h2>${t.fullName}</h2>
                <span class="settings-badge-investor">VERIFIED INVESTOR</span>
                <span class="settings-badge-shariah">PREMIUM HALAL PARTNER</span>
              </div>
              <p class="settings-profile-title">${t.role}</p>
              <div class="settings-profile-meta">
                <span>📍 ${t.location}</span>
                <span>📅 Investor Since ${t.joinedDate}</span>
                <span>🆔 ${t.investorId}</span>
              </div>
            </div>
          </div>

          <button class="settings-btn-edit-profile" id="btn-settings-edit-profile">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <span>Edit Profile</span>
          </button>
        </div>

        <!-- 2. THREE INVESTOR KPI STATUS CARDS ROW -->
        <div class="settings-kpi-row">
          <!-- 1. Active Portfolio -->
          <div class="settings-kpi-card">
            <div class="kpi-icon-wrap icon-uptime">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.2">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </div>
            <div class="kpi-text-wrap">
              <span class="kpi-label">TOTAL CAPITAL INVESTED</span>
              <strong class="kpi-val">${t.totalCapitalInvested}</strong>
            </div>
          </div>

          <!-- 2. Halal Profit Earned -->
          <div class="settings-kpi-card">
            <div class="kpi-icon-wrap icon-health">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
            </div>
            <div class="kpi-text-wrap">
              <span class="kpi-label">ACCUMULATED HALAL PROFIT</span>
              <strong class="kpi-val">${t.totalProfitEarned}</strong>
            </div>
          </div>

          <!-- 3. Primary Payout Account -->
          <div class="settings-kpi-card">
            <div class="kpi-icon-wrap icon-approvals">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#047857" stroke-width="2.2">
                <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 7H3z"></path>
              </svg>
            </div>
            <div class="kpi-text-wrap">
              <span class="kpi-label">PRIMARY PAYOUT ACCOUNT</span>
              <strong class="kpi-val">${t.bankDetails.bankName.includes("IBBL")||t.bankDetails.bankName.includes("Islami")?"Islami Bank (IBBL)":t.bankDetails.bankName.split(" ")[0]}</strong>
            </div>
          </div>
        </div>

        <!-- 3. TWO-COLUMN MAIN SECTION -->
        <div class="settings-main-layout">
          <!-- LEFT COLUMN (~65%) -->
          <div class="settings-col-left">
            <!-- Card 1: Personal Information -->
            <div class="settings-panel-card">
              <div class="settings-panel-header">
                <h3>Personal Information (ব্যক্তিগত পরিচিতি)</h3>
                <button class="settings-btn-more" id="btn-personal-more" title="Edit Profile">⋮</button>
              </div>

              <div class="settings-personal-grid">
                <div class="settings-info-item">
                  <span class="lbl">FULL NAME</span>
                  <strong class="val">${t.fullName}</strong>
                </div>
                <div class="settings-info-item">
                  <span class="lbl">EMAIL ADDRESS</span>
                  <strong class="val">${t.email}</strong>
                </div>
                <div class="settings-info-item">
                  <span class="lbl">NATIONAL ID (NID)</span>
                  <strong class="val">${t.nid} <span style="font-size:0.7rem;color:#10B981;font-weight:700;">✓ Verified</span></strong>
                </div>
                <div class="settings-info-item">
                  <span class="lbl">MOBILE NUMBER</span>
                  <strong class="val">${t.phone}</strong>
                </div>
              </div>
            </div>

            <!-- Card 2: BANK ACCOUNT & PAYOUT DETAILS (CRITICAL INVESTOR FEATURE) -->
            <div class="settings-panel-card settings-bank-card">
              <div class="settings-panel-header">
                <div>
                  <div style="display:flex;align-items:center;gap:8px;">
                    <h3 style="margin:0;">Bank Account & Profit Payout Details (লভ্যাংশ বিতরণের ব্যাংক হিসাব)</h3>
                    <span class="badge-twofa-active" style="background:#DCFCE7;color:#065F46;border-color:#86EFAC;">✓ BEFTN & NPSB LINKED</span>
                  </div>
                  <p style="margin:4px 0 0;font-size:0.75rem;color:#64748B;">All seasonal harvest profits, halal dividends, and principal capital returns will be automatically wired to this account.</p>
                </div>
              </div>

              <div class="settings-bank-grid">
                <div class="settings-info-item">
                  <span class="lbl">BANK NAME (ব্যাংক)</span>
                  <strong class="val">${t.bankDetails.bankName}</strong>
                </div>
                <div class="settings-info-item">
                  <span class="lbl">BRANCH NAME (শাখা)</span>
                  <strong class="val">${t.bankDetails.branchName}</strong>
                </div>
                <div class="settings-info-item">
                  <span class="lbl">ACCOUNT HOLDER NAME (হিসাবধারী)</span>
                  <strong class="val">${t.bankDetails.accountHolder}</strong>
                </div>
                <div class="settings-info-item">
                  <span class="lbl">ACCOUNT NUMBER (হিসাব নম্বর)</span>
                  <strong class="val" style="font-family: monospace; letter-spacing: 0.05em; color: #02221A;">${t.bankDetails.accountNumber}</strong>
                </div>
                <div class="settings-info-item">
                  <span class="lbl">ROUTING NUMBER (রাউটিং নম্বর)</span>
                  <strong class="val" style="font-family: monospace;">${t.bankDetails.routingNumber}</strong>
                </div>
                <div class="settings-info-item">
                  <span class="lbl">ACCOUNT TYPE (হিসাবের ধরন)</span>
                  <strong class="val">${t.bankDetails.accountType}</strong>
                </div>
              </div>

              <!-- MFS Payout Alternative Strip -->
              <div class="settings-mfs-strip">
                <div class="mfs-item">
                  <span class="mfs-icon-bkash">bKash</span>
                  <div>
                    <span class="lbl">bKash Personal/Merchant</span>
                    <strong>${t.bankDetails.bkashNumber}</strong>
                  </div>
                </div>
                <div class="mfs-item">
                  <span class="mfs-icon-nagad">Nagad</span>
                  <div>
                    <span class="lbl">Nagad Wallet</span>
                    <strong>${t.bankDetails.nagadNumber}</strong>
                  </div>
                </div>
              </div>

              <div class="settings-bank-footer-bar">
                <div style="font-size:0.75rem;color:#475569;">
                  <strong>Payout Routing:</strong> ${t.bankDetails.payoutPreference}
                </div>
                <button class="settings-btn-edit-bank" id="btn-settings-edit-bank">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                  <span>Update Bank & Payout Details (ব্যাংক তথ্য পরিবর্তন)</span>
                </button>
              </div>
            </div>

            <!-- Card 3: Visual Identity Sub-panel -->
            <div class="settings-panel-card">
              <div class="settings-visual-identity-box" style="margin-top:0;">
                <div class="visual-identity-header">
                  <div class="visual-id-icon">🎨</div>
                  <div>
                    <h4>Visual Identity</h4>
                    <p>Switch between dark and light themes to enhance your viewing comfort in any lighting.</p>
                  </div>
                </div>

                <div class="theme-selection-row">
                  <!-- Light Mode Box -->
                  <div class="theme-select-card ${t.activeTheme==="light"?"active":""}" id="theme-card-light" data-theme="light">
                    <div class="theme-preview-wireframe light-wireframe">
                      <div class="wire-topbar"></div>
                      <div class="wire-body">
                        <div class="wire-sidebar"></div>
                        <div class="wire-content">
                          <div class="wire-card"></div>
                          <div class="wire-card"></div>
                        </div>
                      </div>
                    </div>
                    <span class="theme-select-label">Light Mode</span>
                  </div>

                  <!-- Dark Mode (Active) Box -->
                  <div class="theme-select-card ${t.activeTheme==="dark"?"active":""}" id="theme-card-dark" data-theme="dark">
                    <div class="theme-preview-wireframe dark-wireframe">
                      <div class="wire-topbar"></div>
                      <div class="wire-body">
                        <div class="wire-sidebar"></div>
                        <div class="wire-content">
                          <div class="wire-card"></div>
                          <div class="wire-card"></div>
                        </div>
                      </div>
                    </div>
                    <span class="theme-select-label">Dark Mode (Active)</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card 4: Security & Access -->
            <div class="settings-panel-card">
              <div class="settings-panel-header">
                <h3>Security & Access</h3>
              </div>

              <!-- 2-Step Verification Box -->
              <div class="settings-2fa-strip">
                <div class="twofa-left">
                  <div class="twofa-shield-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong>2-Step Verification</strong>
                    <p>Your investor account and financial transactions are protected by SMS OTP authentication.</p>
                  </div>
                </div>
                <span class="badge-twofa-active">ACTIVE</span>
              </div>

              <!-- Active Sessions -->
              <div class="settings-sessions-wrap">
                <h4>Active Sessions</h4>
                <div id="settings-sessions-container">
                  ${t.sessions.map(a=>`
                    <div class="session-item-row" data-session-id="${a.id}">
                      <div class="session-left">
                        <div class="session-icon-wrap">
                          ${a.icon==="laptop"?`
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="2">
                              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                              <line x1="8" y1="21" x2="16" y2="21"></line>
                              <line x1="12" y1="17" x2="12" y2="21"></line>
                            </svg>
                          `:`
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="2">
                              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                              <line x1="12" y1="18" x2="12.01" y2="18"></line>
                            </svg>
                          `}
                        </div>
                        <div>
                          <strong>${a.device}</strong>
                          <span>${a.location}</span>
                        </div>
                      </div>
                      <button class="btn-session-revoke" data-action="revoke-session" data-session-id="${a.id}">Revoke</button>
                    </div>
                  `).join("")}
                </div>
              </div>

              <!-- Password Management -->
              <div class="settings-password-strip">
                <div>
                  <strong>Password Management</strong>
                  <span>Last updated 45 days ago</span>
                </div>
                <button class="btn-change-password" id="btn-settings-change-password">Change Password</button>
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN (~35%) -->
          <div class="settings-col-right">
            <!-- Activity Log Card (INVESTOR ACTIVITY) -->
            <div class="settings-panel-card">
              <div class="settings-panel-header">
                <h3>Investor Activity Log</h3>
                <a href="#" class="settings-view-all-link" id="link-settings-view-all">View All</a>
              </div>

              <div class="settings-activity-stream">
                <!-- Item 1: Green checkmark -->
                <div class="settings-stream-item">
                  <div class="stream-icon-wrap icon-green-check">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div class="stream-body">
                    <strong>Halal Dividend Deposited to Bank</strong>
                    <p>৳ 38,400 credited to ${t.bankDetails.bankName} (A/C: ...${t.bankDetails.accountNumber.slice(-4)})</p>
                    <span class="stream-timestamp">TODAY AT 11:24 AM</span>
                  </div>
                </div>

                <!-- Item 2: Green sync -->
                <div class="settings-stream-item">
                  <div class="stream-icon-wrap icon-green-sync">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="23 4 23 10 17 10"></polyline>
                      <polyline points="1 20 1 14 7 14"></polyline>
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                    </svg>
                  </div>
                  <div class="stream-body">
                    <strong>Capital Investment Committed</strong>
                    <p>৳ 1,00,000 in Bogura Mustard & Honey Collective</p>
                    <span class="stream-timestamp">YESTERDAY AT 4:30 PM</span>
                  </div>
                </div>

                <!-- Item 3: Orange alert -->
                <div class="settings-stream-item">
                  <div class="stream-icon-wrap icon-orange-alert">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <div class="stream-body">
                    <strong>Field IoT Telemetry Verified</strong>
                    <p>Sensor #RG-402 reported optimal moisture in Dinajpur Rice</p>
                    <span class="stream-timestamp">3 DAYS AGO</span>
                  </div>
                </div>

                <!-- Item 4: Gray user -->
                <div class="settings-stream-item">
                  <div class="stream-icon-wrap icon-gray-user">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <div class="stream-body">
                    <strong>Quarterly Shariah Compliance Audit Passed</strong>
                    <p>100% Halal Certificate renewed by Advisory Council</p>
                    <span class="stream-timestamp">AUG 14, 2026</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Shariah Governance & Escrow Card -->
            <div class="settings-panel-card" style="background: linear-gradient(135deg, #02221A 0%, #064E3B 100%); color: #FFFFFF; border: none;">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
                <span style="font-size:1.4rem;">🏛️</span>
                <div>
                  <h4 style="margin:0;color:#FFFFFF;font-size:0.95rem;">Bangladesh Bank Escrow Guarantee</h4>
                  <span style="font-size:0.7rem;color:#A7F3D0;">BB-REG-SHARIAH-2026</span>
                </div>
              </div>
              <p style="font-size:0.775rem;line-height:1.5;color:#D1FAE5;margin:0 0 14px;">Your capital and profit distributions are strictly supervised under Islamic Mudarabah principles. All bank transactions are cleared via Bangladesh Bank electronic clearing (BEFTN/NPSB).</p>
              <div style="display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid rgba(255,255,255,0.2);font-size:0.725rem;color:#A7F3D0;">
                <span>Priority Investor Desk</span>
                <strong style="color:#FFF;">📞 +880 9612-472622</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.setupSettingsTabEvents(e)}setupSettingsTabEvents(e){var t,a,i,r,n,o,s;(t=e.querySelector("#btn-settings-edit-profile"))==null||t.addEventListener("click",()=>{this.openEditProfileModal(e)}),(a=e.querySelector("#btn-personal-more"))==null||a.addEventListener("click",()=>{this.openEditProfileModal(e)}),(i=e.querySelector("#btn-settings-edit-bank"))==null||i.addEventListener("click",()=>{this.openEditBankModal(e)}),(r=e.querySelector("#theme-card-light"))==null||r.addEventListener("click",()=>{this.investorProfileSettings.activeTheme="light",this.showToastNotification("☀️ Switched visual identity to Light Mode"),this.renderSettingsTab(e)}),(n=e.querySelector("#theme-card-dark"))==null||n.addEventListener("click",()=>{this.investorProfileSettings.activeTheme="dark",this.showToastNotification("🌙 Switched visual identity to Dark Mode (Active)"),this.renderSettingsTab(e)}),e.querySelectorAll('[data-action="revoke-session"]').forEach(l=>{l.addEventListener("click",()=>{const c=l.getAttribute("data-session-id");this.investorProfileSettings.sessions=this.investorProfileSettings.sessions.filter(d=>d.id!==c),this.showToastNotification("🔒 Session revoked. The device has been logged out."),this.renderSettingsTab(e)})}),(o=e.querySelector("#btn-settings-change-password"))==null||o.addEventListener("click",()=>{this.openChangePasswordModal()}),(s=e.querySelector("#link-settings-view-all"))==null||s.addEventListener("click",l=>{l.preventDefault(),this.switchTab("dashboard"),this.showToastNotification("Showing full verified ledger & activity history.")})}openEditBankModal(e){var r,n,o;let t=document.getElementById("settings-edit-bank-modal");t||(t=document.createElement("div"),t.id="settings-edit-bank-modal",t.className="project-question-modal-overlay",document.body.appendChild(t));const a=this.investorProfileSettings.bankDetails;t.innerHTML=`
      <div class="project-question-dialog" style="max-width: 580px;">
        <div class="pq-header">
          <div class="pq-title-wrap">
            <span class="pq-tag" style="background:#E8F5EF;color:#047857;">🏦 PAYOUT & ESCROW SETTINGS</span>
            <h3 style="margin:4px 0 0;">Update Bank & Payout Information (ব্যাংক তথ্য পরিবর্তন)</h3>
          </div>
          <button class="pq-close-btn" id="btn-close-edit-bank">✕</button>
        </div>

        <div class="pq-body">
          <p style="font-size:0.8rem;color:#64748B;margin-top:0;margin-bottom:14px;">
            Please ensure your account details match your official National ID (${this.investorProfileSettings.nid}). All harvest profits and capital returns will be electronically cleared via BEFTN/NPSB.
          </p>

          <div style="display:flex;flex-direction:column;gap:12px;">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">Bank Name (ব্যাংক)</label>
                <select id="edit-bank-name" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;background:#FFF;">
                  <option value="Islami Bank Bangladesh Ltd (IBBL)" ${a.bankName.includes("IBBL")||a.bankName.includes("Islami")?"selected":""}>Islami Bank Bangladesh Ltd (IBBL)</option>
                  <option value="BRAC Bank Ltd" ${a.bankName.includes("BRAC")?"selected":""}>BRAC Bank Ltd</option>
                  <option value="City Bank Islamic (City Alo/Manarah)" ${a.bankName.includes("City")?"selected":""}>City Bank Islamic</option>
                  <option value="Dutch-Bangla Bank Ltd (DBBL)" ${a.bankName.includes("Dutch")?"selected":""}>Dutch-Bangla Bank Ltd</option>
                  <option value="Eastern Bank Ltd (EBL)" ${a.bankName.includes("Eastern")?"selected":""}>Eastern Bank Ltd (EBL)</option>
                  <option value="Dhaka Bank Ltd" ${a.bankName.includes("Dhaka")?"selected":""}>Dhaka Bank Ltd</option>
                  <option value="Standard Chartered Bangladesh" ${a.bankName.includes("Standard")?"selected":""}>Standard Chartered Bangladesh</option>
                </select>
              </div>

              <div>
                <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">Branch Name (শাখা)</label>
                <input type="text" id="edit-bank-branch" value="${a.branchName}" placeholder="e.g. Gulshan Circle-2 Branch, Dhaka" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;" />
              </div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">Account Holder Name (হিসাবধারী)</label>
                <input type="text" id="edit-bank-holder" value="${a.accountHolder}" placeholder="Full Name as in Bank" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;" />
              </div>

              <div>
                <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">Account Number (হিসাব নম্বর)</label>
                <input type="text" id="edit-bank-accnum" value="${a.accountNumber}" placeholder="e.g. 2050 1480 2019 4821" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;font-family:monospace;" />
              </div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">Routing Number (রাউটিং নম্বর - 9 Digits)</label>
                <input type="text" id="edit-bank-routing" value="${a.routingNumber}" maxlength="9" placeholder="e.g. 125272648" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;font-family:monospace;" />
              </div>

              <div>
                <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">Account Type (হিসাবের ধরন)</label>
                <select id="edit-bank-type" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;background:#FFF;">
                  <option value="Mudarabah Profit-Sharing Savings Account" ${a.accountType.includes("Mudarabah")?"selected":""}>Mudarabah Profit-Sharing Savings Account</option>
                  <option value="Current Deposit Account" ${a.accountType.includes("Current")?"selected":""}>Current Deposit Account</option>
                  <option value="Special Notice Deposit (SND)" ${a.accountType.includes("Notice")?"selected":""}>Special Notice Deposit (SND)</option>
                </select>
              </div>
            </div>

            <!-- MFS Alternative Numbers -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:4px;padding-top:12px;border-top:1px solid #E2E8F0;">
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">bKash Number (বিকাশ মোবাইল)</label>
                <input type="tel" id="edit-bank-bkash" value="${a.bkashNumber}" placeholder="017XXXXXXXX" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;" />
              </div>

              <div>
                <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">Nagad Number (নগদ মোবাইল)</label>
                <input type="tel" id="edit-bank-nagad" value="${a.nagadNumber}" placeholder="017XXXXXXXX" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;" />
              </div>
            </div>

            <div>
              <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">Preferred Payout Channel (পছন্দের মাধ্যম)</label>
              <select id="edit-bank-pref" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;background:#FFF;">
                <option value="Bank Transfer (BEFTN / NPSB Electronic Clearing)" ${a.payoutPreference.includes("Bank")?"selected":""}>Bank Transfer (Direct BEFTN / NPSB Electronic Clearing)</option>
                <option value="bKash Wallet" ${a.payoutPreference.includes("bKash")?"selected":""}>bKash Wallet (Personal/Merchant)</option>
                <option value="Nagad Wallet" ${a.payoutPreference.includes("Nagad")?"selected":""}>Nagad Wallet</option>
              </select>
            </div>
          </div>
        </div>

        <div class="pq-footer">
          <button type="button" class="btn-pq-cancel" id="btn-cancel-edit-bank">Cancel</button>
          <button type="button" class="btn-pq-submit" id="btn-save-edit-bank">Save Bank & Payout Details</button>
        </div>
      </div>
    `,t.classList.add("active"),document.body.style.overflow="hidden";const i=()=>{t==null||t.classList.remove("active"),document.body.style.overflow=""};(r=t.querySelector("#btn-close-edit-bank"))==null||r.addEventListener("click",i),(n=t.querySelector("#btn-cancel-edit-bank"))==null||n.addEventListener("click",i),(o=t.querySelector("#btn-save-edit-bank"))==null||o.addEventListener("click",()=>{const s=t==null?void 0:t.querySelector("#edit-bank-name"),l=t==null?void 0:t.querySelector("#edit-bank-branch"),c=t==null?void 0:t.querySelector("#edit-bank-holder"),d=t==null?void 0:t.querySelector("#edit-bank-accnum"),p=t==null?void 0:t.querySelector("#edit-bank-routing"),g=t==null?void 0:t.querySelector("#edit-bank-type"),u=t==null?void 0:t.querySelector("#edit-bank-bkash"),h=t==null?void 0:t.querySelector("#edit-bank-nagad"),v=t==null?void 0:t.querySelector("#edit-bank-pref");s&&(a.bankName=s.value),l&&(a.branchName=l.value.trim()||a.branchName),c&&(a.accountHolder=c.value.trim()||a.accountHolder),d&&(a.accountNumber=d.value.trim()||a.accountNumber),p&&(a.routingNumber=p.value.trim()||a.routingNumber),g&&(a.accountType=g.value),u&&(a.bkashNumber=u.value.trim()||a.bkashNumber),h&&(a.nagadNumber=h.value.trim()||a.nagadNumber),v&&(a.payoutPreference=v.value);try{localStorage.setItem("gb_investor_bank_settings",JSON.stringify(a))}catch(C){console.error(C)}I.unshift({id:"act-"+Date.now(),description:`Updated Payout Bank Account to ${a.bankName} (${a.branchName})`,division:"Dhaka",status:"LIVE",timestamp:"Just now"}),i(),this.showToastNotification("✓ Bank & Payout account details updated successfully! Future harvest distributions will route to this account."),this.renderSettingsTab(e)}),t.addEventListener("click",s=>{s.target===t&&i()})}openEditProfileModal(e){var r,n,o;let t=document.getElementById("settings-edit-profile-modal");t||(t=document.createElement("div"),t.id="settings-edit-profile-modal",t.className="project-question-modal-overlay",document.body.appendChild(t));const a=this.investorProfileSettings;t.innerHTML=`
      <div class="project-question-dialog" style="max-width: 520px;">
        <div class="pq-header">
          <div class="pq-title-wrap">
            <span class="pq-tag">⚙️ PROFILE MANAGEMENT</span>
            <h3>Edit Account & Investor Profile</h3>
          </div>
          <button class="pq-close-btn" id="btn-close-edit-prof">✕</button>
        </div>

        <div class="pq-body">
          <div style="display:flex;flex-direction:column;gap:14px;">
            <div>
              <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">Full Name</label>
              <input type="text" id="edit-prof-name" value="${a.fullName}" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;" />
            </div>
            <div>
              <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">Email Address</label>
              <input type="email" id="edit-prof-email" value="${a.email}" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;" />
            </div>
            <div>
              <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">National ID (NID)</label>
              <input type="text" id="edit-prof-nid" value="${a.nid}" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;" />
            </div>
            <div>
              <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">Mobile Phone</label>
              <input type="text" id="edit-prof-phone" value="${a.phone}" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;" />
            </div>
            <div>
              <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">Role & Investor Designation</label>
              <input type="text" id="edit-prof-role" value="${a.role}" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;" />
            </div>
            <div>
              <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">Location</label>
              <input type="text" id="edit-prof-loc" value="${a.location}" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;" />
            </div>
          </div>
        </div>

        <div class="pq-footer">
          <button type="button" class="btn-pq-cancel" id="btn-cancel-edit-prof">Cancel</button>
          <button type="button" class="btn-pq-submit" id="btn-save-edit-prof">Save Changes</button>
        </div>
      </div>
    `,t.classList.add("active"),document.body.style.overflow="hidden";const i=()=>{t==null||t.classList.remove("active"),document.body.style.overflow=""};(r=t.querySelector("#btn-close-edit-prof"))==null||r.addEventListener("click",i),(n=t.querySelector("#btn-cancel-edit-prof"))==null||n.addEventListener("click",i),(o=t.querySelector("#btn-save-edit-prof"))==null||o.addEventListener("click",()=>{const s=t==null?void 0:t.querySelector("#edit-prof-name"),l=t==null?void 0:t.querySelector("#edit-prof-email"),c=t==null?void 0:t.querySelector("#edit-prof-nid"),d=t==null?void 0:t.querySelector("#edit-prof-phone"),p=t==null?void 0:t.querySelector("#edit-prof-role"),g=t==null?void 0:t.querySelector("#edit-prof-loc");s&&(a.fullName=s.value.trim()||a.fullName),l&&(a.email=l.value.trim()||a.email),c&&(a.nid=c.value.trim()||a.nid),d&&(a.phone=d.value.trim()||a.phone),p&&(a.role=p.value.trim()||a.role),g&&(a.location=g.value.trim()||a.location),i(),this.showToastNotification("✓ Profile information updated successfully!"),this.renderSettingsTab(e)}),t.addEventListener("click",s=>{s.target===t&&i()})}openChangePasswordModal(){var a,i,r;let e=document.getElementById("settings-password-modal");e||(e=document.createElement("div"),e.id="settings-password-modal",e.className="project-question-modal-overlay",document.body.appendChild(e)),e.innerHTML=`
      <div class="project-question-dialog" style="max-width: 480px;">
        <div class="pq-header">
          <div class="pq-title-wrap">
            <span class="pq-tag">🔒 SECURITY</span>
            <h3>Change Account Password</h3>
          </div>
          <button class="pq-close-btn" id="btn-close-pass-modal">✕</button>
        </div>

        <div class="pq-body">
          <div style="display:flex;flex-direction:column;gap:14px;">
            <div>
              <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">Current Password</label>
              <input type="password" value="••••••••••••" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;" />
            </div>
            <div>
              <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">New Password</label>
              <input type="password" placeholder="Min. 8 characters with numbers & symbols" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;" />
            </div>
            <div>
              <label style="font-size:0.75rem;font-weight:700;color:#02221A;display:block;margin-bottom:4px;">Confirm New Password</label>
              <input type="password" placeholder="Repeat new password" style="width:100%;padding:9px 12px;border:1px solid #CBD5E1;border-radius:6px;font-size:0.85rem;" />
            </div>
          </div>
        </div>

        <div class="pq-footer">
          <button type="button" class="btn-pq-cancel" id="btn-cancel-pass-modal">Cancel</button>
          <button type="button" class="btn-pq-submit" id="btn-save-pass-modal">Update Password</button>
        </div>
      </div>
    `,e.classList.add("active"),document.body.style.overflow="hidden";const t=()=>{e==null||e.classList.remove("active"),document.body.style.overflow=""};(a=e.querySelector("#btn-close-pass-modal"))==null||a.addEventListener("click",t),(i=e.querySelector("#btn-cancel-pass-modal"))==null||i.addEventListener("click",t),(r=e.querySelector("#btn-save-pass-modal"))==null||r.addEventListener("click",()=>{t(),this.showToastNotification("🔒 Password updated successfully! Next login requires new credentials.")}),e.addEventListener("click",n=>{n.target===e&&t()})}loadSavedBankSettings(){try{const e=localStorage.getItem("gb_investor_bank_settings");if(e){const t=JSON.parse(e);this.investorProfileSettings.bankDetails={...this.investorProfileSettings.bankDetails,...t}}}catch(e){console.error("Failed to restore bank details",e)}}setupInvestmentPaymentEventListener(){window.addEventListener("grambandhan:open-invest-payment",e=>{const t=e,{projectId:a,units:i}=t.detail||{};this.openInvestmentPaymentModal(a,i||1)})}openInvestmentPaymentModal(e,t=1){var p;let a;typeof e=="string"?(a=N.find(g=>g.id===e),!a&&this.projectsController&&(a=(p=this.projectsController.allProjects)==null?void 0:p.find(g=>g.id===e))):a=e,a||(a=N[0]);let i=document.getElementById("grambandhan-invest-payment-modal");i||(i=document.createElement("div"),i.id="grambandhan-invest-payment-modal",i.className="invest-payment-modal-overlay",document.body.appendChild(i));let r=Math.max(1,t||1),n="bkash";const o=this.investorProfileSettings,s=a.minInvestmentBDT||25e3,l=a.returnRangePercent?a.returnRangePercent[1]:18.5,c=()=>{var h,v,C,w,k;const g=r*s,u=Math.round(g*(l/100));i&&(i.innerHTML=`
        <div class="invest-payment-dialog">
          <!-- Top Header -->
          <div class="ip-header">
            <div class="ip-title-wrap">
              <span class="ip-tag">🌿 SHARIAH MUDARABAH INVESTMENT</span>
              <h3>Choose Payment Method (বিনিয়োগের মাধ্যম নির্বাচন)</h3>
              <p>Select your payment channel to invest in <strong>${a.name}</strong>.</p>
            </div>
            <button class="ip-close-btn" id="btn-close-payment-modal">✕</button>
          </div>

          <div class="ip-body">
            <!-- 1. Project & Units Stepper Box -->
            <div class="ip-project-summary-card">
              <div class="ip-project-thumb-wrap">
                <img src="${a.image}" alt="${a.name}" class="ip-project-thumb" />
              </div>
              <div class="ip-project-meta">
                <div class="ip-proj-name">${a.name}</div>
                <div class="ip-proj-bengali">${a.bengaliName} • 📍 ${a.district}</div>
                <div class="ip-proj-tags">
                  <span class="ip-pill-cat">${a.category.toUpperCase()}</span>
                  <span class="ip-pill-roi">+${l}% Return</span>
                  <span class="ip-pill-dur">${a.duration}</span>
                </div>
              </div>
            </div>

            <!-- Units Stepper Strip -->
            <div class="ip-stepper-strip">
              <div class="ip-stepper-label">
                <strong>Investment Units:</strong>
                <span>৳ ${s.toLocaleString()} BDT per unit</span>
              </div>
              <div class="ip-stepper-controls">
                <button type="button" class="ip-step-btn" id="btn-ip-minus" ${r<=1?"disabled":""}>−</button>
                <span class="ip-step-val">${r} Unit${r>1?"s":""}</span>
                <button type="button" class="ip-step-btn" id="btn-ip-plus">+</button>
              </div>
              <div class="ip-total-pay-badge">
                <span class="lbl">Total Payable</span>
                <strong class="val">৳ ${g.toLocaleString()} BDT</strong>
              </div>
            </div>

            <!-- Projected Halal Profit Strip -->
            <div class="ip-profit-highlight-bar">
              <div style="display:flex;align-items:center;gap:8px;">
                <span>📈</span>
                <span>Expected Halal Profit (+${l}%):</span>
              </div>
              <strong>৳ ${u.toLocaleString()} BDT (Total: ৳ ${(g+u).toLocaleString()} BDT)</strong>
            </div>

            <!-- 2. PAYMENT METHODS SELECTOR (bKash, Nagad, Bank Transfer) -->
            <div class="ip-methods-section">
              <div class="ip-section-title">Select Payment Channel (পেমেন্ট পদ্ধতি নির্বাচন করুন)</div>
              <div class="ip-method-cards-grid">
                <!-- Option 1: bKash -->
                <button type="button" class="ip-method-tab ${n==="bkash"?"active active-bkash":""}" data-pay-method="bkash">
                  <div class="ip-method-icon ip-icon-bkash">
                    <span>bKash</span>
                  </div>
                  <div class="ip-method-name">bKash (বিকাশ)</div>
                  <div class="ip-method-sub">Instant Mobile Payment</div>
                </button>

                <!-- Option 2: Nagad -->
                <button type="button" class="ip-method-tab ${n==="nagad"?"active active-nagad":""}" data-pay-method="nagad">
                  <div class="ip-method-icon ip-icon-nagad">
                    <span>Nagad</span>
                  </div>
                  <div class="ip-method-name">Nagad (নগদ)</div>
                  <div class="ip-method-sub">Instant Mobile Payment</div>
                </button>

                <!-- Option 3: Bank Transfer -->
                <button type="button" class="ip-method-tab ${n==="bank"?"active active-bank":""}" data-pay-method="bank">
                  <div class="ip-method-icon ip-icon-bank">
                    <span>🏛️ Bank</span>
                  </div>
                  <div class="ip-method-name">Bank Transfer (ব্যাংক)</div>
                  <div class="ip-method-sub">Direct BEFTN / NPSB</div>
                </button>
              </div>
            </div>

            <!-- 3. SELECTED PAYMENT FORM & INSTRUCTIONS -->
            <div class="ip-gateway-form-wrap">
              ${n==="bkash"?`
                <div class="ip-gateway-details gateway-bkash">
                  <div class="ip-merchant-box bkash-merchant-box">
                    <div class="ip-box-header">
                      <span class="badge-merchant">bKash Official Escrow Merchant</span>
                      <strong>Merchant Number: 01700-112233</strong>
                    </div>
                    <ol class="ip-steps-list">
                      <li>Open your <strong>bKash App</strong> or dial <code>*247#</code></li>
                      <li>Select <strong>"Make Payment" (পেমেন্ট করুন)</strong></li>
                      <li>Enter Merchant Account: <strong>01700-112233</strong></li>
                      <li>Enter Amount: <strong>৳ ${g.toLocaleString()} BDT</strong> (Reference: <code>GB-${a.id}</code>)</li>
                      <li>Enter your bKash PIN to confirm transaction</li>
                    </ol>
                  </div>

                  <div class="ip-form-grid">
                    <div>
                      <label class="ip-field-lbl">Your bKash Mobile Number</label>
                      <input type="tel" id="pay-sender-phone" value="${o.bankDetails.bkashNumber||o.phone}" placeholder="017XXXXXXXX" class="ip-input" />
                    </div>
                    <div>
                      <label class="ip-field-lbl">bKash Transaction ID (TrxID)</label>
                      <input type="text" id="pay-trxid" placeholder="e.g. BL82X901QA (from bKash SMS)" class="ip-input ip-input-mono" />
                    </div>
                  </div>
                </div>
              `:""}

              ${n==="nagad"?`
                <div class="ip-gateway-details gateway-nagad">
                  <div class="ip-merchant-box nagad-merchant-box">
                    <div class="ip-box-header">
                      <span class="badge-merchant" style="background:#FFF3E0;color:#E65100;">Nagad Official Escrow Merchant</span>
                      <strong>Merchant Number: 01800-445566</strong>
                    </div>
                    <ol class="ip-steps-list">
                      <li>Open your <strong>Nagad App</strong> or dial <code>*167#</code></li>
                      <li>Select <strong>"Merchant Pay" (মার্চেন্ট পে)</strong></li>
                      <li>Enter Merchant Account: <strong>01800-445566</strong></li>
                      <li>Enter Amount: <strong>৳ ${g.toLocaleString()} BDT</strong> (Reference: <code>GB-${a.id}</code>)</li>
                      <li>Enter your Nagad PIN to confirm transaction</li>
                    </ol>
                  </div>

                  <div class="ip-form-grid">
                    <div>
                      <label class="ip-field-lbl">Your Nagad Mobile Number</label>
                      <input type="tel" id="pay-sender-phone" value="${o.bankDetails.nagadNumber||o.phone}" placeholder="017XXXXXXXX" class="ip-input" />
                    </div>
                    <div>
                      <label class="ip-field-lbl">Nagad Transaction ID (TrxID)</label>
                      <input type="text" id="pay-trxid" placeholder="e.g. NG9412B710" class="ip-input ip-input-mono" />
                    </div>
                  </div>
                </div>
              `:""}

              ${n==="bank"?`
                <div class="ip-gateway-details gateway-bank">
                  <div class="ip-merchant-box bank-merchant-box">
                    <div class="ip-box-header">
                      <span class="badge-merchant" style="background:#E8F5EF;color:#047857;">GramBandhan Shariah Agro Escrow Fund</span>
                      <strong>Bank: Islami Bank Bangladesh Ltd (IBBL)</strong>
                    </div>
                    <div class="ip-escrow-bank-table">
                      <div class="row"><span>Account Name:</span><strong>GramBandhan Agro Shariah Escrow Fund Ltd</strong></div>
                      <div class="row"><span>Account Number:</span><strong style="font-family:monospace;letter-spacing:0.05em;">2050 7710 8899 001</strong></div>
                      <div class="row"><span>Branch:</span><strong>Gulshan Corporate Branch, Dhaka</strong></div>
                      <div class="row"><span>Routing Number:</span><strong style="font-family:monospace;">125272648</strong></div>
                      <div class="row"><span>Electronic Clearing:</span><span>Accepted via BEFTN, NPSB, RTGS, or Direct Bank Transfer</span></div>
                    </div>

                    <!-- Investor Registered Payout Bank Alert -->
                    <div class="ip-registered-payout-note">
                      <span>ℹ️ <strong>Registered Payout Bank:</strong> Seasonal returns and principal capital will route back to your verified account: <em>${o.bankDetails.bankName}</em> (A/C: ${o.bankDetails.accountNumber}, Branch: ${o.bankDetails.branchName}).</span>
                    </div>
                  </div>

                  <div class="ip-form-grid" style="grid-template-columns:1fr 1fr;">
                    <div>
                      <label class="ip-field-lbl">Your Bank & Branch Name</label>
                      <input type="text" id="pay-sender-bank" value="${o.bankDetails.bankName}, ${o.bankDetails.branchName}" class="ip-input" />
                    </div>
                    <div>
                      <label class="ip-field-lbl">Your Sender Account Number</label>
                      <input type="text" id="pay-sender-acc" value="${o.bankDetails.accountNumber}" class="ip-input ip-input-mono" />
                    </div>
                  </div>

                  <div style="margin-top:10px;">
                    <label class="ip-field-lbl">Bank Transfer Reference / Deposit Slip No. / TrxID</label>
                    <input type="text" id="pay-trxid" placeholder="e.g. FT-IBBL-2026-9921 or Deposit Slip #4812" class="ip-input ip-input-mono" />
                  </div>
                </div>
              `:""}
            </div>

            <!-- Shariah Governance Checkbox -->
            <div class="ip-terms-strip">
              <label class="ip-checkbox-label">
                <input type="checkbox" id="pay-agree-terms" checked />
                <span>I agree to the Mudarabah profit/loss sharing terms (65% Investor / 35% Farmer) under the supervision of the Bangladesh Shariah Advisory Council. Capital is protected in a Bangladesh Bank regulated escrow account.</span>
              </label>
            </div>
          </div>

          <!-- Modal Footer with Confirm Action -->
          <div class="ip-footer">
            <button type="button" class="btn-ip-cancel" id="btn-cancel-payment">Cancel</button>
            <button type="button" class="btn-ip-confirm" id="btn-submit-payment">
              Confirm & Complete Investment (৳ ${g.toLocaleString()} BDT জমা দিন) →
            </button>
          </div>
        </div>
      `,(h=i.querySelector("#btn-close-payment-modal"))==null||h.addEventListener("click",d),(v=i.querySelector("#btn-cancel-payment"))==null||v.addEventListener("click",d),(C=i.querySelector("#btn-ip-minus"))==null||C.addEventListener("click",()=>{r>1&&(r--,c())}),(w=i.querySelector("#btn-ip-plus"))==null||w.addEventListener("click",()=>{r++,c()}),i.querySelectorAll("[data-pay-method]").forEach(B=>{B.addEventListener("click",()=>{const b=B.getAttribute("data-pay-method");b&&(n=b,c())})}),(k=i.querySelector("#btn-submit-payment"))==null||k.addEventListener("click",()=>{const B=i==null?void 0:i.querySelector("#pay-agree-terms");if(B&&!B.checked){alert("Please accept the Shariah Mudarabah investment terms to proceed.");return}const b=i==null?void 0:i.querySelector("#pay-trxid"),D=b?b.value.trim():"";if(!D){b&&(b.style.borderColor="#EF4444",b.focus()),alert(n==="bank"?"Please enter your Bank Transfer Reference / Deposit Slip Number to verify your deposit.":`Please enter your ${n.toUpperCase()} Transaction ID (TrxID) to confirm your payment.`);return}if(this.stats.totalInvestmentBDT+g>5e5){const T=Math.max(0,5e5-this.stats.totalInvestmentBDT);alert(`⚠️ Investment Limit Reached: As per GramBandhan policy, your total active portfolio investments cannot exceed ৳ 5,00,000 BDT.

Currently Invested: ৳ ${this.stats.totalInvestmentBDT.toLocaleString()} BDT
Available Capacity: ৳ ${T.toLocaleString()} BDT

Please reduce your units.`);return}const y=i==null?void 0:i.querySelector("#btn-submit-payment");y&&(y.disabled=!0,y.innerHTML=`
            <span class="pay-verifying-spinner"></span>
            Verifying with ${n.toUpperCase()} Gateway...
          `),setTimeout(()=>{this.stats.totalInvestmentBDT+=g,this.stats.totalAccountBalanceBDT=Math.max(0,this.stats.totalAccountBalanceBDT-g),this.stats.recentProjectsCount+=1;const T=n==="bkash"?"bKash":n==="nagad"?"Nagad":"Islami Bank Transfer",E={id:"inv-rec-"+Date.now(),name:a.name,bengaliName:a.bengaliName||a.name,category:a.category,district:a.district||a.location,upazila:"Sadar",investedAmountBDT:g,expectedProfitBDT:u,status:"recent",statusLabel:"Funding Collection Phase",statusDescription:`Capital verified via ${T} (TrxID: ${D})`,startDate:"15 Nov 2026",expectedEndDate:"15 May 2027",image:a.image,progressPercent:10,roiPercentage:l,farmerName:a.farmerName||"Rural Cooperative Collective",contractType:"Mudarabah (65% / 35%)",fundingRaisedBDT:a.fundingRaisedBDT+g,fundingGoalBDT:a.fundingGoalBDT,fundingPercent:Math.min(100,Math.round((a.fundingRaisedBDT+g)/a.fundingGoalBDT*100)),daysLeftToClose:14};this.portfolioProjects.unshift(E),I.unshift({id:"act-"+Date.now(),description:`Invested ৳ ${g.toLocaleString()} in ${a.name} via ${T} (TrxID: ${D})`,division:a.district||"Dhaka",status:"LIVE",timestamp:"Just now"}),this.showToastNotification(`🎉 Investment Confirmed! ৳ ${g.toLocaleString()} BDT registered via ${T}.`),d(),this.openInvestmentCertificateModal({project:a,units:r,totalAmount:g,profit:u,roiPercentage:l,paymentMethod:T,trxId:D}),this.renderCurrentTabContent()},1200)}))};i.classList.add("active"),document.body.style.overflow="hidden";const d=()=>{i==null||i.classList.remove("active"),document.body.style.overflow=""};c(),i.addEventListener("click",g=>{g.target===i&&d()})}openInvestmentCertificateModal(e){var o,s,l;let t=document.getElementById("grambandhan-invest-cert-modal");t||(t=document.createElement("div"),t.id="grambandhan-invest-cert-modal",t.className="project-question-modal-overlay",document.body.appendChild(t));const a=this.investorProfileSettings,i="GB-CERT-"+Math.floor(1e5+Math.random()*9e5),r=new Date().toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});t.innerHTML=`
      <div class="project-question-dialog invest-certificate-dialog" style="max-width: 650px; padding: 0; overflow: hidden; border: 2px solid #10B981; border-radius: 16px;">
        <!-- Certificate Header -->
        <div style="background: linear-gradient(135deg, #02221A 0%, #064E3B 100%); color: #FFFFFF; padding: 24px 28px; text-align: center; position: relative;">
          <button class="pq-close-btn" id="btn-close-cert-modal" style="color: #FFF; position: absolute; top: 16px; right: 16px;">✕</button>
          <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(16,185,129,0.2);border:1px solid #10B981;padding:4px 14px;border-radius:20px;font-size:0.75rem;font-weight:800;letter-spacing:0.05em;color:#A7F3D0;margin-bottom:8px;">
            ✓ 100% SHARIAH COMPLIANT MUDARABAH ASSET
          </div>
          <h2 style="margin:4px 0;font-size:1.4rem;font-weight:800;letter-spacing:-0.02em;">Official Investment Share Certificate</h2>
          <p style="margin:0;font-size:0.8rem;color:#D1FAE5;">GramBandhan Rural Agri-FinTech Escrow Collective • Dhaka, Bangladesh</p>
        </div>

        <div style="padding: 24px 28px; background: #FFFFFF;">
          <!-- Meta Row -->
          <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:14px;border-bottom:1px dashed #CBD5E1;font-size:0.8rem;color:#64748B;">
            <div>
              <span>Certificate No: </span><strong style="color:#02221A;font-family:monospace;">${i}</strong>
            </div>
            <div>
              <span>Issued On: </span><strong style="color:#02221A;">${r}</strong>
            </div>
          </div>

          <!-- Certificate Core Details Grid -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:16px 0;background:#F8FAFC;padding:16px;border-radius:10px;border:1px solid #E2E8F0;">
            <div>
              <span style="font-size:0.7rem;font-weight:800;color:#64748B;display:block;">REGISTERED INVESTOR</span>
              <strong style="font-size:0.95rem;color:#02221A;">${a.fullName}</strong>
              <span style="font-size:0.75rem;color:#475569;display:block;">NID: ${a.nid}</span>
            </div>

            <div>
              <span style="font-size:0.7rem;font-weight:800;color:#64748B;display:block;">PROJECT ASSET</span>
              <strong style="font-size:0.95rem;color:#02221A;">${e.project.name}</strong>
              <span style="font-size:0.75rem;color:#475569;display:block;">📍 ${e.project.district} • ${e.project.category}</span>
            </div>

            <div>
              <span style="font-size:0.7rem;font-weight:800;color:#64748B;display:block;">CAPITAL COMMITTED</span>
              <strong style="font-size:1.1rem;color:#047857;">৳ ${e.totalAmount.toLocaleString()} BDT</strong>
              <span style="font-size:0.75rem;color:#475569;display:block;">${e.units} Unit${e.units>1?"s":""} • Fully Escrowed</span>
            </div>

            <div>
              <span style="font-size:0.7rem;font-weight:800;color:#64748B;display:block;">EXPECTED HALAL RETURN</span>
              <strong style="font-size:1.1rem;color:#10B981;">৳ ${e.profit.toLocaleString()} BDT (+${e.roiPercentage}%)</strong>
              <span style="font-size:0.75rem;color:#475569;display:block;">Duration: ${e.project.duration}</span>
            </div>
          </div>

          <!-- Payment Verification Strip -->
          <div style="background:#E8F5EF;border:1px solid #A7F3D0;border-radius:8px;padding:12px 16px;font-size:0.8rem;color:#065F46;margin-bottom:16px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
              <span>Payment Channel: <strong>${e.paymentMethod}</strong></span>
              <span>Transaction ID: <strong style="font-family:monospace;">${e.trxId}</strong></span>
            </div>
            <div>
              <span>Registered Payout Bank: <strong>${a.bankDetails.bankName}</strong> (A/C: ...${a.bankDetails.accountNumber.slice(-4)})</span>
            </div>
          </div>

          <!-- Shariah Governance Seal Strip -->
          <div style="display:flex;align-items:center;justify-content:space-between;font-size:0.75rem;color:#64748B;padding-top:10px;border-top:1px solid #E2E8F0;">
            <div>
              <strong>Shariah Board Audit:</strong> Verified Mudarabah 65/35
            </div>
            <div style="color:#047857;font-weight:800;">
              ✓ Bangladesh Bank Regulated Escrow
            </div>
          </div>
        </div>

        <!-- Action Footer -->
        <div style="padding: 16px 28px; background: #F1F5F9; border-top: 1px solid #E2E8F0; display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;">
          <button type="button" id="btn-cert-print" style="background:#FFFFFF;color:#02221A;border:1px solid #CBD5E1;padding:9px 18px;border-radius:8px;font-weight:700;font-size:0.825rem;cursor:pointer;display:inline-flex;align-items:center;gap:6px;">
            <span>🖨️ Print / Save Voucher</span>
          </button>

          <button type="button" id="btn-cert-dashboard" style="background:#02221A;color:#FFFFFF;border:none;padding:10px 22px;border-radius:8px;font-weight:700;font-size:0.85rem;cursor:pointer;display:inline-flex;align-items:center;gap:6px;">
            <span>View in Investor Dashboard (ড্যাশবোর্ডে দেখুন) →</span>
          </button>
        </div>
      </div>
    `,t.classList.add("active"),document.body.style.overflow="hidden";const n=()=>{t==null||t.classList.remove("active"),document.body.style.overflow=""};(o=t.querySelector("#btn-close-cert-modal"))==null||o.addEventListener("click",n),(s=t.querySelector("#btn-cert-print"))==null||s.addEventListener("click",()=>{window.print()}),(l=t.querySelector("#btn-cert-dashboard"))==null||l.addEventListener("click",()=>{n(),this.openDashboard("projects")}),t.addEventListener("click",c=>{c.target===t&&n()})}openBankAdviceModal(e){var o,s,l;let t=document.getElementById("grambandhan-bank-slip-modal");t||(t=document.createElement("div"),t.id="grambandhan-bank-slip-modal",t.className="project-question-modal-overlay",document.body.appendChild(t));const a=this.investorProfileSettings,i=e.investedAmountBDT+(e.actualReturnBDT||e.expectedProfitBDT),r=e.actualReturnBDT||e.expectedProfitBDT;t.innerHTML=`
      <div class="project-question-dialog bank-slip-dialog" style="max-width: 620px; padding: 0; overflow: hidden; border: 2px solid #047857; border-radius: 16px;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #02221A 0%, #064E3B 100%); color: #FFFFFF; padding: 22px 26px; position: relative;">
          <button class="pq-close-btn" id="btn-close-slip-modal" style="color: #FFF; position: absolute; top: 16px; right: 16px;">✕</button>
          <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(16,185,129,0.2);border:1px solid #10B981;padding:3px 12px;border-radius:20px;font-size:0.75rem;font-weight:800;letter-spacing:0.05em;color:#A7F3D0;margin-bottom:8px;">
            🏦 BEFTN / NPSB ELECTRONIC CLEARING ADVICE
          </div>
          <h2 style="margin: 0; font-size: 1.35rem; font-weight: 800;">Islami Bank Bangladesh Ltd (IBBL)</h2>
          <p style="margin: 4px 0 0; font-size: 0.825rem; opacity: 0.9;">Official Dividend Payout & Capital Re-credit Advice Slip</p>
        </div>

        <!-- Slip Body -->
        <div style="padding: 24px 26px; background: #FFFFFF; font-size: 0.85rem; color: #334155;">
          <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed #CBD5E1; padding-bottom: 12px; margin-bottom: 16px;">
            <div>
              <span style="font-size: 0.75rem; color: #64748B; display: block;">VOUCHER NUMBER</span>
              <strong>EFTN-SETTLE-${e.id.toUpperCase()}-2026</strong>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 0.75rem; color: #64748B; display: block;">SETTLEMENT DATE</span>
              <strong>${e.moneyReceivedDate||e.payoutReceivedDate||"22 Aug 2026, 03:30 PM"}</strong>
            </div>
          </div>

          <!-- Beneficiary Details -->
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 14px; margin-bottom: 16px;">
            <div style="font-size: 0.75rem; font-weight: 800; color: #02221A; margin-bottom: 8px;">BENEFICIARY ACCOUNT DETAILS:</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.825rem;">
              <div>Account Name: <strong>${a.bankDetails.accountHolder}</strong></div>
              <div>Account No: <strong>${a.bankDetails.accountNumber}</strong></div>
              <div>Bank Name: <strong>${a.bankDetails.bankName}</strong></div>
              <div>Routing No: <strong>${a.bankDetails.routingNumber}</strong></div>
            </div>
          </div>

          <!-- Audit Breakdown Table -->
          <div style="margin-bottom: 16px;">
            <div style="font-size: 0.75rem; font-weight: 800; color: #02221A; margin-bottom: 8px;">PROJECT AUDIT & DISBURSEMENT LEDGER:</div>
            <div style="display: flex; flex-direction: column; gap: 8px; background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 14px;">
              <div style="display:flex; justify-content:space-between;">
                <span>Project Name:</span>
                <strong>${e.name} (${e.bengaliName})</strong>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span>Capital Sent Date & Channel:</span>
                <strong>${e.moneySentDate||"10 Jan 2026, 10:45 AM"} (${e.moneySentChannel||"bKash Merchant"})</strong>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span>Field Deployment Date:</span>
                <strong>${e.fieldDisbursementDate||"16 Jan 2026"} (Lead Farmer: ${e.farmerName})</strong>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span>Harvest Mandi Settlement:</span>
                <strong>${e.mandiSettlementDate||"18 Aug 2026"} (${(e.harvestWeightKg||4200).toLocaleString()} KG Sold)</strong>
              </div>
              <div style="display:flex; justify-content:space-between; border-top: 1px solid #86EFAC; padding-top: 6px;">
                <span>Principal Capital Refunded:</span>
                <strong>৳ ${e.investedAmountBDT.toLocaleString()} BDT</strong>
              </div>
              <div style="display:flex; justify-content:space-between;">
                <span>Shariah Profit Share Credited (+${e.roiPercentage}%):</span>
                <strong style="color: #047857;">+ ৳ ${r.toLocaleString()} BDT</strong>
              </div>
              <div style="display:flex; justify-content:space-between; border-top: 2px solid #047857; padding-top: 8px; font-size: 1rem;">
                <span style="font-weight: 800; color: #02221A;">TOTAL DISBURSED TO BANK:</span>
                <strong style="color: #047857;">৳ ${i.toLocaleString()} BDT</strong>
              </div>
            </div>
          </div>

          <div style="font-size: 0.75rem; color: #64748B; text-align: center; border-top: 1px solid #E2E8F0; padding-top: 12px;">
            ✓ Electronic advice automatically authorized by Bangladesh Bank BEFTN clearing network.
          </div>
        </div>

        <!-- Footer -->
        <div style="padding: 16px 26px; background: #F8FAFC; border-top: 1px solid #E2E8F0; display: flex; justify-content: space-between; align-items: center;">
          <button type="button" id="btn-print-slip" style="background:#FFFFFF;color:#02221A;border:1px solid #CBD5E1;padding:8px 16px;border-radius:8px;font-weight:700;font-size:0.825rem;cursor:pointer;">
            🖨️ Print Advice Slip
          </button>
          <button type="button" id="btn-close-slip-btm" style="background:#02221A;color:#FFFFFF;border:none;padding:9px 20px;border-radius:8px;font-weight:700;font-size:0.85rem;cursor:pointer;">
            Done (সম্পন্ন)
          </button>
        </div>
      </div>
    `,t.classList.add("active"),document.body.style.overflow="hidden";const n=()=>{t==null||t.classList.remove("active"),document.body.style.overflow=""};(o=t.querySelector("#btn-close-slip-modal"))==null||o.addEventListener("click",n),(s=t.querySelector("#btn-close-slip-btm"))==null||s.addEventListener("click",n),(l=t.querySelector("#btn-print-slip"))==null||l.addEventListener("click",()=>window.print()),t.addEventListener("click",c=>{c.target===t&&n()})}openWithdrawalModal(){var r,n;let e=document.getElementById("grambandhan-withdraw-modal");e||(e=document.createElement("div"),e.id="grambandhan-withdraw-modal",e.className="project-question-modal-overlay",document.body.appendChild(e));const t=this.investorProfileSettings,a=this.stats.totalAccountBalanceBDT;e.innerHTML=`
      <div class="project-question-dialog" style="max-width: 540px; padding: 0; overflow: hidden; border-radius: 16px;">
        <div style="background: #02221A; color: #FFFFFF; padding: 20px 24px; position: relative;">
          <button class="pq-close-btn" id="btn-close-withdraw-modal" style="color: #FFF; position: absolute; top: 16px; right: 16px;">✕</button>
          <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(16,185,129,0.2);border:1px solid #10B981;padding:3px 12px;border-radius:20px;font-size:0.75rem;font-weight:800;color:#A7F3D0;margin-bottom:6px;">
            💸 INSTANT CAPITAL & PROFIT WITHDRAWAL
          </div>
          <h3 style="margin: 0; font-size: 1.25rem;">Withdraw to Bank / Mobile Wallet (টাকা উত্তোলন)</h3>
        </div>

        <div style="padding: 22px 24px; background: #FFFFFF;">
          <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 12px 16px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.85rem; color: #064E3B;">Available Wallet Balance:</span>
            <strong style="font-size: 1.2rem; color: #047857;">৳ ${a.toLocaleString()} BDT</strong>
          </div>

          <div style="margin-bottom: 16px;">
            <label style="font-size: 0.8rem; font-weight: 700; color: #02221A; display: block; margin-bottom: 6px;">Withdrawal Amount (উত্তোলনের পরিমাণ)</label>
            <input type="number" id="withdraw-amount-input" value="50000" min="1000" max="${a}" style="width: 100%; padding: 10px 14px; border: 1.5px solid #CBD5E1; border-radius: 8px; font-size: 1.05rem; font-weight: 700; color: #02221A;" />
            <div style="display: flex; gap: 8px; margin-top: 8px;">
              <button type="button" class="btn-quick-amt" data-amt="25000" style="background:#F1F5F9;border:1px solid #CBD5E1;padding:4px 10px;border-radius:6px;font-size:0.75rem;cursor:pointer;">৳ 25,000</button>
              <button type="button" class="btn-quick-amt" data-amt="50000" style="background:#F1F5F9;border:1px solid #CBD5E1;padding:4px 10px;border-radius:6px;font-size:0.75rem;cursor:pointer;">৳ 50,000</button>
              <button type="button" class="btn-quick-amt" data-amt="100000" style="background:#F1F5F9;border:1px solid #CBD5E1;padding:4px 10px;border-radius:6px;font-size:0.75rem;cursor:pointer;">৳ 1,00,000</button>
              <button type="button" class="btn-quick-amt" data-amt="${a}" style="background:#F1F5F9;border:1px solid #CBD5E1;padding:4px 10px;border-radius:6px;font-size:0.75rem;cursor:pointer;">Full Balance</button>
            </div>
          </div>

          <div style="margin-bottom: 18px;">
            <label style="font-size: 0.8rem; font-weight: 700; color: #02221A; display: block; margin-bottom: 6px;">Select Payout Destination (উত্তোলন মাধ্যম)</label>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <label style="display: flex; align-items: center; gap: 10px; padding: 12px; border: 1.5px solid #10B981; background: #F0FDF4; border-radius: 8px; cursor: pointer;">
                <input type="radio" name="withdraw-dest" value="bank" checked />
                <div>
                  <strong style="font-size: 0.875rem; color: #02221A; display: block;">${t.bankDetails.bankName}</strong>
                  <span style="font-size: 0.775rem; color: #64748B;">A/C: ${t.bankDetails.accountNumber} • BEFTN 2-4 Hours</span>
                </div>
              </label>
              <label style="display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid #E2E8F0; background: #FFF; border-radius: 8px; cursor: pointer;">
                <input type="radio" name="withdraw-dest" value="bkash" />
                <div>
                  <strong style="font-size: 0.875rem; color: #02221A; display: block;">bKash Verified Wallet</strong>
                  <span style="font-size: 0.775rem; color: #64748B;">Wallet: ${t.bankDetails.bkashNumber} • Instant Disbursement</span>
                </div>
              </label>
            </div>
          </div>

          <button type="button" id="btn-submit-withdrawal" style="width: 100%; background: #047857; color: #FFFFFF; padding: 12px; border-radius: 8px; font-weight: 700; font-size: 0.95rem; border: none; cursor: pointer; transition: all 0.2s ease;">
            Confirm Withdrawal (উত্তোলন নিশ্চিত করুন)
          </button>
        </div>
      </div>
    `,e.classList.add("active"),document.body.style.overflow="hidden";const i=()=>{e==null||e.classList.remove("active"),document.body.style.overflow=""};(r=e.querySelector("#btn-close-withdraw-modal"))==null||r.addEventListener("click",i),e.querySelectorAll(".btn-quick-amt").forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("data-amt"),l=e==null?void 0:e.querySelector("#withdraw-amount-input");l&&s&&(l.value=s)})}),(n=e.querySelector("#btn-submit-withdrawal"))==null||n.addEventListener("click",()=>{const o=e==null?void 0:e.querySelector("#withdraw-amount-input"),s=parseInt((o==null?void 0:o.value)||"0",10);if(s<=0||s>a){this.showToastNotification("⚠️ Invalid withdrawal amount. Please check available balance.");return}this.stats.totalAccountBalanceBDT-=s,this.notifications.unshift({id:"notif-"+Date.now(),category:"financial",icon:"💸",title:"Withdrawal Initiated",message:`Withdrawal of ৳ ${s.toLocaleString()} BDT initiated to ${t.bankDetails.bankName}. Expected settlement within 4 hours.`,time:"Just now",read:!1,tab:"financials"}),i(),this.showToastNotification(`✓ Withdrawal request of ৳ ${s.toLocaleString()} BDT submitted successfully!`);const l=document.getElementById("dash-dynamic-content");l&&this.currentTab==="financials"&&this.renderFinancialsTab(l),this.updateNotificationBadge()}),e.addEventListener("click",o=>{o.target===e&&i()})}toggleNotificationDrawer(){this.isNotificationOpen=!this.isNotificationOpen;const e=document.getElementById("dash-notif-drawer-overlay");e&&(this.isNotificationOpen?(e.style.display="block",this.renderNotificationDrawerContent()):e.style.display="none")}renderNotificationDrawerContent(){var i,r;const e=document.getElementById("dash-notif-drawer");if(!e)return;const t=this.notifications.filter(n=>!n.read).length;let a=this.notifications;this.notificationFilter==="unread"?a=this.notifications.filter(n=>!n.read):this.notificationFilter==="financial"?a=this.notifications.filter(n=>n.category==="financial"):this.notificationFilter==="field"&&(a=this.notifications.filter(n=>n.category==="field"||n.category==="weather")),e.innerHTML=`
      <div class="notif-drawer-header">
        <div class="notif-header-title">
          <span class="notif-bell-icon">🔔</span>
          <h3>Notifications (বিজ্ঞপ্তি)</h3>
          ${t>0?`<span class="notif-unread-count-pill">${t} Unread</span>`:""}
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          ${t>0?'<button class="notif-btn-mark-read" id="notif-btn-mark-all-read">Mark All as Read</button>':""}
          <button class="notif-btn-close" id="notif-btn-close-drawer">✕</button>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="notif-drawer-filters">
        <button class="notif-tab-btn ${this.notificationFilter==="all"?"active":""}" data-filter="all">All (${this.notifications.length})</button>
        <button class="notif-tab-btn ${this.notificationFilter==="unread"?"active":""}" data-filter="unread">Unread (${t})</button>
        <button class="notif-tab-btn ${this.notificationFilter==="financial"?"active":""}" data-filter="financial">Financials</button>
        <button class="notif-tab-btn ${this.notificationFilter==="field"?"active":""}" data-filter="field">Field IoT</button>
      </div>

      <!-- Notifications List -->
      <div class="notif-drawer-list">
        ${a.length===0?`
          <div style="text-align: center; padding: 40px 16px; color: #64748B;">
            <div style="font-size: 2rem; margin-bottom: 8px;">📭</div>
            <p style="margin: 0; font-size: 0.85rem;">No notifications in this filter.</p>
          </div>
        `:a.map(n=>`
          <div class="notif-item-card ${n.read?"":"notif-unread"}" data-notif-id="${n.id}">
            <span class="notif-item-icon">${n.icon}</span>
            <div class="notif-item-content">
              <div class="notif-item-top">
                <strong>${n.title}</strong>
                <span class="notif-item-time">${n.time}</span>
              </div>
              <p class="notif-item-msg">${n.message}</p>
              <div class="notif-item-actions">
                <button class="notif-action-jump" data-tab="${n.tab}" data-filter="${n.projectFilter||""}">
                  View Details →
                </button>
                <button class="notif-action-dismiss" data-dismiss-id="${n.id}">✕ Dismiss</button>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `,(i=e.querySelector("#notif-btn-close-drawer"))==null||i.addEventListener("click",()=>{this.toggleNotificationDrawer()}),(r=e.querySelector("#notif-btn-mark-all-read"))==null||r.addEventListener("click",()=>{this.markAllNotificationsAsRead()}),e.querySelectorAll(".notif-tab-btn").forEach(n=>{n.addEventListener("click",()=>{this.notificationFilter=n.getAttribute("data-filter"),this.renderNotificationDrawerContent()})}),e.querySelectorAll(".notif-action-jump").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-tab"),s=n.getAttribute("data-filter");this.toggleNotificationDrawer(),o&&this.switchTab(o,s||void 0)})}),e.querySelectorAll(".notif-action-dismiss").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-dismiss-id");this.notifications=this.notifications.filter(s=>s.id!==o),this.renderNotificationDrawerContent(),this.updateNotificationBadge()})})}markAllNotificationsAsRead(){this.notifications.forEach(e=>e.read=!0),this.renderNotificationDrawerContent(),this.updateNotificationBadge(),this.showToastNotification("✓ All notifications marked as read")}updateNotificationBadge(){const e=document.getElementById("dash-notif-badge");if(!e)return;const t=this.notifications.filter(a=>!a.read).length;t>0?(e.style.display="inline-flex",e.textContent=t.toString()):e.style.display="none"}renderSupportTab(e){var t,a;e.innerHTML=`
      <div class="dash-content-header">
        <div class="dash-title-group">
          <h1>Investor Advisory & Support (বিনিয়োগকারী সহায়তা ও পরামর্শ)</h1>
          <p>Direct assistance from our Dhaka headquarters, Shariah supervisory board, and field agronomy leads.</p>
        </div>
      </div>

      <div class="support-workbench-grid">
        <!-- 1. Channels Card -->
        <div class="dash-panel-card">
          <h3 style="margin-top: 0; margin-bottom: 16px; color: #02221A;">Direct Contact Channels</h3>
          
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; align-items: flex-start; gap: 14px; padding: 14px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px;">
              <span style="font-size: 1.8rem;">📞</span>
              <div style="flex: 1;">
                <strong style="color: #02221A; display: block; font-size: 0.95rem;">Priority Investor Hotline</strong>
                <div style="font-size: 0.85rem; color: #64748B; margin: 2px 0 8px;">+880 9612-345678 • Available 9:00 AM – 8:00 PM (Everyday)</div>
                <button class="btn btn-secondary" id="btn-call-hotline" style="font-size: 0.775rem; padding: 5px 12px;">Call Support Now</button>
              </div>
            </div>

            <div style="display: flex; align-items: flex-start; gap: 14px; padding: 14px; background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px;">
              <span style="font-size: 1.8rem;">💬</span>
              <div style="flex: 1;">
                <strong style="color: #047857; display: block; font-size: 0.95rem;">Dedicated WhatsApp Investment Desk</strong>
                <div style="font-size: 0.85rem; color: #64748B; margin: 2px 0 8px;">+880 1711-892401 • Instant field photo updates & dividend queries</div>
                <button class="btn btn-primary" id="btn-open-whatsapp" style="font-size: 0.775rem; padding: 5px 12px; background: #047857;">Chat on WhatsApp</button>
              </div>
            </div>

            <div style="display: flex; align-items: flex-start; gap: 14px; padding: 14px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px;">
              <span style="font-size: 1.8rem;">🏢</span>
              <div style="flex: 1;">
                <strong style="color: #02221A; display: block; font-size: 0.95rem;">Dhaka Headquarters</strong>
                <div style="font-size: 0.85rem; color: #64748B;">Level 8, Crystal Palace, Gulshan-2, Dhaka-1212, Bangladesh</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. FAQ Accordion -->
        <div class="dash-panel-card">
          <h3 style="margin-top: 0; margin-bottom: 16px; color: #02221A;">Frequently Asked Questions (সাধারণ জিজ্ঞাসা)</h3>

          <div class="support-faq-list">
            <details class="support-faq-item" open>
              <summary class="faq-summary">How are halal returns calculated under the Mudarabah contract?</summary>
              <p class="faq-answer">Profits are generated exclusively through tangible harvest sales at government-regulated agricultural wholesale mandis. Returns are divided between the investor and farmer according to pre-agreed ratios (typically 65% investor / 35% farmer), with zero interest (riba) or artificial guaranteed rates.</p>
            </details>

            <details class="support-faq-item" open>
              <summary class="faq-summary">When and how do I receive my capital and dividend payouts?</summary>
              <p class="faq-answer">Upon harvest completion and wholesale mandi liquidation, the principal plus net profit is directly remitted via BEFTN/NPSB electronic bank transfer to your registered Islami Bank account or verified bKash wallet within 48-72 business hours.</p>
            </details>

            <details class="support-faq-item">
              <summary class="faq-summary">What risk mitigation protects my investment against floods or bad weather?</summary>
              <p class="faq-answer">GramBondhon requires micro-parametric weather insurance and bio-slurry soil conditioning for every project site. Furthermore, agronomists visit bi-weekly with Sentinel-2 multispectral satellite crop health tracking.</p>
            </details>
          </div>
        </div>
      </div>
    `,(t=e.querySelector("#btn-call-hotline"))==null||t.addEventListener("click",()=>{this.showToastNotification("Connecting to GramBondhon Dhaka Hotline: +880 9612-345678")}),(a=e.querySelector("#btn-open-whatsapp"))==null||a.addEventListener("click",()=>{this.showToastNotification("WhatsApp desk ready. Messaging +880 1711-892401...")})}renderFeedbackTab(e){var t;e.innerHTML=`
      <div class="dash-content-header">
        <div class="dash-title-group">
          <h1>Share Your Investor Feedback (মতামত দিন)</h1>
          <p>Help us improve transparency, field tracking biometrics, and ethical investment governance.</p>
        </div>
      </div>

      <div class="dash-panel-card" style="max-width: 680px;">
        <form id="form-investor-feedback">
          <div style="margin-bottom: 16px;">
            <label style="font-size: 0.8rem; font-weight: 700; color: #02221A; display: block; margin-bottom: 6px;">Rate Your GramBondhon Experience</label>
            <div class="feedback-star-rating">
              <span class="star-rating-btn active" data-rating="5">★★★★★ Excellent (5/5)</span>
            </div>
          </div>

          <div style="margin-bottom: 14px;">
            <label style="font-size: 0.8rem; font-weight: 700; color: #02221A; display: block; margin-bottom: 4px;">Feedback Category</label>
            <select id="feedback-cat" style="width: 100%; padding: 10px 12px; border: 1.5px solid #CBD5E1; border-radius: 8px; font-size: 0.875rem;">
              <option value="transparency">Financial Transparency & Bank Payouts</option>
              <option value="field_iot">Field IoT Biometrics & Satellite Tracking</option>
              <option value="ai_risk">AI Pre-Investment Risk Engine</option>
              <option value="marketplace">Marketplace Artisans & Farmer Products</option>
              <option value="general">General Platform Experience</option>
            </select>
          </div>

          <div style="margin-bottom: 14px;">
            <label style="font-size: 0.8rem; font-weight: 700; color: #02221A; display: block; margin-bottom: 4px;">Subject</label>
            <input type="text" id="feedback-subject" placeholder="e.g. Real-time sensor frequency suggestion" style="width: 100%; padding: 10px 12px; border: 1.5px solid #CBD5E1; border-radius: 8px; font-size: 0.875rem;" required />
          </div>

          <div style="margin-bottom: 18px;">
            <label style="font-size: 0.8rem; font-weight: 700; color: #02221A; display: block; margin-bottom: 4px;">Your Detailed Suggestions (পরামর্শ)</label>
            <textarea id="feedback-msg" rows="4" placeholder="Tell us how we can serve rural Bangladesh and investors better..." style="width: 100%; padding: 10px 12px; border: 1.5px solid #CBD5E1; border-radius: 8px; font-size: 0.875rem;" required></textarea>
          </div>

          <button type="submit" class="btn btn-primary" style="background: #02221A; padding: 11px 24px;">Submit Feedback (মতামত পাঠান)</button>
        </form>
      </div>
    `,(t=document.getElementById("form-investor-feedback"))==null||t.addEventListener("submit",a=>{a.preventDefault(),this.showToastNotification("✓ Thank you Rahat Khan! Your feedback has been forwarded to the Executive Board."),setTimeout(()=>{this.switchTab("dashboard")},1e3)})}setupDashboardEvents(){var t,a,i,r,n,o,s;document.querySelectorAll(".dash-nav-item[data-dash-tab]").forEach(l=>{l.addEventListener("click",()=>{const c=l.dataset.dashTab;c&&this.switchTab(c)})}),(t=document.getElementById("dash-btn-back-projects"))==null||t.addEventListener("click",()=>{this.closeDashboard();const l=document.getElementById("projects");l==null||l.scrollIntoView({behavior:"smooth"})}),(a=document.getElementById("dash-brand-home"))==null||a.addEventListener("click",l=>{l.preventDefault(),this.closeDashboard(),window.scrollTo({top:0,behavior:"smooth"})}),(i=document.getElementById("dash-btn-logout"))==null||i.addEventListener("click",()=>{f.logout(),this.closeDashboard(),this.showToastNotification("Logged out successfully. Returned to public homepage.")}),this.setupDashboardSearch();const e=()=>{const l=document.getElementById("investor-dashboard-view");if(l){l.classList.toggle("sidebar-collapsed");const c=l.classList.contains("sidebar-collapsed");this.showToastNotification(c?"Sidebar collapsed (স্লাইড আউট)":"Sidebar expanded (স্লাইড ইন)")}};(r=document.getElementById("dash-floating-sidebar-toggle"))==null||r.addEventListener("click",e),(n=document.getElementById("dash-btn-toggle-sidebar"))==null||n.addEventListener("click",e),(o=document.getElementById("dash-btn-notifications"))==null||o.addEventListener("click",()=>{this.toggleNotificationDrawer()}),(s=document.getElementById("dash-btn-help"))==null||s.addEventListener("click",()=>{this.switchTab("support")})}setupGlobalClickHandlers(){document.addEventListener("keydown",e=>{if(e.key==="Escape"){const t=document.getElementById("investor-dashboard-view");t&&t.classList.contains("active")&&this.closeDashboard()}}),window.addEventListener("grambandhan:invest-request",e=>{const t=e,a=t.detail;if(!a)return;if(this.stats.totalInvestmentBDT+a.totalInvestment>5e5){t.preventDefault();const r=Math.max(0,5e5-this.stats.totalInvestmentBDT);this.showToastNotification(`⚠️ Investment Limit Exceeded: Maximum total investment cannot exceed ৳ 5,00,000 BDT. You currently have ৳ ${this.stats.totalInvestmentBDT.toLocaleString()} BDT invested.`),alert(`⚠️ Investment Limit Exceeded: As per GramBandhan policy, your total active portfolio investments cannot exceed ৳ 5,00,000 BDT.

Currently Invested: ৳ ${this.stats.totalInvestmentBDT.toLocaleString()} BDT
Max Allowed Additional: ৳ ${r.toLocaleString()} BDT

Please adjust your units.`);return}this.stats.totalInvestmentBDT+=a.totalInvestment,this.stats.totalAccountBalanceBDT=Math.max(0,this.stats.totalAccountBalanceBDT-a.totalInvestment),this.stats.recentProjectsCount+=1;const i={id:"inv-rec-"+Date.now(),name:a.projectName,bengaliName:a.bengaliName||a.projectName,category:a.category,district:a.district,upazila:"Sadar",investedAmountBDT:a.totalInvestment,expectedProfitBDT:a.expectedProfitBDT,status:"recent",statusLabel:"Funding Collection Phase",statusDescription:"Campaign actively raising capital; 80% funded, field start slated upon completion",startDate:"15 Nov 2026",expectedEndDate:"15 May 2027",image:a.image,progressPercent:5,roiPercentage:a.roiPercentage,farmerName:a.farmerName,contractType:a.contractType,fundingRaisedBDT:a.fundingRaisedBDT||68e4,fundingGoalBDT:a.fundingGoalBDT||85e4,fundingPercent:a.fundingPercent||80,daysLeftToClose:a.daysLeftToClose||14};this.portfolioProjects.unshift(i),I.unshift({id:"act-"+Date.now(),description:`Committed ৳ ${a.totalInvestment.toLocaleString()} to ${a.projectName}`,division:a.district,status:"LIVE",timestamp:"Just now"}),this.showToastNotification(`🎉 Successfully invested ৳ ${a.totalInvestment.toLocaleString()} in ${a.projectName}!`),this.renderCurrentTabContent()}),window.addEventListener("grambandhan:open-dashboard",e=>{var r,n;const t=e,a=((r=t.detail)==null?void 0:r.tab)||"dashboard",i=(n=t.detail)==null?void 0:n.filter;if(this.openDashboard(a),i&&a==="projects"){this.currentProjectFilter=i;const o=document.getElementById("dash-dynamic-content");o&&this.renderInvestorProjectsTab(o)}})}setupDashboardSearch(){const e=document.getElementById("dash-topbar-search"),t=document.getElementById("dash-topbar-search-clear"),a=document.getElementById("dash-search-suggestions"),i=document.getElementById("dash-search-wrapper");if(!e||!a)return;const r=o=>{const s=o.trim().toLowerCase();if(!s){a.innerHTML=`
          <div class="dash-sugg-section-title">QUICK PORTFOLIO SHORTCUTS</div>
          <div class="dash-sugg-item" data-action="filter-tab" data-filter="all">
            <span class="sugg-icon">📂</span>
            <div class="sugg-text"><strong>All Portfolio Projects</strong><span>View all active and completed investments</span></div>
          </div>
          <div class="dash-sugg-item" data-action="filter-tab" data-filter="ongoing">
            <span class="sugg-icon">🚜</span>
            <div class="sugg-text"><strong>Ongoing Field Projects (মাঠে সক্রিয়)</strong><span>Track biometrics & agronomist reports</span></div>
          </div>
          <div class="dash-sugg-item" data-action="filter-tab" data-filter="recent">
            <span class="sugg-icon">⏳</span>
            <div class="sugg-text"><strong>Funding Collection Phase (তহবিল সংগ্রহ)</strong><span>Projects raising capital before field deployment</span></div>
          </div>
          <div class="dash-sugg-item" data-action="filter-tab" data-filter="completed">
            <span class="sugg-icon">💰</span>
            <div class="sugg-text"><strong>Completed & Paid Out (পরিশোধিত)</strong><span>View audited yields and Shariah receipts</span></div>
          </div>
          <div class="dash-sugg-section-title">POPULAR SECTORS & DISTRICTS</div>
          <div class="dash-sugg-tags-row">
            <button type="button" class="dash-sugg-tag" data-tag="Rice">🌾 Rice & Grains</button>
            <button type="button" class="dash-sugg-tag" data-tag="Fisheries">🐟 Fisheries</button>
            <button type="button" class="dash-sugg-tag" data-tag="Handicrafts">🧵 Handicrafts</button>
            <button type="button" class="dash-sugg-tag" data-tag="Dairy">🥛 Dairy & Ghee</button>
            <button type="button" class="dash-sugg-tag" data-tag="Spices">🌶️ Spices</button>
            <button type="button" class="dash-sugg-tag" data-tag="Rangpur">📍 Rangpur</button>
            <button type="button" class="dash-sugg-tag" data-tag="Bogura">📍 Bogura</button>
            <button type="button" class="dash-sugg-tag" data-tag="Gazipur">📍 Gazipur</button>
          </div>
        `,a.style.display="block",n();return}const l=this.portfolioProjects.filter(p=>p.name.toLowerCase().includes(s)||p.bengaliName.toLowerCase().includes(s)||p.district.toLowerCase().includes(s)||p.upazila&&p.upazila.toLowerCase().includes(s)||p.category.toLowerCase().includes(s)||p.farmerName.toLowerCase().includes(s)||p.fieldInspector&&p.fieldInspector.toLowerCase().includes(s)),c=I.filter(p=>p.description.toLowerCase().includes(s)||p.division.toLowerCase().includes(s)||p.status.toLowerCase().includes(s));let d="";l.length>0&&(d+=`<div class="dash-sugg-section-title">MATCHING PROJECTS (${l.length})</div>`,l.slice(0,5).forEach(p=>{const g=p.status==="ongoing"?"sugg-badge-ongoing":p.status==="completed"?"sugg-badge-completed":"sugg-badge-recent",u=p.status==="ongoing"?"🚜 Field Active":p.status==="completed"?"💰 Completed":"⏳ Funding";d+=`
            <div class="dash-sugg-item" data-action="select-project" data-project-id="${p.id}">
              <div class="sugg-proj-thumb" style="background-image: url('${p.image}')"></div>
              <div class="sugg-text">
                <div class="sugg-title-row">
                  <strong>${p.name}</strong>
                  <span class="sugg-badge ${g}">${u}</span>
                </div>
                <span>${p.bengaliName} • 📍 ${p.district} • ROI: +${p.roiPercentage}%</span>
              </div>
            </div>
          `})),c.length>0&&(d+=`<div class="dash-sugg-section-title">INVESTOR RECORDS & ACTIVITIES (${c.length})</div>`,c.slice(0,3).forEach(p=>{d+=`
            <div class="dash-sugg-item" data-action="select-activity" data-query="${p.description}">
              <span class="sugg-icon">📜</span>
              <div class="sugg-text">
                <strong>${p.description}</strong>
                <span>📍 ${p.division} • ${p.timestamp}</span>
              </div>
            </div>
          `})),l.length===0&&c.length===0&&(d+=`
          <div class="dash-sugg-empty">
            <span>🔍 No direct match for "<strong>${o}</strong>"</span>
            <p>Try searching by district (e.g. <em>Rangpur, Bogura</em>), category (<em>Rice, Fisheries</em>), or farmer name.</p>
          </div>
        `),a.innerHTML=d,a.style.display="block",n()},n=()=>{a.querySelectorAll('[data-action="filter-tab"]').forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("data-filter");this.currentProjectFilter=s,this.switchTab("projects",s),a.style.display="none"})}),a.querySelectorAll(".dash-sugg-tag").forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("data-tag")||"";e.value=s,t&&(t.style.display="block"),this.dashboardSearchQuery=s,this.switchTab("projects");const l=document.getElementById("dash-dynamic-content");l&&this.renderInvestorProjectsTab(l),a.style.display="none"})}),a.querySelectorAll('[data-action="select-project"]').forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("data-project-id"),l=this.portfolioProjects.find(c=>c.id===s);if(l){e.value=l.name,t&&(t.style.display="block"),this.dashboardSearchQuery=l.name,this.switchTab("projects");const c=document.getElementById("dash-dynamic-content");c&&this.renderInvestorProjectsTab(c)}a.style.display="none"})}),a.querySelectorAll('[data-action="select-activity"]').forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("data-query")||"";e.value=s,t&&(t.style.display="block"),this.dashboardSearchQuery=s,this.switchTab("projects");const l=document.getElementById("dash-dynamic-content");l&&this.renderInvestorProjectsTab(l),a.style.display="none"})})};e.addEventListener("input",()=>{const o=e.value;if(t&&(t.style.display=o.length>0?"block":"none"),this.dashboardSearchQuery=o,r(o),this.currentTab==="projects"){const s=document.getElementById("dash-dynamic-content");s&&this.renderInvestorProjectsTab(s)}}),e.addEventListener("focus",()=>{r(e.value)}),e.addEventListener("keydown",o=>{if(o.key==="Enter"){a.style.display="none",this.switchTab("projects");const s=document.getElementById("dash-dynamic-content");s&&this.renderInvestorProjectsTab(s)}else o.key==="Escape"&&(a.style.display="none")}),t.addEventListener("click",()=>{if(e.value="",t.style.display="none",this.dashboardSearchQuery="",a.style.display="none",this.currentTab==="projects"){const o=document.getElementById("dash-dynamic-content");o&&this.renderInvestorProjectsTab(o)}}),document.addEventListener("click",o=>{i&&!i.contains(o.target)&&(a.style.display="none")})}openFieldTrackingModal(e){var o,s,l,c;let t=document.getElementById("field-tracking-modal");t||(t=document.createElement("div"),t.id="field-tracking-modal",t.className="field-tracking-modal-overlay",document.body.appendChild(t));const i={Rangpur:"25.5841° N, 89.3128° E",Bogura:"24.8465° N, 89.3777° E",Gazipur:"24.0958° N, 90.4125° E",Sirajganj:"24.4534° N, 89.7008° E",Kushtia:"23.9013° N, 89.1205° E",Jamalpur:"24.9375° N, 89.9378° E",Chandpur:"23.2321° N, 90.6631° E"}[e.district]||"24.3636° N, 88.6241° E";t.innerHTML=`
      <div class="field-tracking-dialog">
        <div class="ft-header">
          <div class="ft-header-title">
            <span class="ft-live-tag">🔴 LIVE FIELD TELEMETRY • মাঠে সক্রিয় পর্যবেক্ষণ</span>
            <h2>${e.name}</h2>
            <p class="ft-loc-sub">
              <span>${e.bengaliName}</span> • 📍 District: <strong>${e.district}</strong> • Upazila: <strong>${e.upazila||"Sadar"}</strong> • GPS: <strong>${i}</strong>
            </p>
          </div>
          <button class="ft-close-btn" id="btn-close-ft-modal" title="Close">✕</button>
        </div>

        <div class="ft-content-scroll">
          <!-- 1. Real-Time Telemetry Gauges Strip -->
          <div class="ft-telemetry-grid">
            <div class="ft-gauge-card">
              <div class="ft-gauge-icon">💧</div>
              <div class="ft-gauge-meta">
                <span class="lbl">Soil Moisture</span>
                <strong class="val">78%</strong>
                <span class="status-good">● Optimal Hydration</span>
              </div>
            </div>

            <div class="ft-gauge-card">
              <div class="ft-gauge-icon">🧪</div>
              <div class="ft-gauge-meta">
                <span class="lbl">Soil pH & Bio-Nitrogen</span>
                <strong class="val">pH 6.4</strong>
                <span class="status-good">● High Organic Silt</span>
              </div>
            </div>

            <div class="ft-gauge-card">
              <div class="ft-gauge-icon">🛰️</div>
              <div class="ft-gauge-meta">
                <span class="lbl">Vegetation Index (NDVI)</span>
                <strong class="val">0.88</strong>
                <span class="status-good">● High Crop Vigor</span>
              </div>
            </div>

            <div class="ft-gauge-card">
              <div class="ft-gauge-icon">🌤️</div>
              <div class="ft-gauge-meta">
                <span class="lbl">District Weather & Temp</span>
                <strong class="val">28.5°C</strong>
                <span class="status-good">● 81% Humid / Favorable</span>
              </div>
            </div>
          </div>

          <!-- 2. Department of Agricultural Extension (DAE) Verified Audit -->
          <div class="ft-audit-box">
            <div class="ft-audit-header">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.6rem;">🔬</span>
                <div>
                  <h4 style="margin: 0; font-size: 0.95rem; color: #02221A;">DAE & GramBandhan Certified Field Audit</h4>
                  <span style="font-size: 0.775rem; color: #64748B;">Lead Agronomist: <strong>${e.fieldInspector||"Dr. M. Faruk (DAE Gazipur)"}</strong></span>
                </div>
              </div>
              <span class="ft-score-badge">AUDIT SCORE: 98 / 100</span>
            </div>
            <p class="ft-audit-notes">
              "Official field biometric inspection conducted at ${e.district} (${e.upazila||"Sadar"}). Crop canopy index is within top 5% of regional clusters. Zero pest infestation observed. Bio-pesticides and organic compost have been strictly applied. Solar irrigation pumps operating normally. Zero biological default risk."
            </p>
            <div class="ft-audit-footer">
              <span>📅 Last Verified Audit: <strong>${e.lastAuditDate||"15 Sep 2026"}</strong></span>
              <span style="color: #047857; font-weight: 700;">✓ CERTIFIED HALAL AGRO-ASSET</span>
            </div>
          </div>

          <!-- 3. 4-Stage Field Milestones Timeline -->
          <div class="ft-milestones-section">
            <h4 style="margin: 0 0 14px; font-size: 0.925rem; color: #02221A;">Verified Field Milestone Progress (মাঠ পর্যায়ের অগ্রগতি)</h4>
            <div class="ft-timeline">
              ${(e.progressMilestones||[{label:"Land Prep & Sowing",date:e.startDate||"10 Aug 2026",completed:!0},{label:"Organic Bio-fertilization & Solar Aeration",date:"25 Aug 2026",completed:!0},{label:"Tiller Maturation & Biometric Monitoring",date:"15 Sep 2026",completed:!0,active:!0},{label:"Harvesting, Solar Cold Storage & Payout",date:e.expectedEndDate||"15 Dec 2026",completed:!1}]).map((d,p)=>`
                <div class="ft-timeline-item ${d.completed?"done":""} ${d.active?"current":""}">
                  <div class="ft-timeline-marker">${d.completed?"✓":p+1}</div>
                  <div class="ft-timeline-body">
                    <div class="ft-tl-head">
                      <strong>${d.label}</strong>
                      <span class="ft-tl-date">${d.date}</span>
                    </div>
                    <span class="ft-tl-status">${d.completed?d.active?"● Currently Active in Field":"Completed":"Scheduled"}</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- 4. Lead Farmer Voice & Direct Field Memo -->
          <div class="ft-farmer-memo-box">
            <div class="ft-farmer-info">
              <span class="ft-farmer-avatar">👨‍🌾</span>
              <div>
                <strong>${e.farmerName}</strong>
                <span>Lead Cooperative Farmer • ${e.district} Cluster</span>
              </div>
            </div>
            <div class="ft-audio-bar">
              <button class="ft-audio-play-btn" id="btn-ft-audio-play">▶ Play Field Voice Memo</button>
              <div class="ft-sound-wave">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
              </div>
              <span class="ft-audio-time">0:42</span>
            </div>
            <blockquote class="ft-farmer-quote">
              "আলহামদুলিল্লাহ, জমির অবস্থা খুব ভালো। আবহাওয়া অনুকূলে থাকায় ফলন আশাতীত ভালো হচ্ছে। নির্ধারিত সময়েই ফসল তোলা ও সমবায় বাজারে প্রেরণের জন্য আমরা প্রস্তুত। আপনাদের বিনিয়োগের জন্য ধন্যবাদ।"
            </blockquote>
          </div>
        </div>

        <div class="ft-dialog-footer">
          <button class="btn-ft-ask-question" id="btn-ft-ask-question">
            💬 Ask Field Team (প্রশ্ন জিজ্ঞাসা করুন)
          </button>
          <button class="btn-ft-download-pdf" id="btn-ft-download">
            📥 Download Field Audit Certificate (PDF)
          </button>
          <button class="btn-ft-close" id="btn-ft-close-dialog">
            Close Tracking
          </button>
        </div>
      </div>
    `,t.classList.add("active"),document.body.style.overflow="hidden";const r=()=>{t.classList.remove("active"),document.body.style.overflow=""};(o=t.querySelector("#btn-close-ft-modal"))==null||o.addEventListener("click",r),(s=t.querySelector("#btn-ft-close-dialog"))==null||s.addEventListener("click",r),(l=t.querySelector("#btn-ft-ask-question"))==null||l.addEventListener("click",()=>{r(),this.openProjectQuestionModal(e)}),(c=t.querySelector("#btn-ft-download"))==null||c.addEventListener("click",()=>{this.showToastNotification(`📄 Downloading Official Field Audit Certificate for ${e.name} (Demo PDF)...`)});const n=t.querySelector("#btn-ft-audio-play");n==null||n.addEventListener("click",()=>{var d;(d=n.textContent)!=null&&d.includes("Play")?(n.textContent="⏸ Pause Voice Memo",this.showToastNotification("▶ Playing field update voice memo from "+e.farmerName)):n.textContent="▶ Play Field Voice Memo"}),t.addEventListener("click",d=>{d.target===t&&r()})}openProjectQuestionModal(e){var r,n,o;let t=document.getElementById("project-question-modal");t||(t=document.createElement("div"),t.id="project-question-modal",t.className="project-question-modal-overlay",document.body.appendChild(t)),t.innerHTML=`
      <div class="project-question-dialog">
        <div class="pq-header">
          <div class="pq-title-wrap">
            <span class="pq-tag">💬 DIRECT FIELD DISPATCH • মাঠ কর্মকর্তার কাছে জিজ্ঞাসা</span>
            <h3>Ask About: ${e.name}</h3>
            <p class="pq-sub">
              🌾 Farmer: <strong>${e.farmerName}</strong> • 📍 ${e.district} (${e.upazila||"Sadar"}) • 🔬 Agronomist: <strong>${e.fieldInspector||"Dr. M. Faruk (DAE Gazipur)"}</strong>
            </p>
          </div>
          <button class="pq-close-btn" id="btn-close-pq-modal" title="Close">✕</button>
        </div>

        <div class="pq-body">
          <div class="pq-quick-chips-wrap">
            <label>⚡ Quick Question Templates (দ্রুত প্রশ্ন নির্বাচন করুন):</label>
            <div class="pq-quick-chips">
              <button type="button" class="pq-chip" data-q="What is the current soil moisture and weather health in ${e.district}?">💧 Soil Moisture & Weather Health</button>
              <button type="button" class="pq-chip" data-q="When is the exact scheduled harvest date and mandi delivery?">🌾 Scheduled Harvest & Mandi Delivery</button>
              <button type="button" class="pq-chip" data-q="Can I arrange an in-person biometric field visit with the cluster team?">🚜 Schedule Physical Farm Visit</button>
              <button type="button" class="pq-chip" data-q="Has the latest bio-fertilizer phase passed DAE organic compliance?">🧪 Organic Audit Compliance</button>
              <button type="button" class="pq-chip" data-q="How will the projected halal profit of +${e.roiPercentage}% be disbursed to my wallet?">💰 Dividend Payout Process</button>
            </div>
          </div>

          <div class="pq-input-wrap">
            <label for="pq-message-input">Your Specific Inquiry (আপনার প্রশ্ন বা মন্তব্য লিখুন):</label>
            <textarea id="pq-message-input" rows="4" placeholder="Write your question for Lead Farmer ${e.farmerName} and Agronomist ${e.fieldInspector||"Dr. M. Faruk"}..."></textarea>
          </div>

          <div class="pq-notify-options">
            <span class="pq-notify-lbl">Receive Answer Notification via:</span>
            <label class="pq-check-label"><input type="checkbox" checked /> SMS to Registered Phone</label>
            <label class="pq-check-label"><input type="checkbox" checked /> Dashboard Notification</label>
            <label class="pq-check-label"><input type="checkbox" checked /> Verified Audio Memo</label>
          </div>

          <div class="pq-response-box" id="pq-response-box" style="display: none;"></div>
        </div>

        <div class="pq-footer">
          <button type="button" class="btn-pq-cancel" id="btn-cancel-pq-modal">Cancel</button>
          <button type="button" class="btn-pq-submit" id="btn-submit-pq-modal">
            🚀 Send Question to Field Officer (প্রশ্ন পাঠান)
          </button>
        </div>
      </div>
    `,t.classList.add("active"),document.body.style.overflow="hidden";const a=()=>{t.classList.remove("active"),document.body.style.overflow=""};(r=t.querySelector("#btn-close-pq-modal"))==null||r.addEventListener("click",a),(n=t.querySelector("#btn-cancel-pq-modal"))==null||n.addEventListener("click",a);const i=t.querySelector("#pq-message-input");t.querySelectorAll(".pq-chip").forEach(s=>{s.addEventListener("click",()=>{const l=s.getAttribute("data-q")||"";i&&(i.value=l,i.focus())})}),(o=t.querySelector("#btn-submit-pq-modal"))==null||o.addEventListener("click",()=>{const s=(i==null?void 0:i.value.trim())||"Inquiry regarding crop canopy development and biometric timeline.",l=t.querySelector("#pq-response-box"),c=t.querySelector("#btn-submit-pq-modal");l&&c&&(c.disabled=!0,c.textContent="Submitting Question...",setTimeout(()=>{l.style.display="block",l.innerHTML=`
            <div class="pq-success-card">
              <div style="font-size: 1.8rem;">✅</div>
              <div>
                <strong>Inquiry Dispatched to Field Telemetry Team!</strong>
                <p>Ticket <strong>#GB-QRY-${Math.floor(1e5+Math.random()*9e5)}</strong> logged for <em>${e.name}</em> (${e.district}). Lead Agronomist <strong>${e.fieldInspector||"Dr. M. Faruk"}</strong> and Farmer <strong>${e.farmerName}</strong> will review and provide a verified field report & audio memo.</p>
                <span class="pq-expected-time">⏱️ Expected Response: Within 4 hours</span>
              </div>
            </div>
          `,c.textContent="✓ Question Sent",c.style.background="#047857",I.unshift({id:"act-q-"+Date.now(),description:`Field Inquiry: "${s.slice(0,35)}..." (${e.name})`,division:e.district,status:"IN REVIEW",timestamp:"Just now"}),this.showToastNotification(`💬 Question sent to ${e.farmerName} & field agronomist for ${e.name}!`),setTimeout(()=>{a()},2400)},500))}),t.addEventListener("click",s=>{s.target===t&&a()})}openDividendReceiptModal(e){var s,l,c,d;let t=document.getElementById("dividend-receipt-modal");t||(t=document.createElement("div"),t.id="dividend-receipt-modal",t.className="dividend-receipt-modal-overlay",document.body.appendChild(t));const a=e.actualReturnBDT||e.expectedProfitBDT,i=e.investedAmountBDT+a,r="0xGB"+Math.random().toString(16).substr(2,8).toUpperCase()+"D7F2A",n="GB-SHARIAH-2026-"+e.id.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,8);t.innerHTML=`
      <div class="dividend-receipt-dialog">
        <div class="dr-header">
          <div class="dr-brand-row">
            <div class="dr-brand-logo">🌿 GRAMBANDHAN</div>
            <span class="dr-official-badge">OFFICIAL SETTLEMENT VOUCHER</span>
          </div>
          <h2>Halal Dividend & Capital Disbursement Voucher</h2>
          <p class="dr-sub">Mudarabah Shariah Compliance Audit Ref: <strong>AAOIFI-BD-2026/894</strong> • Voucher No: <strong>${n}</strong></p>
          <button class="dr-close-btn" id="btn-close-dr-modal" title="Close">✕</button>
        </div>

        <div class="dr-body">
          <div class="dr-summary-card">
            <div class="dr-sum-item">
              <span class="lbl">Principal Invested</span>
              <strong class="val">৳ ${e.investedAmountBDT.toLocaleString()} BDT</strong>
            </div>
            <div class="dr-sum-item plus">
              <span class="lbl">+ Net Halal Profit (+${e.roiPercentage}%)</span>
              <strong class="val profit">৳ ${a.toLocaleString()} BDT</strong>
            </div>
            <div class="dr-sum-item total">
              <span class="lbl">Total Disbursed to Wallet</span>
              <strong class="val total-val">৳ ${i.toLocaleString()} BDT</strong>
            </div>
          </div>

          <div class="dr-table-wrap">
            <table class="dr-detail-table">
              <tbody>
                <tr>
                  <td><strong>Agricultural Project:</strong></td>
                  <td>${e.name} (${e.bengaliName})</td>
                </tr>
                <tr>
                  <td><strong>Production District:</strong></td>
                  <td>📍 ${e.district} (${e.upazila||"Sadar"}) High-Yield Cluster</td>
                </tr>
                <tr>
                  <td><strong>Cooperative Lead Farmer:</strong></td>
                  <td>👨‍🌾 ${e.farmerName} (Verified DAE Registry #7821)</td>
                </tr>
                <tr>
                  <td><strong>Harvest Yield Realized:</strong></td>
                  <td>🌾 4,850 KG Prime Grade Crop (Sold at Govt Wholesale Mandi)</td>
                </tr>
                <tr>
                  <td><strong>Settlement Date & Status:</strong></td>
                  <td>📅 ${e.completionDate||"12 Aug 2026"} • <span style="color: #047857; font-weight: 700;">✓ PAID & DISBURSED</span></td>
                </tr>
                <tr>
                  <td><strong>Disbursement Txn Hash:</strong></td>
                  <td><code style="font-family: monospace; color: #02221A;">${r}</code></td>
                </tr>
                <tr>
                  <td><strong>Islamic Finance Structure:</strong></td>
                  <td>Mudarabah (Rab-al-Mal: Investor / Mudarib: Rural Cooperative)</td>
                </tr>
                <tr>
                  <td><strong>Shariah Audit Board:</strong></td>
                  <td>Certified Zero-Riba by Bangladesh Islamic Microfinance Council</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="dr-signatures-row">
            <div class="dr-sig-box">
              <div class="dr-sig-line">Dr. M. Faruk (DAE Gazipur)</div>
              <span>Lead Agronomist & Mandi Inspector</span>
            </div>
            <div class="dr-sig-box">
              <div class="dr-sig-line">Mufti K. Hasan (AAOIFI)</div>
              <span>Chairman, Shariah Compliance Board</span>
            </div>
            <div class="dr-sig-box">
              <div class="dr-sig-stamp">✓ AUDITED & VERIFIED</div>
              <span>GramBandhan Platform Treasury</span>
            </div>
          </div>
        </div>

        <div class="dr-footer">
          <button type="button" class="btn-dr-print" id="btn-dr-print">
            🖨️ Print / Download PDF Voucher
          </button>
          <button type="button" class="btn-dr-reinvest" id="btn-dr-reinvest">
            🔄 Reinvest ৳ ${i.toLocaleString()} BDT in Active Projects
          </button>
          <button type="button" class="btn-dr-close" id="btn-dr-close-btn">
            Close
          </button>
        </div>
      </div>
    `,t.classList.add("active"),document.body.style.overflow="hidden";const o=()=>{t.classList.remove("active"),document.body.style.overflow=""};(s=t.querySelector("#btn-close-dr-modal"))==null||s.addEventListener("click",o),(l=t.querySelector("#btn-dr-close-btn"))==null||l.addEventListener("click",o),(c=t.querySelector("#btn-dr-print"))==null||c.addEventListener("click",()=>{this.showToastNotification(`📄 Generating printable PDF for Voucher ${n}...`),window.print()}),(d=t.querySelector("#btn-dr-reinvest"))==null||d.addEventListener("click",()=>{o(),this.closeDashboard();const p=document.getElementById("projects");p==null||p.scrollIntoView({behavior:"smooth"}),this.showToastNotification(`Reinvesting dividend capital of ৳ ${i.toLocaleString()} BDT! Choose an active project.`)}),t.addEventListener("click",p=>{p.target===t&&o()})}switchTab(e,t){this.currentTab=e,t&&(this.currentProjectFilter=t),document.querySelectorAll(".dash-nav-item").forEach(i=>i.classList.remove("active"));const a=document.querySelector(`.dash-nav-item[data-dash-tab="${e}"]`);a&&a.classList.add("active"),this.renderCurrentTabContent()}openDashboard(e="dashboard"){const t=document.getElementById("investor-dashboard-view");t&&(this.switchTab(e),t.classList.add("active"),document.body.style.overflow="hidden")}closeDashboard(){const e=document.getElementById("investor-dashboard-view");e&&(e.classList.remove("active"),document.body.style.overflow="")}getInitials(e){const t=e.trim().split(" ");return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}}class U{constructor(e,t){m(this,"closeAuthBtn",null);m(this,"formSignup",null);m(this,"formLogin",null);m(this,"becomeInvestorBtn",null);m(this,"navInvestBtn",null);m(this,"navLoginBtn",null);m(this,"bannerCtaBtn",null);m(this,"tabBtnSignup",null);m(this,"tabBtnLogin",null);m(this,"signupView",null);m(this,"loginView",null);m(this,"projectsController");m(this,"onToastNotification");this.projectsController=e,this.onToastNotification=t}init(){this.bindElements(),this.setupEventListeners()}bindElements(){this.closeAuthBtn=document.getElementById("close-auth-modal"),this.formSignup=document.getElementById("form-signup"),this.formLogin=document.getElementById("form-login"),this.becomeInvestorBtn=document.getElementById("cta-become-investor"),this.navInvestBtn=document.getElementById("nav-invest-btn"),this.navLoginBtn=document.getElementById("nav-login-btn"),this.bannerCtaBtn=document.getElementById("cta-invest-banner"),this.tabBtnSignup=document.getElementById("tab-btn-signup"),this.tabBtnLogin=document.getElementById("tab-btn-login"),this.signupView=document.getElementById("form-signup"),this.loginView=document.getElementById("auth-login-view")}setupEventListeners(){var t,a,i,r,n,o,s,l,c,d,p,g,u,h;(t=this.tabBtnSignup)==null||t.addEventListener("click",()=>this.switchAuthTab("signup")),(a=this.tabBtnLogin)==null||a.addEventListener("click",()=>this.switchAuthTab("login"));const e=[{cardId:"role-label-farmer",checkId:"role-check-farmer"},{cardId:"role-label-investor",checkId:"role-check-investor"},{cardId:"role-label-buyer",checkId:"role-check-buyer"}];e.forEach(({cardId:v,checkId:C})=>{const w=document.getElementById(v),k=document.getElementById(C);w==null||w.addEventListener("click",B=>{if(B.preventDefault(),k)if(k.checked=!k.checked,k.checked)w.classList.add("selected"),w.style.borderColor="#10B981",w.style.backgroundColor="#ECFDF5";else{if(!e.some(D=>{var y;return(y=document.getElementById(D.checkId))==null?void 0:y.checked})){k.checked=!0;return}w.classList.remove("selected"),w.style.borderColor="#CBD5E1",w.style.backgroundColor="#FFFFFF"}})}),(i=this.navInvestBtn)==null||i.addEventListener("click",v=>{v.preventDefault(),f.clearPendingProject(),this.openAuthModal("signup")}),(r=this.becomeInvestorBtn)==null||r.addEventListener("click",v=>{v.preventDefault(),f.clearPendingProject(),this.openAuthModal("signup")}),(n=this.navLoginBtn)==null||n.addEventListener("click",v=>{v.preventDefault(),f.clearPendingProject(),this.openAuthModal("login")}),(o=this.bannerCtaBtn)==null||o.addEventListener("click",v=>{v.preventDefault(),f.clearPendingProject(),this.openAuthModal("signup")}),(s=document.getElementById("footer-login"))==null||s.addEventListener("click",v=>{v.preventDefault(),f.clearPendingProject(),this.openAuthModal("login")}),(l=this.closeAuthBtn)==null||l.addEventListener("click",()=>{this.closeAuthModal()}),(c=document.getElementById("btn-quick-demo-investor"))==null||c.addEventListener("click",()=>{const v=f.demoLogin("investor");this.handlePostAuthSuccess(v.name)}),(d=document.getElementById("btn-quick-demo-farmer"))==null||d.addEventListener("click",()=>{const v=f.demoLogin("farmer");this.handlePostAuthSuccess(v.name)}),(p=document.getElementById("btn-quick-demo-buyer"))==null||p.addEventListener("click",()=>{const v=f.demoLogin("buyer");this.handlePostAuthSuccess(v.name)}),(g=document.getElementById("btn-quick-demo-both"))==null||g.addEventListener("click",()=>{const v=f.demoLogin("farmer_investor");this.handlePostAuthSuccess(v.name)}),(u=this.formSignup)==null||u.addEventListener("submit",v=>{var b,D,y,T,E;v.preventDefault();const C=((b=document.getElementById("signup-name"))==null?void 0:b.value.trim())||"Tanvir Rahman",w=((D=document.getElementById("signup-identifier"))==null?void 0:D.value.trim())||"tanvir@grambandhan.bd",k=[];(y=document.getElementById("role-check-farmer"))!=null&&y.checked&&k.push("farmer"),(T=document.getElementById("role-check-investor"))!=null&&T.checked&&k.push("investor"),(E=document.getElementById("role-check-buyer"))!=null&&E.checked&&k.push("buyer");const B=f.signUp(C,w,k.length>0?k:["investor"]);this.handlePostAuthSuccess(B.name)}),(h=this.formLogin)==null||h.addEventListener("submit",v=>{v.preventDefault();const C=document.getElementById("login-email"),w=(C==null?void 0:C.value.trim())||"investor@grambandhan.bd",k=f.login(w);this.handlePostAuthSuccess(k.name)})}switchAuthTab(e){e==="signup"?(this.tabBtnSignup&&(this.tabBtnSignup.style.borderBottom="3px solid #02221A",this.tabBtnSignup.style.color="#02221A"),this.tabBtnLogin&&(this.tabBtnLogin.style.borderBottom="3px solid transparent",this.tabBtnLogin.style.color="#64748B"),this.signupView&&(this.signupView.style.display="block"),this.loginView&&(this.loginView.style.display="none")):(this.tabBtnLogin&&(this.tabBtnLogin.style.borderBottom="3px solid #02221A",this.tabBtnLogin.style.color="#02221A"),this.tabBtnSignup&&(this.tabBtnSignup.style.borderBottom="3px solid transparent",this.tabBtnSignup.style.color="#64748B"),this.loginView&&(this.loginView.style.display="block"),this.signupView&&(this.signupView.style.display="none"))}openAuthModal(e="signup",t,a=!1){this.projectsController.openAuthModal(t,a),this.switchAuthTab(e)}openInvestorModal(e,t=!1){this.openAuthModal("signup",e,t)}closeAuthModal(){this.projectsController.closeAuthModal()}handlePostAuthSuccess(e){this.closeAuthModal();const t=f.getRoleBadgeText();this.notifyToast(`Welcome, ${e}! Logged in as ${t}.`);const a=f.getPendingProject();a&&(f.clearPendingProject(),setTimeout(()=>{this.projectsController.openProjectDetailsModal(a,!0)},350))}notifyToast(e){this.onToastNotification&&this.onToastNotification(e)}}class W{constructor(){m(this,"currentFilter","all");m(this,"allProjects",[...N,j]);m(this,"showAllProjects",!0);m(this,"searchQuery","")}init(){this.renderActiveProjects(),this.renderFeaturedProject(),this.setupCategoryFilters(),this.setupProjectSearch(),this.setupEventListeners()}toggleShowAllProjects(){this.showAllProjects=!this.showAllProjects,this.renderActiveProjects()}isShowingAll(){return this.showAllProjects}filterByCategory(e){const t=document.getElementById("project-filters");t&&t.querySelectorAll(".filter-pill").forEach(a=>{const i=a;i.dataset.category===e?i.classList.add("active"):i.classList.remove("active")}),this.currentFilter=e,this.showAllProjects=!0,this.renderActiveProjects()}setupCategoryFilters(){const e=document.getElementById("project-filters");e&&e.addEventListener("click",t=>{const a=t.target.closest(".filter-pill");if(!a)return;const i=a.dataset.category;i&&(e.querySelectorAll(".filter-pill").forEach(r=>r.classList.remove("active")),a.classList.add("active"),this.currentFilter=i,this.renderActiveProjects())})}setupProjectSearch(){const e=document.getElementById("project-search-input"),t=document.getElementById("project-search-suggestions"),a=document.getElementById("project-search-clear");if(!e||!t)return;e.addEventListener("input",()=>{this.searchQuery=e.value,a&&(a.style.display=e.value.length>0?"inline-flex":"none"),this.renderSearchSuggestions(e.value),this.renderActiveProjects()}),e.addEventListener("focus",()=>{this.renderSearchSuggestions(e.value)}),a==null||a.addEventListener("click",()=>{e.value="",this.searchQuery="",a.style.display="none",t.classList.remove("active"),this.renderActiveProjects()});const i=document.getElementById("slide-categories-prev"),r=document.getElementById("slide-categories-next"),n=document.getElementById("project-filters");i==null||i.addEventListener("click",()=>{n==null||n.scrollBy({left:-220,behavior:"smooth"})}),r==null||r.addEventListener("click",()=>{n==null||n.scrollBy({left:220,behavior:"smooth"})}),document.addEventListener("click",o=>{!o.target.closest("#project-search-wrapper")&&t&&t.classList.remove("active")})}renderSearchSuggestions(e){const t=document.getElementById("project-search-suggestions");if(!t)return;const a=e.trim().toLowerCase();if(!a){t.innerHTML=`
        <div class="p-sugg-header">
          <span>✨ QUICK RECOMMENDATIONS</span>
          <span>Type to filter</span>
        </div>
        <div class="p-sugg-item" data-sugg-type="category" data-cat="handicrafts">
          <span class="p-sugg-icon">🧵</span>
          <div class="p-sugg-text">
            <strong>Type "h" for Handicrafts & Artisans</strong>
            <span>Eco Jute, Nakshi Kantha, Bamboo & Handloom</span>
          </div>
          <span class="p-sugg-badge">10 Projects</span>
        </div>
        <div class="p-sugg-item" data-sugg-type="category" data-cat="short_term">
          <span class="p-sugg-icon">⏳</span>
          <div class="p-sugg-text">
            <strong>Type "s" for Short-Term (3-4 Months)</strong>
            <span>Red Chilli, Mustard, Broiler & Honey</span>
          </div>
          <span class="p-sugg-badge">19 Projects</span>
        </div>
        <div class="p-sugg-item" data-sugg-type="category" data-cat="long_term">
          <span class="p-sugg-icon">📅</span>
          <div class="p-sugg-text">
            <strong>Type "l" for Long-Term (5-6+ Months)</strong>
            <span>Dairy, Fisheries Hatchery & Green Tea</span>
          </div>
          <span class="p-sugg-badge">12 Projects</span>
        </div>
      `,t.classList.add("active"),this.attachSuggestionListeners(t);return}const i=[];if(a==="h"||a==="ha"||a.startsWith("hand")||a==="হ"||"handicrafts".includes(a)){const o=this.allProjects.filter(s=>s.category.toLowerCase()==="handicrafts").length;i.push({cat:"handicrafts",icon:"🧵",title:"Handicrafts & Artisans (হস্তশিল্প)",desc:"Eco Jute, Nakshi Kantha, Bamboo Art & Handloom",count:o})}if(a==="s"||a==="sh"||a.startsWith("short")||a==="স্বল্প"||"short_term".includes(a)){const o=this.allProjects.filter(s=>s.durationMonths<=4).length;i.push({cat:"short_term",icon:"⏳",title:"Short-Term Projects (স্বল্পমেয়াদী ৩-৪ মাস)",desc:"Quick harvest & turnaround projects",count:o})}if(a==="l"||a==="lo"||a.startsWith("long")||a==="দীর্ঘ"||"long_term".includes(a)){const o=this.allProjects.filter(s=>s.durationMonths>=5).length;i.push({cat:"long_term",icon:"📅",title:"Long-Term Projects (দীর্ঘমেয়াদী ৫-৬+ মাস)",desc:"Higher annual yield long cycle projects",count:o})}if(a==="c"||a.startsWith("crop")||a.startsWith("farm")||a==="কৃষি"||"crops".includes(a)){const o=this.allProjects.filter(s=>s.category.toLowerCase()==="crops"||s.category.toLowerCase()==="agriculture").length;i.push({cat:"crops",icon:"🌾",title:"Crops & Farming (কৃষি ও ফসল)",desc:"Paddy, Red Chilli, Potatoes, Mustard & Maize",count:o})}if(a==="f"||a.startsWith("fish")||a==="মাছ"||"fisheries".includes(a)){const o=this.allProjects.filter(s=>s.category.toLowerCase()==="fisheries").length;i.push({cat:"fisheries",icon:"🐟",title:"Fisheries (মৎস্য চাষ)",desc:"Aquaculture, Prawns & Carp fish farming",count:o})}if(a==="d"||a.startsWith("live")||a.startsWith("dairy")||a==="পশু"||"livestock".includes(a)){const o=this.allProjects.filter(s=>s.category.toLowerCase()==="livestock").length;i.push({cat:"livestock",icon:"🐄",title:"Livestock & Dairy (পশুপালন ও দুগ্ধ)",desc:"Deshi cow fattening, milk chilling & goats",count:o})}let r=this.allProjects.filter(o=>o.name.toLowerCase().includes(a)||o.bengaliName.toLowerCase().includes(a)||o.category.toLowerCase().includes(a)||o.location.toLowerCase().includes(a)||o.district&&o.district.toLowerCase().includes(a));if(a==="h"||a==="ha"||a.startsWith("hand")||a==="হ"){const o=r.filter(l=>l.category.toLowerCase()==="handicrafts"),s=r.filter(l=>l.category.toLowerCase()!=="handicrafts");r=[...o,...s]}if(i.length===0&&r.length===0){t.innerHTML=`
        <div style="padding: 16px; text-align: center; color: #64748B; font-size: 0.8rem;">
          No matching projects or categories for "<strong>${e}</strong>"
        </div>
      `,t.classList.add("active");return}let n="";i.length>0&&(n+=`
        <div class="p-sugg-header">
          <span>✨ CATEGORY RECOMMENDATIONS</span>
          <span>Click to filter</span>
        </div>
        ${i.map(o=>`
          <div class="p-sugg-item" data-sugg-type="category" data-cat="${o.cat}">
            <span class="p-sugg-icon">${o.icon}</span>
            <div class="p-sugg-text">
              <strong>${o.title}</strong>
              <span>${o.desc}</span>
            </div>
            <span class="p-sugg-badge">${o.count} Projects</span>
          </div>
        `).join("")}
      `),r.length>0&&(n+=`
        <div class="p-sugg-header">
          <span>🎯 MATCHING ACTIVE PROJECTS (${r.length})</span>
          <span>Click to view</span>
        </div>
        ${r.slice(0,6).map(o=>`
          <div class="p-sugg-item" data-sugg-type="project" data-project-id="${o.id}">
            <img src="${o.image}" alt="${o.name}" class="p-sugg-thumb" />
            <div class="p-sugg-text">
              <strong>${o.name}</strong>
              <span>📍 ${o.location} • ${o.periodText||o.durationMonths+" Mo"} • Return: ${o.potentialReturn}</span>
            </div>
            <span class="p-sugg-badge">৳ ${o.minInvestmentBDT.toLocaleString()}</span>
          </div>
        `).join("")}
      `),t.innerHTML=n,t.classList.add("active"),this.attachSuggestionListeners(t)}attachSuggestionListeners(e){e.querySelectorAll(".p-sugg-item").forEach(t=>{t.addEventListener("click",a=>{const i=a.currentTarget,r=i.dataset.suggType;if(r==="category"){const n=i.dataset.cat;if(n){const o=document.getElementById("project-search-input");o&&(o.value=""),this.searchQuery="",e.classList.remove("active"),this.filterByCategory(n)}}else if(r==="project"){const n=i.dataset.projectId;n&&(e.classList.remove("active"),this.handleProjectClick(n,!1))}})})}setupEventListeners(){document.addEventListener("click",e=>{const t=e.target,a=t.closest('[data-action="view-project"]');if(a){e.preventDefault();const s=a.dataset.projectId;s&&this.handleProjectClick(s,!1);return}const i=t.closest('[data-action="invest-project"]');if(i){e.preventDefault();const s=i.dataset.projectId;s&&this.handleProjectClick(s,!0);return}const r=t.closest(".project-card");if(r&&!t.closest("button")&&!t.closest("a")){const s=r.dataset.projectId;s&&this.handleProjectClick(s,!1);return}if(t.closest("#btn-view-all-projects")){e.preventDefault(),this.toggleShowAllProjects();return}if(t.closest("#btn-expand-projects")){e.preventDefault(),this.toggleShowAllProjects();return}})}handleProjectClick(e,t=!1){f.isAuthenticated()?this.openProjectDetailsModal(e,t):(f.setPendingProject(e),this.openAuthModal(e,t))}openAuthModal(e,t=!1){const a=document.getElementById("auth-modal");if(!a)return;const i=document.getElementById("auth-modal-project-context");if(i)if(e){const r=this.allProjects.find(n=>n.id===e);r&&(i.style.display="flex",i.innerHTML=`
            <div class="context-icon">🔒</div>
            <div class="context-text">
              <strong>Investor Access Required</strong>
              <span>Log in to review verified financial audit & profit-sharing terms for <em>"${r.name}"</em></span>
            </div>
          `)}else i.style.display="none";a.classList.add("active"),a.setAttribute("data-direct-invest",t?"true":"false"),document.body.style.overflow="hidden"}closeAuthModal(){const e=document.getElementById("auth-modal");e&&(e.classList.remove("active"),document.body.style.overflow="")}renderActiveProjects(){const e=document.getElementById("active-projects-grid");if(!e)return;let t=this.allProjects;if(this.currentFilter!=="all"){const s=this.currentFilter.toLowerCase();s==="short_term"?t=this.allProjects.filter(l=>l.durationMonths<=4):s==="long_term"?t=this.allProjects.filter(l=>l.durationMonths>=5):s==="handicrafts"?t=this.allProjects.filter(l=>l.category.toLowerCase()==="handicrafts"):s==="crops"?t=this.allProjects.filter(l=>l.category.toLowerCase()==="crops"||l.category.toLowerCase()==="agriculture"):s==="livestock"?t=this.allProjects.filter(l=>l.category.toLowerCase()==="livestock"):s==="fisheries"?t=this.allProjects.filter(l=>l.category.toLowerCase()==="fisheries"):s==="agro"?t=this.allProjects.filter(l=>l.category.toLowerCase()==="agro"||l.category.toLowerCase()!=="handicrafts"&&l.category.toLowerCase()!=="crops"&&l.category.toLowerCase()!=="agriculture"&&l.category.toLowerCase()!=="livestock"&&l.category.toLowerCase()!=="fisheries"):t=this.allProjects.filter(l=>l.category.toLowerCase()===s)}if(this.searchQuery&&this.searchQuery.trim()){const s=this.searchQuery.trim().toLowerCase();t=t.filter(l=>l.name.toLowerCase().includes(s)||l.bengaliName.toLowerCase().includes(s)||l.category.toLowerCase().includes(s)||l.location.toLowerCase().includes(s)||l.district&&l.district.toLowerCase().includes(s)||l.shortStory&&l.shortStory.toLowerCase().includes(s))}if(t.length===0){e.innerHTML=`
        <div class="empty-state" style="padding: 40px; text-align: center; color: #5B6E66; grid-column: 1 / -1;">
          <p>No active projects found matching your criteria.</p>
        </div>
      `;const s=document.getElementById("projects-bottom-cta");s&&(s.style.display="none");return}const a=this.showAllProjects?t:t.slice(0,4);e.innerHTML=a.map(s=>{const l=Math.min(100,Math.round(s.fundingRaisedBDT/s.fundingGoalBDT*100));return`
        <article class="project-card" data-project-id="${s.id}">
          <!-- Top Image Header with Overlay matching media_1789573283421.png -->
          <div class="project-card-header">
            <img src="${s.image}" alt="${s.name}" class="project-card-image" loading="lazy" />
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
                <h3 class="project-title-overlay">${s.name}</h3>
                <div class="project-loc-overlay">📍 ${s.location}</div>
              </div>
              <div class="header-price-right">
                <div class="unit-price-overlay">৳ ${s.minInvestmentBDT.toLocaleString()} BDT</div>
                <div class="unit-label-overlay">BDT/unit</div>
              </div>
            </div>
          </div>

          <!-- Eye-Soothing Card Body matching media_1789573283421.png -->
          <div class="project-card-body">
            <!-- Top Right Pastel Pill Badge -->
            <div class="project-tag-row">
              <span class="variable-return-pill">
                🌱 ${s.returnTypeTag||"Variable Return"}
              </span>
            </div>

            <!-- Clean Key-Value Metrics List matching Image 2 -->
            <div class="soothing-metrics-list">
              <div class="metric-line">
                <span class="metric-key">Period</span>
                <strong class="metric-val">${s.periodText||s.durationMonths+" Months"}</strong>
              </div>
              <div class="metric-line">
                <span class="metric-key">Return</span>
                <strong class="metric-val return-val">${s.potentialReturn}</strong>
              </div>
              <div class="metric-line total-return-line">
                <span class="metric-key">Total return</span>
                <strong class="metric-val total-val">${s.totalReturnBDT||"৳ "+(s.minInvestmentBDT*1.15).toLocaleString()+" – ৳ "+(s.minInvestmentBDT*1.18).toLocaleString()}</strong>
              </div>
            </div>

            <!-- Progress & Micro-Stats matching media_1789573484322.png -->
            <div class="project-progress-container">
              <div class="progress-labels-row">
                <span class="percent-bold">${l}% Funded</span>
                <span class="days-left">${s.duration}</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill" style="width: ${l}%;"></div>
              </div>
              <div class="goal-micro-stat">Raised: ৳${s.fundingRaisedBDT.toLocaleString()} of ৳${s.fundingGoalBDT.toLocaleString()} (DEMO)</div>
            </div>

            <!-- Card Action Buttons matching media_1789573484322.png -->
            <div class="project-card-btn-group">
              <button class="btn btn-invest-card" data-action="invest-project" data-project-id="${s.id}">
                Invest Now
              </button>
              <button class="btn btn-view-terms" data-action="view-project" data-project-id="${s.id}">
                View Terms
              </button>
            </div>
          </div>
        </article>
      `}).join("");const i=document.getElementById("btn-view-all-projects");i&&(this.showAllProjects?i.innerHTML=`
          <span>Show Top 4</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        `:i.innerHTML=`
          <span>View All (${t.length})</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        `);const r=document.getElementById("projects-bottom-cta"),n=document.getElementById("btn-expand-projects-text"),o=document.getElementById("btn-expand-projects-icon");r&&n&&o&&(t.length<=4?r.style.display="none":(r.style.display="flex",this.showAllProjects?(n.textContent=`Showing all ${t.length} active projects (Click to show Top 4)`,o.innerHTML='<polyline points="18 15 12 9 6 15"></polyline>'):(n.textContent=`View All Projects (${t.length}টি প্রকল্প দেখুন)`,o.innerHTML='<polyline points="6 9 12 15 18 9"></polyline>')))}renderFeaturedProject(){const e=document.getElementById("featured-project-container");if(!e)return;const t=j,a=Math.min(100,Math.round(t.fundingRaisedBDT/t.fundingGoalBDT*100));e.innerHTML=`
      <div class="featured-project-card">
        <div class="featured-project-media">
          <img src="${t.image}" alt="${t.name}" class="featured-img" loading="lazy" />
          <span class="featured-badge">🌟 ${t.badge}</span>
        </div>

        <div class="featured-project-content">
          <div class="featured-header">
            <div class="location-tag">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${t.location}</span>
            </div>
            <div class="verified-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              <span>100% In-Person Verified</span>
            </div>
          </div>

          <h3 class="featured-title">${t.name}</h3>
          <p class="featured-bengali">${t.bengaliName}</p>
          <p class="featured-story">${t.shortStory}</p>

          <div class="featured-producer">
            <strong>Led by:</strong> ${t.producerName} (${t.cooperativeInfo})
          </div>

          <div class="featured-progress-block">
            <div class="progress-bar-track">
              <div class="progress-bar-fill" style="width: ${a}%;"></div>
            </div>
            <div class="progress-stats">
              <span><strong>৳${t.fundingRaisedBDT.toLocaleString()}</strong> raised of ৳${t.fundingGoalBDT.toLocaleString()}</span>
              <span class="percent-tag">${a}% Funded</span>
            </div>
          </div>

          <div class="featured-metrics-row">
            <div class="f-metric">
              <span class="label">Potential Return (Est.)</span>
              <span class="val return-text">${t.potentialReturn}</span>
            </div>
            <div class="f-metric">
              <span class="label">Duration</span>
              <span class="val">${t.duration}</span>
            </div>
            <div class="f-metric">
              <span class="label">Risk Level</span>
              <span class="val">${t.riskLevel}</span>
            </div>
            <div class="f-metric">
              <span class="label">Min. Ticket</span>
              <span class="val">৳${t.minInvestmentBDT.toLocaleString()}</span>
            </div>
          </div>

          <div class="featured-actions">
            <button class="btn btn-primary btn-lg" data-action="view-project" data-project-id="${t.id}">
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
    `}openProjectDetailsModal(e,t=!1){var v,C,w,k,B,b,D;const a=document.getElementById("project-detail-modal");if(!a)return;const i=this.allProjects.find(y=>y.id===e);if(!i)return;const r=document.getElementById("project-detail-modal-body");if(!r)return;const n=Math.min(100,Math.round(i.fundingRaisedBDT/i.fundingGoalBDT*100)),o=(i.returnRangePercent[0]+i.returnRangePercent[1])/2,s=Math.round(i.minInvestmentBDT*o/100),l=i.minInvestmentBDT+s;r.innerHTML=`
      <!-- 1. Top Navbar matching media_1789675641330.png -->
      <nav class="ss-navbar">
        <div class="ss-nav-left">
          <a href="#" class="ss-brand" id="ss-brand-home">
            <svg class="ss-brand-icon" viewBox="0 0 24 24" fill="none" style="width:24px;height:24px;">
              <path d="M21 3C13.5 3.5 6 9 4 17.5C3.5 19.5 4.5 21 6.5 21.5C8 22 10 21.5 12 20C17.5 16 20.5 10 21 3Z" fill="#10B981"/>
              <path d="M8.5 17C12 13.5 15.5 10 19 5.5" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            <span>GramBandhan</span>
          </a>

          <div class="ss-nav-links">
            <span class="ss-nav-link" data-nav-cat="crops">Farming</span>
            <span class="ss-nav-link ${i.category.toLowerCase()==="fisheries"?"active":""}" data-nav-cat="fisheries">Fisheries</span>
            <span class="ss-nav-link" data-nav-cat="livestock">Poultry</span>
            <span class="ss-nav-link" data-nav-cat="handicrafts">Artisans</span>
            <span class="ss-nav-link" data-nav-cat="handicrafts">Handicrafts</span>
            <span class="ss-nav-link" data-nav-cat="short_term">Short-Term</span>
            <span class="ss-nav-link" data-nav-cat="long_term">Long-Term</span>
          </div>
        </div>

        <div class="ss-nav-right">
          <div class="ss-nav-search">
            <span>🔍</span>
            <input type="text" placeholder="Search in collective..." />
          </div>

          <button class="ss-nav-bell" title="Notifications">🔔</button>

          <button class="ss-btn-top-invest" id="ss-btn-nav-invest">
            Invest Now
          </button>

          <button class="ss-btn-close-modal" id="close-project-detail-btn" title="Return to Projects">
            ✕ Back to Projects
          </button>
        </div>
      </nav>

      <!-- 2. Hero Section (#06281E Deep Dark Green) matching media_1789675641330.png -->
      <section class="ss-hero-section">
        <div class="ss-hero-left">
          <h1 class="ss-hero-title">${i.name}</h1>

          <div class="ss-hero-funding-card" id="ss-hero-card">
            <div class="ss-card-metrics-row">
              <div>
                <div class="ss-metric-sublabel">PRICE PER SHARE:</div>
                <div class="ss-price-val">৳ ${i.minInvestmentBDT.toLocaleString()} BDT</div>
              </div>
              <div>
                <div class="ss-metric-sublabel">COMMITTED FUNDS:</div>
                <div class="ss-committed-val">${n}% Funded</div>
              </div>
            </div>

            <div class="ss-hero-progress">
              <div class="ss-hero-progress-bar" style="width: ${n}%;"></div>
            </div>

            <div class="ss-hero-actions-row">
              <button class="btn-secure-shares" id="btn-hero-secure-shares">
                Secure Shares
              </button>
              <button class="btn-share-icon" id="btn-hero-share" title="Share Project Details">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="ss-hero-image-wrap">
          <img src="${i.image}" alt="${i.name}" class="ss-hero-img" />
        </div>
      </section>

      <!-- 3. 4-Card Metric Strip (#EBF3EE Cream/Mint) matching media_1789675641330.png -->
      <div class="ss-metric-strip">
        <div class="ss-strip-box">
          <div class="ss-strip-lbl">EST. RETURN</div>
          <div class="ss-strip-val" style="color: #064E3B;">${i.potentialReturn}</div>
        </div>
        <div class="ss-strip-box">
          <div class="ss-strip-lbl">DURATION</div>
          <div class="ss-strip-val">${i.periodText||i.durationMonths+" Months"}</div>
        </div>
        <div class="ss-strip-box">
          <div class="ss-strip-lbl">UNIT PRICE</div>
          <div class="ss-strip-val">৳ ${i.minInvestmentBDT.toLocaleString()} BDT</div>
        </div>
        <div class="ss-strip-box">
          <div class="ss-strip-lbl">LOCATION</div>
          <div class="ss-strip-val">${i.district||i.location}</div>
        </div>
      </div>

      <!-- 4. Project Details Section (#E1EEF7 Light Ice-Blue) matching media_1789675641330.png -->
      <section class="ss-details-section">
        <div class="ss-details-left">
          <h3>Project Details</h3>
          <p class="ss-details-p">
            ${i.fullDescription||i.shortStory}
          </p>
          <p class="ss-details-p">
            The cultivation and production cycle spans from initial seed preparation and nursery management in early spring to peak harvest in summer. By investing, you provide critical working capital for advanced solar-powered aeration/cooling, bio-organic fertilizers formulated for regional soils, and digital monitoring systems that reduce post-harvest losses by 18%.
          </p>
          <p class="ss-details-p">
            Your investment directly impacts the food security of rural communities while offering a transparent, asset-backed financial return based on the realized wholesale market value of the harvested produce under Shariah-compliant profit-sharing.
          </p>

          <div class="ss-funding-progress-block">
            <h4>Funding Progress</h4>
            <div style="font-size: 0.85rem; color: #475569; font-weight: 600;">
              ৳ ${i.fundingRaisedBDT.toLocaleString()} of ৳ ${i.fundingGoalBDT.toLocaleString()} Raised
            </div>
            <div class="ss-fp-bar-wrap">
              <div class="ss-fp-track">
                <div class="ss-fp-fill" style="width: ${n}%;"></div>
              </div>
              <span class="ss-fp-percent">${n}%</span>
            </div>
          </div>
        </div>

        <div class="ss-details-right" id="ss-profit-section">
          <!-- Approximate Profit Statement Card -->
          <div class="ss-profit-card" id="ss-profit-card">
            <h4>Approximate Profit Statement</h4>

            <div class="ss-stmt-line">
              <span>Share Return:</span>
              <strong id="ss-share-return-val">৳ ${s.toLocaleString()} BDT</strong>
            </div>
            <div class="ss-stmt-line">
              <span>Investment Period:</span>
              <strong>${i.durationMonths*30} Days</strong>
            </div>

            <div class="ss-projected-green-box">
              <span>Total Projected Return:</span>
              <span id="ss-projected-return-val">৳ ${l.toLocaleString()} BDT</span>
            </div>

            <div class="ss-units-stepper-wrap">
              <span class="ss-units-lbl">SELECT INVESTMENT UNITS</span>
              <div class="ss-stepper-box">
                <button class="ss-step-btn" id="btn-step-minus" type="button">−</button>
                <span class="ss-step-val" id="ss-unit-display">1 Unit (৳ ${i.minInvestmentBDT.toLocaleString()} BDT)</span>
                <button class="ss-step-btn" id="btn-step-plus" type="button">+</button>
              </div>
            </div>

            <button class="btn-invest-full-now" id="btn-ss-invest-confirm">
              Invest Now
            </button>

            <div class="ss-fees-note">
              NO HIDDEN FEES • ASSET BACKED
            </div>

            <div id="ss-invest-success-box" style="display: none; margin-top: 14px; background: #DCFCE7; border: 1px solid #10B981; border-radius: 8px; padding: 12px; font-size: 0.825rem; color: #064E3B; text-align: center;">
              <strong>✓ Investment Confirmed (Demo)!</strong>
              <p style="margin-top: 4px; font-size: 0.775rem;">Your capital commitment has been successfully registered. You can track field progress in your Investor Dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Risk Management Section (White) matching media_1789675641330.png -->
      <section class="ss-risk-section">
        <h3>Risk Management</h3>
        <p class="ss-section-subtitle">Transparent identification of challenges and our structured responses.</p>

        <div class="ss-risk-cards-grid">
          <!-- Card 1: Price Volatility -->
          <div class="ss-risk-card">
            <div class="ss-risk-icon-wrap">%</div>
            <h4>Price Volatility</h4>
            <p class="ss-risk-desc">
              Fluctuations in local agricultural market prices can impact short-term revenue projections for farm harvests.
            </p>
            <div class="ss-mitigation-box">
              <strong>Mitigation:</strong> Advance contracting with institutional distributors and cold-storage partners to lock in wholesale prices before harvest.
            </div>
          </div>

          <!-- Card 2: Climate Resilience -->
          <div class="ss-risk-card">
            <div class="ss-risk-icon-wrap green">🌱</div>
            <h4>Climate Resilience</h4>
            <p class="ss-risk-desc">
              Vulnerability to seasonal weather extremes and sudden temperature/salinity changes in the cultivation belt.
            </p>
            <div class="ss-mitigation-box">
              <strong>Mitigation:</strong> Implementation of advanced water monitoring systems, climate-resilient certified seeds, and sea-wall reinforced bunds.
            </div>
          </div>

          <!-- Card 3: Operational Oversight -->
          <div class="ss-risk-card">
            <div class="ss-risk-icon-wrap blue">🛡️</div>
            <h4>Operational Oversight</h4>
            <p class="ss-risk-desc">
              Managing remote agricultural sites requires rigorous logistical and biological quality control to ensure high survival rates.
            </p>
            <div class="ss-mitigation-box">
              <strong>Mitigation:</strong> Daily digitization of logs by field-site managers and bi-weekly audits by independent university agronomists.
            </div>
          </div>
        </div>
      </section>

      <!-- 6. Frequently Asked Questions Section (#06281E Deep Dark Green) matching media_1789675641330.png -->
      <section class="ss-faq-section">
        <h3>Frequently Asked Questions</h3>

        <div class="ss-faq-accordion">
          <!-- FAQ 1 -->
          <div class="ss-faq-item">
            <div class="ss-faq-question" data-faq-index="1">
              <span>How is the profit calculated?</span>
              <span class="faq-chevron">▾</span>
            </div>
            <div class="ss-faq-answer" id="faq-ans-1">
              Profit is calculated based on the net market price of actual harvested produce after deducting operational costs like certified seeds, organic fertilizers, and field labor. Returns are distributed to ethical investors based on their agreed Shariah profit-sharing contract ratio.
            </div>
          </div>

          <!-- FAQ 2 -->
          <div class="ss-faq-item">
            <div class="ss-faq-question" data-faq-index="2">
              <span>What happens if the production is affected?</span>
              <span class="faq-chevron">▾</span>
            </div>
            <div class="ss-faq-answer" id="faq-ans-2" style="display: none;">
              The project is structured with comprehensive risk mitigation, including insurance against extreme climatic events, decentralized emergency cold-storage, and diversified plots to protect capital for our ethical investors under Halal principles.
            </div>
          </div>

          <!-- FAQ 3 -->
          <div class="ss-faq-item">
            <div class="ss-faq-question" data-faq-index="3">
              <span>When do I receive my return?</span>
              <span class="faq-chevron">▾</span>
            </div>
            <div class="ss-faq-answer" id="faq-ans-3" style="display: none;">
              Returns are credited directly to your registered bank account or verified MFS wallet (bKash/Nagad) once the harvest and wholesale sale are completed, within approximately 15 days following the project tenure completion date.
            </div>
          </div>
        </div>
      </section>

      <!-- 7. Connect with the Collective (White) matching media_1789675641330.png -->
      <section class="ss-connect-section">
        <div class="ss-connect-left">
          <h3>Connect with the Collective</h3>
          <p>Have questions about this project or the investment process? Our field team is here to provide clarity and complete transparency.</p>

          <div class="ss-connect-item">
            <span>✉️</span>
            <span>invest@grambandhan.com</span>
          </div>
          <div class="ss-connect-item">
            <span>📍</span>
            <span>${i.district||i.location}, Bangladesh</span>
          </div>
        </div>

        <div class="ss-connect-right">
          <form class="ss-connect-form" id="ss-contact-form">
            <div class="ss-form-2col">
              <div class="ss-fg">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div class="ss-fg">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
            </div>

            <div class="ss-fg">
              <label>Subject</label>
              <select>
                <option value="inquiry">Investment Inquiry</option>
                <option value="field-visit">Field Visit Request</option>
                <option value="shariah">Shariah Contract Terms</option>
              </select>
            </div>

            <div class="ss-fg">
              <label>Your Message</label>
              <textarea rows="3" placeholder="How can we help you?" required></textarea>
            </div>

            <button type="submit" class="btn-send-message" id="btn-send-collective-msg">
              SEND MESSAGE
            </button>
            <div id="ss-msg-success" style="display:none; color: #166534; font-size: 0.8rem; margin-top: 10px; text-align: center; font-weight: 700;">
              ✓ Your message has been sent to the cooperative team. We will respond within 24 hours.
            </div>
          </form>
        </div>
      </section>

      <!-- 8. Footer (#02221A) -->
      <footer class="ss-footer">
        <div>
          <strong>GramBandhan</strong> • Empowering rural Bangladesh through transparent, interest-free Shariah investment.
        </div>
        <div>
          Risk Disclosure • Annual Reports • Shariah Board Certified No: GB/SB/2026/08
        </div>
      </footer>
    `,a.classList.add("active"),document.body.style.overflow="hidden";let c=1;const d=()=>{const y=document.getElementById("ss-unit-display"),T=document.getElementById("ss-projected-return-val"),E=document.getElementById("ss-share-return-val"),P=c*i.minInvestmentBDT,S=Math.round(P*(o/100)),L=P+S;y&&(y.textContent=`${c} Unit${c>1?"s":""} (৳ ${P.toLocaleString()} BDT)`),T&&(T.textContent=`৳ ${L.toLocaleString()} BDT`),E&&(E.textContent=`৳ ${S.toLocaleString()} BDT`)};(v=document.getElementById("btn-step-minus"))==null||v.addEventListener("click",()=>{c>1&&(c--,d())}),(C=document.getElementById("btn-step-plus"))==null||C.addEventListener("click",()=>{c++,d()}),(w=document.getElementById("close-project-detail-btn"))==null||w.addEventListener("click",()=>{this.closeProjectDetailsModal()});const p=()=>{const y=document.getElementById("ss-profit-section");y==null||y.scrollIntoView({behavior:"smooth"})};(k=document.getElementById("btn-hero-secure-shares"))==null||k.addEventListener("click",p),(B=document.getElementById("ss-btn-nav-invest"))==null||B.addEventListener("click",p),t&&setTimeout(()=>{p()},100),(b=document.getElementById("btn-hero-share"))==null||b.addEventListener("click",()=>{var y;(y=navigator.clipboard)==null||y.writeText(window.location.href),alert(`Project link for "${i.name}" copied to clipboard!`)});const g=document.getElementById("btn-ss-invest-confirm");g==null||g.addEventListener("click",()=>{f.isAuthenticated()?f.hasRole("investor")||f.addRole("investor"):f.loginWithCredentials("investor@grambandhan.com","investor123");const y=new CustomEvent("grambandhan:open-invest-payment",{detail:{projectId:i.id,units:c}});window.dispatchEvent(y)}),document.querySelectorAll(".ss-faq-question").forEach(y=>{y.addEventListener("click",T=>{const E=T.currentTarget.getAttribute("data-faq-index"),P=document.getElementById(`faq-ans-${E}`);if(P){const S=P.style.display!=="none";P.style.display=S?"none":"block"}})});const u=document.getElementById("ss-contact-form"),h=document.getElementById("ss-msg-success");u==null||u.addEventListener("submit",y=>{y.preventDefault(),h&&(h.style.display="block",u.reset())}),document.querySelectorAll(".ss-nav-link").forEach(y=>{y.addEventListener("click",T=>{const E=T.currentTarget.getAttribute("data-nav-cat");if(E){this.closeProjectDetailsModal(),this.filterByCategory(E);const P=document.getElementById("projects");P==null||P.scrollIntoView({behavior:"smooth"})}})}),(D=document.getElementById("ss-brand-home"))==null||D.addEventListener("click",y=>{y.preventDefault(),this.closeProjectDetailsModal()})}closeProjectDetailsModal(){const e=document.getElementById("project-detail-modal");e&&(e.classList.remove("active"),document.body.style.overflow="")}}class J{constructor(){m(this,"cart",[]);m(this,"activeView","storefront");m(this,"selectedProductId",null);m(this,"currentCategory","all");m(this,"searchQuery","");m(this,"appliedVoucher",null);m(this,"selectedPaymentMethod","bKash");m(this,"currentProfileTab","on_the_way");m(this,"buyerSession",null);m(this,"orders",[]);m(this,"pendingAuthAction",null);m(this,"flashTimerSeconds",15512);m(this,"timerInterval",null);this.loadState()}init(){this.renderHomepagePreviewGrid(),this.setupGlobalTriggers(),this.startFlashTimer(),this.initBuyerAuthDialog()}loadState(){try{const e=localStorage.getItem("gb_market_cart");e&&(this.cart=JSON.parse(e));const t=localStorage.getItem("gb_buyer_session");if(t)this.buyerSession=JSON.parse(t);else if(f.isAuthenticated()){const i=f.getUser();i&&(this.buyerSession={name:i.name,email:i.email,phone:i.phone,address:"House 14, Road 5, Dhanmondi",city:"Dhaka",district:"Dhaka",preferredPayment:"bKash",memberSince:"March 2026"})}const a=localStorage.getItem("gb_buyer_orders");a?this.orders=JSON.parse(a):(this.orders=[...$],localStorage.setItem("gb_buyer_orders",JSON.stringify(this.orders)))}catch(e){console.warn("LocalStorage error in MarketplaceController:",e),this.orders=[...$]}}saveCart(){try{localStorage.setItem("gb_market_cart",JSON.stringify(this.cart))}catch(e){console.warn(e)}this.updateCartBadge()}saveOrders(){try{localStorage.setItem("gb_buyer_orders",JSON.stringify(this.orders))}catch(e){console.warn(e)}}startFlashTimer(){this.timerInterval&&clearInterval(this.timerInterval),this.timerInterval=setInterval(()=>{this.flashTimerSeconds>0&&(this.flashTimerSeconds--,this.updateFlashTimerDisplay())},1e3)}updateFlashTimerDisplay(){const e=Math.floor(this.flashTimerSeconds/3600),t=Math.floor(this.flashTimerSeconds%3600/60),a=this.flashTimerSeconds%60,i=s=>s.toString().padStart(2,"0"),r=document.getElementById("flash-h"),n=document.getElementById("flash-m"),o=document.getElementById("flash-s");r&&(r.textContent=i(e)),n&&(n.textContent=i(t)),o&&(o.textContent=i(a))}renderHomepagePreviewGrid(){const e=document.getElementById("marketplace-preview-grid");if(!e)return;const t=A.slice(0,4);e.innerHTML=t.map(a=>`
      <article class="market-card" data-product-id="${a.id}">
        <div class="market-card-image-wrap">
          <img src="${a.image}" alt="${a.name}" class="market-card-img" loading="lazy" />
          <span class="artisan-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            ${a.artisanName} (${a.artisanDistrict})
          </span>
          ${a.discountPercent?`<span class="market-demo-tag">-${a.discountPercent}%</span>`:""}
        </div>
        <div class="market-card-content">
          <h4 class="market-title">${a.name}</h4>
          <p class="market-bengali">${a.bengaliName}</p>
          <div class="market-price-row">
            <span class="price">৳${a.priceBDT.toLocaleString()}</span>
            <span class="craft-type">${a.craftType}</span>
          </div>
          <button class="btn btn-sm btn-market" data-action="open-marketplace" data-product-id="${a.id}">
            View in Marketplace →
          </button>
        </div>
      </article>
    `).join("")}setupGlobalTriggers(){document.addEventListener("click",e=>{const a=e.target.closest('[data-action="open-marketplace"]');if(a){e.preventDefault();const i=a.getAttribute("data-product-id");i?this.openProductDetail(i):this.openMarketplace("storefront")}}),document.addEventListener("keydown",e=>{if(e.key==="Escape"){const t=document.getElementById("marketplace-modal");t!=null&&t.classList.contains("active")&&this.closeMarketplace()}})}openMarketplace(e="storefront"){const t=document.getElementById("marketplace-modal");t&&(this.activeView=e,this.renderMarketplaceApp(),t.classList.add("active"),document.body.style.overflow="hidden")}closeMarketplace(){const e=document.getElementById("marketplace-modal");e&&(e.classList.remove("active"),document.body.style.overflow="")}openMarketplaceModal(){this.openMarketplace("storefront")}closeMarketplaceModal(){this.closeMarketplace()}openProductDetail(e){this.selectedProductId=e,this.openMarketplace("detail")}openCart(){this.openMarketplace("cart")}openCheckout(){this.requireBuyerAuth(()=>{if(this.cart.length===0){this.showToast("Your bag is empty! Add products first."),this.openMarketplace("storefront");return}this.openMarketplace("checkout")})}openBuyerProfile(e="on_the_way"){this.requireBuyerAuth(()=>{this.currentProfileTab=e,this.openMarketplace("profile")})}requireBuyerAuth(e){if(this.buyerSession){e();return}this.pendingAuthAction=e,this.openBuyerAuthDialog()}initBuyerAuthDialog(){var t,a,i;let e=document.getElementById("buyer-auth-dialog");e||(e=document.createElement("div"),e.id="buyer-auth-dialog",e.className="buyer-auth-dialog",e.innerHTML=`
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
      `,document.body.appendChild(e),(t=e.querySelector("#close-buyer-auth-btn"))==null||t.addEventListener("click",()=>{this.closeBuyerAuthDialog()}),(a=e.querySelector("#btn-demo-buyer-auth"))==null||a.addEventListener("click",()=>{this.loginBuyerAsDemo()}),(i=e.querySelector("#buyer-manual-auth-form"))==null||i.addEventListener("submit",r=>{var o;r.preventDefault();const n=((o=document.getElementById("auth-input-phone"))==null?void 0:o.value)||"+880 1712-889900";this.loginBuyerCustom(n)}))}openBuyerAuthDialog(){const e=document.getElementById("buyer-auth-dialog");e&&e.classList.add("active")}closeBuyerAuthDialog(){const e=document.getElementById("buyer-auth-dialog");e&&e.classList.remove("active"),this.pendingAuthAction=null}loginBuyerAsDemo(){this.buyerSession={...F};try{localStorage.setItem("gb_buyer_session",JSON.stringify(this.buyerSession))}catch(e){console.warn(e)}if(this.closeBuyerAuthDialog(),this.showToast(`Welcome back, ${this.buyerSession.name}!`),this.renderTopBarRight(),this.pendingAuthAction){const e=this.pendingAuthAction;this.pendingAuthAction=null,e()}}loginBuyerCustom(e){this.buyerSession={name:"Tanvir Ahmed",email:"tanvir.ahmed@buyer.bd",phone:e,address:"Flat 4B, House 18, Road 11, Banani",city:"Dhaka",district:"Dhaka",preferredPayment:"bKash",memberSince:"March 2026"};try{localStorage.setItem("gb_buyer_session",JSON.stringify(this.buyerSession))}catch(t){console.warn(t)}if(this.closeBuyerAuthDialog(),this.showToast(`Logged in successfully as ${this.buyerSession.name}!`),this.renderTopBarRight(),this.pendingAuthAction){const t=this.pendingAuthAction;this.pendingAuthAction=null,t()}}logoutBuyer(){this.buyerSession=null;try{localStorage.removeItem("gb_buyer_session")}catch(e){console.warn(e)}this.showToast("Signed out of buyer account"),this.openMarketplace("storefront")}renderMarketplaceApp(){const e=document.getElementById("marketplace-modal");e&&(e.innerHTML=`
      <div class="market-app-window" id="market-app-window">
        <!-- Top Sticky Header -->
        <header class="market-top-bar">
          <div class="market-nav-left">
            <button class="market-back-btn" id="market-back-nav" title="Back">
              ←
            </button>
            <div class="market-brand-badge">
              <div class="market-brand-title" style="display:flex;align-items:center;gap:6px;">
                <svg class="brand-leaf-icon" viewBox="0 0 24 24" fill="none" style="width:20px;height:20px;">
                  <path d="M21 3C13.5 3.5 6 9 4 17.5C3.5 19.5 4.5 21 6.5 21.5C8 22 10 21.5 12 20C17.5 16 20.5 10 21 3Z" fill="#10B981"/>
                  <path d="M8.5 17C12 13.5 15.5 10 19 5.5" stroke="#02221A" stroke-width="1.8" stroke-linecap="round"/>
                </svg>
                <span style="font-weight:800;color:#02221A;">GramBandhan</span>
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
    `,this.renderTopBarRight(),this.setupTopBarEvents(),this.renderCurrentView())}renderTopBarRight(){var a,i;const e=document.getElementById("market-nav-right");if(!e)return;const t=this.cart.reduce((r,n)=>r+n.quantity,0);e.innerHTML=`
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
        <span class="bag-btn-badge" id="top-cart-badge">${t}</span>
      </button>
    `,(a=document.getElementById("btn-top-profile"))==null||a.addEventListener("click",()=>{this.openBuyerProfile("on_the_way")}),(i=document.getElementById("btn-top-cart"))==null||i.addEventListener("click",()=>{this.openCart()})}setupTopBarEvents(){const e=document.getElementById("market-back-nav");e==null||e.addEventListener("click",()=>{this.activeView==="storefront"?this.closeMarketplace():(this.activeView="storefront",this.renderCurrentView())});const t=document.getElementById("market-close-all");t==null||t.addEventListener("click",()=>{this.closeMarketplace()});const a=document.getElementById("market-search-input"),i=document.getElementById("market-search-clear"),r=document.getElementById("market-search-dropdown");a==null||a.addEventListener("input",()=>{const n=a.value;this.searchQuery=n,i&&(n.length>0?i.classList.add("active"):i.classList.remove("active")),this.handleSearchAutocomplete(n),this.activeView==="storefront"&&this.renderStorefrontGridOnly()}),a==null||a.addEventListener("focus",()=>{a.value.trim().length>0&&this.handleSearchAutocomplete(a.value)}),i==null||i.addEventListener("click",()=>{this.searchQuery="",a&&(a.value=""),i.classList.remove("active"),r&&r.classList.remove("active"),this.activeView==="storefront"&&this.renderStorefrontGridOnly()}),document.addEventListener("click",n=>{!n.target.closest(".market-search-wrapper")&&r&&r.classList.remove("active")})}handleSearchAutocomplete(e){const t=document.getElementById("market-search-dropdown");if(!t)return;const a=e.trim().toLowerCase();if(!a){t.classList.remove("active");return}const i=s=>s.id.toLowerCase().includes("rice")||s.name.toLowerCase().includes("rice")||s.bengaliName.includes("চাল")||s.bengaliName.includes("ধান")||s.craftType&&s.craftType.toLowerCase().includes("paddy"),r=a==="r"||a==="র"||a.startsWith("ri")||a==="rice"||a==="chal"||a==="চাল";let n=A.filter(s=>s.name.toLowerCase().includes(a)||s.bengaliName.toLowerCase().includes(a)||s.artisanDistrict.toLowerCase().includes(a)||s.category.toLowerCase().includes(a)||r&&i(s));if(r){const s=n.filter(i),l=n.filter(c=>!i(c));n=[...s,...l]}if(n.length===0){t.innerHTML=`
        <div class="search-drop-header">
          <span>Search Results</span>
          <span>0 found</span>
        </div>
        <div style="padding: 18px; text-align: center; color: #64748B; font-size: 0.85rem;">
          No products found matching "<strong>${e}</strong>"
        </div>
      `,t.classList.add("active");return}const o=r?`🌾 Recommended Rice & Heritage Grains (সুগন্ধি চাল ও শস্য) (${n.length} items)`:`✨ Suggested Matches for "${e}" (${n.length} items)`;t.innerHTML=`
      <div class="search-drop-header">
        <span>${o}</span>
        <span style="color:#059669;font-weight:800;">Fast Delivery</span>
      </div>
      <div class="search-drop-list">
        ${n.slice(0,8).map(s=>{const l=i(s);return`
            <div class="search-drop-item" data-product-id="${s.id}">
              <img src="${s.image}" alt="${s.name}" class="search-drop-img" />
              <div class="search-drop-info">
                <div class="search-drop-name">${s.name}</div>
                <div class="search-drop-meta">
                  <span class="search-drop-tag" ${l?'style="background:#DCFCE7;color:#166534;font-weight:700;"':""}>
                    ${l?"🌾 Rice Special":s.category}
                  </span>
                  <span>📍 ${s.artisanDistrict}</span>
                  <span>★ ${s.rating}</span>
                </div>
              </div>
              <div class="search-drop-price">
                ৳${s.priceBDT.toLocaleString()}
              </div>
            </div>
          `}).join("")}
      </div>
    `,t.classList.add("active"),t.querySelectorAll(".search-drop-item").forEach(s=>{s.addEventListener("click",l=>{const c=l.currentTarget.getAttribute("data-product-id");c&&(t.classList.remove("active"),this.openProductDetail(c))})})}renderCurrentView(){const e=document.getElementById("market-view-container");if(e)switch(e.scrollTop=0,this.activeView){case"storefront":this.renderStorefrontView(e);break;case"detail":this.renderDetailView(e);break;case"cart":this.renderCartView(e);break;case"checkout":this.renderCheckoutView(e);break;case"profile":this.renderProfileView(e);break}}renderStorefrontView(e){const t=A.filter(i=>i.flashDeal).slice(0,8);e.innerHTML=`
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
            ${t.map(i=>`
              <div class="flash-deal-item" data-product-id="${i.id}">
                <div class="flash-img-box">
                  <img src="${i.image}" alt="${i.name}" loading="lazy" />
                  <span class="flash-discount-tag">-${i.discountPercent}%</span>
                </div>
                <div class="flash-item-body">
                  <div class="flash-item-title">${i.name}</div>
                  <div class="flash-price-action-row">
                    <div class="flash-price-row">
                      <span class="flash-curr-price">৳${i.priceBDT.toLocaleString()}</span>
                      ${i.originalPriceBDT?`<span class="flash-orig-price">৳${i.originalPriceBDT.toLocaleString()}</span>`:""}
                    </div>
                    <button 
                      type="button" 
                      class="prod-add-btn flash-add-btn" 
                      data-action="add-cart" 
                      data-product-id="${i.id}" 
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
    `,this.updateFlashTimerDisplay(),this.renderStorefrontGridOnly();const a=document.getElementById("market-chips-bar");a==null||a.addEventListener("click",i=>{const r=i.target.closest(".market-chip");if(!r)return;const n=r.getAttribute("data-cat")||"all";a.querySelectorAll(".market-chip").forEach(o=>o.classList.remove("active")),r.classList.add("active"),this.currentCategory=n,this.renderStorefrontGridOnly()}),e.querySelectorAll(".flash-deal-item").forEach(i=>{i.addEventListener("click",r=>{if(r.target.closest('[data-action="add-cart"]'))return;const o=r.currentTarget.getAttribute("data-product-id");o&&this.openProductDetail(o)})}),e.querySelectorAll('[data-action="add-cart"]').forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const n=r.currentTarget.getAttribute("data-product-id");n&&this.requireBuyerAuth(()=>{this.addToCart(n)})})})}renderStorefrontGridOnly(){const e=document.getElementById("market-products-grid"),t=document.getElementById("product-count-label");if(!e)return;let a=A;if(this.currentCategory!=="all"&&(a=a.filter(i=>i.category===this.currentCategory)),this.searchQuery.trim()){const i=this.searchQuery.trim().toLowerCase();a=a.filter(o=>o.name.toLowerCase().includes(i)||o.bengaliName.toLowerCase().includes(i)||o.artisanDistrict.toLowerCase().includes(i)||o.craftType.toLowerCase().includes(i)||o.category.toLowerCase().includes(i));const r=o=>o.id.toLowerCase().includes("rice")||o.name.toLowerCase().includes("rice")||o.bengaliName.includes("চাল")||o.bengaliName.includes("ধান")||o.craftType&&o.craftType.toLowerCase().includes("paddy");if(i==="r"||i==="র"||i.startsWith("ri")||i==="rice"||i==="chal"||i==="চাল"){const o=a.filter(r),s=a.filter(l=>!r(l));a=[...o,...s]}}if(t&&(t.textContent=`${a.length} Products`),a.length===0){e.innerHTML=`
        <div class="market-empty-state" style="grid-column: 1 / -1;">
          <div style="font-size: 2.5rem;">🔍</div>
          <h4>No products found</h4>
          <p>Try searching for rice, ghee, mango, fish, or clear your filters.</p>
        </div>
      `;return}e.innerHTML=a.map(i=>`
      <article class="product-card" data-product-id="${i.id}">
        <div class="product-img-wrap">
          <img src="${i.image}" alt="${i.name}" loading="lazy" />
          ${i.discountPercent?`<span class="prod-badge-discount">-${i.discountPercent}% OFF</span>`:""}
          <span class="prod-badge-organic">100% Shariah</span>
        </div>
        <div class="product-card-body">
          <div class="prod-seller-chip">
            <span>🌾</span>
            <span>${i.artisanName} (${i.artisanDistrict})</span>
          </div>
          <h4 class="prod-title">${i.name}</h4>
          <div class="prod-bengali-sub">${i.bengaliName}</div>
          <div class="prod-rating-row">
            <span>★ ${i.rating}</span>
            <span class="prod-reviews-count">(${i.reviewsCount})</span>
          </div>
          <div class="prod-bottom-row">
            <div class="prod-price-box">
              <span class="prod-unit">${i.unit||"1 Unit"}</span>
              <div>
                <span class="prod-main-price">৳${i.priceBDT.toLocaleString()}</span>
                ${i.originalPriceBDT?`<span class="prod-orig-price">৳${i.originalPriceBDT.toLocaleString()}</span>`:""}
              </div>
            </div>
            <button 
              type="button" 
              class="prod-add-btn" 
              data-action="add-cart" 
              data-product-id="${i.id}"
              title="Add to Shopping Bag"
            >
              +
            </button>
          </div>
        </div>
      </article>
    `).join(""),e.querySelectorAll(".product-card").forEach(i=>{i.addEventListener("click",r=>{if(r.target.closest('[data-action="add-cart"]'))return;const o=i.getAttribute("data-product-id");o&&this.openProductDetail(o)})}),e.querySelectorAll('[data-action="add-cart"]').forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const n=r.currentTarget.getAttribute("data-product-id");n&&this.requireBuyerAuth(()=>{this.addToCart(n)})})})}renderDetailView(e){var a,i,r;const t=A.find(n=>n.id===this.selectedProductId)||A[0];e.innerHTML=`
      <div class="detail-view">
        <div class="detail-nav-row">
          <button class="btn-detail-back" id="btn-back-to-store">
            ← Back to Store
          </button>
          <div style="font-size: 0.85rem; color: #64748B; font-weight: 600;">
            Product ID: #${t.id}
          </div>
        </div>

        <div class="detail-grid">
          <!-- Gallery -->
          <div class="detail-gallery">
            <img src="${t.image}" alt="${t.name}" class="detail-main-img" id="detail-main-img" />
            <div class="detail-thumbs-strip">
              <img src="${t.image}" class="detail-thumb active" alt="View 1" />
              <img src="/images/chinigura-rice.jpg" class="detail-thumb" alt="View 2" />
              <img src="/images/pure-cow-ghee.jpg" class="detail-thumb" alt="View 3" />
            </div>
          </div>

          <!-- Product Info Column -->
          <div class="detail-info-col">
            <span class="detail-category-badge">${t.category.toUpperCase()} • 100% NATURAL</span>
            
            <h2 class="detail-title-en">${t.name}</h2>
            <h3 class="detail-title-bn">${t.bengaliName}</h3>

            <div class="detail-price-banner">
              <span class="detail-price-main">৳${t.priceBDT.toLocaleString()}</span>
              ${t.originalPriceBDT?`<span class="detail-price-orig">৳${t.originalPriceBDT.toLocaleString()}</span>`:""}
              ${t.discountPercent?`<span class="detail-discount-chip">Save ${t.discountPercent}%</span>`:""}
              <span style="font-size:0.85rem;color:#64748B;font-weight:600;">/ ${t.unit||"1 Unit"}</span>
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
                  <div class="seller-name">${t.artisanName}</div>
                  <div class="seller-origin">📍 ${t.originVillage||t.artisanDistrict} • Verified Producer</div>
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
              <p style="margin-bottom:8px;"><strong>About this Harvest:</strong> ${t.description}</p>
              <p style="margin:0;font-family:'Tiro Bangla',serif;color:#475569;">
                <strong>খামারের তথ্য:</strong> এই পণ্যটি রাসায়নিক কীটনাশকমুক্ত উপায়ে সরাসরি প্রান্তিক কৃষক ও পল্লী কারিগরদের তত্ত্বাবধানে তৈরি ও সংগৃহীত। আপনার ক্রয়ের সম্পূর্ণ অর্থ সরাসরি উৎপাদকের পরিবারকে স্বাবলম্বী করে।
              </p>
            </div>

            <!-- Customer Reviews -->
            <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-top:1px solid #E2E8F0;">
              <div style="display:flex;align-items:center;gap:6px;font-weight:800;color:#0D382A;">
                <span style="color:#F59E0B;font-size:1.1rem;">★ ${t.rating}</span>
                <span>Customer Ratings (${t.reviewsCount} verified reviews)</span>
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
    `,(a=document.getElementById("btn-back-to-store"))==null||a.addEventListener("click",()=>{this.activeView="storefront",this.renderCurrentView()}),(i=document.getElementById("btn-detail-add"))==null||i.addEventListener("click",()=>{this.requireBuyerAuth(()=>{this.addToCart(t.id);const n=document.getElementById("btn-detail-add");if(n){const o=n.innerHTML;n.innerHTML="✓ Added to Bag!",setTimeout(()=>{n.innerHTML=o},1400)}})}),(r=document.getElementById("btn-detail-buy"))==null||r.addEventListener("click",()=>{this.requireBuyerAuth(()=>{this.addToCart(t.id,1,!1),this.openCheckout()})})}renderCartView(e){var c,d,p,g;const t=this.cart.reduce((u,h)=>u+h.quantity,0),a=this.cart.reduce((u,h)=>u+h.product.priceBDT*h.quantity,0),i=1e3,r=a>=i||a===0,n=r?0:60,o=this.appliedVoucher?this.appliedVoucher.discountBDT:0,s=Math.max(0,a+n-o),l={};this.cart.forEach(u=>{const h=u.product.artisanName;l[h]||(l[h]=[]),l[h].push(u)}),e.innerHTML=`
      <div class="cart-view">
        <div class="cart-header-row">
          <div class="cart-heading">
            <span>🛍️ My Shopping Bag (আমার শপিং ব্যাগ)</span>
            <span style="font-size:0.85rem;background:#E2E8F0;color:#334155;padding:2px 8px;border-radius:12px;">${t} items</span>
          </div>
          <button class="btn-detail-back" id="btn-cart-back">
            ← Continue Shopping
          </button>
        </div>

        <!-- Free Delivery Progress Meter -->
        <div class="cart-free-shipping-box">
          <div style="display:flex;justify-content:space-between;">
            <span>${r&&a>0?"🎉 You unlocked FREE Delivery across Bangladesh!":`Add ৳${Math.max(0,i-a)} more to get FREE Delivery!`}</span>
            <span>Threshold: ৳1,000</span>
          </div>
          <div class="free-ship-meter">
            <div class="free-ship-fill" style="width: ${Math.min(100,a/i*100)}%;"></div>
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
            ${Object.keys(l).map(u=>`
              <div class="cart-seller-group">
                <div class="cart-seller-header">
                  <span>🌾</span>
                  <span><strong>Seller:</strong> ${u} (${l[u][0].product.artisanDistrict})</span>
                </div>
                <div class="cart-seller-items">
                  ${l[u].map(h=>`
                    <div class="cart-item-row" data-product-id="${h.product.id}">
                      <img src="${h.product.image}" alt="${h.product.name}" class="cart-item-thumb" />
                      <div class="cart-item-info">
                        <div class="cart-item-name">${h.product.name}</div>
                        <div class="cart-item-unit">${h.product.unit||"1 Unit"} • ৳${h.product.priceBDT.toLocaleString()} each</div>
                        <div class="cart-item-price">৳${(h.product.priceBDT*h.quantity).toLocaleString()}</div>
                      </div>
                      <div class="cart-item-stepper">
                        <button class="btn-stepper" data-action="qty-minus" data-id="${h.product.id}">−</button>
                        <span class="stepper-qty">${h.quantity}</span>
                        <button class="btn-stepper" data-action="qty-plus" data-id="${h.product.id}">+</button>
                      </div>
                      <button class="btn-remove-item" data-action="remove-item" data-id="${h.product.id}" title="Remove">🗑️</button>
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
              <span>৳${a.toLocaleString()}</span>
            </div>
            <div class="cart-bill-line">
              <span>Delivery Fee (Standard 2-3 Days)</span>
              <span>${n===0?'<strong style="color:#059669;">FREE</strong>':`৳${n}`}</span>
            </div>
            ${o>0?`
              <div class="cart-bill-line" style="color:#059669;font-weight:700;">
                <span>Voucher Discount</span>
                <span>−৳${o.toLocaleString()}</span>
              </div>
            `:""}
            <div class="cart-bill-line total">
              <span>Grand Total Payable</span>
              <span>৳${s.toLocaleString()}</span>
            </div>
          </div>

          <!-- Proceed to Checkout -->
          <button class="btn-checkout-proceed" id="btn-proceed-checkout">
            <span>Proceed to Checkout (অর্ডার সম্পন্ন করুন) • ৳${s.toLocaleString()}</span>
            <span>→</span>
          </button>
        `}

        <!-- Just For You Recommendation Strip -->
        <div style="margin-top: 10px; border-top: 1px solid #E2E8F0; padding-top: 16px;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: #0D382A; margin-bottom: 12px;">
            ✨ Recommended For You (আপনার জন্য প্রস্তাবিত)
          </h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
            ${A.slice(4,7).map(u=>`
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
    `,(c=document.getElementById("btn-cart-back"))==null||c.addEventListener("click",()=>{this.activeView="storefront",this.renderCurrentView()}),(d=document.getElementById("btn-empty-shop-now"))==null||d.addEventListener("click",()=>{this.activeView="storefront",this.renderCurrentView()}),e.querySelectorAll('[data-action="qty-plus"]').forEach(u=>{u.addEventListener("click",()=>{const h=u.getAttribute("data-id");h&&this.updateCartQuantity(h,1)})}),e.querySelectorAll('[data-action="qty-minus"]').forEach(u=>{u.addEventListener("click",()=>{const h=u.getAttribute("data-id");h&&this.updateCartQuantity(h,-1)})}),e.querySelectorAll('[data-action="remove-item"]').forEach(u=>{u.addEventListener("click",()=>{const h=u.getAttribute("data-id");h&&this.removeFromCart(h)})}),e.querySelectorAll('[data-action="quick-add"]').forEach(u=>{u.addEventListener("click",()=>{const h=u.getAttribute("data-id");h&&this.requireBuyerAuth(()=>{this.addToCart(h)})})}),(p=document.getElementById("btn-apply-voucher"))==null||p.addEventListener("click",()=>{var h;const u=(h=document.getElementById("cart-voucher-input"))==null?void 0:h.value.trim().toUpperCase();this.applyVoucher(u)}),(g=document.getElementById("btn-proceed-checkout"))==null||g.addEventListener("click",()=>{this.openCheckout()})}renderCheckoutView(e){var o,s;const t=this.cart.reduce((l,c)=>l+c.product.priceBDT*c.quantity,0),a=t>=1e3?0:60,i=this.appliedVoucher?this.appliedVoucher.discountBDT:0,r=Math.max(0,t+a-i),n=this.buyerSession||F;e.innerHTML=`
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

                <!-- Bank Transfer (ইসলামী ব্যাংক / BEFTN) -->
                <div class="payment-method-card bank-card ${this.selectedPaymentMethod==="Bank Transfer"?"selected":""}" data-method="Bank Transfer">
                  <div class="payment-method-header">
                    <div class="payment-brand-label">
                      <input type="radio" name="pay_opt" class="payment-radio" ${this.selectedPaymentMethod==="Bank Transfer"?"checked":""} />
                      <div class="payment-logo-wrap">
                        <span style="font-size:1.5rem;">🏛️</span>
                        <div>
                          <strong style="color:#047857;font-size:1.05rem;">Bank Transfer (ইসলামী ব্যাংক / BEFTN)</strong>
                          <div style="font-size:0.75rem;color:#64748B;">Direct Bank Transfer to GramBandhan Shariah Escrow</div>
                        </div>
                      </div>
                    </div>
                    <span style="font-size:0.72rem;background:#DCFCE7;color:#166534;padding:3px 8px;border-radius:12px;font-weight:700;">Shariah</span>
                  </div>

                  <div class="payment-method-body">
                    <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:8px;padding:10px 12px;margin-bottom:10px;font-size:0.8rem;color:#166534;">
                      <div><strong>Bank:</strong> Islami Bank Bangladesh Ltd (IBBL)</div>
                      <div><strong>Account:</strong> GramBandhan Agro Shariah Escrow Fund Ltd</div>
                      <div><strong>A/C No:</strong> 2050 7710 8899 001 (Branch: Dilkusha C/A, Dhaka)</div>
                    </div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px;">
                      <div>
                        <label class="payment-input-label">Your Bank & Branch</label>
                        <input type="text" class="payment-account-input" id="bank-name-input" placeholder="e.g. City Bank, Gulshan" />
                      </div>
                      <div>
                        <label class="payment-input-label">Your Account Number</label>
                        <input type="text" class="payment-account-input" id="bank-acc-input" placeholder="e.g. 110284912001" />
                      </div>
                    </div>
                    <div>
                      <label class="payment-input-label">Deposit Slip No. / TrxID / Reference</label>
                      <input type="text" class="payment-account-input" id="bank-trx-input" placeholder="e.g. FT-2026-98124 or Slip #4019" />
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
              ${this.cart.map(l=>`
                <div class="checkout-preview-item">
                  <span class="title">${l.product.name} × ${l.quantity}</span>
                  <strong>৳${(l.product.priceBDT*l.quantity).toLocaleString()}</strong>
                </div>
              `).join("")}
            </div>

            <div style="display:flex;flex-direction:column;gap:6px;font-size:0.85rem;color:#475569;">
              <div style="display:flex;justify-content:space-between;">
                <span>Subtotal</span>
                <span>৳${t.toLocaleString()}</span>
              </div>
              <div style="display:flex;justify-content:space-between;">
                <span>Delivery Charge</span>
                <span>${a===0?'<span style="color:#047857;font-weight:700;">FREE</span>':`৳${a}`}</span>
              </div>
              ${i>0?`
                <div style="display:flex;justify-content:space-between;color:#047857;">
                  <span>Promo Voucher</span>
                  <span>-৳${i.toLocaleString()}</span>
                </div>
              `:""}
              <div style="display:flex;justify-content:space-between;border-top:1px dashed #CBD5E1;padding-top:8px;margin-top:4px;font-weight:800;font-size:1.05rem;color:#0F172A;">
                <span>Total Amount</span>
                <span>৳${r.toLocaleString()}</span>
              </div>
            </div>

            <button class="btn-confirm-order" id="btn-confirm-place-order">
              Confirm Order (অর্ডার নিশ্চিত করুন) • ৳${r.toLocaleString()}
            </button>

            <div style="font-size:0.72rem;text-align:center;color:#64748B;">
              By confirming, you support ethical rural agriculture and women artisans of Bangladesh.
            </div>
          </div>

        </div>
      </div>
    `,(o=document.getElementById("btn-checkout-to-cart"))==null||o.addEventListener("click",()=>{this.openCart()}),e.querySelectorAll(".payment-method-card").forEach(l=>{l.addEventListener("click",()=>{const c=l.getAttribute("data-method");c&&(this.selectedPaymentMethod=c,this.renderCheckoutView(e))})}),(s=document.getElementById("btn-confirm-place-order"))==null||s.addEventListener("click",()=>{this.processOrderPlacement(e,r,t,a,i,n)})}processOrderPlacement(e,t,a,i,r,n){var d;const o=`GB-ORD-${Math.floor(1e4+Math.random()*9e4)}`,s=`REDX-GB-${Math.floor(1e4+Math.random()*9e4)}`,c={id:o,date:"17 Sep 2026",status:"on_the_way",statusBengali:"পথিমধ্যে রয়েছে (চলমান ডেলিভারি)",statusBadgeClass:"badge-transit",items:[...this.cart],subtotal:a,shippingFee:i,discount:r,total:t,paymentMethod:this.selectedPaymentMethod,paymentDetails:`${this.selectedPaymentMethod} (${n.phone}) - TxnID: GB${Math.floor(1e5+Math.random()*9e5)}`,shippingAddress:`${n.address}, ${n.city}`,recipientPhone:n.phone,trackingNumber:s,courierPartner:"RedX Express Logistics",estimatedDelivery:"Tomorrow, by 4:00 PM",trackingSteps:[{label:"Order Confirmed",bengaliLabel:"অর্ডার গৃহীত হয়েছে",time:"Just Now",completed:!0},{label:"Packed by Village Cooperative",bengaliLabel:"পণ্য প্রস্তুত ও প্যাকিং",time:"In Progress",completed:!0,active:!0},{label:"In Transit / On The Way",bengaliLabel:"পথিমধ্যে রয়েছে (ঢাকা হাবের পথে)",time:"Expected Tonight",completed:!1},{label:"Out for Delivery",bengaliLabel:"ডেলিভারির জন্য বের হবে",time:"Tomorrow 10:00 AM",completed:!1},{label:"Delivered",bengaliLabel:"পৌঁছে গেছে",time:"Pending",completed:!1}]};if(this.orders.unshift(c),this.saveOrders(),f.isAuthenticated()){f.addRole("buyer");const p=f.getRoleBadgeText();this.showToast(`🎉 Order Placed! Your account is now active as ${p}.`)}this.cart=[],this.appliedVoucher=null,this.saveCart(),e.innerHTML=`
      <div class="order-success-wrap">
        <div class="success-check-icon">✓</div>
        <h2 style="font-size: 1.6rem; font-weight: 800; color: #0D382A; margin: 0;">
          Order Placed Successfully!
        </h2>
        <div style="font-family: 'Tiro Bangla', serif; font-size: 1.05rem; color: #059669;">
          আপনার অর্ডারটি সফলভাবে গৃহীত হয়েছে।
        </div>
        <div class="success-order-id">
          Order ID: ${o} • Tracking: ${s}
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
    `,(d=document.getElementById("btn-success-track"))==null||d.addEventListener("click",()=>{this.openBuyerProfile("on_the_way")})}renderProfileView(e){const t=this.buyerSession||F,a=this.orders.filter(o=>o.status==="on_the_way"),i=this.orders.filter(o=>o.status==="delivered"),r=this.orders.filter(o=>o.status==="cancelled");e.innerHTML=`
      <div class="profile-view">
        
        <!-- Profile Header Card -->
        <div class="profile-header-card">
          <div class="profile-user-left">
            <div class="profile-big-avatar">${t.name.charAt(0)}</div>
            <div class="profile-user-info">
              <h3>${t.name}</h3>
              <p>✉️ ${t.email} • 📞 ${t.phone}</p>
              <div class="profile-status-pill">✓ Verified Buyer (যাচাইকৃত ক্রেতা)</div>
            </div>
          </div>
          <div style="display:flex;gap:12px;text-align:right;">
            <div style="background:rgba(255,255,255,0.12);padding:8px 16px;border-radius:10px;">
              <div style="font-size:1.25rem;font-weight:800;">${a.length}</div>
              <div style="font-size:0.72rem;color:#D1FAE5;">On The Way</div>
            </div>
            <div style="background:rgba(255,255,255,0.12);padding:8px 16px;border-radius:10px;">
              <div style="font-size:1.25rem;font-weight:800;">${i.length}</div>
              <div style="font-size:0.72rem;color:#D1FAE5;">Delivered</div>
            </div>
          </div>
        </div>

        <!-- 4 Profile Tabs -->
        <div class="profile-tabs-bar" id="profile-tabs-bar">
          <button class="profile-tab-btn ${this.currentProfileTab==="on_the_way"?"active":""}" data-tab="on_the_way">
            🚚 On The Way (পথিমধ্যে ডেলিভারি) [${a.length}]
          </button>
          <button class="profile-tab-btn ${this.currentProfileTab==="delivered"?"active":""}" data-tab="delivered">
            ✅ Previous Purchases (সম্পন্ন অর্ডার) [${i.length}]
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
    `,this.renderProfileTabContent();const n=document.getElementById("profile-tabs-bar");n==null||n.addEventListener("click",o=>{const s=o.target.closest(".profile-tab-btn");if(!s)return;const l=s.getAttribute("data-tab");n.querySelectorAll(".profile-tab-btn").forEach(c=>c.classList.remove("active")),s.classList.add("active"),this.currentProfileTab=l,this.renderProfileTabContent()})}renderProfileTabContent(){var t,a;const e=document.getElementById("profile-tab-body");if(e){if(this.currentProfileTab==="on_the_way"){const i=this.orders.filter(r=>r.status==="on_the_way");if(i.length===0){e.innerHTML=`
          <div class="market-empty-state">
            <div style="font-size:2.5rem;">🚚</div>
            <h4>No orders currently on the way</h4>
            <p>Your newly placed shipments will show real-time tracking here.</p>
          </div>
        `;return}e.innerHTML=`
        <div class="orders-list-stack">
          ${i.map(r=>`
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
                  ${(r.trackingSteps||[]).map((n,o)=>`
                    <div class="timeline-step ${n.completed?"completed":""} ${n.active?"active":""}">
                      <div class="step-dot">${n.completed?"✓":o+1}</div>
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
      `,e.querySelectorAll('[data-action="call-partner"]').forEach(r=>{r.addEventListener("click",()=>{this.showToast("Calling RedX delivery dispatcher (+880 9612-445566)...")})})}else if(this.currentProfileTab==="delivered"){const i=this.orders.filter(r=>r.status==="delivered");e.innerHTML=`
        <div class="orders-list-stack">
          ${i.map(r=>{var n;return`
            <div class="buyer-order-card">
              <div class="order-card-header">
                <div class="order-id-group">
                  <span>Order #${r.id}</span>
                  <span class="order-date-label">Delivered on: ${r.date}</span>
                </div>
                <span class="${r.statusBadgeClass}">✓ ${r.statusBengali}</span>
              </div>

              <div class="order-items-detail-list">
                ${r.items.map(o=>`
                  <div class="order-item-mini-row">
                    <div style="display:flex;align-items:center;gap:10px;">
                      <img src="${o.product.image}" style="width:36px;height:36px;border-radius:6px;object-fit:cover;" />
                      <div>
                        <strong>${o.product.name}</strong>
                        <div style="font-size:0.75rem;color:#64748B;">Qty: ${o.quantity} • ${o.product.artisanName}</div>
                      </div>
                    </div>
                    <strong>৳${(o.product.priceBDT*o.quantity).toLocaleString()}</strong>
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
      `,e.querySelectorAll('[data-action="buy-again"]').forEach(r=>{r.addEventListener("click",()=>{const n=r.getAttribute("data-id");n&&(this.addToCart(n),this.openCart())})}),e.querySelectorAll('[data-action="rate-order"]').forEach(r=>{r.addEventListener("click",()=>{this.showToast("Thank you! 5★ review recorded for village producer.")})})}else if(this.currentProfileTab==="cancelled"){const i=this.orders.filter(r=>r.status==="cancelled");e.innerHTML=`
        <div class="orders-list-stack">
          ${i.map(r=>{var n;return`
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
                ${r.items.map(o=>`
                  <div class="order-item-mini-row">
                    <div style="display:flex;align-items:center;gap:10px;">
                      <img src="${o.product.image}" style="width:36px;height:36px;border-radius:6px;object-fit:cover;" />
                      <div>
                        <strong>${o.product.name}</strong>
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
      `,e.querySelectorAll('[data-action="reorder-fresh"]').forEach(r=>{r.addEventListener("click",()=>{const n=r.getAttribute("data-id");n&&(this.addToCart(n),this.openCart())})})}else if(this.currentProfileTab==="settings"){const i=this.buyerSession||F;e.innerHTML=`
        <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:14px;padding:20px;">
          <h4 style="font-size:1.05rem;font-weight:800;color:#0D382A;margin-bottom:16px;">
            Account & Delivery Preferences
          </h4>

          <div class="settings-form-grid">
            <div class="settings-group">
              <label>Full Name</label>
              <input type="text" class="settings-input" id="set-buyer-name" value="${i.name}" />
            </div>
            <div class="settings-group">
              <label>Contact Phone</label>
              <input type="tel" class="settings-input" id="set-buyer-phone" value="${i.phone}" />
            </div>
            <div class="settings-group">
              <label>Email Address</label>
              <input type="email" class="settings-input" id="set-buyer-email" value="${i.email}" />
            </div>
            <div class="settings-group">
              <label>Default Shipping Address</label>
              <input type="text" class="settings-input" id="set-buyer-addr" value="${i.address}" />
            </div>
            <div class="settings-group">
              <label>City / Division</label>
              <input type="text" class="settings-input" id="set-buyer-city" value="${i.city}" />
            </div>
            <div class="settings-group">
              <label>Preferred Payment Gateway</label>
              <select class="settings-input" id="set-buyer-payment">
                <option value="bKash" ${i.preferredPayment==="bKash"?"selected":""}>bKash (বিকাশ)</option>
                <option value="Nagad" ${i.preferredPayment==="Nagad"?"selected":""}>Nagad (নগদ)</option>
                <option value="Cash on Delivery" ${i.preferredPayment==="Cash on Delivery"?"selected":""}>Cash on Delivery</option>
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
      `,(t=document.getElementById("btn-save-settings"))==null||t.addEventListener("click",()=>{var s,l,c;const r=(s=document.getElementById("set-buyer-name"))==null?void 0:s.value,n=(l=document.getElementById("set-buyer-phone"))==null?void 0:l.value,o=(c=document.getElementById("set-buyer-addr"))==null?void 0:c.value;if(this.buyerSession){this.buyerSession.name=r,this.buyerSession.phone=n,this.buyerSession.address=o,localStorage.setItem("gb_buyer_session",JSON.stringify(this.buyerSession)),this.showToast("Profile settings saved successfully!");const d=document.getElementById("market-view-container");d&&this.renderProfileView(d)}}),(a=document.getElementById("btn-logout-buyer"))==null||a.addEventListener("click",()=>{this.logoutBuyer()})}}}addToCart(e,t=1,a=!0){const i=A.find(n=>n.id===e);if(!i)return;const r=this.cart.find(n=>n.product.id===e);r?r.quantity+=t:this.cart.push({product:i,quantity:t}),this.saveCart(),a&&this.showToast(`✓ Added ${i.name} to Shopping Bag!`)}updateCartQuantity(e,t){const a=this.cart.find(i=>i.product.id===e);if(a)if(a.quantity+=t,a.quantity<=0)this.removeFromCart(e);else{this.saveCart();const i=document.getElementById("market-view-container");i&&this.activeView==="cart"&&this.renderCartView(i)}}removeFromCart(e){this.cart=this.cart.filter(a=>a.product.id!==e),this.saveCart();const t=document.getElementById("market-view-container");t&&this.activeView==="cart"&&this.renderCartView(t),this.showToast("Item removed from Shopping Bag")}applyVoucher(e){if(!e)return;e==="GRAM20"?(this.appliedVoucher={code:"GRAM20",discountBDT:20},this.showToast("🎉 Voucher GRAM20 applied! ৳20 discount deducted.")):e==="EID100"?(this.appliedVoucher={code:"EID100",discountBDT:100},this.showToast("🎉 Voucher EID100 applied! ৳100 discount deducted.")):e==="FARMERLOVE"?(this.appliedVoucher={code:"FARMERLOVE",discountBDT:50},this.showToast("🎉 Voucher FARMERLOVE applied! ৳50 discount deducted.")):this.showToast("Invalid voucher code. Try GRAM20 or EID100.");const t=document.getElementById("market-view-container");t&&this.activeView==="cart"&&this.renderCartView(t)}updateCartBadge(){const e=this.cart.reduce((i,r)=>i+r.quantity,0),t=document.getElementById("top-cart-badge");t&&(t.textContent=e.toString());const a=document.getElementById("market-cart-count");a&&(a.textContent=e.toString())}showToast(e){let t=document.getElementById("market-toast");t||(t=document.createElement("div"),t.id="market-toast",t.className="market-toast-notification",document.body.appendChild(t)),t.textContent=e,t.classList.add("active"),setTimeout(()=>{t==null||t.classList.remove("active")},2400)}}class _{constructor(e){m(this,"portalModal",null);m(this,"closeBtn",null);m(this,"navFarmerLink",null);m(this,"joinFarmerBtn",null);m(this,"tabFarmer",null);m(this,"tabArtisan",null);m(this,"contentFarmer",null);m(this,"contentArtisan",null);m(this,"dashboard",null);m(this,"btnDemoFarmer",null);m(this,"btnDemoArtisan",null);m(this,"formFarmer",null);m(this,"formArtisan",null);m(this,"btnProducerLogout",null);m(this,"btnProducerNew",null);m(this,"chatBtn",null);m(this,"onToastNotification");this.onToastNotification=e}init(){this.bindElements(),this.setupEventListeners()}bindElements(){this.portalModal=document.getElementById("farmer-women-modal"),this.closeBtn=document.getElementById("close-farmer-modal"),this.navFarmerLink=document.getElementById("nav-farmer-women-link"),this.joinFarmerBtn=document.getElementById("cta-join-farmer"),this.tabFarmer=document.getElementById("tab-btn-farmer"),this.tabArtisan=document.getElementById("tab-btn-artisan"),this.contentFarmer=document.getElementById("tab-content-farmer"),this.contentArtisan=document.getElementById("tab-content-artisan"),this.dashboard=document.getElementById("producer-dashboard"),this.btnDemoFarmer=document.getElementById("btn-demo-farmer"),this.btnDemoArtisan=document.getElementById("btn-demo-artisan"),this.formFarmer=document.getElementById("form-farmer-login"),this.formArtisan=document.getElementById("form-artisan-login"),this.btnProducerLogout=document.getElementById("btn-producer-logout"),this.btnProducerNew=document.getElementById("btn-producer-new-project"),this.chatBtn=document.getElementById("hero-chat-btn")}setupEventListeners(){var e,t,a,i,r,n,o,s,l,c,d,p;(e=this.navFarmerLink)==null||e.addEventListener("click",g=>{g.preventDefault(),this.openPortal("farmer")}),(t=this.joinFarmerBtn)==null||t.addEventListener("click",g=>{g.preventDefault(),this.openPortal("farmer")}),(a=this.closeBtn)==null||a.addEventListener("click",()=>this.closePortal()),(i=this.tabFarmer)==null||i.addEventListener("click",()=>this.switchTab("farmer")),(r=this.tabArtisan)==null||r.addEventListener("click",()=>this.switchTab("artisan")),(n=this.btnDemoFarmer)==null||n.addEventListener("click",()=>{f.demoLogin("farmer"),this.showProducerDashboard("Md. Rafiqul Islam (মোঃ রফিকুল ইসলাম)","🌾 Bio-Secure Poultry Farmer • Gazipur Upazila","Gazipur Broiler Poultry Shed #GB-2026-04","45% Backed by 12 Investors (৳1,20,000 Goal)","bKash Merchant Verified • 01712-345678"),this.notifyToast("🌾 Welcome, Md. Rafiqul Islam! Logged in as Verified Farmer.")}),(o=this.btnDemoArtisan)==null||o.addEventListener("click",()=>{f.demoLogin("farmer"),this.showProducerDashboard("Fatima Begum (ফাতেমা বেগম)","🧵 Rural Nakshi Kantha Artisan • Islampur, Jamalpur","Jamalpur Women Artisan Handicraft Collective","24 Hand-Stitched Quilts Live in Marketplace","Nagad Verified • 01823-456789"),this.notifyToast("🧵 Welcome, Fatima Begum! Logged in as Verified Rural Artisan.")}),(s=this.formFarmer)==null||s.addEventListener("submit",g=>{var k,B,b,D;g.preventDefault();const u=((k=document.getElementById("farmer-name"))==null?void 0:k.value.trim())||"Md. Rafiqul Islam",h=((B=document.getElementById("farmer-phone"))==null?void 0:B.value.trim())||"01712-345678",v=((b=document.getElementById("farmer-district"))==null?void 0:b.value)||"Gazipur",C=((D=document.getElementById("farmer-category"))==null?void 0:D.value)||"Poultry";f.isAuthenticated()?f.addRole("farmer"):f.signUp(u,h,["farmer"]),this.showProducerDashboard(u,`🌾 ${C} Producer • ${v} Hub`,`${v} ${C} Development Project`,"Under Agronomist Review (GPS Verified)","bKash Account Verified");const w=f.getRoleBadgeText();this.notifyToast(`🌾 Project proposal submitted successfully! Your account now has ${w} privileges.`)}),(l=this.formArtisan)==null||l.addEventListener("submit",g=>{var k,B,b,D;g.preventDefault();const u=((k=document.getElementById("artisan-name"))==null?void 0:k.value.trim())||"Fatima Begum",h=((B=document.getElementById("artisan-phone"))==null?void 0:B.value.trim())||"01823-456789",v=((b=document.getElementById("artisan-district"))==null?void 0:b.value)||"Jamalpur",C=((D=document.getElementById("artisan-craft"))==null?void 0:D.value)||"Nakshi Kantha";f.isAuthenticated()?f.addRole("farmer"):f.signUp(u,h,["farmer"]),this.showProducerDashboard(u,`🧵 ${C} Artisan • ${v}`,`${v} Handcrafted Collection`,"Active Marketplace Storefront","bKash / Nagad Verified");const w=f.getRoleBadgeText();this.notifyToast(`🧵 Store opened successfully! Your account now has ${w} privileges.`)}),(c=this.btnProducerLogout)==null||c.addEventListener("click",()=>{f.logout(),this.resetProducerState(),this.notifyToast("Logged out of Producer account")}),(d=this.btnProducerNew)==null||d.addEventListener("click",()=>{this.switchTab("farmer"),this.notifyToast("Ready for new project submission")}),(p=this.chatBtn)==null||p.addEventListener("click",()=>{this.notifyToast("GramBondhon Advisory: Investment & Producer support team is online.")})}openPortal(e="farmer"){this.portalModal&&(this.portalModal.classList.add("active"),document.body.style.overflow="hidden",this.switchTab(e))}closePortal(){this.portalModal&&(this.portalModal.classList.remove("active"),document.body.style.overflow="")}switchTab(e){var t,a,i,r;this.dashboard&&(this.dashboard.style.display="none"),e==="farmer"?((t=this.tabFarmer)==null||t.classList.add("active"),(a=this.tabArtisan)==null||a.classList.remove("active"),this.contentFarmer&&(this.contentFarmer.style.display="block"),this.contentArtisan&&(this.contentArtisan.style.display="none")):((i=this.tabArtisan)==null||i.classList.add("active"),(r=this.tabFarmer)==null||r.classList.remove("active"),this.contentArtisan&&(this.contentArtisan.style.display="block"),this.contentFarmer&&(this.contentFarmer.style.display="none"))}showProducerDashboard(e,t,a,i,r){this.contentFarmer&&(this.contentFarmer.style.display="none"),this.contentArtisan&&(this.contentArtisan.style.display="none"),this.dashboard&&(this.dashboard.style.display="block");const n=document.getElementById("dash-producer-name"),o=document.getElementById("dash-producer-role"),s=document.getElementById("dash-project-title"),l=document.getElementById("dash-funding-status"),c=document.getElementById("dash-payout-wallet");n&&(n.textContent=e),o&&(o.textContent=t),s&&(s.textContent=a),l&&(l.textContent=i),c&&(c.textContent=r)}resetProducerState(){this.dashboard&&(this.dashboard.style.display="none"),this.switchTab("farmer")}notifyToast(e){this.onToastNotification&&this.onToastNotification(e)}}class Y{constructor(){m(this,"heroSection");m(this,"joinAsInvestor");m(this,"investorProfile");m(this,"activeProjects");m(this,"marketplace");m(this,"joinAsFarmer");this.heroSection=new z,this.activeProjects=new W,this.marketplace=new J,this.investorProfile=new K(this.activeProjects,this.showToast.bind(this),this.marketplace),this.joinAsFarmer=new _(this.showToast.bind(this)),this.joinAsInvestor=new U(this.activeProjects,this.showToast.bind(this))}init(){this.heroSection.init(),this.activeProjects.init(),this.marketplace.init(),this.joinAsFarmer.init(),this.joinAsInvestor.init(),this.investorProfile.init(),this.setupNavbar(),this.setupProjectsAndHeroButtons(),this.setupModalEscapeKeys(),this.setupSmoothScroll(),this.routeDedicatedPageView(),console.log("🌾 GramBondhon (গ্রামীণ বন্ধন) initialized successfully with sector modules.")}setupNavbar(){const e=document.getElementById("nav-login-btn"),t=document.getElementById("nav-invest-btn"),a=document.getElementById("nav-user-badge"),i=document.getElementById("mobile-menu-toggle");f.onAuthChange(r=>{var n,o;if(r){if(e&&(e.style.display="none"),t&&(t.style.display="none"),a){a.style.display="inline-flex",a.style.alignItems="center",a.style.gap="10px";const s=r.name.split(" ").map(c=>c[0]).filter(Boolean).slice(0,2).join("").toUpperCase()||"GB",l=f.getRoleBadgeText();a.innerHTML=`
            <div id="btn-nav-profile-open" class="user-nav-badge-pill" title="Click to open portal/dashboard" style="display:inline-flex;align-items:center;gap:8px;cursor:pointer;background:#E8F5EF;padding:5px 14px;border-radius:20px;border:1px solid #A7F3D0;transition:all 0.2s ease;">
              <span class="user-pill-avatar" style="background:#02221A;color:#FFF;border-radius:50%;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;">${s}</span>
              <span class="user-pill-name" style="font-weight:700;font-size:0.85rem;color:#02221A;">${r.name}</span>
              <span style="font-size:0.725rem;background:#10B981;color:#fff;padding:2px 8px;border-radius:12px;font-weight:700;">${l}</span>
            </div>
            <button class="btn-nav-logout" id="logout-btn" title="Log Out" style="background:#02221A;color:#FFFFFF;border:none;padding:7px 16px;border-radius:20px;font-size:0.825rem;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:all 0.2s ease;box-shadow:0 2px 6px rgba(0,0,0,0.1);">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              <span>Log Out</span>
            </button>
          `,(n=document.getElementById("btn-nav-profile-open"))==null||n.addEventListener("click",()=>{f.hasRole("investor")?this.investorProfile.openDashboard():f.hasRole("farmer")?this.joinAsFarmer.openPortal("farmer"):this.marketplace.openMarketplace("profile")}),(o=document.getElementById("logout-btn"))==null||o.addEventListener("click",c=>{c.stopPropagation(),f.logout(),this.showToast("Logged out successfully")})}}else e&&(e.style.display="inline-block"),t&&(t.style.display="inline-block"),a&&(a.style.display="none")}),e==null||e.addEventListener("click",r=>{r.preventDefault(),f.clearPendingProject(),this.joinAsInvestor.openAuthModal("login")}),t==null||t.addEventListener("click",r=>{r.preventDefault(),f.clearPendingProject(),this.joinAsInvestor.openAuthModal("signup")}),i==null||i.addEventListener("click",()=>{const r=document.getElementById("projects");r&&r.scrollIntoView({behavior:"smooth"})})}setupProjectsAndHeroButtons(){const e=document.getElementById("btn-view-all-projects");e==null||e.addEventListener("click",a=>{a.preventDefault(),this.activeProjects.toggleShowAllProjects();const i=this.activeProjects.isShowingAll();this.showToast(i?"Showing all 30 verified Bangladeshi projects":"Showing top 4 projects")});const t=document.getElementById("close-project-detail");t==null||t.addEventListener("click",()=>{this.activeProjects.closeProjectDetailsModal()})}setupModalEscapeKeys(){document.addEventListener("keydown",e=>{e.key==="Escape"&&(this.activeProjects.closeAuthModal(),this.activeProjects.closeProjectDetailsModal(),this.marketplace.closeMarketplaceModal(),this.joinAsFarmer.closePortal(),this.investorProfile.closeDashboard())}),document.querySelectorAll(".modal-backdrop").forEach(e=>{e.addEventListener("click",t=>{t.target===e&&(e.classList.remove("active"),document.body.style.overflow="")})})}setupSmoothScroll(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{const a=e.getAttribute("href");if(!a||a==="#")return;const i=document.querySelector(a);i&&(t.preventDefault(),i.scrollIntoView({behavior:"smooth"}))})})}routeDedicatedPageView(){const e=window.location.pathname.toLowerCase(),t=window.location.hash.toLowerCase(),a=e.split("/").pop()||"";if(window.gramBondhon={app:this,auth:f,hero:this.heroSection,investor:this.investorProfile,projects:this.activeProjects,marketplace:this.marketplace,farmer:this.joinAsFarmer},a.includes("market")||t.includes("marketplace")){setTimeout(()=>{this.marketplace.openMarketplace("storefront")},50);return}if(a.includes("orders")||t.includes("orders")){setTimeout(()=>{this.marketplace.openBuyerProfile("on_the_way")},50);return}if(a.includes("projects")||t.includes("projects")){f.isAuthenticated()||f.demoLogin("investor"),setTimeout(()=>{this.investorProfile.openDashboard("projects")},50);return}if(a.includes("dashboard")||t.includes("dashboard")){f.isAuthenticated()||f.demoLogin("investor"),setTimeout(()=>{this.investorProfile.openDashboard("dashboard")},50);return}if(a.includes("portfolio")||t.includes("portfolio")){f.isAuthenticated()||f.demoLogin("investor"),setTimeout(()=>{this.investorProfile.openDashboard("financials")},50);return}if(a.includes("profile")||t.includes("profile")){f.isAuthenticated()||f.demoLogin("investor"),setTimeout(()=>{this.investorProfile.openDashboard("settings")},50);return}if(a.includes("investor")||t.includes("investor")){f.isAuthenticated()||f.demoLogin("investor");return}if(a.includes("login")||t.includes("login")){setTimeout(()=>{this.joinAsInvestor.openAuthModal("login")},50);return}if(a.includes("register")||t.includes("register")){setTimeout(()=>{this.joinAsInvestor.openAuthModal("signup")},50);return}}showToast(e){const t=document.getElementById("toast-notification"),a=document.getElementById("toast-message");!t||!a||(a.textContent=e,t.classList.add("show"),setTimeout(()=>{t.classList.remove("show")},4e3))}}document.addEventListener("DOMContentLoaded",()=>{new Y().init()});
