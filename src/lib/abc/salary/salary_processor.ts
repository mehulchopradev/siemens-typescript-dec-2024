import SalariedIndividual from './salaried_individual';

export default function processSalary(
  individual: SalariedIndividual
): number {
  const cost = 
  individual.getCostPerDay() * individual.getWorkingDays();
  const pt = 200;
  const costExcludePT = cost - pt;
  const tds = costExcludePT * 0.1;
  return costExcludePT - tds;
}