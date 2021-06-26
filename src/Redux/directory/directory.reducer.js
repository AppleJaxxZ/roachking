const INITIAL_STATE = {
    sections: [
        {
            title: "xtrasmall",
            imageUrl: "https://i.ibb.co/B6kqz46/xsmDubia.png",
            id: 1,
            linkUrl: "shop/hats",
        },
        {
            title: "small1/2'",
            imageUrl: "https://i.ibb.co/mJN7GJt/sm-Dubia-Half-Inch.png",
            id: 2,
            linkUrl: "shop/jackets",
        },
        {
            title: "medium5/8",
            imageUrl: "https://i.ibb.co/DRvM2RM/med-Dubia-Five-Eights.png",
            id: 3,
            linkUrl: "shop/sneakers",
        },
        {
            title: "large",
            imageUrl: "https://i.ibb.co/hK32xt3/lrgDubia.png",
            size: "large",
            id: 4,
            linkUrl: "shop/womens",
        },
        {
            title: "extraLarge",
            imageUrl: "https://i.ibb.co/8mPVyXS/xlDubia.png",
            size: "large",
            id: 5,
            linkUrl: "shop/mens",
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
