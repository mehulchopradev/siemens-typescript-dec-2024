import SalariedIndividual from '../abc/salary/salaried_individual';
import CollegeUser from './college_user';

export default class Professor extends CollegeUser implements SalariedIndividual {
  constructor(
    name: string,
    gender: string,
    private noOfWorkingDays: number,
    private costPerDay: number,
    private subjects?: string[],
  ) {
    super(name, gender);
  }
  getCostPerDay(): number {
    return this.costPerDay;
  }
  getWorkingDays(): number {
    return this.noOfWorkingDays;
  }
}