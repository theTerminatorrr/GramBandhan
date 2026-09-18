/**
 * GramBandhan - Projects Module
 * Powers the 30 verified projects directory, bilingual Mudarabah return indicators,
 * and the interactive Investment Return Calculator simulator.
 */
export class ProjectsModule {
  openCalculator(projectId) {
    if (window.gramBondhon?.projects) {
      window.gramBondhon.projects.openInvestmentCalculator(projectId);
    }
  }
}
