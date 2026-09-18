import React, { useState, useEffect, useRef } from 'react';

/**
 * =========================================================================
 * GRAMBONDHON (গ্রামীণ বন্ধন) - REACT HOMEPAGE COMPONENT
 * Enhanced with:
 * - Wide layout (reduced side whitespace)
 * - 2.4s rapid slideshow of multiple pure Bangladeshi farmer & women artisan photos
 * - Expanded ecosystem navbar
 * - High-profit bilingual project cards
 * =========================================================================
 */

const ACTIVE_PROJECTS = [
  {
    "id": "proj-chilli-bogura",
    "name": "Red Chilli farming - 1",
    "bengaliName": "বগুড়া ও জামালপুর উন্নত জাতের লাল মরিচ চাষ",
    "location": "বগুড়া • Sariakandi, Bogura",
    "image": "/images/red-chilli-farming.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 20000,
    "profitReturn": "15.5% – 18.2%",
    "periodText": "3 Months",
    "totalReturnBDT": "৳ 23,100 – ৳ 23,640",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৫.৫% – ১৮.২% প্রতি ৩ মাস",
    "profitRatio": "65% Chilli Grower / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% মরিচ চাষি / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 80,
    "durationOrRaised": "24 Days Left",
    "raisedBDT": 640000,
    "goalBDT": 800000
  },
  {
    "id": "proj-potato-munshiganj",
    "name": "Munshiganj Organic Potato Harvest",
    "bengaliName": "মুন্সীগঞ্জ উন্নত জাতের গোল আলু প্রকল্প",
    "location": "মুন্সীগঞ্জ • Tongibari, Munshiganj",
    "image": "/images/munshiganj-potato-harvest.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 10000,
    "profitReturn": "16.0% – 19.2%",
    "periodText": "4 Months",
    "totalReturnBDT": "৳ 11,600 – ৳ 11,920",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৬.০% – ১৯.২% প্রতি ৪ মাস",
    "profitRatio": "65% Potato Farmer / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% আলু চাষি / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 77,
    "durationOrRaised": "26 Days Left",
    "raisedBDT": 580000,
    "goalBDT": 750000
  },
  {
    "id": "proj-beter-jhuri",
    "name": "Beter Jhuri & Bamboo Craft Collective",
    "bengaliName": "সিলেট ও জামালপুর বেতের ঝুড়ি ও হ্যান্ডব্যাগ সমবায়",
    "location": "সিলেট • Gowainghat, Sylhet",
    "image": "/images/beter-jhuri-bag.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 7500,
    "profitReturn": "14.5% – 17.0%",
    "periodText": "4 Months",
    "totalReturnBDT": "৳ 8,585 – ৳ 8,775",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৪.৫% – ১৭.০% প্রতি ৪ মাস",
    "profitRatio": "70% Women Artisans / 30% Ethical Investors",
    "investorShareText": "৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",
    "bengaliProfitSplit": "৭০% নারী কারিগর / ৩০% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 70,
    "durationOrRaised": "21 Days Left",
    "raisedBDT": 420000,
    "goalBDT": 600000
  },
  {
    "id": "proj-poultry-gazipur",
    "name": "Sustainable Poultry Cluster",
    "bengaliName": "টেকসই ব্রয়লার ও বাণিজ্যিক পোল্ট্রি খামার",
    "location": "গাজীপুর • Gazipur, Dhaka",
    "image": "/images/sustainable-poultry.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 7500,
    "profitReturn": "15.5% – 18.2%",
    "periodText": "3 Months",
    "totalReturnBDT": "৳ 8,660 – ৳ 8,865",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৫.৫% – ১৮.২% বার্ষিক মুনাফা",
    "profitRatio": "65% Poultry Grower / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% পোল্ট্রি খামারি / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 60,
    "durationOrRaised": "28 Days Left",
    "raisedBDT": 480000,
    "goalBDT": 800000
  },
  {
    "id": "proj-fish-mymensingh",
    "name": "Freshwater Rui-Katla Aquaculture",
    "bengaliName": "ময়মনসিংহ রুপালি রুই ও কাতলা মাছ চাষ",
    "location": "ময়মনসিংহ • Trishal, Mymensingh",
    "image": "/images/freshwater-fish-culture.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 12000,
    "profitReturn": "17.5% – 21.0%",
    "periodText": "6 Months",
    "totalReturnBDT": "৳ 14,100 – ৳ 14,520",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৭.৫% – ২১.০% প্রতি ৬ মাস",
    "profitRatio": "65% Fish Cultivator / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% মৎস্যচাষি / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 67,
    "durationOrRaised": "32 Days Left",
    "raisedBDT": 600000,
    "goalBDT": 900000
  },
  {
    "id": "proj-mustard-manikganj",
    "name": "Mustard & Pure Honey Apiculture",
    "bengaliName": "মানিকগঞ্জ সরিষা ফুল ও খাঁটি মধু প্রকল্প",
    "location": "মানিকগঞ্জ • Singair, Manikganj",
    "image": "/images/mustard-honey-farming.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 8000,
    "profitReturn": "16.2% – 19.5%",
    "periodText": "3 Months",
    "totalReturnBDT": "৳ 9,295 – ৳ 9,560",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৬.২% – ১৯.৫% প্রতি ৩ মাস",
    "profitRatio": "65% Farmer-Beekeeper / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% কৃষক-মৌয়াল / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 69,
    "durationOrRaised": "18 Days Left",
    "raisedBDT": 450000,
    "goalBDT": 650000
  },
  {
    "id": "proj-nakshi-rajshahi",
    "name": "Nakshi Kantha Collective",
    "bengaliName": "জামালপুর-রাজশাহী নকশী কাঁথা সমবায়",
    "location": "জামালপুর ও রাজশাহী • Jamalpur, BD",
    "image": "/images/nakshi-kantha-artisan.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 7500,
    "profitReturn": "14.0% – 16.5%",
    "periodText": "4 Months",
    "totalReturnBDT": "৳ 8,550 – ৳ 8,740",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৪.০% – ১৬.৫% বার্ষিক মুনাফা",
    "profitRatio": "70% Women Artisans / 30% Ethical Investors",
    "investorShareText": "৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",
    "bengaliProfitSplit": "৭০% নারী কারিগর / ৩০% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 75,
    "durationOrRaised": "22 Days Left",
    "raisedBDT": 562500,
    "goalBDT": 750000
  },
  {
    "id": "proj-highland-tea",
    "name": "Highland Tea Collective",
    "bengaliName": "পঞ্চগড় ও শ্রীমঙ্গল অর্গানিক চা বাগান",
    "location": "পঞ্চগড় • Panchagarh, Rangpur",
    "image": "/images/highland-tea.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 10000,
    "profitReturn": "16.5% – 19.5%",
    "periodText": "6 Months",
    "totalReturnBDT": "৳ 11,650 – ৳ 11,950",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৬.৫% – ১৯.৫% বার্ষিক মুনাফা",
    "profitRatio": "60% Tea Planters / 40% Ethical Investors",
    "investorShareText": "৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",
    "bengaliProfitSplit": "৬০% চা চাষি / ৪০% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 90,
    "durationOrRaised": "18 Days Left",
    "raisedBDT": 720000,
    "goalBDT": 800000
  },
  {
    "id": "proj-rajshahi-mangoes",
    "name": "Rajshahi Organic Mangoes",
    "bengaliName": "চারঘাট ফরমালিনমুক্ত আম্রপালি বাগান",
    "location": "রাজশাহী • Charghat, Rajshahi",
    "image": "/images/rajshahi-mango-harvest.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 8000,
    "profitReturn": "17.0% – 20.5%",
    "periodText": "5 Months",
    "totalReturnBDT": "৳ 9,360 – ৳ 9,640",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৭.০% – ২০.৫% মৌসুমি মুনাফা",
    "profitRatio": "65% Orchard Farmers / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% বাগান চাষি / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 85,
    "durationOrRaised": "25 Days Left",
    "raisedBDT": 680000,
    "goalBDT": 800000
  },
  {
    "id": "proj-bogura-dairy",
    "name": "Bogura Modern Dairy Hub",
    "bengaliName": "বগুড়া উন্নত জাতের ডেইরি ও দুগ্ধ খামার",
    "location": "বগুড়া • Sariakandi, Bogura",
    "image": "/images/bogura-dairy-farm.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 15000,
    "profitReturn": "15.0% – 17.8%",
    "periodText": "6 Months",
    "totalReturnBDT": "৳ 17,250 – ৳ 17,670",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৫.০% – ১৭.৮% প্রতি ৬ মাস",
    "profitRatio": "60% Dairy Farmers / 40% Ethical Investors",
    "investorShareText": "৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",
    "bengaliProfitSplit": "৬০% ডেইরি খামারি / ৪০% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 70,
    "durationOrRaised": "30 Days Left",
    "raisedBDT": 630000,
    "goalBDT": 900000
  },
  {
    "id": "proj-clay-pottery",
    "name": "Terracotta Clay Pottery Guild",
    "bengaliName": "ধামরাই ও সাভার ঐতিহ্যবাহী মৃৎশিল্প সমবায়",
    "location": "ঢাকা • Dhamrai, Dhaka",
    "image": "/images/clay-pottery.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 5000,
    "profitReturn": "13.5% – 16.0%",
    "periodText": "4 Months",
    "totalReturnBDT": "৳ 5,675 – ৳ 5,800",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৩.৫% – ১৬.০% প্রতি ৪ মাস",
    "profitRatio": "70% Potters / 30% Ethical Investors",
    "investorShareText": "৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",
    "bengaliProfitSplit": "৭০% মৃৎশিল্পী / ৩০% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 64,
    "durationOrRaised": "19 Days Left",
    "raisedBDT": 320000,
    "goalBDT": 500000
  },
  {
    "id": "proj-rice-seedlings",
    "name": "High-Yield Boro Seedlings Nursery",
    "bengaliName": "রংপুর হাইব্রিড বোরো ধানের চারা ও ফলন",
    "location": "রংপুর • Mithapukur, Rangpur",
    "image": "/images/farmer-rice-planting.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 6000,
    "profitReturn": "14.8% – 17.5%",
    "periodText": "4 Months",
    "totalReturnBDT": "৳ 6,888 – ৳ 7,050",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৪.৮% – ১৭.৫% প্রতি ৪ মাস",
    "profitRatio": "65% Rice Growers / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% ধান চাষি / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 68,
    "durationOrRaised": "27 Days Left",
    "raisedBDT": 410000,
    "goalBDT": 600000
  },
  {
    "id": "proj-jute-women",
    "name": "Golden Fiber Jute & Eco Weaving",
    "bengaliName": "ফরিদপুর সোনালী আঁশ পাট ও কারুপণ্য",
    "location": "ফরিদপুর • Boalmari, Faridpur",
    "image": "/images/jute-bamboo-women.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 7000,
    "profitReturn": "14.0% – 16.8%",
    "periodText": "5 Months",
    "totalReturnBDT": "৳ 7,980 – ৳ 8,175",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৪.০% – ১৬.৮% প্রতি ৫ মাস",
    "profitRatio": "70% Jute Artisans / 30% Ethical Investors",
    "investorShareText": "৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",
    "bengaliProfitSplit": "৭০% পাট কারিগর / ৩০% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 70,
    "durationOrRaised": "23 Days Left",
    "raisedBDT": 490000,
    "goalBDT": 700000
  },
  {
    "id": "proj-stepped-paddy",
    "name": "Stepped Organic Paddy Cultivation",
    "bengaliName": "বগুড়া ও দিনাজপুর সুগন্ধি ধান চাষ",
    "location": "দিনাজপুর • Birganj, Dinajpur",
    "image": "/images/hero-bangladesh-farming.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 9000,
    "profitReturn": "15.2% – 18.0%",
    "periodText": "5 Months",
    "totalReturnBDT": "৳ 10,368 – ৳ 10,620",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৫.২% – ১৮.০% প্রতি ৫ মাস",
    "profitRatio": "65% Farmers / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% কৃষক / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 72,
    "durationOrRaised": "29 Days Left",
    "raisedBDT": 540000,
    "goalBDT": 750000
  },
  {
    "id": "proj-chilli-char-sariakandi",
    "name": "Sariakandi River-Island Red Chilli",
    "bengaliName": "সারিয়াকান্দি চরের লাল মরিচ সংগ্রহ",
    "location": "বগুড়া • Sariakandi, Bogura",
    "image": "/images/red-chilli-farming.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 12000,
    "profitReturn": "16.0% – 19.0%",
    "periodText": "3 Months",
    "totalReturnBDT": "৳ 13,920 – ৳ 14,280",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৬.০% – ১৯.০% প্রতি ৩ মাস",
    "profitRatio": "65% Char Growers / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% চর চাষি / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 80,
    "durationOrRaised": "15 Days Left",
    "raisedBDT": 720000,
    "goalBDT": 900000
  },
  {
    "id": "proj-potato-cold-rangpur",
    "name": "Rangpur Cold Storage Seed Potato",
    "bengaliName": "রংপুর হিমাগার বীজ আলু সংরক্ষণ ও বিতরণ",
    "location": "রংপুর • Pirganj, Rangpur",
    "image": "/images/munshiganj-potato-harvest.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 8500,
    "profitReturn": "15.8% – 18.5%",
    "periodText": "4 Months",
    "totalReturnBDT": "৳ 9,843 – ৳ 10,072",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৫.৮% – ১৮.৫% প্রতি ৪ মাস",
    "profitRatio": "65% Farmers / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% আলু চাষি / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 73,
    "durationOrRaised": "20 Days Left",
    "raisedBDT": 510000,
    "goalBDT": 700000
  },
  {
    "id": "proj-cane-furniture-sylhet",
    "name": "Sylhet Cane Basket & Home Craft",
    "bengaliName": "সিলেট বেতের গৃহসজ্জা ও হস্তশিল্প",
    "location": "সিলেট • Beanibazar, Sylhet",
    "image": "/images/beter-jhuri-bag.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 10000,
    "profitReturn": "15.0% – 17.5%",
    "periodText": "4 Months",
    "totalReturnBDT": "৳ 11,500 – ৳ 11,750",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৫.০% – ১৭.৫% প্রতি ৪ মাস",
    "profitRatio": "70% Artisans / 30% Ethical Investors",
    "investorShareText": "৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",
    "bengaliProfitSplit": "৭০% কারুশিল্পী / ৩০% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 81,
    "durationOrRaised": "16 Days Left",
    "raisedBDT": 650000,
    "goalBDT": 800000
  },
  {
    "id": "proj-fish-haor-sunamganj",
    "name": "Sunamganj Haor Indigenous Fish",
    "bengaliName": "সুনামগঞ্জ হাওরের দেশীয় মাছ সংরক্ষণ ও চাষ",
    "location": "সুনামগঞ্জ • Tahirpur, Sunamganj",
    "image": "/images/freshwater-fish-culture.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 11000,
    "profitReturn": "18.0% – 21.5%",
    "periodText": "5 Months",
    "totalReturnBDT": "৳ 12,980 – ৳ 13,365",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৮.০% – ২১.৫% প্রতি ৫ মাস",
    "profitRatio": "65% Fishermen / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% মৎস্যজীবী / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 84,
    "durationOrRaised": "22 Days Left",
    "raisedBDT": 715000,
    "goalBDT": 850000
  },
  {
    "id": "proj-honey-sundarbans",
    "name": "Sundarbans Coastal Mangrove Honey",
    "bengaliName": "সুন্দরবন প্রাকৃতিক মৌয়াল মধু সংগ্রহ",
    "location": "সাতক্ষীরা • Shyamnagar, Satkhira",
    "image": "/images/mustard-honey-farming.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 6500,
    "profitReturn": "16.5% – 19.8%",
    "periodText": "3 Months",
    "totalReturnBDT": "৳ 7,570 – ৳ 7,785",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৬.৫% – ১৯.৮% প্রতি ৩ মাস",
    "profitRatio": "70% Mouyals / 30% Ethical Investors",
    "investorShareText": "৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",
    "bengaliProfitSplit": "৭০% মৌয়াল / ৩০% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 78,
    "durationOrRaised": "14 Days Left",
    "raisedBDT": 390000,
    "goalBDT": 500000
  },
  {
    "id": "proj-dairy-sirajganj",
    "name": "Sirajganj Baghabari Dairy Cooperative",
    "bengaliName": "সিরাজগঞ্জ বাঘাবাড়ী দুগ্ধ খামার সমবায়",
    "location": "সিরাজগঞ্জ • Shahjadpur, Sirajganj",
    "image": "/images/bogura-dairy-farm.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 18000,
    "profitReturn": "15.2% – 18.0%",
    "periodText": "6 Months",
    "totalReturnBDT": "৳ 20,736 – ৳ 21,240",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৫.২% – ১৮.০% প্রতি ৬ মাস",
    "profitRatio": "60% Dairy Farmers / 40% Ethical Investors",
    "investorShareText": "৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",
    "bengaliProfitSplit": "৬০% খামারি / ৪০% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 83,
    "durationOrRaised": "31 Days Left",
    "raisedBDT": 990000,
    "goalBDT": 1200000
  },
  {
    "id": "proj-pottery-rajshahi",
    "name": "Terracotta Garden Planters & Tiles",
    "bengaliName": "রাজশাহী টেরাকোটা বাগানপাত্র ও টালি সমবায়",
    "location": "রাজশাহী • Paba, Rajshahi",
    "image": "/images/clay-pottery.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 6000,
    "profitReturn": "14.0% – 16.5%",
    "periodText": "4 Months",
    "totalReturnBDT": "৳ 6,840 – ৳ 6,990",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৪.০% – ১৬.৫% প্রতি ৪ মাস",
    "profitRatio": "70% Artisans / 30% Ethical Investors",
    "investorShareText": "৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",
    "bengaliProfitSplit": "৭০% কারিগর / ৩০% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 72,
    "durationOrRaised": "24 Days Left",
    "raisedBDT": 360000,
    "goalBDT": 500000
  },
  {
    "id": "proj-chilli-comilla",
    "name": "Chandpur & Comilla Naga Chilli",
    "bengaliName": "কুমিল্লা ও চাঁদপুর বোম্বাই ও নাগা মরিচ চাষ",
    "location": "চাঁদপুর • Faridganj, Chandpur",
    "image": "/images/red-chilli-farming.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 14000,
    "profitReturn": "16.5% – 19.5%",
    "periodText": "4 Months",
    "totalReturnBDT": "৳ 16,310 – ৳ 16,730",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৬.৫% – ১৯.৫% প্রতি ৪ মাস",
    "profitRatio": "65% Growers / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% মরিচ চাষি / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 84,
    "durationOrRaised": "17 Days Left",
    "raisedBDT": 840000,
    "goalBDT": 1000000
  },
  {
    "id": "proj-potato-bogura",
    "name": "Shibganj Diamond Potato Harvest",
    "bengaliName": "শিবগঞ্জ ডায়মন্ড আলু সরাসরি রফতানি প্রকল্প",
    "location": "বগুড়া • Shibganj, Bogura",
    "image": "/images/munshiganj-potato-harvest.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 9500,
    "profitReturn": "15.5% – 18.2%",
    "periodText": "4 Months",
    "totalReturnBDT": "৳ 10,972 – ৳ 11,229",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৫.৫% – ১৮.২% প্রতি ৪ মাস",
    "profitRatio": "65% Farmers / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% চাষি / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 73,
    "durationOrRaised": "22 Days Left",
    "raisedBDT": 617500,
    "goalBDT": 850000
  },
  {
    "id": "proj-shitolpati-sylhet",
    "name": "Traditional Shitol Pati Cane Mat",
    "bengaliName": "মৌলভীবাজার শীতল পাটি ও বেতের দোলনা সমবায়",
    "location": "মৌলভীবাজার • Rajnagar, Sylhet",
    "image": "/images/beter-jhuri-bag.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 8000,
    "profitReturn": "14.2% – 16.8%",
    "periodText": "4 Months",
    "totalReturnBDT": "৳ 9,136 – ৳ 9,344",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৪.২% – ১৬.৮% প্রতি ৪ মাস",
    "profitRatio": "70% Artisans / 30% Ethical Investors",
    "investorShareText": "৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",
    "bengaliProfitSplit": "৭০% কারিগর / ৩০% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 80,
    "durationOrRaised": "19 Days Left",
    "raisedBDT": 480000,
    "goalBDT": 600000
  },
  {
    "id": "proj-prawn-khulna",
    "name": "Khulna Bagda & Galda Shrimps",
    "bengaliName": "খুলনা লবণাক্ত মিষ্টি জলের গলদা চিংড়ি প্রকল্প",
    "location": "খুলনা • Paikgachha, Khulna",
    "image": "/images/freshwater-fish-culture.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 20000,
    "profitReturn": "18.5% – 22.0%",
    "periodText": "5 Months",
    "totalReturnBDT": "৳ 23,700 – ৳ 24,400",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৮.৫% – ২২.০% প্রতি ৫ মাস",
    "profitRatio": "65% Farmers / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% চিংড়ি চাষি / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 81,
    "durationOrRaised": "28 Days Left",
    "raisedBDT": 1300000,
    "goalBDT": 1600000
  },
  {
    "id": "proj-mustard-tangail",
    "name": "Tangail Maghi Mustard Cold-Press",
    "bengaliName": "টাঙ্গাইল মাঘী সরিষা ও খাঁটি ঘানি তেল সমবায়",
    "location": "টাঙ্গাইল • Mirzapur, Tangail",
    "image": "/images/mustard-honey-farming.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 7500,
    "profitReturn": "16.0% – 18.8%",
    "periodText": "3 Months",
    "totalReturnBDT": "৳ 8,700 – ৳ 8,910",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৬.০% – ১৮.৮% প্রতি ৩ মাস",
    "profitRatio": "65% Farmers / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% কৃষক / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 77,
    "durationOrRaised": "16 Days Left",
    "raisedBDT": 460000,
    "goalBDT": 600000
  },
  {
    "id": "proj-poultry-narsingdi",
    "name": "Narsingdi Sonali Free-Range Poultry",
    "bengaliName": "নরসিংদী সোনালী মুরগি ও ডিম খামার সমবায়",
    "location": "নরসিংদী • Shibpur, Narsingdi",
    "image": "/images/sustainable-poultry.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 8000,
    "profitReturn": "15.8% – 18.5%",
    "periodText": "3 Months",
    "totalReturnBDT": "৳ 9,264 – ৳ 9,480",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৫.৮% – ১৮.৫% প্রতি ৩ মাস",
    "profitRatio": "65% Poultry Farmers / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% খামারি / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 75,
    "durationOrRaised": "21 Days Left",
    "raisedBDT": 560000,
    "goalBDT": 750000
  },
  {
    "id": "proj-tea-panchagarh",
    "name": "Panchagarh Plainland Green Tea Estate",
    "bengaliName": "পঞ্চগড় সমতলের অর্গানিক গ্রিন টি প্রকল্প",
    "location": "পঞ্চগড় • Tetulia, Rangpur",
    "image": "/images/highland-tea.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 10500,
    "profitReturn": "16.0% – 19.0%",
    "periodText": "6 Months",
    "totalReturnBDT": "৳ 12,180 – ৳ 12,495",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৬.০% – ১৯.০% প্রতি ৬ মাস",
    "profitRatio": "60% Tea Planters / 40% Ethical Investors",
    "investorShareText": "৪০% বিনিয়োগকারীর সরাসরি মুনাফা (40% Investor Profit Share)",
    "bengaliProfitSplit": "৬০% চা চাষি / ৪০% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 82,
    "durationOrRaised": "25 Days Left",
    "raisedBDT": 780000,
    "goalBDT": 950000
  },
  {
    "id": "proj-mango-chapainawabganj",
    "name": "Shibganj Fazli & Amrapali Mango Orchard",
    "bengaliName": "চাঁপাইনবাবগঞ্জ শিবগঞ্জ ফজলি আম বাগান",
    "location": "চাঁপাইনবাবগঞ্জ • Shibganj, Rajshahi",
    "image": "/images/rajshahi-mango-harvest.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 9000,
    "profitReturn": "17.2% – 20.8%",
    "periodText": "5 Months",
    "totalReturnBDT": "৳ 10,548 – ৳ 10,872",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৭.২% – ২০.৮% প্রতি ৫ মাস",
    "profitRatio": "65% Growers / 35% Ethical Investors",
    "investorShareText": "৩৫% বিনিয়োগকারীর সরাসরি মুনাফা (35% Investor Profit Share)",
    "bengaliProfitSplit": "৬৫% বাগান মালিক / ৩৫% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 80,
    "durationOrRaised": "26 Days Left",
    "raisedBDT": 720000,
    "goalBDT": 900000
  },
  {
    "id": "proj-jute-crafts-dhaka",
    "name": "Export-Grade Jute Rugs & Fashion Totes",
    "bengaliName": "ঢাকা হস্তশিল্প বহুমুখী পাটপণ্য ও শপিং ব্যাগ",
    "location": "নারায়ণগঞ্জ • Sonargaon, Dhaka",
    "image": "/images/jute-bamboo-women.jpg",
    "badge": "LIVE",
    "pricePerShareBDT": 7200,
    "profitReturn": "14.5% – 17.2%",
    "periodText": "4 Months",
    "totalReturnBDT": "৳ 8,244 – ৳ 8,438",
    "returnTypeTag": "Variable Return",
    "bengaliReturn": "১৪.৫% – ১৭.২% প্রতি ৪ মাস",
    "profitRatio": "70% Artisans / 30% Ethical Investors",
    "investorShareText": "৩০% বিনিয়োগকারীর সরাসরি মুনাফা (30% Investor Profit Share)",
    "bengaliProfitSplit": "৭০% পাটশিল্পী / ৩০% নৈতিক বিনিয়োগকারী",
    "fundedPercent": 72,
    "durationOrRaised": "20 Days Left",
    "raisedBDT": 518400,
    "goalBDT": 720000
  }
];

