import * as profilePageActionType from './actionTypes';

const INITIAL_STATE = {
    isGetInfoPending: false,
    user: null,
    getUserInfoError: null
};

export default function profilePageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case profilePageActionType.GET_USER_INFO_START:
            return {
                ...state,
                isGetInfoPending: true,
                getUserInfoError: null
            };
        case profilePageActionType.GET_USER_INFO_FAILED:
            return {
                ...state,
                isGetInfoPending: false,
                getUserInfoError: action.payload.err
            };
        case profilePageActionType.GET_USER_INFO_SUCCESS:
            return {
                ...state,
                getUserInfoError: null,
                isGetInfoPending: false,
                user: {
                    ...state.user,
                    ...action.payload
                }
            };
        default:
            return state;
    }
};


/*{
  "status": "ok",
  "data": {
    "userId": 1,
    "city": "Москва",
    "languages": [
      "English",
      "Русский"
    ],
    "social": [
      {
        "label": "vk",
        "link": "vk.com/maxpfrontend"
      },
      {
        "label": "telegram",
        "link": "t.me/maxpfrontend"
      },
      {
        "label": "web",
        "link": "https://maxpfrontend.ru"
      },
      {
        "label": "youtube",
        "link": "https://www.youtube.com/channel/UCqJyAVWwIqPWKEkfCSP1y4Q" },
      {
        "label": "twitter",
        "link": "https://twitter.com/MaxPatsiansky"
      },
      {
        "label": "twitch",
        "link": "http://twich.tv/maxpfrontend"
      }
    ]
  }
}*/