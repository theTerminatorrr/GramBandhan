/* ===================================================================
   Grambandhan — Risk Suggestion Engine
   ---------------------------------------------------------------
   IMPORTANT (per dev guide, section E / Prompt 8): this is a
   transparent, rule-based WEIGHTED-SCORING heuristic — NOT a trained
   ML model. It is an honest, documented substitute appropriate for a
   lab project. A future iteration could replace this function with a
   model trained on historical project-outcome data (e.g. logistic
   regression or gradient boosting over completed projects' features),
   while keeping the same output shape so the UI doesn't need to change.
   =================================================================== */

// crop base-risk weights: rough proxy for weather/market volatility
const GB_CROP_RISK = {
  'Rice': 15, 'Maize': 20, 'Potato': 35, 'Mixed Vegetables': 30,
  'Jute': 25, 'Wheat': 18, 'Fish/Aquaculture': 40, 'Poultry': 32,
  'Handicraft': 10, 'Other': 25,
};

function gbComputeRisk({ cropType, budget, timelineStart, timelineEnd, completionRate, location }) {
  let score = 0; // 0 (lowest risk) .. 100 (highest risk)
  const notes = [];

  // 1) Crop/category volatility — weight 30%
  const cropRisk = GB_CROP_RISK[cropType] != null ? GB_CROP_RISK[cropType] : 25;
  score += cropRisk * 0.30;

  // 2) Budget size — larger asks carry more execution risk — weight 25%
  const budgetNum = Number(budget) || 0;
  let budgetRisk;
  if (budgetNum <= 50000) budgetRisk = 10;
  else if (budgetNum <= 150000) budgetRisk = 25;
  else if (budgetNum <= 300000) budgetRisk = 45;
  else budgetRisk = 65;
  score += budgetRisk * 0.25;

  // 3) Timeline length — very short or very long timelines add risk — weight 20%
  let weeks = 12;
  if (timelineStart && timelineEnd) {
    const start = new Date(timelineStart), end = new Date(timelineEnd);
    weeks = Math.max(1, Math.round((end - start) / (7 * 24 * 3600 * 1000)));
  }
  let timelineRisk;
  if (weeks < 6) timelineRisk = 55;
  else if (weeks <= 20) timelineRisk = 20;
  else if (weeks <= 40) timelineRisk = 30;
  else timelineRisk = 50;
  score += timelineRisk * 0.20;

  // 4) Farmer's historical completion rate — weight 20% (missing history = neutral-cautious)
  let complRisk;
  if (completionRate == null) complRisk = 40;
  else if (completionRate >= 0.9) complRisk = 5;
  else if (completionRate >= 0.7) complRisk = 20;
  else if (completionRate >= 0.4) complRisk = 45;
  else complRisk = 75;
  score += complRisk * 0.20;

  // 5) Location — flood-prone districts flagged as a mild add-on — weight 5%
  const floodProne = ['Sirajganj', 'Kurigram', 'Jamalpur', 'Bogura', 'Gaibandha'];
  const locRisk = location && floodProne.some(d => location.includes(d)) ? 60 : 15;
  score += locRisk * 0.05;

  score = Math.round(Math.min(100, Math.max(0, score)));
  const level = score < 34 ? 'LOW' : score < 62 ? 'MEDIUM' : 'HIGH';

  if (cropRisk >= 30) notes.push(`${cropType || 'This crop'} tends to have higher price/weather volatility — consider insurance coverage.`);
  if (budgetRisk >= 45) notes.push('This is a large funding ask relative to typical projects — look for a detailed budget breakdown.');
  if (timelineRisk >= 50) notes.push(weeks < 6 ? 'A very short timeline increases execution pressure.' : 'A long timeline increases exposure to market/weather shifts — expect more frequent progress updates.');
  if (complRisk >= 45) notes.push('Limited or mixed track record on past projects — weight field-agent verification heavily.');
  if (locRisk >= 60) notes.push('Project location has historical flood exposure — factor this into risk appetite.');
  if (notes.length === 0) notes.push('No major risk flags detected by the heuristic — still review progress updates regularly.');

  return { score, level, suggestions: notes.slice(0, 3) };
}
