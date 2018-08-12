const convert = {
  getValue: function(object, key) {
    return convert[object][key];
  },

  sentiment: {
    GoodService: "happy-dancing",
    MinorDelays: "whatever",
    ReducedService: "whatever",
    PlannedClosure: "crying",
    PartClosure: "crying",
    SevereDelays: "screaming",
    Suspended: "wtf",
    PartSuspended: "wtf",
    BusService: "bus",
    SpecialService: "nope"
  },

  emoji: {
    GoodService: " 🎉😍🎉",
    MinorDelays: " 🙄🙄🙄",
    ReducedService: " 🤨🤨🤨",
    PlannedClosure: " 😩😫😖",
    PartClosure: " 😩😫😖",
    SevereDelays: " 😬😡😭",
    Suspended: " 😠🤬👊",
    PartSuspended: " 😠🤬👊",
    BusService: " 🚌🚌🚌",
    SpecialService: " 🤔🤔🤔"
  },

  logoColor: {
    bakerloo: "rgba(174, 97, 24, 1.0)",
    central: "rgba(228, 31, 31, 1.0)",
    circle: "rgba(248, 212, 45, 1.0)",
    district: "rgba(0, 165, 117, 1.0)",
    ["hammersmith-city"]: "rgba(232, 153, 168, 1.0)",
    jubilee: "rgba(143, 152, 158, 1.0)",
    metropolitan: "rgba(137, 50, 103, 1.0)",
    northern: "rgba(0, 0, 0, 1.0)",
    piccadilly: "rgba(4, 80, 161, 1.0)",
    victoria: "rgba(0, 159, 224, 1.0)",
    ["waterloo-city"]: "rgba(112, 195, 206, 1.0)",
    dlr: "rgba(0, 187, 180, 1.0)",
    ["london-overground"]: "rgba(248, 108, 0, 1.0)",
    ["tfl-rail"]: "rgba(4, 80, 161, 1.0)"
  },

  backgroundColor: {
    bakerloo: "rgba(174, 97, 24, 0.1)",
    central: "rgba(228, 31, 31, 0.1)",
    circle: "rgba(248, 212, 45, 0.1)",
    district: "rgba(0, 165, 117, 0.1)",
    ["hammersmith-city"]: "rgba(232, 153, 168, 0.1)",
    jubilee: "rgba(143, 152, 158, 0.1)",
    metropolitan: "rgba(137, 50, 103, 0.1)",
    northern: "rgba(0, 0, 0, 0.1)",
    piccadilly: "rgba(4, 80, 161, 0.1)",
    victoria: "rgba(0, 159, 224, 0.1)",
    ["waterloo-city"]: "rgba(112, 195, 206, 0.1)",
    dlr: "rgba(0, 187, 180, 0.1)",
    ["london-overground"]: "rgba(248, 108, 0, 0.1)",
    ["tfl-rail"]: "rgba(4, 80, 161, 0.1)"
  }
};
