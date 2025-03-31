import type { Alpine } from "alpinejs";

export default (Alpine: Alpine) => {
  Alpine.data("demo", () => {
    return {
      toggle: () => {
        console.log("toggle");
      },
    };
  });
};
