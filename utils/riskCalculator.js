export function calculateRisk(aqi) {
  if (aqi <= 50) return "Low";
  if (aqi <= 150) return "Moderate";
  return "High";
}