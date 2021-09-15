import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "John",
          lastName: "Doe",
          areas: ["swimming", "running", "football", "dance"],
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam totam vel adipisci iste a et quod, soluta assumenda ipsam necessitatibus.",
          hourlyRate: 30,
        },
        {
          id: "c1",
          firstName: "Karen",
          lastName: "Gillan",
          areas: ["swimming", "running", "dance"],
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, quae pariatur eos corporis quos earum sapiente hic cupiditate tenetur, sunt quibusdam sequi, ad incidunt non?",
          hourlyRate: 70,
        },
        {
          id: "c1",
          firstName: "Emily",
          lastName: "Blunt",
          areas: ["swimming", "running"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, tempore. Obcaecati rerum esse perferendis nisi sed inventore, minus ex cum enim laboriosam, labore at repellat, architecto quaerat aliquam velit fugit?",
          hourlyRate: 40,
        },
        {
          id: "c1",
          firstName: "Dwayne",
          lastName: "Johnson",
          areas: ["acting", "dance", "wrestling"],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illum, necessitatibus hic sit neque veritatis.",
          hourlyRate: 20,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
