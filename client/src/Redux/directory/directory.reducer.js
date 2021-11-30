const INITIAL_STATE = {
  sections: [
    {
      title: "x-small",
      imageUrl: "https://i.ibb.co/rpQqF2v/Dubiaxsm.png",
      name: "Xtra small roaches",
      description: "Roaches of the smallest size.",
      id: 1,
      price: 10,
      linkUrl: "extrasmalldubia",
    },
    {
      title: "small",
      imageUrl: "https://i.ibb.co/VQPhhWB/sm-Dubia-Half-Inch.png",
      name: "small roaches",
      description: "Small dubia roaches.",
      id: 2,
      price: 10,
      linkUrl: "smalldubia",
    },
    {
      title: "medium",
      imageUrl: "https://i.ibb.co/gtQpzXM/med-Dubia-Three-Forths.png",
      name: "Medium",
      description: "Medium Roaches.",
      id: 3,
      price: 15,
      linkUrl: "mediumdubia",
    },
    {
      title: "large",
      imageUrl: "https://i.ibb.co/8DshsJX/lrgDubia.png",
      name: "Large Roaches",
      description: " Large Adult Roaches .",
      size: "large",
      id: 4,
      price: 20,
      linkUrl: "largedubia",
    },
    {
      title: "x-Large",
      imageUrl: "https://i.ibb.co/LdmJ154/xlDubia.png",
      name: "Extra Large Roaches",
      description: "Roaches of the maximum size.",
      size: "large",
      id: 5,
      price: 25,
      linkUrl: "xldubia",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.state) {
    default:
      return state;
  }
};

export default directoryReducer;
