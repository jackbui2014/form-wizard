import { defineStore } from "pinia";
import countries from "../assets/data/countries.json";
import packages from "../assets/data/packages.json";
export const useMultipleStepsStore = defineStore({
  id: "multipleSteps",
  state: () => ({
    userName: "",
    userAge: 0,
    selectedPackage: "sku0",
    userCountry: "HKD",
  }),
  getters: {
    userCountryObj(state) {
      return countries.find((item: any) => item.value === state.userCountry);
    },
    selectedPackageObj(state) {
      return packages.find((item: any) => item.sku === state.selectedPackage);
    },
    calculatedPremium(state): number {
      let premium = 0;
      const rate = this?.userCountryObj?.rate ? this.userCountryObj.rate : 1;
      premium = 10 * state.userAge * rate;
      return premium;
    },
    calculatePackageAdditional(): number {
      const packagePercentage = this?.selectedPackageObj?.percentages
        ? this.selectedPackageObj.percentages
        : 0;
      const packageAdditional =
        (this.calculatedPremium * packagePercentage) / 100;
      return packageAdditional;
    },
    calculatedPremiumText(state): string {
      const finalPremium =
        this.calculatedPremium + this.calculatePackageAdditional;
      return finalPremium.toString() + " " + state.userCountry;
    },
    calculatedPackageDescription(state): object {
      return packages.map((item) => {
        let des = "";
        if (item.sku !== "sku0") {
          const itemPercentages = item?.percentages ? item.percentages : 0;
          const packageAdditional =
            (this.calculatedPremium * itemPercentages) / 100;
          if (packageAdditional > 0) {
            des =
              "+" +
              packageAdditional.toString() +
              state.userCountry +
              ", " +
              itemPercentages.toString() +
              "%";
          } else {
            des = itemPercentages.toString() + "%";
          }
        }
        return { ...item, description: des };
      });
    },
    errorData(state) {
      if (state.userAge > 100) {
        return true;
      }
      return false;
    },
  },
  actions: {
    getAllCountries() {
      return countries;
    },
    getAllPackages() {
      return packages;
    },
  },
});