const HERO_SLIDES = [
  {
    title: 'Paddy Seedlings Cultivation • ফসলী ধানের চারা রোপণ',
    subtitle: 'Replacing predatory microcredit usury with transparent, asset-backed agricultural partnership contracts.',
    image: '/images/farmer-rice-planting.jpg'
  },
  {
    title: 'Eco Jute & Bamboo Homeware • সোনালী আঁশ ও বাঁশ শিল্প',
    subtitle: 'Reviving Bengal’s golden fiber and cane basketry for zero-plastic sustainable global living.',
    image: '/images/jute-bamboo-women.jpg'
  },
  {
    title: 'Highland Organic Tea Gardens • শ্রীমঙ্গলের সবুজ চা বাগান',
    subtitle: 'Smallholder green tea & citrus plantations producing export-grade whole leaf harvest under Halal profit sharing.',
    image: '/images/highland-tea.jpg'
  },
  {
    title: 'Empowering Rural Growth Through Ethical Investment',
    subtitle: 'Connecting global ethical investors with local farmers to build a sustainable, interest-free future for rural communities.',
    image: '/images/hero-bangladesh-farming.jpg'
  },
  {
    title: 'Sun-Dried Red Chilli Harvest • লাল মরিচ শুকানো ও বাছাই',
    subtitle: 'Empowering rural women farmers with direct post-harvest drying facilities and guaranteed spice market linkages.',
    image: '/images/hero-chilli-drying.jpg'
  },
  {
    title: 'Rajshahi Tree-Ripened Mangoes • রাজশাহীর ফরমালিনমুক্ত আম',
    subtitle: 'Premium chemical-free paper-bagged Amrapali and Fazli orchards generating high seasonal harvest profits.',
    image: '/images/rajshahi-mango-harvest.jpg'
  }
];

