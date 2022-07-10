import mixpanel from "mixpanel-browser";

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, {
    persistence: "localStorage",
    secure_cookie: true,
});

const Mixpanel = {
    identify: (id) => {
        mixpanel.identify(id);
    },
    alias: (id) => {
        mixpanel.alias(id);
    },
    track: (name, props) => {
        mixpanel.track(name, props);
    },
    people: {
        set: (props) => {
            mixpanel.people.set(props);
        }
    },
    TYPES: {
        OPEN_ADD_DEVICE_BUTTON: "OPEN_ADD_DEVICE_BUTTON",
        OPEN_DEVICE_DETAILS: "OPEN_DEVICE_DETAILS",
        OPEN_DEVICE_QR: "OPEN_DEVICE_QR",
        GO_TO_PROFILE: "GO_TO_PROFILE",
        USER_LOGIN_ECCIPASS: "USER_LOGIN_ECCIPASS",
        USER_HELP_ECCIPASS: "USER_HELP_ECCIPASS",
    }
};

export default Mixpanel;