export function GramBondhonHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isFarmerModalOpen, setIsFarmerModalOpen] = useState(false);
  const [farmerTab, setFarmerTab] = useState('farmer'); // 'farmer' | 'artisan'
  const [producerUser, setProducerUser] = useState(null);
  const [isInvestorDashOpen, setIsInvestorDashOpen] = useState(false);
  const [investorDashTab, setInvestorDashTab] = useState('dashboard');
  const [investorProjFilter, setInvestorProjFilter] = useState('all');
  const [investorSearchCategory, setInvestorSearchCategory] = useState('');

  // Fast 2.0s continuous slideshow interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleInvestClick = (project) => {
    setSelectedProject(project);
    if (!isLoggedIn) {
      setIsAuthModalOpen(true);
    } else {
      setIsDetailModalOpen(true);
    }
  };

  const handleDemoLogin = () => {
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
    if (selectedProject) {
      setTimeout(() => setIsDetailModalOpen(true), 300);
    }
  };

  const handleDemoFarmer = () => {
    setProducerUser({
      name: 'মোঃ রফিকুল ইসলাম (Md. Rafiqul Islam)',
      role: '🌾 Bio-Secure Poultry Farmer • Gazipur Upazila',
      project: 'Gazipur Broiler Poultry Shed #GB-2026-04',
      status: '45% Backed by 12 Investors (৳1,20,000 Goal)',
      wallet: 'bKash Merchant Verified • 01712-345678'
    });
  };

  const handleDemoArtisan = () => {
    setProducerUser({
      name: 'ফাতেমা বেগম (Fatima Begum)',
      role: '🧵 Rural Nakshi Kantha Artisan • Islampur, Jamalpur',
      project: 'Jamalpur Women Artisan Handicraft Collective',
      status: '24 Hand-Stitched Quilts Live in Marketplace',
      wallet: 'Nagad Verified • 01823-456789'
    });
  };

  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div className="grambondhon-app" style={{ backgroundColor: '#F7F4EC', color: '#142820', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      
      {/* 1. NAVBAR (CLEAN, NO SEARCH BOX) */}
      <header className="main-navbar" style={{ position: 'sticky', top: 0, zIndex: 100, background: '#FFF', borderBottom: '1px solid rgba(13,56,42,0.12)' }}>
        <div style={{ width: '95%', maxWidth: 1440, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <div className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg style={{ width: 24, height: 24, color: '#10B981' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
            </svg>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0A2C22' }}>Gram<span style={{ color: '#0D382A' }}>Bondhon</span></span>
          </div>

          <nav>
            <ul style={{ display: 'flex', gap: 24, listStyle: 'none' }}>
              <li><a href="#home" style={{ fontWeight: 700, color: '#0D382A' }}>Home</a></li>
              <li><a href="#projects" style={{ fontWeight: 600, color: '#5B6E66' }}>Active Projects</a></li>
              <li><a href="#marketplace" style={{ fontWeight: 600, color: '#5B6E66' }}>Marketplace</a></li>
              <li><a href="#how-it-works" style={{ fontWeight: 600, color: '#5B6E66' }}>How It Works</a></li>
              <li>
                <button 
                  onClick={() => setIsFarmerModalOpen(true)} 
                  style={{ background: 'none', border: 'none', fontWeight: 700, color: '#0D382A', cursor: 'pointer', fontSize: '0.95rem' }}
                >
                  Farmers & Women
                </button>
              </li>
              <li><a href="#about" style={{ fontWeight: 600, color: '#5B6E66' }}>About</a></li>
            </ul>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {producerUser ? (
              <span style={{ background: '#E6F4EA', color: '#0D382A', padding: '6px 14px', borderRadius: 9999, fontWeight: 700, fontSize: '0.85rem' }}>
                🌾 {producerUser.name.split(' ')[0]} (Producer)
              </span>
            ) : isLoggedIn ? (
              <div onClick={() => setIsInvestorDashOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer', background: '#E8F5EF', padding: '4px 12px', borderRadius: 20, border: '1px solid #A7F3D0' }}>
                <span style={{ background: '#02221A', color: '#FFF', borderRadius: '50%', width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>TR</span>
                <span style={{ fontWeight: 700, fontSize: '0.825rem', color: '#02221A' }}>Tariq Rahman</span>
                <span style={{ fontSize: '0.75rem', background: '#10B981', color: '#fff', padding: '2px 6px', borderRadius: 4, fontWeight: 700 }}>Dashboard</span>
              </div>
            ) : (
              <button onClick={() => setIsAuthModalOpen(true)} style={{ background: 'none', border: 'none', fontWeight: 700, cursor: 'pointer' }}>
                Login
              </button>
            )}
            <button onClick={() => setIsAuthModalOpen(true)} style={{ background: '#0D382A', color: '#FFF', padding: '8px 20px', borderRadius: 9999, border: 'none', fontWeight: 700, cursor: 'pointer' }}>
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION - CLEAN DIRECT OVERLAY (MATCHES media_1789565924939.jpg) */}
      <section 
        className="hero-section" 
        style={{ position: 'relative', height: 'calc(100vh - 68px)', minHeight: 'calc(100vh - 68px)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {HERO_SLIDES.map((slide, idx) => (
          <div 
            key={idx} 
            style={{ 
              position: 'absolute', 
              inset: 0, 
              backgroundImage: `url(${slide.image})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center 30%',
              opacity: idx === currentSlide ? 1 : 0,
              transition: 'opacity 0.75s ease-in-out'
            }}
          >
            {/* Clear, balanced overlay that lets authentic Bangladeshi photography shine */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,26,19,0.28) 0%, rgba(5,26,19,0.12) 42%, rgba(5,26,19,0.38) 100%)' }} />
          </div>
        ))}

        {/* Pure Text Directly Over Image (No frosted/watery card box) */}
        <div style={{ position: 'relative', zIndex: 5, maxWidth: 920, textAlign: 'center', padding: '100px 24px 60px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4.6vw, 3.85rem)', fontWeight: 800, lineHeight: 1.15, color: '#FFFFFF', letterSpacing: '-0.025em', marginBottom: 18, textShadow: '0 2px 14px rgba(0,0,0,0.75), 0 4px 28px rgba(0,0,0,0.45)' }}>
            Empowering Rural Growth<br />
            Through Ethical Investment
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', lineHeight: 1.6, color: '#FFFFFF', maxWidth: 720, margin: '0 auto 34px auto', fontWeight: 500, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
            Connecting global ethical investors with local farmers to build a sustainable, interest-free future for rural communities.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 18, flexWrap: 'wrap' }}>
            <button 
              onClick={() => { setIsFarmerModalOpen(true); setFarmerTab('farmer'); }} 
              style={{ backgroundColor: '#0E392B', color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 700, padding: '15px 36px', borderRadius: 9999, border: '1.5px solid rgba(255,255,255,0.15)', cursor: 'pointer', boxShadow: '0 6px 20px rgba(0,0,0,0.35)' }}
            >
              Join as Farmer
            </button>
            <button 
              onClick={() => setIsAuthModalOpen(true)} 
              style={{ backgroundColor: '#D6CCA8', color: '#14281E', fontSize: '1.05rem', fontWeight: 700, padding: '15px 36px', borderRadius: 9999, border: '1.5px solid rgba(0,0,0,0.08)', cursor: 'pointer', boxShadow: '0 6px 20px rgba(0,0,0,0.25)' }}
            >
              Become an Investor
            </button>
          </div>
        </div>

        {/* Floating Chat Button at bottom right matching media_1789565924939.jpg */}
        <button 
          onClick={() => alert('GramBondhon Advisory: Investment & Producer support team is online.')}
          style={{ position: 'absolute', bottom: 32, right: 36, width: 48, height: 48, borderRadius: 10, background: '#0E392B', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', zIndex: 10, boxShadow: '0 8px 24px rgba(0,0,0,0.35)' }}
          aria-label="Live Chat Support"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <line x1="8" y1="9" x2="16" y2="9"></line>
            <line x1="8" y1="13" x2="14" y2="13"></line>
          </svg>
        </button>
      </section>

      {/* INVESTOR POST-LOGIN HERO (PHOTO 4) */}
      {isLoggedIn && (
        <section 
          className="investor-hero-banner"
          style={{
            position: 'relative',
            minHeight: 460,
            background: `linear-gradient(180deg, rgba(2, 34, 26, 0.45) 0%, rgba(2, 34, 26, 0.78) 100%), url('/images/hero-bangladesh-farming.jpg') center center / cover no-repeat`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px 20px 70px',
            color: '#FFFFFF',
            marginBottom: 24
          }}
        >
          <div style={{ maxWidth: 780, margin: '0 auto', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ fontSize: '2.85rem', fontWeight: 800, color: '#FFF', marginBottom: 14, textShadow: '0 2px 10px rgba(0,0,0,0.35)' }}>
              Invest in the Earth’s<br/>Future
            </h1>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', marginBottom: 28, maxWidth: 640 }}>
              Discover vetted agricultural collectives across Bangladesh. Support local farmers while growing your sustainable portfolio.
            </p>
            <div style={{ position: 'relative', width: '100%', maxWidth: 520 }}>
              <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(12px)', border: '1.5px solid rgba(255,255,255,0.38)', borderRadius: 9999, padding: '6px 8px 6px 20px', width: '100%' }}>
                <input 
                  type="text" 
                  value={investorSearchCategory} 
                  onChange={(e) => setInvestorSearchCategory(e.target.value)} 
                  placeholder="Search by category (type 'h' for Handicrafts...)" 
                  style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#FFF', fontSize: '0.975rem' }} 
                />
                <button 
                  onClick={() => {
                    const el = document.getElementById('projects');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  style={{ background: '#05261C', color: '#FFF', border: 'none', padding: '10px 24px', borderRadius: 9999, fontWeight: 700, cursor: 'pointer' }}
                >
                  Explore
                </button>
              </div>

              {/* Recommendation Dropdown */}
              {investorSearchCategory.trim().length > 0 && (
                <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0, background: '#FFFFFF', borderRadius: 14, boxShadow: '0 16px 36px rgba(0,0,0,0.3)', border: '1px solid #E2E8F0', zIndex: 60, overflow: 'hidden', textAlign: 'left' }}>
                  <div style={{ padding: '8px 14px', background: '#F8FAFC', fontSize: '0.725rem', fontWeight: 700, color: '#64748B', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Recommended Categories</span>
                    <span>Click to Filter</span>
                  </div>
                  {[
                    { key: 'handicrafts', title: 'Handicrafts & Artisans (হস্তশিল্প)', sub: 'Nakshi Kantha, Jute Bag & Cane Craft', icon: '🧵' },
                    { key: 'crops', title: 'High-Yield Crops & Grains (শস্য ও ফসল)', sub: 'Boro & Aman Rice, Maize & Chillies', icon: '🌾' },
                    { key: 'fisheries', title: 'Hilsha & Sustainable Fisheries (মৎস্য সম্পদ)', sub: 'Meghna Hilsha & Freshwater Farming', icon: '🐟' },
                    { key: 'agro', title: 'Honey & Organic Agro (সুন্দরবন মধু)', sub: 'Wild Honey & Mustard Cold-Press', icon: '🍯' },
                    { key: 'livestock', title: 'Livestock & Dairy (গাভী ও ছাগল পালন)', sub: 'Layer Poultry & Dairy Cattle', icon: '🐄' },
                  ]
                    .filter(c => c.title.toLowerCase().includes(investorSearchCategory.toLowerCase()) || c.sub.toLowerCase().includes(investorSearchCategory.toLowerCase()) || c.key.includes(investorSearchCategory.toLowerCase()))
                    .map(item => (
                      <div 
                        key={item.key} 
                        onClick={() => {
                          setInvestorSearchCategory(item.title);
                          const el = document.getElementById('projects');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', cursor: 'pointer', borderBottom: '1px solid #F1F5F9', color: '#1E293B' }}
                      >
                        <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#06281E' }}>{item.title}</div>
                          <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{item.sub}</div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
            <button 
              onClick={() => setIsInvestorDashOpen(true)}
              style={{ marginTop: 18, background: 'rgba(2, 34, 26, 0.75)', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '7px 20px', borderRadius: 9999, color: '#E2E8F0', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: '0.85rem' }}
            >
              <span>View My Investor Portfolio & Dashboard (পোর্টফোলিও ড্যাশবোর্ড)</span>
              <span>→</span>
            </button>
          </div>
        </section>
      )}

      {/* 3. ACTIVE PROJECTS (CLEAN 4-CARD GRID & TIGHT VERTICAL SPACING) */}
      <section id="projects" style={{ backgroundColor: '#F0ECE1', padding: '24px 0 10px' }}>
        <div style={{ width: '95%', maxWidth: 1440, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16, flexWrap: 'wrap', gap: 14 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(13, 56, 42, 0.05) 100%)', border: '1px solid rgba(16, 185, 129, 0.32)', color: '#0A4E38', padding: '5px 14px', borderRadius: 9999, fontSize: '0.85rem', fontWeight: 750, letterSpacing: '0.015em', marginBottom: 8, boxShadow: '0 2px 6px rgba(13, 56, 42, 0.04)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                <span>Invest Now. Create Impact. Earn Returns !!</span>
              </div>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0A2C22', letterSpacing: '-0.02em', margin: 0 }}>Active Projects</h2>
              <p style={{ fontSize: '1.02rem', color: '#5B6E66', margin: '4px 0 0 0' }}>Invest in the future of rural Bangladesh and beyond.</p>
            </div>
            <button 
              onClick={() => setShowAllProjects(!showAllProjects)}
              style={{ background: 'rgba(13,56,42,0.05)', border: '1px solid rgba(13,56,42,0.1)', color: '#0D382A', fontWeight: 700, cursor: 'pointer', padding: '6px 14px', borderRadius: 9999, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.92rem' }}
            >
              <span>{showAllProjects ? 'Show Top 4' : 'View All'}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points={showAllProjects ? "18 15 12 9 6 15" : "9 18 15 12 9 6"}></polyline>
              </svg>
            </button>
          </div>

          {/* 4-Card Responsive Grid (4 Cards by default, all when toggled) */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: 18, 
              width: '100%' 
            }}
          >
            {(showAllProjects ? ACTIVE_PROJECTS : ACTIVE_PROJECTS.slice(0, 4)).map((proj) => (
              <div 
                key={proj.id} 
                style={{ 
                  background: '#FFFFFF', 
                  borderRadius: 16, 
                  overflow: 'hidden', 
                  border: '1px solid rgba(13,56,42,0.09)', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)' 
                }}
              >
                {/* Image Header with Bottom Gradient Info Overlay matching media_1789573283421.png */}
                <div style={{ position: 'relative', height: 220, backgroundColor: '#061D15', overflow: 'hidden' }}>
                  <img src={proj.image} alt={proj.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(6,29,21,0.2) 40%, rgba(6,29,21,0.92) 100%)', pointerEvents: 'none' }} />

                  {/* Top Badges: LIVE & Verified */}
                  <div style={{ position: 'absolute', top: 14, left: 14, right: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2, pointerEvents: 'none' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(6,29,21,0.75)', backdropFilter: 'blur(8px)', color: '#4ADE80', padding: '4px 10px', borderRadius: 9999, fontSize: '0.72rem', fontWeight: 800, border: '1px solid rgba(74,222,128,0.3)' }}>
                      ● LIVE
                    </span>
                    <span style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(6px)', color: '#0D382A', padding: '4px 10px', borderRadius: 9999, fontSize: '0.72rem', fontWeight: 700, boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}>
                      ✓ Verified
                    </span>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 16px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12, zIndex: 2, color: '#FFFFFF' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25, margin: '0 0 3px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>
                        {proj.name}
                      </h3>
                      <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        📍 {proj.location}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                        ৳ {proj.pricePerShareBDT.toLocaleString()} BDT
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                        BDT/unit
                      </div>
                    </div>
                  </div>
                </div>

                {/* Eye-Soothing Clean Card Body matching media_1789573283421.png */}
                <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', flexGrow: 1, background: '#FFFFFF' }}>
                  {/* Top Right Pastel Pill Tag */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: '#D7F2D0', color: '#16532B', padding: '4px 12px', borderRadius: 9999, fontSize: '0.76rem', fontWeight: 700 }}>
                      🌱 {proj.returnTypeTag || 'Variable Return'}
                    </span>
                  </div>

                  {/* Clean Key-Value Metrics List matching Image 2 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 16, paddingBottom: 14, borderBottom: '1px solid rgba(13,56,42,0.08)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span style={{ fontSize: '0.88rem', color: '#64748B', fontWeight: 500 }}>Period</span>
                      <strong style={{ fontSize: '0.95rem', color: '#084E43', fontWeight: 700 }}>{proj.periodText}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span style={{ fontSize: '0.88rem', color: '#64748B', fontWeight: 500 }}>Return</span>
                      <strong style={{ fontSize: '0.95rem', color: '#084E43', fontWeight: 800 }}>{proj.profitReturn}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 2 }}>
                      <span style={{ fontSize: '0.88rem', color: '#64748B', fontWeight: 500 }}>Total return</span>
                      <strong style={{ fontSize: '1.05rem', color: '#061D15', fontWeight: 800, letterSpacing: '-0.01em' }}>{proj.totalReturnBDT}</strong>
                    </div>
                  </div>

                  {/* Funding Progress Bar matching media_1789573484322.png */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: '0.82rem', marginBottom: 6 }}>
                      <strong style={{ color: '#084E43', fontWeight: 800 }}>{proj.fundedPercent}% Funded</strong>
                      <span style={{ color: '#64748B', fontSize: '0.78rem', fontWeight: 600 }}>{proj.durationOrRaised}</span>
                    </div>
                    <div style={{ height: 6, background: '#EAE6DB', borderRadius: 9999, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${proj.fundedPercent}%`, background: 'linear-gradient(90deg, #10B981 0%, #059669 100%)', borderRadius: 9999 }} />
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: 5, fontWeight: 500 }}>
                      Raised: ৳{proj.raisedBDT?.toLocaleString() || '480,000'} of ৳{proj.goalBDT?.toLocaleString() || '800,000'} (DEMO)
                    </div>
                  </div>

                  {/* Action Buttons matching media_1789573484322.png */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 9, marginTop: 'auto' }}>
                    <button onClick={() => handleInvestClick(proj)} style={{ background: '#0D382A', color: '#FFFFFF', padding: '10px 14px', borderRadius: 9999, border: 'none', fontWeight: 700, cursor: 'pointer', fontSize: '0.88rem', boxShadow: '0 2px 6px rgba(13,56,42,0.2)' }}>
                      Invest Now
                    </button>
                    <button onClick={() => handleInvestClick(proj)} style={{ background: '#EFEBE0', color: '#0D382A', padding: '10px 12px', borderRadius: 9999, border: '1px solid rgba(13,56,42,0.12)', fontWeight: 700, cursor: 'pointer', fontSize: '0.84rem' }}>
                      View Terms
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expand / Collapse Button at Bottom */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              style={{
                background: '#FFFFFF',
                color: '#0A2C22',
                border: '1.5px solid rgba(13,56,42,0.16)',
                padding: '9px 24px',
                borderRadius: 9999,
                fontSize: '0.88rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}
            >
              <span>{showAllProjects ? 'Show Top 4 Projects (কমিয়ে ৪টি দেখুন)' : 'View All Projects (৩০টি প্রকল্প দেখুন)'}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points={showAllProjects ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 4. MODALS */}
      {isAuthModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(6,29,21,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#FFF', borderRadius: 20, padding: 32, maxWidth: 500, width: '90%', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0A2C22', marginBottom: 6 }}>Investor Portal</h3>
            <p style={{ fontSize: '0.85rem', color: '#5B6E66', marginBottom: 20 }}>Log in to access verified audits and investment terms</p>
            <button onClick={handleDemoLogin} style={{ width: '100%', background: '#0D382A', color: '#FFF', padding: 12, borderRadius: 9999, border: 'none', fontWeight: 700, cursor: 'pointer', marginBottom: 12 }}>
              ⚡ 1-Click Quick Demo Login (Verified Investor)
            </button>
            <button onClick={() => setIsAuthModalOpen(false)} style={{ width: '100%', background: '#F1EFEA', color: '#0A2C22', padding: 10, borderRadius: 9999, border: 'none', fontWeight: 600, cursor: 'pointer' }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {isDetailModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(6,29,21,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#FFF', borderRadius: 20, padding: 32, maxWidth: 560, width: '90%' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0A2C22', marginBottom: 4 }}>
              {selectedProject?.name || 'Project Details'}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#0D382A', fontWeight: 600, marginBottom: 8 }}>{selectedProject?.bengaliName}</p>
            <p style={{ fontSize: '0.9rem', color: '#5B6E66', marginBottom: 16 }}>
              Price per Share: {selectedProject?.pricePerShareBDT?.toLocaleString()} BDT • Projected: {selectedProject?.profitReturn}
            </p>
            <button onClick={() => { alert('Demo Investment Confirmed!'); setIsDetailModalOpen(false); }} style={{ width: '100%', background: '#0D382A', color: '#FFF', padding: 12, borderRadius: 9999, border: 'none', fontWeight: 700, cursor: 'pointer' }}>
              Confirm Investment (Demo)
            </button>
          </div>
        </div>
      )}

      {/* FARMER & RURAL WOMEN PORTAL MODAL */}
      {isFarmerModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(6,29,21,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 16 }}>
          <div style={{ background: '#FFF', borderRadius: 20, maxWidth: 640, width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
            <button onClick={() => setIsFarmerModalOpen(false)} style={{ position: 'absolute', top: 16, right: 16, border: 'none', background: '#F1EFEA', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', fontSize: '1.1rem' }}>
              ×
            </button>

            <div style={{ padding: '24px 28px 16px', background: '#FBF9F4', borderBottom: '1px solid #ECE7DC' }}>
              <span style={{ display: 'inline-block', background: '#E6F4EA', color: '#0D382A', padding: '3px 12px', borderRadius: 9999, fontSize: '0.8rem', fontWeight: 700, marginBottom: 8 }}>
                🌾 GramBondhon Producer Portal • গ্রামীণ উদ্যোক্তা পোর্টাল
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0A2C22', margin: '4px 0' }}>Join as Farmer or Rural Woman Artisan</h3>
              <p style={{ fontSize: '0.85rem', color: '#5B6E66', margin: 0 }}>
                Apply for 0% interest Shariah capital or open your artisan marketplace store.
              </p>
            </div>

            <div style={{ display: 'flex', background: '#F7F4EC', borderBottom: '2px solid #EAE5D7', padding: '0 28px', gap: 8 }}>
              <button 
                onClick={() => setFarmerTab('farmer')} 
                style={{ padding: '12px 18px', background: 'none', border: 'none', borderBottom: farmerTab === 'farmer' ? '3px solid #0D382A' : '3px solid transparent', fontWeight: 700, color: farmerTab === 'farmer' ? '#0D382A' : '#5B6E66', cursor: 'pointer' }}
              >
                🌾 Crop & Livestock Farmer
              </button>
              <button 
                onClick={() => setFarmerTab('artisan')} 
                style={{ padding: '12px 18px', background: 'none', border: 'none', borderBottom: farmerTab === 'artisan' ? '3px solid #0D382A' : '3px solid transparent', fontWeight: 700, color: farmerTab === 'artisan' ? '#0D382A' : '#5B6E66', cursor: 'pointer' }}
              >
                🧵 Rural Woman Artisan
              </button>
            </div>

            <div style={{ padding: '24px 28px' }}>
              {producerUser ? (
                <div style={{ background: '#F8FAF7', border: '1.5px solid #B8DACB', borderRadius: 14, padding: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ background: '#10B981', color: '#FFF', padding: '3px 10px', borderRadius: 9999, fontSize: '0.75rem', fontWeight: 700 }}>✅ Verified Producer</span>
                    <span style={{ background: '#D1FAE5', color: '#065F46', padding: '3px 8px', borderRadius: 6, fontSize: '0.75rem', fontWeight: 700 }}>📍 GPS Field Geotagged</span>
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0A2C22', margin: '6px 0 2px' }}>{producerUser.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#5B6E66', marginBottom: 14 }}>{producerUser.role}</p>
                  <p style={{ fontSize: '0.875rem', color: '#0D382A', fontWeight: 700 }}>Project: {producerUser.project}</p>
                  <p style={{ fontSize: '0.85rem', color: '#065F46' }}>Status: {producerUser.status}</p>
                  <p style={{ fontSize: '0.85rem', color: '#64748B' }}>Wallet: {producerUser.wallet}</p>
                  <button onClick={() => setProducerUser(null)} style={{ marginTop: 14, width: '100%', background: '#0D382A', color: '#FFF', padding: 10, borderRadius: 9999, border: 'none', fontWeight: 700, cursor: 'pointer' }}>
                    Logout Producer Session
                  </button>
                </div>
              ) : farmerTab === 'farmer' ? (
                <div>
                  <button onClick={handleDemoFarmer} style={{ width: '100%', background: '#B45309', color: '#FFF', padding: 10, borderRadius: 8, border: 'none', fontWeight: 700, cursor: 'pointer', marginBottom: 14, fontSize: '0.85rem' }}>
                    ⚡ 1-Click Demo Login as Rafiqul Islam (Gazipur Poultry)
                  </button>
                  <p style={{ fontSize: '0.85rem', color: '#5B6E66', marginBottom: 12 }}>
                    Standard Shariah Terms: <strong>65% Farmer</strong> / 35% Ethical Investors (Mudarabah Profit-and-Loss Sharing)
                  </p>
                  <button onClick={handleDemoFarmer} style={{ width: '100%', background: '#0D382A', color: '#FFF', padding: 12, borderRadius: 9999, border: 'none', fontWeight: 700, cursor: 'pointer' }}>
                    🌾 Submit Farm Proposal / Login
                  </button>
                </div>
              ) : (
                <div>
                  <button onClick={handleDemoArtisan} style={{ width: '100%', background: '#9D174D', color: '#FFF', padding: 10, borderRadius: 8, border: 'none', fontWeight: 700, cursor: 'pointer', marginBottom: 14, fontSize: '0.85rem' }}>
                    ⚡ 1-Click Demo Login as Fatima Begum (Nakshi Kantha)
                  </button>
                  <p style={{ fontSize: '0.85rem', color: '#5B6E66', marginBottom: 12 }}>
                    Handicrafts: Nakshi Kantha, Jute Bags & Bamboo Homeware sold directly to customers across Bangladesh.
                  </p>
                  <button onClick={handleDemoArtisan} style={{ width: '100%', background: '#0D382A', color: '#FFF', padding: 12, borderRadius: 9999, border: 'none', fontWeight: 700, cursor: 'pointer' }}>
                    🧵 Open Artisan Marketplace Store
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* INVESTOR PROFILE & DASHBOARD OVERLAY (PHOTOS 1, 2, 3) */}
      {isInvestorDashOpen && (
        <div 
          className="investor-dashboard-view active"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            background: '#EDF7F2',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}
        >
          {/* PHOTO 1: SIDEBAR (#02221A DEEP DARK GREEN) */}
          <aside 
            className="dash-sidebar" 
            style={{
              width: 250,
              backgroundColor: '#02221A',
              color: '#FFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '24px 16px',
              flexShrink: 0
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '4px 8px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: 20 }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#0B4434', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.5px solid #10B981' }}>
                  🌱
                </div>
                <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFF', fontFamily: 'Georgia, serif' }}>Gram-Bondhon</span>
              </div>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  { key: 'dashboard', label: 'Dashboard', icon: '🔲' },
                  { key: 'projects', label: 'Projects', icon: '🚜' },
                  { key: 'marketplace', label: 'Marketplace', icon: '🏪' },
                  { key: 'financials', label: 'Financials', icon: '💵' },
                  { key: 'airisk', label: 'AI Based Risk Analysis', icon: '📈' },
                  { key: 'settings', label: 'Settings', icon: '⚙️' },
                  { key: 'support', label: 'Support', icon: '❓' },
                ].map(item => (
                  <button 
                    key={item.key} 
                    onClick={() => setInvestorDashTab(item.key)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '10px 14px',
                      borderRadius: 10,
                      background: investorDashTab === item.key ? '#FFFFFF' : 'transparent',
                      color: investorDashTab === item.key ? '#02221A' : '#D1D5DB',
                      fontWeight: investorDashTab === item.key ? 700 : 500,
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '0.875rem'
                    }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <button 
                onClick={() => alert('Feedback submitted! Thank you.')}
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderRadius: 10, background: 'transparent', color: '#FBBF24', border: 'none', cursor: 'pointer', fontSize: '0.875rem' }}
              >
                <span>⚠️</span>
                <span>FeedBack GIVE</span>
              </button>

              <button 
                onClick={() => {
                  setIsLoggedIn(false);
                  setIsInvestorDashOpen(false);
                }}
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderRadius: 10, background: 'transparent', color: '#FCA5A5', border: 'none', cursor: 'pointer', fontSize: '0.875rem' }}
              >
                <span>🚪</span>
                <span>Logout</span>
              </button>
            </div>
          </aside>

          {/* MAIN AREA */}
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {/* PHOTO 2: TOP NAVBAR */}
            <header style={{ background: '#FFF', borderTop: '4px solid #02221A', borderBottom: '1px solid #E2E8F0', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #64748B', borderRadius: 9999, padding: '6px 16px', width: 340, background: '#FFF' }}>
                  <span>🔍</span>
                  <input type="text" placeholder="Search projects..." style={{ border: 'none', outline: 'none', width: '100%', fontSize: '0.85rem' }} />
                </div>
                <button 
                  onClick={() => setIsInvestorDashOpen(false)}
                  style={{ background: '#E8F5EE', border: '1px solid #A7F3D0', color: '#065F46', padding: '6px 14px', borderRadius: 8, fontSize: '0.825rem', fontWeight: 700, cursor: 'pointer' }}
                >
                  ← Back to Active Projects
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ cursor: 'pointer' }}>🔔</span>
                <span style={{ cursor: 'pointer' }}>❓</span>
                <div style={{ width: 1, height: 24, background: '#E2E8F0' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Investor User</span>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', border: '2px solid #10B981', background: '#02221A', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>
                    TR
                  </div>
                </div>
              </div>
            </header>

            {/* PHOTO 3: PORTFOLIO OVERVIEW */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px 32px 60px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#06281E', margin: 0 }}>Portfolio Overview</h1>
                  <p style={{ fontSize: '0.85rem', color: '#52635C', margin: 0 }}>Real-time performance metrics for AgroVest Bangladesh operations.</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ background: '#E8F5EE', color: '#0D684D', padding: '4px 12px', borderRadius: 9999, fontSize: '0.775rem', fontWeight: 700, border: '1px solid #A7F3D0' }}>
                    ● Live Updates
                  </span>
                  <button onClick={() => alert('Exporting PDF...')} style={{ background: '#FFF', border: '1px solid #CBD5E1', padding: '6px 14px', borderRadius: 8, fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}>
                    Export PDF
                  </button>
                </div>
              </div>

              {/* CONDITIONAL DASHBOARD TABS */}
              {investorDashTab === 'marketplace' ? (
                <div>
                  <div style={{ background: 'linear-gradient(135deg, #02221A 0%, #064E3B 100%)', borderRadius: 16, padding: '24px 28px', color: '#FFF', marginBottom: 20 }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 6px 0' }}>Village Marketplace • গ্রামীণ হস্তশিল্প ও কৃষি বাজার</h2>
                    <p style={{ fontSize: '0.875rem', margin: 0, opacity: 0.9 }}>Direct fair-trade goods produced by our vetted rural farmers & women artisan cooperatives across Bangladesh.</p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
                    {ACTIVE_PROJECTS.slice(0, 8).map(p => (
                      <div key={p.id} style={{ background: '#FFF', borderRadius: 12, overflow: 'hidden', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
                        <img src={p.image} alt={p.name} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
                        <div style={{ padding: 14, display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                          <div>
                            <h4 style={{ fontSize: '0.925rem', fontWeight: 700, margin: '0 0 4px 0', color: '#06281E' }}>{p.name}</h4>
                            <p style={{ fontSize: '0.775rem', color: '#64748B', margin: '0 0 10px 0' }}>{p.bengaliName}</p>
                          </div>
                          <div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#047857', marginBottom: 10 }}>৳ {p.pricePerShareBDT.toLocaleString()}</div>
                            <button onClick={() => alert(`Added ${p.name} to bag!`)} style={{ width: '100%', background: '#02221A', color: '#FFF', border: 'none', padding: '8px 12px', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: '0.8rem' }}>
                              + Add to Bag
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {/* ROW 1: THREE FINANCIAL CARDS (STRICTLY UNDER 5 LAKH) */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 18 }}>
                    <div style={{ background: '#05261C', color: '#FFF', borderRadius: 14, padding: 20 }}>
                      <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Total Investment (Till Now)</div>
                      <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>৳ 450,000</div>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: 10 }}>Annual Investment: ৳ 320,000</div>
                    </div>

                    <div style={{ background: '#E8F5EF', borderRadius: 14, padding: 20, border: '1px solid #D1EADE' }}>
                      <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Total Profit (Till Now)</div>
                      <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#064E3B' }}>৳ 68,500</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: 10 }}>Annual Profit: ৳ 48,200</div>
                    </div>

                    <div style={{ background: '#DCF0E8', borderRadius: 14, padding: 20, border: '1px solid #C3E7D8' }}>
                      <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Total Account Balance (Pool)</div>
                      <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#064E3B' }}>৳ 185,000</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: 10 }}>Savings: ৳ 120,000 • Insurance: ৳ 65,000</div>
                    </div>
                  </div>

                  {/* ROW 2: CRITICAL SQUARE PROJECT STATUS BOXES */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 24 }}>
                    <div style={{ background: '#FFF', borderRadius: 14, padding: 20, border: '1px solid #E2E8F0', borderLeft: '4px solid #F59E0B' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#D97706' }}>RECENT PROJECTS</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#B45309' }}>3</div>
                      <div style={{ fontSize: '0.775rem', color: '#475569', marginTop: 4 }}>Invested, not started yet</div>
                    </div>

                    <div style={{ background: '#FFF', borderRadius: 14, padding: 20, border: '1px solid #E2E8F0', borderLeft: '4px solid #3B82F6' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2563EB' }}>ONGOING PROJECTS</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#1D4ED8' }}>5</div>
                      <div style={{ fontSize: '0.775rem', color: '#475569', marginTop: 4 }}>Invested, deploying on field</div>
                    </div>

                    <div style={{ background: '#FFF', borderRadius: 14, padding: 20, border: '1px solid #E2E8F0', borderLeft: '4px solid #10B981' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#059669' }}>COMPLETED PROJECTS</div>
                      <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#047857' }}>8</div>
                      <div style={{ fontSize: '0.775rem', color: '#475569', marginTop: 4 }}>Finished & received money</div>
                    </div>
                  </div>

                  {/* MIDDLE: MAP & DONUT */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 18, marginBottom: 24 }}>
                    <div style={{ background: '#FFF', borderRadius: 14, padding: 20, border: '1px solid #E2E8F0' }}>
                      <h3 style={{ fontSize: '1.05rem', margin: '0 0 12px 0', color: '#06281E' }}>Geographical Distribution</h3>
                      <div style={{ background: '#2D584C', borderRadius: 10, height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FDE68A', fontWeight: 700 }}>
                        Sylhet (৳12.4M) • Rangpur (৳8.1M) • Chittagong (৳24.6M) • Rajshahi (৳15.2M)
                      </div>
                    </div>

                    <div style={{ background: '#FFF', borderRadius: 14, padding: 20, border: '1px solid #E2E8F0', textAlign: 'center' }}>
                      <h3 style={{ fontSize: '1.05rem', margin: '0 0 12px 0', color: '#06281E' }}>Quarterly Platform Profit</h3>
                      <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#06281E', margin: '20px 0' }}>৳ 4.2M</div>
                      <div style={{ fontSize: '0.8rem', color: '#475569' }}>
                        Farmers 35% • Women 30% • Investors 25% • Platform 10%
                      </div>
                    </div>
                  </div>

                  {/* LOWER: PERSONAL INVESTOR ACTIVITY TABLE & SUMMARY */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 18 }}>
                    <div style={{ background: '#FFF', borderRadius: 14, padding: 20, border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                        <h3 style={{ fontSize: '1.05rem', margin: 0, color: '#06281E' }}>My Recent Investment Activity</h3>
                        <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700 }}>Verified Ledger</span>
                      </div>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                        <thead>
                          <tr style={{ borderBottom: '1px solid #E2E8F0', color: '#64748B', textAlign: 'left' }}>
                            <th style={{ padding: '8px 10px' }}>Transaction</th>
                            <th style={{ padding: '8px 10px' }}>Destination</th>
                            <th style={{ padding: '8px 10px' }}>Status</th>
                            <th style={{ padding: '8px 10px' }}>Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                            <td style={{ padding: '10px' }}><strong>Dividend Payout Credited (+৳8,200)</strong></td>
                            <td style={{ padding: '10px' }}>bKash Wallet</td>
                            <td style={{ padding: '10px', color: '#047857', fontWeight: 700 }}>COMPLETED</td>
                            <td style={{ padding: '10px', color: '#64748B' }}>Today, 11:30 AM</td>
                          </tr>
                          <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                            <td style={{ padding: '10px' }}><strong>Investment Confirmed: Poultry (৳50,000)</strong></td>
                            <td style={{ padding: '10px' }}>Gazipur Farm</td>
                            <td style={{ padding: '10px', color: '#2563EB', fontWeight: 700 }}>LIVE</td>
                            <td style={{ padding: '10px', color: '#64748B' }}>Yesterday</td>
                          </tr>
                          <tr>
                            <td style={{ padding: '10px' }}><strong>Field Audit Passed: Rice Cluster</strong></td>
                            <td style={{ padding: '10px' }}>Rangpur Site</td>
                            <td style={{ padding: '10px', color: '#D97706', fontWeight: 700 }}>VERIFIED</td>
                            <td style={{ padding: '10px', color: '#64748B' }}>2 days ago</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div style={{ background: '#FFF', borderRadius: 14, padding: 20, border: '1px solid #E2E8F0' }}>
                      <h3 style={{ fontSize: '1.05rem', margin: '0 0 14px 0', color: '#06281E' }}>My Portfolio Summary & Payouts</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#F8FAFC', borderRadius: 8, fontSize: '0.8rem' }}>
                          <span>🌾 Active Farming Projects</span>
                          <strong>8 Backed</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#F8FAFC', borderRadius: 8, fontSize: '0.8rem' }}>
                          <span>💰 Total Returns Credited</span>
                          <strong style={{ color: '#047857' }}>৳ 68,500</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#F8FAFC', borderRadius: 8, fontSize: '0.8rem' }}>
                          <span>📅 Next Projected Payout</span>
                          <strong>15 Oct 2026</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#F8FAFC', borderRadius: 8, fontSize: '0.8rem' }}>
                          <span>📜 Shariah Compliance</span>
                          <strong style={{ color: '#10B981' }}>100% Halal Asset-Backed</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </main>
        </div>
      )}

    </div>
  );
}

export default GramBondhonHome;
